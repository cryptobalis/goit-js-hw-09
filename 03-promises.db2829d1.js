function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function l(t,n){return a.delay.value="",a.step.value="",a.amount.value="",new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?(o({position:t,delay:n}),e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)):(r({position:t,delay:n}),e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))}),n)}))}const a=document.querySelector(".form");a.addEventListener("submit",(e=>{e.preventDefault();const t=parseInt(a.delay.value),n=parseInt(a.step.value),o=parseInt(a.amount.value);for(let e=1;e<=o;e++){l(e,t+(e-1)*n)}}));
//# sourceMappingURL=03-promises.db2829d1.js.map