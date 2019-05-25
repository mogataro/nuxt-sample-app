<template lang="pug">
#wrap
  TheHeader
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
  background: #FFFFDD
</style>
