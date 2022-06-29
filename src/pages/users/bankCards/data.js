export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '开户人',
    dataIndex: 'accountOwner',
    align: 'center',
  },
  {
    title: '用户手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '银行账号',
    dataIndex: 'bankCardNum',
    align: 'center',
  },
  {
    title: '所属银行',
    dataIndex: 'accountBank',
    align: 'center',
  },
  {
    title: '预留手机号',
    dataIndex: 'bankReservedMobile',
    align: 'center',
  },
  {
    title: '银行卡状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: "status" },
  },
  {
    title: '添加时间',
    dataIndex: 'createdAt',
    align: 'center',
  },
  {
    title: '编辑时间',
    dataIndex: 'updatedAt',
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

for (let i = 1; i < 3; i++) {
  dataSource.push({
      key: i,
      no: i,
      accountOwner: 'test member',
      memberPhone: '66666666',
      bankCardNum: '123456789	',
      accountBank: 'CPF',
      bankReservedMobile: '1234567',
      status: '启用',
      createdAt: '2022-06-15',
      updatedAt: '',
  })
}
