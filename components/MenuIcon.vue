<template lang="pug">
svg(
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 40 40"
)
  g(v-if="isActive")
    line.st0(x1="0" x2="40" y1="5" y2="5")
    line.st0(x1="0" x2="40" y1="20" y2="20")
    line.st0(x1="0" x2="40" y1="35" y2="35")
  g(v-else)
    line.st0(x1="0" x2="40" y1="5" y2="5")
    line.st0(x1="0" x2="40" y1="5" y2="35")
    line.st0(x1="0" x2="40" y1="35" y2="5")
    line.st0(x1="0" x2="40" y1="35" y2="35")
    line.st0(x1="0" x2="0" y1="5" y2="35")
    line.st0(x1="40" x2="40" y1="5" y2="35")
</template>
<script>
export default {
  name: "MenuIcon",
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="sass" scoped>
.st0
  stroke: white
  stroke-linecap: round
  stroke-width: 5px
</style>
