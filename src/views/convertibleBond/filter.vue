<template>
  <div>
    <el-form :inline="true" :model="form">
        <el-form-item label="现价 ≥" class="price">
            <div class="item">
                <el-input v-model="form.price" />
            </div>
        </el-form-item>
        <el-form-item label="正股PB >" class="pb">
            <div class="item">
                <el-input v-model="form.pb" />
            </div>
        </el-form-item>
        <el-form-item label="有息负债率 <" >
            <div class="item">
                <el-input v-model="form.interestDebtRate" />
            </div>
        </el-form-item>
        <el-form-item label="股票质押" >
            <div class="item">
                <el-radio-group v-model="form.stockPledge">
                    <el-radio-button label="true" >有</el-radio-button>
                    <el-radio-button label="false" >无</el-radio-button>
                </el-radio-group>
            </div>
        </el-form-item>
        <el-form-item label="总市值 <"  class="totalMarketValue">
            <div class="item">
                <el-input v-model="form.totalMarketValue" />
                <div style="margin-left:10px">亿</div>
            </div>
        </el-form-item>
        <el-form-item label="评级" class="rating">
            <el-select
                v-model="form.ratings"
                multiple
                collapse-tags
                collapse-tags-tooltip
                placeholder="Select"
                >
                <el-option
                    v-for="item in ratings"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </el-form-item>
        <el-form-item label="回售触发价" >
            <div class="item">
                <el-radio-group v-model="form.sellBack">
                    <el-radio-button label="true" >有</el-radio-button>
                    <el-radio-button label="false" >无</el-radio-button>
                </el-radio-group>
            </div>
        </el-form-item>
        <el-form-item label="剩余年限 >" >
            <div class="item">
                <el-input v-model="form.lastYears" />
            </div>
        </el-form-item>
        <el-form-item label="剩余规模 >" class="lastScale">
            <div class="item">
                <el-input v-model="form.lastScale" />
                <div style="margin-left:10px">亿</div>
            </div>
        </el-form-item>
        <el-form-item label="到期税前收益 >" class="expireIncomeRate">
            <div class="item">
                <el-input v-model="form.expireIncomeRate" />
            </div>
        </el-form-item>
        <el-form-item label="卖出价" class="sell">
            <div class="item">
                <el-input v-model="form.sell" />
            </div>
        </el-form-item>
        <el-form-item label="年回报率 >" class="annualizedReturn">
            <div class="item">
                <el-input v-model="form.annualizedReturn" />
            </div>
        </el-form-item>
        <el-form-item label="持债时长 <" class="holdDuration">
            <div class="item">
                <el-input v-model="form.holdDuration" />
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">筛选</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return{
            form: {
                price: 0,
                pb: 0,
                interestDebtRate: 0,
                stockPledge: 'true',
                totalMarketValue: 0,
                ratings: [],
                sellBack: 'true',
                lastYears: 0,
                lastScale: 0,
                expireIncomeRate: 0,
                sell: 0,
                annualizedReturn: 0,
                holdDuration: 0,
            },
            ratings: [
                {value:'AAA',label:'AAA'},
                {value:'AA+',label:'AA+'},
                {value:'AA',label:'AA'},
                {value:'AA-',label:'AA-'},
                {value:'A+',label:'A+'}
            ]
        }
    },
    methods: {
        submit() {
            const _from = this.form
            // 现价
            _from.price = parseFloat(this.form.price)
            // 正股PB
            _from.pb = parseFloat(this.form.pb)
            // 有息负债率
            _from.interestDebtRate = parseFloat(this.form.interestDebtRate)
            // 股票质押
            _from.stockPledge = JSON.parse(this.form.stockPledge)
            // 总市值
            _from.totalMarketValue = parseFloat(this.form.totalMarketValue)
            // 回售触发价
            _from.sellBack = JSON.parse(this.form.sellBack)
            // 剩余年限
            _from.lastYears = parseFloat(this.form.lastYears)
            // 剩余规模
            _from.lastScale = parseFloat(this.form.lastScale)
            // 到期税前收益
            _from.expireIncomeRate = parseFloat(this.form.expireIncomeRate)
            // 卖出价格
            _from.sell = parseFloat(this.form.sell)
            // 年回报率
            _from.annualizedReturn = parseFloat(this.form.annualizedReturn)
            // 持债时长
            _from.holdDuration = parseFloat(this.form.holdDuration)

            this.$emit('filters', _from)
        },
    },
}
</script>

<style lang="scss" scoped>
    .price,.lastScale,.totalMarketValue{
        .item {
            display: inline-flex;
        }
    }
    .el-input {
        max-width: 80px;
    }
</style>
