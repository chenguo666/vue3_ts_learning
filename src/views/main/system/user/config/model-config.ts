export const modelConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
      // isHidden: true
    },
    {
      field: 'password',
      label: '密码',
      type: 'input',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  labelWidth: '120px',
  itemStyle: {
    padding: '0px 40px'
  }
};
