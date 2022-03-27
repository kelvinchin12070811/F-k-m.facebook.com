// ==UserScript==
// @name         F**k m.facebook.com
// @namespace    https://kelvinchin12070811.gitlab.io/
// @version      0.1
// @description  Hello Facebook? Why not redirect m.facebook.com to www.facebook.com on desktop?
// @author       Kelvin Chin
// @homepage     https://github.com/kelvinchin12070811/F-k-m.facebook.com
// @match        https://m.facebook.com/*
// @icon         https://icons.duckduckgo.com/ip3/m.facebook.com.ico
// @copyright    The Unlicense
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.write('Redirecting from mobile view to desktop view...');

    const queries = window.location.search;
    const fullPath = `https://www.facebook.com${window.location.pathname}${queries && queries}`;
    window.location.href = fullPath;
})();