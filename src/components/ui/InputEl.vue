<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    placeholder: String,
    type: String as () => 'text' | 'number'
})

const inputType = ref<'text' | 'number'>(props.type)
const inputPlaceholder = ref<string>(props.placeholder)

</script>

<template>
    <input :type="inputType" :placeholder="inputPlaceholder" class="input input-ghost w-full max-w-xs" />
</template>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>