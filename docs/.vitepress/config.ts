import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Patrick's Notebook",
  description: "A learning in public notebook of Patrick Ambrose",

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
      '/Learning-Guides/': sideBarGuides(),
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
    { text: 'Learning Guides', link: '/Learning-Guides/' },
    { text: 'Projects', link: '/Projects/' },
    { text: 'Contact Me', link: '/Contact' }
  ]
}

// Side Bar Configurations

function sideBarDigitalGarden() {
  return [
    {
      text: 'Welcome', link: '/Digital-Garden/'
    },
    {
      text: 'Science and Technology',
      collapsed: true,
      link: '/digital-garden/science-and-technology',
      items: [
        {
          text: 'Cloud and DevOps',
          items: [
            { text: 'Web Servers', link: '/web-servers' },
            { text: 'Monitoring and Logging', link: '/markdown-examples' },
            { text: 'Arts and Humanities', link: '/markdown-examples' },              
          ]
        },
        {
          text: 'Remote Server Management',
          link: '/digital-garden/Remote-Server-Management',
          items: [
            { text: 'SSH', link: '/digital-garden/SSH' },
            { text: 'RDP', link: '/digital-garden/RDP' },
            { text: 'VCS', link: '/digital-garden/Version-Control-System' },              
          ]
        },
      ]
    }
  ]
}

function sideBarGuides() {
  return [
    {
      text: 'Roadmaps',
      items: [
        {
          text: 'Career Roadmaps',
          collapsed: true,
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'DevOps Engineer', link: '/learning-paths/devops-engineer' },
            { text: 'Cloud Engineer', link: '/learning-paths/cloud-engineer' },
          ]
        },
        {
          text: 'Technology Roadmaps',
          collapsed: true,
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'Computer Networking', link: '/learning-paths/devops-engineer' },
            { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
            { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
          ]
        },
        {
          text: 'Tool-based Roadmaps',
          collapsed: true,
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'Docker', link: '/learning-paths/devops-engineer' },
            { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
            { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
          ]
        }
      ]
    },
    {
      text: 'Guides',
      collapsed: true,
      items: [
        { text: 'AWS', link: '/learning-paths/AWS-Guides' },
        { text: 'Portainer', link: '/learning-paths/Portainer-Guides' },
        { text: 'Kubernetes', link: '/learning-paths/Kubernetes-Guides' }
      ]
    }
  ]
}

function sideBarProjects() {
  return [
    {
      text: 'Portfolio Website',
      collapsed: true,
      link: '/projects/portfolio-website',
      items: [
        { text: 'Setting up VitePress', link: '/learning-paths/devops-engineer' },
        { text: 'Customizations', link: '/learning-paths/cloud-engineer' },
        { text: 'Authoring Content', link: '/learning-paths/cloud-engineer' },
        { text: 'Deployment', link: '/learning-paths/cloud-engineer' }
      ]
    },
    {
      text: 'Home Lab',
      collapsed: true,
      link: '/projects/home-lab',
      items: [
        { text: 'Computer Networking', link: '/learning-paths/devops-engineer' },
        { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
        { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
      ]
    },
    {
      text: 'PowerShell AWS CLI Tool',
      collapsed: true,
      link: '/projects/pwsh-aws-cli-tool',
      items: [
        { text: 'Computer Networking', link: '/learning-paths/devops-engineer' },
        { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
        { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
      ]
    }
  ]
}