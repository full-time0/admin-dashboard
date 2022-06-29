export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '签到名',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '需要充值',
      dataIndex: 'neededAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '每日可以领取的回扣',
      dataIndex: 'rebate',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '本金回收周期',
      dataIndex: 'period',
      align: 'center',
    },
    {
      title: '可得到的金额',
      dataIndex: 'availableAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '库存',
      dataIndex: 'stock',
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
  
for (let i = 0; i < 2; i++) {
    dataSource.push({
        key: i,
        no: i,
        name: 'Sign-in package 1',
        neededAmount: '500',
        rebate: '18',
        period: '30',
        availableAmount: '40',
        stock: '988',
        status: '启用',
    })
}
