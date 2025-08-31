<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />
    <ReferenzenHero />
    <ReferenzenTestimonials />
    <ReferenzenProjects />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import ReferenzenHero from '../components/Referenzen/ReferenzenHero.vue'
import ReferenzenTestimonials from '../components/Referenzen/ReferenzenTestimonials.vue'
import ReferenzenProjects from '../components/Referenzen/ReferenzenProjects.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
