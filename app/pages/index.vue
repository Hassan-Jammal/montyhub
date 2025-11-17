<template>
    <section class="pt-20 md:pt-44 bg-[#041527]">
        <div class="container">
            <div class="relative flex flex-col justify-center items-center gap-8 md:w-23 mx-auto text-center z-10">
                <h1 class="text-3xl md:text-7xl font-bold text-balance text-[#D3D5D8]">Enterprise High <br /> Grade Messaging Software</h1>
                <p class="text-xl text-[#D3D5D8]">Enhanced A2P SMS Business. High Availability. High Throughput</p>
                <div class="flex justify-center items-center gap-4">
                    <button class="flex items-center font-bold gap-2 py-4 px-6 md:px-10 min-w-[120px] text-nowrap bg-secondary hover:bg-transparent border-2 border-secondary hover:border-white text-sm hover:text-white rounded-md select-none transition-all duration-300 ease-in-out">Contact us
                        <Icon name="line-md:arrow-right" class="text-lg" />
                    </button>
                    <button class="flex items-center font-bold gap-2 py-4 px-6 md:px-10 min-w-[120px] text-nowrap bg-transparent hover:bg-secondary border-2 border-white hover:border-secondary text-sm text-white hover:text-black rounded-md select-none transition-all duration-300 ease-in-out">View demo
                        <Icon name="line-md:arrow-right" class="text-lg" />
                    </button>
                </div>
            </div>
        </div>
        <NuxtImg src="images/homepage-banner.png" class="-translate-y-16 w-full" loading="lazy" alt="Homepage Banner" width="2551" height="1337" />
    </section>

    <section class="relative pt-6 pb-32 md:pb-72 bg-[#041527]">
        <div class="marquee overflow-hidden">
            <div class="wrapper grid grid-flow-col auto-cols-[8rem] lg:auto-cols-[20rem] justify-items-center items-center mt-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                    <!-- <a :href="marquee.link" target="_blank"> -->
                        <NuxtImg class="marquee-item max-lg:w-2/3 " :src="`images/${marquee.image}.svg`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" />
                    <!-- </a> -->
                </template>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full -mt-1">
            <NuxtImg src="images/semi-circle.svg" class="mt-12 w-full" loading="lazy" alt="Semi Circle Shape" width="1440" height="87" />
        </div>
    </section>
    
    <section  class="my-6 py-6">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-4/5 mx-auto text-center">
                <h3 class="text-3xl md:text-5xl font-bold">B'PAL is a robust Business Support Solution developed by MontyMobile.<br /><br />It offers a unified and comprehensive management platform for <span class="text-secondary">SMS Interconnect Services</span>.</h3>
            </div>

            <div class="flex flex-col gap-12 p-4 md:p-12 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)] mt-8">
                <p class="text-[#66696D] text-lg">Our Dashboard and monitoring system offer a unified view of all operational metrics and activities. It enables real-time monitoring of SMS traffic, interconnect performance, and financial transactions, offering powerful analytics and intuitive reports for effective </p>
                <NuxtImg src="images/dashboard.png" class="w-full" loading="lazy" alt="Dashboard" width="2163" height="585" />
            </div>
        </div>
    </section>

    <section id="features" class="my-12 py-12">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[#0096ED26] text-base text-secondary font-bold uppercase">Monty Hub Features</h2>
                <h3 class="text-3xl md:text-5xl font-bold text-balance">Monty Hub Features</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl shadow-[0_0_0_4px_#F3F4F7,0_0_0_3.5px_#F9F9FB,0_0_0_1px_#E4E5E999,0_0_0_0.5px_#E4E5E9] bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Multi-Currency</h2>
                        <p class="text-[#66696D] text-lg mt-4">B'PAL supports multi-currency, users can configure to any currency.</p>
                    </div>
                    <NuxtImg src="images/multi-currency.png" class="w-full mt-auto" loading="lazy" alt="Multicurrency" width="966" height="504" />
                </div>
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl shadow-[0_0_0_4px_#F3F4F7,0_0_0_3.5px_#F9F9FB,0_0_0_1px_#E4E5E999,0_0_0_0.5px_#E4E5E9] bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">DND Mode</h2>
                        <p class="text-[#66696D] text-lg mt-4">Saves consumers from spontaneous SMS and blocks any undesired SMS</p>
                    </div>
                    <NuxtImg src="images/dnd-mode.png" class="w-full mt-auto" loading="lazy" alt="DND Mode" width="966" height="504" />
                </div> 
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl shadow-[0_0_0_4px_#F3F4F7,0_0_0_3.5px_#F9F9FB,0_0_0_1px_#E4E5E999,0_0_0_0.5px_#E4E5E9] bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Repricing</h2>
                        <p class="text-[#66696D] text-lg mt-4">Ability to recalculate the CDR charges if a wrong Rate, Cost, Transit Cost, Transit Rate, MNP Cost, Exchange Rate was wrongly set on live traffic</p>
                    </div>
                    <NuxtImg src="images/repricing.png" class="w-full mt-auto" loading="lazy" alt="Repricing" width="966" height="504" />
                </div> 
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl shadow-[0_0_0_4px_#F3F4F7,0_0_0_3.5px_#F9F9FB,0_0_0_1px_#E4E5E999,0_0_0_0.5px_#E4E5E9] bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Prefix & Content Translation</h2>
                        <p class="text-[#66696D] text-lg mt-4">Alter all types of Sender IDs and Message Content to deal with any regulations specified by any Vendor or Mobile Operator worldwide</p>
                    </div>
                    <NuxtImg src="images/prefix-and-content-translation.png" class="w-full mt-auto" loading="lazy" alt="Prefix & Content Translation" width="966" height="504" />
                </div> 
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl shadow-[0_0_0_4px_#F3F4F7,0_0_0_3.5px_#F9F9FB,0_0_0_1px_#E4E5E999,0_0_0_0.5px_#E4E5E9] bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Automated Cost Importation</h2>
                        <p class="text-[#66696D] text-lg mt-4">Cost sheets sent by vendors can be automatically detected, mapped and imported to the system without any human intervention</p>
                    </div>
                    <NuxtImg src="images/automated-cost-importation.png" class="w-full mt-auto" loading="lazy" alt="Automated Cost Importation" width="966" height="504" />
                </div> 
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl shadow-[0_0_0_4px_#F3F4F7,0_0_0_3.5px_#F9F9FB,0_0_0_1px_#E4E5E999,0_0_0_0.5px_#E4E5E9] bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Live Monitor & Gateway Monitor</h2>
                        <p class="text-[#66696D] text-lg mt-4">Users can monitor their SMS traffic from the Live Monitor, connection status and all details directly from the Gateway Monitor</p>
                    </div>
                    <NuxtImg src="images/live-monitor-and-gateway-monitor.png" class="w-full mt-auto" loading="lazy" alt="Live Monitor & Gateway Monitor" width="966" height="504" />
                </div>
            </div>
        </div>
    </section>

    <section id="why-us" class="my-12 py-12">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[#0096ED26] text-base text-secondary font-bold uppercase">Why Choose Us?</h2>
                <h3 class="text-3xl md:text-5xl font-bold text-balance">Comprehensive and Unified Platform for SMS Business Management</h3>
                <p class="text-[#66696D] text-lg mt-4">Presents a complete suite for billing, rate and policy management, deal and dispute management, order management and automation of the SMS business processes.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Independent Platform</h2>
                        <p class="text-[#66696D] text-lg mt-4">Our Messaging Portals operate efficiently and cost-effectively on the network of your choice, running seamlessly on open Linux OS.</p>
                    </div>
                    <NuxtImg src="images/independent-platform.png" class="w-full mt-auto" loading="lazy" alt="Independent Platform" width="966" height="504" />
                </div>
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Advanced Billing</h2>
                        <p class="text-[#66696D] text-lg mt-4">Our advanced billing module handles the whole process of the billing system from the beginning to the end such as:</p>
                        <ul class="list-disc px-4 md:columns-2 text-[#66696D]">
                            <li>Generate Invoices</li>
                            <li>Automated Invoices</li>
                            <li>Notes</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <NuxtImg src="images/advanced-billing.png" class="w-full mt-auto" loading="lazy" alt="Advanced Billing" width="966" height="504" />
                </div>
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Secure Access Management</h2>
                        <p class="text-[#66696D] text-lg mt-4">Allows you to create and manage routes with ease, including Sub-Routes. Automatically switch or blend vendors, and block routes based on custom rules and conditions.</p>
                    </div>
                    <NuxtImg src="images/secure-access-management.png" class="w-full mt-auto" loading="lazy" alt="Secure Access Management" width="966" height="504" />
                </div>
                <div class="flex flex-col gap-12 p-4 md:p-8 pb-0 md:pb-0 border border-[#d3d5d8] rounded-xl bg-[linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(217,239,252,1)_100%)]">
                    <div>
                        <h2 class="text-xl text-balance font-bold">Monitoring & Reporting</h2>
                        <p class="text-[#66696D] text-lg mt-4">Monty Hub lets you monitor live traffic with detailed stats and insights. Instantly view traffic through an intuitive interface or generate reports based on your chosen criteria.</p>
                    </div>
                    <NuxtImg src="images/monitoring-and-reporting.png" class="w-full mt-auto" loading="lazy" alt="Monitoring & Reporting" width="966" height="504" />
                </div>
            </div>
        </div>
    </section>

    <section id="architecture" class="relative my-12 py-12 md:py-48 text-white bg-[#041527]">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 md:w-2/3 mx-auto text-center">
                <h2 class="w-max mx-auto py-2 px-6 rounded-full bg-[linear-gradient(114deg,rgba(196,224,253,1)_0%,rgba(202,240,248,1)_100%)] text-base text-[#423200] font-bold">ARCHITECTURE</h2>
                <h3 class="text-3xl md:text-5xl font-bold text-balance">A single, powerful, easy-to-use platform</h3>
                <p class="text-xl md:text-2xl leading-normal">An intelligent, modular architecture designed to unify billing, policy, order, and dispute management while automating every layer of the SMS business process.</p>
                <p class="w-full flex items-center gap-2 text-nowrap text-secondary text-sm font-bold mt-6 uppercase">Learn more about the Intercom Platform 
                    <Icon name="line-md:arrow-right" class="text-lg" />
                </p>
            </div>
            <NuxtImg src="images/easy-to-use-platform.png" class="md:w-4/5 mx-auto mt-24 w-full" loading="lazy" alt="Single, Powerful, Easy-to-use platform" width="2090" height="1398" />

            <div class="flex flex-col gap-8 mt-12">
                <h3 class="text-3xl md:text-5xl font-bold">Unifying Routing, Billing, and Intelligence</h3>
                <p class="text-xl md:text-2xl leading-normal">An architecture optimized for real-time data flow, compliance, and intelligent routing decisions.</p>
            </div>
            <div class="grid lg:grid-cols-3 gap-8 mt-12">
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <h2 class="text-2xl text-balance font-bold">Secure Access Management</h2>
                    <ul class="list-disc px-4 text-[#FFFFFF99]">
                        <li>Two Factor Authentication</li>
                        <li>Whitelist Specific IPs</li>
                        <li>Authentication based on Role</li>
                        <li>Access Control based on Role</li>
                        <li>Enable/Disable Users</li>
                        <li>Encrypted Data</li>
                        <li>TSL/SSL Certified SMPP Server</li>
                        <li>Wildcard SSL/TLS Certificate Support</li>
                        <li>Event Logs</li>
                        <li>Spam Protection</li>
                        <li>Last Login IP Details</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <h2 class="text-2xl text-balance font-bold">Secure Access Management</h2>
                    <ul class="list-disc px-4 text-[#FFFFFF99]">
                        <li>Two Factor Authentication</li>
                        <li>Whitelist Specific IPs</li>
                        <li>Authentication based on Role</li>
                        <li>Access Control based on Role</li>
                        <li>Enable/Disable Users</li>
                        <li>Encrypted Data</li>
                        <li>TSL/SSL Certified SMPP Server</li>
                        <li>Wildcard SSL/TLS Certificate Support</li>
                        <li>Event Logs</li>
                        <li>Spam Protection</li>
                        <li>Last Login IP Details</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <h2 class="text-2xl text-balance font-bold">Billing and Routing</h2>
                    <ul class="list-disc px-4 text-[#FFFFFF99]">
                        <li>Rates Management</li>
                        <li>Least Cost Routes & Least Cost Vendors</li>
                        <li>Dynamic Import Cost</li>
                        <li>Multi-Currency</li>
                        <li>Automated Invoices</li>
                        <li>Deals & Commitments</li>
                        <li>Targets</li>
                        <li>Live Traffic</li>
                        <li>Route by Destination</li>
                        <li>Service Provider Route</li>
                        <li>Gateway Monitor</li>
                        <li>Special Filter Routes</li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col gap-8 mt-12">
                <h3 class="text-3xl md:text-5xl font-bold">What Makes Monty Hub the Best?</h3>
                <p class="text-xl md:text-2xl leading-normal">Engineered to perform. Designed to last. Trusted to deliver.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <NuxtImg src="images/99-guaranteed-uptime.svg" alt="99% Guaranteed Uptime" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">99% Guaranteed Uptime</h2>
                    <p class="text-[#FFFFFF99] text-lg">Ensuring uninterrupted operations and service continuity.</p>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <NuxtImg src="images/backup-servers.svg" alt="Backup Server" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">Backup Servers</h2>
                    <p class="text-[#FFFFFF99] text-lg">Redundant infrastructure for reliability and failover protection.</p>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <NuxtImg src="images/24-7-support.svg" alt="Backup Server" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">24/7 Support</h2>
                    <p class="text-[#FFFFFF99] text-lg">Expert assistance available anytime, anywhere.</p>
                </div>
                <div class="flex flex-col gap-4 p-4 md:p-8 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] bg-[#122435]">
                    <NuxtImg src="images/high-throuput.svg" alt="High Throuput" width="56" height="56" />
                    <h2 class="text-2xl text-balance font-bold">High Throuput</h2>
                    <p class="text-[#FFFFFF99] text-lg">Handle massive SMS volumes with carrier-grade speed.</p>
                </div>
            </div>

            <div class="flex max-md:flex-col gap-12 my-12 py-12 md:my-24 md:py-24">
                <div class="md:w-2/3 flex flex-col gap-8">
                    <h3 class="text-3xl md:text-5xl font-bold">Certified By</h3>
                    <p class="text-xl md:text-2xl leading-normal">We work closely with channels, networks, and regulators to deliver secure, leading solutions.</p>
                </div>
                <div class="md:w-1/3 flex gap-4 lg:gap-12 px-4 lg:px-12 py-12 lg:py-18 rounded-xl shadow-[0_0_0_4px_#242c40cc,0_0_0_3px_#1F2229CC,0_0_0_1px_#3D414980] [background:linear-gradient(180deg,_#202D38_-15.4%,_#122435_57.5%,_#051322_120.47%),radial-gradient(55.88%_52.09%_at_50%_50.46%,_rgba(0,132,255,0.2)_0%,_rgba(4,21,39,0.2)_100%)]">
                    <NuxtImg src="images/iso.svg" class="w-full md:w-[160px]" loading="lazy" alt="ISO" width="161" height="161" />
                    <NuxtImg src="images/gdpr.svg" class="w-full md:w-[160px]" loading="lazy" alt="GDPR" width="161" height="161" />
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full">
            <NuxtImg src="images/semi-circle.svg" class="mt-12 w-full" loading="lazy" alt="Semi Circle Shape" width="1440" height="87" />
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