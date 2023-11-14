<template>  
  <v-row justify="center" align="center" class="fill-height ">
    <v-col cols="12" sm="10" md="8" lg="6" xl="5" align="center">
      <v-card
        rounded="xl"
        max-width="450px"
        width="90%"
        color="#DEEAF8"
        elevation="0"
      >
        <v-container
        class="pt-10 pb-5"
        >
          <LoginForm 
            v-if="!isLogin"
            @change-form="switchForm"
          />
          <RePassForm 
            v-else
            @change-form="switchForm"
          />
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from '../components/uiComponents/LoginForm.vue'
import RePassForm from '../components/uiComponents/RePassForm.vue'

export default {
  data() {
    return {
      isLogin: false,
      form: {
        login: '',
        password: '',
      }
    };
  },
  components: {
    LoginForm,
    RePassForm
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    switchForm() {
      // Змінюємо значення isLogin
      this.isLogin = !this.isLogin;
    }
  },
}
</script>