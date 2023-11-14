<template>
  <v-app-bar
    app
    elevation="0"
    class="header"
  >
    <template v-slot:prepend >
      <v-btn 
        v-if="isLoggedIn"
        class="pa-0"
        color="#DEEAF8" 
        icon="mdi-menu"
        rounded="lg"
        variant="flat"
        @click="toggleMiniVariant"
      >

      </v-btn>
      <v-app-bar-title class="ml-4">Title</v-app-bar-title>
    </template>


    <template v-slot:append>
      <v-menu
        v-if="isLoggedIn"
        offset="15"
        class="rounded-xl"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
            <v-avatar
              color="info"
            >
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card 
          rounded="xl"
        >
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar
                color="info"
              >
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                rounded
                variant="text"
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                rounded
                variant="text"
                @click="logout"
              >
                Disconnect
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
      <v-menu 
        v-else
        offset="15"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="#E9F1FC"
            variant="flat"
            elevation="2"
            class="ma-1"
            icon
            v-bind="props"
          >
            <v-icon>
              mdi-translate-variant
            </v-icon>
          </v-btn>
        </template>
        <v-list
          rounded="xl"
        >
          <v-list-item 
            v-for="(item, index) in menuItems" 
            :key="index" 
            @click="item.method" 
            lines="one"
          > 
            <v-list-item-title>
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
          <v-divider v-if="index < menuItems.length - 1" :key="`divider-${index}`"></v-divider>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script>
import { useSidebar } from '@/composables/useSidebar';
import { reactive } from 'vue';

export default {
  data() {
    return {
      menuItems: [
        {
          title: 'Українська',
          icon: 'mdi-flag',
          method: () => this.changeLanguage('uk'),
          divider: true
        },
        {
          title: 'Англійська',
          icon: 'mdi-flag',
          method: () => this.changeLanguage('en'),
          divider: false
        }
        // Додайте інші пункти меню за потребою
      ]
    };
  },
  setup() {
    const user = reactive({
      initials: 'RD',
      fullName: 'Roma Denysiuk',
      email: 'romadenisyuk@doe.com',
    });

    const { toggleMiniVariant } = useSidebar();
    
    return { user, toggleMiniVariant };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    }
  },
  methods:{
    logout() {
      this.$store.commit('setLogin', false);
      this.$router.push('/authentication');
    },
    changeLanguage(lang) {
    console.log("Мова змінена на: " + lang);
    // Реалізуйте функціонал зміни мови
  },
  }
};
</script>

<style scoped>
.header{
  border-bottom: 1px solid #EEF0F3 !important;
}
</style>