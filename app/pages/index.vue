<template>
    <section class="pt-44 pb-14 bg-[#041527]">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h1 class="text-6xl text-[#D3D5D8]">Enterprise High Grade Messaging Software</h1>
                <p class="text-2xl text-[#D3D5D8]">Enhanced A2P SMS Business. High Availability. High Throughput</p>
                <div class="flex justify-center items-center gap-4">
                    <button class="flex items-center font-bold gap-2 py-4 px-6 min-w-[120px] bg-primary border-2 border-primary text-sm text-white rounded-full select-none transition-all duration-300 ease-in-out">Start Free Trial
                        <Icon name="line-md:arrow-right" class="text-lg" />
                    </button>
                    <button class="flex items-center font-bold gap-2 py-4 px-6 min-w-[120px] bg-transparent border-2 border-white text-sm text-white rounded-full select-none transition-all duration-300 ease-in-out">View demo
                        <Icon name="line-md:arrow-right" class="text-lg" />
                    </button>
                </div>
            </div>
            <NuxtImg src="images/homepage-banner.png" class="mt-12 w-full" loading="lazy" alt="Homepage Banner" width="2551" height="1337" />
        </div>
    </section>

    <section class="relative pt-6 pb-44 bg-[#041527]">
        <div class="marquee overflow-hidden">
            <div class="wrapper grid grid-flow-col auto-cols-[8rem] lg:auto-cols-[20rem] justify-items-center items-center mt-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                    <!-- <a :href="marquee.link" target="_blank"> -->
                        <NuxtImg class="marquee-item max-lg:w-2/3 " :src="`images/${marquee.image}.webp`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" />
                    <!-- </a> -->
                </template>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full">
            <NuxtImg src="images/semi-circle.svg" class="mt-12 w-full" loading="lazy" alt="Semi Circle Shape" width="1440" height="87" />
        </div>
    </section>
    
    <section class="my-6 py-6">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[linear-gradient(114deg,rgba(196,224,253,1)_0%,rgba(94,173,255,1)_100%)] text-2xl text-[#003294] font-bold">FEATURES</h2>
                <h3 class="text-6xl">Features and benefits of A2P SMS</h3>
                <p class="text-2xl">B'PAL is a robust Business Support Solution developed by MontyMobile. It offers a unified and comprehensive management platform for SMS Interconnect Services.</p>
            </div>
            <NuxtImg src="images/features-and-benefits-of-a2p-sms.png" class="mt-12 w-full" loading="lazy" alt="Features and benefits of A2P SMS" width="2494" height="965" />

            <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl font-bold">Multi-Currency</h2>
                    <p class="text-base">B'PAL is a robust Business Support Solution developed by MontyMobile. It offers a unified and comprehensive management platform for SMS Interconnect Services.</p>
                    <NuxtImg src="images/multi-currency.png" class="mt-auto w-full" loading="lazy" alt="Multicurrency" width="1124" height="602" />

                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl font-bold">DND Mode</h2>
                    <p class="text-base">Saves consumers from spontaneous SMS & blocks any undesired SMS</p>
                    <NuxtImg src="images/dnd-mode.png" class="mt-auto w-full" loading="lazy" alt="Multicurrency" width="110" height="564" />
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mt-8">
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl font-bold">Prefix & Content Translation</h2>
                    <p class="text-base">Alter all types of Sender IDs and Message Content to deal with any regulations specified by any Vendor or Mobile Operator worldwide</p>
                    <NuxtImg src="images/prefix-and-content-translation.png" class="mt-auto w-full" loading="lazy" alt="Prefix & Content Transla" width="1124" height="602" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl font-bold">Automated Cost Importation</h2>
                    <p class="text-base">Cost sheets sent by vendors can be automatically detected, mapped and imported to the system without any human intervention</p>
                    <NuxtImg src="images/automated-cost-importation.png" class="mt-auto w-full" loading="lazy" alt="automated-cost-importation" width="110" height="564" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl font-bold">Live Monitor & Gateway Monitor</h2>
                    <p class="text-base">Users can monitor their SMS traffic from the Live Monitor, connection status and all details directly from the Gateway Monitor</p>
                    <NuxtImg src="images/live-monitor-and-gateway-monitor.png" class="mt-auto w-full" loading="lazy" alt="live-monitor-and-gateway-monitor" width="110" height="564" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const marqueeList = [
        { image: "1", alt: "MyMonty", width: "174", height: "35", link: "https://mymonty.com" },
        { image: "2", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
        { image: "3", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "4", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "5", alt: "Monty Capital", width: "225", height: "35", link: "https://montycapital.com" },
        { image: "6", alt: "MyMonty", width: "174", height: "35", link: "https://mymonty.com" },
        { image: "7", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
        { image: "8", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "9", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "10", alt: "Monty Capital", width: "225", height: "35", link: "https://montycapital.com" },
    ];
    const duplicatedMarqueeList = computed(() => [...marqueeList, ...marqueeList]);
</script>

<style lang="sass" scoped>

</style>