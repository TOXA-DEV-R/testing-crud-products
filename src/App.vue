<template>
  <q-layout
    view="hHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders">
    <Header />
    <create-product-modal v-if="isCreateProductModal" />
    <edit-product-modal v-if="isEditProductModal" />
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import Header from "#components/header/index.vue";
import CreateProductModal from "#components/modal/create-product-modal.vue";
import EditProductModal from "#components/modal/edit-product-modal.vue";
import { useStore } from "vuex";
import { storeKey } from "./store";

export default defineComponent({
  name: "App",
  components: {
    Header,
    CreateProductModal,
    EditProductModal,
  },
  setup() {
    const store = useStore(storeKey);

    const isCreateProductModal = computed(
      () => store.state.isCreateProductModal
    );
    const isEditProductModal = computed(() => store.state.isEditProductModal);

    return { isCreateProductModal, isEditProductModal };
  },
});
</script>

<style scoped></style>
