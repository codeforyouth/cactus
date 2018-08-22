<template lang="pug">
  div
    Hero(
      :image="heroImage",
      :title="heroTitle",
      :description="heroDescription",
    )/
    Projects(:projects="projects")/
    About/
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import Hero from '~/components/organisms/TheHero.vue'
import Projects from '~/components/organisms/Projects.vue'
import About from '~/components/organisms/About.vue'

@Component({
  components: {
    Hero,
    Projects,
    About,
  },
})
export default class extends Vue {
  heroImage: string = 'http://placeimg.com/640/480/nature'
  heroTitle: string = 'Cactus Project'
  heroDescription: string =
    '地域の課題に取り組むプロジェクトと\n様々な興味を持った若者をつなぐための\nプラットフォーム「Cactas」を運営しています。\n\n下に並んでいる応募可能なプロジェクト一覧の中から\nあなたが参加したい・話が聞きたいプロジェクトを探して\n詳細ページから応募することができます。'
  projects: Array<object> = [
    {
      id: 1,
      title:
        '給食の献立をオンライン化！\n4919プロジェクトを一緒に全国展開するエンジニアの方を探しています',
      image: 'http://placeimg.com/640/480/people',
      auther: '河中祥吾',
      tags: ['食', '奈良', 'エンジニア'],
      endsOn: '6/30',
    },
    {
      id: 2,
      title:
        '給食の献立をオンライン化！\n4919プロジェクトを一緒に全国展開するエンジニアの方を探しています',
      image: 'http://placeimg.com/640/480/people',
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
