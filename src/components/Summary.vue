<template>
    <div class="sm:-mx-6 lg:-mx-8">
        <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >product</th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >qty</th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >harga</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">Jaket Hoodie</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">1</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">Rp 250.000</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">Jaket Parka</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">2</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">Rp 250.000</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">Jaket Bomber</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">1</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-800">Rp 250.000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="2">Subtotal</th>
                            <td>Rp {{ subtotal }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">Ongkir</th>
                            <td>Rp {{ courier ? courier.cost:0 }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">Total</th>
                            <td>Rp {{ total }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Summary",
    props: ["courier"],
    data() {
        return {
            subtotal: 200000
        };
    },

    computed: {
        total() {
            const cost = this.courier ? this.courier.cost : 0;
            return parseFloat(this.subtotal) + parseFloat(cost);
        }
    }
};
</script>