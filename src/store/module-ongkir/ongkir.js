import axios from "axios";

const ongkir = {
  state: {
    api: "",
    kota: [],
  },
  action: {
    async getkota({ commit }) {
      try {
        const response = await axios.get("");
      } catch (e) {
        console.log(e);
      }
      commit("setKota", response.data);
    },
  },
  mutations: {
    setKota: (state, data) => {
      state.kota = data;
    },
  },
};
