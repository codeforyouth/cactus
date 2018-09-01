<template lang="pug">
  .project-detail.bg-light
    ul.detail-list.container.mt-auto.mb-auto.d-flex.flex-column
      li.project-detail-list-item
        h3.list-item プロジェクト概要
        p {{detail.overview}}
      li.project-detail-list-item
        h3.list-item 活動時期
        p {{detail.terms}}
      li.project-detail-list-item
        h3.list-item 課題
        p {{detail.issues}}
      li.project-detail-list-item
        h3.list-item プロジェクトへの思い
        p {{detail.wishes}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class ProjectDetail extends Vue {
  @Prop(Object)
  detail!: Object
}
</script>
<style lang="sass" scoped>
.project-detail
  padding-top: 2rem
  padding-bottom: 2rem
.detail-list
  list-style: none
.list-item:before
  content: '●'
</style>
