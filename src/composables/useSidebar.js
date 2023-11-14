import { ref } from 'vue';

// Сайдбар не потрібно приховувати, тому drawer нам не потрібен
const miniVariant = ref(true); // Сайдбар в міні-версії за замовчуванням

export function useSidebar() {
  // Функція для перемикання між міні-версією та повною версією
  const toggleMiniVariant = () => {
    miniVariant.value = !miniVariant.value;
  };

  return { miniVariant, toggleMiniVariant };
}
