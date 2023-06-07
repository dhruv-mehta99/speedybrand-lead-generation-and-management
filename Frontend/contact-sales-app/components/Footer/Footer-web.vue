<template>
  <footer class="pd32-T pd16-B">
    <div class="container">
      <!-- Footer Row-1 -->
      <v-row>
        <!-- Footer-1-Column-1 -->
        <v-col md="3" class="mrg8-TB">
          <v-row>
            <img
              src="~/assets/svg/footer/footer_logo.svg"
              class="logo"
              alt="Speedy"
            />
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="caption pd4 mrg8-T">
            <p>Speedy makes owning a business easier than having a job</p>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <!-- Footer-1-Column-2 -->
        <v-col md="2">
          <ul class="pd0">
            <li>
              <v-row class="pd8">
                <h2 class="body-1 ls-100 primary-900 fw-700">Support</h2>
              </v-row>
            </li>
            <li>
              <v-row class="mrg8-TB pd8-LR">
                <h6>
                  <nuxt-link
                    to="/cookie-policy/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Cookie Policy
                  </nuxt-link>
                </h6>
              </v-row>
            </li>
            <li>
              <v-row class="mrg8-TB pd8-LR">
                <h6>
                  <nuxt-link
                    to="/privacy-policy/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Privacy Policy
                  </nuxt-link>
                </h6>
              </v-row>
            </li>
            <li>
              <v-row class="mrg8-TB pd8-LR">
                <h6>
                  <nuxt-link
                    to="/terms-and-condition/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Terms And Conditions
                  </nuxt-link>
                </h6>
              </v-row>
            </li>
          </ul>
        </v-col>

        <!-- Footer-1-Column-3 -->
        <v-col md="2">
          <ul class="pd0">
            <li>
              <v-row class="pd8">
                <h2 class="body-1 ls-100 primary-900 fw-700">Connect</h2>
              </v-row>
            </li>
            <li>
              <v-row class="mrg8-TB pd8-LR">
                <h6>
                  <nuxt-link
                    to="/book-meeting/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Book a Meeting
                  </nuxt-link>
                </h6>
              </v-row>
            </li>
          </ul>
        </v-col>

        <!-- Footer-1-Column-4 -->
        <v-col md="2">
          <ul class="pd0">
            <li>
              <v-row class="pd8">
                <h2 class="body-1 ls-100 primary-900 fw-700">Company</h2>
              </v-row>
            </li>
            <li>
              <v-row class="mrg2-TB pd8-LR">
                <h2>
                  <nuxt-link
                    to="/about/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    About
                  </nuxt-link>
                </h2>
              </v-row>
            </li>
            <li>
              <v-row class="mrg2-TB pd8-LR">
                <h2>
                  <nuxt-link
                    to="/blogs/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Blogs
                  </nuxt-link>
                </h2>
              </v-row>
            </li>
            <li>
              <v-row class="mrg2-TB pd8-LR">
                <h2>
                  <nuxt-link
                    to="/pricing/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Pricing
                  </nuxt-link>
                </h2>
              </v-row>
            </li>
            <li>
              <v-row class="mrg2-TB pd8-LR">
                <h2>
                  <nuxt-link
                    to="/contact-sales/"
                    class="body-1 primary-900 ls-100 fw-400"
                  >
                    Contact sales
                  </nuxt-link>
                </h2>
              </v-row>
            </li>
          </ul>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<style scoped lang="css">
footer {
  background: #f8f9fe;
}

footer .logo {
  width: 12rem;
  height: 5rem;
}

footer .iso-logo {
  width: 3rem;
}

footer ul {
  padding: 0;
  margin: 0;
  overflow: visible;
  width: 100%;
}

footer ul li {
  display: block;
  height: 100%;
}
</style>
