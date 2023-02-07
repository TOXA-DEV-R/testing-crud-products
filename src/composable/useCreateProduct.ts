import { computed } from "vue";
import { useStore } from "vuex";
import { storeKey } from "#store/index";

export default () => {
  const store = useStore(storeKey);
  const isCreateProductModal = computed(() => store.state.isCreateProductModal);

  const openCreateProductModal = () => {
    store.commit("openCreateProductModal");
  };
  const closeCreateProductModal = () => {
    store.commit("closeCreateProductModal");
  };

  return {
    isCreateProductModal,
    openCreateProductModal,
    closeCreateProductModal,
  };
};
