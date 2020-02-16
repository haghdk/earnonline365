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
      title: `Categories | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
