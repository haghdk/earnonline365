<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <main-section theme="one-column">
      <div class="column is-10 is-offset-1">
        <h1 class="title">
          Categories
        </h1>
        <categories-grid />
      </div>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Categories | ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Categories ← ${this.$siteConfig.siteName}`
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Check all our posts about making money online and affiliate marketing in these categories'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Check all our posts about making money online and affiliate marketing in these categories'
        }
      ]
    }
  }
}
</script>
