function suportaTransform(){var e=document.createElement("div");return void 0!==e.style.transform||void 0!==e.style.WebkitTransform}!function(){var e=document.querySelector(".header-menu-titulo"),t=document.querySelector(".header-menu");e&&(e.onclick=function(){t.hasAttribute("data-ativo")?t.removeAttribute("data-ativo"):t.setAttribute("data-ativo","")})}(),setTimeout(function(){var t=document.querySelector(".header-busca"),n=document.body,o=document.querySelector(".header-navegacao-form");if(t&&"classList"in document.documentElement){function a(){n.classList.remove("header-barraBusca-visivel"),o.classList.remove("navegacao-form-active")}function r(e){e.stopPropagation()}t.addEventListener("click",function(e){n.classList.toggle("header-barraBusca-visivel"),o.classList.toggle("navegacao-form-active"),e.preventDefault()}),t.addEventListener("click",function e(){setTimeout(function(){document.documentElement.addEventListener("click",a),document.querySelector(".header-navegacao").addEventListener("click",r),document.querySelector(".header-barraBusca").addEventListener("click",r)},0),t.removeEventListener("click",e)})}},200),suportaTransform()||(document.documentElement.className+=" no-transform"),setTimeout(function(){var n=document.querySelector(".footer-newsletter-button"),o=document.querySelector(".footer-newsletter-input");n&&(n.onclick=function(){(function(){var e=!0;t=o.value,(e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t))||(o.classList.add("form-erro"),n.classList.add("form-erro"));var t;return e})()&&(e=o.value,t=function(){location.href="cadastrado.html"},console.log("Email cadatrado com sucesso na newsletter",e),setTimeout(t,500));var e,t})},5e3),function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof exports?module.exports=t():e.svg4everybody=t()}(this,function(){function f(e,t){if(t){var n=document.createDocumentFragment(),o=!e.getAttribute("viewBox")&&t.getAttribute("viewBox");o&&e.setAttribute("viewBox",o);for(var a=t.cloneNode(!0);a.childNodes.length;)n.appendChild(a.firstChild);e.appendChild(n)}}function g(o){o.onreadystatechange=function(){if(4===o.readyState){var n=o._cachedDocument;n||((n=o._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=o.responseText,o._cachedTarget={}),o._embeds.splice(0).map(function(e){var t=o._cachedTarget[e.id];t||(t=o._cachedTarget[e.id]=n.getElementById(e.id)),f(e.svg,t)})}},o.onreadystatechange()}return function(e){var s,u=Object(e);s="polyfill"in u?u.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537;var l={},m=window.requestAnimationFrame||setTimeout,v=document.getElementsByTagName("use");s&&function e(){for(var t=0;t<v.length;){var n=v[t],o=n.parentNode;if(o&&/svg/i.test(o.nodeName)){var a=n.getAttribute("xlink:href");if(s&&(!u.validate||u.validate(a,o,n))){o.removeChild(n);var r=a.split("#"),i=r.shift(),c=r.join("#");if(i.length){var d=l[i];d||((d=l[i]=new XMLHttpRequest).open("GET",i),d.send(),d._embeds=[]),d._embeds.push({svg:o,id:c}),g(d)}else f(o,document.getElementById(c))}}else++t}m(e,67)}()}}),svg4everybody();