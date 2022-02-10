<template>
  <div class="relative grid items-end justify-end w-screen h-screen bg-black"> 
    <div class="p-8 leading-snug text-right text-white">
      <div class="font-medium">
        404: Not Found
      </div>
      <NuxtLink to="/" class="text-gray-500 hover:text-rose-500">
        Go back home?
      </NuxtLink>
    </div>
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div class="w-full h-full bg-gradient-to-r from-rose-500 to-violet-500 blur-3xl"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>