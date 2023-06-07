<template>
  <footer class="primary-bg-900">
    <v-row class="pd24-LR pd16-TB">
      <v-col align="center" justify="center">
        <nuxt-link to="/">
          <v-row justify="center">
            <img
              src="~/assets/svg/footer/footer_logo.svg"
              class="logo"
              alt="Speedy"
            />
          </v-row>
        </nuxt-link>
        <p class="mrg8-TB">
          Speedy makes owning a business easier than having a job
        </p>
      </v-col>
    </v-row>
    <v-row class="pd24-LR mrg16-TB" justify="center">
      <v-col class="pd8-LR">
        <ul class="pd0">
          <li>
            <v-row>
              <h2 class="body-1 ls-100 primary-900 fw-700">Support</h2>
            </v-row>
          </li>
          <li>
            <v-row class="mrg16-T">
              <h6>
                <nuxt-link
                  to="/cookie-policy/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Cookie Policy
                </nuxt-link>
              </h6>
            </v-row>
          </li>
          <li>
            <v-row class="mrg16-T">
              <h6>
                <nuxt-link
                  to="/privacy-policy/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Privacy Policy
                </nuxt-link>
              </h6>
            </v-row>
          </li>
          <li>
            <v-row class="mrg16-T">
              <h6>
                <nuxt-link
                  to="/terms-and-condition/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Terms and Conditions
                </nuxt-link>
              </h6>
            </v-row>
          </li>
        </ul>
      </v-col>
      <v-col class="pd8-LR">
        <ul class="pd0">
          <li>
            <v-row>
              <h2 class="body-1 ls-100 primary-900 fw-700">Connect</h2>
            </v-row>
          </li>
          <li>
            <v-row class="mrg8-T">
              <h2>
                <nuxt-link
                  to="/book-meeting/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Book a Meeting
                </nuxt-link>
              </h2>
            </v-row>
          </li>
        </ul>
      </v-col>
      <v-col class="pd8-LR">
        <ul class="pd0">
          <li>
            <v-row>
              <h2 class="body-1 ls-100 primary-900 fw-700">Company</h2>
            </v-row>
          </li>
          <li>
            <v-row class="mrg8-T">
              <h2>
                <nuxt-link
                  to="/about/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  About
                </nuxt-link>
              </h2>
            </v-row>
          </li>
          <li>
            <v-row class="mrg8-T">
              <h2>
                <nuxt-link
                  to="/blogs/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Blogs
                </nuxt-link>
              </h2>
            </v-row>
          </li>
          <li>
            <v-row class="mrg8-T">
              <h2>
                <nuxt-link
                  to="/pricing/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Pricing
                </nuxt-link>
              </h2>
            </v-row>
          </li>
          <li>
            <v-row class="mrg8-T">
              <h2>
                <nuxt-link
                  to="/contact-sales/"
                  class="body-0 primary-500 ls-100 fw-400"
                >
                  Contact Sales
                </nuxt-link>
              </h2>
            </v-row>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row justify="center" class="mrg24-TB">
      <v-btn
        rounded
        large
        depressed
        class="accent-bg-500 primary-900 mrg16-T no-uppercase"
        v-on:click="$emit('go-to-top')"
      >
        Go to top
      </v-btn>
    </v-row>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  min-height: 110vh;
  overflow: hidden !important;

  .logo {
    width: 10rem;
    height: 4.5rem;
  }
}
</style>
