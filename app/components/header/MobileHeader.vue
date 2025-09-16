<template>
    <nav id="mobile-nav" :class="{ '-translate-x-full': !isNavOpen }" class="block lg:hidden fixed top-[var(--header-height)] left-0 h-dvh w-full bg-white z-[2] transition-all duration-500 ease-in-out">
        <!-- Scrollable content container with bottom padding -->
        <div class="container relative h-full pb-48 overflow-y-scroll">
            <ul class="flex flex-col pt-6 divide-y divide-[#E5E5E5]">
                <li v-for="(item, itemIndex) in menuItems" :key="itemIndex" class="py-6">
                    <ScrollButton :target="item.id" class="flex justify-between items-center text-xl font-bold link">{{ item.title }}</ScrollButton>
                </li>
            </ul>
        </div>

        <!-- Get Quote Button positioned absolutely at the bottom of the nav -->
        <div class="absolute bottom-[var(--header-height)] left-1/2 -translate-x-1/2 flex lg:hidden justify-center items-center gap-6 w-full bg-white border-t py-2 z-[3]">
            <button class="link flex items-center font-bold gap-2 py-4 px-6 min-w-[120px] bg-primary text-white rounded-full select-none transition-all duration-300 ease-in-out">Start Free Trial
                <Icon name="line-md:arrow-right" class="link text-lg" />
            </button>
        </div>
    </nav>
</template>


<script setup>
    const props = defineProps({
        menuItems: { type: Array, required: true },
        isNavOpen: { type: Boolean, default: false },
    });

    const emit = defineEmits(["update:isNavOpen"]);
    const activeIndices = ref([]); // Track active dropdown indices

    const closeNav = () => {
        emit("update:isNavOpen", false);
        document.body.classList.remove("overflow-y-hidden");
    };

    // Function to toggle active indices
    const toggleActive = (index) => {
        activeIndices.value[index] = !activeIndices.value[index];
    };

    // Handle global click to close the menu
    const handleGlobalClick = (event) => {
        if (event.target.classList.contains("link")) {
            closeNav();
            document.body.classList.toggle("overflow-y-hidden", false);
        }
    };

    onMounted(() => {
        document.body.addEventListener("click", handleGlobalClick);
    });

    onUnmounted(() => {
        document.body.removeEventListener("click", handleGlobalClick);
    });
</script>