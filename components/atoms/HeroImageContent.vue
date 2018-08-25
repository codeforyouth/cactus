<template lang="pug">
  .row
    h1 {{title}}
    p {{text}}
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
<style scoped>
</style>
