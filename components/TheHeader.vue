<template lang="pug">
div.the-header
  p.the-header-text {{pageTitle}}
</template>

<script>
export default {
  name: "TheHeader",
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
  padding: 16px 16px
  &-text
    font-size: 30px
    color: white
    display: inline-block
    margin-left: 16px
    vertical-align: middle
</style>
