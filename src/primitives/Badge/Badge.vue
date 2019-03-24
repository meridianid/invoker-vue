<template>
  <component
    :is="badge"
    :class="[
      $style.root,
      primary && !secondary && $style.primary,
      small && !large && $style.small,
      large && $style.large,
      secondary && $style.secondary,
      circle && $style.circle,
      ]"
    >
    <span :class="$style.text">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: 'pabdge',
  data() {
    return {
      badge: '',
    };
  },
  mounted() {
    this.badge = this.tag || 'span'
  },
  props: {
    tag: {
      type: String,
    },
    primary: {
      type: Boolean,
    },
    secondary: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" module>
  @import './Badge.scss';
</style>
