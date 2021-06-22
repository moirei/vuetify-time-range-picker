<template>
  <v-sheet class="v-time-range" v-bind="sheetProps" style="overflow:hidden">
    <v-responsive max-width="300">
      <v-card-actions>
        <v-btn
          :color="isFrom ? 'primary' : ''"
          @click="active = 'from'"
          small
          >{{ display(from, "From") }}</v-btn
        >
        <v-spacer />
        <arrow-right />
        <v-spacer />
        <v-btn
          :color="isFrom ? '' : 'primary'"
          @click="active = 'to'"
          :disabled="!from"
          small
          >{{ display(to, "To") }}</v-btn
        >
      </v-card-actions>
    </v-responsive>
    <v-divider />
    <v-time-picker
      v-model="time"
      @change="handleChange"
      :allowed-hours="allowedHours"
      :allowed-minutes="allowedMinutes"
      :allowed-seconds="allowedSeconds"
      :format="format"
      :ampm-in-title="ampmInTitle"
      :min="min"
      :readonly="readonly"
      :use-seconds="useSeconds"
      :no-title="noTitle"
      :landscape="landscape"
      :scrollable="scrollable"
      :dark="dark"
      :light="light"
      :header-color="headerColor"
      full-width
      flat
    />
  </v-sheet>
</template>

<script>
import get from "lodash.get";
import moment from "moment";
import ArrowRight from "./ArrowRight";

export default {
  name: "VTimeRangePicker",
  props: {
    value: {},
    allowedHours: [Function, Array],
    allowedMinutes: [Function, Array],
    allowedSeconds: [Function, Array],
    ampmInTitle: { type: Boolean, default: false },
    color: String,
    dark: { type: Boolean, default: false },
    elevation: [String, Number],
    format: { type: String, default: "24hr" },
    headerColor: String,
    height: [String, Number],
    landscape: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    maxHeight: [String, Number],
    maxWidth: [String, Number],
    minHeight: [String, Number],
    minWidth: [String, Number],
    noTitle: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    shaped: { type: Boolean, default: false },
    scrollable: { type: Boolean, default: false },
    tag: { type: String, default: "div" },
    tile: { type: Boolean, default: false },
    useSeconds: { type: Boolean, default: false },
    width: [String, Number],
  },
  components: { ArrowRight },
  data: () => ({
    active: "from",
  }),
  computed: {
    time: {
      set(value) {
        if (this.isFrom) this.from = value;
        else this.to = value;
      },
      get() {
        return this.isFrom ? this.from : this.to;
      },
    },
    from: {
      set(value) {
        if (this.to) this.$emit("input", [value, this.to]);
        else this.$emit("input", [value]);
      },
      get() {
        return get(this.value, 0);
      },
    },
    to: {
      set(value) {
        this.$emit("input", [this.from, value]);
      },
      get() {
        return get(this.value, 1);
      },
    },
    min() {
      return this.active === "to" ? this.from : undefined;
    },
    max() {
      return this.active === "from" ? this.to : undefined;
    },
    isFrom() {
      return this.active === "from";
    },
    is24Hr() {
      return this.format === "24hr";
    },
    sheetProps() {
      const { width, ...props } = this.$props;
      return {
        ...props,
        width: width || (this.landscape ? 550 : 290),
      };
    },
  },
  methods: {
    handleChange() {
      if (this.isFrom) {
        if (this.isGreater(this.from, this.to)) {
          this.active = "to";
          this.to = this.from;
        }
      }
    },
    isGreater(t1, t2) {
      if (!t1) return false;
      if (!t2) return true;

      const format = this.getTimeFormat();

      const a = moment(t1, format);
      const b = moment(t2, format);
      return a.isAfter(b);
    },
    getTimeFormat() {
      return this.useSeconds ? "HH:mm:ss" : "HH:mm";
    },
    display(value, d) {
      if (!value) return d;

      const format = this.getTimeFormat();

      return moment(value, format).format(
        this.is24Hr ? format : this.useSeconds ? "LTS" : "LT"
      );
    },
  },
};
</script>

<style lang="scss">
.v-time-range .v-picker__title {
  border-radius: 0 !important;
}
</style>
