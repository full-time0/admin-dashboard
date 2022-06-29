export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '文章类型',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: '文章标题',
      dataIndex: 'title',
      align: 'center',
    },
    {
      title: '图片',
      dataIndex: 'picture',
      align: 'center',
      scopedSlots: { customRender: "picture" },
    },
    {
      title: '添加时间',
      dataIndex: 'createdAt',
      align: 'center',
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
        type: '弹窗公告',
        title: 'How to withdraw commission to balance?',
        picture: '/storage/uploads/activity/activity-1.png',
        createdAt: '2022-2-7 9:57:57',
    })
}
