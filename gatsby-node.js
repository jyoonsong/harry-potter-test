/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const template = path.resolve("src/components/Result.js")

  // Get yml data
  const result = await graphql(`
    {
        allResultsYaml {
            edges {
                node {
                    name
                }
            }
        }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Create result pages
  const items = result.data.allResultsYaml.edges

  items.forEach(item => {
    const urlName = item.node.name.replace(" ", "_").toLowerCase()
    createPage({
      path: `/result/${urlName}/`,
      component: template,
      context: {
        urlName: urlName,
        title: item.node.name
      },
    })
  })
}