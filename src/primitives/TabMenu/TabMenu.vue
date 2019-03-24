<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ptab-menu',
  data() {
    return {

    };
  },
  props: {
  },
};
</script>

<style lang="scss" module>
  @import './TabMenu.scss';
</style>
