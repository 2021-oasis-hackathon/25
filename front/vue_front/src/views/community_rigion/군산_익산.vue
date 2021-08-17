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
        @row-click="clickTitle">
    </w-table>
    <w-button class="ma1 mr6 post-btn transition-toggle" bg-color="secondary"  round @click="showCard = !showCard">작성하기</w-button>


<w-overlay
  v-model="showCard"
  :persistent="persistent"
  :persistent-no-animation="persistentNoAnimation"
  :opacity="0.3">
    <w-form v-if="showCard" class="transition-box post-BOX" @submit="submitPost">
        <w-textarea class="mt4" outline tile>
            내용
        </w-textarea>
            <w-button class="ma1" bg-color="primary" type="submit" v-if="showCard" @click="showCard=false"> 작성 </w-button>
            <w-button class="ma1" bg-color="error"  @click="showCard=false"> 취소 </w-button>
    </w-form>


</w-overlay>
    </div> 
    
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            showCard:false,
            title: "title",
            content: "content",
            items: [
                { label: '커뮤니티', route: '/community' },
                { label: '군산, 익산', route: 'w-breadcrumbs' },
            ],
            table: {
                headers: [
                    { label: 'ID', key: 'id' },
                    { label: '제목', key: 'title' },
                    { label: 'Last name', key: 'lastName' },
                    { label: 'Last name', key: 'lastName' }
                ],
                items: [
                    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
                    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
                    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
                    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
                    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
                    
                ],
                
                keyword: '',
                keywordFilter: keyword => item => {
                    const allTheColumns = `${item.id} ${item.firstName} ${item.lastName}`
                    return new RegExp(keyword, 'i').test(allTheColumns)
                }
            }
        }
    },
    methods: {
        submitPost(){
            axios.post(this.url).then().postLoad()
        },
        postLoad() {
            axios.get( this.url+""
        ).then(
            res =>{
                this.table=res.data
        }).catch(err=>{
            console.log(err)
        })
        },
        postView(event) {
            console.log(event);
        },
    },
    created() {
        axios.get( this.url+""
        ).then(
            res =>{
                this.table=res.data
        }).catch(err=>{
            console.log(err)
        });
    },
    watch: {

    },
    mounted() {

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
.post-btn{
    margin-top:5%;
    left:40%;
}
.post-BOX{
    margin-left:3%;
    margin-right:3%;
    position: fixed; 
    top:30%;
    width: 96%;
    height: 500px;
    background: white;
}

</style>