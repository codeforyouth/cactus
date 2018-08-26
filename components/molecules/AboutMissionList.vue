<template lang="pug">
  div.about-missions.d-flex.justify-content-center.flex-column
    h3.text-center MISSION
    ul.row.about-mission-items
      AboutMissionItem(
        v-for="mission in missions",
        :key="mission.title",
        :image="mission.image",
        :title="mission.title",
        :description="mission.description"
      )
    .align-self-center
      MoreButton
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AboutMissionItem from '~/components/atoms/AboutMissionItem.vue'
import MoreButton from '~/components/atoms/MoreButton.vue'
@Component({
  components: {
    AboutMissionItem,
    MoreButton,
  },
})
export default class AboutMissionList extends Vue {
  @Prop(Array)
  missions!: Array<object>
}
</script>
<style lang="sass" scoped>
.about-mission-items
  padding-left: 0
</style>
