<template>
  <div>
    <ContactsalesWeb class="show-web"></ContactsalesWeb>
    <ContactsalesMobile class="show-mobile"></ContactsalesMobile>
  </div>
</template>

<script>
import ContactsalesWeb from "~/pages/contact-sales/contact-sales-web";
import ContactsalesMobile from "~/pages/contact-sales/contact-sales-mobile";

export default {
  components: { ContactsalesWeb, ContactsalesMobile },
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
