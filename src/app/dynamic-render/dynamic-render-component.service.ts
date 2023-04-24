import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable()
export class DynamicRenderComponentService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(container: any, component: any, data?: any) {
    setTimeout(()=> {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      if(container) {
        const viewContainerRef = container.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as any).data = data;
      }
    }, 100 )
  }

  cleanContainer(container: any) {
    if(container) {
      const viewContainerRef = container.viewContainerRef;
      viewContainerRef.clear();
    }
  }
}
