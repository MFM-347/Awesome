const data = [
  {
    name: '30 Seconds of Code',
    type: 'website',
    tags: ['Code', 'Snippets'],
    foss: true,
    osLink: 'https://github.com/Chalarangelo/30-seconds-of-code',
    icon: 'https://www.30secondsofcode.org//assets/icons/icon-192x192.png',
    description: 'Discover hundreds of coding articles to level up your skills.',
    url: 'https://30secondsofcode.org/',
    id: 1,
  },
  {
    name: '3D Icons',
    type: 'website',
    tags: ['3D', 'Icons', 'library'],
    foss: true,
    osLink: 'https://github.com/realvjy/3dicons',
    icon: 'https://3dicons.co/favicons/android-icon-192x192.png',
    description:
      'Beautifully crafted open-source 3d icons. 100+ unique icons in 4 styles and 3 camera angle.',
    url: 'https://3dicons.co/',
    id: 2,
  },
  {
    name: '50 Programming Languages',
    type: 'website',
    tags: ['Awesome', 'Programming'],
    foss: true,
    osLink: 'https://github.com/karasikmasa/50-Programming-Languages/',
    description:
      'Discover top 50 programming languages with curated learning resources & project ideas.',
    url: 'https://github.com/karasikmasa/50-Programming-Languages/',
    id: 3,
  },
  {
    name: "Abdullah Al Rakib's Portfolio",
    type: 'website',
    tags: ['Portfolio', 'animated', 'Inspirable'],
    foss: true,
    osLink: 'https://github.com/rakib8680/My-Portfolio',
    description: 'An Inspirable fun Portfolio for web developers',
    url: 'https://abdullah-al-rakib.surge.sh/',
    id: 4,
  },
  {
    name: 'AI Pure',
    type: 'website',
    tags: ['AI', 'Awesome'],
    foss: false,
    icon: 'https://aipure.ai/favicon.ico',
    description: 'The Best AI in One Place. AiPure helps you find the best AI tools easily!',
    url: 'https://aipure.ai/',
    id: 5,
  },
  {
    name: 'Android FOSS',
    type: 'website',
    tags: ['Awesome', 'Android'],
    foss: true,
    osLink: 'https://offa.github.io/android-foss/',
    icon: 'https://offa.github.io/android-foss/android.svg',
    description:
      'A list of Free and Open Source Software (FOSS) for Android – saving Freedom and Privacy.',
    url: 'https://offa.github.io/android-foss/',
    id: 6,
  },
  {
    name: 'Animista',
    type: 'website',
    tags: ['CSS', 'Animation'],
    foss: false,
    description:
      'Animista is a place where you can play with a collection of pre-made CSS animations, tweak them and get only those you will actually use.',
    url: 'https://animista.net/',
    id: 7,
  },
  {
    name: 'Awesome',
    type: 'GitHub Repo',
    tags: ['Awesome', 'of', 'Awesomes'],
    foss: true,
    osLink: 'https://github.com/sindresorhus/awesome/',
    description: '😎 Awesome lists about all kinds of interesting topics.',
    url: 'https://github.com/sindresorhus/awesome/',
    id: 8,
  },
  {
    name: 'Awesome Automations',
    type: 'GitHub Repo',
    tags: ['Code', 'Automation', 'Awesome'],
    foss: true,
    osLink: 'https://github.com/Arsenic-ATG/Awesome-Automations/',
    description: 'A repository Full of 😎interesting Automations.',
    url: 'https://github.com/Arsenic-ATG/Awesome-Automations/',
    id: 9,
  },
  {
    name: 'Awesome Cheatsheets',
    type: 'GitHub Repo',
    tags: ['Code', 'Cheatsheets'],
    foss: true,
    osLink: 'https://github.com/LeCoupa/awesome-cheatsheets/',
    description:
      'Awesome cheatsheets for popular programming languages, frameworks and development tools.',
    url: 'https://github.com/LeCoupa/awesome-cheatsheets/',
    id: 10,
  },
  {
    name: 'Awesome Illustrations for Projects',
    type: 'GitHub Repo',
    tags: ['Illustrations', 'Awesome'],
    foss: true,
    osLink: 'https://github.com/Awesome-Illustrations-4Projects/',
    description:
      '🔥 An awesome list of illustrations to improve your projects, posts & portfolios. Fork & add your own.',
    url: 'https://github.com/Anmol-Baranwal/Awesome-Illustrations-4Projects/',
    id: 11,
  },
  {
    name: 'BGJar',
    type: 'website',
    tags: ['SVG', 'BackGround', 'Generator'],
    foss: false,
    icon: 'https://bgjar.com/bgjar.svg',
    description: 'Free svg background generator for your websites, blogs and app.',
    url: 'https://bgjar.com/',
    id: 12,
  },
  {
    name: 'Build your own X',
    type: 'GitHub Repo',
    tags: ['Code', 'Tutorials'],
    foss: true,
    osLink: 'https://github.com/codecrafters-io/build-your-own-x/',
    description: 'Master programming by recreating your favorite technologies from scratch.',
    url: 'https://github.com/codecrafters-io/build-your-own-x/',
    id: 13,
  },
  {
    name: 'Chatbase',
    type: 'website',
    tags: ['AI', 'Chatbot', 'Builder'],
    foss: false,
    icon: 'https://www.chatbase.co/icon.ico',
    description:
      'Build a custom GPT, embed it on your website and let it handle customer support, lead generation, engage with your users, and more.',
    url: 'https://www.chatbase.co/',
    id: 14,
  },
  {
    name: 'ChatGPT',
    type: 'website',
    tags: ['AI', 'ChatBot'],
    foss: false,
    icon: 'https://www.svgrepo.com/show/306500/openai.svg',
    description: 'A conversational AI system that listens, learns, and challenges.',
    url: 'https://chatgpt.com/',
    id: 15,
  },
  {
    name: 'Code IMG',
    type: 'website',
    tags: ['Code', 'Screenshot', 'Generator'],
    foss: false,
    icon: 'https://codeimg.io/img/logo-black-white.3a439316.svg',
    description: 'Create and share beautiful images of your source code.',
    url: 'https://codeimg.io/',
    id: 16,
  },
  {
    name: 'Color Curves',
    type: 'website',
    tags: ['Colors', 'Scheme', 'Generator'],
    foss: true,
    osLink: 'https://github.com/mracette/color-curves-app',
    icon: 'https://colorcurves.app/favicon-32x32.png',
    description: 'Unique color palettes for data visualization and generative art.',
    url: 'https://colorcurves.app/',
    id: 17,
  },
  {
    name: 'Cool GIFs for GitHub',
    type: 'GitHub Repo',
    tags: ['README', 'Illustrations', 'Awesome', 'Markdown'],
    foss: true,
    osLink: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/',
    description: '🤝 Awesome List of GIFs & avatars to use in GitHub.',
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/',
    id: 18,
  },
  {
    name: 'Cool Shapes',
    type: 'website',
    tags: ['UI', 'Cool', 'Shapes'],
    foss: true,
    osLink: 'https://github.com/realvjy/uilogos.co',
    icon: 'https://coolshap.es/favicon.ico',
    description:
      '100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.',
    url: 'https://coolshap.es/',
    id: 19,
  },
  {
    name: 'CSS Bud',
    type: 'website',
    tags: ['CSS', 'Generators', 'GIF', 'library'],
    foss: false,
    description:
      'Free, high-quality CSS tools and code snippets for your design, technical and creative needs. Shadows, glows, text tools and more - come and enjoy.',
    url: 'https://cssbud.com/',
    id: 20,
  },
  {
    name: 'CSS Buttons',
    type: 'website',
    tags: ['UI', 'Button', 'library'],
    foss: true,
    osLink: 'https://github.com/guivr/cssbuttons',
    icon: 'https://cssbuttons.app/favicon.ico',
    description: 'Collection of over 60+ handpicked and custom made CSS buttons for your website.',
    url: 'https://cssbuttons.app/',
    id: 21,
  },
  {
    name: 'CSS Buttons',
    type: 'website',
    tags: ['UI', 'Button', 'library'],
    foss: false,
    icon: 'https://cssbuttons.io/favicon-96x96.png',
    description: 'Explore Cssbuttons.io for a diverse collection of over 100 unique button styles.',
    url: 'https://cssbuttons.io/',
    id: 22,
  },
  {
    name: 'CSS Grid Generator',
    type: 'website',
    tags: ['CSS', 'Grid', 'Generator'],
    foss: true,
    osLink: 'https://github.com/sdras/cssgridgenerator',
    icon: 'https://cssgrid-generator.netlify.app/favicon.ico',
    description: 'Generate basic CSS Grid code to make dynamic layouts!',
    url: 'https://cssgrid-generator.netlify.app/',
    id: 23,
  },
  {
    name: 'DefProgramming',
    type: 'website',
    tags: ['Programming', 'Qoutes', 'Inspirable'],
    foss: true,
    osLink: 'https://github.com/daviferreira/defprogramming.com',
    icon: 'https://www.defprogramming.com/icons/icon-192x192.png',
    description:
      'Quotes about programming, coding, computer science, debugging, software industry, startups and motivation. Programming wisdom.',
    url: 'https://www.defprogramming.com/',
    id: 24,
  },
  {
    name: 'Design Hacks',
    type: 'website',
    tags: ['Design', 'Resources', 'Awesome'],
    foss: false,
    icon: 'https://framerusercontent.com/images/AWOpQDTBXxhPFr5I0YLyQ2qz7I.png',
    description: 'The #1 website to find all the best and viral design tools and resources.',
    url: 'https://designhacks.online/',
    id: 25,
  },
  {
    name: 'Dev Docs',
    type: 'website',
    tags: ['Programming', 'API', 'Documentation'],
    foss: true,
    osLink: 'https://github.com/freeCodeCamp/devdocs',
    icon: 'https://devdocs.io/favicon.ico',
    description: 'Fast, offline, and free documentation browser for developers.',
    url: 'https://devdocs.io/',
    id: 26,
  },
  {
    name: 'Dev Resources',
    type: 'website',
    tags: ['Awesome', 'Inspirable'],
    foss: true,
    osLink: 'https://github.com/marcelscruz/dev-resources/',
    icon: 'https://devresourc.es/favicon-dr/favicon.ico',
    description: 'A collaborative list of resources for developers.',
    url: 'https://devresourc.es/',
    id: 27,
  },
  {
    name: 'EnjoyCSS',
    type: 'website',
    tags: ['CSS', 'Generator'],
    foss: false,
    osLink: 'https://github.com/marcelscruz/dev-resources/',
    icon: 'https://enjoycss.com/ico/enjoy_favicon.png',
    description: 'EnjoyCSS is an advanced CSS3 generator that saves your time.',
    url: 'https://enjoycss.com/',
    id: 28,
  },
  {
    name: 'Flow Rift',
    type: 'website',
    tags: ['Tailwindcss', 'Components'],
    foss: false,
    icon: 'https://flowrift.com/img/favicon.png',
    description: 'A library filled with Tailwind CSS UI blocks, components & templates.',
    url: 'https://flowrift.com/',
    id: 29,
  },
  {
    name: 'FontGet',
    type: 'website',
    tags: ['Font', 'library', 'Generator'],
    foss: false,
    icon: 'https://www.fontget.com/img/favicon-32x32.png',
    description: 'Download Free Fonts for your website, Mac, Windows, Linux, iOS and Android.',
    url: 'https://www.fontget.com/',
    id: 30,
  },
  {
    name: 'FreeFace Gallery',
    type: 'website',
    tags: ['Font', 'Typography', 'Generator'],
    foss: false,
    icon: 'https://cdn.prod.website-files.com/63ad770767a7fcd529308e52/63fa478e4e9a8cb9136c76cc_favicon.png',
    description:
      'This website is a curated collection of typefaces that are available under a variety of free licences somewhere on the interwebs.',
    url: 'https://www.freefaces.gallery/',
    id: 31,
  },
  {
    name: 'FrontEnd Checklist',
    type: 'website',
    tags: ['Code', 'Checklist'],
    foss: true,
    osLink: 'https://github.com/thedaviddias/Front-End-Checklist',
    icon: 'https://frontendchecklist.io/favicon-32x32.png',
    description:
      '🗂 The Front-End Checklist Application is perfect for modern websites and meticulous developers!',
    url: 'https://frontendchecklist.io/',
    id: 32,
  },
  {
    name: 'HTMLRev',
    type: 'website',
    tags: ['Website', 'Templates', 'boilerplates'],
    foss: false,
    icon: 'https://htmlrev.com/images/favicon.png',
    description:
      'Discover free HTML website templates built with vanilla CSS, Bootstrap, Tailwind, Angular, React, Vue, Nextjs, Nuxt, Svelte, Gatsby, Astro and Laravel.',
    url: 'https://htmlrev.com/',
    id: 33,
  },
  {
    name: 'HueTools',
    type: 'website',
    tags: ['Colors', 'ToolBox', 'Inspirable'],
    foss: true,
    osLink: 'https://github.com/pabueco/hue.tools',
    icon: 'https://hue.tools/favicon.svg',
    description:
      'A free color mixer, blender, info and modifier tool. Mix multiple colors, get links for design inspiration and stock images based on a color, view various color combinations and modify colors in an intuitive.',
    url: 'https://hue.tools/',
    id: 34,
  },
  {
    name: 'Image Extractor',
    type: 'website',
    tags: ['website', 'images', 'extractor'],
    foss: false,
    icon: 'https://extract.pics/img/favicon.ico',
    description:
      'extract.pics is a free tool to extract, view and download images from any public website by using a virtual browser.',
    url: 'https://extract.pics/',
    id: 35,
  },
  {
    name: 'ImageToolbox',
    type: 'App',
    tags: ['Image', 'Editor', 'ToolBox'],
    foss: true,
    osLink: 'https://github.com/T8RIN/ImageToolbox',
    icon: 'https://raw.githubusercontent.com/T8RIN/ImageToolbox/refs/heads/master/.idea/icon.png',
    description: 'Image Toolbox is a powerful app for advanced image manipulation.',
    url: 'https://github.com/T8RIN/ImageToolbox/releases/latest/',
    id: 36,
  },
  {
    name: 'IT Tools',
    type: 'website',
    tags: ['Tools', 'Collection'],
    foss: true,
    osLink: 'https://github.com/CorentinTh/it-tools',
    icon: 'https://it-tools.tech/favicon.ico',
    description: 'Collection of handy online tools for developers, with great UX.',
    url: 'https://it-tools.tech/',
    id: 37,
  },
  {
    name: 'KeyFrames',
    type: 'website',
    tags: ['CSS', 'Generator'],
    foss: false,
    icon: 'https://keyframes.app/img/icons/icon-192.png',
    description:
      'Browser-based, mobile-friendly, actually private tools that make CSS a little less bad.',
    url: 'https://keyframes.app/',
    id: 38,
  },
  {
    name: 'Laws of UX',
    type: 'website',
    tags: ['UI/UX', 'Laws'],
    foss: false,
    icon: 'https://lawsofux.com/icons/favicon.svg',
    description:
      'Laws of UX is a collection of best practices that designers can consider when building user interfaces.',
    url: 'https://lawsofux.com/',
    id: 39,
  },
  {
    name: 'Learn UI Design',
    type: 'website',
    tags: ['Design', 'Tutorials', 'Tools'],
    foss: false,
    icon: 'https://www.learnui.design/favicon.ico',
    description:
      'The full-length online course on UI design: color, typography, layout, design process, and more.',
    url: 'https://www.learnui.design/',
    id: 40,
  },
  {
    name: 'Learn UI/UX',
    type: 'website',
    tags: ['UI', 'UX', 'Course'],
    foss: false,
    icon: 'https://framerusercontent.com/images/Ov3NPIiB70TZa8r9dhrXapV0kxg.png',
    description:
      'Free 7 week syllabus for learning UX Design. No coding or fees needed. Curated by Ansh Mehra',
    url: 'https://learnuiux.in/',
    id: 41,
  },
  {
    name: 'Llama Coder',
    type: 'website',
    tags: ['AI', 'Code Generator'],
    foss: true,
    osLink: 'https://github.com/nutlope/llamacoder',
    icon: 'https://llamacoder.together.ai/favicon.ico',
    description: 'Turn your idea into an app with Llama 3.1 405B',
    url: 'https://llamacoder.together.ai/',
    id: 42,
  },
  {
    name: 'LogoLab',
    type: 'website',
    tags: ['Logo', 'Improvements'],
    foss: false,
    icon: 'https://logolab.app/favicon.ico',
    description:
      'Logo Lab puts logos to the test. Simply upload a logo, and you’ll be presented with visual experiments that test key factors like scalability, silhouette, and balance.',
    url: 'https://logolab.app/',
    id: 43,
  },
  {
    name: 'MarkDown Editor',
    type: 'website',
    tags: ['MarkDown', 'Text', 'Editor'],
    foss: true,
    osLink: 'https://github.com/jbt/markdown-editor/',
    icon: 'https://jbt.github.io/markdown-editor/favicon.png',
    description: 'The live markdown editor.',
    url: 'https://jbt.github.io/markdown-editor/',
    id: 44,
  },
  {
    name: 'Markor',
    type: 'App',
    tags: ['Markdown', 'Text', 'Editor'],
    foss: true,
    osLink: 'https://github.com/gsantner/markor',
    icon: 'https://raw.githubusercontent.com/gsantner/markor/master/app/src/main/ic_launcher-web.png',
    description:
      'Markor is a TextEditor for Android. This project aims to make an editor that is versatile, flexible, and lightweight.',
    url: 'https://github.com/gsantner/markor/releases/latest/',
    id: 45,
  },
  {
    name: 'Method AC',
    type: 'website',
    tags: ['UI/UX', 'Tools', 'Games'],
    foss: false,
    icon: 'https://method.ac/icon.png',
    description: 'Method of Action is education made fun.',
    url: 'https://method.ac/',
    id: 46,
  },
  {
    name: 'My Calendar App',
    type: 'website',
    tags: ['Calendar', 'Expense Tracker', 'TODO'],
    foss: true,
    osLink: 'https://github.com/divyansh-2005/my-calendar-app',
    description:
      'My Calendar App is a full-stack application designed to help users manage their schedules, expenses, todos, and notes all in one place.',
    url: 'https://my-calendar-app-phi.vercel.app/',
    id: 47,
  },
  {
    name: 'Neumorphism Generator',
    type: 'website',
    tags: ['CSS', 'Neumorphic', 'Generator'],
    foss: true,
    osLink: 'https://github.com/adamgiebl/neumorphism',
    icon: 'https://neumorphism.io/favicon.ico',
    description:
      'CSS code generator that will help with colors, gradients and shadows to adapt this new design trend or discover its posibilities.',
    url: 'https://neumorphism.io/',
    id: 48,
  },
  {
    name: 'Obtainium',
    type: 'app',
    tags: ['CleanUI', 'Downloader'],
    foss: true,
    osLink: 'https://github.com/ImranR98/Obtainium',
    icon: 'https://raw.githubusercontent.com/ImranR98/Obtainium/refs/heads/main/assets/graphics/icon_small.png',
    description: 'Get Android app updates straight from the source.',
    url: 'https://github.com/ImranR98/Obtainium/releases/latest/',
    id: 49,
  },
  {
    name: 'Omatsuri',
    type: 'website',
    tags: ['Tools', 'Collection'],
    foss: true,
    osLink: 'https://github.com/rtivital/omatsuri',
    icon: 'https://omatsuri.app/assets/favicon-48x48.png',
    description: 'Progressive Web Application with 12 open source frontend focused tools.',
    url: 'https://omatsuri.app/',
    id: 50,
  },
  {
    name: 'Pattern Pad',
    type: 'website',
    tags: ['Pattern', 'Generator'],
    foss: false,
    icon: 'https://patternpad.com/images/patternpad-icon.png',
    description: 'PatternPad offers unlimited unique pattern designs that fit your style.',
    url: 'https://patternpad.com/',
    id: 51,
  },
  {
    name: 'PDF Pie',
    type: 'website',
    tags: ['PDF', 'Editor', 'Exportor'],
    foss: true,
    osLink: 'https://github.com/realvjy/uilogos.co',
    icon: 'https://pdfpie.com/img/icons/favicon.svg',
    description:
      'PDFPie online PDF editor lets you edit or add text and add images to your PDFs. Edit your PDFs in your browser for free!',
    url: 'https://pdfpie.com/',
    id: 52,
  },
  {
    name: 'PDF Pie',
    type: 'website',
    tags: ['PDF', 'Editor', 'Exportor'],
    foss: true,
    osLink: 'https://github.com/markodenic/web-development-resources',
    description: 'This is a list of awesome web development resources. Add more!',
    url: 'https://web-dev-resources.com/list/',
    id: 53,
  },
  {
    name: 'PixCell',
    type: 'website',
    tags: ['pixel', 'art', 'editor'],
    foss: true,
    osLink: 'https://github.com/codse/pixcell',
    description: 'A pixel art creator made for fun.',
    url: 'https://pixcell.vercel.app/',
    id: 54,
  },
  {
    name: 'PixelCraft',
    type: 'website',
    tags: ['pixel', 'art', 'pwa'],
    foss: true,
    osLink: 'https://github.com/rgab1508/PixelCraft',
    icon: 'https://pixelcraft.web.app/icons/logo.png',
    description: 'A pixel Art & Animation Creation Tool Built using HTML5 Canvas.',
    url: 'https://pixelcraft.web.app/',
    id: 55,
  },
  {
    name: 'Project Based Learning',
    type: 'GitHub Repo',
    tags: ['Code', 'Awesome'],
    foss: true,
    osLink: 'https://github.com/practical-tutorials/project-based-learning/',
    description:
      'A list of programming tutorials in which aspiring software developers learn how to build an application from scratch.',
    url: 'https://github.com/practical-tutorials/project-based-learning/',
    id: 56,
  },
  {
    name: 'Prompts',
    type: 'website',
    tags: ['Awesome', 'AI', 'Prompts'],
    foss: true,
    osLink: 'https://github.com/f/awesome-chatgpt-prompts/',
    description:
      'This repo includes ChatGPT prompt curation to use ChatGPT and other LLM tools better.',
    url: 'https://prompts.chat/',
    id: 57,
  },
  {
    name: 'QuickRef ME',
    type: 'website',
    tags: ['Code', 'Cheatsheets'],
    foss: true,
    osLink: 'https://github.com/Fechin/reference',
    icon: 'https://quickref.me/images/favicon.png',
    description: 'Share quick reference and cheat sheet for developers',
    url: 'https://quickref.me/',
    id: 58,
  },
  {
    name: 'README SO',
    type: 'website',
    tags: ['README', 'MarkDown', 'Editor'],
    foss: true,
    osLink: 'https://github.com/octokatherine/readme.so',
    icon: 'https://readme.so/icons/icon-96x96.png',
    description:
      "Use readme.so's markdown editor and templates to easily create a ReadMe for your projects",
    url: 'https://readme.so/',
    id: 59,
  },
  {
    name: 'RenDroid',
    type: 'app',
    tags: ['CleanUI', 'Automation'],
    foss: true,
    osLink: 'https://github.com/MFM-347/RenDroid',
    icon: 'https://raw.githubusercontent.com/MFM-347/RenDroid/refs/heads/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher_rounded.png',
    description:
      'A fast, customizable file renaming app for Android. It offers a fast, customizable renaming experience, ideal for organizing files quickly on your Android device.',
    url: 'https://github.com/MFM-347/RenDroid/releases/latest/',
    id: 60,
  },
  {
    name: 'SEO Roast',
    type: 'website',
    tags: ['AI', 'SEO', 'Optimization'],
    foss: false,
    icon: 'https://seoroast.co/_static/favicons/favicon-32x32.png',
    description: 'See where your SEO stands in 15 minutes.',
    url: 'https://seoroast.co/',
    id: 61,
  },
  {
    name: 'Simple Gallery',
    type: 'app',
    tags: ['Gallery', 'Photo Viewer', 'Photo Editor'],
    foss: true,
    osLink: 'https://github.com/SimpleMobileTools/Simple-Gallery',
    icon: 'https://raw.githubusercontent.com/SimpleMobileTools/Simple-Gallery/master/graphics/icon.png',
    description: 'A premium ad-free app for managing and editing your photos, videos, GIFs.',
    url: 'https://github.com/SimpleMobileTools/Simple-Gallery/releases/latest/',
    id: 62,
  },
  {
    name: 'StackSorted',
    type: 'website',
    tags: ['UI', 'Components', 'library'],
    foss: true,
    osLink: 'https://github.com/juxtopposed/stacksorted',
    icon: 'https://stacksorted.com/favicon.png',
    description:
      "Find Inspiration in Design Elements. Collection of the web's best designs sorted by elements. Choose an element and view projects/websites with creative designs for it.",
    url: 'https://stacksorted.com/',
    id: 63,
  },
  {
    name: 'SVG Path Editor',
    type: 'website',
    tags: ['SVG', 'Vector', 'Graphics'],
    foss: true,
    osLink: 'https://yqnn.github.io/svg-path-editor',
    icon: 'https://yqnn.github.io/svg-path-editor/favicon.ico',
    description: 'Online editor to create and manipulate SVG paths',
    url: 'https://yqnn.github.io/svg-path-editor/',
    id: 64,
  },
  {
    name: 'SVG Repo',
    type: 'website',
    tags: ['SVG', 'Vector', 'library', 'Icons'],
    foss: false,
    description:
      'Free Vectors and Icons in SVG format. ✅ Download free mono or multi color vectors for commercial use. Search in 500.000+ Free SVG Vectors and Icons.',
    url: 'https://svgrepo.com/',
    id: 65,
  },
  {
    name: 'Tail Animista',
    type: 'website',
    tags: ['Tailwindcss', 'Animation', 'Generator'],
    foss: false,
    description: 'Configurable custom animation utilities generator for Tailwind CSS.',
    url: 'https://tail-animista.vercel.app/',
    id: 66,
  },
  {
    name: 'Tailwindcss Generator',
    type: 'website',
    tags: ['Tailwind', 'Generator', 'Inspirable'],
    foss: false,
    icon: 'https://tailwind-generator.com/favicon.svg',
    description:
      'Collection of useful tools and generators for Tailwind to create, design and customize all kind of web components using a graphical editor.',
    url: 'https://tailwind-generator.com/',
    id: 67,
  },
  {
    name: 'The Stocks v3',
    type: 'website',
    tags: ['Design', 'Awesome'],
    foss: false,
    icon: 'https://thestocks.im/favicon.png',
    description:
      '2100+ tools for Designers 🎉 Discover the best royalty-free stock photos, icons, videos, mockups, and tools! Updates daily.',
    url: 'https://thestocks.im/',
    id: 68,
  },
  {
    name: 'TLDraw',
    type: 'website',
    tags: ['Collaborative', 'Whiteboard'],
    foss: false,
    icon: 'https://www.tldraw.com/favicon.svg',
    description:
      'whiteboard, canvas, collaborative whiteboard, online drawing, team collaboration tool, free whiteboard app.',
    url: 'https://www.tldraw.com/',
    id: 69,
  },
  {
    name: 'Toolbaz',
    type: 'website',
    tags: ['AI', 'Writer', 'ToolBox'],
    foss: false,
    icon: 'https://toolbaz.com/assets/img/favicon/favicon-32x32.png',
    description:
      "Explore ToolBaz's free AI writing tools powered by GPT-4, Gemini, Meta-AI, and more.",
    url: 'https://toolbaz.com/',
    id: 70,
  },
  {
    name: 'Toools Design',
    type: 'website',
    tags: ['Design', 'Tools', 'Awesome'],
    foss: false,
    icon: 'https://cdn.prod.website-files.com/5ce10a4c0b5f0b05f522e746/627a23b7ee96702839153720_toools-design-favicon.png',
    description:
      'A growing archive of over 1,500 design resources. Discover highly useful design tools you never thought existed.',
    url: 'https://www.toools.design/',
    id: 71,
  },
  {
    name: 'UI Colors',
    type: 'website',
    tags: ['Tailwind', 'Colors', 'Generator'],
    foss: false,
    description:
      'Generate, edit, save and share Tailwind CSS color shades based on a given hexcode or HSL color.',
    url: 'https://uicolors.app/create/',
    id: 72,
  },
  {
    name: 'UI Logos',
    type: 'website',
    tags: ['UI', 'Logo', 'Placeholders'],
    foss: true,
    osLink: 'https://github.com/realvjy/uilogos.co',
    icon: 'https://uilogos.co/favicon.ico',
    description: 'Generate basic CSS Grid code to make dynamic layouts!',
    url: 'https://uilogos.co/',
    id: 73,
  },
  {
    name: 'UI Verse',
    type: 'website',
    tags: ['UI', 'Components', 'library'],
    foss: false,
    icon: 'https://uiverse.io/favicon-32x32.png',
    description:
      'Community-made library of free and customizable UI elements made with CSS or Tailwind.',
    url: 'https://uiverse.io/',
    id: 74,
  },
  {
    name: 'UnDraw',
    type: 'website',
    tags: ['illustrations', 'library'],
    foss: false,
    icon: 'https://undraw.co/apple-touch-icon.png',
    description:
      'Open-source illustrations for any idea you can imagine and create. Build beautiful websites, products and applications with your color, for free.',
    url: 'https://undraw.co/',
    id: 75,
  },
  {
    name: 'v0',
    type: 'website',
    tags: ['AI', 'Code Generator'],
    foss: false,
    icon: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/v0.png',
    description: 'Chat with v0. Generate UI with simple text prompts. Copy, paste, ship.',
    url: 'https://v0.dev/',
    id: 76,
  },
  {
    name: 'Vector Mixer',
    type: 'website',
    tags: ['SVG', 'Vector', 'Graphics'],
    foss: false,
    icon: 'https://vectormixer.com/favicon.ico',
    description:
      'Vectormixer is a powerful online vector editor that allows users to quickly and easily create stunning vector graphics.',
    url: 'https://vectormixer.com/',
    id: 77,
  },
  {
    name: 'VectorMotion',
    type: 'App',
    tags: ['Graphics', 'SVG', 'Editor'],
    foss: false,
    icon: 'https://play-lh.googleusercontent.com/XoOpeKUbe26a3x8Z8w1MlYYtaLKEKivtwk0iK-kEKLD18LLonP7NuuQBj9-WHFMVXA',
    description: 'The one tool for all your design and animation needs.',
    url: 'https://get.vectormotion.app/',
    id: 78,
  },
  {
    name: "Vijay Verma's Portfolio",
    type: 'website',
    tags: ['Portfolio', 'Modern', 'Inspirable'],
    foss: false,
    icon: 'https://vjy.me/favicon.ico',
    description: 'An Inspirable fun Portfolio for web developers.',
    url: 'https://vjy.me/',
    id: 79,
  },
  {
    name: 'Trigonometry Simulator',
    type: 'website',
    tags: ['Maths', 'Trigonometry', 'Simulator', 'Inspirable'],
    foss: true,
    osLink: 'https://github.com/KyleSmith0905/trigonometry',
    icon: 'https://www.trigsim.com/apple-touch-icon.png',
    description:
      'Explore trigonometric functions and their link between Cartesian and polar coordinates with this easy-to-use interface.',
    url: 'https://www.trigsim.com/',
    id: 80,
  },
  {
    name: 'SimpleNote',
    type: 'website',
    tags: ['Notes', 'keeper', 'inspirable'],
    foss: true,
    osLink: 'https://simplenote.com/developers/',
    icon: 'https://simplenote.com/wp-content/uploads/2020/07/cropped-icon_512x512.png',
    description: 'A Light, simple, clean, opensource and cross-plateform notes taking application.',
    url: 'https://simplenote.com/',
    id: 81,
  },
  {
    name: 'Spoo.ME',
    type: 'website',
    tags: ['URL', 'Shortener'],
    foss: true,
    osLink: 'https://github.com/spoo-me/url-shortener',
    icon: 'https://spoo.me/static/images/favicon.png',
    description:
      'spoo.me is a free and easy-to-use URL shortener that lets you create short links for any website.',
    url: 'https://spoo.me/',
    id: 82,
  },
  {
    name: 'ToolFolio',
    type: 'website',
    tags: ['Awesome', 'of', 'Best', 'Tools'],
    foss: false,
    icon: 'https://framerusercontent.com/images/9ByHhUNaWqyS1a9DYzxwg89yFG4.jpg',
    description:
      'A platform that helps you find the best tools for productivity, creativity, and design.',
    url: 'https://toolfolio.io/',
    id: 83,
  },
  {
    name: 'ToolFolio',
    type: 'website',
    tags: ['Awesome', 'of', 'Best', 'Tools'],
    foss: false,
    description:
      'Beautiful AI generated stock photos for free and commercial use, made using Flux 1.1 Pro Ultra.',
    url: 'https://www.stockphotoai.com/',
    id: 84,
  },
  {
    name: 'Rollout AI',
    type: 'website',
    tags: ['AI', 'Website', 'App', 'Generator'],
    foss: false,
    description:
      'Rollout is the ultimate AI landing page generator, and website builder for building high-performance websites.',
    url: 'https://rollout.site/',
    id: 85,
  },
  {
    name: 'Real Favicon Generator',
    type: 'website',
    tags: ['Favicon', 'Generator'],
    foss: false,
    icon: 'https://realfavicongenerator.net/favicon.svg',
    description:
      'A favicon generator to design your icons for each platform and make them look great everywhere.',
    url: 'https://realfavicongenerator.net/',
    id: 86,
  },
  {
    name: 'SVG Viewer',
    type: 'website',
    tags: ['SVG', 'Editor', 'Viewer'],
    foss: false,
    icon: 'https://www.svgviewer.dev/images/logo.svg',
    description: 'SVG Viewer is an online tool to view, edit and optimize SVG graphics.',
    url: 'https://www.svgviewer.dev/',
    id: 87,
  },
  {
    name: 'Shots',
    type: 'website',
    tags: ['Mockups', 'Generator'],
    foss: false,
    icon: 'https://shots.so/image/favicon.png',
    description:
      'The ultimate screenshot and mockup tool for instantly creating stunning previews of your apps, websites, or products.',
    url: 'https://shots.so/',
    id: 88,
  },
  {
    name: 'CSS HD Gradients',
    type: 'website',
    tags: ['CSS', 'HD', 'Gradients', 'Generator'],
    foss: false,
    icon: 'https://gradient.style/favicon.ico',
    description:
      'It is a gradient generator that supports wide-gamut, Color 4-compliant gradients using color spaces like Oklab, Oklch, etc',
    url: 'https://gradient.style/',
    id: 89,
  },
  {
    name: 'OpenNote Compose',
    type: 'app',
    tags: ['MarkDown', 'Editor', 'Notes', 'App'],
    foss: true,
    osLink: 'https://github.com/YangDai2003/OpenNote-Compose/',
    icon: 'https://raw.githubusercontent.com/YangDai2003/OpenNote-Compose/refs/heads/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
    description:
      'It is a modern Android markdown editor and note-taking application entirely built with Jetpack Compose.',
    url: 'https://github.com/YangDai2003/OpenNote-Compose/releases/latest/',
    id: 90,
  },
  {
    name: 'EasyNotes',
    type: 'app',
    tags: ['MarkDown', 'Notes', 'Taking'],
    foss: true,
    osLink: 'https://github.com/Kin69/EasyNotes/',
    icon: 'https://raw.githubusercontent.com/Kin69/EasyNotes/refs/heads/master/metadata/en-US/images/icon.png',
    description:
      'Jetpack Compose MVVM App for seamless note-taking. Effortless creation, editing, and organization of Notes.',
    url: 'https://github.com/Kin69/EasyNotes/releases/latest/',
    id: 91,
  },
  {
    name: 'Gallery',
    type: 'app',
    tags: ['Gallery', 'Images'],
    foss: true,
    osLink: 'https://github.com/IacobIonut01/Gallery/',
    icon: 'https://raw.githubusercontent.com/IacobIonut01/Gallery/refs/heads/main/fastlane/metadata/android/en-US/images/icon.png',
    description: 'Media Gallery for managing your photos, videos, GIFs built with Jetpack Compose.',
    url: 'https://github.com/IacobIonut01/Gallery/releases/latest/',
    id: 92,
  },
  {
    name: 'EasyDiary',
    type: 'app',
    tags: ['Powerful', 'Diary', 'App'],
    foss: true,
    osLink: 'https://github.com/hanjoongcho/aaf-easydiary/',
    icon: 'https://raw.githubusercontent.com/hanjoongcho/aaf-easydiary/master/screenshots/ic_launcher.png',
    description: 'A powerful diary application optimized for user experience.',
    url: 'https://github.com/hanjoongcho/aaf-easydiary/releases/latest/',
    id: 93,
  },
  {
    name: 'Namify',
    type: 'website',
    tags: ['Brand', 'Name', 'Generator'],
    foss: false,
    icon: 'https://namify.b-cdn.net/img/favicons/apple-icon-180x180.png',
    description:
      'A brand name generator that lets you build a memorable brand name with their AI-powered generator.',
    url: 'https://namify.tech/',
    id: 94,
  },
  {
    name: 'ExcaliDraw',
    type: 'website',
    tags: ['Collaborative', 'Whiteboard', 'Tool'],
    foss: false,
    icon: 'https://excalidraw.com/apple-touch-icon.png',
    description:
      "It's a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
    url: 'https://excalidraw.com/',
    id: 95,
  },
  {
    name: 'Algo',
    type: 'website',
    tags: ['Learn', 'Algorithms', 'Data-Structures'],
    foss: true,
    osLink: 'https://github.com/ajay-dhangar/algo/',
    icon: 'https://ajay-dhangar.github.io/algo/logo/logo.png',
    description:
      'Learn, Implement, and Contribute to Open Source Algorithms to build your understanding from the basics to advanced topics.',
    url: 'https://ajay-dhangar.github.io/algo/',
    id: 96,
  },
  {
    name: 'Free for Dev',
    type: 'website',
    tags: ['Free', 'Developers', 'Resources'],
    foss: true,
    osLink: 'https://github.com/ripienaar/free-for-dev/',
    icon: 'https://free-for.dev/logo.webp',
    description:
      'Devs and OpenSource authors now have massive amount of services offering free tiers, but it can be hard to find them all.',
    url: 'https://github.com/ripienaar/free-for-dev/',
    id: 97,
  },
]
function ops() {
  // console.log(JSON.stringify(data))
  // console.log(data.length);
  data.at(-1)
  if (data.length !== data.at(-1).id) {
    console.error('Error: Mistake in item IDs')
  }
  let x
  for (x in data) {
    if (x.foss && !x.osLink) {
      console.error('Error: no opensource link for opensource item with id:' + x.id)
    }
  }
}
ops()
export const meta = {
  title: 'Awesome347 - Best Tools & Resources',
  description:
    'Explore cutting-edge tools, apps, tutorials and resources to help you improve your productivity and solve problems.',
  url: 'https://a347.vercel.app',
  logo: '/logo-light.svg',
  image: '/og-image.webp',
  alt: 'Awesome347 Logo',
  date: '3/9/25',
  techs: [
    {
      id: 1,
      name: 'Nuxt',
      url: 'https://nuxt.com',
      description: 'An intuitive and powerful Framework.',
    },
    {
      id: 2,
      name: 'VueJS',
      url: 'https://vuejs.org',
      description: 'A Progressive web framework.',
    },
    {
      id: 3,
      name: 'TailwindCSS',
      url: 'https://tailwindcss.com',
      description: 'An utility-first CSS framework.',
    },
    {
      id: 4,
      name: 'HeroIcons',
      url: 'https://heroicons.com/',
      description: 'Beautiful hand-crafted SVG icons.',
    },
    {
      id: 5,
      name: 'Fuse.JS',
      url: 'https://www.fusejs.io/',
      description: 'Lightweight Searching library.',
    },
    {
      id: 5,
      name: 'Pinia',
      url: 'https://pinia.vuejs.org/',
      description: 'State Management for Vue.js.',
    },
  ],
}

export default data
