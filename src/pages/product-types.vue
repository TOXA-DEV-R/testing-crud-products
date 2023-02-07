<template>
  <q-page padding>
    <table-product-types />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableProductTypes from "#components/table/table-product-types.vue";

export default defineComponent({
  name: "product-types",
  components: {
    TableProductTypes,
  },
  setup() {},
});
</script>

<style></style>
