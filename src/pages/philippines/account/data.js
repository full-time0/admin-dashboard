export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '账号名称',
    dataIndex: 'accountName',
    align: 'center',
  },
  {
    title: '收款人账号',
    dataIndex: 'receiptAccount',
    align: 'center',
  },
  {
    title: '银行卡名称',
    dataIndex: 'cardName',
    align: 'center',
  },
  {
    title: '添加时间',
    dataIndex: 'createdAt',
    align: 'center',
  },
  {
    title: '帐号已收款金额',
    dataIndex: 'chargedAmount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '类型',
    dataIndex: 'type',
    align: 'center',
  },
  {
    title: '收款二维码',
    dataIndex: 'qrCode',
    align: 'center',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'center',
  },
  {
    title: '是否分配代理',
    dataIndex: 'isAssign',
    align: 'center',
    scopedSlots: { customRender: "isAssign" },
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: "status" },
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'action' },
  }
]

export const dataSource = []