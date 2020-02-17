<template>
  <div id="post-page" class="page-wrapper post-page">
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="card padded">
          <blog-image :image="featureImage" :alt="title"></blog-image>

          <social-sharing
            :url="'https://www.makemoneyonlineninja.com/' + slug"
            :title="title"
            :description="teaser"
            inline-template
          >
            <div class="social-sharing">
              <network network="facebook">
                <i class="facebook"></i>
              </network>
              <network network="twitter">
                <i class="twitter"></i>
              </network>
              <network network="pinterest">
                <i class="pinterest"></i>
              </network>
            </div>
          </social-sharing>

          <div class="post-wrapper">
            <h1 class="title">
              {{ title }}
            </h1>
            <h2>{{ subtitle }}</h2>

            <div class="published-wrapper">
              <time v-if="date">{{ date }}</time>
              <span
                v-if="author && $siteConfig.posts.displayAuthor"
                class="author-wrapper"
              >
                by {{ author }}
              </span>
            </div>

            <markdown :markdown="$store.state.content" />
          </div>
        </div>

        <div class="other-posts">
          <h6 class="subtitle is-size-4">
            Related Posts
          </h6>
          <!-- Related Posts -->
          <posts-grid :number="2" :category="category" :exclude="slug" />
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
export default {
  components: {
    Markdown
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.makemoneyonlineninja.com/'
      },
      url: `https://www.makemoneyonlineninja.com/'${this.$store.state.slug}`,
      image: `${this.$store.state.featureImage}`,
      headline: `${this.$store.state.title}`,
      alternativeHeadline: `${this.$store.state.subtitle}`,
      dateCreated: `${this.$store.state.date}`,
      datePublished: `${this.$store.state.date}`,
      dateModified: `${this.$store.state.date}`,
      articleBody: `${this.$store.state.content}`,
      author: {
        '@type': 'Person',
        name: 'Morten Jensen'
      },
      creator: {
        '@type': 'Person',
        name: 'Morten Jensen'
      },
      publisher: {
        '@type': 'Person',
        name: 'Morten Jensen'
      }
    }
  },
  head() {
    return {
      title: `${this.$store.state.title} ← ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$store.state.title} ← ${this.$siteConfig.siteName}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$store.state.metadescription}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.$store.state.metadescription}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.makemoneyonlineninja.com' +
            this.$store.state.featureImage
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'title',
      'teaser',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'category',
      'slug'
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.singlePost })
  }
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}

.title {
  margin-bottom: 0.25rem;
}

.other-posts {
  margin-top: 2.5rem;
}
</style>
