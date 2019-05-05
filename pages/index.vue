<template lang="pug">
section.index
  h1(class="centered") Scroll me
  div(
    v-scroll="handleScroll"
    class="box"
  )
    p {{Adress}}
</template>
<script>
export default {
  name: "Index",
  async asyncData({ app }) {
    const ZipCode = "7830060";
    const Adress = await app.$axios.$get(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${ZipCode}`
    );
    return {
      Adress
    };
  },
  created() {
    setTimeout(this.test, 1000);
  },
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      return window.scrollY > 100;
    },
    test() {
      console.log("ローディングテスト");
      console.log(this.$axios);
    },
    async onUserDataSaveClicked() {
      try {
        // let Id = this.getUserId
        // if (this.$validator.errors.items.length === 0) {
        //   this.passwordDiff = false
        //   let newUserData = Object.assign({}, this.userData)
        //   newUserData.contactEmails = this.contactEmails
        //   const { data } = await this.$axios.post(`users/${Id}`, newUserData)
        //   this.updateUserInfo(data)
        //   this.userSettingActive = false
        // }
      } catch (e) {
        if (e.response.status === 400) {
          this.passwordDiff = true;
        }
        this.userSettingActive = false;
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.index
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
  opacity: 0
  color: black
  width: 500px
  margin: 0 auto
  margin-top: 30px
  transform: translateZ(0)
  perspective: 1000px
  backface-visibility: hidden
  background: rgba(255, 255, 255, 0.1)
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)

</style>
