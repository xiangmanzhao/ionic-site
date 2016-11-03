/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/toast/toast';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/navigation/nav-controller';
import * as import21 from 'ionic-angular/components/toolbar/toolbar';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from 'ionic-angular/components/tabs/tabs';
import * as import25 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import26 from 'ionic-angular/components/navbar/navbar';
import * as import27 from 'ionic-angular/components/button/button';
import * as import28 from 'ionic-angular/components/content/content';
import * as import29 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import30 from 'ionic-angular/navigation/nav-controller-base';
import * as import31 from '@angular/core/src/linker/component_factory_resolver';
import * as import32 from 'ionic-angular/gestures/gesture-controller';
import * as import33 from 'ionic-angular/transitions/transition-controller';
import * as import34 from 'ionic-angular/navigation/deep-linker';
import * as import35 from 'ionic-angular/components/nav/nav';
export class Wrapper_ApiDemoPage {
  context:import0.ApiDemoPage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.ApiDemoPage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
export class Wrapper_ApiDemoApp {
  context:import0.ApiDemoApp;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.ApiDemoApp();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_ApiDemoPage_Host:import2.RenderComponentType = (null as any);
class _View_ApiDemoPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ApiDemoPage_0_4:Wrapper_ApiDemoPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage_Host0,renderType_ApiDemoPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage(this.parentInjector.get(import8.ToastController));
    this._appEl_0.initComponent(this._ApiDemoPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ApiDemoPage) && (0 === requestNodeIndex))) { return this._ApiDemoPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApiDemoPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoPage_Host === (null as any))) { (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoPageNgFactory:import10.ComponentFactory<import0.ApiDemoPage> = new import10.ComponentFactory<import0.ApiDemoPage>('ng-component',viewFactory_ApiDemoPage_Host0,import0.ApiDemoPage);
const styles_ApiDemoPage:any[] = ([] as any[]);
var renderType_ApiDemoPage:import2.RenderComponentType = (null as any);
class _View_ApiDemoPage0 extends import1.AppView<import0.ApiDemoPage> {
  _el_0:any;
  _Header_0_3:import11.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import12.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import13.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import14.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import3.AppElement;
  _Button_11_4:import15.Wrapper_Button;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _Button_14_4:import15.Wrapper_Button;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _Button_17_4:import15.Wrapper_Button;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  /*private*/ _appEl_20:import3.AppElement;
  _Button_20_4:import15.Wrapper_Button;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  /*private*/ _appEl_23:import3.AppElement;
  _Button_23_4:import15.Wrapper_Button;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  /*private*/ _appEl_26:import3.AppElement;
  _Button_26_4:import15.Wrapper_Button;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage0,renderType_ApiDemoPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import18.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import12.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import19.App),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import20.NavController,(null as any)),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import13.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import21.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'Toast',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import14.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import19.App),this.parentInjector.get(import22.Keyboard),this.parentInjector.get(import23.NgZone),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import24.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_11,'block','');
    this.renderer.setElementAttribute(this._el_11,'ion-button','');
    this._appEl_11 = new import3.AppElement(11,9,this,this._el_11);
    var compView_11:any = import15.viewFactory_Button0(this.viewUtils,this.injector(11),this._appEl_11);
    this._Button_11_4 = new import15.Wrapper_Button((null as any),'',this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_11),this.renderer);
    this._appEl_11.initComponent(this._Button_11_4.context,([] as any[]),compView_11);
    this._text_12 = this.renderer.createText((null as any),'Show Toast Bottom Position',(null as any));
    compView_11.create(this._Button_11_4.context,[([] as any[]).concat([this._text_12])],(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_14,'block','');
    this.renderer.setElementAttribute(this._el_14,'ion-button','');
    this._appEl_14 = new import3.AppElement(14,9,this,this._el_14);
    var compView_14:any = import15.viewFactory_Button0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Button_14_4 = new import15.Wrapper_Button((null as any),'',this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_14),this.renderer);
    this._appEl_14.initComponent(this._Button_14_4.context,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'Show Toast Top Position',(null as any));
    compView_14.create(this._Button_14_4.context,[([] as any[]).concat([this._text_15])],(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_17,'block','');
    this.renderer.setElementAttribute(this._el_17,'ion-button','');
    this._appEl_17 = new import3.AppElement(17,9,this,this._el_17);
    var compView_17:any = import15.viewFactory_Button0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Button_17_4 = new import15.Wrapper_Button((null as any),'',this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_17),this.renderer);
    this._appEl_17.initComponent(this._Button_17_4.context,([] as any[]),compView_17);
    this._text_18 = this.renderer.createText((null as any),'Show Toast Middle Position',(null as any));
    compView_17.create(this._Button_17_4.context,[([] as any[]).concat([this._text_18])],(null as any));
    this._text_19 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_20 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_20,'block','');
    this.renderer.setElementAttribute(this._el_20,'ion-button','');
    this.renderer.setElementAttribute(this._el_20,'margin-bottom','');
    this._appEl_20 = new import3.AppElement(20,9,this,this._el_20);
    var compView_20:any = import15.viewFactory_Button0(this.viewUtils,this.injector(20),this._appEl_20);
    this._Button_20_4 = new import15.Wrapper_Button((null as any),'',this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_20),this.renderer);
    this._appEl_20.initComponent(this._Button_20_4.context,([] as any[]),compView_20);
    this._text_21 = this.renderer.createText((null as any),'Show Long Toast',(null as any));
    compView_20.create(this._Button_20_4.context,[([] as any[]).concat([this._text_21])],(null as any));
    this._text_22 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_23 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_23,'block','');
    this.renderer.setElementAttribute(this._el_23,'ion-button','');
    this._appEl_23 = new import3.AppElement(23,9,this,this._el_23);
    var compView_23:any = import15.viewFactory_Button0(this.viewUtils,this.injector(23),this._appEl_23);
    this._Button_23_4 = new import15.Wrapper_Button((null as any),'',this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_23),this.renderer);
    this._appEl_23.initComponent(this._Button_23_4.context,([] as any[]),compView_23);
    this._text_24 = this.renderer.createText((null as any),'Show Custom Duration Toast',(null as any));
    compView_23.create(this._Button_23_4.context,[([] as any[]).concat([this._text_24])],(null as any));
    this._text_25 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_26 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_26,'block','');
    this.renderer.setElementAttribute(this._el_26,'ion-button','');
    this._appEl_26 = new import3.AppElement(26,9,this,this._el_26);
    var compView_26:any = import15.viewFactory_Button0(this.viewUtils,this.injector(26),this._appEl_26);
    this._Button_26_4 = new import15.Wrapper_Button((null as any),'',this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_26),this.renderer);
    this._appEl_26.initComponent(this._Button_26_4.context,([] as any[]),compView_26);
    this._text_27 = this.renderer.createText((null as any),'Show Close Button Toast',(null as any));
    compView_26.create(this._Button_26_4.context,[([] as any[]).concat([this._text_27])],(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_13,
        this._el_14,
        this._text_16,
        this._el_17,
        this._text_19,
        this._el_20,
        this._text_22,
        this._el_23,
        this._text_25,
        this._el_26,
        this._text_28
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_11,'click',this.eventHandler(this._handle_click_11_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_17,'click',this.eventHandler(this._handle_click_17_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_20,'click',this.eventHandler(this._handle_click_20_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_23,'click',this.eventHandler(this._handle_click_23_0.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_26,'click',this.eventHandler(this._handle_click_26_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import26.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import21.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import27.Button) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Button_11_4.context; }
    if (((token === import27.Button) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Button_14_4.context; }
    if (((token === import27.Button) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._Button_17_4.context; }
    if (((token === import27.Button) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Button_20_4.context; }
    if (((token === import27.Button) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._Button_23_4.context; }
    if (((token === import27.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Button_26_4.context; }
    if (((token === import28.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    const currVal_4:any = '';
    this._Button_11_4.check_block(currVal_4,throwOnChange,false);
    if (this._Button_11_4.detectChangesInternal(this,this._el_11,throwOnChange)) { this._appEl_11.componentView.markAsCheckOnce(); }
    const currVal_6:any = '';
    this._Button_14_4.check_block(currVal_6,throwOnChange,false);
    if (this._Button_14_4.detectChangesInternal(this,this._el_14,throwOnChange)) { this._appEl_14.componentView.markAsCheckOnce(); }
    const currVal_8:any = '';
    this._Button_17_4.check_block(currVal_8,throwOnChange,false);
    if (this._Button_17_4.detectChangesInternal(this,this._el_17,throwOnChange)) { this._appEl_17.componentView.markAsCheckOnce(); }
    const currVal_10:any = '';
    this._Button_20_4.check_block(currVal_10,throwOnChange,false);
    if (this._Button_20_4.detectChangesInternal(this,this._el_20,throwOnChange)) { this._appEl_20.componentView.markAsCheckOnce(); }
    const currVal_12:any = '';
    this._Button_23_4.check_block(currVal_12,throwOnChange,false);
    if (this._Button_23_4.detectChangesInternal(this,this._el_23,throwOnChange)) { this._appEl_23.componentView.markAsCheckOnce(); }
    const currVal_14:any = '';
    this._Button_26_4.check_block(currVal_14,throwOnChange,false);
    if (this._Button_26_4.detectChangesInternal(this,this._el_26,throwOnChange)) { this._appEl_26.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_11_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_14_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_17_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_20_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_23_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_26_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_click_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.showToast('bottom')) !== false);
    return (true && pd_0);
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.showToast('top')) !== false);
    return (true && pd_0);
  }
  private _handle_click_17_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.showToast('middle')) !== false);
    return (true && pd_0);
  }
  private _handle_click_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.showLongToast()) !== false);
    return (true && pd_0);
  }
  private _handle_click_23_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.showDismissDurationToast()) !== false);
    return (true && pd_0);
  }
  private _handle_click_26_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.showToastWithCloseButton()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ApiDemoPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ApiDemoPage> {
  if ((renderType_ApiDemoPage === (null as any))) { (renderType_ApiDemoPage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_ApiDemoPage,{})); }
  return new _View_ApiDemoPage0(viewUtils,parentInjector,declarationEl);
}
var renderType_ApiDemoApp_Host:import2.RenderComponentType = (null as any);
class _View_ApiDemoApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ApiDemoApp_0_4:Wrapper_ApiDemoApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoApp_Host0,renderType_ApiDemoApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoApp_0_4 = new Wrapper_ApiDemoApp();
    this._appEl_0.initComponent(this._ApiDemoApp_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoApp_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ApiDemoApp) && (0 === requestNodeIndex))) { return this._ApiDemoApp_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApiDemoApp_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoApp_Host === (null as any))) { (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoAppNgFactory:import10.ComponentFactory<import0.ApiDemoApp> = new import10.ComponentFactory<import0.ApiDemoApp>('ng-component',viewFactory_ApiDemoApp_Host0,import0.ApiDemoApp);
const styles_ApiDemoApp:any[] = ([] as any[]);
var renderType_ApiDemoApp:import2.RenderComponentType = (null as any);
class _View_ApiDemoApp0 extends import1.AppView<import0.ApiDemoApp> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Nav_0_4:import29.Wrapper_Nav;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoApp0,renderType_ApiDemoApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import29.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import29.Wrapper_Nav(this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import30.NavControllerBase,(null as any)),this.parentInjector.get(import19.App),this.parentInjector.get(import16.Config),this.parentInjector.get(import22.Keyboard),new import17.ElementRef(this._el_0),this.parentInjector.get(import23.NgZone),this.renderer,this.parentInjector.get(import31.ComponentFactoryResolver),this.parentInjector.get(import32.GestureController),this.parentInjector.get(import33.TransitionController),this.parentInjector.get(import34.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Nav_0_4.context,([] as any[]),(null as any));
    this.init(([] as any[]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import35.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.root;
    this._Nav_0_4.check_root(currVal_0,throwOnChange,false);
    this._Nav_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.context.ngAfterViewInit(); } }
  }
}
export function viewFactory_ApiDemoApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ApiDemoApp> {
  if ((renderType_ApiDemoApp === (null as any))) { (renderType_ApiDemoApp = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_ApiDemoApp,{})); }
  return new _View_ApiDemoApp0(viewUtils,parentInjector,declarationEl);
}