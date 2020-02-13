<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <h1 class="title">
            Contact
          </h1>

          <contact-form />
        </div>
      </template>
      <!-- <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template> -->
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
