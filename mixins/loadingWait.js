export default {
  data() {
    return {
      isSending: false
    };
  },
  methods: {
    async onClickSave() {
      this.isSending = true;
      if (this.onClickSaveMixin) {
        await this.onClickSaveMixin();
      }
      this.isSending = false;
    }
  }
};
