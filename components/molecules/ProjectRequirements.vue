<template lang="pug">
  .project-requirement.container
    h3.project-requirement-title このプロジェクトに応募したい人に向けた応募条件
    ul.requirement-list.mt-auto.mb-auto.d-flex.flex-column
      li
        h4.list-title 求める人の条件
        p.list-body {{requirements.personality}}
      li
        h4.list-title 求める人数
        p.list-body {{requirements.number}}
      li
        h4.list-title 活動で出来ること・得られること
        p.list-body {{requirements.benefits}}
      li
        h4.list-title 報酬の有無
        p.list-body {{requirements.rewards}}
      li
        h4.list-title 活動期間
        p.list-body {{requirements.duration}}
      li
        h4.list-title 応募したい・話を聞きたい場合の手順
        p.list-body {{requirements.procedures}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class ProjectRequirement extends Vue {
  @Prop(Object)
  requirements!: Object
}
</script>
<style lang="sass" scoped>
.project-requirement
  padding-top: 2rem
  padding-bottom: 2rem
.project-requirement-title:before
  content: '●'
.requirement-list
  list-style: none
  padding-left: 0
.list-title
  background: #ECF6EF
  padding-left: 1rem
  padding-top: 0.5rem
  padding-bottom: 0.5rem
.list-body
  padding-left: 1rem
</style>
