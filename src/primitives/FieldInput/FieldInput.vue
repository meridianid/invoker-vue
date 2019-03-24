<template>
  <input
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
    :value="value"
    @input="updateValue($event.target.value)"
    :required=required
    :autofocus=autofocus
    />
</template>

<script>
export default {
  name: 'pinput',
  computed: {},
  props: {
    autofocus: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    required: {
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
    value: {},
  },
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" module>
  @import './FieldInput.scss';
</style>
