export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      align: 'center',
    },
    {
      title: '模板名称',
      dataIndex: 'templateName',
      align: 'center',
    },
    {
      title: '权重',
      dataIndex: 'weights',
      align: 'center',
      scopedSlots: { customRender: "weights" },
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' },
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 41; i++) {
    dataSource.push({
        key: i,
        no: i,
        creator: '管理员',
        templateName: 'test',
        weights: '505',
    })
}
