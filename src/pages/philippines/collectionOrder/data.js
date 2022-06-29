export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '用户',
    dataIndex: 'user',
    align: 'center',
  },
  {
    title: '商户订单号',
    dataIndex: 'merchantOrderNum',
    align: 'center',
  },
  {
    title: '平台订单号',
    dataIndex: 'platformOrderNum',
    align: 'center',
  },
  {
    title: 'Ref No',
    dataIndex: 'refNo',
    align: 'center',
    scopedSlots: { customRender: "refNo" },
  },
  {
    title: '充值金额',
    dataIndex: 'depositAmount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '收款账户ID',
    dataIndex: 'receiptAccountID',
    align: 'center',
  },
  {
    title: '收款帐号',
    dataIndex: 'receiptAccount',
    align: 'center',
  },
  {
    title: '添加时间',
    dataIndex: 'createdAt',
    align: 'center',
  },
  {
    title: '代收类型',
    dataIndex: 'collectionType',
    align: 'center',
  },
  {
    title: '支付状态',
    dataIndex: 'payStatus',
    align: 'center',
  },
  {
    title: '结算状态',
    dataIndex: 'billingStatus',
    align: 'center',
    scopedSlots: { customRender: "billingStatus" },
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