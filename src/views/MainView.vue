<template>
  <div
    class="slideUp absolute z-30 flex h-screen w-screen flex-col items-center justify-center bg-white"
  >
    <span class="fade-in fade-out font-helvetica text-9xl font-bold text-ocean-500">GD</span>
  </div>
  <nav class="absolute top-0 z-20 flex w-screen flex-col items-center drop-shadow-2xl xl:h-16 xl:bg-white">
    <div class="flex size-full flex-col items-center xl:flex-row">
      <div class="z-20 flex h-16 w-full items-center justify-between bg-white xl:h-full xl:w-2/6 xl:justify-start xl:bg-transparent">
        <h1
          class="pl-7 font-helvetica text-4xl font-bold text-ocean-500 hover:cursor-pointer"
          @click="handleLogoClick"
        >
          GD
        </h1>
        <div class="pr-9 hover:cursor-pointer xl:hidden">
          <span @click="toggleMenu">
            <Bars3Icon
              v-show="!openMenu"
              class="size-6"
            />
            <XMarkIcon
              v-show="openMenu"
              class="size-6"
            />
          </span>
        </div>
      </div>
      <div
        class="menu z-10 flex w-screen translate-y-hiding-menu items-center justify-center bg-white xl:h-full xl:w-4/6 xl:justify-end"
        :class="{'hidden xl:flex xl:translate-y-0 xl:flex-row': openMenu === false}"
      >
        <ul class="w-full pt-2 text-center font-roboto text-xl font-bold hover:cursor-pointer xl:flex xl:w-auto xl:gap-x-12 xl:pt-0 2xl:gap-x-16">
          <li
            v-for="(nav, index) in navList"
            :key="index"
            class="py-4 uppercase text-black xl:py-0"
            :class="{ 'text-ocean-500': index === activeNav }"
            @click="updateNav(index)"
          >
            {{ t(`navbar.nav[${index}]`) }}
          </li>
        </ul>
        <div class="flex w-full justify-end border-t border-gray-200 py-4 pr-7 xl:w-auto xl:border-t-0 xl:py-0 xl:pl-12 xl:pr-3 2xl:pl-16">
          <div
            class="flex h-full items-center gap-x-4 hover:cursor-pointer xl:border-l xl:pl-12"
            @click="toggleLanguage"
          >
            <span class="font-roboto text-xl font-bold uppercase text-black">{{ locale }}</span>
            <svg
              v-show="!openLanguage"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.64592 5.14604C1.69236 5.09948 1.74754 5.06253 1.80828 5.03733C1.86903 5.01212 1.93415 4.99915 1.99992 4.99915C2.06568 4.99915 2.13081 5.01212 2.19155 5.03733C2.2523 5.06253 2.30747 5.09948 2.35392 5.14604L7.99992 10.793L13.6459 5.14604C13.6924 5.09955 13.7476 5.06267 13.8083 5.03752C13.8691 5.01236 13.9342 4.99941 13.9999 4.99941C14.0657 4.99941 14.1308 5.01236 14.1915 5.03752C14.2522 5.06267 14.3074 5.09955 14.3539 5.14604C14.4004 5.19253 14.4373 5.24772 14.4624 5.30846C14.4876 5.36919 14.5005 5.4343 14.5005 5.50004C14.5005 5.56578 14.4876 5.63088 14.4624 5.69162C14.4373 5.75236 14.4004 5.80755 14.3539 5.85404L8.35392 11.854C8.30747 11.9006 8.2523 11.9375 8.19155 11.9628C8.1308 11.988 8.06568 12.0009 7.99992 12.0009C7.93415 12.0009 7.86903 11.988 7.80828 11.9628C7.74754 11.9375 7.69236 11.9006 7.64592 11.854L1.64592 5.85404C1.59935 5.80759 1.56241 5.75242 1.5372 5.69167C1.512 5.63093 1.49902 5.56581 1.49902 5.50004C1.49902 5.43427 1.512 5.36915 1.5372 5.30841C1.56241 5.24766 1.59935 5.19248 1.64592 5.14604Z"
                fill="black"
              />
            </svg>
            <svg
              v-show="openLanguage"
              width="16"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.354 11.3541C14.3075 11.4006 14.2523 11.4376 14.1916 11.4628C14.1308 11.488 14.0657 11.501 14 11.501C13.9342 11.501 13.8691 11.488 13.8083 11.4628C13.7476 11.4376 13.6924 11.4006 13.646 11.3541L7.99996 5.70708L2.35396 11.3541C2.30747 11.4006 2.25228 11.4374 2.19155 11.4626C2.13081 11.4878 2.06571 11.5007 1.99996 11.5007C1.93422 11.5007 1.86912 11.4878 1.80838 11.4626C1.74764 11.4374 1.69245 11.4006 1.64596 11.3541C1.59947 11.3076 1.5626 11.2524 1.53744 11.1917C1.51228 11.1309 1.49933 11.0658 1.49933 11.0001C1.49933 10.9343 1.51228 10.8692 1.53744 10.8085C1.5626 10.7478 1.59947 10.6926 1.64596 10.6461L7.64596 4.64608C7.69241 4.59952 7.74758 4.56258 7.80833 4.53737C7.86907 4.51216 7.93419 4.49919 7.99996 4.49919C8.06573 4.49919 8.13085 4.51216 8.19159 4.53737C8.25234 4.56258 8.30752 4.59952 8.35396 4.64608L14.354 10.6461C14.4005 10.6925 14.4375 10.7477 14.4627 10.8084C14.4879 10.8692 14.5009 10.9343 14.5009 11.0001C14.5009 11.0659 14.4879 11.131 14.4627 11.1917C14.4375 11.2525 14.4005 11.3076 14.354 11.3541Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-end xl:absolute xl:mt-16">
      <div
        v-show="openLanguage"
        class="menu z-10 flex w-40 translate-y-hiding-menu flex-col gap-y-4 bg-white py-4 text-center xl:w-lang-en xl:translate-y-0"
        :class="{'xl:w-lang-id': locale === 'id'}"
      >
        <span
          v-for="localen in $i18n.availableLocales"
          :key="`locale-${localen}`"
          class="font-roboto text-xl font-bold uppercase text-black hover:cursor-pointer"
          @click="handleLanguageChange(localen)"
        >{{ localen }}</span>
      </div>
    </div>
  </nav>
  <swiper-container
    ref="firstSwiper"
    class="z-0 h-screen w-screen"
    direction="vertical"
    speed="500"
    :parallax="true"
    :mousewheel-force-to-axis="true"
    :free-mode="false"
    :slides-per-view="1"
    :centered-slides="true"
    @swiperslidechange="handleSlideChange"
  >
    <swiper-slide class="relative size-full overflow-hidden">
      <div
        data-swiper-parallax-scale="1.1"
        class="absolute size-full bg-wave1 bg-cover"
      />
      <div class="flex size-full">
        <div class="hidden xl:inline-block xl:w-1/2" />
        <div
          class="flex size-full flex-col items-center justify-center bg-white opacity-90 xl:w-1/2"
        >
          <div
            data-sal="fade"
            class="flex size-full flex-col items-center justify-center"
          >
            <div class="mb-14 size-48 rounded-full border-2 sm:size-56 lg:size-64">
              <img
                src="/src/images/me.jpg"
                class="size-full rounded-full"
              >
            </div>
            <h1 class="font-roboto text-2xl font-bold capitalize text-ocean-500 xs:text-3xl md:text-4xl lg:text-5xl">
              hello, i'm ganang dewana
            </h1>
            <h2 class="mb-12 font-roboto text-lg capitalize opacity-50 xs:text-xl lg:text-2xl">
              web frontend developer
            </h2>
            <p class="px-4 text-center font-roboto md:w-tablet md:text-xl">
              {{ t('hero.desc') }}
            </p>
          </div>
          <div class="flex w-full flex-col items-center justify-center pb-4">
            <h3
              class="font-roboto text-base font-medium uppercase tracking-widest opacity-50"
            >
              more contents below
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10 stroke-ocean-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="size-full"
    >
      <div class="z-10 flex size-full flex-col items-center justify-center md:justify-start xl:flex-row"> 
        <div class="z-10 flex flex-col px-3 xl:w-1/2 xl:pl-24 2xl:pb-20 2xl:pl-72">
          <div
            class="flex w-full flex-col justify-center sm:mb-20 sm:w-tablet md:mt-28 xl:mt-10 xl:w-full"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="500"
            data-sal-easing="ease-out-back"
          >
            <header
              class="pb-6 font-roboto text-4xl font-bold uppercase text-ocean-500 xs:pb-9 lg:text-5xl"
            >
              {{ t('education.h') }}
            </header>
            <h1 class="pb-3 font-roboto text-xl font-bold capitalize text-ocean-500 xs:pb-6 sm:text-2xl md:pb-4">
              {{ t('education.subH1') }}
            </h1>
            <h2 class="pb-2 font-roboto text-xl capitalize text-ocean-500">
              {{ t('education.year1') }}
            </h2>
            <p class="pb-6 font-roboto xs:pb-9 md:text-xl md:leading-6">
              {{ t('education.desc1') }}
            </p>
            <h1 class="pb-3 font-roboto text-xl font-bold capitalize text-ocean-500 xs:pb-6 sm:text-2xl md:pb-4">
              {{ t('education.subH2') }}
            </h1>
            <h2 class="pb-2 font-roboto text-xl capitalize text-ocean-500">
              {{ t('education.year2') }}
            </h2>
            <ul class="ml-5 list-disc font-roboto marker:text-ocean-500 md:text-xl md:leading-6">
              <li
                v-for="(edu, index) in eduList"
                :key="index"
              >
                {{ t(`education.desc2[${index}]`) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center sm:justify-center xl:w-1/2">
          <img
            class="z-20 size-edu lg:size-edu-xl 2xl:size-edu-2xl"
            src="/src/images/edu.png"
          >
        </div>
      </div>
      <div
        class="absolute bottom-0 z-0 h-1/2 w-full bg-gradient-to-t from-gray-100/90 to-white/5"
      />
      <div
        data-swiper-parallax-y="-200"
        class="absolute bottom-0 z-0 h-1/3 w-full bg-wave2 bg-top bg-no-repeat"
      />
    </swiper-slide>
    <swiper-slide
      class="size-full"
    >
      <div
        id="topology"
        class="flex size-full flex-col items-center justify-center"
      >
        <h1 class="absolute top-[15%] bg-white/50 px-4 py-2 font-roboto text-3xl font-bold uppercase text-ocean-500 lg:text-5xl">
          {{ t('skill.h') }}
        </h1>
        <swiper-container
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="500"
          class="mt-20 h-skill-list w-full xl:w-11/12 2xl:w-10/12 2xl:max-w-screen-2xl"
          :navigation="{
            nextEl: '.swiper-button-next-skill',
            prevEl: '.swiper-button-prev-skill',
          }"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 0,
              centeredSlides: false,
            },
          }"
          :free-mode="true"
          :pagination="{
            dynamicBullets: true,
          }"
        >
          <swiper-slide
            v-for="(skill, index) in skills"
            :key="index"
            data-sal-easing="ease-out-back"
            class="mt-16 xs:mt-10 sm:mt-0"
          >  
            <div class="relative flex h-72 w-44 flex-col items-center justify-center bg-white drop-shadow-2xl xs:h-80 xs:w-52 sm:h-96 sm:w-72">
              <div class="absolute top-12">
                <img
                  class="h-20 w-auto xs:h-28"
                  :class="{'scale-75': skill.icon === 'tw'}"
                  :src="`/src/images/${skill.icon}.png`"
                >
              </div>
              <div class="absolute bottom-0 mb-4 flex w-full flex-col items-center justify-center">
                <h1 class="font-roboto text-xl font-bold">
                  {{ skill.name }}
                </h1>
                <h2 class="font-roboto text-lg">
                  {{ skill.type }}
                </h2>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <div
          data-sal="fade"
          data-sal-delay="600"
          data-sal-duration="700"
          class="absolute inset-x-0 mx-auto hidden items-center justify-between 2xl:flex 2xl:w-11/12 2xl:max-w-[1800px]"
        >
          <button class="swiper-button-prev-skill">
            <svg
              width="21"
              height="36"
              viewBox="0 0 21 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6933 35.3867L0 17.6933L17.6933 0L20.0533 2.36L4.72 17.6933L20.0533 33.0267L17.6933 35.3867Z"
                fill="black"
              />
            </svg>
          </button>
          <button class="swiper-button-next-skill">
            <svg
              width="21"
              height="36"
              viewBox="0 0 21 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3333 17.6933L0 2.36L2.36 0L20.0533 17.6933L2.36 35.3867L0 33.0267L15.3333 17.6933Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="size-full overflow-hidden bg-ocean-900">
      <div
        data-swiper-parallax-scale="1.5"
        class="absolute left-0 top-0 z-10 size-full bg-wave3 bg-cover bg-top"
      />
      <div class="relative flex size-full flex-col items-center justify-center">
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="300"
          class="absolute inset-x-0 z-0 mx-auto h-accentRect w-full bg-accent-500 sm:left-40 sm:h-accentRectBig sm:w-accentRectBig"
        />
        <swiper-container
          ref="projectSwiper"
          data-sal="slide-down"
          data-sal-delay="300"
          data-sal-duration="500"
          class="z-20 size-full xl:w-9/12 xl:max-w-screen-xl"
          :navigation="{
            nextEl: '.swiper-button-next-project',
            prevEl: '.swiper-button-prev-project',
          }"
          :free-mode="false"
        >
          <swiper-slide
            v-for="(project,index) in projects"
            :key="index"
          >
            <div class="flex size-full items-center justify-center">
              <div class="z-20 mx-4 flex flex-col sm:flex-row sm:items-center">
                <div class="mt-mobile-project-view w-full xs:w-auto xs:min-w-[400px] sm:mt-0 lg:min-w-[564px]">
                  <img
                    class="h-preview-small w-preview-small lg:h-preview-medium lg:w-preview-medium xl:h-preview-large xl:w-preview-large"
                    :src="`/src/images/${project.preview}.png`"
                  >
                </div>
                <div class="flex flex-col justify-center bg-transparent sm:ml-4 lg:ml-9">
                  <header class="my-4 font-roboto text-3xl font-bold uppercase text-ocean-500 lg:text-4xl">
                    {{ project.name }}
                  </header>
                  <p class="font-roboto text-base xl:w-96">
                    {{ t(`project.desc[${index}]`) }}
                  </p>
                  <div class="relative mt-9">
                    <button
                      class="relative z-10 bg-ocean-500 px-14 py-3 text-xl font-bold uppercase tracking-wide text-white"
                    >
                      {{ t('project.view') }}
                    </button>
                    <div
                      class="absolute top-0 z-0 translate-x-1 translate-y-1 bg-ocean-900 px-14 py-3 text-xl font-bold uppercase tracking-wide"
                    >
                      {{ t('project.view') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <swiper-container
          data-sal="fade"
          data-sal-delay="600"
          data-sal-duration="500"
          class="absolute bottom-[10%] z-20 h-20 w-[375px] sm:bottom-[15%] sm:w-[500px] lg:bottom-[20%] xl:bottom-[10%] 2xl:bottom-[15%]"
          :space-between="15"
          :slides-per-view="3"
        >
          <swiper-slide
            v-for="(project,index) in projects"
            :key="index"
            @click="updateProject(index)"
          >
            <img 
              class="h-16 w-full object-cover sm:h-20 2xl:h-24"
              :src="`/src/images/${project.preview}.png`"
              :class="{ 'opacity-100': index === activeProject, 'opacity-40': index != activeProject }"
            >
          </swiper-slide>
        </swiper-container>
        <div
          data-sal="fade"
          data-sal-delay="700"
          data-sal-duration="500"
          class="absolute inset-x-0 z-20 mx-auto hidden items-center justify-between 2xl:flex 2xl:w-11/12 2xl:max-w-screen-2xl"
        >
          <button class="swiper-button-prev-project text-ocean-500">
            <svg
              width="21"
              height="36"
              viewBox="0 0 21 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6933 35.3867L0 17.6933L17.6933 0L20.0533 2.36L4.72 17.6933L20.0533 33.0267L17.6933 35.3867Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button class="swiper-button-next-project text-ocean-500">
            <svg
              width="21"
              height="36"
              viewBox="0 0 21 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3333 17.6933L0 2.36L2.36 0L20.0533 17.6933L2.36 35.3867L0 33.0267L15.3333 17.6933Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="flex size-full flex-col"
    >
      <div class="flex size-full">
        <div class="z-20 mx-4 flex size-full flex-col items-center justify-center xl:mx-0 xl:w-1/2">
          <h1 class="mb-9 font-roboto text-4xl font-bold uppercase text-ocean-500 lg:text-5xl">
            {{ t('contact.h') }}
          </h1>
          <form
            action="https://formspree.io/f/xanwojrb"
            method="POST"
            class="mb-9 flex w-full flex-col items-center justify-center gap-y-2"
          >
            <div
              class="flex w-full flex-col sm:w-contact"
            >
              <h2 class="pl-1 font-roboto font-bold capitalize">
                {{ t('contact.email') }}
              </h2>
              <input
                required
                type="email"
                name="email"
                class="h-14 w-full border-b-2 border-black bg-gray-100 font-roboto text-xl text-black"
              >
            </div>
            <div
              class="flex w-full flex-col sm:w-contact"
            >
              <h2 class="pl-1 font-roboto font-bold capitalize">
                {{ t('contact.name') }}
              </h2>
              <input
                required
                type="text"
                name="name"
                class="h-14 w-full border-b-2 border-black bg-gray-100 font-roboto text-xl text-black"
              >
            </div>
            <div
              class="flex w-full flex-col sm:w-contact"
            >
              <h2 class="pl-1 font-roboto font-bold capitalize">
                {{ t('contact.subject') }}
              </h2>
              <input
                required
                type="text"
                name="subject"
                class="h-14 w-full border-b-2 border-black bg-gray-100 font-roboto text-xl text-black"
              >
            </div>
            <div
              class="flex w-full flex-col sm:w-contact"
            >
              <h2 class="pl-1 font-roboto font-bold capitalize">
                {{ t('contact.message') }}
              </h2>
              <textarea
                name="message"
                class="h-52 w-full resize-none border-b-2 border-black bg-gray-100 font-roboto text-xl text-black"
              />
            </div>
            <div class="relative mt-2 sm:mt-6">
              <button
                type="submit"
                class="relative z-10 bg-ocean-500 px-14 py-3 text-xl font-bold capitalize text-white"
              >
                {{ t('contact.submit') }}
              </button>
              <div
                class="absolute top-0 z-0 translate-x-1 translate-y-1 bg-ocean-900 px-14 py-3 text-xl font-bold capitalize"
              >
                {{ t('contact.submit') }}
              </div>
            </div>
          </form>
        </div>
        <div class="absolute z-0 size-full xl:relative xl:w-1/2 xl:bg-contact xl:bg-cover">
          <div
            class="relative size-full"
          >
            <div class="hidden xl:absolute xl:bottom-0 xl:inline-block xl:h-1/2 xl:w-full xl:bg-gradient-to-t xl:from-white/100 xl:to-white/0" />
            <div
              class="absolute bottom-5 grid grid-cols-socials grid-rows-3 gap-y-1 sm:bottom-16 xl:bottom-5"
            >
              <div class="flex items-center justify-center">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 0.666504H2.66659C1.38325 0.666504 0.344919 1.7165 0.344919 2.99984L0.333252 16.9998C0.333252 18.2832 1.38325 19.3332 2.66659 19.3332H21.3333C22.6166 19.3332 23.6666 18.2832 23.6666 16.9998V2.99984C23.6666 1.7165 22.6166 0.666504 21.3333 0.666504ZM21.3333 5.33317L11.9999 11.1665L2.66659 5.33317V2.99984L11.9999 8.83317L21.3333 2.99984V5.33317Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div class="flex items-center">
                <span class=" font-roboto text-sm font-medium">fxganang.dewana@gmail.com</span>
              </div>
              <div class="flex justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 14C28 6.26806 21.7319 0 14 0C6.26806 0 0 6.26806 0 14C0 20.9878 5.11962 26.7797 11.8125 27.8299V18.0469H8.25781V14H11.8125V10.9156C11.8125 7.40688 13.9027 5.46875 17.1006 5.46875C18.6323 5.46875 20.2344 5.74219 20.2344 5.74219V9.1875H18.4691C16.7299 9.1875 16.1875 10.2667 16.1875 11.3739V14H20.0703L19.4496 18.0469H16.1875V27.8299C22.8804 26.7797 28 20.9879 28 14Z"
                    fill="#1877F2"
                  />
                </svg>
              </div>
              <div class="flex items-center">
                <span class=" font-roboto text-sm font-medium">Ganang Dewana</span>
              </div>
              <div class="flex justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_296_935)">
                    <path
                      d="M21.4375 0H6.5625C2.93813 0 0 2.93813 0 6.5625V21.4375C0 25.0619 2.93813 28 6.5625 28H21.4375C25.0619 28 28 25.0619 28 21.4375V6.5625C28 2.93813 25.0619 0 21.4375 0Z"
                      fill="white"
                    />
                    <path
                      d="M21.4375 0H6.5625C2.93813 0 0 2.93813 0 6.5625V21.4375C0 25.0619 2.93813 28 6.5625 28H21.4375C25.0619 28 28 25.0619 28 21.4375V6.5625C28 2.93813 25.0619 0 21.4375 0Z"
                      fill="#0A66C2"
                    />
                    <path
                      d="M20.2032 23.8093H23.4046C23.5206 23.8093 23.6319 23.7632 23.7139 23.6812C23.796 23.5992 23.8421 23.4879 23.8421 23.3719L23.8438 16.6079C23.8438 13.0726 23.082 10.3552 18.9505 10.3552C17.38 10.2968 15.899 11.1064 15.0998 12.4582C15.0959 12.4648 15.0899 12.4699 15.0828 12.4728C15.0757 12.4757 15.0679 12.4761 15.0605 12.4741C15.0532 12.4721 15.0466 12.4678 15.042 12.4617C15.0373 12.4557 15.0348 12.4483 15.0347 12.4406V11.1191C15.0347 11.003 14.9886 10.8918 14.9065 10.8097C14.8245 10.7277 14.7132 10.6816 14.5972 10.6816H11.5591C11.443 10.6816 11.3318 10.7277 11.2497 10.8097C11.1677 10.8918 11.1216 11.003 11.1216 11.1191V23.3712C11.1216 23.4873 11.1677 23.5986 11.2497 23.6806C11.3318 23.7627 11.443 23.8087 11.5591 23.8087H14.7603C14.8763 23.8087 14.9876 23.7627 15.0696 23.6806C15.1517 23.5986 15.1978 23.4873 15.1978 23.3712V17.3148C15.1978 15.6023 15.5226 13.9439 17.6457 13.9439C19.7386 13.9439 19.7657 15.9035 19.7657 17.4257V23.3718C19.7657 23.4878 19.8118 23.5991 19.8938 23.6812C19.9759 23.7632 20.0872 23.8093 20.2032 23.8093ZM4.15625 6.52181C4.15625 7.81944 5.22452 8.88716 6.52225 8.88716C7.81966 8.88705 8.88727 7.81867 8.88727 6.52127C8.88705 5.22386 7.81933 4.15625 6.52181 4.15625C5.22397 4.15625 4.15625 5.22419 4.15625 6.52181ZM4.91739 23.8093H8.12284C8.23888 23.8093 8.35016 23.7632 8.4322 23.6812C8.51425 23.5991 8.56034 23.4878 8.56034 23.3718V11.1191C8.56034 11.003 8.51425 10.8918 8.4322 10.8097C8.35016 10.7277 8.23888 10.6816 8.12284 10.6816H4.91739C4.80136 10.6816 4.69008 10.7277 4.60803 10.8097C4.52598 10.8918 4.47989 11.003 4.47989 11.1191V23.3718C4.47989 23.4878 4.52598 23.5991 4.60803 23.6812C4.69008 23.7632 4.80136 23.8093 4.91739 23.8093Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_296_935">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="flex items-center">
                <span class=" font-roboto text-sm font-medium">Fransiskus Xaverius Ganang Dewana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-delay="300"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back"
        class="hidden h-16 items-center justify-center bg-white font-roboto text-xl md:flex"
      >
        <span class="flex w-[217px] items-center justify-center">
          Made with
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 21.35L11.05 20.03C5.9 15.36 2.5 12.27 2.5 8.5C2.5 5.41 4.92 3 8 3C9.74 3 11.41 3.81 12.5 5.08C13.59 3.81 15.26 3 17 3C20.08 3 22.5 5.41 22.5 8.5C22.5 12.27 19.1 15.36 13.95 20.03L12.5 21.35Z"
              fill="#FCD7EF"
            />
          </svg>
          by Ganang</span>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from "p5";
import AOS from "aos";
import sal from "sal.js";
import anime from "animejs";
import { useI18n } from "vue-i18n";
import { register } from "swiper/element/bundle";
import { ref, computed, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";

register();

const { t , locale } = useI18n();
const firstSwiper = ref(null);
const projectSwiper = ref(null);
const openMenu = ref(false);
const openLanguage = ref(false);
const activeNav = ref(0);
const activeProject = ref(0);
const swiperContainer = ref(null);
const swiperContainerProject = ref(null);
const winWidth = ref(window.innerWidth);
const isXlScreen = computed(() => winWidth.value >= 1280);

const navList = ["about", "education", "skills", "projects", "contact"];
const eduList = ["edu1","edu2","edu3","edu4"];

const skills = [
  {
    icon:"html",
    name:"HTML",
    type:"Language",
  },
  {
    icon:"css",
    name:"CSS",
    type:"Language",
  },
  {
    icon:"js",
    name:"JavaScript",
    type:"Language",
  },
  {
    icon:"ts",
    name:"TypeScript",
    type:"Language",
  },
  {
    icon:"vue",
    name:"Vue",
    type:"Framework",
  },
  {
    icon:"tw",
    name:"TailwindCSS",
    type:"Framework",
  },
  {
    icon:"vsc",
    name:"Visual Studio Code",
    type:"IDE",
  },
  {
    icon:"npm",
    name:"npm",
    type:"Tools",
  },
  {
    icon:"git",
    name:"Git",
    type:"Tools",
  },
  {
    icon:"gh",
    name:"GitHub",
    type:"Tools",
  },
]

const projects = [
  {
    preview: "nirati",
    name: "baan nirati",
    desc: "Web application replica for Baan Nirati Chiangmai Thailand housing project",
  },
  {
    preview: "plum",
    name: "plum",
    desc: "Similar to Baan Nirati Chiangmai, a website replica for Plum Thailand housing project",
  },
  {
    preview: "crowd",
    name: "crowdfund",
    desc: "Based on a design provided for practice, this is a website replica for an crowdfunding online service",
  }
]

const effect = () => {
  TOPOLOGY({
    el: "#topology",
    p5: p5,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 1200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x2eacc3,
    backgroundColor: 0xffffff,
  });
};

onMounted(() => {
  const swiperEl = firstSwiper.value;
  const swiperElProject = projectSwiper.value;
  
  if (swiperEl) {
    swiperContainer.value = swiperEl.swiper;
    swiperContainerProject.value = swiperElProject.swiper;
  }

  effect();
  AOS.init();

  window.addEventListener("resize", resizeHandler);

  sal({
    threshold: 0.5,
  });

  const myTimeline = anime.timeline({
    duration: 500,
    easing: "easeInCubic",
  });

  myTimeline.add({
    targets: ".fade-in",
    opacity: [0, 1],
    delay: 1000,
  });

  myTimeline.add({
    targets: ".fade-out",
    translateY: [0, -100],
    opacity: [1, 0],
    delay: 1000,
  });

  myTimeline.add({
    targets: ".slideUp",
    duration: 750,
    translateY: [0, "-100vh"],
  });
});

const handleLogoClick = () => {
  window.location.reload();
}

const handleLanguageChange = (lang) => {
  if (locale.value != lang) {
  locale.value = lang;
  if (!isXlScreen.value) {
    toggleMenu();
  }
  if (openLanguage.value) {
    openLanguage.value = !openLanguage.value;
  }
  }
}
const handleSlideChange = () => {
  activeNav.value = swiperContainer.value.realIndex;
  activeProject.value = swiperContainerProject.value.realIndex;
}

const updateNav = (clickedIndex) => {
  activeNav.value = clickedIndex;
  swiperContainer.value.slideTo(clickedIndex, 500);
  if (!isXlScreen.value) {
    toggleMenu();
  }

};

const resetNavbarPosition = () => {
    anime.remove(".menu");
    anime({
      targets: ".menu",
      translateY: 0,
      duration: 0,
    });
};

const updateProject = (clickedIndex) => {
  activeProject.value = clickedIndex;
  swiperContainerProject.value.slideTo(clickedIndex, 300);
}

const toggleMenu = () => {
  if (openLanguage.value) {
    openLanguage.value = !openLanguage.value;
  }
  openMenu.value = !openMenu.value;
  console.log(openMenu.value);
  anime({
    targets: ".menu",
    translateY: openMenu.value ? ["-100vh", 0] : [0, "-100vh"],
    duration: 300,
    easing: "easeInOutCubic",
  });
};

const toggleLanguage = () => {
  openLanguage.value = !openLanguage.value;
  
};

const resizeHandler = () => {
  effect.resize;
  winWidth.value = window.innerWidth;
  if (isXlScreen.value) {
    console.log('test');
    resetNavbarPosition();
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
  effect.destroy();
});
</script>

<style scoped>
swiper-container::part(bullet-active) {
    background-color: black;
    width: 18px;
    height: 18px;
}

swiper-container::part(bullet) {
    width: 18px;
    height: 18px; 
}
</style>