export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      align: 'center',
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      align: 'center',
    },
    {
      title: '关联角色',
      dataIndex: 'associatedRole',
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      scopedSlots: { customRender: "state" },
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' },
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 3; i++) {
    dataSource.push({
        key: i,
        no: i,
        userName: 'shopadmin',
        nickName: '超级管理员	',
        associatedRole: '超级管理员',
        state: '在线',
    })
}
