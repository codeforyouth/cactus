<template lang="pug">
  section.hero(:style="heroStyle")
    HeroContent(:title="title", :text="description")/
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeroContent from '~/components/atoms/HeroContent.vue'
@Component({
  components: {
    HeroContent,
  },
})
export default class TheHero extends Vue {
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
