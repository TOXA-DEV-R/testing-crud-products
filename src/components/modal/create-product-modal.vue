<template>
  <q-dialog v-model="isCreateProductModal" persistent>
    <q-card
      style="max-width: 460px; width: 100%"
      class="q-py-sm q-px-lg q-pb-lg">
      <q-toolbar class="q-pa-none">
        <q-toolbar-title
          style="font-size: 1.2rem; font-weight: 700; color: #808080">
          Product Details
        </q-toolbar-title>
        <q-btn
          icon="close"
          round
          flat
          @click="closeCreateProductModal"
          style="color: #808080" />
      </q-toolbar>
      <q-form class="q-gutter-lg" @submit.prevent="send">
        <div>
          <label
            for="id-name"
            style="
              font-size: 1rem;
              line-height: 1.2rem;
              color: #808080;
              font-weight: 600;
            "
            >Name</label
          >
          <q-input
            id="id-name"
            v-model="prod.name"
            stack-label
            type="text"
            dense
            outlined
            style="margin-top: 5px" />
        </div>
        <div>
          <label
            for="id-cost"
            style="
              font-size: 1rem;
              line-height: 1.2rem;
              color: #808080;
              font-weight: 600;
            "
            >Cost</label
          >
          <q-input
            id="id-cost"
            v-model="prod.cost"
            stack-label
            type="number"
            dense
            outlined
            prefix="$"
            style="margin-top: 5px" />
        </div>
        <div>
          <label
            for="id-address"
            style="
              font-size: 1rem;
              line-height: 1.2rem;
              color: #808080;
              font-weight: 600;
            "
            >Address</label
          >
          <q-input
            id="id-address"
            v-model="prod.address"
            stack-label
            type="text"
            dense
            outlined
            style="margin-top: 5px" />
        </div>
        <div>
          <label
            for="id-created_date"
            style="
              font-size: 1rem;
              line-height: 1.2rem;
              color: #808080;
              font-weight: 600;
            "
            >Date</label
          >
          <q-input
            type="date"
            v-model="prod.date"
            outlined
            dense
            style="margin-top: 5px" />
        </div>
        <div v-if="error.length > 0" class="text-red text-subtitle2">
          {{ error }}
        </div>
        <div class="flex justify-between">
          <q-btn
            icon="close"
            label="Cancel"
            type="reset"
            color="red"
            class="q-pl-sm q-pr-md"
            @click="closeCreateProductModal" />
          <q-btn
            icon="done"
            label="Save"
            type="submit"
            color="primary"
            class="q-pl-sm q-pr-md" />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import useCreateProduct from "#composable/useCreateProduct";
import useProduc from "#composable/useProduc";
import { defineComponent } from "vue";
import ConfirmModal from "./confirm-modal.vue";
import { useStore } from "vuex";
import { storeKey } from "#store/index";

export default defineComponent({
  name: "create-product-modal",
  components: {
    ConfirmModal,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  setup() {
    const store = useStore(storeKey);

    const { isCreateProductModal, closeCreateProductModal } =
      useCreateProduct();

    const initialProd = {
      name: "",
      cost: 0,
      address: "",
      date: "",
    };

    const { prod, send, error } = useProduc("create", initialProd, () => {
      store.commit("refreshDate", true);

      setTimeout(() => {
        store.commit("refreshDate", false);
      }, 3000);
    });

    return {
      prod,
      send,
      isCreateProductModal,
      closeCreateProductModal,
      error,
    };
  },
});
</script>
