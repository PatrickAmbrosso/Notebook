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
      '/Digital-Garden/': sideBarDigitalGarden(),
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
    { text: 'About Me', link: '/About' },
    { text: 'Digital Garden', link: '/Digital-Garden/' },
    { text: 'Notes & Guides', link: '/Notes-and-Guides/' },
    { text: 'Projects', link: '/Projects/' },
    { text: 'Get in Touch', link: '/Contact' }
  ]
}

// Side Bar Configurations

function sideBarDigitalGarden() {
  return [
    { text: 'Welcome to the Garden', link: '/Digital-Garden/' }, 
    { text: 'Tools I Use', link: '/Digital-Garden/Tools-I-Use' }
  ]
}

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
      text: 'Portfolio Website',
      collapsed: true,
      link: '/projects/Portfolio-Website/',
      items: [
        { text: 'Vitepress Site', link: '/Projects/Personal-Website/VitePress' }
      ]
    },
    {
      text: 'Home Lab',
      collapsed: true,
      link: '/projects/HomeLab/',
      items: [
        { text: 'Getting Started', link: '/Projects/HomeLab/Getting-Started' },
        { text: 'Purchasing Equipment', link: '/Projects/HomeLab/Purchasing-Equipment' },
        { text: 'Configuring Stacks', link: '/Projects/HomeLab/Configuring-Stacks' },
      ]
    }
  ]
}