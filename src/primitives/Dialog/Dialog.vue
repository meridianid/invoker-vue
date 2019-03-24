<template>
  <div :class="$style.root">
    <pcontainer narrow>
      <div style="margin: 64px 0;">
        <pbutton small secondaryAlt @click="$emit('close')">Back</pbutton>
        <slot />
      </div>
    </pcontainer>
  </div>
</template>

<script>
export default {
  name: 'pdialog',
  props: {
    setActive: {
      type: Function
    }
  },
  data() {
    return {

    };
  },
  mounted() {
    let body = document.querySelector('body')
    body.style.overflow = 'hidden'
  },
  beforeDestroy() {
    let body = document.querySelector('body')
    body.style.overflow = 'visible'
  },
};
</script>

<style lang="scss" module>
  .root {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFFFFF;
    z-index: 999999;
    overflow-y: scroll;
    will-change: transform;
  }
</style>
