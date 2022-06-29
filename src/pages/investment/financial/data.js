export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '项目名称',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '图片',
    dataIndex: 'picture',
    align: 'center',
    scopedSlots: { customRender: "picture" },
  },
  {
    title: '日收益率',
    dataIndex: 'dailyIncomeRate',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '申请天数',
    dataIndex: 'days',
    align: 'center',
  },
  {
    title: '最小购买',
    dataIndex: 'minPurchase',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '最大购买',
    dataIndex: 'maxPurchase',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '权重',
    dataIndex: 'weights',
    align: 'center',
  },
  {
    title: '收入方式',
    dataIndex: 'incomeMethod',
    align: 'center',
    scopedSlots: { customRender: "incomeMethod" },
  },
  {
    title: '限购次数',
    dataIndex: 'purchaseLimit',
    align: 'center',
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

for (let i = 0; i < 60; i++) {
  dataSource.push({
      key: i,
      no: i,
      name: 'ceshi',
      picture: '/storage/uploads/activity/activity-1.png',
      dailyIncomeRate: '0.1',
      days: '1',
      minPurchase: '10',
      maxPurchase: '200000',
      weights: '2',
      incomeMethod: '每日结息到期还本',
      purchaseLimit: '120',
      status: '启用',
      
  })
}
