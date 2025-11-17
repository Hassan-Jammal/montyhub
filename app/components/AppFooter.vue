<template>
    <footer class="my-12 py-12">
        <div class="container">
            <div class="lg:w-3/5">
                <h2 class="max-md:text-3xl md:text-5xl font-bold">Combine Automation And Human Support Today</h2>
            </div>
            <div class="flex max-lg:flex-col lg:justify-between lg:items-center gap-4 lg:gap-12 mt-12">
                <div class="lg:w-3/5 flex gap-2">
                    <input type="text" class="px-4 py-2 rounded-md bg-[#F6FAFC] w-2/3" placeholder="work@email.com">
                    <button class="font-bold py-4 text-nowrap px-10 min-w-[120px] bg-[#0096ED26] text-sm text-secondary rounded-md select-none transition-all duration-300 ease-in-out">Sign Up</button>
                </div>
                <ul class="lg:w-2/5 flex lg:justify-between lg:items-center gap-8 max-lg:mt-12">
                    <li v-for="(item, index) in menuItems" :key="index" class="text-sm flex justify-between items-center gap-2">{{ item.title }}</li>
                </ul>
            </div>

            <hr class="my-8" />

            <ul class="lg:w-2/5 flex lg:justify-between lg:items-center gap-8 text-sm">
                <li vclass="relative flex justify-between items-center gap-2">Terms & Conditions</li>
                <li vclass="relative flex justify-between items-center gap-2">Copyright</li>
            </ul>
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