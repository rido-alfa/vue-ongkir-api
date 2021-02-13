import axios from "axios";

const state = {
	provinces: [],
	cities: [],
	districts: [],
	couriers: [],
};

const getters = {
	getAllProvince: (state) => state.provinces,
	getAllCities: (state) => state.cities,
	getAllDisctricts: (state) => state.districts,
	getAllCouriers: (state) => state.couriers,
};

const actions = {
	async fetchProvinces({ commit, rootState }) {
		const response = await axios.get("https://ruangapi.com/api/v1/provinces", {
			headers: {
				Authorization: rootState.api_key,
			},
		});
		commit("setProvinces", response.data.data.results);
	},

	async getCities({ commit, rootState }, payload) {
		const response = await axios.get("https://ruangapi.com/api/v1/cities", {
			params: {
				province: payload,
			},
			headers: {
				Authorization: rootState.api_key,
			},
		});
		commit("setCities", response.data.data.results);
	},

	async getDistricts({ commit, rootState }, payload) {
		const response = await axios.get("https://ruangapi.com/api/v1/districts", {
			params: {
				city: payload,
			},
			headers: {
				Authorization: rootState.api_key,
			},
		});
		commit("setDistricts", response.data.data.results);
	},

	async getCouriers({ commit, rootState }, payload) {
		const response = await axios.post(
			"https://ruangapi.com/api/v1/shipping",
			{
				origin: 402, // kota/kabupaten pengirim
				destination: payload, // tujuan pengiriman (kecamatan)
				weight: 800,
				courier: "jnt,tiki",
			},
			{
				headers: {
					Authorization: rootState.api_key,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		commit('setCouriers', response.data.data.results)
	},
};

const mutations = {
	setProvinces: (state, response) => {
		state.provinces = response;
	},
	setCities: (state, response) => (state.cities = response),
	setDistricts: (state, response) => (state.districts = response),
	setCouriers: (state, response) => (state.couriers = response),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
