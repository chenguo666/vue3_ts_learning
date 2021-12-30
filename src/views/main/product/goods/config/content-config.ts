export const contentTableConfig = {
  title: '商品列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80', slotName: 'name' },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '80',
      slotName: 'realname'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '80',
      slotName: 'cellphone'
    },
    {
      prop: 'imgUrl',
      label: '视频图片',
      minWidth: '80',
      slotName: 'image'
    },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'enable' },
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
