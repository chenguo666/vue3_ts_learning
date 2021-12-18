import { IForm } from '@/base-ui/form';
export const formConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 40px'
  },
  formItems: [
    {
      field: 'userName',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '权限介绍',
      type: 'input',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
};
