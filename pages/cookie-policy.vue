<template>
  <div id="tools" class="page-wrapper tools-page content-page">
    <site-hero
      title="Cookie policy"
      image="/uploads/how-to-make-money-online.jpg"
    ></site-hero>

    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content">
            <p>
              This is the Cookie Policy for MakeMoneyOnline Ninja, accessible
              from https://www.makemoneyonlineninja.com/
            </p>

            <p><strong>What Are Cookies</strong></p>

            <p>
              As is common practice with almost all professional websites this
              site uses cookies, which are tiny files that are downloaded to
              your computer, to improve your experience. This page describes
              what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can
              prevent these cookies from being stored however this may downgrade
              or 'break' certain elements of the sites functionality.
            </p>

            <p>
              For more general information on cookies see the Wikipedia article
              on HTTP Cookies.
            </p>

            <p><strong>How We Use Cookies</strong></p>

            <p>
              We use cookies for a variety of reasons detailed below.
              Unfortunately in most cases there are no industry standard options
              for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>

            <p><strong>Disabling Cookies</strong></p>

            <p>
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of the this site. Therefore it is recommended that you do
              not disable cookies.
            </p>

            <p><strong>The Cookies We Set</strong></p>

            <ul>
              <li>
                <p>Email newsletters related cookies</p>
                <p>
                  This site offers newsletter or email subscription services and
                  cookies may be used to remember if you are already registered
                  and whether to show certain notifications which might only be
                  valid to subscribed/unsubscribed users.
                </p>
              </li>
            </ul>

            <p><strong>Third Party Cookies</strong></p>

            <p>
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>

            <ul>
              <li>
                <p>
                  This site uses Google Analytics which is one of the most
                  widespread and trusted analytics solution on the web for
                  helping us to understand how you use the site and ways that we
                  can improve your experience. These cookies may track things
                  such as how long you spend on the site and the pages that you
                  visit so we can continue to produce engaging content.
                </p>
                <p>
                  For more information on Google Analytics cookies, see the
                  official Google Analytics page.
                </p>
              </li>

              <li>
                <p>
                  Several partners advertise on our behalf and affiliate
                  tracking cookies simply allow us to see if our customers have
                  come to the site through one of our partner sites so that we
                  can credit them appropriately and where applicable allow our
                  affiliate partners to provide any bonus that they may provide
                  you for making a purchase.
                </p>
              </li>
            </ul>

            <p><strong>More Information</strong></p>

            <p>
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren't sure whether you
              need or not it's usually safer to leave cookies enabled in case it
              does interact with one of the features you use on our site. This
              Cookies Policy was created with the help of the
              <a href="https://www.cookiepolicygenerator.com" target="_blank"
                >Cookies Policy Template Generator</a
              >
              and the
              <a href="https://www.privacypolicytemplate.net/" target="_blank"
                >Privacy Policy Template Generator</a
              >.
            </p>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding: 2.5rem 0;
}

#toolsList {
  margin-top: 2.5rem;
}

.tool {
  margin-bottom: 5rem;
  background-color: #f9f9f9;
  padding: 1.25rem;

  .logo {
    max-width: 300px;
    margin: 1.25rem 0;
  }
}

.read-more {
  max-width: 300px;
  margin: 1.25rem 0 0;
}
</style>

<script>
export default {
  head() {
    return {
      title: `Cookie Policy ← ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Cookie Policy ← ${this.$siteConfig.siteName}`
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.'
        }
      ]
    }
  }
}
</script>
