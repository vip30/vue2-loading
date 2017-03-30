/*!
 * vue2-loading v0.0.14 
 * (c) 2017 vip30
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue2Loading = factory());
}(this, (function () { 'use strict';

function plugin (Vue, initOptions) {
  if ( initOptions === void 0 ) initOptions = {};

  Vue.directive('loading', {
    bind: function bind (el, binding, vnode) {
	  var defaultOption = {
        text: 'Loading ...',
        bg: 'rgba(230, 233, 236, 0.8)',
        textColor: '#fff'
      };
	  var options = Object.assign(defaultOption, initOptions);
      var position = window.getComputedStyle(el).position;
      if (position === 'static' || position === '') {
        el.style.position = 'relative';
      }
	  // Message Box Create
	  var msg = document.createElement('div');
      var spinner = document.createElement('i');
	  spinner.className = 'fa fa-spin fa-spinner fa-3x';
      var textContent = document.createElement('p');
      textContent.textContent = options.text;
      msg.appendChild(spinner);
      msg.appendChild(textContent);
	  // Default Css
      msg.setAttribute('style', 'box-sizing:content-box!important;position:absolute;z-index:1001;margin:0px;padding:035px;height:60px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;cursor:wait;background-color:#f4f4f4;border-radius:4px;box-shadow:01px8pxrgba(0,0,0,.15);border:solid1px#bbb;transform:translateX(-50%);');
      msg.style.color = options.textColor;
      var box = document.createElement('div');
      // Default Css
	  box.setAttribute('style','position:absolute;top:0px;left:0px;z-index:1000;margin:0px;padding:0px;width:100%;height:100%;border:none;background-color:rgba(230,233,236,0.8);cursor:wait;opacity:0;transition:opacity.4s;');
      box.style.backgroundColor = options.bg;
	  box.style.display = 'none';
	  box.className = 'vue2-loading-box';
      box.appendChild(msg);
	  el.appendChild(box);
    },  
    update: function update (el, binding, vnode) {
	  var selector = el.getElementsByClassName('vue2-loading-box');
	  var box = selector[selector.length - 1];
	  if (binding.oldValue != binding.value) { // Mutated State
	    if (binding.value) {
		  binding.def.showLoadingBox(box);
		} else {
		  binding.def.hideLoadingBox(box);
		}
	  }
    },
    showLoadingBox: function showLoadingBox (box) {
	  box.style.display = 'initial';
      window.requestAnimationFrame(function () {
        box.style.opacity = 1;
      });
    },
    hideLoadingBox: function hideLoadingBox (box) {
	  box.style.display = 'none';
      window.requestAnimationFrame(function () {
        box.style.opacity = 0;
      });
    }
  });
}

plugin.version = '0.0.14';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

return plugin;

})));
