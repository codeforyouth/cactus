<template lang="pug">
  div
    Hero(
      :image="heroImage",
      :title="heroTitle",
      :description="heroDescription",
    )/
    section
      h2.header2 現在応募可能なプロジェクト一覧
      //- Project(v-for="project in projects" :key="project.id" :project="project")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
// import Project from '~/components/Project.vue'
import Hero from '~/components/organisms/TheHero.vue'

@Component({
  components: {
    Hero,
    // Project,
  },
})
export default class extends Vue {
  heroImage: string = 'https://picsum.photos/200/300'
  heroTitle: string = 'Cactus Project'
  heroDescription: string =
    '地域の課題に取り組むプロジェクトと\n様々な興味を持った若者をつなぐための\nプラットフォーム「Cactas」を運営しています。\n\n下に並んでいる応募可能なプロジェクト一覧の中から\nあなたが参加したい・話が聞きたいプロジェクトを探して\n詳細ページから応募することができます。'
  @State
  projects
}
</script>
<style scoped>
</style>
