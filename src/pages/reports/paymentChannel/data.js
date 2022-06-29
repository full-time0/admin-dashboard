export const columns = [
  {
    title: '渠道',
    dataIndex: 'channel',
    align: 'center',
  },
  {
    title: '笔数',
    dataIndex: 'count',
    align: 'center',
  },
  {
    title: '三方服务费',
    dataIndex: 'thirdServiceFee',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '金额',
    dataIndex: 'amount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
]

export const dataSource = []