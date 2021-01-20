module.exports = {
  //-- SITE SETTINGS -----
  author: "@ydhash12",
  siteTitle: "Dilip Kumar Portfolio",
  siteShortTitle: "dk.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Dilip Kumar, a frontend engineer and freelance web developer based in Bangalore.",
  siteUrl: "https://konstantin.digital",
  siteLanguage: "en_US",
  siteIcon: "content/dk.png", // Relative to gatsby-config file
  seoTitleSuffix: "Dilip Kumar", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40manishkumar199222",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "www.linkedin.com/in/dilip-kumar12/",
    },
    {
      name: "Medium",
      url: "https://medium.com/@manishkumar199222",
    },
    {
      name: "Github",
      url: "https://github.com/youngheart12",
    },
    // {
    //     name: "Behance",
    //     url: "https://www.behance.net/konstanmnster"
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: [
      {
        name: "Contact",
        url: "/#contact",
      },
      {
        name: "Toggle",
      },
    ],
  },
  footerLinks: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/dilip.kumar.796774/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/youngheart_dilip/",
    },
  ],
}
