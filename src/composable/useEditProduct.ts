import { computed } from "vue";
import { useStore } from "vuex";
import { storeKey } from "#store/index";
import { Data } from "#types/data";

export default () => {
  const store = useStore(storeKey);
  const isEditProductModal = computed(() => store.state.isEditProductModal);

  const openEditProductModal = (prod: Data) => {
    store.commit("setProduct", prod);
    store.commit("openEditProductModal");
  };
  const closeEditProductModal = () => {
    store.commit("closeEditProductModal");
  };

  return {
    isEditProductModal,
    openEditProductModal,
    closeEditProductModal,
  };
};
