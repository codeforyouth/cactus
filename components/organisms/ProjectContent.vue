<template lang="pug">
  section
    ProjectDescription(
      :title="content.title",
      :auther="content.auther",
      :tags="content.tags",
      :endsOn="content.endsOn"
    )
    ProjectDetail(
      :detail="content.detail"
    )
    ProjectRequirements(
      :requirements="content.requirements"
    )
    ProjectRecruitment(:endsOn="content.endsOn")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import ProjectDescription from '~/components/molecules/ProjectDescription.vue'
import ProjectDetail from '~/components/molecules/ProjectDetail.vue'
import ProjectRequirements from '~/components/molecules/ProjectRequirements.vue'
import ProjectRecruitment from '~/components/molecules/ProjectRecruitment.vue'

@Component({
  components: {
    ProjectDescription,
    ProjectDetail,
    ProjectRequirements,
    ProjectRecruitment,
  },
})
export default class ProjectContent extends Vue {
  @Prop(Object)
  content!: object
}
</script>
<style scoped>
</style>
