<template>
    <header id="header" class="flex flex-col justify-center items-center h-[var(--header-height)] fixed top-0 left-0 w-full bg-primary text-white text-sm transition-transform duration-300 ease-in-out z-50" :class="{ '-translate-y-full': isScrolledDown, 'translate-y-0': isNavOpen }">
        <div class="container flex justify-between items-center">
            <!-- Logo -->
            <NuxtLink :to="`/`">
                <NuxtImg src="/images/logo.svg" alt="Logo" width="159" height="57" />
            </NuxtLink>

            <!-- Desktop Navigation -->
            <HeaderDesktopHeader :menuItems="menuItems" />

            <!-- Mobile Menu Toggle Icon -->
            <div id="nav-toggle" class="block lg:hidden rounded cursor-pointer" :class="{ toggled: isNavOpen }" dir="rtl" @click="toggleNav">
                <div class="line1 w-[20px] h-[3px] bg-black rounded-3xl transition-all duration-300 ease-in-out"></div>
                <div class="line2 my-1 w-3/4 h-[3px] bg-black rounded-3xl transition-all duration-300 ease-in-out"></div>
                <div class="line3 w-[20px] h-[3px] bg-black rounded-3xl transition-all duration-300 ease-in-out"></div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <HeaderMobileHeader :menuItems="menuItems" v-model:isNavOpen="isNavOpen" />
    </header>
</template>

<script setup>
    const isOnTop = ref(true);
    const lastScrollPosition = ref(0);
    const isScrolledDown = ref(false);
    const isScrolledUp = ref(false);
    const scrollThreshold = 200;
    const isNavOpen = ref(false);

    const menuItems = ref([
        {
            title: "Features",
            id: "features",
        },
        {
            title: "Why us?",
            id: "why-us",
        },
        {
            title: "Architecture",
            id: "architecture",
        },
        {
            title: "Contact us",
            id: "contact-us",
        },
    ]);

    const toggleNav = () => {
        isNavOpen.value = !isNavOpen.value;
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    const checkScrollPosition = () => {
        // Check if the user is at the top of the page on mount
        isOnTop.value = window.scrollY === 0;
    };
    
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        // Determine the scroll direction
        const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

        // Set the value for isScrolledUp if the user is scrolling up
        isScrolledUp.value = scrollDirection === 'up';

        // Check if the user has scrolled down more than the threshold
        isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

        // Check if the user is at the top of the page
        isOnTop.value = currentScrollPosition === 0;

        // Update the last scroll position
        lastScrollPosition.value = currentScrollPosition;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        checkScrollPosition();
    });
</script>

<style lang="sass" scoped>

</style>