export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    align: 'center',
  },
  {
    title: '用户手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '首充金额',
    dataIndex: 'firstDeposit',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计充值',
    dataIndex: 'totalDeposit',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计提现',
    dataIndex: 'totalWithdraw',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '余额',
    dataIndex: 'balance',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '持有佣金',
    dataIndex: 'holdCommisson',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)

  },
  {
    title: '一级推荐人',
    dataIndex: 'firstRecommender',
    align: 'center',
  },
  {
    title: '二级推荐人',
    dataIndex: 'secondRecommender',
    align: 'center',
  },
  {
    title: '首充时间',
    dataIndex: 'firstChargeTime',
    align: 'center',
  }
]

export const dataSource = []

for (let i = 0; i < 41; i++) {
  dataSource.push({
      key: i,
      no: i,
      nickName: 'test member',
      memberPhone: '66666666',
      firstDeposit: '100',
      totalDeposit: '100',
      totalWithdraw: '346',
      balance: '108',
      holdCommisson: '0',
      firstRecommender: '',
      secondRecommender: '',
      firstChargeTime: '2022-06-14',
  })
}
