const moment = require("moment");

var myDate = new Date();
var myMoment = moment(myDate).format();

console.log(myMoment);