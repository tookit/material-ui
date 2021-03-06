<template>
  <v-navigation-drawer
    app
    class="app--drawer"
    :width="drawerWidth"
    dark
    v-model="showDrawer"
  >
    <v-toolbar flat class="app-drawer__toolbar">
      <img
        :src="computeLogo"
        :width="drawerWidth === 64 ? 64 : 256"
        alt="Kame"
      />
    </v-toolbar>
    <v-list class="pa-0">
      <template v-for="(item, key) in computeMenu">
        <template v-if="item.children && item.children.length > 0">
          <v-list-group
            :key="key"
            :prepend-icon="item.meta.icon"
            no-action
            :to="item.path"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.meta.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              :class="drawerWidth === 64 ? 'pl-4' : ''"
              v-for="subItem in item.children"
              :key="subItem.name"
              :to="subItem.path"
              v-show="!subItem.meta.hiddenInMenu"
            >
              <template v-if="drawerWidth === 64">
                <v-list-item-icon>
                  <v-icon v-text="subItem.meta.icon"></v-icon>
                </v-list-item-icon>
              </template>
              <template v-else>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="subItem.meta.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-item
            :key="key"
            :to="item.path"
            v-show="!item.meta.hiddenInMenu"
          >
            <v-list-item-icon>
              <v-icon v-text="item.meta.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.meta.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
    <template v-slot:append>
      <template v-if="drawerWidth === 64">
        <div class="d-flex">
          <v-btn
            width="64"
            icon
            tile
            @click="handleDrawerToggle"
            class="mx-auto"
          >
            <v-icon>mdi-arrow-collapse-right</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-else>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn icon tile @click="handleDrawerToggle" class="mr-2">
            <v-icon>mdi-arrow-collapse-left</v-icon>
          </v-btn>
        </div>
      </template>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { protectedRoute as routes } from '@/router/config'
export default {
  name: 'AppDrawer',
  components: {},
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mini: false,
      showDrawer: true,
      drawerWidth: 256,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }
  },

  computed: {
    computeMenu() {
      return routes[0].children
    },

    computeGroupActive() {
      return true
    },
    computeLogo() {
      return this.drawerWidth === 256 ? '/img/logo_text.png' : '/img/logo.png'
    }
  },
  created() {},

  methods: {
    handleDrawerToggle() {
      if (this.drawerWidth === 64) {
        this.drawerWidth = 256
      } else {
        this.drawerWidth = 64
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.app--drawer
  overflow: hidden !important

  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
