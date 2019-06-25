<template lang="pug">
div.the-header
  div.the-header-side
    TheSide(:menu="menu")
  p.the-header-text {{pageTitle}}
</template>

<script>
import TheSide from "@/components/TheSide";

export default {
  name: "TheHeader",
  components: {
    TheSide
  },
  data() {
    return {
      menu: [
        {
          text: "トップページ",
          path: "/",
          active: this.$route.path === "/"
        },
        {
          text: "サンプルダイアログ",
          path: "/sample/dialog",
          active: this.$route.path === "/sample/dialog"
        },
        {
          text: "サンプルトグルボタン",
          path: "/sample/toggle",
          active: this.$route.path === "/sample/toggle"
        },
        {
          text: "サンプル円グラフ",
          path: "/sample/piegraph",
          active: this.$route.path === "/sample/piegraph"
        },
        {
          text: "サンプルスクロール",
          path: "/sample/scroll",
          active: this.$route.path === "/sample/scroll"
        },
        {
          text: "サンプルキャンバス",
          path: "/sample/canvas",
          active: this.$route.path === "/sample/canvas"
        },
        {
          text: "サンプルaxios",
          path: "/sample/article",
          active: this.$route.path === "/sample/article"
        },
        {
          text: "サンプルAmcharts4",
          path: "/sample/amcharts",
          active: this.$route.path === "/sample/amcharts"
        }
      ]
    };
  },
  computed: {
    pageTitle() {
      const path = this.$route.path;
      let title = "タイトル";
      let menu = this.menu;
      menu.forEach(function(item) {
        if (path === item.path) {
          title = item.text;
        }
      });
      return title;
    }
  }
};
</script>

<style lang="sass" scoped>
.the-header
  width: 100vw
  background: black
  height: 60px
  display: flex
  align-items: center
  &-text
    font-size: 30px
    line-height: 1
    height: 30px
    color: white
    margin-left: 16px
  &-side
    margin-left: 16px
</style>
