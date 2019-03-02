<template lang="pug">
section
  div(v-if="error.statusCode === 404")
    p 404 Not Found
    p お探しのページは見つかりません。
    p お探しのページは一時的にアクセスができない状態にあるか、
    p 移動もしくは削除された可能性があります。
  div(v-else="error.statusCode === 500")
    p 500 Internal Server Error
    p アクセスしようとしたページは表示できませんでした。
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: false,
      default: null
    }
  }
};
</script>
<style lang="sass" scoped>
</style>
