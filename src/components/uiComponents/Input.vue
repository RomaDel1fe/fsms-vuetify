<template>
  <v-text-field
    :type="passwordFieldType"
    v-model="internalValue"
    :label="label"
    rounded="lg"
    variant="outlined"
    :prepend-inner-icon="icon"
    :hide-details="hideDetails"
    :color="color"
    :bg-color="backgroundColor"
  >
    <template v-slot:append-inner>
      <slot name="append">
        <v-icon
          v-if="password"
          @click="togglePasswordVisibility"
        >
          {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
        </v-icon>
      </slot>
    </template>
  </v-text-field>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  name: 'InputField',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    password: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#0A083A',
    },
    hideDetails: {
      type: Boolean,
    },
    backgroundColor: {
      type: String,
      default: '#F5F9FD',
    },
  },
  setup(props, { emit }) {
    const showPassword = ref(false);
    const internalValue = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => {
      internalValue.value = newValue;
    });

    const passwordFieldType = computed(() => {
      return props.password && !showPassword.value ? 'password' : 'text';
    });

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    watch(internalValue, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return { internalValue, showPassword, togglePasswordVisibility, passwordFieldType };
  }
};
</script>

<style scoped>


::v-deep input:-webkit-autofill,
::v-deep input:-webkit-autofill:hover, 
::v-deep input:-webkit-autofill:focus, 
::v-deep input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 50px #F5F9FD inset; /* Тут #F5F9FD - це колір вашого фону */
    -webkit-text-fill-color: #0A083A; /* Тут #000 - це колір вашого тексту */
    transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
}

/* Якщо вам потрібно підтримувати Firefox */
::v-deep input:-moz-autofill,
::v-deep input:-moz-autofill:hover,
::v-deep input:-moz-autofill:focus,
::v-deep input:-moz-autofill:active {
    box-shadow: 0 0 0 50px #F5F9FD inset;
    color: #0A083A;
}

</style>
