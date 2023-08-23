import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Patrick's Portfolio",
  description: "Portfolio and Digital Notebook of Patrick Ambrose",
  ignoreDeadLinks: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'author', content: 'Patrick Ambrose' }],
    ['meta', { name: 'keywords', content: 'digital-garden, pkm, second brain' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Site Metadata
    logo: '/logo.png',
    siteTitle: 'The Patfolio',

    outline: [2, 4],
    outlineTitle: 'Content Outline',

    // Setting up local search with MiniSearch
    search: {
      provider: 'local'
    },

    // Custom Navigation links setup
    nav: navBar(),

    // Custom Sidebar Configuration
    sidebar: {
      '/Notes/': sideBarNotes(),
      '/Projects/': sideBarProjects(),
      '/Roadmaps/': sideBarRoadmaps()
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
    { text: 'Notes', link: '/Notes' },
    { text: 'Projects', link: '/Projects' },
    { text: 'Roadmaps', link: '/Roadmaps' },
    {
      text: 'More About Me',
      items: [
        {
          // Title for the section.
          // text: 'Title', Optional Title
          items: [
            { text: 'About Me', link: '/About-Me' },
            { text: 'Latest Updates?', link: 'https://bento.me/patrickambrosso' }
          ]
        },
        {
          // Title for the section.
          // text: 'Title', Optional Title
          items: [
            { text: 'My Resumé', link: 'https://www.patrickambrose.com/resume-2023.pdf' }
          ]
        }
      ]
    }
  ]
}

// Side Bar Configurations
function sideBarNotes() {
  return [
    {
      text: 'Hardware',
      collapsed: true,
      link: '/Notes/Computer-Hardware/',
      items: [
        { text: 'History of Computer Hardware', link: '/Notes/Computer-Hardware/History' },
        { text: 'Generations of Computer', link: '/Notes/Computer-Hardware/Generations-of-Computers' }
      ]
    },
    {
      text: 'Networking',
      collapsed: true,
      link: '/Notes/Computer-Networking/',
      items: [
        { text: 'Secure Communications', link: '/Notes/Computer-Networking/Secure-Communications' }
      ]
    },
    {
      text: 'Software Engineering',
      collapsed: true,
      link: '/Notes/Software-Engineering/',
      items: [
        { text: 'Basic Concepts', link: '/Notes/Programming-Languages/Basic-Concepts/' },
        { text: 'Design Patterns', link: '/Notes/Programming-Languages/Design-Patterns/' }
      ]
    },
    {
      text: 'Programming',
      collapsed: true,
      link: '/Notes/Programming-Languages/',
      items: [
        { text: 'Python', link: '/Notes/Programming-Languages/Python/' },
        { text: 'PowerShell', link: '/Notes/Programming-Languages/PowerShell/' },
        { text: 'GoLang', link: '/Notes/Programming-Languages/GoLang/' },
        { text: 'C#', link: '/Notes/Programming-Languages/C-Sharp/' }
      ]
    },
    {
      text: 'Cloud Computing',
      collapsed: true,
      link: '/Notes/Cloud-Computing/',
      items: [
        { text: 'Basics of Cloud', link: '/Notes/Cloud-Computing/Basics' },
        { text: 'AWS', link: '/Notes/Cloud-Computing/AWS' },
        { text: 'Azure', link: '/Notes/Cloud-Computing/Azure' },
        { text: 'GCP', link: '/Notes/Cloud-Computing/GCP' },
        { text: 'Digital Ocean', link: '/Notes/Cloud-Computing/Digital-Ocean' },
        { text: 'Linode', link: '/Notes/Cloud-Computing/Linode' }
      ]
    },
    {
      text: 'DevOps Engineering',
      collapsed: true,
      link: '/Notes/DevOps-Engineering/',
      items: [
        { text: 'Fundamentals', link: '/Notes/DevOps-Engineering/Basics' },
        { text: 'Infrastructure as Code', link: '/Notes/DevOps-Engineering/Infrastructure-as-Code/'},
        { text: 'Monitoring & Logging', link: '/Notes/DevOps-Engineering/Monitoring-and-Logging/'}
      ]
    },
    {
      text: 'Data Ecosystem',
      collapsed: true,
      link: '/Notes/Data-Ecosystem/',
      items: [
        { text: 'Data Fundamentals', link: '/Notes/Data-Ecosystem/Fundamentals-of-Data' },
        { text: 'Data Disciplines', link: '/Notes/Data-Ecosystem/Disciplines' }
      ]
    },
    {
      text: 'Design Engineering',
      collapsed: true,
      link: '/Notes/Design-Engineering/',
      items: [
        { text: 'Data Fundamentals', link: '/Notes/Data-Ecosystem/Fundamentals-of-Data' },
        { text: 'Data Disciplines', link: '/Notes/Data-Ecosystem/Disciplines' }
      ]
    },
    {
      text: 'Linguistics',
      collapsed: true,
      link: '/Notes/Linguistics/',
      items: [
        { text: 'Story of Languages', link: '/Notes/Linguistics/Story-of-Languages' },
        { text: 'Writing Systems', link: '/Notes/Linguistics/Writing-Systems' },
        { text: 'Phonetics', link: '/Notes/Linguistics/Phonetics' }
      ]
    },
    {
      text: 'Productivity',
      collapsed: true,
      link: '/Notes/Productivity/',
      items: [
        { text: 'What is Productivity?', link: '/Notes/Productivity/What-is-Productivity' },
        { text: 'Paradigms of Productivity', link: '/Notes/Productivity/Paradigms' }
      ]
    },
    {
      text: 'Book Reviews',
      collapsed: true,
      link: '/Notes/Book-Reviews/',
      items: [
        { text: 'Self-Help', link: '/Notes/Book-Reviews/Self-Help' },
        { text: 'Business & Management', link: '/Notes/Book-Reviews/Business-and-Management' }
      ]
    },
    {
      text: 'Theology',
      collapsed: true,
      link: '/Notes/Theology/',
      items: [
        { text: 'The Greater Search', link: '/Notes/Theology/The-Greater-Search' },
        { text: 'Christian Theology', link: '/Notes/Theology/Christian-Theology' },
        { text: 'Hindu Theology', link: '/Notes/Theology/Hindu-Theology' }
      ]
    }
  ]
}

function sideBarProjects() {
  return [
    {
      text: 'Home Lab',
      collapsed: true,
      link: '/Projects/HomeLab/',
      items: [
        { text: 'Getting Started', link: '/Projects/HomeLab/Getting-Started' },
        { text: 'Purchasing Equipment', link: '/Projects/HomeLab/Purchasing-Equipment' },
        { text: 'Configuring Stacks', link: '/Projects/HomeLab/Configuring-Stacks' },
      ]
    },
    {
      text: 'Personal Website',
      collapsed: true,
      link: '/Projects/Personal-Website/',
      items: [
        { text: 'The Logistics', link: '/Projects/Personal-Website/The-Logistics' }
      ]
    },
    {
      text: 'PWSSH',
      collapsed: true,
      link: '/Projects/PWSSH/',
      items: [
        { text: 'Technical Details', link: '/Projects/PWSSH/Technical-Details'},
        { text: 'Code-Base', link: '/Projects/PWSSH/Code-Base'},
        { text: 'Future of PWSSH', link: '/Projects/PWSSH/Future-of-PWSSH'}
      ]
    },
    {
      text: 'PSTop',
      collapsed: true,
      link: '/Projects/PSTop/',
      items: [
        { text: 'Technical Details', link: '/Projects/PSTop/Technical-Details'},
        { text: 'Code-Base', link: '/Projects/PSTop/Code-Base'},
        { text: 'Future of PSTop', link: '/Projects/PSTop/Future-of-PSTop'}
      ]
    }
  ]
}

function sideBarRoadmaps() {
  return [
    {
      text: 'HomeLab Guides',
      collapsed: true,
      link: '/Roadmaps/HomeLab-Guides/',
      items: [
        { text: 'HomeLab Considerations', link: '/Roadmaps/HomeLab-Guides/Considerations'}
      ]
    },
    {
      text: 'DevOps Guides',
      collapsed: true,
      link: '/Roadmaps/DevOps-Guides/',
      items: [
        { text: 'IaC', link: '/Roadmap/DevOps-Guides/Iac' },
        { text: 'Monitoring', link: '/Roadmap/DevOps-Guides/Monitoring' },
        { text: 'Logging', link: '/Roadmap/DevOps-Guides/Logging' },
        { text: 'Continuous Integration', link: '/Roadmap/DevOps-Guides/Continuous-Integration' }
      ]
    }
  ]
}