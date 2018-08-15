<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
  a.navbar-brand(href="#")
    TheNavbarLogo(:title="logoTitle", :image="logoImage", :height="logoHeight")/
  button.navbar-toggler(
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  )
    span.navbar-toggler-icon
  #navbarNav.collapse.navbar-collapse.align-self-right
    TheNavbarMenu(:activeItem="activeItem")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import TheNavbarLogo from '~/components/atoms/TheNavbarLogo.vue'
import TheNavbarMenu from '~/components/molecules/TheNavbarMenu.vue'
@Component({
  components: {
    TheNavbarLogo: TheNavbarLogo,
    TheNavbarMenu: TheNavbarMenu,
  },
})
export default class TheNavbar extends Vue {
  activeItem: string = 'home'
  @Prop(String)
  logoTitle!: string
  @Prop(String)
  logoImage!: string
  @Prop(Number)
  logoHeight!: number
}
</script>
<style lang="sass" scoped>
</style>
