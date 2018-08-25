<template lang="pug">
  section.projects-section
    h2.header2 現在応募可能なプロジェクト一覧
    ProjectListItem(
      v-for="project in projects",
      :key="project.title",
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
@Component({
  components: {
    ProjectListItem,
    ProjectListMoreItem,
  },
})
export default class ProcjectList extends Vue {
  @Prop(Array)
  projects!: Array<object>
}
</script>
<style scoped>
</style>
