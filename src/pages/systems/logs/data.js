export const columns = [
    {
      title: '管理员昵称',
      dataIndex: 'adminNickName',
      align: 'center',
    },
    {
      title: '添加时间',
      dataIndex: 'createdAt',
      align: 'center',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      align: 'center',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      align: 'center',
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 41; i++) {
    dataSource.push({
        key: i,
        adminNickName: '超级管理员',
        createdAt: '2022-6-27 6:51:48',
        ip: '20.239.51.215',
        remark: '管理员【超级管理员】登录成功',
    })
}
