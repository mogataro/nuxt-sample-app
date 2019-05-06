<template lang="pug">
div#wrap
  TheHeader.header
  nuxt.main
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
  background: #FFFFDD
  .header
    position: fixed
    top: 0
  .main
    margin-top: 60px
</style>
