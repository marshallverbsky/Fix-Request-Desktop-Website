// ==UserScript==
// @name         Fix 'Request Desktop Website'
// @namespace    https://www.marshallverbsky.com
// @version      2025-08-23
// @description  (on IOS) detects when the 'request desktop website' button is pressed, and changes viewport size to trick responsive web design
// @author       You
// @match        *://*/*
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    var agent = navigator.userAgent;
    if ( /Macintosh/.test (agent) ) {
    var metaTag =
        document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=1024';

        var head = document.getElementsByTagName('head')[0];
        if (head) {
            head.appendChild(metaTag);
        }
    }
})();