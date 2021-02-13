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
                                                @change="getCities"
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Pilih Provinsi</option>
                                                <option
                                                    v-for="item in provinces"
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
                                                @change="getDistricts"
                                                v-model="city_id"
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Pilih Kota/Kabupaten</option>
                                                <option
                                                    v-for="item in cities"
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
                                                    v-for="item in districts"
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
                                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                            <option v-for="(item, index) in couriers" :key="index" :value="item">
                                                {{ item.courier }} {{ item.service }} - Rp. {{ item.cost }}
                                            </option>
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
                    <Summary />
                </div>
                <!-- end of component summary -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
import Summary from "./components/Summary";
export default {
    name: "App",
    components: {
        Summary
    },
    data() {
        return {
            provinces: [],
            province_id: "",
            cities: [],
            city_id: "",
            districts: [],
            district_id: "",
            couriers: [],
            courier: ""
        };
    },

    created() {
        this.getPorvinces();
    },

    methods: {
        // ambil data provinsi
        async getPorvinces() {
            try {
                const response = await axios.get(
                    "https://ruangapi.com/api/v1/provinces",
                    {
                        headers: {
                            Authorization: this.$store.state.api_key
                        }
                    }
                );
                if (response.status === 200) {
                    this.provinces = response.data.data.results;
                }
            } catch (e) {
                console.log(e);
            }
        },

        // ambil data kota/kabupaten
        async getCities() {
            try {
                const response = await axios.get(
                    "https://ruangapi.com/api/v1/cities",
                    {
                        params: {
                            province: this.province_id
                        },
                        headers: {
                            Authorization: this.$store.state.api_key
                        }
                    }
                );
                if (response.status === 200) {
                    this.cities = response.data.data.results;
                }
            } catch (e) {
                console.log(e);
            }
        },

        // ambil data kecamatan
        async getDistricts() {
            try {
                const response = await axios.get(
                    "https://ruangapi.com/api/v1/districts",
                    {
                        params: {
                            city: this.city_id
                        },
                        headers: {
                            Authorization: this.$store.state.api_key
                        }
                    }
                );
                if (response.status === 200) {
                    this.districts = response.data.data.results;
                }
            } catch (e) {
                console.log(e);
            }
        },

        // kurir
        getCourier() {
            axios
                .post(
                    "https://ruangapi.com/api/v1/shipping",
                    {
                        origin: 402, // kota/kabupaten pengirim
                        destination: this.district_id, // tujuan pengiriman (kecamatan)
                        weight: 800,
                        courier: "jnt,tiki"
                    },
                    {
                        headers: {
                            "Authorization": this.$store.state.api_key,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                )
                .then(result => {
                    console.log(result);
                    this.couriers = result.data.data.results
                })
                .catch(err => {
                    console.log(err);
                });
            // if (response.status === 200) {
            //   this.couriers = response.data.data.results;
            // }
        }
    }
};
</script>
