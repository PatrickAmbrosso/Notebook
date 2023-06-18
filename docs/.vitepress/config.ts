import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Patrick's Notebook",
  description: "A learning in public notebook of Patrick Ambrose",

  head: [
    ['meta', { name: 'author', content: 'Patrick Ambrose' }],
    ['meta', { name: 'keywords', content: 'digital-garden, pkm, second brain' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'assets/logo.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Site Metadata
    logo: 'assets/logo.png',
    siteTitle: 'Patrick\'s Notebook',

    // Setting up local search with MiniSearch
    search:{
      provider: 'local'
    },
    
    // Custom Navigation links setup
    nav: [
      { text: 'About Me', link: '/about-me' },
      { text: 'Digital Garden', link: '/digital-garden/' },
      { text: 'Learning Paths', link: '/learning-paths/' },
      {
        text: 'Projects',
        items: [
          { text: 'Portfolio Website', link: '/projects/portfolio-website' },
          { text: 'Home Lab', link: '/projects/home-lab' },
          { text: 'PowerShell AWS CLI Tool', link: '/projects/pwsh-aws-cli-tool' }
        ]
      },
      { text: 'Contact Me', link: '/contact' }
    ],

    // Custom Sidebar Configuration
    sidebar: {
      '/digital-garden/': [
        {
          text: 'Science and Technology',
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
              link: '/',
              items: [
                { text: 'SSH', link: '/markdown-examples' },
                { text: 'RDP', link: '/contact' },              
              ]
            },
          ]
        }
      ],
      '/learning-paths/': [
        {
          text: 'Career Roadmaps',
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'DevOps Engineer', link: '/learning-paths/devops-engineer' },
            { text: 'Cloud Engineer', link: '/learning-paths/cloud-engineer' },
          ]
        },
        {
          text: 'Technology Roadmaps',
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'Computer Networking', link: '/learning-paths/devops-engineer' },
            { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
            { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
          ]
        },
        {
          text: 'Tool-based Roadmaps',
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'Docker', link: '/learning-paths/devops-engineer' },
            { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
            { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
          ]
        }
      ],
      '/projects/':[
        {
          text: 'Portfolio Website',
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
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'Computer Networking', link: '/learning-paths/devops-engineer' },
            { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
            { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
          ]
        },
        {
          text: 'PowerShell AWS CLI Tool',
          link: '/learning-paths/career-roadmaps',
          items: [
            { text: 'Computer Networking', link: '/learning-paths/devops-engineer' },
            { text: 'Hardware and Infrastructure', link: '/learning-paths/hardware-and-infrastructure' },
            { text: 'Operating Systems and Software', link: '/learning-paths/cloud-engineer' },
          ]
        }
      ]
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
