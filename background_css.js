// ==UserScript==
// @name         background_css
// @namespace    http://tampermonkey.net/
// @version      0.2
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
// @grant        GM_addStyle
// @run-at        document-start
// @downloadURL  https://raw.githubusercontent.com/justUmen/monkeys/main/background_css.js
// @updateURL  https://raw.githubusercontent.com/justUmen/monkeys/main/background_css.js
// ==/UserScript==

(function() {
    //Nice to combine with Dark reader for : google
    'use strict';
    //Github
    GM_addStyle(".color-bg-inset { background-color:rgba(0,0,0,0) !important; }");
    //Background image is too cpu intensive ??? :o Use js inject image instead (background_js)
    //GM_addStyle("html {  background-size : 99.9% !important; background-attachment:fixed !important;background-repeat: no-repeat;}");
    //GM_addStyle("body { background-image: url('http://localhost:8889/image_created_by_thunar.jpg') !important; }");
    GM_addStyle("html, body, ytd-app { background-color: rgba(0,0,0,0) !important; background-image: none !important; }");
    GM_addStyle("div, p { color:white !important; }");
    GM_addStyle("code { color:Lime !important; }");
    GM_addStyle("pre, span { color:#CCC !important; }");
    GM_addStyle("h1, h2, h3, h4, h5, h6 { color:pink !important; }");
    GM_addStyle("li { color:#999 !important; }");
    GM_addStyle("a, input, cite { color:Aquamarine !important; }");
    GM_addStyle("yt-formatted-string, yt-formatted-string a { color:Aquamarine !important; padding-left: 2px; padding-right: 2px; }");
    GM_addStyle("span, b { padding-left: 2px; }");
    GM_addStyle("div:not(has(div)){ padding-left: 2px !important; }");
    GM_addStyle("*{ text-shadow: -2px -2px 1px black,-2px -1px 1px black,-2px 0px 1px black,-2px 1px 1px black,-2px 2px 1px black,-1px -2px 1px black,-1px -1px 1px black,-1px 0px 1px black,-1px 1px 1px black,-1px 2px 1px black,0px -2px 1px black,0px -1px 1px black,0px 0px 1px black,0px 1px 1px black,0px 2px 1px black,1px -2px 1px black,1px -1px 1px black,1px 0px 1px black,1px 1px 1px black,1px 2px 1px black,2px -2px 1px black,2px -1px 1px black,2px 0px 1px black,2px 1px 1px black,2px 2px 1px black !important;}");
})();
