const data = [
  {
    id: 1,
    name: 'Obtainium',
    category: 'app',
    tags: ['CleanUI', 'Downloader'],
    url: 'https://github.com/ImranR98/Obtainium/releases/latest/',
  },
  {
    id: 2,
    name: 'v0',
    category: 'website',
    tags: ['AI', 'Code Generator'],
    url: 'https://v0.dev/',
  },
  {
    id: 3,
    name: 'HueTools',
    category: 'website',
    tags: ['Colors', 'ToolBox', 'Inspirable'],
    url: 'https://hue.tools/',
  },
  {
    id: 4,
    name: 'RenDroid',
    category: 'app',
    tags: ['CleanUI', 'Automation'],
    url: 'https://github.com/MFM-347/RenDroid/releases/latest/',
  },
  {
    id: 5,
    name: 'ChatGPT',
    category: 'website',
    tags: ['AI', 'ChatBot'],
    url: 'https://chatgpt.com/',
  },
  {
    id: 6,
    name: 'AI Pure',
    category: 'website',
    tags: ['AI', 'Awesome'],
    url: 'https://aipure.ai/',
  },
  {
    id: 7,
    name: '30 Seconds of Code',
    category: 'website',
    tags: ['Code', 'Snippets'],
    url: 'https://30secondsofcode.org/',
  },
  {
    id: 8,
    name: 'Build your own X',
    category: 'GitHub Repo',
    tags: ['Code', 'Tutorials'],
    url: 'https://github.com/codecrafters-io/build-your-own-x/',
  },
  {
    id: 9,
    name: 'Awesome Cheatsheets',
    category: 'GitHub Repo',
    tags: ['Code', 'Cheatsheets'],
    url: 'https://github.com/LeCoupa/awesome-cheatsheets/',
  },
  {
    id: 10,
    name: 'Project Based Learning',
    category: 'GitHub Repo',
    tags: ['Code', 'Awesome'],
    url: 'https://github.com/practical-tutorials/project-based-learning/',
  },
  {
    id: 11,
    name: 'FrontEnd Checklist',
    category: 'website',
    tags: ['Code', 'Checklist'],
    url: 'https://frontendchecklist.io/',
  },
  {
    id: 12,
    name: "Abdullah Al Rakib's Portfolio",
    category: 'website',
    tags: ['Portfolio', 'animated', 'Inspirable'],
    url: 'https://abdullah-al-rakib.surge.sh/',
  },
  {
    id: 13,
    name: 'Llama Coder',
    category: 'website',
    tags: ['AI', 'Code Generator'],
    url: 'https://llamacoder.together.ai/',
  },
  {
    id: 14,
    name: 'Toolbaz',
    category: 'website',
    tags: ['AI', 'Writer', 'ToolBox'],
    url: 'https://toolbaz.com/',
  },
  {
    id: 15,
    name: 'Tailwindcss Generator',
    category: 'website',
    tags: ['Tailwind', 'Generator', 'Inspirable'],
    url: 'https://tailwind-generator.com/',
  },
  {
    id: 16,
    name: 'Simple Gallery',
    category: 'app',
    tags: ['Gallery', 'Photo Viewer', 'Photo Editor'],
    url: 'https://github.com/SimpleMobileTools/Simple-Gallery/releases/latest/',
  },
  {
    id: 17,
    name: 'Dev Resources',
    category: 'website',
    tags: ['Awesome', 'Inspirable'],
    url: 'https://devresourc.es/',
  },
  {
    id: 18,
    name: 'Awesome Illustrations for Projects',
    category: 'GitHub Repo',
    tags: ['Illustrations', 'Awesome'],
    url: 'https://github.com/Anmol-Baranwal/Awesome-Illustrations-4Projects/',
  },
  {
    id: 19,
    name: 'Cool GIFs for GitHub',
    category: 'GitHub Repo',
    tags: ['README', 'Illustrations', 'Awesome', 'Markdown'],
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/',
  },
  {
    id: 20,
    name: 'Awesome',
    category: 'GitHub Repo',
    tags: ['Awesome'],
    url: 'https://github.com/sindresorhus/awesome/',
  },
  {
    id: 21,
    name: 'SVG Path Editor',
    category: 'website',
    tags: ['SVG', 'Vector', 'Graphics'],
    url: 'https://yqnn.github.io/SVG-path-editor/',
  },
  {
    id: 22,
    name: 'MarkDown Editor',
    category: 'website',
    tags: ['MarkDown', 'editor', 'texteditor'],
    url: 'https://jbt.github.io/markdown-editor/',
  },
  {
    id: 23,
    name: '50 Programming Languages',
    category: 'website',
    tags: ['Awesome', 'Programming'],
    url: 'https://github.com/Alexcj10/50-Programming-Languages/',
  },
  {
    id: 24,
    name: 'UI AnglePicker',
    category: 'GitHub Repo',
    tags: ['maths', 'javascript', 'jquery'],
    url: 'https://github.com/bgrins/ui.anglepicker/',
  },
  {
    id: 25,
    name: 'Awesome Automations',
    category: 'GitHub Repo',
    tags: ['Code', 'Automation', 'Awesome'],
    url: 'https://github.com/Arsenic-ATG/Awesome-Automations/',
  },
  {
    id: 26,
    name: 'PixelCraft',
    category: 'website',
    tags: ['pixel', 'art', 'pwa'],
    url: 'https://pixelcraft.web.app/',
  },
  {
    id: 27,
    name: 'Android FOSS',
    category: 'website',
    tags: ['Awesome', 'Android'],
    url: 'https://offa.github.io/android-foss/',
  },
  {
    id: 28,
    name: 'My Calendar App',
    category: 'website',
    tags: ['Calendar', 'Expense Tracker', 'TODO'],
    url: 'https://my-calendar-app-phi.vercel.app/',
  },
  {
    id: 29,
    name: 'DefProgramming',
    category: 'website',
    tags: ['Programming', 'Qoutes', 'Inspirable'],
    url: 'https://www.defprogramming.com/',
  },
  {
    id: 30,
    name: 'OpenSource Heroes',
    category: 'website',
    tags: ['Awesome'],
    url: 'https://opensource-heroes.com/',
  },
  {
    id: 31,
    name: 'EnjoyCSS',
    category: 'website',
    tags: ['CSS', 'Generator'],
    url: 'https://enjoycss.com/',
  },
  {
    id: 32,
    name: 'KeyFrames',
    category: 'website',
    tags: ['CSS', 'Generator'],
    url: 'https://keyframes.app/',
  },
  {
    id: 33,
    name: 'Vector Mixer',
    category: 'website',
    tags: ['SVG', 'Vector', 'Graphics'],
    url: 'https://vectormixer.com/',
  },
  {
    id: 34,
    name: 'SVG Repo',
    category: 'website',
    tags: ['SVG', 'Vector', 'Library', 'Icons'],
    url: 'https://svgrepo.com/',
  },
  {
    id: 35,
    name: 'FontGet',
    category: 'website',
    tags: ['Font', 'Library', 'Generator'],
    url: 'https://www.fontget.com/',
  },
  {
    id: 36,
    name: 'README SO',
    category: 'website',
    tags: ['README', 'MarkDown', 'editor'],
    url: 'https://readme.so/',
  },
  {
    id: 37,
    name: 'QuickRef ME',
    category: 'website',
    tags: ['Code', 'Cheatsheets'],
    url: 'https://quickref.me/',
  },
  {
    id: 38,
    name: '3D Icons',
    category: 'website',
    tags: ['3D', 'Icons', 'Library'],
    url: 'https://3dicons.co/',
  },
  {
    id: 39,
    name: 'BGJar',
    category: 'website',
    tags: ['SVG', 'BackGround', 'Generator'],
    url: 'https://bgjar.com/',
  },
  {
    id: 40,
    name: 'UI Colors',
    category: 'website',
    tags: ['Tailwind', 'Colors', 'Generator'],
    url: 'https://uicolors.app/create/',
  },
  {
    id: 41,
    name: 'Design Hacks',
    category: 'website',
    tags: ['Design', 'Resources', 'Awesome'],
    url: 'https://designhacks.online/',
  },
  {
    id: 42,
    name: 'UI Verse',
    category: 'website',
    tags: ['UI', 'Components', 'Library'],
    url: 'https://uiverse.io/',
  },
  {
    id: 43,
    name: 'Code IMG',
    category: 'website',
    tags: ['Code', 'Screenshot', 'Generator'],
    url: 'https://codeimg.io/',
  },
  {
    id: 44,
    name: 'Color Curves',
    category: 'website',
    tags: ['Colors', 'Scheme', 'Generator'],
    url: 'https://colorcurves.app/',
  },
  {
    id: 45,
    name: "Vijay Verma's Portfolio",
    category: 'website',
    tags: ['Portfolio', 'Modern', 'Inspirable'],
    url: 'https://vjy.me/',
  },
  {
    id: 46,
    name: 'StackSorted',
    category: 'website',
    tags: ['UI', 'Components', 'Library'],
    url: 'https://stacksorted.com/',
  },
  {
    id: 47,
    name: 'The Stocks v3',
    category: 'website',
    tags: ['Design', 'Awesome'],
    url: 'https://thestocks.im/',
  },
  {
    id: 48,
    name: 'LogoLab',
    category: 'website',
    tags: ['Logo', 'Improvements'],
    url: 'https://logolab.app/home/',
  },
  {
    id: 49,
    name: 'FreeFace Gallery',
    category: 'website',
    tags: ['Font', 'Typography', 'Generator'],
    url: 'https://www.freefaces.gallery/',
  },
  {
    id: 50,
    name: 'Method AC',
    category: 'website',
    tags: ['UI/UX', 'Tools', 'Games'],
    url: 'https://method.ac/',
  },
]

data.sort((a, b) => a.name.localeCompare(b.name))

export default data
