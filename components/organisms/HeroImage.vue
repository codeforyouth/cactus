<template lang="pug">
  section.hero-image.section.d-flex.justify-content-center.flex-column(:style="heroStyle")
    HeroImageContent(:title="title", :text="description")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeroImageContent from '~/components/atoms/HeroImageContent.vue'
@Component({
  components: {
    HeroImageContent,
  },
})
export default class HeroImage extends Vue {
  @Prop(String)
  image!: string
  @Prop(String)
  title!: string
  @Prop(String)
  description!: string
  get heroStyle() {
    return {
      backgroundImage: `url('${this.image}')`,
    }
  }
}
</script>
<style lang="sass" scoped>
.hero-image
  position: relative
  height: 95vh
  min-height: 700px
  background-size: cover
  &::before
    position: absolute
    z-index: 0
    content: ''
    top: 0
    left: 0
    right: 0
    bottom: 0
    opacity: 0.8
    background: #10732d
</style>
