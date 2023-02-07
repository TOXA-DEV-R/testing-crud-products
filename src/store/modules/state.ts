import { State } from "vue";

const state: State = {
  isDrawer: true,
  isCreateProductModal: false,
  isEditProductModal: false,
  isRefreshDate: false,
  editProduct: {
    id: 0,
    product_type_id: 1,
    name_uz: "",
    cost: 0,
    address: "",
    created_date: 0,
  },
};

export default state;
