<template lang="pug">
  div.about-missions
    h3 MISSION
    ul
      AboutMissionItem(
        v-for="mission in missions",
        :key="mission.title",
        :image="mission.image",
        :title="mission.title",
        :description="mission.description"
      )
    button もっと見る
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AboutMissionItem from '~/components/atoms/AboutMissionItem.vue'
@Component({
  components: {
    AboutMissionItem,
  },
})
export default class AboutMissionList extends Vue {
  @Prop(Array)
  missions!: Array<object>
}
</script>
<style scoped>
</style>
