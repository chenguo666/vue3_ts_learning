export const rules = {
  name: [
    { require: true, message: '用户名必传', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须在5-10位',
      trigger: 'blur'
    }
  ],
  password: [
    { require: true, message: '密码必传', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码至少3位'
    }
  ]
};
