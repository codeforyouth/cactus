<template lang="pug">
  section.project-list.section
    .project-list-items.d-flex.justify-content-center.flex-column
      SectionTitle(:title="sectionTitle")
      .mt-auto.mb-auto.container
        .row
          ProjectListItem(
            v-for="project in projects",
            :key="project.id",
            :id="project.id",
            :image="project.image",
            :title="project.title",
            :auther="project.auther",
            :tags="project.tags",
            :endsOn="project.endsOn")
    ProjectListMoreItem
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ProjectListItem from '~/components/molecules/ProjectListItem.vue'
import ProjectListMoreItem from '~/components/molecules/ProjectListMoreItem.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
@Component({
  components: {
    ProjectListItem,
    ProjectListMoreItem,
    SectionTitle,
  },
})
export default class ProcjectList extends Vue {
  sectionTitle: string = '現在応募可能なプロジェクト一覧'
  @Prop(Array)
  projects!: Array<object>
}
</script>
<style lang="sass" scoped>
.project-list-items
  margin-bottom: 3rem
</style>
