import { Data } from "#types/data";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    isDrawer: boolean;
    isCreateProductModal: boolean;
    isEditProductModal: boolean;
    editProduct: Data;
    isRefreshDate: boolean;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
