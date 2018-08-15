<template lang="pug">
  div
    TheNavbar(
      :logoTitle="logoTitle",
      :logoImage="logoImage",
      :logoHeight="logoHeight")/
    nuxt/
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import TheNavbar from '~/components/organisms/TheNavbar.vue'

@Component({
  components: {
    TheNavbar: TheNavbar,
  },
})
export default class extends Vue {
  logoImage: string = '/image/logo_hr_t_white.png'
  logoTitle: string = 'Cactus'
  logoHeight: number = 60
}
</script>

<style>
</style>
