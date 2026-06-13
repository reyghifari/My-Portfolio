import { Smartphone, Sparkles, Compass, type LucideIcon } from 'lucide-react'

export const personal = {
  name: 'Kgs Muhammad Raihan Ghifari',
  firstName: 'Kgs Muhammad',
  lastName: 'Raihan Ghifari',
  roles: ['Mobile Engineer', 'Android Kotlin Developer', 'iOS Swift Developer', 'Kotlin Multiplatform'],
  tagline:
    'I build Android applications that blend performance, user experience, and intelligent automation.',
  intro:
    'Google-certified Android Engineer with 4+ years shipping production apps in Kotlin and Jetpack Compose.',
  location: 'Indonesia',
  availability: 'Available for Full-Time · Project-Based · Freelance · Remote',
  email: 'kgsmraihanghifari@gmail.com',
  links: {
    email: 'mailto:kgsmraihanghifari@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kgs-muhammad-raihan-ghifari-2602a5209/',
    github: 'https://github.com/reyghifari',
    upwork: 'https://www.upwork.com/freelancers/~011714e10da26ceaa7',
  },
  stats: [
    { value: 4, suffix: '+', label: 'Years Experience' },
    { value: 10, suffix: '+', label: 'Apps Shipped' },
    { value: 5, suffix: '+', label: 'Companies Served' },
    { value: 1, suffix: '', label: 'Global Hackathon Win' },
  ],
}

export interface Skill {
  name: string
  blurb: string
}

export const skills: Skill[] = [
  { name: 'Kotlin', blurb: 'Primary language — idiomatic, concise, expressive.' },
  { name: 'Android SDK', blurb: 'Deep platform knowledge across all API levels.' },
  { name: 'Jetpack Compose', blurb: 'Declarative, reactive modern Android UI.' },
  { name: 'XML UI', blurb: 'Legacy view systems & custom components.' },
  { name: 'MVVM', blurb: 'Reactive, testable presentation architecture.' },
  { name: 'Clean Architecture', blurb: 'Modular, layered, maintainable codebases.' },
  { name: 'Hilt', blurb: 'Dependency injection at scale.' },
  { name: 'Coroutines', blurb: 'Structured concurrency with Flow.' },
  { name: 'Room', blurb: 'Robust local persistence layer.' },
  { name: 'Firebase', blurb: 'Crashlytics, analytics, remote config.' },
  { name: 'TensorFlow Lite', blurb: 'On-device inference for mobile.' },
  { name: 'Git', blurb: 'Version control & collaborative workflows.' },
]

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  tech: string[]
  images: string[]
  link?: string
}

