<template lang="pug">
  div
    HeroImage(
      :image="project.image"
    )
    ProjectContent(
      :content="project"
    )
    ProjectList(:projects="projects")/
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Getter } from 'vuex-class'
import HeroImage from '~/components/organisms/HeroImage.vue'
import ProjectContent from '~/components/organisms/ProjectContent.vue'
import ProjectList from '~/components/organisms/ProjectList.vue'
@Component({
  components: {
    HeroImage,
    ProjectContent,
    ProjectList,
  },
})
export default class Project extends Vue {
  @State
  projects
  @Getter
  getProjectById
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
  get project() {
    return this.getProjectById(Number(this.$nuxt.$route.params.id))
  }
}
</script>
<style scoped>
</style>
