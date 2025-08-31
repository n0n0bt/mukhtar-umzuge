<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <TruckIcon class="h-8 w-8 text-emerald-600 mr-2" />
            <span class="text-xl font-bold text-gray-900">Mukhtar Umzüge</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ 'text-emerald-600 border-b-2 border-emerald-600': $route.path === '/' }"
            >
              Startseite
            </router-link>
            <router-link 
              to="/leistungen" 
              class="nav-link"
              :class="{ 'text-emerald-600 border-b-2 border-emerald-600': $route.path === '/leistungen' }"
            >
              Leistungen
            </router-link>
            <router-link 
              to="/ueber-uns" 
              class="nav-link"
              :class="{ 'text-emerald-600 border-b-2 border-emerald-600': $route.path === '/ueber-uns' }"
            >
              Über uns
            </router-link>
            <router-link 
              to="/referenzen" 
              class="nav-link"
              :class="{ 'text-emerald-600 border-b-2 border-emerald-600': $route.path === '/referenzen' }"
            >
              Referenzen
            </router-link>
            <router-link 
              to="/kontakt" 
              class="nav-link"
              :class="{ 'text-emerald-600 border-b-2 border-emerald-600': $route.path === '/kontakt' }"
            >
              Kontakt
            </router-link>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="tel:+4915123456789" class="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
            <PhoneIcon class="h-4 w-4 mr-2" />
            Jetzt anrufen
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-emerald-600">
            <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <XIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Startseite</router-link>
          <router-link to="/leistungen" class="mobile-nav-link" @click="mobileMenuOpen = false">Leistungen</router-link>
          <router-link to="/ueber-uns" class="mobile-nav-link" @click="mobileMenuOpen = false">Über uns</router-link>
          <a href="#" class="mobile-nav-link">Referenzen</a>
          <a href="#kontakt" class="mobile-nav-link">Kontakt</a>
          <a href="tel:+4915123456789" class="bg-emerald-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4">
            Jetzt anrufen
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { TruckIcon, PhoneIcon, MenuIcon, XIcon } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors;
}

.mobile-nav-link {
  @apply text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium;
}
</style>
