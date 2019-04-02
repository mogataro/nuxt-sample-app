<template lang="pug">
div.base-pie-graph
  div.circle
    div.circle-outer
      svg(viewBox="0 0 60 60" style="")
        circle(cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="red" stroke-width="29.5" v-bind:stroke-dasharray="formatTime")
    div.circle-inner
      div.value
        p %を半角数字で
        p 入力してEnter
        slot
        span  %
</template>

<script>
export default {
  name: "BasePieGraph",
  props: {
    isActive: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0.3
    },
    percentSet: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      percentFill: 0,
      percentNone: 94.26,
      timerObj: null
    };
  },
  computed: {
    formatTime: function() {
      const timeStrings = [
        this.percentFill.toString(),
        this.percentNone.toString()
      ];
      return timeStrings[0] + "," + timeStrings[1];
    }
  },
  mounted() {
    window.addEventListener("change", this.graph);
  },
  methods: {
    graph() {
      this.percentFill = 0;
      this.percentNone = 94.26;
      const self = this;
      const percentLength = (94.26 * self.percentSet) / 100;
      self.timerObj = setInterval(function() {
        self.percentFill += 0.1;
        self.percentNone -= 0.1;
        if (self.percentNone <= 0 || self.percentFill >= percentLength) {
          clearInterval(self.timerObj);
        }
      }, 5);
    }
  }
};
</script>

<style lang="sass" scoped>
.base-pie-graph
  height: 300px
  width: 100%
  background: #FFFFDD
  color: black
  .circle
    width: 240px
    height: 240px
    border-radius: 50%
    background: black
    position: relative
  .circle-outer
    width: 240px
    position: absolute
  .circle-inner
    width: 150px
    height: 150px
    background: #FFFFDD
    border-radius: 50%
    border: 1px solid black
    position: absolute
    top: 45px
    left: 45px
    .value
      text-align: center
      margin-top: 60px
svg
  transform: rotate(-90deg)
span
  vertical-align: middle
</style>
