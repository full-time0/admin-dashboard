export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '类型',
      dataIndex: 'type',
      align: 'center',
      scopedSlots: { customRender: "type" },
    },
    {
      title: '名称',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      align: 'center',
    },
    {
      title: '图片',
      dataIndex: 'picture',
      align: 'center',
      scopedSlots: { customRender: "picture" },
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
        type: '首页',
        name: '首页banner',
        amount: '0',
        picture: '/storage/uploads/activity/activity-1.png',
    })
}
