<template lang="pug">
.base-loading-icon
  .base-loading-icon__inner
</template>

<script>
export default {
  name: "BaseLoadingIcon"
};
</script>

<style lang="sass" scoped>
.base-loading-icon
  padding: $circleLength
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 2
  &__inner
    animation: loadingspin linear infinite 4s
    background: #00000000
    border-radius: 90%
    height: 23px
    width: 27px
@keyframes loadingspin
  0%
    transform: rotate(45deg)
    box-shadow: $circleLength $circleLength blue,(-$circleLength) $circleLength red, (-$circleLength) (-$circleLength) yellow, $circleLength (-$circleLength) green
  25%
    transform: rotate(135deg)
    box-shadow: (-$circleLength) $circleLength blue, (-$circleLength) (-$circleLength) red, $circleLength (-$circleLength) yellow, $circleLength $circleLength green
  50%
    transform: rotate(225deg)
    box-shadow: (-$circleLength) (-$circleLength) blue, $circleLength (-$circleLength) red, $circleLength $circleLength yellow, (-$circleLength) $circleLength green
  75%
    transform: rotate(315deg)
    box-shadow: $circleLength (-$circleLength) blue, $circleLength $circleLength red, (-$circleLength) $circleLength yellow, (-$circleLength) (-$circleLength) green
  100%
    transform: rotate(405deg)
    box-shadow: $circleLength $circleLength blue, (-$circleLength) $circleLength red, (-$circleLength) (-$circleLength) yellow, $circleLength (-$circleLength) green
</style>
