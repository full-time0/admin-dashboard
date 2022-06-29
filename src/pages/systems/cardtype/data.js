export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '银行代号',
      dataIndex: 'bankCode',
      align: 'center',
    },
    {
      title: '银行名称',
      dataIndex: 'bankName',
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
  
for (let i = 0; i < 41; i++) {
    dataSource.push({
        key: i,
        no: i,
        bankCode: 'GHSADB',
        bankName: 'Agricultural Development Bank of Ghana',
        status: '启用',
    })
}
