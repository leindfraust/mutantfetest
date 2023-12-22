<script setup lang="ts">
import { ref } from 'vue';
import CakeFeatured from './components/sections/CakeFeaturedView.vue';
import IntroView from './components/sections/IntroView.vue';
import AboutView from './components/sections/AboutView.vue';
import CakeHighlightsView from './components/sections/CakeHighlightsView.vue';
import FooterView from './components/sections/FooterView.vue';

const cakeHighlightsView = ref(null)

function scrollIntoCakeHighlightsView(component: { $el: HTMLElement }) {

  component.$el.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}

</script>

<template>
  <div class="text-white font-light">
    <IntroView @scroll-cake-highlights="scrollIntoCakeHighlightsView(cakeHighlightsView)" />
    <CakeFeatured ref="cakeHighlightsView" />
    <AboutView />
    <CakeHighlightsView />
    <FooterView />
  </div>
</template>
