<template>
  <div id="tools" class="page-wrapper tools-page content-page">
    <site-hero
      title="Tools for affiliate marketing"
      image="/uploads/how-to-make-money-online.jpg"
    ></site-hero>

    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content">
            <AddThis
              public-id="5e4bbba630202b41"
              :data-url="`https://www.makemoneyonlineninja.com/tools/`"
              :data-title="title"
              :data-description="teaser"
              :data-media="
                `https://www.makemoneyonlineninja.com/uploads/how-to-make-money-online.jpg`
              "
            />

            <h2>How do I start? What tools do I need?</h2>
            <p>
              Getting started with affiliate marketing can be scary at first.
              How do I start, where do I start? What tools do I need?
            </p>

            <p>
              To help you become successful in affiliate marketing, there are a
              bunch of different tools you can use. Email marketing tools, SEO
              optimizer tools, video tools etc.
            </p>

            <p>
              These tools will help you in every part of your affiliate
              marketing business, from setting up email campaigns, build
              websites and landing pages, search engine optimize your blog,
              optimize your YouTube videos to get more views etc.
            </p>

            <div id="toolsList">
              <div
                v-for="tool in tools"
                :id="tool.name"
                :key="tool.name"
                class="tool"
              >
                <h3>{{ tool.name }}</h3>

                <a
                  :href="tool.link"
                  :class="tool.speciallogo ? 'special-logo' : ''"
                >
                  <img
                    :src="'/logos/' + tool.logo"
                    :alt="tool.name"
                    class="logo"
                /></a>

                <div class="description" v-html="tool.description"></div>

                <a :href="tool.link" class="read-more">{{ tool.linkText }}</a>
              </div>
            </div>
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

  a {
    display: block;
  }

  .logo {
    max-width: 300px;
    margin: 1.25rem 0;
  }
}

.special-logo {
  background-color: #0294ff;
  padding: 0.25rem;
  display: block;
  margin-bottom: 1.25rem;
  max-width: 250px;

  img {
    width: 100%;
  }
}

.read-more {
  max-width: 300px;
  margin: 1.25rem 0 0;
}
.addthis_inline_share_toolbox {
  margin: 0 0 1.25rem 0;
}
</style>

<script>
import AddThis from 'vue-simple-addthis-share'

export default {
  components: {
    AddThis
  },
  data() {
    return {
      tools: [
        {
          id: 'GetResponse',
          name: 'GetResponse',
          logo: 'getresponse.svg',
          link:
            'https://affiliates.getresponse.com/material/hit/210/pEkMFNHHwP',
          linkText: 'Claim your 30 day free trial',
          description:
            'One of the most important parts of building an online business is to collect emails. <br />With emails you will be able to promote services or products to a large group of people interested in your specific niche.<br />The best tool to do this in my opinion is GetResponse. With GetResponse you can build email lists, create squeeze pages, setup autoresponders or setup a full automated email flow.<br /><br />GetResponse has a bunch of options to get you started on your online business.'
        },
        {
          id: 'Udimi',
          name: 'Udimi',
          logo: 'udimi.png',
          link: 'https://udimi.com/a/4wx8q',
          linkText: 'Buy your first solo ads today',
          description:
            'There are two main types of traffic you can get to your affiliate links. Free traffic and paid traffic. The most effective type of free traffic are SEO, but it can be a time consuming task to search engine optimize your blog where you have your affiliate links. One much faster method is paid traffic. Paid traffic can be pay-per-click like Microsoft Ads or Google Ads, but it can also be solo ads.<br />Solo ads are niche specific email campaign where you can send your affiliate link to a group of people interested in your niche.<br /><br > I will recommend you to use Udimi as your solo ads provider. Umidi us highly trusted and secure. When buying solo ads on Udimi your seller will not get paid until he/she has delivered your order. So if the seller for example only delivers 50% of the order, your will get a 50% refund.'
        },
        {
          id: 'PostEarly',
          name: 'PostEarly',
          logo: 'postearly.svg',
          link: 'https://postearly.com/a/68238',
          linkText: 'Start using PostEarly now',
          description:
            'One of the best ways to get free traffic is by using Instagram. An account with regular posts and stories will eventually build up a large amount of followers that could potentially be buyers of one of the products you are promoting.<br /><br />By using Postearly you can fully automate this process. You can set up scheduled posting, automatic following, automatic direct messaging and a lot more. And you can have multiple instagram accounts connected to your Postearly account and manage them in on place. Set up your a bunch of posts, schedule them and make Postearly manage them for you.'
        },
        {
          id: 'BuilderAll',
          name: 'BuilderAll',
          logo: 'builderall.png',
          link:
            'https://office.builderall.com/us/franchise/share/1250849/?sd=default_ilm&tid=makemoneyonlineninja',
          linkText: 'Start your FREE trial now',
          speciallogo: true,
          description:
            'BuilderAll is ultimate digital marketing tool packed with apps like a website builder, funnel builder, email automation, eCommerce and a lot more.<br /><br />A good digital marketing tool is essential to have a successful online business, like affiliate marketing, and this is where BuilderAll is the perfect tool. It have 5 different plans, including a FREE plan.<br />And you can start with a 14 day FREE trial.'
        },
        {
          id: 'TubeBuddy',
          name: 'TubeBuddy',
          logo: 'tubebuddy.png',
          link: 'https://www.tubebuddy.com/makemoneyonlineninja',
          linkText: 'Install now',
          description:
            'TubeBuddy is a FREE Google Chrome extension with a great variety of different tools that lets you fully optimize your YouTube videos, like a Keyword Explorer, Tag recommendations, SEO Optimizer etc.<br /><br />A great feature of TubeBuddy is the Bulk services, like Bulk Upload, Bulk Thumbnails etc. which lets TubeBuddy help you upload multiple videos at once.<br /><br />With TubeBuddy you can find the best optimized video title, descriptions and tags to help get your YouTube on top of the search results.'
        }
      ]
    }
  },
  head() {
    return {
      title: `Tools ← ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Tools for affiliate marketing ← ${this.$siteConfig.siteName}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.makemoneyonlineninja.com/uploads/how-to-make-money-online.jpg'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'To get the most success with affiliate marketing many different tools can be used, from email lists to tracking tools.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'To get the most success with affiliate marketing many different tools can be used, from email lists to tracking tools.'
        }
      ]
    }
  }
}
</script>
