export const contentTableConfig = {
  title: '菜单列表',
  // showIndexColumn: true,
  // showSelectColumn: true,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    {
      prop: 'type',
      label: '类型',
      minWidth: '100'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100'
    },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'premission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    {
      prop: '操作',
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ]
};
