<template>
    <footer class="my-12 py-12">
        <div class="container">
            <div class="flex max-md:flex-col md:justify-between gap-4">
                <ul class="order-2 md:order-1 flex md:items-center gap-8 text-sm">
                    <li vclass="relative flex justify-between items-center gap-2">Terms & Conditions</li>
                    <li vclass="relative flex justify-between items-center gap-2">Copyright</li>
                </ul>

                <ul class="order-1 md:order-2 md:w-2/5 flex md:items-center gap-8">
                    <li v-for="(item, index) in menuItems" :key="index" class="text-sm flex justify-between items-center gap-2 md:ml-auto">{{ item.title }}</li>
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