<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn 
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseLeave"
      :disabled="disabled"
      :color="buttonColor"
      :dark="isDark"
      :light="isLight"
      :elevation="getElevation(hover)"
      :to="to"
      rounded
      class="fw-4"
      v-bind="$attrs"
    >
      <v-icon v-if="prependIcon" :color="iconColor" size="20" class="mr-2">{{ prependIcon }}</v-icon>
      <span :style="{ 'text-transform': isCapsLock ? 'uppercase' : 'none' }">
        <slot></slot>
      </span> 
      <v-icon v-if="appendIcon" :color="iconColor" size="20" class="ml-2">{{ appendIcon }}</v-icon>
    </v-btn>
  </v-hover>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prependIcon: {
      type: String,
      default: null
    },
    appendIcon: {
      type: String,
      default: null
    },
    to: [String, Object]
  },
  setup(props) {
    const pressed = ref(false);

    const handleMouseDown = () => { pressed.value = true; };
    const handleMouseUp = () => { pressed.value = false; };
    const handleMouseLeave = () => { pressed.value = false; };

    const isCapsLock = computed(() => !props.prependIcon && !props.appendIcon);
    const buttonColor = computed(() => props.variant === 'primary' ? '#0A083A' : '#F5F9FD');
    const isDark = computed(() => props.variant === 'primary' && !props.disabled);
    const isLight = computed(() => props.variant === 'secondary');
    const iconColor = computed(() => props.variant === 'primary' ? '#F5F9FD' : '#0A083A');

    const getElevation = (hover) => {
      return pressed.value ? 0 : (hover ? 4 : 0);
    };

    return {
      handleMouseDown,
      handleMouseUp,
      handleMouseLeave,
      isCapsLock,
      buttonColor,
      isDark,
      isLight,
      iconColor,
      getElevation,
      pressed
    };
  }
}
</script>

<style scoped>
::v-deep .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #0A083A !important;
}
.fw-4{
  font-weight: 400;
}

</style>
