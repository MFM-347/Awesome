const raw = [
  {
    name: 'Obtainium',
    category: 'app',
    tags: ['CleanUI', 'Downloader'],
    foss: true,
    fossLnk: 'https://github.com/ImranR98/Obtainium',
    icon: 'https://raw.githubusercontent.com/ImranR98/Obtainium/refs/heads/main/assets/graphics/icon_small.png',
    description: 'Get Android app updates straight from the source.',
    url: 'https://github.com/ImranR98/Obtainium/releases/latest/',
  },
  {
    name: 'v0',
    category: 'website',
    tags: ['AI', 'Code Generator'],
    foss: false,
    icon: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/v0.png',
    description: 'Chat with v0. Generate UI with simple text prompts. Copy, paste, ship.',
    url: 'https://v0.dev/',
  },
  {
    name: 'HueTools',
    category: 'website',
    tags: ['Colors', 'ToolBox', 'Inspirable'],
    foss: true,
    fossLnk: 'https://github.com/pabueco/hue.tools',
    icon: 'https://hue.tools/favicon.svg',
    description:
      'A free color mixer, blender, info and modifier tool. Mix multiple colors, get links for design inspiration and stock images based on a color, view various color combinations and modify colors in an intuitive.',
    url: 'https://hue.tools/',
  },
  {
    name: 'RenDroid',
    category: 'app',
    tags: ['CleanUI', 'Automation'],
    foss: true,
    fossLnk: 'https://github.com/MFM-347/RenDroid',
    icon: 'https://raw.githubusercontent.com/MFM-347/RenDroid/refs/heads/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher_rounded.png',
    description:
      'A fast, customizable file renaming app for Android. It offers a fast, customizable renaming experience, ideal for organizing files quickly on your Android device.',
    url: 'https://github.com/MFM-347/RenDroid/releases/latest/',
  },
  {
    name: 'ChatGPT',
    category: 'website',
    tags: ['AI', 'ChatBot'],
    foss: false,
    icon: 'https://www.svgrepo.com/show/306500/openai.svg',
    description: 'A conversational AI system that listens, learns, and challenges.',
    url: 'https://chatgpt.com/',
  },
  {
    name: 'AI Pure',
    category: 'website',
    tags: ['AI', 'Awesome'],
    foss: false,
    icon: 'https://aipure.ai/favicon.ico',
    description: 'The Best AI in One Place. AiPure helps you find the best AI tools easily!',
    url: 'https://aipure.ai/',
  },
  {
    name: '30 Seconds of Code',
    category: 'website',
    tags: ['Code', 'Snippets'],
    foss: true,
    fossLnk: 'https://github.com/Chalarangelo/30-seconds-of-code',
    icon: 'https://www.30secondsofcode.org//assets/icons/icon-192x192.png',
    description: 'Discover hundreds of coding articles to level up your skills.',
    url: 'https://30secondsofcode.org/',
  },
  {
    name: 'Build your own X',
    category: 'GitHub Repo',
    tags: ['Code', 'Tutorials'],
    foss: false,
    description: 'Master programming by recreating your favorite technologies from scratch.',
    url: 'https://github.com/codecrafters-io/build-your-own-x/',
  },
  {
    name: 'Awesome Cheatsheets',
    category: 'GitHub Repo',
    tags: ['Code', 'Cheatsheets'],
    foss: true,
    fossLnk: 'https://github.com/LeCoupa/awesome-cheatsheets/',
    description:
      'Awesome cheatsheets for popular programming languages, frameworks and development tools.',
    url: 'https://github.com/LeCoupa/awesome-cheatsheets/',
  },
  {
    name: 'Project Based Learning',
    category: 'GitHub Repo',
    tags: ['Code', 'Awesome'],
    foss: true,
    fossLnk: 'https://github.com/practical-tutorials/project-based-learning/',
    description:
      'A list of programming tutorials in which aspiring software developers learn how to build an application from scratch.',
    url: 'https://github.com/practical-tutorials/project-based-learning/',
  },
  {
    name: 'FrontEnd Checklist',
    category: 'website',
    tags: ['Code', 'Checklist'],
    foss: true,
    fossLnk: 'https://github.com/thedaviddias/Front-End-Checklist',
    icon: 'https://frontendchecklist.io/favicon-32x32.png',
    description:
      '🗂 The Front-End Checklist Application is perfect for modern websites and meticulous developers!',
    url: 'https://frontendchecklist.io/',
  },
  {
    name: "Abdullah Al Rakib's Portfolio",
    category: 'website',
    tags: ['Portfolio', 'animated', 'Inspirable'],
    foss: true,
    fossLnk: 'https://github.com/rakib8680/My-Portfolio',
    description: 'An Inspirable fun Portfolio for web developers',
    url: 'https://abdullah-al-rakib.surge.sh/',
  },
  {
    name: 'Llama Coder',
    category: 'website',
    tags: ['AI', 'Code Generator'],
    foss: true,
    fossLnk: 'https://github.com/nutlope/llamacoder',
    icon: 'https://llamacoder.together.ai/favicon.ico',
    description: 'Turn your idea into an app with Llama 3.1 405B',
    url: 'https://llamacoder.together.ai/',
  },
  {
    name: 'Toolbaz',
    category: 'website',
    tags: ['AI', 'Writer', 'ToolBox'],
    foss: false,
    icon: 'https://toolbaz.com/assets/img/favicon/favicon-32x32.png',
    description:
      "Explore ToolBaz's free AI writing tools powered by GPT-4, Gemini, Meta-AI, and more.",
    url: 'https://toolbaz.com/',
  },
  {
    name: 'Tailwindcss Generator',
    category: 'website',
    tags: ['Tailwind', 'Generator', 'Inspirable'],
    foss: false,
    icon: 'https://tailwind-generator.com/favicon.svg',
    description:
      'Collection of useful tools and generators for Tailwind to create, design and customize all kind of web components using a graphical editor.',
    url: 'https://tailwind-generator.com/',
  },
  {
    name: 'Simple Gallery',
    category: 'app',
    tags: ['Gallery', 'Photo Viewer', 'Photo Editor'],
    foss: true,
    fossLnk: 'https://github.com/SimpleMobileTools/Simple-Gallery',
    icon: 'https://raw.githubusercontent.com/SimpleMobileTools/Simple-Gallery/master/graphics/icon.png',
    description: 'A premium ad-free app for managing and editing your photos, videos, GIFs.',
    url: 'https://github.com/SimpleMobileTools/Simple-Gallery/releases/latest/',
  },
  {
    name: 'Dev Resources',
    category: 'website',
    tags: ['Awesome', 'Inspirable'],
    foss: true,
    fossLnk: 'https://github.com/marcelscruz/dev-resources/',
    icon: 'https://devresourc.es/favicon-dr/favicon.ico',
    description: 'A collaborative list of resources for developers.',
    url: 'https://devresourc.es/',
  },
  {
    name: 'Awesome Illustrations for Projects',
    category: 'GitHub Repo',
    tags: ['Illustrations', 'Awesome'],
    foss: true,
    fossLnk: 'https://github.com/Awesome-Illustrations-4Projects/',
    description:
      '🔥 An awesome list of illustrations to improve your projects, posts & portfolios. Fork & add your own.',
    url: 'https://github.com/Anmol-Baranwal/Awesome-Illustrations-4Projects/',
  },
  {
    name: 'Cool GIFs for GitHub',
    category: 'GitHub Repo',
    tags: ['README', 'Illustrations', 'Awesome', 'Markdown'],
    foss: true,
    fossLnk: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/',
    description: '🤝 Awesome List of GIFs & avatars to use in GitHub.',
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/',
  },
  {
    name: 'Awesome',
    category: 'GitHub Repo',
    tags: ['Awesome', 'of', 'Awesomes'],
    foss: true,
    fossLnk: 'https://github.com/sindresorhus/awesome/',
    description: '😎 Awesome lists about all kinds of interesting topics.',
    url: 'https://github.com/sindresorhus/awesome/',
  },
  {
    name: 'SVG Path Editor',
    category: 'website',
    tags: ['SVG', 'Vector', 'Graphics'],
    foss: true,
    fossLnk: 'https://yqnn.github.io/svg-path-editor',
    icon: 'https://yqnn.github.io/svg-path-editor/favicon.ico',
    description: 'Online editor to create and manipulate SVG paths',
    url: 'https://yqnn.github.io/svg-path-editor/',
  },
  {
    name: 'MarkDown Editor',
    category: 'website',
    tags: ['MarkDown', 'Text', 'Editor'],
    foss: true,
    fossLnk: 'https://github.com/jbt/markdown-editor/',
    icon: 'https://jbt.github.io/markdown-editor/favicon.png',
    description: 'The live markdown editor.',
    url: 'https://jbt.github.io/markdown-editor/',
  },
  {
    name: '50 Programming Languages',
    category: 'website',
    tags: ['Awesome', 'Programming'],
    foss: true,
    fossLnk: 'https://github.com/Alexcj10/50-Programming-Languages/',
    description:
      'Discover top 50 programming languages with curated learning resources & project ideas.',
    url: 'https://github.com/Alexcj10/50-Programming-Languages/',
  },
  {
    name: 'Awesome Automations',
    category: 'GitHub Repo',
    tags: ['Code', 'Automation', 'Awesome'],
    foss: true,
    fossLnk: 'https://github.com/Arsenic-ATG/Awesome-Automations/',
    description: 'A repository Full of 😎interesting Automations.',
    url: 'https://github.com/Arsenic-ATG/Awesome-Automations/',
  },
  {
    name: 'PixelCraft',
    category: 'website',
    tags: ['pixel', 'art', 'pwa'],
    foss: true,
    fossLnk: 'https://github.com/rgab1508/PixelCraft',
    icon: 'https://pixelcraft.web.app/icons/logo.png',
    description: 'A pixel Art & Animation Creation Tool Built using HTML5 Canvas.',
    url: 'https://pixelcraft.web.app/',
  },
  {
    name: 'Android FOSS',
    category: 'website',
    tags: ['Awesome', 'Android'],
    foss: true,
    fossLnk: 'https://offa.github.io/android-foss/',
    icon: 'https://offa.github.io/android-foss/android.svg',
    description:
      'A list of Free and Open Source Software (FOSS) for Android – saving Freedom and Privacy.',
    url: 'https://offa.github.io/android-foss/',
  },
  {
    name: 'My Calendar App',
    category: 'website',
    tags: ['Calendar', 'Expense Tracker', 'TODO'],
    foss: true,
    fossLnk: 'https://github.com/divyansh-2005/my-calendar-app',
    description:
      'My Calendar App is a full-stack application designed to help users manage their schedules, expenses, todos, and notes all in one place.',
    url: 'https://my-calendar-app-phi.vercel.app/',
  },
  {
    name: 'DefProgramming',
    category: 'website',
    tags: ['Programming', 'Qoutes', 'Inspirable'],
    foss: true,
    fossLnk: 'https://github.com/daviferreira/defprogramming.com',
    icon: 'https://www.defprogramming.com/icons/icon-192x192.png',
    description:
      'Quotes about programming, coding, computer science, debugging, software industry, startups and motivation. Programming wisdom.',
    url: 'https://www.defprogramming.com/',
  } /* Because to SSE(server side error)
  {
    name: 'OpenSource Heroes',
    category: 'website',
    tags: ['Awesome'],
    foss: false,
    url: 'https://opensource-heroes.com/',
  },*/,
  {
    name: 'EnjoyCSS',
    category: 'website',
    tags: ['CSS', 'Generator'],
    foss: false,
    fossLnk: 'https://github.com/marcelscruz/dev-resources/',
    icon: 'https://enjoycss.com/ico/enjoy_favicon.png',
    description: 'EnjoyCSS is an advanced CSS3 generator that saves your time.',
    url: 'https://enjoycss.com/',
  },
  {
    name: 'KeyFrames',
    category: 'website',
    tags: ['CSS', 'Generator'],
    foss: false,
    icon: 'https://keyframes.app/img/icons/icon-192.png',
    description:
      'Browser-based, mobile-friendly, actually private tools that make CSS a little less bad.',
    url: 'https://keyframes.app/',
  },
  {
    name: 'Vector Mixer',
    category: 'website',
    tags: ['SVG', 'Vector', 'Graphics'],
    foss: false,
    icon: 'https://vectormixer.com/favicon.ico',
    description:
      'Vectormixer is a powerful online vector editor that allows users to quickly and easily create stunning vector graphics.',
    url: 'https://vectormixer.com/',
  },
  {
    name: 'SVG Repo',
    category: 'website',
    tags: ['SVG', 'Vector', 'library', 'Icons'],
    foss: false,
    description:
      'Free Vectors and Icons in SVG format. ✅ Download free mono or multi color vectors for commercial use. Search in 500.000+ Free SVG Vectors and Icons.',
    url: 'https://svgrepo.com/',
  },
  {
    name: 'FontGet',
    category: 'website',
    tags: ['Font', 'library', 'Generator'],
    foss: false,
    icon: 'https://www.fontget.com/img/favicon-32x32.png',
    description: 'Download Free Fonts for your website, Mac, Windows, Linux, iOS and Android.',
    url: 'https://www.fontget.com/',
  },
  {
    name: 'README SO',
    category: 'website',
    tags: ['README', 'MarkDown', 'Editor'],
    foss: true,
    fossLnk: 'https://github.com/octokatherine/readme.so',
    icon: 'https://readme.so/icons/icon-96x96.png',
    description:
      "Use readme.so's markdown editor and templates to easily create a ReadMe for your projects",
    url: 'https://readme.so/',
  },
  {
    name: 'QuickRef ME',
    category: 'website',
    tags: ['Code', 'Cheatsheets'],
    foss: true,
    fossLnk: 'https://github.com/Fechin/reference',
    icon: 'https://quickref.me/images/favicon.png',
    description: 'Share quick reference and cheat sheet for developers',
    url: 'https://quickref.me/',
  },
  {
    name: '3D Icons',
    category: 'website',
    tags: ['3D', 'Icons', 'library'],
    foss: true,
    fossLnk: 'https://github.com/realvjy/3dicons',
    icon: 'https://3dicons.co/favicons/android-icon-192x192.png',
    description:
      'Beautifully crafted open-source 3d icons. 100+ unique icons in 4 styles and 3 camera angle.',
    url: 'https://3dicons.co/',
  },
  {
    name: 'BGJar',
    category: 'website',
    tags: ['SVG', 'BackGround', 'Generator'],
    foss: false,
    icon: 'https://bgjar.com/bgjar.svg',
    description: 'Free svg background generator for your websites, blogs and app.',
    url: 'https://bgjar.com/',
  },
  {
    name: 'UI Colors',
    category: 'website',
    tags: ['Tailwind', 'Colors', 'Generator'],
    foss: false,
    description:
      'Generate, edit, save and share Tailwind CSS color shades based on a given hexcode or HSL color.',
    url: 'https://uicolors.app/create/',
  },
  {
    name: 'Design Hacks',
    category: 'website',
    tags: ['Design', 'Resources', 'Awesome'],
    foss: false,
    icon: 'https://framerusercontent.com/images/AWOpQDTBXxhPFr5I0YLyQ2qz7I.png',
    description: 'The #1 website to find all the best and viral design tools and resources.',
    url: 'https://designhacks.online/',
  },
  {
    name: 'UI Verse',
    category: 'website',
    tags: ['UI', 'Components', 'library'],
    foss: false,
    icon: 'https://uiverse.io/favicon-32x32.png',
    description:
      'Community-made library of free and customizable UI elements made with CSS or Tailwind.',
    url: 'https://uiverse.io/',
  },
  {
    name: 'Code IMG',
    category: 'website',
    tags: ['Code', 'Screenshot', 'Generator'],
    foss: false,
    icon: 'https://codeimg.io/img/logo-black-white.3a439316.svg',
    description: 'Create and share beautiful images of your source code.',
    url: 'https://codeimg.io/',
  },
  {
    name: 'Color Curves',
    category: 'website',
    tags: ['Colors', 'Scheme', 'Generator'],
    foss: true,
    fossLnk: 'https://github.com/mracette/color-curves-app',
    icon: 'https://colorcurves.app/favicon-32x32.png',
    description: 'Unique color palettes for data visualization and generative art.',
    url: 'https://colorcurves.app/',
  },
  {
    name: "Vijay Verma's Portfolio",
    category: 'website',
    tags: ['Portfolio', 'Modern', 'Inspirable'],
    foss: false,
    icon: 'https://vjy.me/favicon.ico',
    description: 'An Inspirable fun Portfolio for web developers.',
    url: 'https://vjy.me/',
  },
  {
    name: 'StackSorted',
    category: 'website',
    tags: ['UI', 'Components', 'library'],
    foss: true,
    fossLnk: 'https://github.com/juxtopposed/stacksorted',
    icon: 'https://stacksorted.com/favicon.png',
    description:
      "Find Inspiration in Design Elements. Collection of the web's best designs sorted by elements. Choose an element and view projects/websites with creative designs for it.",
    url: 'https://stacksorted.com/',
  },
  {
    name: 'The Stocks v3',
    category: 'website',
    tags: ['Design', 'Awesome'],
    foss: false,
    icon: 'https://thestocks.im/favicon.png',
    description:
      '2100+ tools for Designers 🎉 Discover the best royalty-free stock photos, icons, videos, mockups, and tools! Updates daily.',
    url: 'https://thestocks.im/',
  },
  {
    name: 'LogoLab',
    category: 'website',
    tags: ['Logo', 'Improvements'],
    foss: false,
    icon: 'https://logolab.app/favicon.ico',
    description:
      'Logo Lab puts logos to the test. Simply upload a logo, and you’ll be presented with visual experiments that test key factors like scalability, silhouette, and balance.',
    url: 'https://logolab.app/',
  },
  {
    name: 'FreeFace Gallery',
    category: 'website',
    tags: ['Font', 'Typography', 'Generator'],
    foss: false,
    icon: 'https://cdn.prod.website-files.com/63ad770767a7fcd529308e52/63fa478e4e9a8cb9136c76cc_favicon.png',
    description:
      'This website is a curated collection of typefaces that are available under a variety of free licences somewhere on the interwebs.',
    url: 'https://www.freefaces.gallery/',
  },
  {
    name: 'IT Tools',
    category: 'website',
    tags: ['Tools', 'Collection'],
    foss: true,
    fossLnk: 'https://github.com/CorentinTh/it-tools',
    icon: 'https://it-tools.tech/favicon.ico',
    description: 'Collection of handy online tools for developers, with great UX.',
    url: 'https://it-tools.tech/',
  },
  {
    name: 'Method AC',
    category: 'website',
    tags: ['UI/UX', 'Tools', 'Games'],
    foss: false,
    icon: 'https://method.ac/icon.png',
    description: 'Method of Action is education made fun.',
    url: 'https://method.ac/',
  },
  {
    name: 'SEO Roast',
    category: 'website',
    tags: ['AI', 'SEO', 'Optimization'],
    foss: false,
    icon: 'https://seoroast.co/_static/favicons/favicon-32x32.png',
    description: 'See where your SEO stands in 15 minutes.',
    url: 'https://seoroast.co/',
  },
  {
    name: 'PixCell',
    category: 'website',
    tags: ['pixel', 'art', 'editor'],
    foss: true,
    fossLnk: 'https://github.com/codse/pixcell',
    description: 'A pixel art creator made for fun.',
    url: 'https://pixcell.vercel.app/',
  },
  {
    name: 'TLDraw',
    category: 'website',
    tags: ['Collaborative', 'Whiteboard'],
    foss: false,
    icon: 'https://www.tldraw.com/favicon.svg',
    description:
      'whiteboard, canvas, collaborative whiteboard, online drawing, team collaboration tool, free whiteboard app.',
    url: 'https://www.tldraw.com/',
  },
  {
    name: 'Toools Design',
    category: 'website',
    tags: ['Design', 'Tools', 'Awesome'],
    foss: false,
    icon: 'https://cdn.prod.website-files.com/5ce10a4c0b5f0b05f522e746/627a23b7ee96702839153720_toools-design-favicon.png',
    description:
      'A growing archive of over 1,500 design resources. Discover highly useful design tools you never thought existed.',
    url: 'https://www.toools.design/',
  },
  {
    name: 'Learn UI Design',
    category: 'website',
    tags: ['Design', 'Tutorials', 'Tools'],
    foss: false,
    icon: 'https://www.learnui.design/favicon.ico',
    description:
      'The full-length online course on UI design: color, typography, layout, design process, and more.',
    url: 'https://www.learnui.design/',
  },
  {
    name: 'Laws of UX',
    category: 'website',
    tags: ['UI/UX', 'Laws'],
    foss: false,
    icon: 'https://lawsofux.com/icons/favicon.svg',
    description:
      'Laws of UX is a collection of best practices that designers can consider when building user interfaces.',
    url: 'https://lawsofux.com/',
  },
  {
    name: 'VectorMotion',
    category: 'App',
    tags: ['Graphics', 'SVG', 'Editor'],
    foss: false,
    icon: 'https://lh6.googleusercontent.com/2TgSEvcVqh0-YUegROlq5b9WiVJ9sJLYceLc7zLkuecJCIGiD17UpbeUHuoIOOaA7YK7oFyzlYpdZZxK7iUmc62SWOKl0VJ0Hqu3tJr1JEU80Dsd',
    description: 'The one tool for all your design and animation needs.',
    url: 'https://get.vectormotion.app/',
  },
  {
    name: 'ImageToolbox',
    category: 'App',
    tags: ['Image', 'Editor', 'ToolBox'],
    foss: true,
    fossLnk: 'https://github.com/T8RIN/ImageToolbox',
    icon: 'https://raw.githubusercontent.com/T8RIN/ImageToolbox/refs/heads/master/.idea/icon.png',
    description: 'Image Toolbox is a powerful app for advanced image manipulation.',
    url: 'https://github.com/T8RIN/ImageToolbox/releases/latest/',
  },
  {
    name: 'UnDraw',
    category: 'website',
    tags: ['illustrations', 'library'],
    foss: false,
    icon: 'https://undraw.co/apple-touch-icon.png',
    description:
      'Open-source illustrations for any idea you can imagine and create. Build beautiful websites, products and applications with your color, for free.',
    url: 'https://undraw.co/',
  },
  {
    name: 'Chatbase',
    category: 'website',
    tags: ['AI', 'Chatbot', 'Builder'],
    foss: false,
    icon: 'https://www.chatbase.co/icon.ico',
    description:
      'Build a custom GPT, embed it on your website and let it handle customer support, lead generation, engage with your users, and more.',
    url: 'https://www.chatbase.co/',
  },
  {
    name: 'Markor',
    category: 'App',
    tags: ['Markdown', 'Text', 'Editor'],
    foss: true,
    fossLnk: 'https://github.com/gsantner/markor',
    icon: 'https://raw.githubusercontent.com/gsantner/markor/master/app/src/main/ic_launcher-web.png',
    description:
      'Markor is a TextEditor for Android. This project aims to make an editor that is versatile, flexible, and lightweight.',
    url: 'https://github.com/gsantner/markor/releases/latest/',
  },
  {
    name: 'Omatsuri',
    category: 'website',
    tags: ['Tools', 'Collection'],
    foss: true,
    fossLnk: 'https://github.com/rtivital/omatsuri',
    icon: 'https://omatsuri.app/assets/favicon-48x48.png',
    description: 'Progressive Web Application with 12 open source frontend focused tools.',
    url: 'https://omatsuri.app/',
  },
  {
    name: 'HTMLRev',
    category: 'website',
    tags: ['Website', 'Templates', 'boilerplates'],
    foss: false,
    icon: 'https://htmlrev.com/images/favicon.png',
    description:
      'Discover free HTML website templates built with vanilla CSS, Bootstrap, Tailwind, Angular, React, Vue, Nextjs, Nuxt, Svelte, Gatsby, Astro and Laravel.',
    url: 'https://htmlrev.com/',
  },
  {
    name: 'Pattern Pad',
    category: 'website',
    tags: ['Pattern', 'Generator'],
    foss: false,
    icon: 'https://patternpad.com/images/patternpad-icon.png',
    description: 'PatternPad offers unlimited unique pattern designs that fit your style.',
    url: 'https://patternpad.com/',
  },
  {
    name: 'Dev Docs',
    category: 'website',
    tags: ['Programming', 'API', 'Documentation'],
    foss: true,
    fossLnk: 'https://github.com/freeCodeCamp/devdocs',
    icon: 'https://devdocs.io/favicon.ico',
    description: 'Fast, offline, and free documentation browser for developers.',
    url: 'https://devdocs.io/',
  },
  {
    name: 'Learn UI/UX',
    category: 'website',
    tags: ['UI', 'UX', 'Course'],
    foss: false,
    icon: 'https://framerusercontent.com/images/Ov3NPIiB70TZa8r9dhrXapV0kxg.png',
    description:
      'Free 7 week syllabus for learning UX Design. No coding or fees needed. Curated by Ansh Mehra',
    url: 'https://learnuiux.in/',
  },
  {
    name: 'Prompts',
    category: 'website',
    tags: ['Awesome', 'AI', 'Prompts'],
    foss: true,
    fossLnk: 'https://github.com/f/awesome-chatgpt-prompts/',
    description:
      'This repo includes ChatGPT prompt curation to use ChatGPT and other LLM tools better.',
    url: 'https://prompts.chat/',
  },
  {
    name: 'Tail Animista',
    category: 'website',
    tags: ['Tailwindcss', 'Animation', 'Generator'],
    foss: false,
    description: 'Configurable custom animation utilities generator for Tailwind CSS.',
    url: 'https://tail-animista.vercel.app/',
  },
  {
    name: 'Flow Rift',
    category: 'website',
    tags: ['Tailwindcss', 'Components'],
    foss: false,
    icon: 'https://flowrift.com/img/favicon.png',
    description: 'A library filled with Tailwind CSS UI blocks, components & templates.',
    url: 'https://flowrift.com/',
  },
  {
    name: 'Animista',
    category: 'website',
    tags: ['CSS', 'Animation'],
    foss: false,
    description:
      'Animista is a place where you can play with a collection of pre-made CSS animations, tweak them and get only those you will actually use.',
    url: 'https://animista.net/',
  },
  {
    name: 'CSS Buttons',
    category: 'website',
    tags: ['UI', 'Button', 'library'],
    foss: true,
    fossLnk: 'https://github.com/guivr/cssbuttons',
    icon: 'https://cssbuttons.app/favicon.ico',
    description: 'Collection of over 60+ handpicked and custom made CSS buttons for your website.',
    url: 'https://cssbuttons.app/',
  },
  {
    name: 'Neumorphism Generator',
    category: 'website',
    tags: ['CSS', 'Neumorphic', 'Generator'],
    foss: true,
    fossLnk: 'https://github.com/adamgiebl/neumorphism',
    icon: 'https://neumorphism.io/favicon.ico',
    description:
      'CSS code generator that will help with colors, gradients and shadows to adapt this new design trend or discover its posibilities.',
    url: 'https://neumorphism.io/',
  },
  {
    name: 'CSS Buttons',
    category: 'website',
    tags: ['UI', 'Button', 'library'],
    foss: false,
    icon: 'https://cssbuttons.io/favicon-96x96.png',
    description: 'Explore Cssbuttons.io for a diverse collection of over 100 unique button styles.',
    url: 'https://cssbuttons.io/',
  },
  {
    name: 'CSS Bud',
    category: 'website',
    tags: ['CSS', 'Generators', 'GIF', 'library'],
    foss: false,
    description:
      'Free, high-quality CSS tools and code snippets for your design, technical and creative needs. Shadows, glows, text tools and more - come and enjoy.',
    url: 'https://cssbud.com/',
  },
  {
    name: 'CSS Grid Generator',
    category: 'website',
    tags: ['CSS', 'Grid', 'Generator'],
    foss: true,
    fossLnk: 'https://github.com/sdras/cssgridgenerator',
    icon: 'https://cssgrid-generator.netlify.app/favicon.ico',
    description: 'Generate basic CSS Grid code to make dynamic layouts!',
    url: 'https://cssgrid-generator.netlify.app/',
  },
  {
    name: 'Image Extractor',
    category: 'website',
    tags: ['website', 'images', 'extractor'],
    foss: false,
    icon: 'https://extract.pics/img/favicon.ico',
    description:
      'extract.pics is a free tool to extract, view and download images from any public website by using a virtual browser.',
    url: 'https://extract.pics/',
  },
  {
    name: 'UI Logos',
    category: 'website',
    tags: ['UI', 'Logo', 'Placeholders'],
    foss: true,
    fossLnk: 'https://github.com/realvjy/uilogos.co',
    icon: 'https://uilogos.co/favicon.ico',
    description: 'Generate basic CSS Grid code to make dynamic layouts!',
    url: 'https://uilogos.co/',
  },
  {
    name: 'Cool Shapes',
    category: 'website',
    tags: ['UI', 'Cool', 'Shapes'],
    foss: true,
    fossLnk: 'https://github.com/realvjy/uilogos.co',
    icon: 'https://coolshap.es/favicon.ico',
    description:
      '100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.',
    url: 'https://coolshap.es/',
  },
  {
    name: 'PDF Pie',
    category: 'website',
    tags: ['PDF', 'Editor', 'Exportor'],
    foss: true,
    fossLnk: 'https://github.com/realvjy/uilogos.co',
    icon: 'https://pdfpie.com/img/icons/favicon.svg',
    description:
      'PDFPie online PDF editor lets you edit or add text and add images to your PDFs. Edit your PDFs in your browser for free!',
    url: 'https://pdfpie.com/',
  },
  {
    name: 'PDF Pie',
    category: 'website',
    tags: ['PDF', 'Editor', 'Exportor'],
    foss: true,
    fossLnk: 'https://github.com/markodenic/web-development-resources',
    description: 'This is a list of awesome web development resources. Add more!',
    url: 'https://web-dev-resources.com/list/',
  },
]

raw.sort((a, b) => a.name.localeCompare(b.name))
const data = raw.map((item, index) => ({
  ...item,
  id: index + 1,
}))

export default data
