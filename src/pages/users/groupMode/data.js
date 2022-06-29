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
      title: '模式名称',
      dataIndex: 'modeName',
      align: 'center',
    },
    {
      title: '权重',
      dataIndex: 'weights',
      align: 'center',
      scopedSlots: { customRender: "weights" },
    },
    {
      title: '起始金额',
      dataIndex: 'startAmount',
      align: 'center',
    },
    {
      title: '活动区间',
      dataIndex: 'activityRange',
      align: 'center',
    },
    {
      title: '订单数',
      dataIndex: 'orderNum',
      align: 'center',
    },
    // {
    //   title: '叠加等级',
    //   dataIndex: 'overlayLevel',
    //   align: 'center',
    //   scopedSlots: { customRender: "overlayLevel" },
    // },
    {
      title: '模式类型',
      dataIndex: 'modeType',
      align: 'center',
      scopedSlots: { customRender: "modeType" },
    },
    {
      title: '模式佣金类型',
      dataIndex: 'commissionType',
      align: 'center',
      scopedSlots: { customRender: "commissionType" },
    },
    {
      title: '佣金比例',
      dataIndex: 'multiplier',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '固定金额',
      dataIndex: 'fixedAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '任务完成奖励金额',
      dataIndex: 'rewardAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
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
        modeName: 'shopadmin',
        weights: '505',
        startAmount: '200',
        activityRange: '265',
        orderNum: '10',
        // overlayLevel: '0',
        modeType: '自选模式',
        commissionType: '固定金额',
        multiplier: '0',
        fixedAmount: '5000',
        rewardAmount: '88',
    })
}
