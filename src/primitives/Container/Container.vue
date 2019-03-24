<template>
  <div :class="[$style[type]]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pcontainer',
  data() {
    return {
      type: '',
    };
  },
  mounted() {
    if (this.bleed) {
      this.type = 'bleed';
    } else {
      this.type = this.narrow ? 'narrow' : 'normal';
    }
  },
  props: {
    normal: {
      type: Boolean,
    },
    narrow: {
      type: Boolean,
      default: false,
    },
    bleed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
  @import './Container.scss'
</style>
