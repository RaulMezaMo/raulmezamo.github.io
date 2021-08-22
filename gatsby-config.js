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
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `webp`
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              showCaptions: true,
              linkImagesToOriginal: true,
              withWebp: true,
              quality: 100,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project-images",
        path: `${__dirname}/projects/`,
        ignore: [`*.mdx`]
      },
      __key: "project-images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "webps",
        path: `${__dirname}/src/images/webp`,
      },
      __key: "webps",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "gifs",
    //     path: `${__dirname}/src/images/gifs`,
    //   },
    //   __key: "gifs",
    // },
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
