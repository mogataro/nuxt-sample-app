<template lang="pug">
div.the-header
  div.the-header-side
    TheSide
  p.the-header-text {{pageTitle}}
</template>

<script>
import TheSide from "@/components/TheSide";

export default {
  name: "TheHeader",
  components: {
    TheSide
  },
  computed: {
    pageTitle() {
      const path = this.$route.path;
      let title = "タイトル";
      switch (path) {
        case "/":
          title = "トップページ";
          break;
        case "/sample/dialog":
          title = "サンプルダイアログ";
          break;
        case "/sample/toggle":
          title = "サンプルトグルボタン";
          break;
        case "/sample/piegraph":
          title = "サンプル円グラフ";
          break;
      }
      return title;
    }
  }
};
</script>

<style lang="sass" scoped>
.the-header
  background: black
  height: 60px
  display: flex
  align-items: center
  &-text
    font-size: 30px
    line-height: 1
    height: 30px
    color: white
    // margin: auto
    margin-left: 16px
  &-side
    margin-left: 16px
</style>
