export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '用户登录Ip',
    dataIndex: 'userLoginIP',
    align: 'center',
  },
  {
    title: '时间',
    dataIndex: 'time',
    align: 'center',
  },
  {
    title: '是否加入黑名单',
    dataIndex: 'isBlackList',
    align: 'center',
    scopedSlots: { customRender: "isBlackList" },
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
      memberPhone: '66666666',
      userLoginIP: '123456789	',
      time: '2022-06-15',
      isBlackList: '否',
  })
}
