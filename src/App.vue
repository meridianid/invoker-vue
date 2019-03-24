<template>
  <div id="app">
    <ptext
      type="display1"
      tag="h1"
      :class=$style.title
      >
      this is<br>Tinker.vue
    </ptext>
    <ptext type="heading5">made with ❤️by meridian.id</ptext>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/invoker-tokens/index.scss';

#app {
  font-family: $font-primary;
  box-sizing: border-box;
  text-align: center;
  display: inline-flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>

<style lang="scss" module>
  @import '@/assets/scss/invoker-tokens/index.scss';

  .title {
    padding-bottom: 24px;
    color: #FFFFFF;
    font-weight: 800;
    box-decoration-break: clone;
    background-image: linear-gradient(to right, $brand-secondary-100, #F5C55A);
    // #EE726F #F5BB64 #ff8a00 #da1b60 #53B499
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
