<template lang="pug">
div.dialog
  div.dialog__overlay
  div.dialog__card
    div.dialog__header
      slot(name="header")
    div.dialog__body
      slot(name="body")
    div.dialog__footer
      Button.dialog__btn(
        @click="cancelClicked"
      ) OK
</template>

<script>
export default {
  name: "CommonDialog",
  methods: {
    cancelClicked() {
      this.$emit("onCancelClicked");
    }
  }
};
</script>

<style lang="sass" scoped>
.dialog
  height: 100%
  left: 0
  position: fixed
  top: 0
  width: 100%
  &__overlay
    background: rgba(#CCCCCC, 0.1)
    height: 100%
    left: 0
    overflow: hidden
    position: fixed
    top: 0
    width: 100%
    z-index: 2
  &__card
    background: white
    border-radius: 20px
    display: flex
    flex-direction: column
    max-height: 80%
    width: 100%
    position: absolute
    top: 30%
    z-index: 2
  &__header
    background: #DDFFFF
    border-radius: 20px 20px 0 0
    padding: 5px 0 5px 10px
  &__body
    padding: 0 15px
  &__footer
    padding: 6px 0
    text-align: center
    border-radius: 0 0 20px 20px
  &__btn
    width: 120px
    background: #ADD8E6
    border-radius: 20px
button
  border: none
  cursor: pointer
  outline: none
  appearance: none
</style>
