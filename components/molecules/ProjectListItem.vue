<template lang="pug">
  .project-list-item.col-sm-3
    .card
      img.card-img-top(:src="image")
      .card-body
        h3.project-list-item-title.card-title {{title}}
        .card-text
          div
            span タグ:
            ul.tags
              li.tag(v-for="tag in tags") {{tag}}
          div
            span 募集者: {{auther}}
      .card-footer
        .project-list-item-fotter
          span 募集締め切り: {{endsOn}}
          MoreButton(
            :size='moreButtonSize'
            :path='path'
          )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import MoreButton from '~/components/atoms/MoreButton.vue'
@Component({
  components: {
    MoreButton,
  },
})
export default class ProjectListItem extends Vue {
  moreButtonSize: string = 's'
  @Prop(Number)
  id!: number
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
  get path() {
    return `/projects/${this.id}`
  }
}
</script>
<style lang="sass" scoped>
.project-list-item-title
  font-size: 1.25rem
  margin-bottom: 1rem
.tags
  list-style: none
  display: inline-block
.tag
  display: inline-block
  &:not(:last-child):after
    content: ', '
</style>
