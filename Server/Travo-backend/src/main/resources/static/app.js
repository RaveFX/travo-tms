const url = "http://127.0.0.1:8080";
var stompClient = null;

function setConnected(connected) {
    document.getElementById("connect").disabled = connected;
    document.getElementById("disconnect").disabled = !connected;
    if (connected) {
        document.getElementById("conversation").style.display = "block";
    } else {
        document.getElementById("conversation").style.display = "none";
    }
    document.getElementById("userinfo").innerHTML = "";
}

function connect() {
    // Connect to the WebSocket server at /ws
//    var socket = new WebSocket('ws://localhost:8080/ws');
console.log("connecting to chat...")
    let socket = new SockJS(url + '/ws');

    socket.onopen = function (event) {
        setConnected(true);
        console.log('Connected');
    };
    socket.onmessage = function (event) {
        showGreeting(JSON.parse(event.data).content);
    };
    stompClient = socket;
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.close();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    var message = {
        'name': document.getElementById("name").value
    };
    stompClient.send("/app/user", {}, JSON.stringify(message));
}

function showGreeting(message) {
    var userinfo = document.getElementById("userinfo");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(message));
    tr.appendChild(td);
    userinfo.appendChild(tr);
}

document.addEventListener("DOMContentLoaded", function () {
    var forms = document.getElementsByTagName("form");
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", function (e) {
            e.preventDefault();
        });
    }

    var connectButton = document.getElementById("connect");
    var disconnectButton = document.getElementById("disconnect");
    var sendButton = document.getElementById("send");

    connectButton.addEventListener("click", connect);
    disconnectButton.addEventListener("click", disconnect);
    sendButton.addEventListener("click", sendName);
});
