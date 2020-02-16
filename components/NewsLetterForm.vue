<template>
  <div>
    <form
      target="_blank"
      method="post"
      action="https://app.getresponse.com/add_subscriber.html"
      @submit="$emit('submit', email)"
    >
      <div class="field has-addons is-fullwidth">
        <p class="control has-icons-left">
          <input
            v-model="email"
            class="input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="envelope" />
            <i class="fas fa-envelope"></i>
          </span>
        </p>
        <input type="hidden" name="campaign_token" value="8vjW7" />
        <div class="control">
          <button type="submit" class="button is-primary">
            {{ $siteConfig.newsletter.btnText || 'Subscribe' }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  computed: {
    formAction() {
      if (this.$siteConfig.newsletter.mailchimp.on) {
        return this.$siteConfig.newsletter.mailchimp.formAction
      }
      return this.$siteConfig.newsletter.other.formAction
    }
  }
}
</script>
