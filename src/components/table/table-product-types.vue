<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      row-key="id"
      :visible-columns="['name_uz', 'name_ru', 'name_uk', 'description']">
      <template #top>
        <q-item-section class="q-mt-lg q-mb-sm">
          <div style="font-size: 1.2rem; font-weight: 600">Product Types</div>
        </q-item-section>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import api from "#api/axios";
import { GetProuctTypes } from "#types/data";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "table-product-types",
  setup() {
    const rows = ref<GetProuctTypes[]>([]);

    async function fetchData() {
      api
        .get("/api/product/get-product-types")
        .then((res) => {
          rows.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    onMounted(fetchData);

    return { rows };
  },
});
</script>
