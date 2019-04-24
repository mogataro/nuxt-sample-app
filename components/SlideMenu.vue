<template lang="pug">
transition(name="slide-menu")
  div.slide-menu
    p.slide-menu__title メニュー
    ul(
      class="slide-menu-item__sublist"
    )
      li(
        class="slide-menu-item__sublist-item"
        v-for="(item, index) in menu"
        :key="index"
        :class="{active: item.active}"
        @click="pageMove(index)"
      )
        nuxt-link(:to="item.path")
          p {{item.text}}
    p.slide-menu__title 外部リンク
    ul(
      class="slide-menu-item__sublist"
    )
      li(
        class="slide-menu-item__sublist-item"
        v-for="(item, index) in link"
        :key="index"
        @click="pageMove(index)"
      )
        a(:href="item.src") {{item.text}}

</template>
<script>
export default {
  name: "SlideMenu",
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
        }
      ],
      link: [
        {
          text: "My Blog",
          src: "https://mogashiro.com"
        },
        {
          text: "My GitHub",
          src: "https://github.com/mogataro"
        }
      ]
    };
  },
  methods: {
    pageMove(index) {
      this.menu.forEach(function(item) {
        item.active = false;
      });
      this.menu[index].active = true;
      this.$emit("closeMenu");
    }
  }
};
</script>
<style lang="sass" scoped>
.slide-menu
  background: white
  height: 100%
  margin-top: 60px
  position: fixed
  left: 0
  top: 0
  z-index: 3
  &__title
    background: cadetblue
    width: 300px
    color: #fff
    font-size: 30px
    padding: 10px 0 10px 40px
    line-height: 1
  &-enter,
  &-leave-to
    transform: translateX(-100%)
  &-enter-to,
  &-leave
    transform: translateX(0)
  &-enter-active,
  &-leave-active
    transition: all 500ms ease

.slide-menu-item
  &__sublist-item
    &.active
      border: 5px solid red
      a
        padding-left: 35px
    a
      color: black
      background: white
      display: inline-block
      font-size: 20px
      padding-left: 40px
      text-decoration: none
      width: 100%
      &:hover
        color: blue
</style>