// Images are loaded automatically from the /portfolio folder (served from /public).
export const projects: Project[] = [
  {
    id: 'tring',
    number: '01',
    title: 'Tring! by Pegadaian',
    category: 'Fintech',
    description:
      "Modern Android application powering Pegadaian's digital ecosystem. Built with Jetpack Compose, MVVM, and Hilt for a seamless investment & financial management experience.",
    tech: ['Jetpack Compose', 'Hilt', 'MVVM', 'Clean Architecture'],
    images: [
      '/portfolio/tring/tring1.png',
      '/portfolio/tring/tring2.png',
      '/portfolio/tring/tring3.png',
      '/portfolio/tring/tring4.png',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital',
  },
  {
    id: 'byond',
    number: '02',
    title: 'BYOND by BSI',
    category: 'Banking',
    description:
      'Banking super-app for Bank Syariah Indonesia customers. Maintained and enhanced with MVP architecture and custom XML UI, delivering stability and security at scale.',
    tech: ['MVP Architecture', 'XML UI', 'Banking', 'Security'],
    images: [
      '/portfolio/byond/byond1.png',
      '/portfolio/byond/byond2.png',
      '/portfolio/byond/byond3.png',
      '/portfolio/byond/byond4.png',
      '/portfolio/byond/byond5.png',
    ],
    link: 'https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp',
  },
  {
    id: 'rey',
    number: '03',
    title: 'Rey: Health App',
    category: 'Health',
    description:
      'Native Kotlin health & insurance super-app. Migrated from React Native for massive performance gains. Integrated Google Fit API, Xendit payments, and Vida OCR verification.',
    tech: ['Kotlin', 'Google Fit API', 'Xendit', 'OCR'],
    images: [
      '/portfolio/rey/rey1.png',
      '/portfolio/rey/rey2.png',
      '/portfolio/rey/rey3.png',
      '/portfolio/rey/rey4.png',
    ],
    link: 'https://play.google.com/store/apps/details?id=id.rey',
  },
  {
    id: 'gomuslim',
    number: '04',
    title: 'Go Muslim',
    category: 'Lifestyle',
    description:
      'Comprehensive Islamic lifestyle app featuring full Al-Quran with audio, accurate prayer times, Qibla compass, and Hadith collection. Built with Jetpack Compose and Kotlin.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Lifestyle'],
    images: [
      '/portfolio/gomuslim/gomuslim1.png',
      '/portfolio/gomuslim/gomuslim2.png',
      '/portfolio/gomuslim/gomuslim3.png',
    ],
    link: 'https://play.google.com/store/apps/details?id=id.co.raihan.gomuslimapp&hl=id',
  },
]

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Android Engineer',
    company: 'Bank DKI',
    period: 'Feb 2026 – Present',
    description:
      'Architected critical banking modules including User Onboarding, Device Binding, and Secure User Activation flows. Engineered a scalable API layer using OkHttp with MVVM & Clean Architecture.',
    tags: ['Clean Architecture', 'MVVM', 'OkHttp', 'Security'],
  },
  {
    role: 'Android Engineer',
    company: 'Pegadaian',
    period: 'Feb 2025 – Jan 2026',
    description:
      'Initialized MVVM architecture and designed a scalable API layer using Hilt dependency injection. Developed new features and built UI using Jetpack Compose.',
    tags: ['Jetpack Compose', 'Hilt', 'MVVM'],
  },
  {
    role: 'Android Engineer',
    company: 'Byond by BSI',
    period: 'Mar 2024 – Jan 2025',
    description:
      'Maintained and enhanced application performance using XML-based UI and MVP architecture. Supported production issue resolutions and collaborated with QA and DevOps.',
    tags: ['MVP Architecture', 'XML UI', 'Bug Fixing'],
  },
  {
    role: 'Capstone Project Advisor',
    company: 'Bangkit Academy — Google, Tokopedia, Gojek, Traveloka',
    period: 'Nov 2024 – Jan 2025',
    description:
      'Provided mentorship for teams in their Capstone Project for the Android Development Path.',
    tags: ['Mentorship', 'Android Development'],
  },
  {
    role: 'Android Engineer',
    company: 'BTN Syariah',
    period: 'Oct 2024 – Dec 2024',
    description:
      'Specialized in bug fixing, performance optimization, and feature maintenance for reliable financial transactions. Improved app stability through proactive code refactoring.',
    tags: ['MVP Architecture', 'Performance', 'Fintech'],
  },
  {
    role: 'Android Engineer',
    company: 'Rey.id',
    period: 'Sep 2023 – Feb 2024',
    description:
      'Transitioned the application from React Native to Android Kotlin Native, delivering a substantial performance boost. Integrated Google Fit tracking, Xendit payments, and OCR verification.',
    tags: ['Kotlin', 'Google Fit API', 'Xendit', 'OCR'],
  },
]

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description:
      'Production-grade native Android apps in Kotlin & Jetpack Compose, built on clean, scalable architecture.',
    points: ['Kotlin · Compose', 'Clean Architecture', 'Play Store delivery'],
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description:
      'Bring intelligent automation into mobile products — on-device ML, AI agents, and smart workflows.',
    points: ['ML Kit · TF Lite', 'AI-assisted workflows', 'Smart automation'],
  },
  {
    icon: Compass,
    title: 'Mobile App Consulting',
    description:
      'Architecture reviews, performance audits, and technical mentorship to level up your mobile team.',
    points: ['Architecture review', 'Performance audits', 'Team mentorship'],
  },
]

export interface Achievement {
  title: string
  org: string
  description: string
  link?: string
}

export const achievements: Achievement[] = [
  {
    title: 'Winner — Canton Construct Hackathon',
    org: 'Canton Network · Global Competition',
    description:
      'Built an Android app integrated with blockchain using DAML smart contracts. Team "Kucing Oyen" — the only winning team from Indonesia.',
  },
  {
    title: 'Associate Android Developer',
    org: 'Google Developers · Nov 2022',
    description:
      'Official Google certification demonstrating mastery of fundamental Android development in a professional environment.',
    link: 'https://www.credential.net/71c5c594-cbcc-42b9-8c28-169f6869b14b?key=d5d65b2c442cb300a2cb52d4a60dd24ef0c8a2e397caa7a5050b8996d107157a',
  },
  {
    title: 'Android Developer Expert',
    org: 'Dicoding Academy · Apr 2023',
    description:
      'Awarded for mastery of advanced Android techniques, security, and performance optimization.',
    link: 'https://www.dicoding.com/certificates/0LZ09DVRRZ65',
  },
]
