# vantd-admin

一个简单的 vue + antd 的后台管理系统，
由于用了keep-alive组件来实现路由组件的缓存，所以每个page组件需要添加name属性，如果不想该页面被缓存，name属性可以不写。
由于用了 window.atob ,window.btoa 等方法，故不支持 ie9 及以下浏览器，想要用的自己去搜 polyfill 解决方法

项目背景：有时候想自己写个简单的管理系统，但是很多目前已有的如vue-antd-admin,vue-element-admin 等都感觉有点略显臃肿，故自己花点时间写了此项目
## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
