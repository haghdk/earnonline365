<template>
  <footer class="site-footer">
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved

    <div class="social-icons">
      <a
        class="social-icon"
        href="https://www.instagram.com/makemoneyonlineninja/"
        ><img
          src="@/static/social-icons/instagram.svg"
          alt="makemoneyonlineninja instagram"
      /></a>

      <a
        class="social-icon"
        href="https://www.youtube.com/channel/UCersbZhBS5VscXp8wyMuJvQ"
        ><img
          src="@/static/social-icons/youtube.svg"
          alt="makemoneyonlineninja youtube"
      /></a>
    </div>
    <ul class="footer-links">
      <li><nuxt-link to="/cookie-policy">Cookie policy</nuxt-link></li>
      <li><nuxt-link to="/privacy-policy">Privacy policy</nuxt-link></li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-size: 0.85rem;
  padding: 2.5rem;
  text-align: center;
  transition: 0.5s ease all;
}

.social-icon {
  display: block;
  margin: 1.25rem auto 0;

  img {
    max-width: 30px;
  }
}

.footer-links {
  margin-top: 1.25rem;
}

.social-icons {
  display: flex;
  max-width: 100px;
  margin: auto;
}
</style>

<script>
export default {
  name: 'SiteFooter'
}
</script>
