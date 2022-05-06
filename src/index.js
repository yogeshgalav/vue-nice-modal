import VueNiceModal from "./VueNiceModal.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(VueNiceModal);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueNiceModal.install = install;

export default VueNiceModal;