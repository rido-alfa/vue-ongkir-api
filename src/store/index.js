import { createStore } from "vuex";

import ongkir from "./module-ongkir/ongkir";

export default createStore({
  state: {
    api_key: "",
  },
  modules: {
    ongkir,
  },
});
