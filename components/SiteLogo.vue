<template>
  <div class="logo-wrapper">
    <span>MakeMoneyOnline Ninja</span>
  </div>
</template>
<script>
export default {
  name: 'SiteLogo',
  data() {
    return {
      frames: 5,
      currentFrame: 1,
      blinking: true
    }
  },
  mounted() {
    setInterval(() => {
      const rand = Math.ceil(Math.random() * 10)
      this.blinking = rand % 2
    }, 1000)
  }
}
</script>
<style lang="scss">
@keyframes logoBlink {
  100% {
    transform: translateY(-360px);
  }
}
.logo-wrapper {
  position: relative;
  height: 50px;
  overflow: hidden;
  width: 250px;
  display: flex;
  align-items: center;
  font-weight: bold;

  span {
    display: block;
    background-image: url('~@/static/ninja.svg');
    background-repeat: no-repeat;
    background-size: contain;
    padding-left: 30px;
  }
}
</style>
