


months = {
    '1':'January',
    '2':'February',
    '3':'March',
    '4':'April',
    '5':'May',
    '6':'June',
    '7':'July',
    '8':'August',
    '9':'September',
    '10':'October',
    '11':'November',
    '12':'December'
}


exports.conversorData = function (data){
    var s = data.split('-')
    var year = s[0];
    var month = months[s[1]];
    var day = s[2];
  
    return `${month} ${day} ${year}`

}
