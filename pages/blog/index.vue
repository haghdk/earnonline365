<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Blog"
      image="/uploads/how-to-make-money-online.jpg"
    ></site-hero>

    <main-section id="latestPosts">
      <template v-slot:default>
        <!-- All Posts -->
        <div class="column is-8 is-offset-1">
          <h2 class="title">All posts</h2>
          <hr />
          <posts-grid :per-row="1" />
        </div>
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<style lang="scss" scoped>
#latestPosts {
  margin: 2.5rem auto;
}

h2.title {
  margin-bottom: 0.5rem;
  // text-align: center;
}

hr {
  margin: 0rem 0 1.25rem;
}
</style>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../../helper'
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
