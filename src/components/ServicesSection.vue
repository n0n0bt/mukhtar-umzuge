<template>
  <section id="services" class="py-20 bg-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Unsere Leistungen
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Von Privatumzügen bis hin zu Firmenumzügen - wir bieten Ihnen den kompletten Service aus einer Hand.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
          class="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
          <div class="bg-primary/10 p-4 rounded-full w-fit mb-6">
            <component :is="service.icon" class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-4">{{ service.title }}</h3>
          <p class="text-muted-foreground mb-6 leading-relaxed">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature"
              class="flex items-center text-sm text-muted-foreground">
              <Check class="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <router-link to="/leistungen"
          class="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
          Alle Leistungen ansehen
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Home, Building2, Package, Truck, Users, Check } from 'lucide-vue-next'

const services = [
  {
    title: 'Privatumzüge',
    description: 'Stressfreier Umzug für Ihr Zuhause mit professioneller Betreuung von A bis Z.',
    icon: Home,
    features: [
      'Kostenlose Besichtigung',
      'Verpackungsservice',
      'Möbelmontage',
      'Vollversicherung'
    ]
  },
  {
    title: 'Firmenumzüge',
    description: 'Effiziente Büroumzüge mit minimaler Ausfallzeit für Ihr Unternehmen.',
    icon: Building2,
    features: [
      'Wochenend-/Nachtumzüge',
      'IT-Equipment Transport',
      'Projektmanagement',
      'Nachbetreuung'
    ]
  },
  {
    title: 'Verpackungsservice',
    description: 'Professionelle Verpackung Ihrer wertvollen Gegenstände mit hochwertigen Materialien.',
    icon: Package,
    features: [
      'Hochwertige Materialien',
      'Fachgerechte Verpackung',
      'Spezialverpackungen',
      'Auspackservice'
    ]
  },
  {
    title: 'Fernumzüge',
    description: 'Deutschlandweite Umzüge mit zuverlässiger Logistik und pünktlicher Lieferung.',
    icon: Truck,
    features: [
      'Deutschlandweit',
      'Termingarantie',
      'GPS-Tracking',
      'Zwischenlagerung'
    ]
  },
  {
    title: 'Seniorenumzüge',
    description: 'Einfühlsamer Service für ältere Menschen mit besonderer Betreuung.',
    icon: Users,
    features: [
      'Persönliche Betreuung',
      'Entrümpelung',
      'Behördengänge',
      'Nachsorge'
    ]
  },
  {
    title: 'Lagerung',
    description: 'Sichere Einlagerung Ihrer Möbel und Gegenstände in unseren modernen Lagerhallen.',
    icon: Package,
    features: [
      'Klimatisierte Lager',
      '24/7 Überwachung',
      'Flexible Laufzeiten',
      'Inventarlisten'
    ]
  }
]
</script>