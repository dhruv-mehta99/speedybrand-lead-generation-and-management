<template>
  <div>
    <FooterWeb class="show-web"></FooterWeb>
    <FooterMobile class="show-mobile"></FooterMobile>
  </div>
</template>

<script>
import FooterWeb from "~/components/Footer/Footer-web";
import FooterMobile from "~/components/Footer/Footer-mobile";

export default {
  components: { FooterWeb, FooterMobile },
};
</script>

<style>
@media only screen and (min-width: 961px) {
  .show-web {
    display: block;
  }
  .show-mobile {
    display: none;
  }
}

@media only screen and (max-width: 960px) {
  .show-mobile {
    display: block;
  }
  .show-web {
    display: none;
  }
}
</style>