<template lang="pug">
section.article
  div.article-content
    h1 {{artData.title}}
    p {{artData.body}}
  div.row
    div.input-title
      p タイトル
    div.input-long
      BaseTextbox(
        :addClass="'art-edit'"
        :name="'title'"
        :value="artData.title"
        @input="onInput($event, 'title')"
      )
  div.row
    div.input-title
      p 内容
    div.input-long
      BaseTextbox(
        :addClass="'art-edit'"
        :name="'body'"
        :value="artData.body"
        @input="onInput($event, 'body')"
      )
  div.row
    div.input-title
    div.input-long
      div.btn(
        @click="onClickSave"
      ) 修正
  LoadingWait(
    :isLoading="true"
  )
  //- LoadingWait(
  //-   :isLoading="isSending"
  //- )
</template>
<script>
import BaseTextbox from "@/components/BaseTextbox";
import LoadingWait from "@/components/LoadingWait";
import loadingWait from "@/mixins/loadingWait";

export default {
  name: "Article",
  components: {
    BaseTextbox,
    LoadingWait
  },
  mixins: [loadingWait],
  async asyncData({ app }) {
    const artData = await app.$axios.$get("articles/1");
    return {
      artData
    };
  },
  created() {
    console.log(process.env);
    setTimeout(this.test, 10000);
  },
  methods: {
    test() {
      console.log("ローディングテスト");
      console.log(this.$axios);
    },
    async onClickSaveMixin() {
      console.log("クリック");
      try {
        let Id = "1";
        let newArtData = Object.assign({}, this.artData);
        console.log(newArtData);
        let updateData = {
          title: newArtData.title,
          body: newArtData.body
        };
        console.log(updateData);
        const data = await this.$axios.put(`articles/${Id}`, updateData);
        console.log(data);
      } catch (e) {
        if (e.response.status === 400) {
          console.log("400エラー");
        }
      }
    },
    onInput(input, item) {
      switch (item) {
        case "title":
          this.artData.title = input.value;
          break;
        case "body":
          this.artData.body = input.value;
          break;
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.article
  background: #FFFFDD
  padding-top: 20px
  &-content
    width: 500px
    margin: auto
    background: white
    margin-bottom: 80px
    h1
      margin-bottom: 20px
  .row
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 10px
    .input-title
      height: 20px
      width: 90px
      padding-top: 0px
      
    .input-long
      height: 30px
      width: 320px
      .btn
        width: 60px
        height: 30px
        background: skyblue
        box-shadow: 0 2px 2px blue
        border-radius: 4px
        text-align: center
        padding-top: 4px
        float: right
        cursor: pointer
</style>
