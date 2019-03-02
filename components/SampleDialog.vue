<template lang="pug">
CommonDialog(v-if="active" @onCancelClicked="onCancelClicked")
  div(slot="header") サンプルダイアログ
  div(slot="body")
    p これはサンプルダイアログです。
    p 閉じるにはOKボタンを押してください。
</template>

<script>
import CommonDialog from "@/components/CommonDialog";

export default {
  name: "SampleDialog",
  components: {
    CommonDialog
  },
  props: {
    active: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    }
  },
  methods: {
    onCancelClicked() {
      this.$emit("cancelClicked");
    }
  }
};
</script>

<style lang="sass" scoped>
.dialog
  width: 350px
  left: 0
  right: 0
  margin: auto
</style>
