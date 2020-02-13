<template>
  <picture>
    <img
      class="blog-image"
      :src="responsiveImage.src"
      :lazy="false"
      :srcset="responsiveImage.srcSet"
    />
  </picture>
</template>
<script>
export default {
  name: 'BlogImage',
  props: {
    image: { type: String, default: '' }
  },
  computed: {
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    },
    computedTheme() {
      if (this.theme === '' && this.$siteConfig.hero.theme) {
        return this.$siteConfig.hero.theme
      }
      return this.theme || 'mist'
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-image {
  margin-bottom: 1rem;
}
</style>
