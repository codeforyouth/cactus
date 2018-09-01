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
  projects: Array<object> = [
    {
      id: 1,
      title:
        '給食の献立をオンライン化！\n4919プロジェクトを一緒に全国展開するエンジニアの方を探しています',
      image: 'image/project_sample.jpg',
      auther: '河中祥吾',
      tags: ['食', '奈良', 'エンジニア'],
      endsOn: '6/30',
    },
    {
      id: 2,
      title:
        '給食の献立をオンライン化！\n4919プロジェクトを一緒に全国展開するエンジニアの方を探しています',
      image: 'image/project_sample.jpg',
      auther: '河中祥吾',
      tags: ['食', '奈良', 'エンジニア'],
      endsOn: '6/30',
    },
  ]
  // @State
  // projects
}
</script>
<style scoped>
</style>
