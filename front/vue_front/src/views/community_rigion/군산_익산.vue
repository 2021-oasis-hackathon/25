<template>
    <div>
        <w-breadcrumbs :items="items" separator-color="orange" />

        



        
        
<w-input 
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)"
  :selectable-rows=1 
>
    <template #item="{ select}">
        <tr :class="classes" @click="select">
        </tr>
    </template>
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
                selectionInfo: {},
                headers: [
                    { label: '인덱스', key: 'index' },
                    { label: '이름', key: 'name' },
                    { label: '제목', key: 'title' }
                ],
                items: [
                    { index: 1, name: 'Floretta', title: 'a' },
                    { index: 2, name: 'Nellie', title: 'b' },
                    { index: 3, name: 'Rory', titlei: 'c' },
                    { index: 4, name: 'Daley', titlei: 'd' },
                    { index: 5, name: 'Virgil', title: 'e' },
                ],
                keyword: '',
                keywordFilter: keyword => item => {

                    const allTheColumns = `${item.id} ${item.firstName} ${item.lastName}`
                    return new RegExp(keyword, 'i').test(allTheColumns)
                }
            }
    }},
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
        postView() {
            console.log("asdasd");
        }
    },
    watch: {

    },
    mounted() {
        axios.get(" ").then (
            res => {
                this.table.items.push(res.data);
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
         
    },
}
</script>



<style scoped>
.buttonaa{
    margin-top: 300px; 
}
.aa{
    margin-top: 100px;
}
item-cell.id{
    width: 10px;
} 
.mb3{
    margin-top: 50px;
}
</style>