import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Patrick's Notebook",
  description: "A learning in public notebook of Patrick Ambrose",
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'author', content: 'Patrick Ambrose' }],
    ['meta', { name: 'keywords', content: 'digital-garden, pkm, second brain' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Site Metadata
    logo: '/logo.png',
    siteTitle: 'Patrick\'s Notebook',

    outline: [2,4],
    outlineTitle: 'Content Outline',

    // Setting up local search with MiniSearch
    search:{
      provider: 'local'
    },
    
    // Custom Navigation links setup
    nav: navBar(),

    // Custom Sidebar Configuration
    sidebar: {
      '/Notes-and-Guides/': sideBarNotesandGuides(),
      '/Projects/': sideBarProjects()
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/patrickambrosso/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/patrickambrosso/' },
      { icon: 'twitter', link: 'https://twitter.com/PatrickAmbrosso' },
      { icon: 'github', link: 'https://github.com/PatrickAmbrosso' }
    ],
    footer: {
      copyright: 'Copyright © 2023 <a href="https://github.com/PatrickAmbrosso">Patrick Ambrose</a>'
    }
  }
})

// Navigation Bar Configuration
function navBar() {
  return [
    { text: 'Notes & Guides', link: '/Notes-and-Guides/' },
    { text: 'Projects', link: '/Projects/' },
    { text: 'About Me', link: '/about' }
  ]
}

// Side Bar Configurations
function sideBarNotesandGuides() {
  return [
    {
      text: 'Technology',
      link: '/Notes-and-Guides/Technology/',
      items: [
        {
          text: 'Programming and Scripting',
          collapsed: true,
          link: '/Notes-and-Guides/Technology/Programming-and-Scripting/',
          items: [
            { text: 'PowerShell', link: '/Notes-and-Guides/Technology/Programming-and-Scripting/PowerShell/' },
            { text: 'Python', link: '/Notes-and-Guides/Technology/Programming-and-Scripting/Python/' },
          ]
        },
        {
          text: 'Networking',
          collapsed: true,
          link: '/Notes-and-Guides/Technology/Networking/',
          items: [
            { text: 'SSH', link: '/Notes-and-Guides/Technology/Networking/SSH' }
          ]
        }
      ]
    },
    {
      text: 'Productivity',
      link: '/Notes-and-Guides/Productivity/'
    }
  ]
}

function sideBarProjects() {
  return [
    {
      text: 'Personal Website',
      collapsed: true,
      link: '/Projects/Personal-Website/',
      items: [
        { text: 'Vitepress Site', link: '/Projects/Personal-Website/Vitepress' }
      ]
    },
    {
      text: 'Home Lab',
      collapsed: true,
      link: '/Projects/HomeLab/',
      items: [
        { text: 'Getting Started', link: '/Projects/HomeLab/Getting-Started' },
        { text: 'Purchasing Equipment', link: '/Projects/HomeLab/Purchasing-Equipment' },
        { text: 'Configuring Stacks', link: '/Projects/HomeLab/Configuring-Stacks' },
      ]
    }
  ]
}