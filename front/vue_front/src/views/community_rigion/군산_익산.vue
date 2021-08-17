<template>
    <div>
        <w-breadcrumbs :items="items" separator-color="orange" />
        
        
        <div class="w-flex wrap mb3">
        <w-button
            class="mr2 mb1"
            @click="table.activeFilter = 0"
            round
            :outline="table.activeFilter !== 0">
            No filter
        </w-button>

        <w-button
            class="mr2 mb1"
            @click="table.activeFilter = 1"
            round
            :outline="table.activeFilter !== 1">
            Last name starting with 'M'
        </w-button>

        <w-button
            class="mr2 mb1"
            @click="table.activeFilter = 2"
            round
            :outline="table.activeFilter !== 2">
            ID >= 10
        </w-button>
        </div>

        <w-table
        :headers="table.headers"
        :items="table.items"
        :filter="table.filters[table.activeFilter]">
        </w-table>





        <h1>광주페이지</h1>
        <button @click='poserServe' class="buttonaa">test!!</button>
        <div class = "aa">
        <h2> {{ title}} </h2>
        <h2 > {{content}} </h2>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: "title",
            content: "content",
            items: [
                { label: '커뮤니티', route: '/community' },
                { label: '군산, 익산', route: 'w-breadcrumbs' },
            ],
              table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    filters: [
      null,
      item => item.lastName[0] === 'M',
      item => item.id >= 10
    ],
    activeFilter: 0
        }}
    },
    methods: {
        postServe() {
            axios.get("locallhost:8000/posts/gwangju/1", {
        }).then(
            res =>{
            this.title = res.data.title;
            this.content =res.data.content;
        }).catch(err=>{
            console.log(err)
        })
        },
        
        
    },
    watch: {

    },
}
</script>

<style>
.buttonaa{
    margin-top: 300px; 
}
.aa{
    margin-top: 100px;
}
</style>