module.exports = {
    siteMetadata: {
        title: `A sample site using gatsby-source-wordpress`,
        subtitle: `Data fetched from a site hosted on wordpress`
    },
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `neo1seo.com`,
                protocol: `https`,
                hostingWPCOM: false,
                useACF: false,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        }
    ],
}
