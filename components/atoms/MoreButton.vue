<template lang="pug">
  button.more-button.button.btn.bg-primary.text-white(
    :class="{ border: isGhost, borderWhite: isGhost, 'btn-sm': size === 's', 'btn-lg': size === 'l'}"
   @click="buttonAction") {{text}}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class SectionTitle extends Vue {
  @Prop({ default: false })
  isGhost!: boolean
  @Prop({ default: 'm' })
  size!: string
  @Prop({ default: 'もっと見る' })
  text!: string
  @Prop({ default: false })
  isAjax!: boolean
  @Prop({ default: '/' })
  path!: string
  buttonAction() {
    return this.$nuxt.$router.push({ path: this.path })
  }
}
</script>
<style lang="sass" scoped>
.more-button
  border-radius: 1.5em
</style>
