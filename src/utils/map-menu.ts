import { IBreadcrumb } from '@/base-ui/breadcrumb';
import { RouteRecordRaw } from 'vue-router';
let firstMenu: any = null;
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  const allRoutes: RouteRecordRaw[] = [];
  const routerFiled = require.context('../router/main', true, /\.ts$/);
  routerFiled.keys().forEach((key: any) => {
    // console.log(key);
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  // console.log(allRoutes);
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url;
        });
        if (route) routes.push(route);
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}
// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
//   const breadCrumbs: IBreadcrumb[] = [];
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
//       if (findMenu) {
//         breadCrumbs.push({ name: menu.name, path: menu.url });
//         breadCrumbs.push({ name: findMenu.name, path: findMenu.url });
//         return findMenu;
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu;
//     }
//   }
//   return breadCrumbs;
// }
// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
//       if (findMenu) {
//         return findMenu;
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu;
//     }
//   }
// }
// 代码合并
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadCrumbs: IBreadcrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadCrumbs);
  return breadCrumbs;
}
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadCrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadCrumbs?.push({ name: menu.name });
        breadCrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = [];
  const _recureGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recureGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {
        permissions.push(menu.permission);
      }
    }
  };
  _recureGetPermission(userMenus);
  return permissions;
}
export function getMenuLeafKeys(menuList: any[]) {
  const leftKeys: number[] = [];
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children);
      } else {
        leftKeys.push(menu.id);
      }
    }
  };
  _recurseGetLeaf(menuList);
  return leftKeys;
}
export { firstMenu };
