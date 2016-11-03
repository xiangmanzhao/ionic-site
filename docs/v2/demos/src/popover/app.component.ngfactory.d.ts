import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import10 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_PopoverRadioPage {
    context: import0.PopoverRadioPage;
    changed: boolean;
    constructor(p0: any);
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ApiDemoPage {
    context: import0.ApiDemoPage;
    changed: boolean;
    constructor(p0: any);
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ApiDemoApp {
    context: import0.ApiDemoApp;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare const PopoverRadioPageNgFactory: import10.ComponentFactory<import0.PopoverRadioPage>;
export declare function viewFactory_PopoverRadioPage0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.PopoverRadioPage>;
export declare const ApiDemoPageNgFactory: import10.ComponentFactory<import0.ApiDemoPage>;
export declare function viewFactory_ApiDemoPage0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ApiDemoPage>;
export declare const ApiDemoAppNgFactory: import10.ComponentFactory<import0.ApiDemoApp>;
export declare function viewFactory_ApiDemoApp0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ApiDemoApp>;
