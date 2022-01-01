import { useStore } from '@/store';
export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore();
  const permission = store.state.login.permissions;
  const verifyPermission = `system:${pageName}:${hanldeName}`;
  return !!permission.find((item) => item === verifyPermission);
}
