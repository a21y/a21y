<template>
  <div class="relative grid gap-2 p-2 bg-black lg:grid-cols-2 xl:grid-cols-3">
    <div class="absolute opacity-[0.075] inset-0 pointer-events-none">
      <div class="w-full h-full bg-gradient-to-r from-rose-500 to-violet-500 blur-3xl"></div>
    </div>
    <div v-for="logo in logos" class="relative z-10 overflow-hidden group">
      <div class="absolute inset-x-0 top-0 h-24 transition-opacity duration-200 ease-out opacity-0 bg-gradient-to-b from-white group-hover:opacity-5"></div>
      <img :src="logo" alt="" class="w-full transition duration-300 ease-out rounded-sm">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      logos: [
        `368albert.svg`,
        `a21y.svg`,
        `arboreal.svg`,
        // `belvedere.svg`,
        `bravado.svg`,
        `buddha.svg`,
        `cascade.svg`,
        `chaylek.svg`,
        `code4kids.svg`,
        `craft.svg`,
        `decimus.svg`,
        `fable.svg`,
        `flagship.svg`,
        `fleetbeacon-products.svg`,
        `fleetbeacon.svg`,
        `kb7s.svg`,
        `lessonspace.svg`,
        `nodejsjobs.svg`,
        `ottermate.svg`,
        `publics.svg`,
        // `ritr.svg`,
        `shields.svg`,
        `skillup.svg`,
        `slowmornings.svg`,
        `tonic.svg`,
        `workandflow.svg`,
      ]
    }
  }
})
</script>

<style>

</style>