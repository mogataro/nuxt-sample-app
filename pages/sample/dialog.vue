<template lang="pug">
section.sample-dialog
  Button.btn(
    type="button"
    @click="$router.push('/')"
  )  トップページへ戻る
  Button.btn(
    type="button"
    @click="openDialog()"
  )  ダイアログボタン
  SampleDialog(:active="active" @cancelClicked="closeDialog()")
</template>
<script>
import SampleDialog from "@/components/SampleDialog";

export default {
  name: "Dialog",
  components: {
    SampleDialog
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    openDialog() {
      this.active = true;
    },
    closeDialog() {
      this.active = false;
    }
  }
};
</script>
<style lang="sass" scoped>
.sample-dialog
  width: 100%
  .btn
    background: #DDFFFF
    border-radius: 10px
    width: 200px
    height: 30px
    margin: 50px 0 0 30px
    box-shadow: 2px 2px 1px #88FFFF
button
  border: none
  cursor: pointer
  outline: none
  appearance: none
</style>
