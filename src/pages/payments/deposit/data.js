export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '订单号',
    dataIndex: 'orderName',
    align: 'center',
  },
  {
    title: '会员名称',
    dataIndex: 'memberName',
    align: 'center',
  },
  {
    title: '会员手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '会员类型',
    dataIndex: 'memberType',
    align: 'center',
  },
  {
    title: '余额',
    dataIndex: 'balance',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '佣金余额',
    dataIndex: 'commission',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '充值金额',
    dataIndex: 'deposit',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2),
    sorter: (a, b) => a.deposit.length - b.deposit.length,
    sortDirections: ['descend', 'ascend'],
  },
  
  {
    title: '三方手续费',
    dataIndex: 'totalThirdServiceFee',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)

  },
  {
    title: '到账方式',
    dataIndex: 'arrMethod',
    align: 'center',
    scopedSlots: { customRender: "arrMethod" },
  },
  {
    title: '充值时间',
    dataIndex: 'depositTime',
    align: 'center',
  },
  {
    title: '到账时间',
    dataIndex: 'arrTime',
    align: 'center',
  },
  {
    title: '支付方式',
    dataIndex: 'payMethod',
    align: 'center',
  },
  {
    title: '代理名称',
    dataIndex: 'agentName',
    align: 'center',
  },
  {
    title: '支付渠道',
    dataIndex: 'payChannel',
    align: 'center',
    fixed: 'right',
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: "status" },
    fixed: 'right',
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'action' },
    fixed: 'right',
  }
]

export const dataSource = []

for (let i = 0; i < 41; i++) {
  dataSource.push({
      key: i,
      no: i,
      orderName: 'SH202205061147488705362225',
      memberName: 'ceshi',
      memberPhone: '66666666',
      memberType: '正式会员',
      balance: '1651',
      commission: '0',
      deposit: '100',
      totalThirdServiceFee: '0',
      arrMethod: '三方回调',
      depositTime: '2022-06-14',
      arrTime: '2022-06-14',
      payMethod: '1001',
      agentName: '代理',
      payChannel: 'Ghana-OnePay',
      status: '等待支付',
  })
}
