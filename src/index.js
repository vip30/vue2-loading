function plugin (Vue, initOptions = {}) {
  Vue.directive('loading', {
    bind (el, binding, vnode) {
	  let defaultOption = {
        text: 'Loading ...',
        bg: 'rgba(230, 233, 236, 0.8)',
        textColor: '#fff'
      }
	  let options = Object.assign(defaultOption, initOptions)
      let position = window.getComputedStyle(el).position
      if (position === 'static' || position === '') {
        el.style.position = 'relative'
      }
	  // Message Box Create
	  let msg = document.createElement('div')
      let spinner = document.createElement('i')
	  spinner.className = 'fa fa-spin fa-spinner fa-3x'
      let textContent = document.createElement('p')
      textContent.textContent = options.text
      msg.appendChild(spinner)
      msg.appendChild(textContent)
	  // Default Css
      msg.setAttribute('style', 'box-sizing:content-box!important;position:absolute;z-index:1001;margin:0px;padding:035px;height:60px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;cursor:wait;background-color:#f4f4f4;border-radius:4px;box-shadow:01px8pxrgba(0,0,0,.15);border:solid1px#bbb;transform:translateX(-50%);')
      msg.style.color = options.textColor
      let box = document.createElement('div')
      // Default Css
	  box.setAttribute('style','position:absolute;top:0px;left:0px;z-index:1000;margin:0px;padding:0px;width:100%;height:100%;border:none;background-color:rgba(230,233,236,0.8);cursor:wait;opacity:0;transition:opacity.4s;');
      box.style.backgroundColor = options.bg
	  box.style.display = 'none'
	  box.className = 'vue2-loading-box'
      box.appendChild(msg)
	  el.appendChild(box)
    },  
    update (el, binding, vnode) {
	  var selector = el.getElementsByClassName('vue2-loading-box')
	  var box = selector[selector.length - 1]
	  if (binding.oldValue != binding.value) { // Mutated State
	    if (binding.value) {
		  binding.def.showLoadingBox(box)
		} else {
		  binding.def.hideLoadingBox(box)
		}
	  }
    },
    showLoadingBox (box) {
	  box.style.display = 'initial'
      window.requestAnimationFrame(() => {
        box.style.opacity = 1
      })
    },
    hideLoadingBox (box) {
	  box.style.display = 'none'
      window.requestAnimationFrame(() => {
        box.style.opacity = 0
      })
    }
  })
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
