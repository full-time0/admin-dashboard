export const groups = [
    {
        label: ['VIP任务数完成是否返本', 'VIP任务数完成是否返佣'],
        name: ['isVIPReturn', 'isVIPComplete'],
    },
    {
        label: ['完成单个任务是否允许抢单', '升级vip是否叠加任务次数'],
        name: ['isGrabOrder', 'isVIPUpgrade'],
    },
    {
        label: ['是否完成单个任务返本', '是否完成单个任务返佣'],
        name: ['isTaskReturn', 'isTaskComplete'],
    },
    {
        label: ['是否完成单个商品返本', '是否完成单个商品返佣'],
        name: ['isProductReturn', 'isProductComplete'],
    },
    {
        label: ['完成VIP任务是否直接划转返佣', '完成单次任务是否直接划转返佣'],
        name: ['isVIPAfterReturn', 'istaskAfterReturn'],
    },
    {
        label: ['是否开启VIP入口', '是否允许会员邀请'],
        name: ['isVIPEnter', 'isInviteAllow'],
    },
    {
        label: ['是否每天检测任务完成并重置用户任务数', '是否显示App'],
        name: ['isTaskCompleteReset', 'isDisplay'],
    },
    {
        label: ['用户当前分组模式是否只能做一次任务', '是否显示公告'],
        name: ['isOneTask', 'isReport'],
    },
]