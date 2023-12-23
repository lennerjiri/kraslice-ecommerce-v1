<template>
    <div
        class="flex items-center justify-between rounded-lg border border-gray-200 p-5 w-full col-span-3"
    >
        <div class="flex items-center">
            <svg
                height="512"
                viewBox="0 0 32 32"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 fill-rose-500 mr-4"
            >
                <g id="Layer_2" data-name="Layer 2">
                    <path
                        d="m16 1a15 15 0 1 0 15 15 15 15 0 0 0 -15-15zm0 26.3a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm3.45-16.9-2.45 9.98a1 1 0 0 1 -1.93 0l-2.47-10a3.55 3.55 0 0 1 3.45-4.38 3.54 3.54 0 0 1 3.4 4.4z"
                    />
                </g>
            </svg>
            <p>Nenalezena žádná položka odpovídající filtrům!</p>
        </div>

        <button
            type="submit"
            class="flex items-center justify-center rounded-md border border-transparent bg-rose-500 py-3 px-5 text-base font-medium text-white hover:bg-rose-600"
            @click="removeFilters"
        >
            Odstranit Filtry
        </button>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emits = defineEmits(['removeFilters']);

const removeFilters = () => {
    emits('removeFilters');
};
</script>

<style scoped></style>
