export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '名称',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      align: 'center',
    },
    {
      title: '邀请码',
      dataIndex: 'inviteCode',
      align: 'center',
    },
    {
      title: '类型',
      dataIndex: 'type',
      align: 'center',
      scopedSlots: { customRender: "type" },
    },
    {
      title: '是否赠送礼金',
      dataIndex: 'isGiveGift',
      align: 'center',
      scopedSlots: { customRender: "isGiveGift" },
    },
    {
      title: '所属总代理',
      dataIndex: 'agent',
      align: 'center',
    },
    {
      title: '邀请链接',
      dataIndex: 'inviteLink',
      align: 'center',
      scopedSlots: { customRender: "inviteLink" },
    },
    {
      title: 'WhatsApp账号',
      dataIndex: 'whatsapp',
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
        name: '代理',
        phone: '888888',
        createdAt: '2021-12-23 12:41:11',
        inviteCode: 'A0OQ0V',
        type: '全线',
        isGiveGift: '是',
        agent: 'afei',
        inviteLink: 'https://v4.global-demo.net/#/register?code=A0OQ0V',
        whatsapp: '',
    })
}
