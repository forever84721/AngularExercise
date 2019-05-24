import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
export class AppRoutingCache implements RouteReuseStrategy {
    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    // 表示路由允許重複使用
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // 默認對所有路由複用 可通過路由配置data:{keep:true}來進行選擇性使用
        if (!route.data.keep) {
            return false;
        }
        return true;
    }
    // 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        AppRoutingCache.handlers[route.routeConfig.path] = handle;
    }
    // 若path在缓存中有的都认为允许还原路由
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!AppRoutingCache.handlers[route.routeConfig.path];
    }
    // 从缓存中获取快照，若无则返回null
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) {
            return null;
        }
        return AppRoutingCache.handlers[route.routeConfig.path];
    }
    // 进入路由触发，判断是否同一路由
    public shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === current.routeConfig;
    }
}
