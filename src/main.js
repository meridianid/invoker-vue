import Vue from 'vue'
import App from './App.vue'
import '@/assets/fonts/fonts.js'
import '@/assets/scss/invoker-base/index.scss'

// Primitives
import Text from '@/primitives/Text/Text.vue'
import Container from '@/primitives/Container/Container.vue'
import Button from '@/primitives/Button/Button.vue'
import Badge from '@/primitives/Badge/Badge.vue'
import Tab from '@/primitives/Tab/Tab.vue'
import TabMenu from '@/primitives/TabMenu/TabMenu.vue'
import TabContainer from '@/primitives/TabContainer/TabContainer.vue'
import TabPanel from '@/primitives/TabPanel/TabPanel.vue'
import Dialog from '@/primitives/Dialog/Dialog.vue'
import FieldInput from '@/primitives/FieldInput/FieldInput.vue'
import FieldLabel from '@/primitives/FieldLabel/FieldLabel.vue'
import FieldArea from '@/primitives/FieldArea/FieldArea.vue'
import Dropdown from '@/primitives/Dropdown/Dropdown.vue'
import Divider from '@/primitives/Divider/Divider.vue'

// Primitives
Vue.component('ptext',Text)
Vue.component('pcontainer',Container)
Vue.component('pbutton',Button)
Vue.component('pbadge',Badge)
Vue.component('ptab',Tab)
Vue.component('ptab-menu',TabMenu)
Vue.component('ptab-container',TabContainer)
Vue.component('ptab-panel',TabPanel)
Vue.component('pdialog',Dialog)
Vue.component('pinput',FieldInput)
Vue.component('parea',FieldArea)
Vue.component('plabel',FieldLabel)
Vue.component('pdropdown',Dropdown)
Vue.component('pdivider',Divider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
