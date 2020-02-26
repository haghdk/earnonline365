<template>
  <section :class="`hero is-medium hero-theme-${computedTheme}`">
    <img
      class="hero-bg-img"
      :src="responsiveImage.src"
      :lazy="false"
      :srcset="responsiveImage.srcSet"
    />
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 v-if="subtitle" class="subtitle">
          {{ subtitle }}
        </h2>
        <div v-if="$slots.default" class="under-subtitle">
          <slot />
        </div>
      </div>
    </div>
    <div class="wave"></div>
  </section>
</template>
<script>
export default {
  name: 'SiteHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
    color: { type: String, default: '#469af0' },
    theme: { type: String, default: '' }
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
.hero {
  margin-top: 52px;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.title {
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
}
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 1rem;
  margin-bottom: 0 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 0.8rem;

  &::before {
    content: '';
    display: block;
    width: 75%;
    height: 1px;
    background-color: #ffffff;
    margin: 1.25rem auto 1.25rem;
  }
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
</style>
<style lang="scss">
.hero {
  .hero-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .opti-image {
    opacity: 0;
  }
  .opti-image-loaded {
    opacity: 1;
  }
}
.hero-theme-mist {
  .hero-bg-img {
    filter: grayscale(1);
  }
  .opti-image-loaded {
    opacity: 0.12;
    animation: blurInGrayscale 4.5s ease;
  }
}
.hero-theme-dark,
.hero-theme-light {
  &.hero:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
  }
  .hero-body {
    position: relative;
    z-index: 2;
  }
}
.hero-theme-dark {
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    color: white;
  }
}
.hero-theme-light.hero {
  &:after {
    background: rgba(255, 255, 255, 0.6);
  }
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    text-shadow: 1px 1px 2px white;
  }
}

.wave {
  background: linear-gradient(to right, transparent, transparent);
  height: 50px;
  position: relative;
  z-index: 1;
}
.wave::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 10px;
  background-size: 20px 20px;
  background-image: radial-gradient(
    circle at 10px -5px,
    transparent 12px,
    #ffffff 13px
  );
}
.wave::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 15px;
  background-size: 40px 20px;
  background-image: radial-gradient(
    circle at 10px 15px,
    #ffffff 12px,
    transparent 13px
  );
}
</style>
