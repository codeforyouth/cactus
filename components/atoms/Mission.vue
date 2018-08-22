<template lang="pug">
    li
      img(:src="image")
      h4 {{title}}
      p {{description}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class Mission extends Vue {
  @Prop(String)
  image!: string
  @Prop(String)
  title!: string
  @Prop(String)
  description!: string
}
</script>
<style scoped>
</style>
