<template lang="pug">
  ul.navbar-nav.ml-auto
    TheNavItem(
      v-for="item in items",
      :key="item.name",
      :name="item.name",
      :isActive="item.isActive"
    )
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import TheNavItem from '~/components/atoms/TheNavItem.vue'
@Component({
  components: {
    TheNavItem: TheNavItem,
  },
})
export default class TheHeaderLogo extends Vue {
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
