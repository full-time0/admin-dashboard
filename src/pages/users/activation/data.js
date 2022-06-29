export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '用户ID',
      dataIndex: 'userId',
      align: 'center',
    },
    {
      title: '用户名',
      dataIndex: 'username',
      align: 'center',
    },
    {
      title: '手机号',
      dataIndex: 'memberPhone',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      align: 'center',
    },
    {
      title: '印度身份证',
      dataIndex: 'indianIDCard',
      align: 'center',
    },
    {
      title: '印度唯一身份证',
      dataIndex: 'indianUniqueIDCard',
      align: 'center',
    },
    {
      title: '家庭住址',
      dataIndex: 'homeAddress',
      align: 'center',
      scopedSlots: { customRender: "isAgent" },
    },
    {
      title: '处理时间',
      dataIndex: 'processTime',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' },
      fixed: 'right',
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 3; i++) {
    dataSource.push({
        key: i,
        no: i,
        userId: '2',
        username: 'test',
        memberPhone: '66666666',
        createdAt: '2018-07-26',
        indianIDCard: '353536',
        indianUniqueIDCard: '4',
        homeAddress: 'virtual address',
        processTime: '16:50:00',
        state: '',
    })
}
