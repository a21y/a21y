<template>
  <div class="text-white text-sm space-y-10 max-w-2xl mx-auto py-12">
    <section>
      <div class="px-6 py-3">
        <h2 class="text-xl">Businesses</h2>
      </div>
      <a v-for="job in jobs.reverse()" :key="job.title" :href="job.url" target="_blank" class="flex w-full items-center gap-2 hover:bg-gray-900 rounded-lg py-4 px-6 cursor-pointer hover:grayscale-0 grayscale ">
        <div class="w-10">
          <img :src="job.image" :alt="job.title" class="h-8">
        </div>
        <div class=" grow">
          <div class="flex gap-1">
            <div class="font-medium">
              {{ job.title }}
            </div>
            <div class="opacity-50">
              {{ job.subtitle }}
            </div>
          </div>
          <div class="opacity-25 flex items-center gap-2 justify-between">
            <div class="flex-none">{{ job.position }}</div>
            <div class="grow h-px bg-white translate-y-px opacity-50 w-full"></div>
            <div class="flex-none">{{ job.dates }}</div>
          </div>
        </div>
      </a>
    </section>
    <section>
      <div class="px-6 py-3">
        <h2 class="text-xl">Education</h2>
      </div>
      <a v-for="school in schools" :key="school.title" :href="school.url" target="_blank" class="flex w-full items-center gap-2 hover:bg-gray-900 rounded-lg py-4 px-6 cursor-pointer hover:grayscale-0 grayscale ">
        <div class="w-10">
          <img :src="school.image" :alt="school.title" class="h-8">
        </div>
        <div class=" grow">
          <div class="flex gap-1">
            <div class="font-medium">
              {{ school.title }}
            </div>
            <div class="opacity-50">
              {{ school.subtitle }}
            </div>
          </div>
          <div class="opacity-25 flex items-center gap-2 justify-between">
            <div class="flex-none">{{ school.position }}</div>
            <div class="grow h-px bg-white translate-y-px opacity-50 w-full"></div>
            <div class="flex-none">{{ school.dates }}</div>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script setup>

const schools = [
  {
    image: '/cv/vega.png',
    title: 'Vega ',
    subtitle: 'School of Brand Leadership',
    position: 'BA Brand Communications, Multimedia Design',
    dates: '2010-2012',
    url: 'https://www.vegaschool.com'
  },
  {
    image: '/cv/rondebosch.png',
    title: `Rondebosch Boys'`,
    subtitle: 'Preparatory & High School',
    position: 'Grade 1-12',
    dates: '1998-2009',
    url: 'https://www.rondebosch.com'
  }
]


const jobs = [
  {
    image: '/cv/bravado.svg',
    title: 'Bravado Gaming',
    subtitle: 'South African esports organisation',
    position: 'Co-Director, Brand Manager',
    dates: '2008 - 2013',
    url: 'https://www.bravadogaming.com'
  },
  {
    image: '/cv/augment.svg',
    title: 'Augment Agency',
    subtitle: 'Digital sports marketing agency',
    position: 'Co-Founder, Head of Design',
    dates: '2016 - 2017',
    url: 'https://www.augment.agency'
  },
  {
    image: '/cv/skillup.svg',
    title: 'SkillUp Tutors',
    subtitle: 'Online tutor marketplace',
    position: 'Co-Founder, Head of Product & Design',
    dates: '2016 - 2019 (acquired)',
    url: 'https://www.skilluptutors.com'
  },
  {
    image: '/cv/fleetbeacon.svg',
    title: 'Fleetbeacon',
    subtitle: 'Fleet management software',
    position: 'Founder, Director',
    dates: '2017 - 2023 (acquired)',
    url: 'https://www.fleetbeacon.com'
  },
  {
    image: '/cv/code4kids.svg',
    title: 'Code4Kids',
    subtitle: 'Classroom-based coding curriculum',
    position: 'Co-Founder, Head of Product & Design',
    dates: '2018 - present',
    url: 'https://www.c4k.io'
  },
  {
    image: '/cv/lessonspace.svg',
    title: 'Lessonspace',
    subtitle: 'Online tutoring and virtual classroom platform',
    position: 'Co-Founder, Head of Product & Design',
    dates: '2018 - present',
    url: 'https://www.thelessonspace.com'
  },
]

</script>