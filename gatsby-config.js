module.exports = {
  siteMetadata: {
    title: 'Circuit mind website',
    description: 'A smarter circuit mind website',
    author: '@aiwatko',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
    // TODO: optimize how images are imported
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/src/content/jobs`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Nunito+Sans:300,900', // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // TODO: enable tracking id
        // trackingId: 'UA-132393507-1',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
