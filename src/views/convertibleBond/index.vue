<template>
    <div>
        <cbFilter @filters="getFilters" />
        <cbStatistics :data="tableData" />
        <cbTable :data="tableData" />
    </div>
</template>

<script>
import { getData } from '@/api/cb'
import cbTable from './table'
import cbFilter from './filter.vue'
import cbStatistics from './statistics.vue'

export default {
    components: { cbTable, cbFilter, cbStatistics },
    data() {
        return{
            tableData: [],
            tableDataSource: [],
            filters: Object,
        }
    },
    methods: {
        // 获得数据
        getDataApi() {
            getData().then(res => {
                this.tableDataSource = res.data
                this.tableData = JSON.parse(JSON.stringify(this.tableDataSource))
            })
        },
        // 获得筛选条件
        getFilters(from) {
            this.filters = from
            this.tableData = JSON.parse(JSON.stringify(this.tableDataSource))
            this.filterData()
        },
        // 筛选数据
        filterData() {
            this.tableData = this.tableData.filter(item => {
                let pass = true

                let pricePass = true
                let pbPass = true
                let interestDebtRatePass = true
                let stockPledgePass = true
                let totalMarketValuePass = true
                let ratingPass = true
                let sellBackPass = true
                let lastYearsPass = true
                let lastScalePass = true
                let expireIncomeRatePass = true
                let buyPass = true

                // 现价筛选
                if (this.filters.price) 
                    pricePass = item.price <= this.filters.price
                // pb筛选
                if (this.filters.pb) 
                    pbPass = item.pb > this.filters.pb
                // 有息负债率筛选
                if (this.filters.interestDebtRate) {
                    interestDebtRatePass = item.int_debt_rate > 0 && item.int_debt_rate < this.filters.interestDebtRate
                }else {
                    interestDebtRatePass = item.int_debt_rate > 0
                }
                // 是否有股票质押
                if (this.filters.stockPledge) {
                    stockPledgePass = item.pledge_rt > 0
                }else {
                    stockPledgePass = !item.pledge_rt
                }
                // 总市值筛选
                if (this.filters.totalMarketValue) 
                    totalMarketValuePass = item.total_market_value < this.filters.totalMarketValue
                // 评级筛选
                if (this.filters.ratings.length > 0) 
                    ratingPass = this.filters.ratings.indexOf(item.rating_cd) > -1
                // 是否有回售条款
                if (this.filters.sellBack) {
                    sellBackPass = item.put_convert_price > 0
                }else {
                    sellBackPass = !item.put_convert_price
                }
                // 剩余年限筛选
                lastYearsPass = item.year_left > this.filters.lastYears
                // 剩余规模筛选
                if (this.filters.lastScale) 
                    lastScalePass = item.curr_iss_amt > this.filters.lastScale
                // 到期收益率筛选
                expireIncomeRatePass = item.ytm_rt > this.filters.expireIncomeRate
                // 根据卖出价、年回报率、持债时长计算买入价，进行筛选
                if (this.filters.sell && this.filters.annualizedReturn && this.filters.holdDuration) {
                    const buyPrice = 100 * this.filters.sell / (this.filters.annualizedReturn * this.filters.holdDuration + 100)
                    buyPass = item.price <= buyPrice
                }

                pass = pricePass && pbPass && interestDebtRatePass && stockPledgePass && totalMarketValuePass 
                        && ratingPass && sellBackPass && lastYearsPass && lastScalePass && expireIncomeRatePass
                        && buyPass
                return pass
            })
        }
    },
    created() {
        this.getDataApi()
    }
}
</script>

<style>

</style>