// ==UserScript==
// @name         Slither Client Script
// @namespace    lel
// @version      0.02
// @description  to be writen
// @author       SrNicolas
// @license      MIT
// @match        http://agar.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @grant        none
// @run-at       document-start
// ==/UserScript==
var currentIP = bso.ip;
var socket = io.connect('ws://127.0.0.1:6969')
var boost = false;
var ServerIP = "";
var client_uuid = localStorage.getItem('UUID');
    if (client_uuid == null) {
        console.log("New UUID Generated");
        client_uuid = ""; var ranStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var ii = 0; ii < 7; ii++) client_uuid += ranStr.charAt(Math.floor(Math.random() * ranStr.length));
        localStorage.setItem('client_uuid', client_uuid)
    }

function SendIp () {
    if(ServerIP != currentIP)
    serverIP = currentIP
    socket.emit("ip", {
        "ip": currentIP,
        "x": snake.xx,
        "y": snake.yy
    });
}

function BoostBots () {
    if (boost === false) {
        socket.emit("StopBoost");
    }
    if (boost === true) {
        socket.emit("StartBoost");
    }
    
}

function sendCoords() {
    socket.emit("coords", {
        "x": snake.xx,
        "y": snake.yy
    })
}

socket.on("force-login", function(data) {
    
    socket.emit("login", {
        "ClientIdentificator": client_uuid,
        "type": "client"
    })
    
        
    })
    
