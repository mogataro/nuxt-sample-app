<template lang="pug">
div(class="base-overlay" @click="$emit('closeModal')")
</template>
<script>
export default {
  name: "BaseOverlay"
};
</script>
<style lang="sass" scoped>
.base-overlay
  background: #3a3b3aDD
  height: 100%
  left: 0
  overflow: hidden
  position: fixed
  top: 0
  white-space: nowrap
  width: 100%
  z-index: 1
</style>
