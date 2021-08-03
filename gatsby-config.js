module.exports = {
  siteMetadata: {
    title: "Raul Meza Montoya | Portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          implementation: require("sass"),
          // includePaths: [
          //   './node_modules/bootstrap/scss',
          //   '../node_modules/bootstrap/scss',
          //   'node_modules/bootstrap/scss',
          //   `${__dirname}/src/styles`,
          //   `${__dirname}/node_modules/bootstrap/scss`,
          //   `${__dirname}`,
          //   'node_modules/@scope',
          //   '../node_modules/@scope',
          // ],
        }
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              showCaptions: true,
              linkImagesToOriginal: true,
              withWebp: true,
              quality: 90,
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/projects`,
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs`
        }
      }
    },
  ],
};
