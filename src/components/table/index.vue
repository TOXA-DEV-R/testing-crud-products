<template>
  <q-table
    :rows="rows"
    class="full-width"
    :pagination="pagination"
    :columns="[
      {
        name: 'name_uz',
        required: true,
        label: 'Name',
        align: 'left',
        field: 'name_uz',
        sortable: true,
      },
      {
        name: 'cost',
        required: true,
        label: 'Cost',
        align: 'left',
        field: 'cost',
        sortable: true,
      },
      {
        name: 'address',
        required: true,
        label: 'Address',
        align: 'left',
        field: 'address',
        sortable: true,
      },
      {
        name: 'created_date',
        required: true,
        label: 'Date',
        align: 'left',
        field: 'created_date',
        sortable: true,
      },
      {
        name: 'edit',
        label: '',
        align: 'left',
        field: '',
        sortable: true,
      },
    ]"
    row-key="id"
    selection="multiple"
    :rows-per-page-options="[10]"
    v-model:selected="selected">
    <template #top>
      <div class="q-gutter-lg text-white">
        <q-btn
          label="New"
          icon="add"
          color="green"
          @click="openCreateProductModal" />
        <q-btn label="Delete" icon="delete" color="red" />
      </div>
    </template>
    <template #body-cell-edit="props">
      <q-td>
        <q-btn
          class="bg-green"
          color="white"
          round
          icon="edit"
          size="0.7rem"
          @click="() => getProductId(props.key)" />
        <q-btn
          class="bg-red q-ml-lg"
          color="white"
          round
          icon="delete"
          size="0.7rem"
          @click="() => deleteProduct(props.key)" />
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed } from "vue";
import { Data } from "#types/data";
import useCreateProduct from "#composable/useCreateProduct";
import api from "#api/axios";
import useEditProduct from "#composable/useEditProduct";
import { useStore } from "vuex";
import { storeKey } from "#store/index";

export default defineComponent({
  name: "Table",
  setup() {
    const store = useStore(storeKey);

    const isRefreshDate = computed(() => store.state.isRefreshDate);

    const selected = ref<Data[]>([]);

    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
    });

    const { openCreateProductModal } = useCreateProduct();

    const rows = ref<Data[]>([]);

    const { openEditProductModal } = useEditProduct();

    const getProductId = async (id: string) => {
      const val = rows.value.find((item) => item.id === parseInt(id, 10));

      if (val) {
        openEditProductModal(val);
      }
    };

    const deleteProduct = (id: string) => {
      api
        .delete(`/api/product/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      fetchData();
    };

    async function fetchData() {
      api
        .get("/api/product")
        .then((res) => {
          console.log(res, "a");
          rows.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    onMounted(fetchData);

    watch(isRefreshDate, () => {
      if (isRefreshDate.value === true) {
        fetchData();
      }
    });

    return {
      rows,
      selected,
      pagination,
      openCreateProductModal,
      getProductId,
      deleteProduct,
    };
  },
});
</script>
