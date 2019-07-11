var temp = 0;

function fahc()
{
    temp = 0;
    v = document.getElementById("command").value;
    temp = (v - 32)* (5/9);

    if(temp < 0)
    {
        var img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzZQqmtRI1n9pge2HsJcRco5KCJ9sfzNccAsXu6XCJVsg-_6V";
        img.height = 60;
        img.width = 60;

        var src = document.getElementById("snowflake");
        src.appendChild(img);

        document.getElementById("message").innerHTML = "Temperature: " + temp + "°C";
    }
    else
    {
        document.getElementById("message").innerHTML = "Temperature: " + temp + "°C";
    }
}

function celf(){
    temp = 0;
    v = document.getElementById("command2").value;
    temp = (v*1.8) + +32;

    if(temp < 32)
    {
        var img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzZQqmtRI1n9pge2HsJcRco5KCJ9sfzNccAsXu6XCJVsg-_6V";
        img.height = 60;
        img.width = 60;

        var src = document.getElementById("snowflake2");
        src.appendChild(img);

        document.getElementById("message2").innerHTML = "Temperature: " + temp + "°F";
    }
    else
    {
        document.getElementById("message2").innerHTML = "Temperature: " + temp + "°F";
    }
}