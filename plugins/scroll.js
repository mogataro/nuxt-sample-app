import Vue from "vue";

Vue.directive("scroll", {
  inserted(el, binding) {
    let f = function(evt) {
      let arg = binding.arg ? binding.arg : 0;
      if (binding.value(evt, el, arg)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});
