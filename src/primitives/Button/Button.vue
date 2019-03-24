<template>
  <button
    @click="$emit('click')"
    :type="type || 'button'"
    :class="[
      small && $style.small,
      !small && $style.large,
      small && secondaryAlt && $style.smallAlt,
      !small && secondaryAlt && $style.largeAlt,
      primary && $style.primary,
      primaryAlt && $style.primaryAlt,
      !primary && !primaryAlt && $style.secondary,
      secondaryAlt && $style.secondaryAlt,
      stretch && $style.stretch,
    ]"
    >
    <span :class="$style.children">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'pbutton',
  data() {
    return {

    };
  },
  props: {
    type: {
      type: String,
    },
    stretch: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    primary: {
      type: Boolean,
    },
    primaryAlt: {
      type: Boolean,
    },
    secondary: {
      type: Boolean,
    },
    secondaryAlt: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" module>
  @import './Button.scss';
</style>
