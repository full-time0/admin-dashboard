export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '最大充值',
      dataIndex: 'maxAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '最小充值',
      dataIndex: 'minAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '赠送比例',
      dataIndex: 'giftRate',
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
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 2; i++) {
    dataSource.push({
        key: i,
        no: i,
        maxAmount: '1000',
        minAmount: '200',
        giftRate: '1',
        remark: 'test remark',
    })
}
