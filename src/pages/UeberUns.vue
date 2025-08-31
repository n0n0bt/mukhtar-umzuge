<template>
  <div class="min-h-screen bg-white">
    <NavHeader />
    <UeberUnsHero />
    <UeberUnsStory />
    <UeberUnsTeam />
    <UeberUnsValues />
    <UeberUnsCertifications />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import UeberUnsHero from '../components/Ueber-uns/UeberUnsHero.vue'
import UeberUnsStory from '../components/Ueber-uns/UeberUnsStory.vue'
import UeberUnsTeam from '../components/Ueber-uns/UeberUnsTeam.vue'
import UeberUnsValues from '../components/Ueber-uns/UeberUnsValues.vue'
import UeberUnsCertifications from '../components/Ueber-uns/UeberUnsCertifications.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  name: 'UeberUns',
  components: {
    NavHeader,
    UeberUnsHero,
    UeberUnsStory,
    UeberUnsTeam,
    UeberUnsValues,
    UeberUnsCertifications,
    ContactSection,
    FooterSection
  }
}
</script>
