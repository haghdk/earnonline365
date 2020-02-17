<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero image="/uploads/make-money-online.jpg"></site-hero>
    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content card padded">
            <h3>About</h3>

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
      title: `About ← ${this.$siteConfig.siteName}`
    }
  },
  components: {}
}
</script>
