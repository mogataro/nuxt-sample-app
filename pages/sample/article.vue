<template lang="pug">
section.article
  div.box
    p {{Adress}}
  div.btn(
    @click="onClicked"
  ) クリック
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      updateData: {
        title: "タイトル変更",
        body: "内容変更"
      }
    };
  },
  async asyncData({ app }) {
    const ZipCode = "7830060";
    const Adress = await app.$axios.$get("articles/1");
    return {
      Adress
    };
  },
  created() {
    setTimeout(this.test, 1000);
  },
  methods: {
    test() {
      console.log("ローディングテスト");
      console.log(this.$axios);
    },
    async onClicked() {
      console.log("クリック");
      try {
        let Id = "1";
        // let newUserData = Object.assign({}, this.userData)
        const data = await this.$axios.put("articles/1", this.updateData);
        console.log(data);
      } catch (e) {
        if (e.response.status === 400) {
          console.log("400エラー");
        }
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.article
  height: 300vh
  background: #FFFFDD

.centered
  margin: auto
  display: table
  font-size: 60px
  margin-top: 100px

.box
  border: 1px solid black
  padding: 8px 20px
  line-height: 1.3em
  color: black
  width: 500px
  margin: 0 auto
  margin-top: 30px
  transform: translateZ(0)
  perspective: 1000px
  backface-visibility: hidden
  background: rgba(255, 255, 255, 0.1)

.btn
  width: 80px
  height: 40px
  background: red
  box-shadow: 0 2px 2px orange
  margin: auto
  margin-top: 30px
  text-align: center
  padding-top: 10px
</style>
