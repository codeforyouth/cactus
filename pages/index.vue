<template lang="pug">
  div
    HeroImage(
      :image="heroImage",
      :title="heroTitle",
      :description="heroDescription",
    )/
    ProjectList(:projects="projects")/
    AboutMission/
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import HeroImage from '~/components/organisms/HeroImage.vue'
import ProjectList from '~/components/organisms/ProjectList.vue'
import AboutMission from '~/components/organisms/AboutMission.vue'

@Component({
  components: {
    HeroImage,
    ProjectList,
    AboutMission,
  },
})
export default class extends Vue {
  heroImage: string = '/image/hero_sample.jpg'
  heroTitle: string = 'Cactus Project'
  heroDescription: string =
    '地域の課題に取り組むプロジェクトと\n様々な興味を持った若者をつなぐための\nプラットフォーム「Cactas」を運営しています。\n\n下に並んでいる応募可能なプロジェクト一覧の中から\nあなたが参加したい・話が聞きたいプロジェクトを探して\n詳細ページから応募することができます。'
  @State
  projects
}
</script>
<style scoped>
</style>
