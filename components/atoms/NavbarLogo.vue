<template lang="pug">
  img(
    :src="image"
    :title="title"
    :height="height"
    )
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class NavbarLogo extends Vue {
  @Prop(String)
  image!: string
  @Prop(String)
  title!: string
  @Prop(Number)
  height!: number
}
</script>
<style lang="sass" scoped>
</style>
