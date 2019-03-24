<template>
  <component
    :is="htmlTag"
    :class="[
      $style[type],
      $style[wrap],
      link && $style.link,
      ]">
    <span>
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'ptext',
  data: () => ({
    htmlTag: '',
  }),
  mounted() {
    this.htmlTag = this.tag || 'span';
  },
  props: {
    link: {
      type: Boolean,
    },
    tag: {
      type: String,
      required: false,
      default: 'span',
    },
    type: {
      type: String,
      required: false,
    },
    wrap: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" module>
  @import './Text.scss';
</style>

