<template>
  <ptext :for=id tag="label" type="heading5" :class="$style.root">
    <slot/>
    <ptext type="medium" style="margin-bottom: 0px;">
      {{ secondary }}
    </ptext>
  </ptext>
</template>

<script>
export default {
  name: 'plabel',
  props: {
    id: {
      type: String,
    },
    secondary: {
      type: String,
    }
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" module>
  .root {
    cursor: pointer;
    margin-bottom: 8px;
  }
</style>
