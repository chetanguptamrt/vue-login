/* vue-flatpickr-component v11.0.4, @license MIT */
/**
 * Original file: https://www.jsdelivr.com/package/npm/vue-flatpickr-component
 * vue-flatpickr-component@
 *
 */
"use strict";import flatpickr from"./flatpickr@4.6.13.js";var __webpack_modules__={311:e=>{e.exports=flatpickr},976:e=>{e.exports=Vue}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>u});var e=__webpack_require__(311),t=__webpack_require__.n(e),r=__webpack_require__(976);const a=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function _(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function n(e){return e instanceof Array?e:[e]}function o(e){return e&&e.length?e:null}const i=[...a,"onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"],p=["locale","showMonths"],u=(0,r.defineComponent)({name:"FlatPickr",compatConfig:{MODE:3},render(){return(0,r.h)("input",{type:"text","data-input":!0,disabled:this.disabled,onInput:this.onInput})},emits:["blur","update:modelValue",...i.map(_)],props:{modelValue:{type:[String,Number,Date,Array,null],required:!0},config:{type:Object,default:()=>({defaultDate:null,wrap:!1})},events:{type:Array,default:()=>a},disabled:{type:Boolean,default:!1}},data:()=>({fp:null}),mounted(){this.fp||(this.fp=t()(this.getElem(),this.prepareConfig()),this.fpInput().addEventListener("blur",this.onBlur),this.$watch("disabled",this.watchDisabled,{immediate:!0}))},methods:{prepareConfig(){let e=Object.assign({},this.config);this.events.forEach((r=>{let a=t().defaultConfig[r]||[];e[r]=n(e[r]||[]).concat(a,((...e)=>{this.$emit(_(r),...e)}))}));const r=this.onClose.bind(this);return e.onClose=n(e.onClose||[]).concat(r),e.defaultDate=this.modelValue||e.defaultDate,e},getElem(){return this.config.wrap?this.$el.parentNode:this.$el},onInput(e){const t=e.target;(0,r.nextTick)().then((()=>{this.$emit("update:modelValue",o(t.value))}))},fpInput(){return this.fp.altInput||this.fp.input},onBlur(e){this.$emit("blur",o(e.target.value))},onClose(e,t){this.$emit("update:modelValue",t)},watchDisabled(e){e?this.fpInput().setAttribute("disabled",""):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler(e){if(!this.fp)return;let t=Object.assign({},e);i.forEach((e=>{delete t[e]})),this.fp.set(t),p.forEach((e=>{void 0!==t[e]&&this.fp.set(e,t[e])}))}},modelValue(e){var t;this.$el&&e!==o(this.$el.value)&&(null===(t=this.fp)||void 0===t||t.setDate(e,!0))}},beforeUnmount(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}})})();export default __webpack_exports__.default;