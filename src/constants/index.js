import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,  
  git,
  next,
  figma,
  bootstrap,
  mui,
  restapi,
  pwa,
  sass,
  youtube,
  travel,
  prixma,
  shop,
  ikorc,
  dashboard,
  coffee,
  sabz,
  
} from "../assets";

const technologies = [
  {
    name: "HTML 5",
    percent:"18 ماه",
    icon: html,
  },
  {
    name: "CSS 3",
    percent:"18 ماه",
    icon: css,
  },
  {
    name: "JavaScript",
    percent:"16 ماه",
    icon: javascript,
  },
  {
    name: "Sass",
    percent:"14 ماه",
    icon: sass,
  },
  {
    name: "React JS",
    percent:"12 ماه",
    icon: reactjs,
  },
  {
    name: "git",
    percent:"12 ماه",
    icon: git,
  },
  {
    name: "Bootstrap",
    percent:"12 ماه",
    icon: bootstrap,
  },
  {
    name: "Rest api",
    percent:"8 ماه",
    icon: restapi,
  },
  {
    name: "Tailwind",
    percent:"6 ماه",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    percent:"5 ماه",
    icon: typescript,
  },
  {
    name: "Redux",
    percent:"5 ماه",
    icon: redux,
  },
  {
    name: "MUI",
    percent:"4 ماه",
    icon: mui,
  },
  {
    name: "figma",
    percent:"4 ماه",
    icon: figma,
  },
  {
    name: "PWA",
    percent:"2 ماه",
    icon: pwa,
  },
  {
    name: "Next",
    percent:"2 ماه",
    icon: next,
  }
];

const projects = [
  {
    name: "پالایشگاه نفت شازند",
    description:
      "یک پروژه که با وانیلا جاوااسکریپت توسعه داده شده و به سفارش روابط عمومی پالایشگاه شازند جهت استفاده در فضای مجازی به عنوان معرفی نامه شرکت می باشد و تا کنون صفحات اولیه آن توسعه داده شده است.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanila-Js",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: ikorc,
    source_link: "https://github.com/Erfan-Ebrahimi/IKORC1.git",
    demo_link: "https://ikorc.vercel.app/",
  },
  {
    name: "سایت فروش قهوه",
    description:
      "یک سایت فروشگاه قهوه که با ری اکت و تیلویند توسعه داده شده است. هدف از پروژه تمرین تیلویند بوده است.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      }
    ],
    image: coffee,
    source_link: "https://github.com/Erfan-Ebrahimi/IKORC1.git",
    demo_link: "https://coffee-er.netlify.app/",
  },
  {
    name: "سایت آموزش برنامه نویسی",
    description:
      "بک اند این پروژه از قبل توسعه داده شده است و فرانت طبق بک اند توسعه داده شده است. در دل  این پروژه دو پنل کاربری و ادمین توسعه داده شده است و نسبت به بقیه پروژه هایی که توسعه دادم پیچیده تر می باشد.",
    tags: [
      {
        name: "Router-dom-six",
        color: "blue-text-gradient",
      },
      {
        name: "React-player",
        color: "green-text-gradient",
      },
      {
        name: "Ckeditor",
        color: "pink-text-gradient",
      }
    ],
    image: sabz,
    source_link: "https://github.com/Erfan-Ebrahimi/Sabz-full",
  },
  {
    name: "پنل ادمین",
    description:
      "یک مینی پروژه SPA ری اکت می باشد که اطلاعات محصولات و کاربران را نمایش می دهد.هنوز به اتمام نرسیده و در حال توسعه می باشد.ریسپانسیو نشده است.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Formik",
        color: "green-text-gradient",
      },
      {
        name: "mui/data-grid",
        color: "pink-text-gradient",
      },
      {
        name: "recharts",
        color: "orange-text-gradient",
      },
    ],
    image: dashboard,
    source_link: "https://github.com/Erfan-Ebrahimi/panel-er",
    demo_link: "https://panel-er.onrender.com",
  },
  {
    name: "یوتیوب",
    description:
      "یک پروژه ی React که شبیه یوتیوب می باشد. از یک api محدود برای دریافت اطلاعات استفاده شده است.",
    tags: [
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "React-player",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      }
    ],
    image: youtube,
    source_link: "https://github.com/Erfan-Ebrahimi/youtube-er",
    demo_link: "https://youtube-er.onrender.com",
  },
  {
    name: "سایت گردشگری",
    description:
      "این پروژه یک سایت گردشگری می باشد که تماما با sass استایل دهی داده شده است.هدف پروژه یادگیری و تمرین sass بوده است.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "Vanila-Js",
        color: "pink-text-gradient",
      }
    ],
    image: travel,
    source_link: "https://github.com/Erfan-Ebrahimi/TRAVEL-ER.git",
    demo_link: "https://travel-er.vercel.app/",
  },
  {
    name: "Prixma",
    description:
      "یک پروژه ی تمرینی که تماما با Bootstrap استایل دهی شده است.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Vanila-Js",
        color: "green-text-gradient",
      }
    ],
    image: prixma,
    source_link: "https://github.com/Erfan-Ebrahimi/PRIXMA.git",
    demo_link: "https://prixma.vercel.app/",
  },
  {
    name: "سایت فروشگاهی",
    description:
      "یک سایت SPA می باشد که با ری اکت توسعه داده شده است.برای مدیریت state از context و برای استایل دهی از module.css استفاده شده است.",
    tags: [
      {
        name: "Router-dom-six",
        color: "blue-text-gradient",
      },
      {
        name: "Module-Css",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      }
    ],
    image: shop,
    source_link: "https://github.com/Erfan-Ebrahimi/PRIXMA.git",
    demo_link: "https://prixma.vercel.app/",
  },
  
];

export { technologies, projects };
