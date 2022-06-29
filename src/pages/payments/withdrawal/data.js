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
    title: '会员手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '会员名称',
    dataIndex: 'memberName',
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
    title: '代理名称',
    dataIndex: 'agentName',
    align: 'center',
  },
  {
    title: '支付状态',
    dataIndex: 'paymentStatus',
    align: 'center',
    scopedSlots: { customRender: "paymentStatus" },
  },
  {
    title: '提现金额',
    dataIndex: 'withdraw',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2),
    sorter: (a, b) => a.withdraw.length - b.withdraw.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '手续费',
    dataIndex: 'handlingFee',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '到账金额',
    dataIndex: 'receivedAmount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '三方手续费',
    dataIndex: 'totalThirdHandlingFee',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '提现前余额',
    dataIndex: 'withdrawBeforeBalance',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '提现后余额',
    dataIndex: 'withdrawAfterBalance',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '提现方式',
    dataIndex: 'withdrawMethod',
    align: 'center',
  },
  {
    title: '收款人',
    dataIndex: 'payee',
    align: 'center',
  },
  {
    title: 'IFSC CODE',
    dataIndex: 'ifscCode',
    align: 'center',
  },
  {
    title: '持卡人电话',
    dataIndex: 'cardholderPhone',
    align: 'center',
  },
  {
    title: '银行卡号',
    dataIndex: 'bankCardNum',
    align: 'center',
  },
  {
    title: '申请时间',
    dataIndex: 'applyTime',
    align: 'center',
  },
  {
    title: '累计充值',
    dataIndex: 'totalDeposit',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计提现',
    dataIndex: 'totalWithdraw',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计提佣',
    dataIndex: 'totalCommission',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计单数',
    dataIndex: 'totalOdds',
    align: 'center',
  },
  {
    title: '累计下单金额',
    dataIndex: 'totalOrderAmount',
    align: 'center',
  },
  {
    title: '审批时间',
    dataIndex: 'processTime',
    align: 'center',
  },
  {
    title: '交易订单号',
    dataIndex: 'transOrderNum',
    align: 'center',
  },
  {
    title: '审核不通过理由',
    dataIndex: 'notPassAuditReason',
    align: 'center',
  },
  {
    title: '到账时间',
    dataIndex: 'arrTime',
    align: 'center',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: "status" },
    fixed: 'right',
  },
  {
    title: '代理审核',
    dataIndex: 'agentAudit',
    align: 'center',
    scopedSlots: { customRender: "agentAudit" },
    fixed: 'right',
  },
  {
    title: '总代理审核',
    dataIndex: 'generalAgentAudit',
    align: 'center',
    scopedSlots: { customRender: "generalAgentAudit" },
    fixed: 'right',
  },
  {
    title: '支付渠道',
    dataIndex: 'payChannel',
    align: 'center',
    fixed: 'right',
  },
  {
    title: '审核员',
    dataIndex: 'auditor',
    align: 'center',
    scopedSlots: { customRender: "auditor" },
    fixed: 'right'
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
      memberPhone: '66666666',
      memberName: 'ceshi',
      memberType: '正式会员',
      balance: '1651',
      commission: '0',
      agentName: '代理',
      paymentStatus: '已支付',
      withdraw: '100',
      handlingFee: '0',
      receivedAmount: '100',
      totalThirdHandlingFee: '0',
      withdrawBeforeBalance: '1720',
      withdrawAfterBalance: '1620',
      withdrawMethod: '用户提现',
      payee: 'ceshi',
      cardholderPhone: '123213',
      bankCardNum: '1237891231',
      applyTime: '2022-6-9 13:31:9',
      totalDeposit: '1704',
      totalWithdraw: '605',
      totalCommission: '0',
      totalOdds: '',
      totalOrderNum: '',
      processTime: '2022-6-9 13:32:39',
      transOrderNum: 'FKD2022050611571501748',
      notPassAuditReason: '第三方拒绝此订单',
      arrTime: '1651809086',
      remark: '123',
      status: '待审核',
      agentAudit: '未确认',
      generalAgentAudit: '未确认',
      payChannel: 'Ghana-OnePay',
      auditor: '超级管理员',
  })
}
