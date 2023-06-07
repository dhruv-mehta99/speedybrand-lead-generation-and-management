<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      media="print"
      onload="this.media='all'"
    />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer,
  }
};
</script>
