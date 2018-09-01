<template lang="pug">
  ul.navbar-nav.ml-auto
    NavbarMenuItem(
      v-for="item in items",
      :key="item.name",
      :name="item.name",
      :isActive="item.isActive"
    )
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import NavbarMenuItem from '~/components/atoms/NavbarMenuItem.vue'
@Component({
  components: {
    NavbarMenuItem,
  },
})
export default class NavbarMenuList extends Vue {
  // TODO: item.isActive should depend on 'activeItem'
  items: Array<Object> = [
    {
      name: 'home',
      isActive: true,
    },
    {
      name: 'about',
      isActive: false,
    },
    {
      name: 'news',
      isActive: false,
    },
    {
      name: 'member',
      isActive: false,
    },
    {
      name: 'contact',
      isActive: false,
    },
    {
      name: 'join',
      isActive: false,
    },
  ]
  @Prop(String)
  activeItem!: string
}
</script>
<style lang="sass" scoped>
</style>
