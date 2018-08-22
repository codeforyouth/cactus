<template lang="pug">
  section.projects-section
    h2.header2 現在応募可能なプロジェクト一覧
    ProjectCards(
      v-for="project in projects",
      :key="project.title",
      :image="project.image",
      :title="project.title",
      :auther="project.auther",
      :tags="project.tags",
      :endsOn="project.endsOn")
    ProjectMore
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ProjectCards from '~/components/molecules/ProjectCards.vue'
import ProjectMore from '~/components/molecules/ProjectMore.vue'
@Component({
  components: {
    ProjectCards,
    ProjectMore,
  },
})
export default class Procjects extends Vue {
  @Prop(Array)
  projects!: Array<object>
}
</script>
<style scoped>
</style>
