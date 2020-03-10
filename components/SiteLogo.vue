<template>
  <div class="logo-wrapper">
    <span>MakeMoneyOnline Ninja</span>
  </div>
</template>
<script>
export default {
  name: 'SiteLogo'
}
</script>
<style lang="scss">
.logo-wrapper {
  position: relative;
  height: 50px;
  overflow: hidden;
  width: 250px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85rem;

  span {
    display: flex;
    background-image: url('~@/static/ninja.svg');
    background-repeat: no-repeat;
    background-size: contain;
    padding-left: 50px;
    height: 40px;
    align-items: center;
  }
}
</style>
