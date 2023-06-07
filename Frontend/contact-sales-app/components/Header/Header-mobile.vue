<template>
  <header>
    <nav>
      <v-row align="center" justify="center" class="pd16-T">
        <v-col sm="2" @click="selectedMenu = false">
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
        <v-row justify="end" v-if="!selectedMenu">
          <v-icon
            class="primary-900 dark-blue-s-bg-50 menu-icon pd8-LR pd2-TB mrg24-R cursor-pointer"
            @click="selectedMenu = !selectedMenu"
            >menu</v-icon
          >
        </v-row>
        <v-row justify="end" v-else>
          <v-icon
            class="primary-900 dark-blue-s-bg-50 menu-icon pd8-LR pd2-TB mrg24-R cursor-pointer"
            @click="selectedMenu = !selectedMenu"
            >close</v-icon
          >
        </v-row>
      </v-row>
      <section id="menu-mobile" v-if="selectedMenu" class="mrg8-T">
        <ul class="pd0 mrg8-T">
          <li>
            <v-row class="mrg8-TB" align="center" justify="center">
              <nuxt-link to="/about/">
                <p class="body-1 ls-100 primary-900 fw-500">About</p>
              </nuxt-link>
            </v-row>
            <v-row class="mrg8-TB" align="center" justify="center">
              <nuxt-link to="/pricing/">
                <p class="body-1 ls-100 primary-900 fw-500">
                  Pricing
                </p></nuxt-link
              >
            </v-row>
            <v-row class="mrg8-TB" align="center" justify="center">
              <nuxt-link to="/blogs/">
                <p class="body-1 ls-100 primary-900 fw-500">Blogs</p>
              </nuxt-link>
            </v-row>
            <v-row class="mrg8-TB" align="center" justify="center">
              <nuxt-link to="/contact-sales/">
                <p class="body-1 ls-100 primary-900 fw-500">Contact-Sales</p>
              </nuxt-link>
            </v-row>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: false,
    };
  },
  watch: {
    selectedMenu: function () {
      if (this.selectedMenu) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: transparent !important;
  min-height: 56px;
  z-index: 11 !important;
  max-width: 100% !important;
  overflow: hidden !important;
}

header .logo {
  width: 7rem;
  height: 1.5rem;
}

.pd14 {
  padding: 14px;
}

section#menu-mobile {
  // height: 90vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden !important;
}

.menu-icon {
  border-radius: 50px;
}

.bottom {
  bottom: 16px;
  position: absolute;
  width: 100%;
}

nav a {
  text-decoration: none;
  cursor: pointer;
}
</style>
