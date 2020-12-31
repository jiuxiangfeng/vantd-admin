import Vue from 'vue'
// import Antd from 'ant-design-vue'
// Vue.use(Antd)
import { formModel, input, checkbox, Button, Menu, configProvider, Icon, Table, dropdown, tooltip, space, pagination } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less' // 按需引入样式，build时候再用，先用引用 所有组件样式 的方式
import '@/assets/css/antd_cover.less' // 如果用按需引入组件样式，这里注释掉

Vue.use(formModel)
Vue.use(input)
Vue.use(checkbox)

Vue.use(Button)
Vue.use(Menu)
Vue.use(configProvider)
Vue.use(Icon)
Vue.use(Table)
Vue.use(dropdown)
Vue.use(tooltip)
Vue.use(space)
Vue.use(pagination)
