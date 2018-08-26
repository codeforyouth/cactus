<template lang="pug">
  .hero-image-conent.mt-auto.mb-auto.container
    h2.hero-title.text-center.text-white.display-4 {{title}}
    p.hero-text.text-center.text-white {{text}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class HeroImageContent extends Vue {
  @Prop(String)
  title!: string
  @Prop(String)
  header!: string
  @Prop(String)
  text!: string
}
</script>
<style lang="sass" scoped>
.hero-image-conent
  z-index: 1
.hero-title
  font-size: 5.4rem
  font-weight: 500
  letter-spacing: 0.02em
.hero-text
  white-space: pre-wrap
  line-height: 2em
  font-size: 2.1rem
  font-weight: 400
  letter-spacing: 1.1px
</style>
