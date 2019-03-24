<template>
  <div :class="[
      $style.root,
      !transparent && $style.normal,
      transparent && $style.transparent,
      !small && !large && !smedium && !mlarge && $style.medium,
      small && $style.small,
      smedium && $style.smedium,
      mlarge && $style.mlarge,
      large && $style.large,
    ]" />
</template>

<script>
export default {
  name: 'pdivider',
  props: {
    small: {
      type: Boolean,
    },
    smedium: {
      type: Boolean,
    },
    mlarge: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    transparent: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" module>
  @import '@/assets/scss/invoker-tokens/index.scss';

  .root {
    width: 100%;
    height: 1px;
  }
  .normal {
    background: $dark-alpha-20;
  }
  .transparent {
    background: transparent;
  }
  .small {
    margin-top: $space-sm;
    margin-bottom: $space-sm;
  }
  .smedium {
    margin-top: $space-m;
    margin-bottom: $space-m;
  }
  .medium {
    margin-top: $space-ml;
    margin-bottom: $space-ml;
  }
  .mlarge {
    margin-top: $space-l;
    margin-bottom: $space-l;
  }
  .large {
    margin-top: $space-ll;
    margin-bottom: $space-ll;
  }
</style>
