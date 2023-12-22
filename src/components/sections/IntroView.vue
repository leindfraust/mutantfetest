<script setup lang="ts">
import NavigationBar from '../ui/NavigationBar.vue';

const emit = defineEmits(['scrollCakeHighlights'])

</script>
<template>
    <div class="hero min-h-screen relative bg-bottom">
        <NavigationBar class="top-0 fixed" />
        <div class="hero-content text-center">
            <div class="max-w-full">
                <h1 class="text-7xl lg:text-[9rem] mb-8">Passion Craft</h1>
                <button class="btn bg-white rounded-full btn-sm lg:btn-md">ORDER NOW</button>
            </div>
        </div>
        <div class="more-caret-div bottom-12 absolute">
            <div class="flex items-center gap-2 more-caret cursor-pointer" @click="$emit('scrollCakeHighlights')">
                <p class="text-2xl">MORE </p>
                <font-awesome-icon :icon="['fas', 'caret-down']" size="xl" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero {
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1)), url('/assets/cakes/intro.jpg') no-repeat center;
    background-size: cover;
    background-position: bottom;
}

.more-caret-div:hover>.more-caret {
    animation: slideInDown;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
</style>

