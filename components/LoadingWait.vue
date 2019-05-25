<template lang="pug">
div.loading-wait(
  v-if="isLoading"
)
  BaseOverlay
  BaseLoadingIcon
</template>

<script>
import BaseLoadingIcon from "@/components/BaseLoadingIcon";
import BaseOverlay from "@/components/BaseOverlay";

export default {
  name: "LoadingWait",
  components: {
    BaseLoadingIcon,
    BaseOverlay
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
