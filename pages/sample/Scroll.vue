<template lang="pug">
section.sample-scroll
  p.centered Scroll me
  div.box(
    v-for="(element, index) in elementList"
    :key="index"
    v-scroll:[element]="activeScroll"
  )
    transition(name="text")
      p.text(v-if="element.isActive") {{element.text}}
</template>
<script>
export default {
  name: "Scroll",
  components: {},
  data() {
    return {
      isActive: false,
      elements: [
        {
          isActive: false,
          text:
            "本居宣長は享保15年（1730年）6月伊勢国松坂（現在の三重県松阪市）の木綿仲買商である小津家の次男として生まれる。"
        },
        {
          isActive: false,
          text: "幼名は富之助。元文2年（1737年）、8歳で寺子屋に学ぶ。"
        },
        {
          isActive: false,
          text:
            "元文5年（1740年）、11歳で父を亡くす。延享2年（1745年）、16歳で江戸大伝馬町にある叔父の店に寄宿し、翌年郷里に帰る。"
        },
        {
          isActive: false,
          text:
            "寛延元年（1748年）、19歳のとき、伊勢山田の紙商兼御師の今井田家の養子となるが、3年後、寛延3年（1750年）離縁して松坂に帰る。"
        },
        {
          isActive: false,
          text: "このころから和歌を詠み始める。"
        }
      ]
    };
  },
  computed: {
    elementList() {
      this.elements.forEach(function(element, index) {
        element.id = index;
        element.dScroll = (index + 1) * 30;
      });
      return this.elements;
    }
  },
  methods: {
    activeScroll(evt, el, arg) {
      if (window.scrollY > arg.dScroll) {
        this.elements[arg.id].isActive = true;
        el.setAttribute("style", "opacity: 1;");
      } else {
        this.elements[arg.id].isActive = false;
        el.setAttribute("style", "opacity: 0;");
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.sample-scroll
  height: 300vh
  background: #FFFFDD

.btn,
.centered
  margin: auto
  display: table
  font-size: 60px
  padding-top: 100px
  padding-bottom: 150px
.box
  padding: 8px 20px
  line-height: 1.3
  opacity: 1
  color: black
  width: 100%
  margin: 0 auto
  transform: translateZ(0)
  perspective: 1000px
  backface-visibility: hidden
  background: rgba(255, 255, 255, 0.1)
  transition: 2.0s all cubic-bezier(0.39, 0.575, 0.565, 1)
  .text
    font-size: 25px
    &-enter,
    &-leave-to
      transform: translateX(100%)
    &-enter-to,
    &-leave
      transform: translateX(0)
    &-enter-active,
    &-leave-active
      transition: all 2000ms ease


.slider
  height: 200px
  width: 400px
  border: 20px
  background: red
  height: 100%
  margin-top: 60px
  position: fixed
  left: 0
  top: 0
  z-index: 1
  &-enter,
  &-leave-to
    transform: translateX(-100%)
  &-enter-to,
  &-leave
    transform: translateX(0)
  &-enter-active,
  &-leave-active
    transition: all 500ms ease
</style>
