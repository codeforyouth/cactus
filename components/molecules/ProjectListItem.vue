<template lang="pug">
  div
    img(:src="image")
    h3 {{title}}
    div
      span タグ:
      ul
        li(v-for="tag in tags") {{tag}}
    div
      span 募集者: {{auther}}
    div
      span 募集締め切り: {{endsOn}}
    div
      button もっと見る
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class ProjectListItem extends Vue {
  @Prop(String)
  title!: string
  @Prop(String)
  image!: string
  @Prop(Array)
  tags!: Array<string>
  @Prop(String)
  auther!: string
  @Prop(String)
  endsOn!: string
}
</script>
<style scoped>
</style>
