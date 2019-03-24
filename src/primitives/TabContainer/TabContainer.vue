<template>
  <div :class="$style.root">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ptab-container',
  data() {
    return {

    };
  },
  props: {
  },
};
</script>

<style lang="scss" module>
  @import './TabContainer.scss';
</style>
