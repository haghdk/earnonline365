<template>
  <div v-if="link !== undefined" class="card">
    <div class="card-image">
      <nuxt-link v-if="image" :to="link">
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="responsiveImage.src"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`"
          />
          <loading-spinner position="absolute" />
        </figure>
      </nuxt-link>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <nuxt-link :to="link">
            <h3
              :class="
                `title
                is-5
                has-text-weight-light
                ${title ? '' : 'empty-content-placeholder'}`
              "
            >
              {{ title }}
            </h3>
            <!-- <h4
              :class="{
                subtitle: true,
                'is-6': true,
                'empty-content-placeholder': !$slots.default
              }"
            >
              <slot></slot>
            </h4> -->
          </nuxt-link>
        </div>
      </div>

      <div v-if="cardtype != 'category'" class="published-wrapper">
        <time v-if="date" :class="`${date ? '' : 'empty-content-placeholder'}`">
          {{ date }}
        </time>
        <span
          v-if="author && $siteConfig.posts.displayAuthor"
          :class="`${author ? '' : 'empty-content-placeholder'}`"
          class="author-wrapper"
        >
          by {{ author }}
        </span>
      </div>

      <nuxt-link v-if="cardtype != 'category'" :to="link" class="read-more">
        Read more
      </nuxt-link>
    </div>
  </div>
</template>
<script>
const imageDimensionDefault = '16x9'
export default {
  props: {
    title: { type: String, default: '' },
    teaser: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    date: { type: String, default: '' },
    author: { type: String, default: '' },
    imageDimensions: { type: String, default: imageDimensionDefault },
    cardtype: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  }
}
</script>
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}

time {
  display: block;
}

.card {
  .media:not(:last-child) {
    margin-bottom: 0.25rem !important;
  }
}

.read-more {
  font-weight: bold;
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
</style>
