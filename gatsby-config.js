require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Hexcodeblogs`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          // {
          //   title: `Home`,
          //   slug: `https://hexcodelabs.lk/#home`,
          // },
          // {
          //   title: `Services`,
          //   slug: `https://hexcodelabs.lk/#services`,
          // },
          // {
          //   title: `Blog`,
          //   slug: `https://blog.hexcodelabs.lk/blog`,
          // },
          // {
          //   title: `Our Team`,
          //   slug: `https://hexcodelabs.lk/crew`,
          // },
          // {
          //   title: `Contact Us`,
          //   slug: `https://hexcodelabs.lk/#contact`,
          // },
          // {
          //   title: `About`,
          //   slug: `https://blog.hexcodelabs.lk/about`,
          // },
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/hexodelabs`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/company/hexcode-labs/`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/hexcode.labs/`,
          },
        ],
        fonts:[
          `Playfair Display`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hexcodeblogs`,
        short_name: `hexcodeblogs`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
