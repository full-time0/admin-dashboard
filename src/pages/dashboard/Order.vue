<template>
  <a-row style="margin-top: 0" :gutter="[24, 24]">
    <a-col :sm="24" :md="12" :xl="6">
      <chart-card :loading="loading" :title="$t('completedNum')" total="￥ 189,345">
        <a-tooltip :title="$t('introduce')" slot="action">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div slot="footer">{{$t('completedNum')}}<span> ￥234.56</span></div>
      </chart-card>
    </a-col>
    <a-col :sm="24" :md="12" :xl="6">
      <chart-card :loading="loading" :title="$t('freezeOddNum')" total="￥ 189,345">
        <a-tooltip :title="$t('introduce')" slot="action">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div slot="footer">{{$t('freezeOddNum')}}<span> 123,4</span></div>
      </chart-card>
    </a-col>
    <a-col :sm="24" :md="12" :xl="6">
      <chart-card :loading="loading" :title="$t('paidAmount')" total="￥ 189,345">
        <a-tooltip :title="$t('introduce')" slot="action">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div slot="footer">{{$t('paidAmount')}} <span>0</span></div>
      </chart-card>
    </a-col>
    <a-col :sm="24" :md="12" :xl="6">
      <chart-card :loading="loading" :title="$t('pendingOrderNum')" total="73%">
        <a-tooltip :title="$t('introduce')" slot="action">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div slot="footer">{{$t('pendingOrderNum')}} <span>0</span></div>
      </chart-card>
    </a-col>
  </a-row>
</template>

<script>
import ChartCard from '../../components/card/ChartCard'

export default {
  name: 'General',
  i18n: require('./i18n'),
  data () {
    return {
      loading: true,
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
  },
  components: {ChartCard}
}
</script>