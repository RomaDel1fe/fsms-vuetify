<template>
  <v-app >
    <Header/>
    <Sidebar v-if="isLoggedIn"/>
    <v-main app>
      <v-container 
        fluid 
        class="h-100"
      > 
        {{ screenWidth }}
        <router-view rounded="lg"/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>

</template>


<script>
import Header from '@/components/menuComponents/Header'
import Sidebar from '@/components/menuComponents/Sidebar'
// import Footer from '@/components/menuComponents/Footer'

import { onMounted, onBeforeUnmount,  } from 'vue';
import { useStore, mapState } from 'vuex';

export default {
  name: 'App',
  components:{
    Header,
    Sidebar,
    // Footer,
  },
  computed: {
    ...mapState(['isLoading',]),
    isLoading(){
      return this.$store.getters.isLoading;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
    
  },
  setup() {
    const store = useStore();
    
    const updateScreenWidth = () => {
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;
      store.dispatch('screen/updateIsMobile', isMobile); // Використовуйте namespaced дію
    };

    onMounted(() => {
      updateScreenWidth(); // Встановіть початковий стан при маунті
      window.addEventListener('resize', updateScreenWidth);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateScreenWidth);
    });
  },
  methods: {
    
  },
}
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.form__title{
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #0a083a;
  text-align: center;
  text-transform: uppercase;
}
</style>
