const raw = [
  {
    name: "Obtainium",
    category: "app",
    tags: ["CleanUI", "Downloader"],
    url: "https://github.com/ImranR98/Obtainium/releases/latest/",
  },
  {
    name: "v0",
    category: "website",
    tags: ["AI", "Code Generator"],
    url: "https://v0.dev/",
  },
  {
    name: "HueTools",
    category: "website",
    tags: ["Colors", "ToolBox", "Inspirable"],
    url: "https://hue.tools/",
  },
  {
    name: "RenDroid",
    category: "app",
    tags: ["CleanUI", "Automation"],
    url: "https://github.com/MFM-347/RenDroid/releases/latest/",
  },
  {
    name: "ChatGPT",
    category: "website",
    tags: ["AI", "ChatBot"],
    url: "https://chatgpt.com/",
  },
  {
    name: "AI Pure",
    category: "website",
    tags: ["AI", "Awesome"],
    url: "https://aipure.ai/",
  },
  {
    name: "30 Seconds of Code",
    category: "website",
    tags: ["Code", "Snippets"],
    url: "https://30secondsofcode.org/",
  },
  {
    name: "Build your own X",
    category: "GitHub Repo",
    tags: ["Code", "Tutorials"],
    url: "https://github.com/codecrafters-io/build-your-own-x/",
  },
  {
    name: "Awesome Cheatsheets",
    category: "GitHub Repo",
    tags: ["Code", "Cheatsheets"],
    url: "https://github.com/LeCoupa/awesome-cheatsheets/",
  },
  {
    name: "Project Based Learning",
    category: "GitHub Repo",
    tags: ["Code", "Awesome"],
    url: "https://github.com/practical-tutorials/project-based-learning/",
  },
  {
    name: "FrontEnd Checklist",
    category: "website",
    tags: ["Code", "Checklist"],
    url: "https://frontendchecklist.io/",
  },
  {
    name: "Abdullah Al Rakib's Portfolio",
    category: "website",
    tags: ["Portfolio", "animated", "Inspirable"],
    url: "https://abdullah-al-rakib.surge.sh/",
  },
  {
    name: "Llama Coder",
    category: "website",
    tags: ["AI", "Code Generator"],
    url: "https://llamacoder.together.ai/",
  },
  {
    name: "Toolbaz",
    category: "website",
    tags: ["AI", "Writer", "ToolBox"],
    url: "https://toolbaz.com/",
  },
  {
    name: "Tailwindcss Generator",
    category: "website",
    tags: ["Tailwind", "Generator", "Inspirable"],
    url: "https://tailwind-generator.com/",
  },
  {
    name: "Simple Gallery",
    category: "app",
    tags: ["Gallery", "Photo Viewer", "Photo Editor"],
    url: "https://github.com/SimpleMobileTools/Simple-Gallery/releases/latest/",
  },
  {
    name: "Dev Resources",
    category: "website",
    tags: ["Awesome", "Inspirable"],
    url: "https://devresourc.es/",
  },
  {
    name: "Awesome Illustrations for Projects",
    category: "GitHub Repo",
    tags: ["Illustrations", "Awesome"],
    url: "https://github.com/Anmol-Baranwal/Awesome-Illustrations-4Projects/",
  },
  {
    name: "Cool GIFs for GitHub",
    category: "GitHub Repo",
    tags: ["README", "Illustrations", "Awesome", "Markdown"],
    url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/",
  },
  {
    name: "Awesome",
    category: "GitHub Repo",
    tags: ["Awesome"],
    url: "https://github.com/sindresorhus/awesome/",
  },
  {
    name: "SVG Path Editor",
    category: "website",
    tags: ["SVG", "Vector", "Graphics"],
    url: "https://yqnn.github.io/SVG-path-editor/",
  },
  {
    name: "MarkDown Editor",
    category: "website",
    tags: ["MarkDown", "Text", "Editor"],
    url: "https://jbt.github.io/markdown-editor/",
  },
  {
    name: "50 Programming Languages",
    category: "website",
    tags: ["Awesome", "Programming"],
    url: "https://github.com/Alexcj10/50-Programming-Languages/",
  },
  {
    name: "UI AnglePicker",
    category: "GitHub Repo",
    tags: ["maths", "javascript", "jquery"],
    url: "https://github.com/bgrins/ui.anglepicker/",
  },
  {
    name: "Awesome Automations",
    category: "GitHub Repo",
    tags: ["Code", "Automation", "Awesome"],
    url: "https://github.com/Arsenic-ATG/Awesome-Automations/",
  },
  {
    name: "PixelCraft",
    category: "website",
    tags: ["pixel", "art", "pwa"],
    url: "https://pixelcraft.web.app/",
  },
  {
    name: "Android FOSS",
    category: "website",
    tags: ["Awesome", "Android"],
    url: "https://offa.github.io/android-foss/",
  },
  {
    name: "My Calendar App",
    category: "website",
    tags: ["Calendar", "Expense Tracker", "TODO"],
    url: "https://my-calendar-app-phi.vercel.app/",
  },
  {
    name: "DefProgramming",
    category: "website",
    tags: ["Programming", "Qoutes", "Inspirable"],
    url: "https://www.defprogramming.com/",
  },
  {
    name: "OpenSource Heroes",
    category: "website",
    tags: ["Awesome"],
    url: "https://opensource-heroes.com/",
  },
  {
    name: "EnjoyCSS",
    category: "website",
    tags: ["CSS", "Generator"],
    url: "https://enjoycss.com/",
  },
  {
    name: "KeyFrames",
    category: "website",
    tags: ["CSS", "Generator"],
    url: "https://keyframes.app/",
  },
  {
    name: "Vector Mixer",
    category: "website",
    tags: ["SVG", "Vector", "Graphics"],
    url: "https://vectormixer.com/",
  },
  {
    name: "SVG Repo",
    category: "website",
    tags: ["SVG", "Vector", "library", "Icons"],
    url: "https://svgrepo.com/",
  },
  {
    name: "FontGet",
    category: "website",
    tags: ["Font", "library", "Generator"],
    url: "https://www.fontget.com/",
  },
  {
    name: "README SO",
    category: "website",
    tags: ["README", "MarkDown", "Editor"],
    url: "https://readme.so/",
  },
  {
    name: "QuickRef ME",
    category: "website",
    tags: ["Code", "Cheatsheets"],
    url: "https://quickref.me/",
  },
  {
    name: "3D Icons",
    category: "website",
    tags: ["3D", "Icons", "library"],
    url: "https://3dicons.co/",
  },
  {
    name: "BGJar",
    category: "website",
    tags: ["SVG", "BackGround", "Generator"],
    url: "https://bgjar.com/",
  },
  {
    name: "UI Colors",
    category: "website",
    tags: ["Tailwind", "Colors", "Generator"],
    url: "https://uicolors.app/create/",
  },
  {
    name: "Design Hacks",
    category: "website",
    tags: ["Design", "Resources", "Awesome"],
    url: "https://designhacks.online/",
  },
  {
    name: "UI Verse",
    category: "website",
    tags: ["UI", "Components", "library"],
    url: "https://uiverse.io/",
  },
  {
    name: "Code IMG",
    category: "website",
    tags: ["Code", "Screenshot", "Generator"],
    url: "https://codeimg.io/",
  },
  {
    name: "Color Curves",
    category: "website",
    tags: ["Colors", "Scheme", "Generator"],
    url: "https://colorcurves.app/",
  },
  {
    name: "Vijay Verma's Portfolio",
    category: "website",
    tags: ["Portfolio", "Modern", "Inspirable"],
    url: "https://vjy.me/",
  },
  {
    name: "StackSorted",
    category: "website",
    tags: ["UI", "Components", "library"],
    url: "https://stacksorted.com/",
  },
  {
    name: "The Stocks v3",
    category: "website",
    tags: ["Design", "Awesome"],
    url: "https://thestocks.im/",
  },
  {
    name: "LogoLab",
    category: "website",
    tags: ["Logo", "Improvements"],
    url: "https://logolab.app/home/",
  },
  {
    name: "FreeFace Gallery",
    category: "website",
    tags: ["Font", "Typography", "Generator"],
    url: "https://www.freefaces.gallery/",
  },
  {
    name: "IT Tools",
    category: "website",
    tags: ["Tools", "Collection"],
    url: "https://it-tools.tech/",
  },
  {
    name: "Method AC",
    category: "website",
    tags: ["UI/UX", "Tools", "Games"],
    url: "https://method.ac/",
  },
  {
    name: "SEO Roast",
    category: "website",
    tags: ["AI", "SEO", "Optimization"],
    url: "https://seoroast.co/",
  },
  {
    name: "PixCell",
    category: "website",
    tags: ["pixel", "art", "editor"],
    url: "https://pixcell.vercel.app/",
  },
  {
    name: "TLDraw",
    category: "website",
    tags: ["Collaborative", "Whiteboard"],
    url: "https://www.tldraw.com/",
  },
  {
    name: "Toools Design",
    category: "website",
    tags: ["Design", "Tools", "Awesome"],
    url: "https://www.toools.design/",
  },
  {
    name: "Learn UI Design",
    category: "website",
    tags: ["Design", "Tutorials", "Tools"],
    url: "https://www.learnui.design/",
  },
  {
    name: "Laws of UX",
    category: "website",
    tags: ["UI/UX", "Laws"],
    url: "https://lawsofux.com/",
  },
  {
    name: "VectorMotion",
    category: "App",
    tags: ["Graphics", "SVG", "Editor"],
    url: "https://get.vectormotion.app/",
  },
  {
    name: "ImageToolbox",
    category: "App",
    tags: ["Image", "Editor", "ToolBox"],
    url: "https://github.com/T8RIN/ImageToolbox/releases/latest/",
  },
  {
    name: "UnDraw",
    category: "website",
    tags: ["illustrations", "library"],
    url: "https://undraw.co/",
  },
  {
    name: "Chatbase",
    category: "website",
    tags: ["AI", "Chatbot", "Builder"],
    url: "https://www.chatbase.co/",
  },
  {
    name: "Markor",
    category: "App",
    tags: ["Markdown", "Text", "Editor"],
    url: "https://github.com/gsantner/markor/releases/latest/",
  },
  {
    name: "Omatsuri",
    category: "website",
    tags: ["Tools", "Collection"],
    url: "https://omatsuri.app/",
  },
  {
    name: "HTMLRev",
    category: "website",
    tags: ["Website", "Templates", "boilerplates"],
    url: "https://htmlrev.com/",
  },
  {
    name: "Pattern Pad",
    category: "website",
    tags: ["Pattern", "Generator"],
    url: "https://patternpad.com/",
  },
  {
    name: "Dev Docs",
    category: "website",
    tags: ["Programming", "API", "Documentation"],
    url: "https://devdocs.io/",
  },
  {
    name: "Learn UI/UX",
    category: "website",
    tags: ["UI", "UX", "Course"],
    url: "https://learnuiux.in/",
  },
  {
    name: "Prompts",
    category: "website",
    tags: ["Awesome", "AI", "Prompts"],
    url: "https://prompts.chat/",
  },
  {
    name: "Tail Animista",
    category: "website",
    tags: ["Tailwindcss", "Animation", "Generator"],
    url: "https://tail-animista.vercel.app/",
  },
  {
    name: "Flow Rift",
    category: "website",
    tags: ["Tailwindcss", "Components"],
    url: "https://flowrift.com/",
  },
  {
    name: "Animista",
    category: "website",
    tags: ["CSS", "Animation"],
    url: "https://animista.net/",
  },
];

raw.sort((a, b) => a.name.localeCompare(b.name));
const data = raw.map((item, index) => ({
  ...item,
  id: index + 1,
}));

export default data;
