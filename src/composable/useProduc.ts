import { Prod, Data } from "#types/data";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { storeKey } from "#store/index";

// api
import api from "#api/axios";

interface Props {
  create: Prod;
  edit: Data;
}

export default <N extends keyof Props>(
  name: N,
  initialProd: Prod,
  refreshDate?: () => void
) => {
  const prod = ref({ ...initialProd });

  const store = useStore(storeKey);
  const getProd = computed(() => store.state.editProduct);

  const error = ref("");

  const send = async () => {
    const product = prod.value;

    error.value = "";

    const isData =
      product.name.length > 2 &&
      product.cost &&
      product.address.length &&
      product.date.length > 6;

    if (!isData) {
      error.value = "Please fill in all information";
      return;
    }

    const date = new Date(product.date);
    let data:
      | (Omit<Data, "id" | "created_date"> & { created_date: string })
      | null
      | Data = null;

    if (name === "create") {
      data = {
        product_type_id: 1,
        name_uz: product.name,
        cost: product.cost,
        address: product.address,
        created_date: date.toISOString(),
      };

      api
        .post("/api/product", {
          ...data,
        })
        .then((res) => {
          console.log(res);
          if (res.data) {
            refreshDate?.();

            store.commit("closeCreateProductModal");
          }
        })
        .catch((err) => {
          error.value = "Please try again";
          console.log(err);
        })
        .finally(() => {
          prod.value = {
            name: "",
            cost: 0,
            address: "",
            date: "",
          };
        });
    }

    if (name === "edit") {
      data = {
        id: getProd.value.id,
        product_type_id: getProd.value.id,
        name_uz: product.name,
        cost: product.cost,
        address: product.address,
        created_date: date.toISOString(),
      };

      api
        .put("/api/product", {
          ...data,
        })
        .then((res) => {
          console.log(res);
          if (res.data) {
            refreshDate?.();
            store.commit("closeEditProductModal");
          }
        })
        .catch((err) => {
          error.value = "Please try again";
          console.log(err);
        })
        .finally(() => {
          prod.value = {
            name: "",
            cost: 0,
            address: "",
            date: "",
          };
        });
    }
  };

  return { prod, error, send };
};
