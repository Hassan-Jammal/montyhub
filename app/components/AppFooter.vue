<template>
    <footer class="my-12 py-12">
        <div class="container">
            <div class="flex max-md:flex-col md:justify-between md:items-center gap-12">
                <div>
                    <NuxtImg src="/images/logo.svg" alt="Logo" width="159" height="57" />
                    <p class="mt-4">Enhanced A2P SMS Business.</p>
                </div>
                <ul class="flex max-md:flex-col md:justify-between md:items-center gap-8">
                    <li v-for="(item, index) in menuItems" :key="index" class="relative flex justify-between items-center gap-2">
                        <span class="transition-all duration-300 ease-in-out font-bold">{{ item.title }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const menuItems = ref([
        {
            title: "Features",
        },
        {
            title: "Why us?",
        },
        {
            title: "Architecture",
        },
        {
            title: "Contact us",
        },
    ]);
</script>