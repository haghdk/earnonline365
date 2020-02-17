<template>
  <div id="home-page" class="page-wrapper home-page">
    <!-- <button
      class="button is-primary"
      @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
    >
      Subscribe To Newsletter
    </button> -->
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <div class="column is-10 is-offset-1">
          <h1 class="title">
            A blog about making money online with affiliate marketing
          </h1>
          <posts-grid :per-row="2" />
        </div>
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Start making money online ← ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Start making money online ← ${this.$siteConfig.siteName}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `A blog about making money online with affiliate marketing. Learn how to get started`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `A blog about making money online with affiliate marketing. Learn how to get started`
        }
      ]
    }
  },
  components: {
    NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
