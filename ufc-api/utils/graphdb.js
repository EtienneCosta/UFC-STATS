var axios = require('axios')

var prefixes = `
PREFIX : <http://www.di.uminho.pt/prc2021/ufc#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>`

exports.execQuery = async function (query){
    var getLink = "http://localhost:7200/repositories/ufc?query="
    var encoded = encodeURIComponent(prefixes + query)
    var result = await axios.get(getLink + encoded)
    return result.data
}

exports.execTransaction = async function(query){
    var postLink = "http://localhost:7200/repositories/ufc/statements"
    var encoded = encodeURIComponent(prefixes + query)
    try{
        var response = await axios.post(postLink, `update=${encoded}`)
        return response.data
    }
    catch(error){
        throw(error)
    }
}
