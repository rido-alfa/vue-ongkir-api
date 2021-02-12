<template>
    <div class="m-auto flex justify-center mt-4 max-w-5xl">
        <div class="flex flex-col justify-center">
            <div class="flex items-center">
                <img width="50" src="./assets/logo.png" />
                <h1 class="text-4xl text-gray-600">+</h1>
                <img width="200" class="ml-3" src="https://ruangapi.com/assets/images/logo.png" alt />
            </div>
            <h3 class="text-center text-gray-800 mt-3">Vue Ongkir Api</h3>

			<!-- component summary -->
            <div>
                <Summary />
            </div>
			<!-- end of component summary -->
			
        </div>
    </div>
</template>

<script>
import Summary from "./components/Summary";
export default {
    name: "App",
    components: {
        Summary
    }
};
</script>