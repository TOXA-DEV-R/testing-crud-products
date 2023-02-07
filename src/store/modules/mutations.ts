import { Mutations } from "#types/state";

const mutations: Mutations = {
  toggleDrawer: (state) => {
    state.isDrawer = !state.isDrawer;
  },
  closeDrawer: (state) => {
    state.isDrawer = false;
  },
  openDrawer: (state) => {
    state.isDrawer = true;
  },
  openCreateProductModal: (state) => {
    state.isCreateProductModal = true;
  },
  closeCreateProductModal: (state) => {
    state.isCreateProductModal = false;
  },
  openEditProductModal: (state) => {
    state.isEditProductModal = true;
  },
  closeEditProductModal: (state) => {
    state.isEditProductModal = false;
  },
  setProduct: (state, payload) => {
    state.editProduct = payload;
  },
  refreshDate: (state, payload) => {
    state.isRefreshDate = payload;
  },
};

export default mutations;
