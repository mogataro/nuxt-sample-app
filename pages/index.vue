<template lang="pug">
section.index
  Button.btn(
    type="button"
    @click="$router.push('/sample/dialog')"
  )  サンプルダイアログページへ

  Button.btn(
    type="button"
    @click="$router.push('/sample/toggle')"
  )  サンプルトグルボタンページへ

  Button.btn(
    type="button"
    @click="$router.push('/sample/piegraph')"
  )  サンプル円グラフページへ
</template>
<script>
export default {
  name: "Index"
};
</script>
<style lang="sass" scoped>
.index
  .btn
    background: #DDFFFF
    border-radius: 10px
    width: 400px
    height: 30px
    margin: 50px 0 0 30px
    box-shadow: 2px 2px 1px #88FFFF
button
  border: none
  cursor: pointer
  outline: none
  appearance: none
</style>
