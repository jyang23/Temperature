var temp = 0;


function fahc()
{
    temp = 0;
    v = document.getElementById("command").value;
    temp = (v - 32)* (5/9);
    document.getElementById("message").innerHTML = "Temperature: " + temp + "°C";
}

function celf(){
    v = document.getElementById("command2").value;
    temp = (v*1.8) + +32;
    document.getElementById("message2").innerHTML = "Temperature: " + temp + "°F";

}