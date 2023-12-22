<script setup lang="ts">
import { ref } from 'vue';
import { navMainMenus } from '../../data/navMenus';
import InputEl from '../ui/InputEl.vue';
import CheckboxEl from '../ui/CheckboxEl.vue';

const footerNavMainMenus = ref<string[]>(navMainMenus.value)
const footerNavEndMenus = ref<string[]>([
    'Payment and Deliver',
    'Help Center',
    'FAQs',
    'Contact Us'
])
</script>
<template>
    <div class="min-h-[75vh] bg-black p-12 overflow-hidden relative">
        <div class="flex justify-center lg:w-screen mx-auto break-words">
            <div class="container lg:grid grid-cols-3">

                <div>
                    <h1 class="text-2xl">Newsletter</h1>
                    <div class="mb-4 space-y-4 mt-4">
                        <InputEl type="text" placeholder="Email Address" />
                        <InputEl type="text" placeholder="First Name" />
                        <InputEl type="text" placeholder="Last Name" />
                        <InputEl type="number" placeholder="Phone Number" />
                    </div>
                    <div>
                        <h2 class="text-xl">Marketing Permissions</h2>
                        <CheckboxEl name="Email" />
                        <CheckboxEl name="SMS" />
                        <p class="text-xs mt-4">By signing up you are agreeing to receive the latest news and exclusive
                            offers
                            from our restaurants.</p>
                        <button class="btn rounded-full w-44 text-lg btn-md mt-4">Subscribe</button>
                    </div>
                </div>

                <hr class="lg:hidden mt-12 mb-8" />

                <div>
                    <li class="list-none" v-for="menu in footerNavMainMenus">
                        <a class="text-2xl leading-[4rem] cursor-pointer"> {{ menu }}</a>
                    </li>
                </div>

                <hr class="lg:hidden mt-12 mb-8" />

                <div class="mb-8">
                    <li class="list-none" v-for="menu in footerNavEndMenus">
                        <a class="text-2xl leading-[4rem] cursor-pointer"> {{ menu }}</a>
                    </li>
                    <div class="flex items-center gap-4 mt-4">
                        <div class="btn btn-circle">
                            <font-awesome-icon :icon="['fab', 'tiktok']" class="cursor-pointer" size="2xl" />
                        </div>
                        <div class="btn btn-circle">
                            <font-awesome-icon :icon="['fab', 'youtube']" class="cursor-pointer" size="2xl" />
                        </div>
                        <div class="btn btn-circle">
                            <font-awesome-icon :icon="['fab', 'facebook']" class="cursor-pointer" size="2xl" />
                        </div>
                        <div class="btn btn-circle">
                            <font-awesome-icon :icon="['fab', 'instagram']" class="cursor-pointer" size="2xl" />
                        </div>
                    </div>
                    <div class="btn mt-8 cursor-pointer rounded-3xl">
                        <div class="flex items-center">
                            <img src="/assets/payment_logos/visa.svg" width="50" />
                            <img src="/assets/payment_logos/mastercard.svg" width="50" />
                            <img src="/assets/payment_logos/american_express.svg" width="50" />
                            <img src="/assets/payment_logos/paypal.svg" width="50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="text-center">© 2023 The Cake Boutique. All rights reserved.</h3>
    </div>
</template>