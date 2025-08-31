<template>
  <section class="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Unsere <span class="text-emerald-600">Leistungen</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Professionelle Umzugs- und Transportdienstleistungen für Privat- und Geschäftskunden. 
          Von der Planung bis zur Durchführung - wir sind Ihr zuverlässiger Partner.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" class="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
            <ListIcon class="h-5 w-5 mr-2" />
            Alle Leistungen ansehen
          </a>
          <a href="#kontakt" class="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center">
            <PhoneIcon class="h-5 w-5 mr-2" />
            Kostenlos beraten lassen
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ListIcon, PhoneIcon } from 'lucide-vue-next'
</script>
