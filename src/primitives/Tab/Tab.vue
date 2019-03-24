<template>
  <div
    @click="$emit('click')"
    @mouseover="hover = true"
    @mouseout="hover = false"
    :class="[
      $style.tab,
      hover && $style.hover,
      active && $style.active
    ]">
    <ptext type="heading5" :class="$style.text" tag="span">
      <slot/>
    </ptext>
  </div>
</template>

<script>
export default {
  name: 'ptab',
  props: {
    active: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      hover: false
    };
  },
};
</script>

<style lang="scss" module>
  @import './Tab.scss';
</style>
