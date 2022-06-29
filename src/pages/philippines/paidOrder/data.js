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
    title: '转账金额',
    dataIndex: 'transferAmount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '帐号名称',
    dataIndex: 'accountName',
    align: 'center',
  },
  {
    title: '收款账号',
    dataIndex: 'receiptAccount',
    align: 'center',
  },
  {
    title: '添加时间',
    dataIndex: 'createdAt',
    align: 'center',
  },
  {
    title: '代付状态',
    dataIndex: 'paymentStatus',
    align: 'center',
    scopedSlots: { customRender: "paymentStatus" },
  },
  {
    title: '收款类型',
    dataIndex: 'receiptType',
    align: 'center',
  },
  {
    title: '处理状态',
    dataIndex: 'processStatus',
    align: 'center',
    scopedSlots: { customRender: "paymentStatus" },
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'center',
  },
  {
    title: '处理时间',
    dataIndex: 'processTime',
    align: 'center',
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'action' },
    fixed: 'right',
  }
]

export const dataSource = []