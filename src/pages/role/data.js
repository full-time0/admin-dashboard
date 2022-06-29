export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      align: 'center',
    },
    {
      title: '权限',
      dataIndex: 'permission',
      align: 'center',
      scopedSlots: { customRender: "permission" },
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
        roleName: '超级管理员',
        permission: ['财务管理', '充值列表', '提现列表', '分佣列表', 'VIP购买记录'],
    })
}

export const permissionData = [
  { title: '管理员管理', key: '1' },
  { title: '角色管理', key: '2' },
  { title: '权限管理', key: '3' },
  {
    title: '用户管理',
    key: '4',
    children: [
      { title: '用户列表', key: '4-0' },
      { title: '首充列表', key: '4-1' },
      { title: '会员订单统计', key: '4-2' },
      { title: '银行卡列表', key: '4-3' },
      { title: '会员IP检测', key: '4-4' },
      { title: '用户资金详情', key: '4-5' },
      { title: '用户上下分', key: '4-6' },
      { title: '用户打码限制', key: '4-7' },
      { title: '分组模式', key: '4-8' },
      { title: '用户激活', key: '4-9' },
      { title: '预设模板', key: '4-10' },
      { title: '预设模板详情', key: '4-11' },
      { title: '用户预设模式', key: '4-12' },
      { title: '模式详情', key: '4-13' },
      { title: '员工申请表', key: '4-14' },
    ],
  },
  {
    title: '财务管理',
    key: '5',
    children: [
      { title: '充值列表', key: '5-0' },
      { title: '提现列表', key: '5-1' },
      { title: '分佣列表', key: '5-2' },
      { title: 'VIP购买记录', key: '5-3' },
    ],
  },
  {
    title: '统计报表',
    key: '6',
    children: [
      { title: '代理业绩报表', key: '6-0' },
      { title: '支付渠道统计', key: '6-1' },
      { title: '项目报表', key: '6-2' },
    ],
  },
  {
    title: '系统管理',
    key: '7',
    children: [
      { title: '代理账号管理', key: '7-0' },
      { title: '系统配置', key: '7-1' },
      { title: 'IP白名单', key: '7-2' },
      { title: '支付配置', key: '7-3' },
      { title: '银行卡类型', key: '7-4' },
      { title: '管理员日志', key: '7-5' },
    ],
  },
  {
    title: '活动管理',
    key: '8',
    children: [
      { title: '活动列表', key: '8-0' },
      { title: '充值赠送', key: '8-1' },
      { title: '签到礼包活动', key: '8-2' },
      { title: '邀请返佣', key: '8-3' },
    ],
  },
  {
    title: '营运管理',
    key: '9',
    children: [
      { title: '文章列表', key: '9-0' },
      { title: '文章类型', key: '9-1' },
      { title: '轮播图列表', key: '9-2' },
      { title: 'VIP列表', key: '9-3' },
    ],
  },
  {
    title: '购物管理',
    key: '10',
    children: [
      { title: '商品列表', key: '10-0' },
      { title: '订单列表', key: '10-1' },
      { title: '任务列表', key: '10-2' },
    ],
  },
  {
    title: '自有账号代收付',
    key: '11',
    children: [
      { title: '代收账号列表', key: '11-0' },
      { title: '代收订单列表', key: '11-1' },
      { title: '代付订单列表', key: '11-2' },
    ],
  },
  {
    title: '总代理管理',
    key: '12',
    children: [
      { title: '总代理列表', key: '12-0' },
    ],
  },
  {
    title: '投资理财',
    key: '13',
    children: [
      { title: '理财列表', key: '13-0' },
      { title: '购买记录', key: '13-1' },
      { title: '分红记录', key: '13-2' },
    ],
  },
];
