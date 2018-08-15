<template lang="pug">
  li.nav-item(:class="{active: isActive}")
    a.nav-link.capitalized(href="#") {{name}}
      span.sr-only(v-if="isActive") current
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class TheHeaderLogo extends Vue {
  @Prop(String)
  name!: string
  @Prop(Boolean)
  isActive!: boolean
}
</script>
<style lang="sass" scoped>
  .capitalized
    text-transform: capitalize
</style>
