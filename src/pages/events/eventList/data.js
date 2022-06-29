export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '游戏名称',
      dataIndex: 'gameName',
      align: 'center',
    },
    {
      title: '图片',
      dataIndex: 'picture',
      align: 'center',
      scopedSlots: { customRender: "picture" },
    },
    {
      title: '权重',
      dataIndex: 'weights',
      align: 'center',
    },
    {
      title: '游戏状态',
      dataIndex: 'gameStatus',
      align: 'center',
      scopedSlots: { customRender: "gameStatus" },
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
        gameName: '签到礼包',
        picture: '/storage/uploads/activity/activity-1.png',
        weights: '1',
        gameStatus: '正常',
    })
}
