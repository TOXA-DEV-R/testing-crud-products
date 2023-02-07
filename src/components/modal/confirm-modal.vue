<template>
  <q-dialog v-model="isConfirm">
    <q-card style="max-width: 400px">
      <q-card-section>{{ title }}</q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "confirm-modal",
  props: {
    title: {
      type: String,
      required: true,
    },
    isConfirmPer: {
      type: Boolean,
      default: false,
    },
  },
  setup: ({ isConfirmPer }) => {
    const isConfirm = ref(true);

    watch(
      () => isConfirmPer,
      () => {
        console.log(isConfirmPer);
      }
    );
    return {
      isConfirm,
    };
  },
});
</script>

<style></style>
