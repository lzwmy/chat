(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"136":function(t,i,n){"use strict";n.r(i),n.d(i,"taro_radio_core",(function(){return r})),n.d(i,"taro_radio_group_core",(function(){return c}));var o=n(51),r=function(){function e(t){var i=this;Object(o.g)(this,t),this.onChange=Object(o.c)(this,"radiochange",7),this.value="",this.checked=!1,this.disabled=!1,this.nativeProps={},this.isWillLoadCalled=!1,this.handleClick=function(){i.disabled||i.checked||(i.checked=!0)}}return e.prototype.watchChecked=function(t){this.isWillLoadCalled&&t&&this.onChange.emit({"value":this.value})},e.prototype.watchId=function(t){this.isWillLoadCalled&&t&&this.inputEl.setAttribute("id",t)},e.prototype.componentDidRender=function(){this.id&&this.el.removeAttribute("id")},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0},e.prototype.render=function(){var t=this,i=this,n=i.checked,r=i.name,c=i.value,a=i.disabled,u=i.nativeProps;return Object(o.e)(o.a,{"className":"weui-cells_checkbox","onClick":this.handleClick},Object(o.e)("input",Object.assign({"ref":function ref(i){i&&(t.inputEl=i,t.id&&i.setAttribute("id",t.id))},"type":"radio","name":r,"value":c,"class":"weui-check","checked":n,"disabled":a,"onChange":function onChange(t){return t.stopPropagation()}},u)),Object(o.e)("i",{"class":"weui-icon-checked"}),Object(o.e)("slot",null))},Object.defineProperty(e.prototype,"el",{"get":function get(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function get(){return{"checked":["watchChecked"],"id":["watchId"]}},"enumerable":!1,"configurable":!0}),e}(),c=function(){function e(t){Object(o.g)(this,t),this.onChange=Object(o.c)(this,"change",7),this.uniqueName=Date.now().toString(36)}return e.prototype.function=function(t){if(t.stopPropagation(),"TARO-RADIO-CORE"===t.target.tagName){var i=t.target;if(i.checked)this.el.querySelectorAll("taro-radio-core").forEach((function(t){t!==i&&(t.checked=!1)})),this.value=t.detail.value,this.onChange.emit({"value":this.value})}},e.prototype.componentDidLoad=function(){var t=this;this.el.querySelectorAll("taro-radio-core").forEach((function(i){i.setAttribute("name",t.name||t.uniqueName)})),Object.defineProperty(this.el,"value",{"get":function get(){if(!t.value){var i=t.el.querySelectorAll("taro-radio-core");t.value=t.getValues(i)}return t.value},"configurable":!0})},e.prototype.getValues=function(t){var i="";return Array.from(t).forEach((function(t){var n=t.querySelector("input");(null==n?void 0:n.checked)&&(i=n.value||"")})),i},e.prototype.render=function(){return Object(o.e)(o.a,{"class":"weui-cells_radiogroup"})},Object.defineProperty(e.prototype,"el",{"get":function get(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),e}()}}]);