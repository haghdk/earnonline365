<template>
  <div id="post-page" class="page-wrapper post-page">
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="header-time">
          <h1 class="title">
            {{ title }}
          </h1>

          <time v-if="date">{{ date }}</time>
          <span
            v-if="author && $siteConfig.posts.displayAuthor"
            class="author-wrapper"
          >
            by {{ author }}
          </span>
        </div>

        <AddThis
          public-id="5e4bbba630202b41"
          :data-url="`https://www.makemoneyonlineninja.com/blog/${slug}`"
          :data-title="title"
          :data-description="teaser"
          :data-media="`https://www.makemoneyonlineninja.com${getRealImage}`"
        />

        <blog-image :image="featureImage" :alt="title"></blog-image>

        <div class="post-wrapper">
          <div class="teaser">
            {{ teaser }}
          </div>

          <markdown :markdown="$store.state.content" />
        </div>

        <!-- <div class="other-posts">
          <h6 class="subtitle is-size-4">
            Related Posts
          </h6>
          <posts-grid :number="2" :category="category" :exclude="slug" />
        </div> -->
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AddThis from 'vue-simple-addthis-share'
import { setPageData, getFormattedDate } from '../../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'

export default {
  components: {
    Markdown,
    AddThis
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.makemoneyonlineninja.com/'
      },
      url: `https://www.makemoneyonlineninja.com/blog/${this.$store.state.slug}`,
      image: `https://www.makemoneyonlineninja.com${this.getRealImage}`,
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
        '@type': 'Organization',
        name: 'makemoneyonlineninja',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.makemoneyonlineninja.com/favicons/favicon-96x96.png'
        }
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
          content: 'https://www.makemoneyonlineninja.com' + this.getRealImage
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
    getRealImage() {
      return require(`~/assets${this.featureImage}`)
    },
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.singlePost })
  },
  mounted() {
    this.setBlankLinks()
  },
  methods: {
    setBlankLinks() {
      const links = document.querySelectorAll('.content a')

      for (let i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
          links[i].target = '_blank'
          links[i].classList.add('button')
          links[i].classList.add('button-external')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-time {
  margin-bottom: 1.25rem;
}

.title {
  margin-bottom: 0.25rem;
}

.other-posts {
  margin-top: 2.5rem;
}

.teaser {
  margin-bottom: 1.25rem;
  font-weight: 700;
}

.section {
  @media (max-width: 1023px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

.addthis_inline_share_toolbox {
  margin: 0 0 1.25rem 0;
}

.content img {
  margin: 1.25rem auto;
}

.content a {
  font-weight: bold;
}
</style>
