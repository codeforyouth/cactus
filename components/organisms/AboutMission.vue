<template lang="pug">
  section.about-mission.d-flex.justify-content-center.flex-column
    SectionTitle(:title="sectionTitle")
    .mt-auto.mb-auto.container
      h3.text-center Code for Youth とは
      p.text.text-center {{text}}
      AboutMissionList(:missions="missions")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AboutMissionList from '~/components/molecules/AboutMissionList.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
@Component({
  components: {
    AboutMissionList,
    SectionTitle,
  },
})
export default class AboutMission extends Vue {
  sectionTitle: string = 'About'
  text: string =
    '「Code for」とありますが私たちはIT団体ではありません。\n若者と地域の課題をつなげる立場であり、そのためのツールとしてITを活用しています。\nまた、自らが若者を中心とした発展途上のコミュニティであり、\n地域課題に挑戦する若者をサポートすることで私たち自身も成長していきます。\n'
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
<style lang="sass" scoped>
.about-mission
  background: #f9fafc
.text
  white-space: pre-wrap
  line-height: 2em
  font-size: 1.25rem
  font-weight: 400
  letter-spacing: 1.1px
</style>
