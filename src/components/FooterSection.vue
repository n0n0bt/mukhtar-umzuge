<template>
  <footer class="bg-sidebar text-sidebar-foreground py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center">
            <Truck class="h-8 w-8 text-sidebar-accent mr-3" />
            <span class="text-xl font-bold">Mukhtar Umzüge</span>
          </div>
          <p class="text-sidebar-foreground/80 leading-relaxed">
            Ihr zuverlässiger Partner für professionelle Umzüge und Transporte in ganz Deutschland.
          </p>
          <div class="flex space-x-4">
            <div class="bg-sidebar-accent/10 p-2 rounded-full">
              <Phone class="h-5 w-5 text-sidebar-accent" />
            </div>
            <div class="bg-sidebar-accent/10 p-2 rounded-full">
              <Mail class="h-5 w-5 text-sidebar-accent" />
            </div>
          </div>
        </div>
        
        <!-- Services -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Leistungen</h3>
          <ul class="space-y-2">
            <li><a href="/leistungen#services" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Privatumzüge</a></li>
            <li><a href="/leistungen#services" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Firmenumzüge</a></li>
            <li><a href="/leistungen#services" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Fernumzüge</a></li>
            <li><a href="/leistungen#services" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Verpackungsservice</a></li>
            <li><a href="/leistungen#services" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Lagerung</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Unternehmen</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Über uns</a></li>
            <li><a href="#" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Karriere</a></li>
            <li><a href="#" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Referenzen</a></li>
            <li><a href="#" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Blog</a></li>
            <li><a href="#" class="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors">Presse</a></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Kontakt</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Phone class="h-4 w-4 text-sidebar-accent" />
              <span class="text-sidebar-foreground/80">+49 (0) 123 456 789</span>
            </div>
            <div class="flex items-center space-x-3">
              <Mail class="h-4 w-4 text-sidebar-accent" />
              <span class="text-sidebar-foreground/80">info@mukhtar-umzuge.de</span>
            </div>
            <div class="flex items-center space-x-3">
              <MapPin class="h-4 w-4 text-sidebar-accent" />
              <span class="text-sidebar-foreground/80">Deutschlandweit</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sidebar-foreground/60 text-sm">
          © 2024 Mukhtar Umzüge & Transport. Alle Rechte vorbehalten.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-sidebar-foreground/60 hover:text-sidebar-accent text-sm transition-colors">Impressum</a>
          <a href="#" class="text-sidebar-foreground/60 hover:text-sidebar-accent text-sm transition-colors">Datenschutz</a>
          <a href="#" class="text-sidebar-foreground/60 hover:text-sidebar-accent text-sm transition-colors">AGB</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Truck, Phone, Mail, MapPin } from 'lucide-vue-next'
</script>