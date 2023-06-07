<template>
  <div>
    <HeaderWeb
    
      class="show-web"
    ></HeaderWeb>
    <HeaderMobile
      
      class="show-mobile"
    ></HeaderMobile>
  </div>
</template>

<script>
import HeaderWeb from "~/components/Header/Header-web";
import HeaderMobile from "~/components/Header/Header-mobile";

export default {
  components: { HeaderWeb, HeaderMobile },
  data() {
    return {
      
    };
  },

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