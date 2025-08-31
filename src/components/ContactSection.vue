<template>
  <section id="contact" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h2 class="text-3xl lg:text-4xl font-bold text-foreground">
              Kostenlos anfragen
            </h2>
            <p class="text-xl text-muted-foreground">
              Kontaktieren Sie uns für ein unverbindliches Angebot. 
              Wir beraten Sie gerne und erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
          </div>
          
          <!-- Contact Methods -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <Phone class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">Telefon</div>
                <div class="text-muted-foreground">+49 (0) 123 456 789</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <Mail class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">E-Mail</div>
                <div class="text-muted-foreground">info@mukhtar-umzuge.de</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <MapPin class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">Standort</div>
                <div class="text-muted-foreground">Deutschlandweit verfügbar</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <Clock class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">Öffnungszeiten</div>
                <div class="text-muted-foreground">Mo-Fr: 8:00-18:00, Sa: 9:00-14:00</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-card p-8 rounded-xl shadow-lg border border-border">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-card-foreground mb-2">Vorname</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder="Ihr Vorname"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-card-foreground mb-2">Nachname</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder="Ihr Nachname"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">E-Mail</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                placeholder="ihre.email@beispiel.de"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">Telefon</label>
              <input 
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                placeholder="+49 123 456 789"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">Umzugsart</label>
              <select 
                v-model="form.moveType"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
              >
                <option value="">Bitte wählen</option>
                <option value="privatumzug">Privatumzug</option>
                <option value="firmenumzug">Firmenumzug</option>
                <option value="fernumzug">Fernumzug</option>
                <option value="seniorenumzug">Seniorenumzug</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">Nachricht</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input resize-none"
                placeholder="Beschreiben Sie Ihren Umzug..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <Send class="mr-2 h-5 w-5" />
              Kostenlos anfragen
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-vue-next'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  moveType: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.')
}
</script>