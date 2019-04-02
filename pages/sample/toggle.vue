<template lang="pug">
section.sample-toggle
  div.img
    img(v-if="isActive" src="@/assets/img/gif/wheel_active.gif")
    img(v-else src="@/assets/img/gif/wheel.gif")
  div.btn
    BaseToggleButton(
      @change="toggleActive"
    )

</template>
<script>
import BaseToggleButton from "@/components/BaseToggleButton";

export default {
  name: "Toggle",
  components: {
    BaseToggleButton
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style lang="sass" scoped>
.sample-toggle
  padding-top: 30px
  text-align: center
.img
  width: 400px
  margin: auto
img
  width: 100%
</style>
