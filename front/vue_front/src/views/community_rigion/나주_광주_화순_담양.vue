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
        @row-click="clickTitle" class="table">
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
                { label: '나주, 광주, 화순, 담양', route: 'w-breadcrumbs' },
            ],
            table: {
                headers: [
                    { label: '작성자', key: 'id' },
                    { label: '제목', key: 'title' },
                    { label: '작성일', key: 'date' },
                ],
                items: [
                    { id: "행복이", title: '[맛집] 추천 ', date: '8/15' },
                    { id: "행복이", title: '[맛집] 추천 ', date: '8/15' },
                    { id: "여수사람", title: '[여행지] 여기 짱이ㅔ요', date: '8/14' },
                    { id: "땡칠이", title: '오늘 닐씨 좋네요 ', date: '8/6' },
                    { id: "땡순이", title: '여기 가보세요~', date: '8/3' },
                    { id: "땡삼이", title: '오', date: '8/1' },
                    { id: "여수사람", title: '[여행지] 여기 짱이ㅔ요', date: '8/14' },
                    { id: "땡칠이", title: '오늘 닐씨 좋네요 ', date: '8/6' },
                    { id: "땡순이", title: '여기 가보세요~', date: '8/3' },
                    { id: "땡삼이", title: '오', date: '8/1' },
                    
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
                this.table.items=res.data
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
                this.table.items=res.data
        }).catch(err=>{
            console.log(err)
        });
    },
}
</script>



<style scoped>
.aa{
    margin-top: 100px;
}
item-cell.id{
    width: 10px;
} 
.mb3{
    margin-top: 150px;
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
.table{
    height: 1000px;
    font-size: 25px;
    font: bold; 
}
</style>