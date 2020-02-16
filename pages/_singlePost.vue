<template>
  <div id="post-page" class="page-wrapper post-page">
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="card padded">
          <blog-image :image="featureImage"></blog-image>

          <social-sharing
            :url="'http://www.tv2.dk/' + slug"
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
