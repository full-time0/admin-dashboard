export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '用户ID',
    dataIndex: 'userid',
    align: 'center',
  },
  {
    title: '用户手机号',
    dataIndex: 'phone',
    align: 'center',
  },
  {
    title: '代理名称',
    dataIndex: 'agentName',
    align: 'center',
  },
  {
    title: '购买时间',
    dataIndex: 'purchaseTime',
    align: 'center',
  },
  {
    title: '金额',
    dataIndex: 'amount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    align: 'center',
    fixed: 'right'
  },
]

export const dataSource = []

for (let i = 1; i < 41; i++) {
  dataSource.push({
      key: i,
      no: i,
      userid: i,
      phone: '666666',
      agentName: 'hai888',
      purchaseTime: '2022-06-14',
      amount: '2000',
  })
}
