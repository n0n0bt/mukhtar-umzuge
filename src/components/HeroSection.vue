<template>
  <section id="home" class="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Ihr zuverlässiger
              <span class="text-primary">Umzugspartner</span>
              in Deutschland
            </h1>
            <p class="text-xl text-muted-foreground leading-relaxed">
              Professionelle Umzüge und Transporte deutschlandweit. 
              Stressfrei umziehen mit über 15 Jahren Erfahrung.
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center">
              <Phone class="mr-2 h-5 w-5" />
              Kostenlos anfragen
            </button>
            <button class="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center">
              <Calculator class="mr-2 h-5 w-5" />
              Preis berechnen
            </button>
          </div>
          
          <!-- Trust Indicators -->
          <div class="flex items-center space-x-8 pt-8">
            <div class="flex items-center">
              <Shield class="h-6 w-6 text-primary mr-2" />
              <span class="text-sm text-muted-foreground">Vollversichert</span>
            </div>
            <div class="flex items-center">
              <Clock class="h-6 w-6 text-primary mr-2" />
              <span class="text-sm text-muted-foreground">24/7 Service</span>
            </div>
            <div class="flex items-center">
              <Star class="h-6 w-6 text-primary mr-2" />
              <span class="text-sm text-muted-foreground">15+ Jahre</span>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div class="relative flex justify-center">
          <img 
            src="/public/deutschland-karte.png" 
            alt="Professionelles Umzugsteam" 
          />
          <div class="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <MapPin class="h-6 w-6 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-card-foreground">Deutschlandweit</p>
                <p class="text-sm text-muted-foreground">Alle Bundesländer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, Calculator, Shield, Clock, Star, MapPin } from 'lucide-vue-next'
</script>