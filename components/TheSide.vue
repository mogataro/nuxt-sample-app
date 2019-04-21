<template lang="pug">
div.side
  div(
    class="side__button"
    @click="toggleMenu('toggle')"
  )
    MenuIcon(
      :isActive="!isActive"
    )
  SlideMenu(
    class="side__slide-menu"
    v-if="isActive"
    @closeMenu="toggleMenu('close')"
  )
</template>
<script>
import SlideMenu from "@/components/SlideMenu";
import MenuIcon from "@/components/MenuIcon";

export default {
  name: "TheSide",
  components: {
    SlideMenu,
    MenuIcon
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    // this.listen(document.body, "click", () => this.toggleMenu(false));
  },
  methods: {
    toggleMenu(action) {
      switch (action) {
        case "toggle":
          this.isActive = !this.isActive;
          break;
        case "close":
          this.isActive = false;
          break;
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.side
  position: relative
  z-index: 3
  &__button
    height: 40px
    width: 40px
    cursor: pointer
</style>
