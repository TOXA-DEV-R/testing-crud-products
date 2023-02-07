<template>
  <div>
    <q-header class="header" elevated>
      <q-toolbar class="bg-primary text-white shadow-2 q-py-sm q-px-lg">
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          class="q-mr-sm" />
        <q-separator dark vertical inset />

        <q-toolbar-title class="header__title">Products</q-toolbar-title>
        <q-space />
        <q-bar dense class="bg-transparent q-mr-lg">
          <q-btn flat round size="8.5px" icon="lens" color="red" />
          <q-btn flat round size="8.5px" icon="lens" color="yellow" />
          <q-btn flat round size="8.5px" icon="lens" color="green" />
        </q-bar>
        <q-select
          v-model="model"
          dense
          outlined
          :options="['EN', 'RU']"
          color="text-white"
          popup-content-class="text-grey-8"
          options-selected-class="bg-primary text-white"
          hide-dropdown-icon
          class="header__select">
          <template v-slot:append>
            <q-icon
              name="arrow_drop_down"
              color="white"
              style="margin-right: -5px" />
          </template>
          <template v-slot:selected>
            <q-item-section class="text-white">
              {{ model }}
            </q-item-section>
          </template>
        </q-select>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model:model-value="drawer"
      show-if-above
      :width="300"
      :breakpoint="400"
      class="shadow-0">
      <template #default>
        <div class="q-py-lg q-pl-lg q-pr-sm" style="height: 100%">
          <div
            class="shadow-1"
            style="
              height: 100%;
              border-radius: 15px;
              overflow-y: auto;
              overflow-x: hidden;
            ">
            <q-img
              src="https://picsum.photos/150/150"
              style="
                height: 150px;
                border-top-right-radius: 15px;
                border-top-left-radius: 15px;
              ">
              <div class="absolute-bottom full-height">
                <q-avatar size="56px" class="q-mb-sm">
                  <img src="https://picsum.photos/56/56" />
                </q-avatar>

                <div class="text-weight-bold">Tohir Bobojonov</div>
                <div>@tohir_bj</div>
              </div>
            </q-img>

            <q-list padding>
              <q-item clickable v-ripple to="/">
                <q-item-section avatar>
                  <q-icon name="grid_view" />
                </q-item-section>
                <q-item-section> Products </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/product-types">
                <q-item-section avatar>
                  <q-icon name="format_shapes" />
                </q-item-section>
                <q-item-section> Product types </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </template>
    </q-drawer>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const drawer = ref(false);

    const model = ref("EN");

    return {
      drawer,
      model,
    };
  },
});
</script>

<style lang="scss">
.header {
  &__title {
    font-size: 1.5rem;
  }

  &__select {
    max-width: 70px;
    width: 100%;
    border: 1.5px solid white;
    border-radius: 5px;
    outline: none;

    .q-field__control::before {
      border: none !important;
    }
  }
}
</style>
