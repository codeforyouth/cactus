<template lang="pug">
  button.more-button.button.btn.bg-primary.text-white(
    :class="{ border: isGhost, borderWhite: isGhost, 'btn-sm': size === 's', 'btn-lg': size === 'l'}"
   ) もっと見る
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class SectionTitle extends Vue {
  @Prop({ default: false })
  isGhost!: boolean
  @Prop({ default: 'm' })
  size!: string
}
</script>
<style lang="sass" scoped>
.more-button
  border-radius: 1.5em
</style>
