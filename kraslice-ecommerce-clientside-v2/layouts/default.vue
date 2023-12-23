<template>
    <header class="z-50 sticky top-0">
        <AppNav />
    </header>
    <main>
        <slot />
    </main>
    <footer class="bg-white border-t mt-auto"><AppFooter /></footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
