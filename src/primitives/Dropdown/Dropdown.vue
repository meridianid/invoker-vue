<template>
  <div :class=$style.root>
    <select
      :id=id
      :name=name
      @input="updateValue($event.target.value)"
      :class="[
        !small && $style.normal,
        small && $style.small,
      ]"
    >
      <slot/>
    </select>
    <span v-if="arrow" aria-hidden :class=$style.arrowContainer>
      <img src="@/assets/images/icons/expand.svg" :class=$style.arrow>
    </span>
  </div>
</template>

<script>
export default {
  name: 'pdropdown',
  props: {
    arrow: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    value: {},
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" module>
  @import './Dropdown.scss';
</style>
