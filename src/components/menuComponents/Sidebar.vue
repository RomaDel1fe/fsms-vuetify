<template>
  <v-navigation-drawer
    app
    :rail="miniVariant"
    :expand-on-hover="isHover"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    permanent
    border="0"
    rounded="lg"
    class="sidebar ma-2"
    color="#DEEAF8"
  >

    <v-list  nav>
      <v-list-item 
        :to="{ name: 'home' }"
        prepend-icon="mdi-home" 
        title="Home" 
        value="home"
      ></v-list-item>
      <v-list-item 
        :to="{ name: 'profile' }"
        prepend-icon="mdi-account" 
        title="Profile" 
        value="account"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref } from 'vue';
import { useSidebar } from '@/composables/useSidebar';

export default {
  setup() {
    const { miniVariant } = useSidebar();
    const isHover = ref(false);
    let hoverTimeout;

    const onMouseOver = () => {
      // Очищуємо попередній таймаут, якщо він був встановлений
      clearTimeout(hoverTimeout);
      // Встановлюємо таймаут для додавання затримки перед розгортанням сайдбару
      hoverTimeout = setTimeout(() => {
        isHover.value = true;
      }, 500); // Затримка 500 мс
    };

    const onMouseLeave = () => {
      // Очищуємо таймаут, коли миша покидає сайдбар
      clearTimeout(hoverTimeout);
      isHover.value = false;
    };

    return { miniVariant, isHover, onMouseOver, onMouseLeave };
  },
};
</script>

<style scoped>
.sidebar{
  height: auto !important;
  overflow-y: auto !important; /* Додаємо прокрутку, якщо контент не вміщається */
}
</style>
