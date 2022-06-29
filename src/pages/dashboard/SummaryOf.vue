<template>
  <div>
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('deposit|successful|amount', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('deposit|successful|amount', 'p')}}<span> ￥234.56</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('deposit|successful|sNum', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('deposit|successful|sNum', 'p')}}<span> 123,4</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('withdrawal|successful|amount', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('withdrawal|successful|amount', 'p')}} <span>0</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('withdrawal|successful|sNum', 'p')" total="73%">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('withdrawal|successful|sNum', 'p')}} <span>0</span></div>
        </chart-card>
      </a-col>
    </a-row>
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('deposit| - |withdrawal' ,'p') " total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('deposit| - |withdrawal' ,'p')}}<span> ￥234.56</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('top|score', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('top|score', 'p')}}<span> 123,4</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('lower|score', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('lower|score', 'p')}} <span>0</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('orderSplit')" total="73%">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('orderSplit')}} <span>0</span></div>
        </chart-card>
      </a-col>
    </a-row>
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('bonus')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('bonus')}}<span> ￥234.56</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('buy|signInPackage', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('buy|signInPackage', 'p')}}<span> 123,4</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('signInPackage|receive', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('signInPackage|receive', 'p')}} <span>0</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('backstageGiftGiving')" total="73%">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('backstageGiftGiving')}} <span>0</span></div>
        </chart-card>
      </a-col>
    </a-row>
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('thirdParty|collected|totalServiceFees', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('thirdParty|collected|totalServiceFees', 'p')}}<span> ￥234.56</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('thirdParty|paid|totalServiceFees', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('thirdParty|paid|totalServiceFees', 'p')}}<span> 123,4</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('thirdParty|totalServiceFees', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('thirdParty|totalServiceFees', 'p')}} <span>0</span></div>
        </chart-card>
      </a-col>
    </a-row>
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('ongoing|withdrawal|number', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('ongoing|withdrawal|number', 'p')}}<span> ￥234.56</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$ta('ongoing|withdrawal|amount', 'p')" total="￥ 189,345">
          <a-tooltip :title="$ta('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div slot="footer">{{$ta('ongoing|withdrawal|amount', 'p')}}<span> 123,4</span></div>
        </chart-card>
      </a-col>
    </a-row>
  </div>
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