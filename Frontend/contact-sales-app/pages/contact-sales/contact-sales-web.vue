<template>
  <main>
    <v-app>
      <section id="contact-us">
        <div class="container">
          <v-row align="end" class="pd96-TB">
            <v-col md="6">
              <h2 class="title fw-700 primary-50">With Speedy you can</h2>
              <ul class="pd0 pd8-LR">
                <li>
                  <v-row class="pd32-T pd8-L">
                    <v-icon class="size-xxxs fw-600 accent-50 pd4-T pd8-R"
                      >check_circle</v-icon
                    >
                    <p class="primary-50 body-1">Supercharge Your Content</p>
                  </v-row>
                </li>
                <li>
                  <v-row class="pd16-T pd8-L">
                    <v-icon class="size-xxxs fw-600 accent-50 pd4-T pd8-R"
                      >check_circle</v-icon
                    >
                    <p class="primary-50 body-1">
                      Create Content in 30 seconds
                    </p>
                  </v-row>
                </li>
                <li>
                  <v-row class="pd16-T pd8-L">
                    <v-icon class="size-xxxs fw-600 accent-50 pd4-T pd8-R"
                      >check_circle</v-icon
                    >
                    <p class="primary-50 body-1">
                      Create and publish engaging social media content
                    </p>
                  </v-row>
                </li>
              </ul>
            </v-col>
            <v-col md="6">
              <h1 class="display-1 fw-700 white-500">Contact our sales team</h1>
              <p class="body-1 white-500 fw-400 pd8-T">
                Our team is happy to answer your sales questions. Fill out the
                form and we’ll be in touch as soon as possible.
              </p>
              <div v-if="!thankyouMessage && !error">
                <v-form
                  class="contact-us-form pd16 mrg24-T primary-300"
                  ref="form"
                >
                  <v-text-field
                    label="First Name"
                    color="primary-300"
                    outlined
                    v-model="firstName"
                    :rules="nameRules"
                  >
                  </v-text-field>
                  <v-text-field
                    label="Last Name"
                    color="primary-300"
                    outlined
                    v-model="lastName"
                    :rules="nameRules"
                  >
                  </v-text-field>
                  <v-text-field
                    label="Work Email"
                    color="primary-300"
                    outlined
                    v-model="email"
                    :rules="emailRules"
                  >
                  </v-text-field>
                  <v-textarea
                    label="message"
                    color="primary-300"
                    height="200"
                    outlined
                    v-model="message"
                    :rules="messageRules"
                  >
                  </v-textarea>
                  <v-btn
                    v-if="!loading"
                    @click="submit"
                    :disabled="!isDataValid"
                    block
                    depressed
                    class="accent-bg-900 white-500 no-uppercase pd16-TB"
                  >
                    Contact Sales
                  </v-btn>
                  <v-btn
                    v-else
                    disabled
                    block
                    depressed
                    class="primary-300 primary-bg-50 no-uppercase pd16-TB"
                  >
                    Submitting ...
                  </v-btn>
                </v-form>
              </div>
              <div
                v-else-if="thankyouMessage && !error"
                class="contact-us-form"
              >
                <v-row justify="center" align="center" class="pd24-T">
                  <center justify="center" align="center">
                    <v-col>
                      <v-icon class="size-xl fw-300 accent-900 mrg8-B pd8-R"
                        >check_circle_outline</v-icon
                      >
                      <h4 class="title fw-700 primary-900">Thank you</h4>
                      <p class="body-1 primary-900 fw-400 pd8-T">
                        We’ll get back to you as soon as possible at
                        {{ useremail }}
                      </p>
                    </v-col>
                  </center>
                </v-row>
              </div>
              <div v-else class="contact-us-form">
                <v-row justify="center" align="center" class="pd24-T">
                  <center>
                    <v-col class="pd40-LR">
                      <v-icon class="size-xl fw-300 accent-300 mrg8-B pd8-R"
                        >mdi-alert-circle-outline</v-icon
                      >
                      <h4 class="title fw-700 primary-900">
                        Something went wrong...
                      </h4>

                      <div class="pd16-TB pd16-LR">
                        <v-btn
                          v-if="!loading"
                          @click="refresh"
                          :disabled="!isDataValid"
                          block
                          depressed
                          class="accent-bg-900 white-500 no-uppercase pd16-TB"
                        >
                          Refresh
                        </v-btn>
                      </div>
                      <p class="body-1 primary-900 fw-400 pd8-T">
                        An error has occured and we're working to fix the
                        problem<br />If you need immediate help, you can email
                        us:
                        <a href="mailto: help@speedybrand.io" target="_blank"
                          >help@speedybrand.io</a
                        >
                      </p>
                    </v-col>
                  </center>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>
    </v-app>
  </main>
</template>

<script>
import ContactSalesService from "../../services/contact-sales.service.client.ts";

export default {
  //data properties
  data() {
    return {
      loading: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      useremail: "",
      nameRules: [(v) => !!v || "Please enter your name"],
      messageRules: [(v) => !!v || "Message is required"],
      emailRules: [
        (v) => !!v || "Please enter your email",
        (v) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email",
      ],
      thankyouMessage: false,
      error: false,
    };
  },
  //defined computed properties
  computed: {
    isDataValid() {
      return this.firstName && this.lastName && this.email && this.message;
    },
  },
  //defined methods
  methods: {
    //clears error message
    refresh() {
      this.error = false;
    },

    // Submits lead to sales service
    submit() {
      this.loading = true;
      this.useremail = this.email;
      ContactSalesService.postLead(
        this.firstName,
        this.lastName,
        this.email,
        this.message
      ).then(
        (response) => {
          this.loading = false;
          this.thankyouMessage = true;
        },
        (error) => {
          this.loading = false;
          this.error = true;

          // this.loading = false;
          // this.thankyouMessage = true;
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
section#contact-us {
  min-height: 1000px;
  background-image: url("../../assets/images/contact-us/bg_banner.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}

.contact-us-form {
  background-color: white;
  box-shadow: 0px 5px 50px rgba(33, 37, 79, 0.2);
  border-radius: 5px;
}
</style>