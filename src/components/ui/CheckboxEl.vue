<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps({
    name: String
})

const checkboxName = ref<string>(props.name)

</script>
<template>
    <div className="form-control ml-4 mt-4">
        <label className=" space-x-2 flex items-center cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span>{{ checkboxName }}</span>
        </label>
    </div>
</template>