<template>
    <nav class="hidden lg:block">
        <ul class="flex justify-between items-center gap-8">
            <li v-for="(item, index) in menuItems" :key="index" class="relative flex justify-between items-center gap-2">
                <ScrollButton :target="item.id" class="transition-all duration-300 ease-in-out font-bold cursor-pointer">{{ item.title }}</ScrollButton>
            </li>
        </ul>
    </nav>

    <div class="hidden lg:flex justify-between items-center gap-6">
        <button class="flex items-center font-bold gap-2 py-4 px-6 min-w-[120px] bg-primary text-white rounded-full select-none transition-all duration-300 ease-in-out">Start Free Trial
            <Icon name="line-md:arrow-right" class="text-lg" />
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        menuItems: Array,
    });
</script>