<template lang="pug">
#wrap
  TheHeader
  .main
    .container
      nuxt
</template>
<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: "Default",
  components: {
    TheHeader
  }
};
</script>
<style lang="sass" scoped>
#wrap
  overflow: hidden
  .main
    background: #FFFFDD
    width: 100%
    height: calc(100% - 60px)
    overflow: auto
    .container
      width: calc(100% - 50px)
      margin: auto
</style>
