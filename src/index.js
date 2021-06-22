import VTimeRangePicker from "@/components/VTimeRangePicker.vue";

const install = function(Vue) {
  Vue.component("VTimeRangePicker", VTimeRangePicker);
};

const Plugin = { VTimeRangePicker, install };

export default Plugin;
export { VTimeRangePicker, Plugin };
