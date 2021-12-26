// ==UserScript==
// @name         background_js_img
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
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
// @resource image_created_by_thunar http://localhost:8889/image_created_by_thunar.jpg?15
// @grant        GM_getResourceURL
// @downloadURL  https://raw.githubusercontent.com/justUmen/monkeys/main/background_js_img.js
// ==/UserScript==
(function() {
    'use strict';
    var IMG = document.createElement('img');
    var URL = document.location.toString();
        if(URL.includes("github")){
            IMG.src =GM_getResourceURL('image_created_by_thunar');
        }
        else{
            IMG.src="http://localhost:8889/image_created_by_thunar.jpg";
        }
    IMG.style.zIndex=-1;
    IMG.style.position="fixed";
    document.body.insertBefore(IMG,document.body.firstChild);
})();
