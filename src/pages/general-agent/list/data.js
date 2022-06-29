export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '昵称',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '账号',
      dataIndex: 'account',
      align: 'center',
    },
    {
      title: '代理详情',
      dataIndex: 'agentDetail',
      align: 'center',
      scopedSlots: { customRender: "agentDetail" },
    },
    {
      title: '备注',
      dataIndex: 'remark',
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
  
for (let i = 0; i < 3; i++) {
    dataSource.push({
        key: i,
        no: i,
        name: 'afei',
        account: 'zdl',
        agentDetail: ['888888', '845688855896'],
        remark: '',
        status: '启用',
    })
}
