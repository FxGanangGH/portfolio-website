import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false,
  locale: 'en',
  fallbackLocale: 'id',
  messages: {
    en: {
      navbar: {
        nav: ['about', 'education', 'skills', 'projects', 'contact'],
      },
      hero: {
        desc: "I'm a front-end developer with a passion for building websites using Vue.js. I graduated from Institut Teknologi Sepuluh Nopember, and I am currently looking for opportunities to launch my career. When I'm not coding, I enjoy playing video games, listening to music, and composing my own tunes.",
      },
      education: {
        h: 'education',
        subH1: 'formal education',
        year1: '2021',
        desc1: 'Graduated from Institut Teknologi Sepuluh Nopember with a bachelor’s degree in Information Systems, and a GPA of 2.95 out of 4.00.',
        subH2: 'professional development',
        year2: '2022 - now',
        desc2: ['Learned HTML, CSS, and JavaScript through tutorials on W3Schools.', 'Learned Vue.js through an online course on Laracasts and practical projects, supplemented by official documentation.', 'Learned TailwindCSS, TypeScript, and other technologies through official documentation and practical projects.', 'Continuously learning and staying updated in front-end development.'],
      },
      skill: {
        h: 'my skills',
      },
      project: {
        desc: ['Web application replica for Baan Nirati Chiangmai Thailand housing project', 'Similar to Baan Nirati Chiangmai, a website replica for Plum Thailand housing project', 'Based on a design provided for practice, this is a website replica for an crowdfunding online service'],
        view: 'view',
      },
      contact: {
        h: 'contact',
        email: 'email',
        name: 'name',
        subject: 'subject',
        message: 'message',
        submit: 'submit',
      }
    },
    id: {
      navbar: {
        nav: ['tentang', 'pendidikan', 'keterampilan', 'projek', 'kontak'],
      },
      hero: {
        desc: 'Saya adalah seorang front-end developer yang gemar dalam membangun website dengan menggunakan Vue.js. Saya lulus dari Institut Teknologi Sepuluh Nopember, dan saya sedang mencari kesempatan untuk berkarir di bidang front-end development. Ketika saya sedang tidak melakukan coding, saya gemar bermain video games, mendengarkan musik, serta mengarang musik.',
      },
      education: {
        h: 'pendidikan',
        subH1: 'pendidikan formal',
        year1: '2021',
        desc1: 'Lulus dari Institut Teknologi Sepuluh Nopember dengan gelar Sarjana (S1) pada Jurusan Sistem Informasi dengan Indeks Prestasi Kumulatif (IPK) sebesar 2,95 dari 4,00.',
        subH2: 'pengembangan profesional',
        year2: '2022 - now',
        desc2: ['Mempelajari HTML, CSS, dan JavaScript melalui tutorial-tutorial yang tersedia di website W3Schools.', 'Mempelajari Vue.js secara teori dan praktik, dengan menyelesaikan course online di website Laracasts, serta membaca dokumentasi resmi.', 'Mempelajari TailwindCSS, TypeScript, dan teknologi lainnya secara teori dan praktik dengan membaca dokumentasi resmi serta mengerjakan proyek-proyek pribadi.', 'Terus belajar dan tetap mengikuti perkembangan dalam bidang front-end development.'],
      },
      skill: {
        h: 'keterampilan',
      },
      project: {
        desc: ['Replika aplikasi website untuk proyek perumahan Thailand, yaitu Baan Nirati Chiangmai.', 'Sama seperti Baan Nirati Chiangmai, ini adalah replika website untuk proyek perumahan Thailand, yaitu Plum.', 'Berdasarkan desain website yang diberikan untuk pembelajaran, ini adalah replika website untuk sebuah jasa crowdfunding online yang bernama Crowdfund.'],
        view: 'lihat',
      },
      contact: {
        h: 'kontak',
        email: 'email',
        name: 'nama',
        subject: 'subjek',
        message: 'pesan',
        submit: "kirim",
      }
    }
  }
})

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')

window.addEventListener('beforeunload', () => {
  const forms = document.getElementsByTagName('form');
  for (const form of forms) {
    form.reset();
  }
})