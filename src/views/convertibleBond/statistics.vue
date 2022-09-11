<template>
  <div>
    <el-tag v-for="(val, key) in industryStatistics" :key="key">{{ key + '(' + val.total + ')' }}</el-tag>
  </div>
</template>

<script>
export default {
    data() {
        return{
            industryStatistics: {},
        }
    },
    props: {
        data: {
            type: Array,
            default: [],
            required: true
        }
    },
    watch: {
        data: function() {
            this.getStatistics()
        }
    },
    methods: {
        getStatistics() { 
            this.industryStatistics = {}
            this.data.map(item => {
                let industry = this.industryStatistics[item.sw_nm_r]
                if (industry){
                    industry.total ++
                } else{
                    industry = { total: 1 }
                    this.industryStatistics[item.sw_nm_r] = industry
                }
            })
        }
    }
}
</script>

<style>

</style>