<template>
    <div>
      
<h1 style="margin-top: 50px; margin-bottom:50px" > 여행을 계획하세요! </h1>

      <vue-cal fractions progress
         :time-from="1 * 60"
         :time-step="60"
         :disable-views="['years', 'year', 'month']"
          editable-events
         :events="events"
         :split-days="splitDays"
         :sticky-split-labels="stickySplitLabels"
         :min-cell-width="minCellWidth"
         :min-split-width="minSplitWidth">
</vue-cal>
    </div> 
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    watch: {

    },
    components: {VueCal},
}
</script>

<style>

</style>