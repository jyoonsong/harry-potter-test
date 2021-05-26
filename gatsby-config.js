module.exports = {
  siteMetadata: {
    title: `나에게 어울리는 해리포터 주문은?`,
    description: `3분컷으로 알아보는 나에게 어울리는 해리포터 주문`,
    author: `Jaeyoon Song`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `나에게 어울리는 해리포터 주문은?`,
        short_name: `harrypotter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/share.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-MDNT51T43W",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        anonymize: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
