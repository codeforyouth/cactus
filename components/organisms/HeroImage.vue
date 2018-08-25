<template lang="pug">
  section.hero(:style="heroStyle")
    HeroImageContent(:title="title", :text="description")/
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
<style scoped>
</style>
