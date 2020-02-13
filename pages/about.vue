<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero image="/uploads/about-hero.jpg"></site-hero>
    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content">
            <h3>Fake Heading</h3>
            <p>
              <strong>
                Edit this page in<code>/pages/about.vue</code>to fit your needs.
              </strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              eligendi impedit inventore ipsa laboriosam libero magnam modi
              odio, sunt temporibus. Distinctio doloremque eum magni nostrum
              quasi ratione rem repudiandae sit!
            </p>

            <h3>Another Fake Heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              eligendi impedit inventore ipsa laboriosam libero magnam modi
              odio, sunt temporibus. Distinctio doloremque eum magni nostrum
              quasi ratione rem repudiandae sit!
            </p>
            <quote-card />
            <h3>Still More Fake Content</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              eligendi impedit inventore ipsa laboriosam libero magnam modi
              odio, sunt temporibus. Distinctio doloremque eum magni nostrum
              quasi ratione rem repudiandae sit! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              <strong>Alias aut facere harum ipsam</strong> quibusdam quidem
              quisquam saepe? Alias architecto blanditiis consequatur
              consequuntur dicta ipsa iste modi provident, quod, similique
              veritatis.
            </p>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
