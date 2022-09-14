<template>
    <el-table :data="data" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column type="index" label="行号"/>
        <el-table-column prop="bond_id" label="代码" />
        <el-table-column prop="bond_nm" label="转债名称" />
        <el-table-column prop="price" label="现价" sortable >
            <template #default="scope">
            {{scope.row.price}}
        </template>
        </el-table-column>
        <!-- <el-table-column prop="increase_rt" label="涨跌幅" /> -->
        <!-- <el-table-column prop="last_5d_rt" label="近5日涨跌幅" /> -->
        <!-- <el-table-column prop="last_20d_rt" label="近20日涨跌幅" /> -->
        <!-- <el-table-column prop="last_3m_rt" label="近3月涨跌幅" /> -->
        <!-- <el-table-column prop="last_1y_rt" label="近1年涨跌幅" /> -->
        <el-table-column prop="stock_id" label="正股代码" />
        <el-table-column prop="stock_nm" label="正股名称" />
        <!-- <el-table-column prop="sprice" label="正股价" /> -->
        <!-- <el-table-column prop="sincrease_rt" label="正股涨跌" /> -->
        <!-- <el-table-column prop="pb" label="正股PB" sortable /> -->
        <!-- <el-table-column prop="pe" label="正股PE" /> -->
        <!-- <el-table-column prop="roe" label="正股ROE" /> -->
        <!-- <el-table-column prop="dividend_rate" label="正股股息率" /> -->
        <!-- <el-table-column prop="pe_temperature" label="正股PE温度" /> -->
        <!-- <el-table-column prop="pb_temperature" label="正股PB温度" /> -->
        <el-table-column prop="int_debt_rate" label="有息负债率" sortable />
        <el-table-column prop="pledge_rt" label="股票质押率" sortable />
        <!-- <el-table-column prop="market_value" label="流通市值(亿)" /> -->
        <el-table-column prop="total_market_value" label="总市值(亿)" sortable />
        <!-- <el-table-column prop="revenue" label="2021年营收(亿)" /> -->
        <!-- <el-table-column prop="revenue_growth" label="营收同比增长" /> -->
        <!-- <el-table-column prop="profit" label="2021年净利(亿)" /> -->
        <!-- <el-table-column prop="profit_growth" label="利润同比增长" /> -->
        <!-- <el-table-column prop="convert_price" label="转股价" /> -->
        <!-- <el-table-column prop="convert_value" label="转股价值" /> -->
        <el-table-column prop="convert_dt" label="距离转股日" />
        <!-- <el-table-column prop="premium_rt" label="转股溢价率" /> -->
        <!-- <el-table-column prop="bond_premium_rt" label="债底溢价率" /> -->
        <!-- <el-table-column prop="dblow" label="双低" /> -->
        <el-table-column prop="adjust_condition" label="下修状态" />
        <el-table-column prop="sw_nm_r" label="行业" sortable/>
        <!-- <el-table-column prop="province" label="地域" /> -->
        <!-- <el-table-column prop="bond_value" label="纯债价值" /> -->
        <el-table-column prop="rating_cd" label="评级" sortable />
        <!-- <el-table-column prop="volatility_rate" label="正股波动率" /> -->
        <el-table-column prop="put_convert_price" label="回售触发价" />
        <el-table-column prop="force_redeem_price" label="强赎触发价" />
        <el-table-column prop="redeem_status" label="强赎状态" />
        <el-table-column prop="redeem_price_total" label="到期赎回价" />
        <!-- <el-table-column prop="convert_amt_ratio" label="转债流通市值占比" /> -->
        <!-- <el-table-column prop="convert_amt_ratio2" label="转债总市值占比" /> -->
        <el-table-column prop="fund_rt" label="基金持仓" />
        <!-- <el-table-column prop="short_maturity_dt" label="到期时间" /> -->
        <el-table-column prop="year_left" label="剩余年限" sortable />
        <el-table-column prop="curr_iss_amt" label="剩余规模(亿)" />
        <el-table-column prop="volume" label="成交额(万)" />
        <el-table-column prop="svolume" label="正股成交额(万)" />
        <!-- <el-table-column prop="turnover_rt" label="换手率" /> -->
        <!-- <el-table-column prop="sturnover_rt" label="正股换手率" /> -->
        <el-table-column prop="ytm_rt" label="到期税前收益率" sortable />
        <!-- <el-table-column prop="ytm_rt_tax" label="到期税后收益率" /> -->
        <el-table-column prop="pct_rpt" label="十大持有人占比" />
  </el-table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: [],
            required: true
        }
    }
}
</script>

<style>

</style>