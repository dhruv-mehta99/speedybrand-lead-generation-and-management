<template>
  <header>
    <nav class="container pd24-TB">
      <v-row align="center" justify="center">
        <v-col sm="2" class="align-center-s">
          <nuxt-link to="/">
            <v-row justify="center" align="center">
              <img
                src="~/assets/svg/header/header_logo.svg"
                class="logo"
                alt="Speedy"
              />
            </v-row>
          </nuxt-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col sm="8" align="stretch">
          <ul style="overflow: visible">
            <v-row align="center">
              <v-spacer></v-spacer>
              <v-col sm="2">
                <li class="cursor-pointer">
                  <v-row justify="center" class="justify-center">
                    <nuxt-link to="/about/">
                      <span class="body-1 ls-100 blue-grey-700 fw-500"
                        >About</span
                      >
                    </nuxt-link>
                  </v-row>
                </li>
              </v-col>
              <v-col sm="2">
                <li class="cursor-pointer">
                  <v-row justify="center" class="justify-center">
                    <nuxt-link to="/pricing/">
                      <span class="body-1 ls-100 blue-grey-700 fw-500"
                        >Pricing</span
                      >
                    </nuxt-link>
                  </v-row>
                </li>
              </v-col>
              <v-col sm="2">
                <li class="cursor-pointer">
                  <v-row justify="center" class="justify-center">
                    <nuxt-link to="/blogs/">
                      <span class="body-1 ls-100 blue-grey-700 fw-500"
                        >Blogs</span
                      >
                    </nuxt-link>
                  </v-row>
                </li>
              </v-col>
              <v-col sm="2">
                <li class="cursor-pointer">
                  <v-row justify="center" class="justify-center">
                    <nuxt-link to="/contact-sales/">
                      <span class="body-1 ls-100 blue-grey-700 fw-500"
                        >Contact Sales</span
                      >
                    </nuxt-link>
                  </v-row>
                </li>
              </v-col>
            </v-row>
          </ul>
        </v-col>
      </v-row>
    </nav>
  </header>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
header {
  min-width: 1.53rem !important;
  background-color: #fff !important;
  position: -webkit-sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0;
  min-height: 72px;
  z-index: 11 !important;
}

header .logo {
  width: 8rem;
  height: 2rem;
}

nav {
  padding: 0;
  width: 100%;
  max-width: 83.07692307692308rem;
  margin: 0 auto;
  z-index: 100;
}

ul {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  max-width: 45rem;
}

li {
  display: block;
  height: 100%;
  position: static;
}

nav a {
  text-decoration: none;
  cursor: pointer;
}

.align-center-s {
  display: flex;
  align-self: center !important;
  justify-content: center !important;
}
</style>
