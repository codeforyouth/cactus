<template lang="pug">
  h2.section-title.m-5.text-center.display-5 {{title}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class SectionTitle extends Vue {
  @Prop(String)
  title!: string
}
</script>
<style lang="sass" scoped>
.section-title
  position: relative
  &::after
    content: ''
    width: 30px
    height: 2px
    background: #68be8d
    position: absolute
    left: 50%
    margin-left: -15px
    bottom: -20px
</style>
