// ==UserScript==
// @name         background_js_video
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  ...
// @author       You
// @match        https://*.github.com/*
// @match        http://*.github.com/*
// @match        https://*.google.fr/*
// @match        http://*.google.fr/*
// @match        https://*.google.com/*
// @match        http://*.google.com/*
// @match        https://*.youtube.com/*
// @match        http://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @downloadURL  https://raw.githubusercontent.com/justUmen/monkeys/main/background_js_video.js
// @updateURL  https://raw.githubusercontent.com/justUmen/monkeys/main/background_js_video.js
// ==/UserScript==
var VIDEO = document.createElement('video');
function page_blur(){
    document.getElementById("background-video-player").pause();
}
function page_focus(){
    //Do not play if youtube is playing too
    var YOUTUBE=document.querySelector("#movie_player > div.html5-video-container > video") || false;
    if(YOUTUBE){
        if(YOUTUBE.paused) document.getElementById("background-video-player").play();
    }
    else{
        document.getElementById("background-video-player").play();
    }
}
function start_video(){
    var YOUTUBE=document.querySelector("#movie_player > div.html5-video-container > video") || false;
    //If youtube video is playing, pause background video
    YOUTUBE.onpause = function(){document.getElementById("background-video-player").play();};
    YOUTUBE.onplay = function(){document.getElementById("background-video-player").pause();};
    if(YOUTUBE){
        var URL = document.location.toString();
        if(!URL.includes("watch")){
            YOUTUBE.play();
        }
    }
}
(function() {
    'use strict';
    VIDEO.src="http://localhost:8889/LINK_CURRENT_VIDEO";
    VIDEO.style.zIndex=-1;
    //VIDEO.setAttribute('autoplay', true);
    VIDEO.style.width = "100%";
    VIDEO.style.height = "auto";
    VIDEO.style.position="fixed";
    VIDEO.muted=true;
    VIDEO.loop=true;
    VIDEO.id = "background-video-player";
    document.body.insertBefore(VIDEO,document.body.firstChild);
    document.getElementById('background-video-player').play();
    window.addEventListener('blur', page_blur);
    window.addEventListener('focus', page_focus);
    window.addEventListener('DOMContentLoaded', start_video, false);
})();
