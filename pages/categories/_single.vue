<template>
  <div id="category-page" class="page-wrapper category-page">
    <div class="column is-10 is-offset-1">
      <main-section theme="sidebar-right">
        <template v-slot:default>
          <!-- Posts in Category -->
          <h1 class="title">
            {{ $store.state.name }}
          </h1>

          <posts-grid :category="[$store.state.name]" :per-row="2" />
        </template>
        <template v-slot:sidebar>
          <h3 class="subtitle">
            All Categories
          </h3>
          <div class="panel">
            <nuxt-link
              v-for="cat in allCats"
              :key="cat.slug"
              :to="`/categories/${cat.slug}/`"
              :class="{
                'panel-block': true,
                'is-active': cat.slug === $route.params.single
              }"
            >
              {{ cat.name }}
            </nuxt-link>
          </div>
        </template>
      </main-section>
    </div>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allCats: []
    }
  },
  head() {
    return {
      title: `${this.$store.state.name} ← ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$store.state.name} ← ${this.$siteConfig.siteName}`
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
        }
      ]
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>
