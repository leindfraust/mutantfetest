<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { navMainMenus as navMenus } from '../../data/navMenus'

const navMainMenus = ref<string[]>(navMenus.value)

const windowHeight = ref<number>(0)

function handleResize() {
    windowHeight.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', () => handleResize())
})
onUnmounted(() => {
    window.removeEventListener('scroll', () => handleResize())
})


</script>
<template>
    <div class="navbar lg:p-12"
        :class="{ 'dark-nav': windowHeight > 10, 'animate__animated animate__fadeInDown': windowHeight > 10, 'animate__animated animate__fadeIn': windowHeight === 0 }">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li v-for="navMenu in navMainMenus"><a class="text-black">{{ navMenu.toUpperCase() }}</a></li>

                </ul>
            </div>
            <img src="/cakeboutique.svg" />
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="navMenu in navMainMenus"><a>{{ navMenu.toUpperCase() }}</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="flex items-center gap-6">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="xl" />
                <font-awesome-icon :icon="['far', 'user']" size="xl" />
                <font-awesome-icon :icon="['fas', 'shopping-cart']" size="xl" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.dark-nav {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    z-index: 50;
    padding: 1rem;
}
</style>