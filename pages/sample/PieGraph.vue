<template lang="pug">
section.sample-pie-graph
  BasePieGraph(
    :percentSet="percentSet"
  )
    input.input-percent(
      type="text"
      name="'value'"
      v-model="percentSet"
    )
</template>
<script>
import BasePieGraph from "@/components/BasePieGraph";

export default {
  name: "PieGraph",
  components: {
    BasePieGraph
  },
  data() {
    return {
      isActive: false,
      percentSet: 0
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
.sample-pie-graph
  width: 300px
  margin: auto
  padding-top: 20px
.input-percent
  background: white
  border: 1px solid gray
  color: black
  font-size: 12px
  text-align: center
  vertical-align: middle
  width: 30px
  height: 24px
</style>
