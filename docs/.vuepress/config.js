const urls = require("./urls-mapping.js");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  base: "/",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "ImunifyAV documentation"
    },
  },
  theme: "cloudlinux",
  // theme: '/Users/prefer/src/cloudlinux-doc-theme', // local path

  themeConfig: {
    repo: "cloudlinux/imunify360-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",

    translationSource: 'docs.imunifyav.com',
    defaultURL: "/imunifyav/",
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://www.imunify360.com/antivirus",
    bottomLinks: [
      {
        text: "How to",
        url: "https://cloudlinux.zendesk.com/hc/sections/115001344329-How-do-I"
      },
      {
        text: "Getting started",
        url: "https://www.imunify360.com/antivirus"
      },
      {
        text: "Contact support",
        url: "https://cloudlinux.zendesk.com/hc/requests/new"
      },
      { text: "Blog", url: "https://www.imunify360.com/blog" }
    ],
    social: [
      { url: "https://www.facebook.com/imunify360/", logo: "/fb.png" },
      { url: "https://twitter.com/imunify360/", logo: "/tw.png" },
      { url: "https://linkedin.com/company/cloudlinux", logo: "/in.png" },
      {
        url: "https://www.youtube.com/channel/UCcW6dDJjcy41c7Hl_5LdLZQ",
        logo: "/ytube.png"
      }
    ],
    cloudlinuxSite: "https://cloudlinux.com",
    locales: {
      "/": {
        // text for the language dorpdown title
        title: "Language",
        // text for the language dropdown
        selectText: "En",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page",
        tryFree: "Get Free",
        search: "Search",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},

        sidebar: [
          {
            title: "Contents",
            collapsable: false,
            children: [
              "/imunifyav/",
              "/cli/",
              "/imunifyav_for_plesk/",
              "/imunifyav_for_ispmanager/"
            ]
          }
        ]
      },
      "/ru/": {
        title: "Язык",
        selectText: "Рус",
        label: "Русский",
        editLinkText: "Отредактировать",
        serviceWorker: {
          updatePopup: {
            message: "Доступен новый контент",
            buttonText: "Обновить"
          }
        },
        algolia: {},
        sidebar: [
          {
            title: "Содержание",
            collapsable: false,
            children: [

            ]
          }
        ]
      }
    }
  }
};