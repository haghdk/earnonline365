<template>
  <div id="tools" class="page-wrapper tools-page content-page">
    <site-hero
      title="Tools & Resources"
      image="/uploads/how-to-make-money-online.jpg"
    ></site-hero>

    <main-section>
      <template v-slot:default>
        <div class="column is-8 is-offset-2">
          <div class="content">
            <h1>Tools</h1>

            <p>
              To get the most success with affiliate marketing many different
              tools can be used, from email lists to tracking tools.
            </p>

            <p>In this section you can find some of the tools I recommend.</p>

            <div id="toolsList">
              <div id="getResponse" class="tool">
                <h3>GetResponse</h3>

                <a
                  href="https://affiliates.getresponse.com/material/hit/210/pEkMFNHHwP"
                >
                  <img
                    src="@/static/logos/getresponse.svg"
                    alt="Responsive Landing Page Templates"
                    class="logo"
                /></a>

                <p>
                  One of the most important parts of building an online business
                  is to collect emails. <br />With emails you will be able to
                  promote services or products to a large group of people
                  interested in your specific niche.<br />
                  The best tool to do this in my opinion is GetResponse. With
                  GetResponse you can build email lists, create squeeze pages,
                  setup autoresponders or setup a full automated email flow.

                  <br /><br />
                  GetResponse has a bunch of options to get you started on your
                  online business.

                  <a
                    href="https://www.getresponse.com/?a=pEkMFNHHwP&c=makemoneyonlineninjatools"
                    class="read-more"
                    >Claim your 30 day free trial</a
                  >
                </p>
              </div>

              <div id="getResponse" class="tool">
                <h3>Udimi</h3>

                <a href="https://udimi.com/a/4wx8q">
                  <img
                    src="@/static/logos/udimi.png"
                    alt="Udimi Solo Ads"
                    class="logo"
                /></a>

                <p>
                  There are two main types of traffic you can get to your
                  affiliate links. Free traffic and paid traffic. The most
                  effective type of free traffic are SEO, but it can be a time
                  consuming task to search engine optimize your blog where you
                  have your affiliate links. One much faster method is paid
                  traffic. Paid traffic can be pay-per-click like Microsoft Ads
                  or Google Ads, but it can also be solo ads.<br />
                  Solo ads are niche specific email campaign where you can send
                  your affiliate link to a group of people interested in your
                  niche.
                </p>

                <p>
                  I will recommend you to use Udimi as your solo ads provider.
                  Umidi us highly trusted and secure. When buying solo ads on
                  Udimi your seller will not get paid until he/she has delivered
                  your order. So if the seller for example only delivers 50% of
                  the order, your will get a 50% refund.
                </p>

                <a href="https://udimi.com/a/4wx8q" class="read-more"
                  >Buy your first solo ads today</a
                >
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
export default {}
</script>
