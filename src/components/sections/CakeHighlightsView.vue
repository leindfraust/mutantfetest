<script setup lang="ts">
import { ref } from 'vue';

const images = ref<string[]>([

])
</script>
<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 p-4">
        <div class="container" v-for="n in 8">
            <img :src="`/assets/cakes/highlights/image-00${n}.jpg`" class="border-white border-8" />
        </div>
    </div>
</template> 