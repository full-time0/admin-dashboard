<template>
  <a-card>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      :title="$ta('funds|details')"
      @back="() => $router.go(-1)"
    >
    </a-page-header>
    <standard-table
      :scroll="{ x: true }"
      :bordered="true"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="{showSizeChanger: true, pageSize: 10}"
    >
      <div slot="type" slot-scope="{text}">
        <a-tag :color="text === '抢单支付' ? 'rgb(110, 203, 99)' : 'rgb(49, 107, 131)'">
          {{text}}
        </a-tag>
      </div>
      <div slot="isFirstCharge" slot-scope="{text}">
        <a-tag :color="text === '是' ? 'green' : 'volcano'">
          {{text}}
        </a-tag>
      </div>
    </standard-table>
  </a-card>
</template>

<script>
const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '操作管理员昵称',
      dataIndex: 'adminNickName',
      align: 'center',
    },
    {
      title: '类型',
      dataIndex: 'type',
      align: 'center',
      scopedSlots: { customRender: "type" },
    },
    {
      title: '是否为首充',
      dataIndex: 'isFirstCharge',
      align: 'center',
      scopedSlots: { customRender: "isFirstCharge" },
    },
    {
      title: '操作时间',
      dataIndex: 'actionTime',
      align: 'center',
    },
    {
      title: '操作金额',
      dataIndex: 'actionAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '操作前余额',
      dataIndex: 'actionbeforeAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '操作后余额',
      dataIndex: 'actionAfterAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '备注',
      dataIndex: 'remark',
      align: 'center',
    },
]
  
const dataSource = []
  
for (let i = 0; i < 41; i++) {
    dataSource.push({
        key: i,
        no: i,
        adminNickName: 'test member',
        type: '抢单支付',
        isFirstCharge: '否',
        actionTime: '2018-07-26',
        actionAmount: '69',
        actionbeforeAmount: '1720',
        actionAfterAmount: '1651',
        remark: '抢单支付商品价格69.00',
    })
}

import StandardTable from '@/components/table/StandardTable'

export default {
  name: 'FundingDetails',
  i18n: require('./i18n'),
  components: {StandardTable},
  data () {
    return {
      columns: columns,
      dataSource: dataSource,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$message.info('表格状态改变了')
    },
  }
}
</script>

<style lang="less" scoped>
  .search{
    margin-bottom: 54px;
  }
  .fold{
    width: calc(100% - 216px);
    display: inline-block
  }
  .operator{
    margin-bottom: 18px;
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
