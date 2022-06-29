export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      align: 'center',
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      align: 'center',
    },
    {
      title: '备注',
      dataIndex: 'remark',
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
  
for (let i = 0; i < 41; i++) {
    dataSource.push({
        key: i,
        no: i,
        ip: '18.162.229.166',
        createdAt: '2021-12-23 12:41:11',
        remark: '财务管理员工',
    })
}
