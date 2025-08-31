<template>
  <div>
    <NavHeader />
    <LeistungenHero />
    <LeistungenServices />
    <LeistungenProcess />
    <LeistungenPricing />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import LeistungenHero from '../components/leistungen/LeistungenHero.vue'
import LeistungenServices from '../components/leistungen/LeistungenServices.vue'
import LeistungenProcess from '../components/leistungen/LeistungenProcess.vue'
import LeistungenPricing from '../components/leistungen/LeistungenPricing.vue'
import ContactSection from '../components/ContactSection.vue'
import NavHeader from '../components/NavHeader.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
