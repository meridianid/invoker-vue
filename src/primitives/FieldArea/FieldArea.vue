<template>
  <textarea
    :class="[
      !small && $style.normal,
      small && $style.small,
      disabled && $style.disabled,
      error && $style.critical,
    ]"
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    rows="4"
    v-model="fieldValue"
    />
</template>

<script>
export default {
  name: 'parea',
  props: {
    small: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
    id: {
      type: String,
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    value: {

    },
  },
  data() {
    return {
      fieldValue: this.value || ''
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss" module>
  @import './FieldArea.scss';
</style>
