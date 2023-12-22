<script setup lang="ts">
import { ref } from 'vue';

const featuredCakes = ref<string[]>([
    'birthday',
    'wedding',
    'christmas'
])
</script>

<template>
    <div class="lg:flex items-center justify-center gap-8 lg:p-12 p-8 space-y-8 lg:space-y-0 mt-12 mb-12">
        <div class="lg:w-96 w-60 mx-auto relative featured-cake cursor-pointer" v-for="featuredCake in featuredCakes">
            <img :src="`/assets/cakes/featured/${featuredCake}.jpg`" class="mx-auto" />
            <p class="text-white text-3xl bottom-10 absolute lg:left-[25%] left-4 opacity-0 break-words">{{
                featuredCake.charAt(0).toUpperCase() +
                featuredCake.slice(1) }} Cake
            </p>
        </div>
    </div>
</template>

<style scoped>
.relative:hover>p {
    opacity: 1;
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.featured-cake:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1));
    opacity: 0.7;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>