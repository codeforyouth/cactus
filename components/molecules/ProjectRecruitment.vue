<template lang="pug">
  .project-recruitment.bg-light
    .mt-auto.mb-auto.d-flex.justify-content-center.flex-column
      h3.text-center.display-5 募集締め切り: {{endsOn}}
      .align-self-center
        button.btn.bg-primary.text-white.projcet-recruitment-btn 話を聞きたい
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class ProjectRequirement extends Vue {
  @Prop(String)
  endsOn!: String
}
</script>
<style lang="sass" scoped>
.project-recruitment
  padding-top: 2rem
  padding-bottom: 2rem
.projcet-recruitment-btn
  border-radius: 1.5em
</style>
