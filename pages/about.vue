<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero image="/uploads/make-money-online.jpg"></site-hero>
    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content">
            <h1>About</h1>

            <p>
              On Make Money Online Ninja you can read about all my experiences
              with affiliate marketing.<br />All my successes and all my
              failures. And also all my recommendations so you too can get
              started make money online.
            </p>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About ← ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `About ← ${this.$siteConfig.siteName}`
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'On Make Money Online Ninja you can read about all my experiences with affiliate marketing. All my successes and all my failures. And also all my recommendations so you too can get started make money online.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'On Make Money Online Ninja you can read about all my experiences with affiliate marketing. All my successes and all my failures. And also all my recommendations so you too can get started make money online.'
        }
      ]
    }
  },
  components: {}
}
</script>
