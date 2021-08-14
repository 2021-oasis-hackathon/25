<template>
    <div>
        <Map />
    </div> 
</template>

<script>
import Map from "../components/Map.vue"
export default {
    components :{
        Map, 
    },
    data() {
        return {

        }
    },
    methods: {

    },
    watch: {

    },
    created(){
        console.log("map페이지 created");
    },
    mounted() {
        console.log("map페이지 moutnted");
    },
    unmounted() {
        console.log("map UNMOUNTED")
    },
}
</script>

<style>

</style>