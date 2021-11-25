var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function getEmployee(){
    var tble =  $("<table></table>");
    for (let i = 0; i < 5; i++){
        var tr = $("<tr></tr>");
        var tc1 = $("<td></td>").text(i);
        var tc2 = $("<td></td>").text(i*10);
        var tc3 = $("<td></td>").text(i*100);
        tr.append(tc1,tc2,tc3);
        tble.append(tr);
    }
    $('.my-display').append(tble);
}

$(document).ready(function(){
    getEmployee();
});