// ==UserScript==
// @name        mmcg
// @namespace   mmcg
// @description mmcg
// @include     http://18h.mm-cg.com/18H_*
// @resource    normalizeCSS https://raw.githubusercontent.com/tremuluslune/mmcg/master/extensions/chrome/css/normalize.css
// @resource    mmcgCSS https://raw.githubusercontent.com/tremuluslune/mmcg/master/extensions/chrome/css/mmcg.css
// @version     1
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==
var actualCode = '(' + function () {
  var urls = Large_cgurl;
  var htmlContent = '';
  htmlContent = '<div id="content">';
  for (var i = 1; i < urls.length; i++) {
    htmlContent += '<img src="' + urls[i] + '">';
  }
  htmlContent += '</div>'
  document.body.innerHTML = htmlContent;
}
+ ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);

var css1 = GM_getResourceText("normalizeCSS");
GM_addStyle(css1);
var css2 = GM_getResourceText("mmcgCSS");
GM_addStyle(css2);
