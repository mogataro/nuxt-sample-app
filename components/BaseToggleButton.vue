<template lang="pug">
label(:class="className")
  input(
    type="checkbox"
    class="base-toggle-btn-input"
    :name="name"
    :checked="value"
    :disabled="disabled"
    @change.stop="toggle"
  )
  div(class="base-toggle-btn-core" :style="coreStyle")
    div(class="base-toggle-btn-button" :style="buttonStyle")
  template(v-if="labels")
    span(v-if="toggled" class="base-toggle-btn-label v-left" :style="labelStyle")
      slot(name="checked")
        template {{ labelChecked }}
    span(v-else class="base-toggle-btn-label v-right" :style="labelStyle")
      slot(name="unchecked")
        template {{ labelUnchecked }}
</template>

<script>
const DEFAULT_COLOR_CHECKED = "#f00bb0";
const DEFAULT_COLOR_UNCHECKED = "#aaaaaa";
const DEFAULT_LABEL_CHECKED = "ON";
const DEFAULT_LABEL_UNCHECKED = "OFF";
const DEFAULT_SWITCH_COLOR = "#fbb";

const contains = (object, title) =>
  typeof object === "object" && object.hasOwnProperty(title);

const px = v => v + "px";

const translate3d = (x, y, z = "0px") => {
  return `translate3d(${x}, ${y}, ${z})`;
};

export default {
  name: "BaseToggleButton",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      default: "",
      validator(value) {
        return typeof value === "object"
          ? value.checked || value.unchecked || value.disabled
          : typeof value === "string";
      }
    },
    switchColor: {
      type: [String, Object],
      default: "",
      validator(value) {
        return typeof value === "object"
          ? value.checked || value.unchecked
          : typeof value === "string";
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    labels: {
      type: [Boolean, Object],
      default: true,
      validator(value) {
        return typeof value === "object"
          ? value.checked || value.unchecked
          : typeof value === "boolean";
      }
    },
    height: {
      type: Number,
      default: 60
    },
    width: {
      type: Number,
      default: 160
    },
    margin: {
      type: Number,
      default: 5
    },
    fontSize: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      toggled: !!this.value
    };
  },
  computed: {
    className() {
      const { toggled, disabled } = this;
      return ["vue-js-switch", { toggled, disabled }];
    },

    coreStyle() {
      return {
        width: px(this.width),
        height: px(this.height),
        backgroundColor: this.cssColors
          ? null
          : this.disabled
            ? this.colorDisabled
            : this.colorCurrent,
        borderRadius: px(Math.round(this.height / 2))
      };
    },

    buttonRadius() {
      return this.height - this.margin * 2;
    },

    distance() {
      return px(this.width - this.height + this.margin);
    },

    buttonStyle() {
      const transition = `transform ${this.speed}ms`;
      const margin = px(this.margin);

      const transform = this.toggled
        ? translate3d(this.distance, margin)
        : translate3d(margin, margin);

      const background = this.switchColor ? this.switchColorCurrent : null;

      return {
        width: px(this.buttonRadius),
        height: px(this.buttonRadius),
        transition,
        transform,
        background
      };
    },

    labelStyle() {
      return {
        lineHeight: px(this.height),
        fontSize: this.fontSize ? px(this.fontSize) : null
      };
    },

    colorChecked() {
      const { color } = this;

      if (typeof color !== "object") {
        return color || DEFAULT_COLOR_CHECKED;
      }

      return contains(color, "checked") ? color.checked : DEFAULT_COLOR_CHECKED;
    },

    colorUnchecked() {
      const { color } = this;

      return contains(color, "unchecked")
        ? color.unchecked
        : DEFAULT_COLOR_UNCHECKED;
    },

    colorDisabled() {
      const { color } = this;

      return contains(color, "disabled") ? color.disabled : this.colorCurrent;
    },

    colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },

    labelChecked() {
      const { labels } = this;

      return contains(labels, "checked")
        ? labels.checked
        : DEFAULT_LABEL_CHECKED;
    },

    labelUnchecked() {
      const { labels } = this;

      return contains(labels, "unchecked")
        ? labels.unchecked
        : DEFAULT_LABEL_UNCHECKED;
    },

    switchColorChecked() {
      const { switchColor } = this;

      return contains(switchColor, "checked")
        ? switchColor.checked
        : DEFAULT_SWITCH_COLOR;
    },

    switchColorUnchecked() {
      const { switchColor } = this;

      return contains(switchColor, "unchecked")
        ? switchColor.unchecked
        : DEFAULT_SWITCH_COLOR;
    },

    switchColorCurrent() {
      const { switchColor } = this;

      if (typeof switchColor !== "object") {
        return switchColor || DEFAULT_SWITCH_COLOR;
      }

      return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
    }
  },
  watch: {
    value(value) {
      if (this.sync) {
        this.toggled = !!value;
      }
    }
  },
  methods: {
    toggle(event) {
      this.toggled = !this.toggled;
      this.$emit("input", this.toggled);
      this.$emit("change", {
        value: this.toggled,
        srcEvent: event
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.vue-js-switch
  display: inline-block
  position: relative
  vertical-align: middle
  user-select: none
  font-size: 10px
  cursor: pointer

  .base-toggle-btn-input
    opacity: 0
    position: absolute
    width: 1px
    height: 1px

  .base-toggle-btn-label
    position: absolute
    top: 0
    font-weight: 600
    color: white
    z-index: 1

    &.v-left
      left: 25px

    &.v-right
      right: 25px

  .base-toggle-btn-core
    display: block
    position: relative
    box-sizing: border-box
    outline: 0
    margin: 0
    padding: 20px
    transition: border-color 0.4s, background-color 0.4s
    user-select: none

    .base-toggle-btn-button
      display: block
      position: absolute
      overflow: hidden
      top: 0
      left: 0
      border-radius: 100%
      background-color: white
      z-index: 2

  &.disabled
    pointer-events: none
    opacity: 0.6
</style>
