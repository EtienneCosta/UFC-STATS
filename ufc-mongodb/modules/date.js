exports.myDateTime = function (data) {
    var x=data.split("T");
    var date = x[0];
    var time = x[1];
    var formatdate =date.split("-");
    var year   =  formatdate[0];
    var month  =  parseInt(formatdate[1]);
    var day    =  formatdate[2];
    var months = ["January","February","March","April","May", "June","July","August","September","October","November","December"]
    var today = (months[month-1])+" "+day+", "+year+" at "+time
    return today;
}