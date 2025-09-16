<template>
    <section class="pt-20 md:pt-44 pb-14 bg-[#041527]">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h1 class="text-3xl md:text-6xl font-bold text-balance text-[#D3D5D8]">Enterprise High Grade Messaging Software</h1>
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

    <section class="relative pt-6 pb-32 md:pb-72 bg-[#041527]">
        <div class="marquee overflow-hidden">
            <div class="wrapper grid grid-flow-col auto-cols-[8rem] lg:auto-cols-[20rem] justify-items-center items-center mt-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                    <!-- <a :href="marquee.link" target="_blank"> -->
                        <NuxtImg class="marquee-item max-lg:w-2/3 " :src="`images/${marquee.image}.webp`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" />
                    <!-- </a> -->
                </template>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full -mt-1">
            <NuxtImg src="images/semi-circle.svg" class="mt-12 w-full" loading="lazy" alt="Semi Circle Shape" width="1440" height="87" />
        </div>
    </section>
    
    <section id="features" class="my-6 py-6">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[linear-gradient(114deg,rgba(196,224,253,1)_0%,rgba(94,173,255,1)_100%)] text-2xl text-[#003294] font-bold">FEATURES</h2>
                <h3 class="text-3xl md:text-6xl font-bold text-balance">Features and benefits of A2P SMS</h3>
                <p class="text-xl md:text-2xl leading-normal">B'PAL is a robust Business Support Solution developed by MontyMobile. It offers a unified and comprehensive management platform for SMS Interconnect Services.</p>
            </div>
            <NuxtImg src="images/features-and-benefits-of-a2p-sms.png" class="mt-12 w-full" loading="lazy" alt="Features and benefits of A2P SMS" width="2494" height="965" />

            <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Multi-Currency</h2>
                    <p class="text-base">B'PAL is a robust Business Support Solution developed by MontyMobile. It offers a unified and comprehensive management platform for SMS Interconnect Services.</p>
                    <NuxtImg src="images/multi-currency.png" class="mt-auto w-full" loading="lazy" alt="Multicurrency" width="1124" height="602" />

                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">DND Mode</h2>
                    <p class="text-base">Saves consumers from spontaneous SMS & blocks any undesired SMS</p>
                    <NuxtImg src="images/dnd-mode.png" class="mt-auto w-full" loading="lazy" alt="Multicurrency" width="110" height="564" />
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mt-8">
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Prefix & Content Translation</h2>
                    <p class="text-base">Alter all types of Sender IDs and Message Content to deal with any regulations specified by any Vendor or Mobile Operator worldwide</p>
                    <NuxtImg src="images/prefix-and-content-translation.png" class="mt-auto w-full" loading="lazy" alt="Prefix & Content Transla" width="1124" height="602" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Automated Cost Importation</h2>
                    <p class="text-base">Cost sheets sent by vendors can be automatically detected, mapped and imported to the system without any human intervention</p>
                    <NuxtImg src="images/automated-cost-importation.png" class="mt-auto w-full" loading="lazy" alt="automated-cost-importation" width="110" height="564" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Live Monitor & Gateway Monitor</h2>
                    <p class="text-base">Users can monitor their SMS traffic from the Live Monitor, connection status and all details directly from the Gateway Monitor</p>
                    <NuxtImg src="images/live-monitor-and-gateway-monitor.png" class="mt-auto w-full" loading="lazy" alt="live-monitor-and-gateway-monitor" width="110" height="564" />
                </div>
            </div>
        </div>
    </section>
    
    <section class="my-6 py-6 md:my-24 md:py-24">
        <div class="container">
            <div class="md:w-2/3 mx-auto flex flex-col items-center gap-14 text-center">
                <NuxtImg src="images/zilch.svg" loading="lazy" alt="Zilch" width="105" height="45" />
                <h3 class="text-2xl md:text-4xl text-balance leading-normal">“Our bot deflection rate with our previous customer service solution was 5-10%. With Intercom, we achieved <span class="font-bold">65% bot deflection within just one week</span> of going live.“</h3>
                <div class="flex justify-center gap-8 md:gap-14">
                    <div class="shrink-0 w-24">
                        <NuxtImg src="images/stuart-sykes.png" loading="lazy" alt="Stuart Sykes" width="178" height="177" />
                    </div>
                    <div class="flex flex-col items-start gap-2">
                        <p class="text-lg md:text-2xl font-bold">Stuart Sykes</p>
                        <p class="text-lg md:text-2xl text-left">VP of Service Operations, Zilch</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="why-us" class="my-6 py-6">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[linear-gradient(114deg,rgba(196,224,253,1)_0%,rgba(94,173,255,1)_100%)] text-2xl text-[#003294] font-bold">WHY US?</h2>
                <h3 class="text-3xl md:text-6xl font-bold text-balance">Comprehensive and Unified Platform for SMS Business Management</h3>
                <p class="text-xl md:text-2xl leading-normal">Presents a complete suite for billing, rate and policy management, deal and dispute management, order management and automation of the SMS business processes.</p>
                <p class="flex items-center gap-2 text-sm text-primary font-bold mt-6">Learn more about our features 
                    <Icon name="line-md:arrow-right" class="text-lg" />
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mt-12">
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Independent Platform</h2>
                    <p class="text-base">Our Messaging Portals work efficiently while saving costs on the network of your choice, you can choose between Windows or Open Linux OS.</p>
                    <NuxtImg src="images/independent-platform.png" class="mt-auto w-full" loading="lazy" alt="Independent Platform" width="1146" height="575" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Advanced Billing</h2>
                    <p class="text-base">Our advanced billing module handles the whole process of the billing system from the beginning to the end such as:</p>
                    <ul class="list-disc list-inside pl-4 font-bold">
                        <li>Generate Invoices</li>
                        <li>Automated Invoices</li>
                        <li>Notes</li>
                        <li>Payments</li>
                    </ul>
                    <NuxtImg src="images/advanced-billing.png" class="mt-auto w-full" loading="lazy" alt="Advanced Billing" width="930" height="582" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Advanced Routing</h2>
                    <p class="text-base">Advanced Routing allows you to create new routes, manage existing ones easily, apply different actions to routes, and have the opportunity to Sub-Route. Not to mention the ability for the system to automatically switch or blend vendors, and block routes based on specific rules and conditions.</p>
                    <NuxtImg src="images/advanced-routing.png" class="mt-auto w-full" loading="lazy" alt="Advanced Routing" width="830" height="492" />

                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(243,249,255,1)_0%,rgba(196,224,253,1)_100%)]">
                    <h2 class="text-2xl text-balance font-bold">Monitoring & Reporting</h2>
                    <p class="text-base">B'PAL allows you to monitor Live Traffic which includes detailed traffic statistics and traffic behavior. No matter how large the amount is, users can view their traffic in an instant matter with an easy-to-read analytical interface, or view a report of their traffic based on their criteria set.</p>
                    <NuxtImg src="images/monitoring-and-reporting.png" class="mt-auto w-full" loading="lazy" alt="Monitoring & Reporting" width="821" height="492" />
                </div>
            </div>
        </div>
    </section>

    <section class="my-6 py-6 md:my-24 md:py-24">
        <div class="container">
            <div class="md:w-2/3 md:mx-auto flex flex-col items-center gap-14 text-center">
                <NuxtImg src="images/true-commerce.svg" loading="lazy" alt="TrueCommerce" width="156" height="25" />
                <h3 class="text-2xl md:text-4xl text-balance leading-normal">“Self-service and proactive support have helped us <span class="font-bold">reduce inbound conversation volume by 20%</span>  over the past two years, even as our user base has continued to grow.“</h3>
                <div class="flex justify-center gap-8 md:gap-14">
                    <div class="shrink-0 w-24">
                        <NuxtImg src="images/christian-parker.png" loading="lazy" alt="Christian Parker" width="178" height="177" />
                    </div>
                    <div class="flex flex-col items-start gap-2">
                        <p class="text-lg md:text-2xl font-bold">Christian Parker</p>
                        <p class="text-lg md:text-2xl text-left">Director of Managed Services, <br /> TrueCommerce</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="architecture" class="relative my-12 py-12 md:py-48 text-white bg-[#041527]">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[linear-gradient(114deg,rgba(196,224,253,1)_0%,rgba(202,240,248,1)_100%)] text-2xl text-[#423200] font-bold">ARCHITECTURE</h2>
                <h3 class="text-3xl md:text-6xl font-bold text-balance">A single, powerful, easy-to-use platform</h3>
                <p class="text-xl md:text-2xl leading-normal">An intelligent, modular architecture designed to unify billing, policy, order, and dispute management while automating every layer of the SMS business process.</p>
                <p class="flex items-center gap-2 text-sm font-bold mt-6">Learn more about the Intercom Platform 
                    <Icon name="line-md:arrow-right" class="text-lg" />
                </p>
            </div>
            <NuxtImg src="images/easy-to-use-platform.png" class="md:w-4/5 mx-auto mt-24 w-full" loading="lazy" alt="Single, Powerful, Easy-to-use platform" width="2090" height="1398" />

            <div class="grid md:grid-cols-3 md:justify-center md:items-start gap-8 md:gap-24 mt-32">
                <div class="flex  gap-4">
                    <Icon name="material-symbols:check-circle-rounded" class="flex-shrink-0 text-3xl" />
                    <p>Seamless integration for SMS, MMS, and OTT channels.</p>
                </div>
                 <div class="flex gap-4">
                    <Icon name="material-symbols:check-circle-rounded" class="flex-shrink-0 text-3xl" />
                    <p>Built-in safeguards against grey routes, and unauthorized traffic.</p>
                </div>
                 <div class="flex gap-4">
                    <Icon name="material-symbols:check-circle-rounded" class="flex-shrink-0 text-3xl" />
                    <p>See all your data in one place.</p>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mt-12">
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 rounded-xl bg-[#223140]">
                    <h2 class="text-2xl text-balance font-bold">Security</h2>
                    <p class="text-base">Robust Security Infrastructure featuring Two-Factor Authentication, IP Whitelisting, Role-Based Controls, and Encrypted Data.</p>
                    <NuxtImg src="images/security.png" class="mt-auto w-full" loading="lazy" alt="Security" width="1146" height="575" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 rounded-xl bg-[#223140]">
                    <h2 class="text-2xl text-balance font-bold">Business Advantage</h2>
                    <p class="text-base">All-in-One Wholesale & Retail SMS Platform with Full Operator, Client, and Vendor Management.”</p>
                    <NuxtImg src="images/business-advantage.png" class="mt-auto w-full" loading="lazy" alt="Business Advantage" width="930" height="582" />
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 rounded-xl bg-[#223140]">
                    <h2 class="text-2xl text-balance font-bold">High-Throughput Messaging</h2>
                    <p class="text-base">High-Throughput Messaging allows you to create new routes, manage existing ones easily, apply different actions to routes, and have the opportunity to SubSend and receive millions of SMS messages per second with carrier-grade reliability.</p>
                    <NuxtImg src="images/high-throughput-messaging.png" class="mt-auto w-full" loading="lazy" alt="High-Throughput Messaging" width="830" height="492" />

                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 pb-0 md:pb-0 rounded-xl bg-[#223140]">
                    <h2 class="text-2xl text-balance font-bold">Billing and Routing</h2>
                    <p class="text-base">Understand and improve the performance of your bots and team with flexible and customizable reports.</p>
                    <NuxtImg src="images/billing-and-routing.png" class="mt-auto w-full" loading="lazy" alt="Billing and Routing" width="821" height="492" />
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl bg-[#223140]">
                    <NuxtImg src="images/99-guaranteed-uptime.svg" loading="lazy" alt="99% Guaranteed Uptime" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">99% Guaranteed Uptime</h2>
                    <p class="text-base">Ensuring uninterrupted operations and service continuity.</p>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl bg-[#223140]">
                    <NuxtImg src="images/high-throuput.svg" loading="lazy" alt="High Throuput" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">High Throuput</h2>
                    <p class="text-base">Handle massive SMS volumes with carrier-grade speed.</p>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl bg-[#223140]">
                    <NuxtImg src="images/backup-servers.svg" loading="lazy" alt="Backup Servers" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">Backup Servers</h2>
                    <p class="text-base">Redundant infrastructure for reliability and failover protection.</p>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl bg-[#223140]">
                    <NuxtImg src="images/24-7-support.svg" loading="lazy" alt="24/7 Support" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">24/7 Support</h2>
                    <p class="text-base">Expert assistance available anytime, anywhere.</p>
                </div>
            </div>

            <div class="flex max-md:flex-col md:justify-between md:items-center gap-12 my-12 py-12 md:my-24 md:py-24">
                <p class="text-5xl leading-normal">Certified by <span class="block text-2xl">We work closely with channels, networks, and regulators to deliver secure, leading solutions.</span></p>
                <div class="flex gap-12">
                    <NuxtImg src="images/iso.svg" loading="lazy" alt="ISO" width="161" height="161" />
                    <NuxtImg src="images/gdpr.svg" loading="lazy" alt="GDPR" width="161" height="161" />
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full">
            <NuxtImg src="images/semi-circle.svg" class="mt-12 w-full" loading="lazy" alt="Semi Circle Shape" width="1440" height="87" />
        </div>
    </section>

    <section class="my-12 py-12">
        <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
            <h2 class="max-md:text-3xl md:text-7xl text-balance">Combine automation and human support today</h2>
            <div class="flex justify-center items-center gap-4">
                <button class="flex items-center font-bold gap-2 py-4 px-6 min-w-[120px] bg-primary border-2 border-primary text-sm text-white rounded-full select-none transition-all duration-300 ease-in-out">Start Free Trial
                    <Icon name="line-md:arrow-right" class="text-lg" />
                </button>
                <button class="flex items-center font-bold gap-2 py-4 px-6 min-w-[120px] bg-transparent border-2 border-primary text-sm text-primary rounded-full select-none transition-all duration-300 ease-in-out">View demo
                    <Icon name="line-md:arrow-right" class="text-lg" />
                </button>
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