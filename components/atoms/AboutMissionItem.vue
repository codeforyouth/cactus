<template lang="pug">
    li.about-mission-item.col-lg-4.col-md-6.col-sm-12.mb-4.text-center
      img(:src="image")
      h4 {{title}}
      p {{description}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class AboutMissionItem extends Vue {
  @Prop(String)
  image!: string
  @Prop(String)
  title!: string
  @Prop(String)
  description!: string
}
</script>
<style lang="sass" scoped>
.about-mission-item
  list-style-type: none
</style>
