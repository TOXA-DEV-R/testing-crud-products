import { InjectionKey, State } from "vue";
import { createStore, Store } from "vuex";
import actions from "./modules/actions";
import mutations from "./modules/mutations";
import getters from "./modules/getters";
import state from "./modules/state";

export const storeKey: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state,
  actions,
  mutations,
  getters,
});

export default store;
