export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=0'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    }
  ]
}
