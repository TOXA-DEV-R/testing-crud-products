<template>
  <q-page padding>
    <Table />
  </q-page>
</template>
<script lang="ts">
import { useMeta } from "quasar";
import Table from "#components/table/index.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Home",
  components: {
    Table,
  },
  setup: () => {
    useMeta({
      title: "Products",
    });
  },
});
</script>
<style lang="scss"></style>
