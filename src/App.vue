<template>
    <div class="m-auto flex justify-center mt-5 max-w-5xl">
        <div class="flex flex-col justify-center">
            <div class="flex items-center">
                <img width="50" src="./assets/logo.png" />
                <h1 class="text-4xl text-gray-600">+</h1>
                <img width="200" class="ml-3" src="https://ruangapi.com/assets/images/logo.png" alt />
            </div>

            <div class="flex space-x-3 mt-5">
                <div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >Nama Lengkap</label>
                                            <input
                                                type="text"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >No Telpon</label>
                                            <input
                                                type="number"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-4">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >Alamat</label>
                                            <input
                                                type="text"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >Provinsi</label>
                                            <select
                                                v-model="province_id"
                                                @change="getCity"
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Pilih Provinsi</option>
                                                <option
                                                    v-for="item in getAllProvince"
                                                    :key="item.id"
                                                    :value="item.id"
                                                >{{ item.name }}</option>
                                            </select>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >Kota/Kabupaten</label>
                                            <select
                                                @change="getDistrict"
                                                v-model="city_id"
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Pilih Kota/Kabupaten</option>
                                                <option
                                                    v-for="item in getAllCities"
                                                    :key="item.id"
                                                    :value="item.id"
                                                >{{ item.name }}</option>
                                            </select>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >Kecamatan</label>
                                            <select
                                                @change="getCourier"
                                                v-model="district_id"
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Pilih Kecamatan</option>
                                                <option
                                                    v-for="item in getAllDisctricts"
                                                    :key="item.id"
                                                    :value="item.id"
                                                >{{ item.name }}</option>
                                            </select>
                                        </div>

                                        <div class="col-span-6 sm:col-span-5">
                                            <label
                                                class="block text-sm font-medium text-gray-700"
                                            >Kurir</label>
                                            <select
                                                v-model="courier"
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option
                                                    v-for="(item, index) in getAllCouriers"
                                                    :key="index"
                                                    :value="item"
                                                >{{ item.courier }} {{ item.service }} - Rp. {{ item.cost }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- component summary -->
                <div>
                    <Summary :courier="courier" />
                </div>
                <!-- end of component summary -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
import Summary from "./components/Summary";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "App",
    components: {
        Summary
    },
    data() {
        return {
            province_id: "",
            city_id: "",
            district_id: "",
            courier: ""
        };
    },

    computed: {
        ...mapGetters([
            "getAllProvince",
            "getAllCities",
            "getAllDisctricts",
            "getAllCouriers"
        ])
    },

    created() {
        this.fetchProvinces();
    },

    methods: {
        ...mapActions(["fetchProvinces", "getCities", "getDistricts", "getCouriers"]),

        getCity() {
            this.getCities(this.province_id);
        },

        getDistrict() {
            this.getDistricts(this.city_id)
        },

        getCourier() {
            this.getCouriers(this.district_id)
        }
    }
};
</script>
