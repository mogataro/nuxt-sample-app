<template lang="pug">
input.base-text-box(
  :type="'text'"
  :class="addClass"
  :name="name"
  :value="value"
  :size="size"
  :maxlength="maxlength"
  :placeholder="placeholder"
  :disabled="disabled"
  @focus="onFocus"
  @blur="onBlur"
  @change="onChanged"
)
</template>
<script>
export default {
  name: "BaseTextbox",
  props: {
    addClass: {
      type: String,
      required: false,
      default: ""
    },
    name: {
      type: String,
      required: true,
      default: ""
    },
    value: {
      type: String,
      required: false,
      default: ""
    },
    size: {
      type: Number,
      required: false,
      default: -1
    },
    maxlength: {
      type: String,
      required: false,
      default: undefined
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onChanged(event) {
      const value = event.target.value;
      console.log(value);
      this.$emit("input", {
        name: this.name,
        value: value
      });
    },
    onFocus(event) {
      this.$emit("focus");
    },
    onBlur(event) {
      this.$emit("blur", event.target.value);
    }
  }
};
</script>
<style lang="sass" scoped>
.base-text-box
  background: white
  border: 1px solid blue
  color: black
  font-size: 12px
  vertical-align: middle
  width: 100%
  height: 100%
  placeholder-color: gray
  &.art-edit
   padding-left: 5px 
</style>
