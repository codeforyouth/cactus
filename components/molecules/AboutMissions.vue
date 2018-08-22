<template lang="pug">
  div.about-missions
    h3 MISSION
    ul
      Mission(
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
import Mission from '~/components/atoms/Mission.vue'
@Component({
  components: {
    Mission,
  },
})
export default class AboutMission extends Vue {
  @Prop(Array)
  missions!: Array<object>
}
</script>
<style scoped>
</style>
