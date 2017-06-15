# vue2-loading
 


[![npm](https://img.shields.io/npm/v/vue2-loading.svg)](https://www.npmjs.com/package/vue2-loading)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

[vue-loading](https://github.com/Coffcer/vue-loading) presented in Vue2

## Install
```bash
npm i -S vue2-loading
```

## Dependencies
[font-awesome](https://github.com/FortAwesome/Font-Awesome) 
for spinner css

## Usage
```vue
In App.vue
<script>
  import VueLoading from 'vue2-loading'
  Vue.use(VueLoading, {
    text: 'Here I come...',
    bg: 'rgba(230, 233, 236, 0.8)',
    textColor: '#000',
    spinnerClass: 'fa fa-spin fa-spinner fa-3x'
  })
</script>


<template>
  <div v-loading="isLoading (Boolean)"> 
  </div>
</template>
```

## Options

**text:**  
* loading block text
* default value: "Loading ..."
 
**bg:** 
* loading block backgroundColor css, 
* default value: "rgba(230, 233, 236, 0.8)"

**textColor:** 
* loading message text css, 
* default value: "#fff"

**spinnerClass:** 
* loading spinner class, 
* default value: "fa fa-spin fa-spinner fa-3x"

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
