<template>
  <footer class="site-footer">
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  font-size: 0.85rem;
  padding: 2.5rem;
  text-align: center;
  transition: 0.5s ease all;
}
</style>
