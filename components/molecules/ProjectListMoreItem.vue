<template lang="pug">
  .project-list-more.section.bg-primary
    .mt-auto.mb-auto.d-flex.justify-content-center.flex-column
      h3.text-center.text-white.display-5 Cactasに自分のプロジェクトに関する募集を載せてみませんか？
      .align-self-center
          MoreButton(:isGhost="true")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import MoreButton from '~/components/atoms/MoreButton.vue'
@Component({
  components: {
    MoreButton,
  },
})
export default class ProjectListMoreItem extends Vue {}
</script>
<style lang="sass" scoped>
.project-list-more
  padding-top: 2rem
  padding-bottom: 2rem
</style>
