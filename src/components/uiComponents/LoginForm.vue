<template>
  <v-snackbar
    v-model="snackbar"
    variant="tonal"
    :color="snackbarColor"
    location="top"
  >
    {{ snackbarText }}
    <v-progress-circular
      indeterminate
      model-value="70"
      color="#0a083a"
      class="ml-3"
    ></v-progress-circular>
  </v-snackbar>
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
          Змінити пароль
        </Button>
      </v-col>
      <v-col 
        cols="10"
        md="5"  
        align="right" 
        class="pt-0"
      >
        <Button 
          @click="onSubmit"
          variant="primary"
          class="w-100"
        >
          Вхід
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
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
      form: {
        login: '',
        password: '',
      }
    };
  },
  components: {
    Input,
    Button
  },
  methods: {
    async onSubmit() {
      try {
        this.snackbar = true;
        this.snackbarText = 'Виконується авторизація...';
        this.snackbarColor = 'info';

        const success = await this.$store.dispatch('login', {
          login: this.form.login,
          password: this.form.password
        });

        if (success) {
          console.log("Успішний вхід");
          this.snackbarText = 'Авторизація успішна!';
          this.snackbarColor = 'success';
          this.$router.replace({ name: 'home' });
        } else {
          console.log("Невірний логін або пароль");
          this.snackbarText = 'Невірний логін або пароль';
          this.snackbarColor = 'error';
          this.showError();
        }
      } catch (error) {
        console.error("Error during form validation or login:", error);
        this.snackbarText = 'Помилка авторизації';
      } finally {
        this.snackbar = false;
      }
    },

    changeIsLogin() {
      this.$emit('change-form');
    },
  },
}
</script>