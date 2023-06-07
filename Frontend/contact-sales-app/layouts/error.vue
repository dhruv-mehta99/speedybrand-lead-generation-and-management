<template>
  <v-app dark>
    <section
      id="page-not-found"
      class="deep-orange-s-bg-600 pd32"
      v-if="error.statusCode === 404"
    >
      <v-row align="center" justify="center" class="pd96-T">
        <v-col md="5"> </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="4">
          <center>
            <h2 class="subheading-1 white-500 fw-400 pd32-T">Page not found</h2>
            <p class="body-1 white-500 fw-400 pd8-T">
              Sorry, the page you were looking for could not be found. You can
              Return to Home or Contact Support.
            </p>
            <NuxtLink to="/">
              <v-btn
                depressed
                rounded
                class="grey-s-bg-200 dark-blue-s-900 mrg16-T no-uppercase"
              >
                Return to Home
              </v-btn>
            </NuxtLink>
          </center>
        </v-col>
      </v-row>
    </section>
    <section v-else>
      <h1>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> Home page </NuxtLink>
    </section>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
}

section#page-not-found {
  height: 100vh;
  width: 100vw;

  .large-title {
    font-size: 8rem;
  }
}
</style>
