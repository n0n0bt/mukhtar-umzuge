<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />
    <KontaktHero />
    <KontaktForm />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import KontaktHero from '../components/kontakt/KontaktHero.vue'
import KontaktInfo from '../components/kontakt/KontaktInfo.vue'
import KontaktForm from '../components/kontakt/KontaktForm.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
