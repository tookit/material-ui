<template>
  <div class="app dashboard">
    <app-drawer class="app--drawer" ref="drawer" />
    <app-toolbar class="app--toolbar" @drawer:toggle="handleToggleDrawer" />
    <v-main>
      <div class="white">
        <v-breadcrumbs :items="breadcrumbs" />
      </div>
      <router-view class="route-wrapper" />
      <!-- App Footer -->
      <v-footer class="pa-3 app--footer">
        <span>Netpune UI &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer />
        <span class="caption mr-1">Remember All The Things &trade;</span>
      </v-footer>
    </v-main>
    <!-- Go to top -->
    <app-fab />
  </div>
</template>

<script>
import AppDrawer from '@/components/AppDrawer'
import AppToolbar from '@/components/AppToolbar'
import AppFab from '@/components/AppFab'

export default {
  components: {
    AppDrawer,
    AppToolbar,
    AppFab
  },

  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      const { matched } = this.$route
      console.log(this.$route)
      return matched.map((route, index) => {
        const to =
          index === matched.length - 1
            ? this.$route.path
            : route.path || route.redirect
        return {
          text: route.meta.title,
          to: to,
          exact: true,
          disabled: false
        }
      })
    }
  },
  methods: {
    handleToggleDrawer() {
      const drawer = this.$refs.drawer
      drawer.showDrawer = !drawer.showDrawer
    }
  },
  created() {
    // fetch common data
    this.$store.dispatch('fetchProductCategoryTree')
    this.$store.dispatch('fetchNewsCategory')
  }
}
</script>

<style lang="scss" scoped>
.route-wrapper {
  min-height: calc(100vh - 64px);
}
</style>
