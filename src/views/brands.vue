<template>
  <div :class="{ 'bg-gray-950 text-white': toggle === 'dark', 'bg-gray-100 text-gray-900': toggle === 'light' }" class="relative duration-200">
    <div class="fixed bottom-12 inset-x-0 text-center flex justify-center  z-40">
      <button 
        :class="{
          'flex gap-3 items-center rounded-full justify-center p-4 duration-200 backdrop-blur-lg shadow-sm': true,
          'bg-gray-900/50 text-white ring-1 ring-gray-800': toggle === 'dark',
          'bg-white/50 text-gray-900 ring-1 ring-white': toggle === 'light',
        }"
        @click="toggle === 'dark' ? toggle = 'light' : toggle = 'dark'">
        <PhSun weight="regular" class="w-5 h-5" :class="toggle === 'dark' ? 'opacity-50' : 'opacity-100'" />
        <div :class="{
          'w-12 h-6 shadow-inner rounded-full': true,
          'bg-gray-300': toggle === 'light',
          'bg-gray-700': toggle === 'dark',
        }">
          <div :class="{ 
            'h-full aspect-square p-1 duration-200': true,
            'translate-x-6': toggle === 'dark' 
          }">
            <div class="bg-white shadow rounded-full h-full w-full">
            </div>
          </div>
        </div>
        <PhMoon weight="regular" class="w-5 h-5" :class="toggle === 'light' ? 'opacity-50' : 'opacity-100'" />
      </button>
    </div>
    <div class="relative p-8 max-w-2xl mx-auto">
      <Transition
        enter-active-class="duration-200 delay-100"
        leave-active-class="duration-200 delay-100"
        :enter-from-class="toggle === 'light' ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'"
        :leave-to-class="toggle === 'light' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'"
        mode="out-in">
        <div v-if="toggle === 'dark'" class="grid gap-8">
          <div v-for="logo in dark" class=" relative ">
            <img :src="`/brands/${logo}`" class="w-full ring-inset ring-gray-900">
          </div>
        </div>
        <div v-else class="grid gap-8">
          <div v-for="logo in light" class="relative z-10">
            <img :src="`/brands/${logo}`" class="w-full rounded-lg shadow">
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PhSun, PhMoon } from '@phosphor-icons/vue'

const toggle = ref(`dark`)

const dark = ref([
  `368albert.svg`,
  `a21y.svg`,
  `arboreal.svg`,
  `augment.svg`,
  `cascade.svg`,
  `coroom.svg`,
  `flagship.svg`,
  `fleetbeacon.svg`,
  `haste.svg`,
  `room.svg`,
  `sitefront.svg`,
  `slowmornings.svg`,
  `streamerfund.svg`,
  `workandflow.svg`,
])

const light = ref([
  `amenitiesco.svg`,
  `bravado.svg`,
  `code4kids.svg`,
  `craft.svg`,
  `fable.svg`,
  `hope.svg`,
  `lessonspace.svg`,
  `mailcard.svg`,
  `ottermake.svg`,
  `publics.svg`,
  `saasreactor.svg`,
  `skillup.svg`,
  `tonic.svg`,
  `vote-cape.svg`,
])
</script>
