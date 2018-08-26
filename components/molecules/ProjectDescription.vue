<template lang="pug">
  .project-description.container.mt-auto.mb-auto.d-flex.flex-column
    h2.project-title {{title}}
    .project-description-properties
      .project-description-property
        span タグ:
        ul.tags
          li.tag(v-for="tag in tags") {{tag}}
      .project-description-property
        span 募集者: {{auther}}
    .project-recruitment.align-self-end
      span 募集締め切り: {{endsOn}}
    .project-recruitment.align-self-end
      button.btn.bg-primary.text-white 話を聞きたい
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class ProjectDescription extends Vue {
  @Prop(String)
  title!: string
  @Prop(Array)
  tags!: Array<string>
  @Prop(String)
  auther!: string
  @Prop(String)
  endsOn!: string
}
</script>
<style lang="sass" scoped>
.project-description
  padding-top: 2rem
  padding-bottom: 2rem
.project-description-property
  display: inline-block
  margin-right: 2rem
.tags
  list-style: none
  display: inline-block
.tag
  display: inline-block
  &:not(:last-child):after
    content: ', '
</style>
