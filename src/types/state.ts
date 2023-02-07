import { State } from "vue";
import { ActionTree, MutationTree, GetterTree } from "vuex";

export type Actions = ActionTree<State, State> | undefined;
export type Mutations = MutationTree<State> | undefined;
export type Getters = GetterTree<State, State> | undefined;
