<template>
  <v-form 
    ref="loginForm" 
  >
    <v-row justify="center">
      <v-col 
        cols="10"
        md="10"
        align="center"
        class="mb-2"
      >
        <h2 class="form__title">
          Авторизація
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col 
        cols="10"
        md="10"
        align="center"
        class="pb-1"
      >
        <Input
          v-model="form.login"
          label="Логін"
          icon="mdi-account-circle-outline"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col 
        cols="10"
        md="10"
        align="center"
        class="pb-1"
      >
        <Input
          v-model="form.password"
          password
          label="Пароль"
          icon="mdi-lock-outline"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col 
        cols="10"
        md="10"
        align="center"
        class="pb-1"
      >
        <Input
          v-model="form.nPassword"
          password
          label="Новий пароль"
          icon="mdi-lock-outline"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col 
        cols="10"
        md="10"
        align="center"
        class="pb-1"
      >
        <Input
          v-model="form.cPassword"
          password
          label="Підтвердження паролю"
          icon="mdi-lock-outline"
        />
      </v-col>
    </v-row>
    <v-row justify="center" class="pb-6">
      <v-col 
        cols="10"
        md="5"  
        align="left" 
        class="pt-0"
      >
        <Button 
          @click="changeIsLogin"
          variant="secondary"
          class="w-100"
        >
          скасувати
        </Button>
      </v-col>
      <v-col 
        cols="10"
        md="5"  
        align="right" 
        class="pt-0"
      >
        <Button 
          @click="changeIsLogin"
          variant="primary"
          class="w-100"
        >
          Змінити
        </Button>
      </v-col>
    </v-row>
    <!-- <v-row justify="center">
      <v-col cols="12" align="center" class="pt-0">
        <v-tooltip 
          location="bottom"
          color="error">
          <template v-slot:activator="{ props, on }">
            <v-chip
              v-bind="props"
              v-on="on"
              class="hint_chip"
              :class="error ? 'transparent-chip' : 'hidden-chip'"
              color="error"
            >
              <v-icon small class="mr-1">
                mdi-alert-circle-outline
              </v-icon>
              Підказка
            </v-chip>
          </template>
          <span>Помилка</span>
        </v-tooltip>
      </v-col>
    </v-row> -->
  </v-form>
</template>

<script>
import Input from './Input.vue'
import Button from './Button.vue'

export default {
  data() {
    return {
      form: {
        login: '',
        password: '',
        nPassword: '',
        cPassword:'',
      }
    };
  },
  components: {
    Input,
    Button
  },
  methods: {

    changeIsLogin() {
      this.$emit('change-form');
    },
  },
}
</script>