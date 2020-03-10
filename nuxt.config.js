import path from 'path'
import glob from 'glob'
import head from './config/head'
import { modules, modulesSettings } from './config/modules'
import plugins from './config/plugins'
import build from './config/build'
import css from './config/css'
import { routeMap, otherRoutes } from './config/generate'

export default {
  mode: 'universal',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Customize the progress-bar color
   */
  robots: [
    {
      UserAgent: '*',
      Disallow: () => '/admin' // accepts function
    }
  ],
  /*
   ** Headers of the page
   */
  head: head,
  generate: {
    routes: otherRoutes.concat(getDynamicPaths(routeMap))
  },
  /*
   ** Global CSS
   */
  css: css,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: plugins,
  /*
   ** Nuxt.js modules
   */
  modules: modules,
  ...modulesSettings,
  /*
   ** redirect configuration
   */
  redirect: [
    { from: '^/contact', to: '/', statusCode: 301 },
    {
      from: '^.*(?<!/)$',
      to: (from, req) => req.url + '/'
    },
    {
      from: '^/my-first-affiliate-commission/',
      to: '/blog/my-first-affiliate-commission/',
      statusCode: 301
    },
    {
      from: '^/building-an-email-list/',
      to: '/blog/building-an-email-list/',
      statusCode: 301
    },
    {
      from: '^/work-at-home-secrets-and-scams/',
      to: '/blog/work-at-home-secrets-and-scams/',
      statusCode: 301
    },
    {
      from: '^/how-to-start-on-affiliate-marketing/',
      to: '/blog/how-to-start-on-affiliate-marketing/',
      statusCode: 301
    },
    {
      from: '^/the-money-is-in-the-list/',
      to: '/blog/the-money-is-in-the-list/',
      statusCode: 301
    }
  ],
  /*
   ** sitemap configuration
   */
  sitemap: {
    hostname: 'https://www.makemoneyonlineninja.com',
    gzip: true,
    exclude: ['/thankyou', '/blog', '/admin/**'],
    trailingSlash: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  /*
   ** Build configuration
   */
  build: build
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: 'content' }).map((filepath) => {
        return `${url}/${path.basename(filepath, '.md')}`
      })
    })
  )
}
