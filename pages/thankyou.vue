<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content card padded">
            <h3>Thank you</h3>

            <p>
              Thank you for signing up for our newsletter
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
      title: `Thank you | ${this.$siteConfig.siteName}`
    }
  },
  components: {}
}
</script>
