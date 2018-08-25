<template lang="pug">
  section.about
    h2 About
    h3 Code for Youth とは
    p  「Code for」とありますが私たちはIT団体ではありません。
      | 若者と地域の課題をつなげる立場であり、そのためのツールとしてITを活用しています。
      | また、自らが若者を中心とした発展途上のコミュニティであり、
      | 地域課題に挑戦する若者をサポートすることで私たち自身も成長していきます。
    AboutMissionList(:missions="missions")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AboutMissionList from '~/components/molecules/AboutMissionList.vue'
@Component({
  components: {
    AboutMissionList,
  },
})
export default class AboutMission extends Vue {
  missions: Array<Object> = [
    {
      title: 'Seed',
      description: '熱意ある仲間を見つける場',
      image: '/image/seed.png',
    },
    {
      title: 'Nurture',
      description: '地域・仲間とともに育つ場',
      image: '/image/nurture.png',
    },
    {
      title: 'Blossom',
      description: '社会に還元できる場',
      image: '/image/blossom.png',
    },
  ]
}
</script>
<style scoped>
</style>
