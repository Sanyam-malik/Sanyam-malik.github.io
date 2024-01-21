"use strict";
(self["webpackChunkfloreceann_portfolio"] = self["webpackChunkfloreceann_portfolio"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 3575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 5307);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrolltop */ 8164);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/header/header.component */ 2632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 2895);








class AppComponent {
    constructor(titleService, metaService, languageService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.languageService = languageService;
        this.title = "floreceann-portfolio";
    }
    ngOnInit() {
        this.languageService.initLanguage();
        this.titleService.setTitle("Sanyam Malik | Full Stack Developer | Java Developer | Software Engineer");
        this.metaService.addTags([
            {
                name: "keywords",
                content: "Frontend, MEAN Stack Developer , MERN Stack Development , Software Engineer, software, developer",
            },
            {
                name: "description",
                content: "As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express.",
            },
        ]);
        aos__WEBPACK_IMPORTED_MODULE_0__.init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["backgroundColor", "var(--bg-color-hover)", "symbolColor", "#fff", "position", "right", 3, "size"], [1, "fa", "fa-arrow-up", 2, "color", "var(--primary-color)"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-scrolltop", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-header")(3, "router-outlet")(4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 50);
    } }, directives: [ngx_scrolltop__WEBPACK_IMPORTED_MODULE_6__.NgxScrollTopComponent, _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 7142);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 3970);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-animate-on-scroll */ 1993);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 4766);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-google-analytics */ 5943);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-scrolltop */ 8164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);



















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            ngx_scrolltop__WEBPACK_IMPORTED_MODULE_9__.NgxScrollTopModule,
            _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule,
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__.AnimateOnScrollModule.forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production }),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_14__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.trackAnalyticID),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        ngx_scrolltop__WEBPACK_IMPORTED_MODULE_9__.NgxScrollTopModule,
        _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__.AnimateOnScrollModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_14__.NgxGoogleAnalyticsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 2895:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function FooterComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.analyticsService.sendAnalyticEvent("click_{{social.name}}", "footer", "github"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const social_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", social_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](social_r1.icon);
} }
class FooterComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 7, consts: [[1, "footer-left-bar", "d-none", "d-md-block"], [4, "ngFor", "ngForOf"], [1, "footer-right-bar", "d-none", "d-md-block"], ["target", "_blank", 3, "href", "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FooterComponent_li_3_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_6_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Meet with me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "AboutMe.Socials"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "AboutMe.MeetLink"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  color: var(--light-slate);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: var(--light-slate);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: var(--light-slate);\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--light-slate);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURFQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQ0FOO0FBQ0Y7QUFqQ0E7RUFDSSx5QkRvQ1k7QUNEaEI7QUFqQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9DRDRCUTtBQ09oQjtBQWhDSTtFQUNJLGdCQUFBO0FBa0NSO0FBL0JJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQWlDUjtBQS9CUTtFQUNJLGVBQUE7RUFDQSwyQkRlRjtBQ2tCVjtBQTlCUTtFQUNJLGdCQUFBO0FBZ0NaO0FBOUJZO0VBQ0ksbUJBQUE7QUFnQ2hCO0FBM0JJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQTZCUjtBQTNCUTtFQUNJLHdCQUFBO0FBNkJaO0FBMUJRO0VBQ0ksMEZERkQ7RUNHQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRHJCSTtBQ2lEaEI7QUF6Qkk7RUFDSSwwRkRqQkc7RUNrQkgsZUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBMEJSO0FBeEJRO0VBQ0kseUJEcENJO0VDc0NKLDBEQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdFQUFBO0VBQ0Esb0JBQUE7QUEwQlo7QUF4Qlk7RUFDSSxxQkFBQTtFQUNBLDJCRDVDTjtBQ3NFViIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAtLXByaW1hcnktY29sb3I6ICM2NGZmZGE7XG4gICAgLS1iZy1jb2xvci1ob3ZlcjogIzIzMjMyNGUwO1xuICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAjNjRmZmRhO1xuICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAtLWxpZ2h0ZXN0LXNsYXRlOiAjY2NkNmY2O1xuICAgIC0taW1nLWhvdmVyOiAjNjRmZmRhO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLWJnLWNvbG9yOiAjMWUxYjFiO1xuICAgICAgICAtLXByaW1hcnktY29sb3I6ICMwMjhhZmY7XG4gICAgICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6IDAyOGFmZjtcbiAgICAgICAgLS1zbGF0ZTogIzg4OTJiMDtcbiAgICAgICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAgICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAgICAgLS1pbWctaG92ZXI6ICMwMjhhZmY7XG4gICAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzBhMWUyZjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMTEyMjQwO1xuICAgICAgICAtLXByaW1hcnktb3BhY2l0eTogIzAyOGFmZjtcbiAgICAgICAgLS1zbGF0ZTogI2QwZDNkZDtcbiAgICAgICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAgICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAgICAgLS1pbWctaG92ZXI6ICMwMjhhZmY7XG4gICAgfVxufVxuXG4kU2xhdGUgICAgICAgIDogdmFyKC0tc2xhdGUpO1xuJExpZ2h0U2xhdGUgICA6IHZhcigtLWxpZ2h0LXNsYXRlKTtcbiRMaWdodGVzdFNsYXRlOiB2YXIoLS1saWdodGVzdC1zbGF0ZSk7XG4kUHJpbWFyeTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kUHJpbWFyeU9wYWNpdHkgOiB2YXIoLS1wcmltYXJ5LW9wYWNpdHkpO1xuJEJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiRCYWNrZ3JvdW5kSG92ZXI6IHZhcigtLWJnLWNvbG9yLWhvdmVyKTtcbiRJbWdIb3ZlcjogdmFyKC0taW1nLWhvdmVyKTtcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5mb290ZXJ7XG4gICAgY29sb3I6ICRMaWdodFNsYXRlO1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0U2xhdGU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciBsaSwgLmZvb3Rlci1yaWdodC1iYXIgbGl7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1yaWdodC1iYXJ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHJpZ2h0OiA0MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIC13ZWJraXQtd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICAgICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9vdGVyLWNyZWRpdHN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XG5cbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcblxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)("animateFooter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0, transform: "translateY(100%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 3970:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "GeneralModule": () => (/* binding */ GeneralModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 2895);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2632);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
}
GeneralModule.ɵfac = function GeneralModule_Factory(t) { return new (t || GeneralModule)(); };
GeneralModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 2632:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 5307);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function HeaderComponent_li_15_ng_template_6_Template(rf, ctx) { }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.analyticsService.sendAnalyticEvent(item_r3.event, "menu", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r3 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.scroll(item_r3.scrollTo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_li_15_ng_template_6_Template, 0, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", i_r4 < 10 ? "0" + (i_r4 + 1) : i_r4 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.name, "");
} }
function HeaderComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_27_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const item_r9 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.analyticsService.sendAnalyticEvent(item_r9.event, "menu", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_27_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const item_r9 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.scroll(item_r9.scrollTo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", i_r10 < 10 ? "0" + (i_r10 + 1) : i_r10 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
class HeaderComponent {
    constructor(router, analyticsService, languageService) {
        this.router = router;
        this.analyticsService = analyticsService;
        this.languageService = languageService;
        this.responsiveMenuVisible = false;
        this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.cvName = "";
    }
    ngOnInit() {
        this.languageFormControl.valueChanges.subscribe((val) => this.languageService.changeLanguage(val));
        this.languageFormControl.setValue(this.languageService.language);
    }
    scroll(el) {
        if (document.getElementById(el)) {
            document.getElementById(el).scrollIntoView({ behavior: "smooth" });
        }
        else {
            this.router
                .navigate(["/home"])
                .then(() => document.getElementById(el).scrollIntoView({ behavior: "smooth" }));
        }
        this.responsiveMenuVisible = false;
    }
    downloadCV() {
        this.languageService.translateService
            .get("Header.cvName")
            .subscribe((val) => {
            this.cvName = val;
            // app url
            let url = window.location.href;
            // Open a new window with the CV
            window.open(url + "/../assets/cv/" + this.cvName, "_blank");
        });
    }
    getScrollPosition(event) {
        this.pageYPosition = window.pageYOffset;
    }
    changeLanguage(language) {
        this.languageFormControl.setValue(language);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.getScrollPosition(ctx.getScrollPosition($event)); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 33, vars: 24, consts: [[1, "navbar", "main-navbar", "on-top"], [1, "header-container"], ["tabindex", "-1", 1, "logo", "fade-enter-done"], ["href", "/", "aria-label", "home"], [1, "hex-container"], [1, "logo-container"], ["id", "logo", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "viewBox", "0 0 84 96"], ["transform", "translate(-8.000000, -2.000000)"], ["transform", "translate(11.000000, 5.000000)"], ["id", "Shape", "stroke", "currentColor", "stroke-width", "5", "stroke-linecap", "round", "stroke-linejoin", "round", "points", "39 0 0 22 0 67 39 90 78 68 78 23"], ["x", "25", "y", "60", "font-family", "Verdana", "font-size", "40", "fill", "currentColor"], ["ngbNav", "", 1, "menu-ul"], ["nav", "ngbNav"], ["ngbNavItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click", 4, "ngFor", "ngForOf"], [1, "main-btn", "cv-btn", 3, "click"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "g", 7)(9, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "polygon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 7, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 14)(18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_22_listener() { return ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18)(24, "aside", 19)(25, "nav")(26, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, HeaderComponent_li_27_Template, 5, 2, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li")(30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_30_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 14, "Header.Items"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 16, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 18, "Header.Items"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 20, "Header.cvBtn"), " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n.main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: var(--bg-color);\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: var(--bg-color);\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: var(--lightest-slate);\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--primary-color);\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: var(--lightest-slate) !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: var(--primary-color);\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: var(--primary-color);\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: var(--primary-color);\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0px;\n  z-index: 11;\n  padding: 0px 50px;\n  width: 100%;\n  height: 100px;\n  background-color: var(--bg-color);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: var(--transition);\n  filter: none !important;\n  pointer-events: auto !important;\n  -webkit-user-select: auto !important;\n          user-select: auto !important;\n  padding: 0 50px;\n}\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: var(--primary-color);\n}\n  .dropdown-toggle::after {\n  display: none;\n}\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: var(--primary-color);\n  visibility: hidden;\n}\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%] {\n  fill: transparent;\n}\n#logo[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .hex-container[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURFQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQ0FOO0FBQ0Y7QUFsQ0E7RUFDQyxZQUFBO0VBQ0EsMkJEd0NZO0VDdkNaLDBGRDJDVTtBQ1BYO0FBbENFO0VBQ0MsZ0JBQUE7QUFvQ0g7QUFqQ0U7RUFDQyxnQkFBQTtBQW1DSDtBQWpDRTtFQUNDLGlCQUFBO0FBbUNIO0FBaENDO0VBQ0MsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7QUFrQ0Y7QUFoQ0c7RUFDQyx3QkFBQTtBQWtDSjtBQWhDRztFQUNDLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxpQkFBQTtBQWtDSjtBQWhDRztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWtDSjtBQWhDRztFQUNDLGFBQUE7QUFrQ0o7QUFqQ0k7RUFDQyxXQUFBO0FBbUNMO0FBOUJDO0VBQ0MsNkRBQUE7RUFDQSxVQUFBO0FBZ0NGO0FBOUJDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0RyQlc7RUNzQlgsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEZEdEJTO0VDdUJULHFEQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBZ0NGO0FBL0JFO0VBQ0MsYUFBQTtFQUVBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCRDFDYTtBQzJFaEI7QUFoQ0c7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWtDSjtBQWpDSTtFQUNDLGVBQUE7RUFDQSxxQkFBQTtBQW1DTDtBQWxDSztFQUNDLGNBQUE7RUFDQSwyQkRwREk7RUNxREosZUFBQTtFQUNBLGtCQUFBO0FBb0NOO0FBbENLO0VBQ0MscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7QUFvQ047QUE5QkM7RUFDQyw0QkFBQTtBQWdDRjtBQTlCQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBZ0NGO0FBL0JFO0VBQ0MsMkJEaEZPO0FDaUhWO0FBOUJDO0VBQ0MsMkJEcEZRO0VDcUZSLGVBQUE7QUFnQ0Y7QUE5QkM7RUFDQyx1Q0FBQTtFQUNBLG1CQUFBO0FBZ0NGO0FBOUJDO0VBQ0MsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFnQ0Y7QUEvQkU7OztFQUdDLFdBQUE7RUFDQSxhQUFBO0FBaUNIO0FBL0JFO0VBQ0Msa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdDRDdHTztFQzhHUCx5QkFBQTtBQWlDSDtBQWhDRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0NEcEhNO0VDcUhOLDZHQUFBO0FBa0NKO0FBL0JHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0Q3SE07RUM4SE4sMEdBQUE7QUFpQ0o7QUE5Qkc7RUFDQyxrQ0FBQTtBQWdDSjtBQS9CSTtFQUNDLE1BQUE7RUFDQSx3QkFBQTtFQUNBLDBHQUFBO0FBaUNMO0FBOUJJO0VBQ0MsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQUE7QUFnQ0w7QUF6QkM7RUFDQyxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlDRDVKVztFQzZKWCxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGVBQUE7QUEyQkY7QUF2QkE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBMEJEO0FBdkJBO0VBQ0MsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkRBQUE7QUEwQkQ7QUF2QkE7RUFFRTtJQUNDLFNBQUE7SUFDQSxzQkFBQTtFQXlCRDtBQUNGO0FBckJBO0VBQ0M7SUFDQyxhQUFBO0VBdUJBO0FBQ0Y7QUFwQkE7RUFDQzs7SUFFQyxhQUFBO0VBc0JBO0FBQ0Y7QUFuQkE7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwRkQzTVU7QUNnT1g7QUFsQkE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXFCRDtBQWxCQTtFQUNDLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFxQkQ7QUFsQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBcUJEO0FBbEJBO0VBQ0MsOEJBQUE7QUFxQkQ7QUFOQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCRGpRUztBQzBRVjtBQU5BO0VBQ0MsYUFBQTtBQVNEO0FBTkE7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7QUFTRDtBQU5BO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJEclJTO0VDc1JULGtCQUFBO0FBU0Q7QUFMQztFQUNDLG1CQUFBO0FBUUY7QUFKQTtFQUNDLGlCQUFBO0FBT0Q7QUFKQTtFQUNDLDJCRHBTUztBQzJTVjtBQUpBO0VBQ0MsVUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFPRDtBQUpBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBT0Q7QUFKQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtBQU9EO0FBSkE7RUFDQywyQkR6VFM7RUMwVFQsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFPRDtBQUpBO0VBQ0MsMERBQUE7QUFPRDtBQUpBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBT0Q7QUFKQTtFQUNDLDJCRDVVUztFQzZVVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU9EO0FBSkE7RUFDQyxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtBQU9EIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgICAtLWJnLWNvbG9yOiAjMWUxYjFiO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzY0ZmZkYTtcbiAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMjMyMzI0ZTA7XG4gICAgLS1wcmltYXJ5LW9wYWNpdHk6ICM2NGZmZGE7XG4gICAgLS1zbGF0ZTogIzg4OTJiMDtcbiAgICAtLWxpZ2h0LXNsYXRlOiAjYThiMmQxO1xuICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgLS1pbWctaG92ZXI6ICM2NGZmZGE7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tYmctY29sb3I6ICMxZTFiMWI7XG4gICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzAyOGFmZjtcbiAgICAgICAgLS1iZy1jb2xvci1ob3ZlcjogIzIzMjMyNGUwO1xuICAgICAgICAtLXByaW1hcnktb3BhY2l0eTogMDI4YWZmO1xuICAgICAgICAtLXNsYXRlOiAjODg5MmIwO1xuICAgICAgICAtLWxpZ2h0LXNsYXRlOiAjYThiMmQxO1xuICAgICAgICAtLWxpZ2h0ZXN0LXNsYXRlOiAjY2NkNmY2O1xuICAgICAgICAtLWltZy1ob3ZlcjogIzAyOGFmZjtcbiAgICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLWJnLWNvbG9yOiAjMGExZTJmO1xuICAgICAgICAtLXByaW1hcnktY29sb3I6ICMwMjhhZmY7XG4gICAgICAgIC0tYmctY29sb3ItaG92ZXI6ICMxMTIyNDA7XG4gICAgICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAjMDI4YWZmO1xuICAgICAgICAtLXNsYXRlOiAjZDBkM2RkO1xuICAgICAgICAtLWxpZ2h0LXNsYXRlOiAjYThiMmQxO1xuICAgICAgICAtLWxpZ2h0ZXN0LXNsYXRlOiAjY2NkNmY2O1xuICAgICAgICAtLWltZy1ob3ZlcjogIzAyOGFmZjtcbiAgICB9XG59XG5cbiRTbGF0ZSAgICAgICAgOiB2YXIoLS1zbGF0ZSk7XG4kTGlnaHRTbGF0ZSAgIDogdmFyKC0tbGlnaHQtc2xhdGUpO1xuJExpZ2h0ZXN0U2xhdGU6IHZhcigtLWxpZ2h0ZXN0LXNsYXRlKTtcbiRQcmltYXJ5OiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRQcmltYXJ5T3BhY2l0eSA6IHZhcigtLXByaW1hcnktb3BhY2l0eSk7XG4kQmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuJEJhY2tncm91bmRIb3ZlcjogdmFyKC0tYmctY29sb3ItaG92ZXIpO1xuJEltZ0hvdmVyOiB2YXIoLS1pbWctaG92ZXIpO1xuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG4ubWFpbi1uYXZiYXIge1xuXHRoZWlnaHQ6IDcwcHg7XG5cdGJhY2tncm91bmQ6ICRCYWNrZ3JvdW5kO1xuXHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHQubWVudS11bCB7XG5cdFx0bGkge1xuXHRcdFx0bWFyZ2luOiAwcHggMTNweDtcblx0XHR9XG5cdFx0Ly8gRmlyc3QgYW5kIExhc3QgbGkgaGFzIG5vIG1hcmdpblxuXHRcdGxpOmZpcnN0LWNoaWxkIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0fVxuXHRcdGxpOmxhc3QtY2hpbGQge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0fVxuXHR9XG5cdC5tZW51LXJlc3BvbnNpdmUge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDBweDtcblx0XHRib3R0b206IDBweDtcblx0XHRyaWdodDogMHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwdmg7XG5cdFx0ei1pbmRleDogMTA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0XHRvdXRsaW5lOiAwcHg7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcblx0XHRsaSB7XG5cdFx0XHRhIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdFx0LmN2LWJ0biB7XG5cdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMjBweDtcblx0XHRcdH1cblx0XHRcdC5sYW5ndWFnZS1jb250YWluZXIge1xuXHRcdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxOHB4O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDBweDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweDtcblx0XHRcdH1cblx0XHRcdC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3Ige1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAzNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5hc2lkZS1zaG93IHtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuXHRcdHJpZ2h0OiAwcHg7XG5cdH1cblx0YXNpZGUge1xuXHRcdHdpZHRoOiA3NXZ3O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRCYWNrZ3JvdW5kO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cmlnaHQ6IC02MjVweDtcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHRcdGJveC1zaGFkb3c6IHJnYmEoMiwgMTIsIDI3LCAwLjcpIC0xMHB4IDBweCAzMHB4IC0xNXB4O1xuXHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcblx0XHRuYXYge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcblx0XHRcdG9sIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwcHggYXV0byAxMHB4O1xuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRjb2xvcjogJFByaW1hcnk7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcHggMjBweCAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuY3YtYnRuIHtcblx0XHRwYWRkaW5nOiA3cHggMTVweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5uYXYtbGluayB7XG5cdFx0cGFkZGluZzogNXB4IDBweDtcblx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRtYXJnaW46IDBweDtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJFByaW1hcnk7XG5cdFx0fVxuXHR9XG5cdC5uYXYtbnVtYmVyIHtcblx0XHRjb2xvcjogJFByaW1hcnk7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5uYXYtdGV4dCB7XG5cdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1ib3R0b206IDRweDtcblx0fVxuXHQubWVudS13cmFwcGVyIHtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0d2lkdGg6IDM2cHg7XG5cdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR6LWluZGV4OiAxMTtcblx0XHQuaGFtYnVyZ2VyLW1lbnUsXG5cdFx0LmhhbWJ1cmdlci1tZW51OmFmdGVyLFxuXHRcdC5oYW1idXJnZXItbWVudTpiZWZvcmUge1xuXHRcdFx0d2lkdGg6IDM2cHg7XG5cdFx0XHRoZWlnaHQ6IDEuNXB4O1xuXHRcdH1cblx0XHQuaGFtYnVyZ2VyLW1lbnUge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuXHRcdFx0YmFja2dyb3VuZDogJFByaW1hcnk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xuXHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdGJvdHRvbTogOHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAkUHJpbWFyeTtcblx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcblx0XHRcdFx0XHR0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuXHRcdFx0fVxuXHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0dG9wOiA4cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRQcmltYXJ5O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxuXHRcdFx0XHRcdHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG5cdFx0XHR9XG5cdFx0XHQmLmFuaW1hdGUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IHRvcCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5oZWFkZXItY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHR0b3A6IDBweDtcblx0XHR6LWluZGV4OiAxMTtcblx0XHRwYWRkaW5nOiAwcHggNTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRCYWNrZ3JvdW5kO1xuXHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcblx0XHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblx0XHRmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcblx0XHRwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuXHRcdHVzZXItc2VsZWN0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZzogMCA1MHB4O1xuXHR9XG59XG5cbi5vbi10b3Age1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDk7XG5cdGhlaWdodDogMTAwcHg7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG5cbi5uYXYtc2hhZG93IHtcblx0aGVpZ2h0OiA3MHB4O1xuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTBweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHQubWFpbi1uYXZiYXIge1xuXHRcdC5uYXYtbGluayB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcblx0bmF2IC5uYXYge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgyN3B4KSB7XG5cdC5tZW51LXdyYXBwZXIsXG5cdC5tZW51LXJlc3BvbnNpdmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLmZsYWctdGV4dCB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRtYXJnaW46IDAgMTBweDtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRmb250LWZhbWlseTogJENvZGVGb250O1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyIHtcblx0cGFkZGluZy1sZWZ0OiAxNnB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6ICMwYTE5MmYgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcblx0Y29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcblx0cGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3I6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlOmFmdGVyIHtcbi8vICAgICBjb250ZW50OiBcIiBcIjtcbi8vICAgICBiYWNrZ3JvdW5kOiAjNThlMmM0O1xuLy8gICAgIHdpZHRoOiA2MSU7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXJnaW46IGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogMjFweDtcbi8vIH1cbi5hcnJvdy1sYW5ndWFnZSB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0aGVpZ2h0OiAxMHB4O1xuXHR3aWR0aDogMTBweDtcblx0ZmlsbDogJFByaW1hcnk7XG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tbWVudS5zaG93IHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcblx0YmFja2dyb3VuZDogI2NjZDZmNiAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG5cdGxlZnQ6IDIwcHggIWltcG9ydGFudDtcblx0Ym94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiKDIgMTIgMjcgLyA3MCUpO1xufVxuXG4uYXJyb3ctYWN0aXZlIHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHdpZHRoOiAyNXB4O1xuXHRmaWxsOiAkUHJpbWFyeTtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSB7XG5cdC5hcnJvdy1hY3RpdmUge1xuXHRcdHZpc2liaWxpdHk6IGluaGVyaXQ7XG5cdH1cbn1cblxuLmxvZ28gYSAubG9nby1jb250YWluZXIgc3ZnIHBvbHlnb24ge1xuXHRmaWxsOiB0cmFuc3BhcmVudDtcbn1cblxuI2xvZ28ge1xuXHRjb2xvcjogJFByaW1hcnk7XG59XG5cbi5sb2dvIGEgLmxvZ28tY29udGFpbmVyIHN2ZyB7XG5cdGZpbGw6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5zdmcge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmaWxsOiBjdXJyZW50Y29sb3I7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIGEgLmxvZ28tY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xufVxuXG4ubG9nbyBhIHtcblx0Y29sb3I6ICRQcmltYXJ5O1xuXHR3aWR0aDogNDJweDtcblx0aGVpZ2h0OiA0MnB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIGEgLmhleC1jb250YWluZXIge1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xufVxuXG5zdmcge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmaWxsOiBjdXJyZW50Y29sb3I7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIGEge1xuXHRjb2xvcjogJFByaW1hcnk7XG5cdHdpZHRoOiA0MnB4O1xuXHRoZWlnaHQ6IDQycHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcbn1cblxuLmxvZ28ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateMenu", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: "translateY(-50%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1, transform: "none" })),
                        ]),
                    ]),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 2491:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function AboutComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 20);
} if (rf & 2) {
    const text_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", text_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function AboutComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", skill_r3, " ");
} }
class AboutComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 27, vars: 9, consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skills-list"], ["class", "skill-element", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "lbrXps"], [1, "wrapper"], ["data-gatsby-image-wrapper", "", 1, "gatsby-image-wrapper", "gatsby-image-wrapper-constrained", "img"], [2, "max-width", "500px", "display", "block"], ["alt", "", "role", "presentation", "aria-hidden", "true", "src", "data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E", 2, "max-width", "100%", "display", "block", "position", "static"], ["aria-hidden", "true", "data-placeholder-image", "", 2, "opacity", "0", "transition", "opacity 500ms linear 0s", "background-color", "rgb(232, 232, 232)", "position", "absolute", "inset", "0px", "object-fit", "cover"], ["width", "300", "height", "300", "data-main-image", "", "sizes", "(min-width: 500px) 500px, 100vw", "decoding", "async", "src", "assets/images/me/sammy.jpg", "srcset", "\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/sammy.jpg 125w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/sammy.jpg 250w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/sammy.jpg 500w\n\t\t\t\t\t\t\t\t\t\t", "alt", "Headshot", 2, "object-fit", "cover", "opacity", "1"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 1, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AboutComponent_li_15_Template, 3, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, "AboutMe.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, "AboutMe.Paragraphs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, "AboutMe.Skills"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  border-radius: 3px;\n  bottom: 290px;\n  left: 23px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  color: var(--slate);\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: var(--primary-color);\n  font-size: 14px;\n  line-height: 12px;\n}\n.lbrXps[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 300px;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: block;\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  background-color: var(--img-hover);\n}\n.wrapper[_ngcontent-%COMP%]::before {\n  top: 0px;\n  left: 0px;\n  background-color: #0a192f;\n  mix-blend-mode: screen;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  border: 2px solid var(--primary-color);\n  top: 14px;\n  left: 14px;\n  z-index: -1;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::before, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n  transform: translate(-4px, -4px);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover::after, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus::after {\n  transform: translate(8px, 8px);\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   [data-main-image][_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateZ(0);\n  transition: opacity 0.25s linear;\n  will-change: opacity;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: 0;\n  max-width: none;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  object-fit: cover;\n}\nimg[alt=\"\"][_ngcontent-%COMP%], img[_ngcontent-%COMP%]:not([alt]) {\n  filter: blur(5px);\n}\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], .gatsby-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  mix-blend-mode: multiply;\n  filter: grayscale(100%) contrast(1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.gatsby-image-wrapper-constrained[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%], .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus   .img[_ngcontent-%COMP%] {\n  filter: none;\n  mix-blend-mode: normal;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLDhFQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FERUo7QUNDQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFREVOO0FBQ0Y7QUNDQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFRENOO0FBQ0Y7QUFqQ0M7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBbUNGO0FBaENDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUFrQ0Y7QUFoQ0U7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQWlDSDtBQTlCRTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQWdDSDtBQTVCQztFQUNDLGFBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE4QkY7QUEzQkM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEZDRVM7RUREVCxtQkNSYztBRHFDaEI7QUE1QkU7RUFDQyxtQkFBQTtBQThCSDtBQTNCRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSwyQkNkTztFRGVQLGVBQUE7RUFDQSxpQkFBQTtBQTZCSDtBQXhCQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUEyQkQ7QUF4QkE7RUFDQyxrREFBQTtFQUNBLDBEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NDN0JVO0FEd0RYO0FBeEJBO0VBQ0MsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBMkJEO0FBeEJBO0VBQ0Msc0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUEyQkQ7QUF4QkE7O0VBRUMsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtBQTJCRDtBQXhCQTs7RUFFQyxZQUFBO0VBQ0EsZ0NBQUE7QUEyQkQ7QUF4QkE7O0VBRUMsa0RBQUE7QUEyQkQ7QUF6QkE7O0VBRUMsOEJBQUE7QUE0QkQ7QUExQkE7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBNkJEO0FBM0JBO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQThCRDtBQTNCQTs7RUFFQyxpQkFBQTtBQThCRDtBQTNCQTs7O0VBR0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQThCRDtBQTNCQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMERBQUE7QUE4QkQ7QUEzQkE7RUFDQyxxQkFBQTtBQThCRDtBQTNCQTtFQUNDLGdCQUFBO0FBOEJEO0FBM0JBOztFQUVDLFlBQUE7RUFDQSxzQkFBQTtBQThCRDtBQTNCQTtFQUNDO0lBQ0MsaUJBQUE7SUFDQSxlQUFBO0VBOEJBO0FBQ0Y7QUEzQkE7RUFFRTtJQUNDLFlBQUE7SUFDQSxhQUFBO0VBNEJEO0VBMUJBO0lBQ0MsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQTRCRDtBQUNGO0FBeEJBO0VBRUU7SUFDQyxXQUFBO0VBeUJEO0VBdkJDO0lBQ0MsWUFBQTtJQUNBLGFBQUE7RUF5QkY7RUF0QkM7SUFDQyxhQUFBO0VBd0JGO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYWJvdXQge1xuXHQuYWJvdXQtZGVzY3JpcHRpb24ge1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0bWF4LXdpZHRoOiA0ODBweDtcblx0fVxuXG5cdC5hYm91dC1pbWctY29udGFpbmVyIHtcblx0XHR3aWR0aDogMzI0cHg7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0Ly8gYm9yZGVyOiAycHggc29saWQgJFByaW1hcnk7XG5cdFx0XHR6LWluZGV4OiAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0Ym90dG9tOiAyOTBweDtcblx0XHRcdGxlZnQ6IDIzcHg7XG5cdFx0fVxuXG5cdFx0aW1nIHtcblx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXHR9XG5cblx0LnNraWxscy1saXN0IHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNDBweCwgMjAwcHgpKTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAyMHB4IDAgMCAwO1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdH1cblxuXHQuc2tpbGwtZWxlbWVudCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHRcdGNvbG9yOiAkU2xhdGU7XG5cdFx0c3BhbiB7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdH1cblxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwi4pa5XCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0Y29sb3I6ICRQcmltYXJ5O1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEycHg7XG5cdFx0fVxuXHR9XG59XG5cbi5sYnJYcHMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5sYnJYcHMgLndyYXBwZXIge1xuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJEltZ0hvdmVyO1xufVxuXG4ud3JhcHBlcjo6YmVmb3JlIHtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcblx0bWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbn1cblxuLmxiclhwcyAud3JhcHBlcjo6YWZ0ZXIge1xuXHRib3JkZXI6IDJweCBzb2xpZCAkUHJpbWFyeTtcblx0dG9wOiAxNHB4O1xuXHRsZWZ0OiAxNHB4O1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLmxiclhwcyAud3JhcHBlcjo6YmVmb3JlLFxuLmxiclhwcyAud3JhcHBlcjo6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6aG92ZXIsXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzIHtcblx0b3V0bGluZTogMHB4O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcbn1cblxuLmxiclhwcyAud3JhcHBlcjpob3Zlcixcbi5sYnJYcHMgLndyYXBwZXI6Zm9jdXMtdmlzaWJsZSB7XG5cdGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xufVxuLmxiclhwcyAud3JhcHBlcjpob3Zlcjo6YWZ0ZXIsXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzOjphZnRlciB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgOHB4KTtcbn1cbi5nYXRzYnktaW1hZ2Utd3JhcHBlciBbZGF0YS1tYWluLWltYWdlXSB7XG5cdG9wYWNpdHk6IDA7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBsaW5lYXI7XG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuLmdhdHNieS1pbWFnZS13cmFwcGVyIGltZyB7XG5cdGJvdHRvbTogMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHRtYXJnaW46IDA7XG5cdG1heC13aWR0aDogbm9uZTtcblx0cGFkZGluZzogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmltZ1thbHQ9XCJcIl0sXG5pbWc6bm90KFthbHRdKSB7XG5cdGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5pbWcsXG5zdmcsXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIge1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyIC5pbWcge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0bWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuXHRmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBjb250cmFzdCgxKTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cblxuLmdhdHNieS1pbWFnZS13cmFwcGVyLWNvbnN0cmFpbmVkIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyOmhvdmVyIC5pbWcsXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzIC5pbWcge1xuXHRmaWx0ZXI6IG5vbmU7XG5cdG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuXHQuYWJvdXQtaW1nLWNvbnRhaW5lciB7XG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXHQuYWJvdXQge1xuXHRcdC5hYm91dC1pbWctY29udGFpbmVyIGltZyB7XG5cdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdH1cblx0XHQuYWJvdXQtaW1nLWNvbnRhaW5lcjphZnRlciB7XG5cdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0Ym90dG9tOiAxOTBweDtcblx0XHRcdGxlZnQ6IDc0cHg7XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXHQuYWJvdXQge1xuXHRcdC5hYm91dC1pbWctY29udGFpbmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTgwcHg7XG5cdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHR9XG5cblx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICMxZTFiMWI7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNjRmZmRhO1xuICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAtLXByaW1hcnktb3BhY2l0eTogIzY0ZmZkYTtcbiAgICAtLXNsYXRlOiAjODg5MmIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLWltZy1ob3ZlcjogIzY0ZmZkYTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMjMyMzI0ZTA7XG4gICAgICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tYmctY29sb3I6ICMwYTFlMmY7XG4gICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzAyOGFmZjtcbiAgICAgICAgLS1iZy1jb2xvci1ob3ZlcjogIzExMjI0MDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6ICMwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICNkMGQzZGQ7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuJFNsYXRlICAgICAgICA6IHZhcigtLXNsYXRlKTtcbiRMaWdodFNsYXRlICAgOiB2YXIoLS1saWdodC1zbGF0ZSk7XG4kTGlnaHRlc3RTbGF0ZTogdmFyKC0tbGlnaHRlc3Qtc2xhdGUpO1xuJFByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJFByaW1hcnlPcGFjaXR5IDogdmFyKC0tcHJpbWFyeS1vcGFjaXR5KTtcbiRCYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4kQmFja2dyb3VuZEhvdmVyOiB2YXIoLS1iZy1jb2xvci1ob3Zlcik7XG4kSW1nSG92ZXI6IHZhcigtLWltZy1ob3Zlcik7XG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */"] });


/***/ }),

/***/ 7206:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function BannerComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "Banner.Location"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.location);
} }
class BannerComponent {
    constructor(http, analyticsService) {
        this.http = http;
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.http.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.geolocationAPIKey}`).subscribe(data => {
            this.latitude = data['location']['latitude'];
            this.longitude = data['location']['longitude'];
            let city = String(data['city']['name']).split(" ")[0];
            let state = String(data['state']['name']);
            let country = String(data['country']['name']);
            let flag = String(data['country']['flag']);
            this.location = flag + " " + city + ", " + state + ", " + country;
        });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService)); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 24, vars: 20, consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [4, "ngIf"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], ["target", "_black", 1, "main-btn", 3, "href", "click"], [1, "fas", "fa-globe-americas"], [1, "underline"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BannerComponent_p_15_Template, 7, 4, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_20_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "banner", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bannerTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, "Banner.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "Banner.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 12, "Banner.Posttitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 14, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 16, "AboutMe.Mail"), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 18, "Banner.ActionBtn"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n.banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  background: linear-gradient(120deg, #50efb5, #8ff4ca, #7e57c2, #0087f2, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);\n  color: #fff;\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--lightest-slate);\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--slate);\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURFQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSx3QkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQ0FOO0FBQ0Y7QUFqQ0E7RUFDQyxpQkFBQTtBQW1DRDtBQWpDQztFQUNDLGNBQUE7RUFDQSxhQUFBO0FBbUNGO0FBakNFO0VBQ0MsbUJBQUE7RUFDQSxzQkFBQTtBQW1DSDtBQWpDRztFQUNDLGdCQUFBO0FBbUNKO0FBaENHO0VBQ0MsMkJEdUJNO0VDdEJOLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEZEeUJPO0FDU1g7QUEvQkc7O0VBRUMsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUpEZU87RUNkUCxvSEFBQTtFQVlBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBc0JKO0FBbkJHO0VBQ0MsNEJEVlk7QUMrQmhCO0FBbEJHO0VBQ0MsbUJEaEJZO0FDb0NoQjtBQWpCRztFQUNDLG1CQUFBO0FBbUJKO0FBaEJHO0VBQ0MsZ0JBQUE7QUFrQko7QUFmRztFQUNDLFlBQUE7QUFpQkoiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICMxZTFiMWI7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNjRmZmRhO1xuICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAtLXByaW1hcnktb3BhY2l0eTogIzY0ZmZkYTtcbiAgICAtLXNsYXRlOiAjODg5MmIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLWltZy1ob3ZlcjogIzY0ZmZkYTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMjMyMzI0ZTA7XG4gICAgICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tYmctY29sb3I6ICMwYTFlMmY7XG4gICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzAyOGFmZjtcbiAgICAgICAgLS1iZy1jb2xvci1ob3ZlcjogIzExMjI0MDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6ICMwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICNkMGQzZGQ7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuJFNsYXRlICAgICAgICA6IHZhcigtLXNsYXRlKTtcbiRMaWdodFNsYXRlICAgOiB2YXIoLS1saWdodC1zbGF0ZSk7XG4kTGlnaHRlc3RTbGF0ZTogdmFyKC0tbGlnaHRlc3Qtc2xhdGUpO1xuJFByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJFByaW1hcnlPcGFjaXR5IDogdmFyKC0tcHJpbWFyeS1vcGFjaXR5KTtcbiRCYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4kQmFja2dyb3VuZEhvdmVyOiB2YXIoLS1iZy1jb2xvci1ob3Zlcik7XG4kSW1nSG92ZXI6IHZhcigtLWltZy1ob3Zlcik7XG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmJhbm5lciB7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG5cdC5jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdGhlaWdodDogMTAwdmg7XG5cblx0XHQuc2VjdGlvbi1ib3gtYmFubmVyIHtcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG5cdFx0XHQuY29udGVudCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDk4cHg7XG5cdFx0XHR9XG5cblx0XHRcdGgxIHtcblx0XHRcdFx0Y29sb3I6ICRQcmltYXJ5O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDNweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHRcdFx0fVxuXG5cdFx0XHRoMixcblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Zm9udC1zaXplOiA4MHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS4xO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHRcdFx0XHQxMjBkZWcsXG5cdFx0XHRcdFx0IzUwZWZiNSxcblx0XHRcdFx0XHQjOGZmNGNhLFxuXHRcdFx0XHRcdCM3ZTU3YzIsXG5cdFx0XHRcdFx0IzAwODdmMixcblx0XHRcdFx0XHQjMjZjNmRhLFxuXHRcdFx0XHRcdCM0M2EwNDcsXG5cdFx0XHRcdFx0I2VlZmY0MSxcblx0XHRcdFx0XHQjZjlhODI1LFxuXHRcdFx0XHRcdCNmZjU3MjJcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdGJhY2tncm91bmQtY2xpcDogdGV4dDtcblx0XHRcdFx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG5cdFx0XHR9XG5cblx0XHRcdGgyIHtcblx0XHRcdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGNvbG9yOiAkU2xhdGU7XG5cdFx0XHR9XG5cblx0XHRcdC5iYW5uZXItZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3MHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRwIHtcblx0XHRcdFx0bWF4LXdpZHRoOiA4MDBweDtcblx0XHRcdH1cblxuXHRcdFx0LmRpdi1idG4tYmFubmVyIHtcblx0XHRcdFx0aGVpZ2h0OiA0M3B4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('bannerTrigger', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, transform: "translateX(-50px)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 1605:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class ContactComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 18, vars: 15, consts: [["id", "contact", 1, "section", "contact"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "href", "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_14_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" 05. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "Contact.Pretitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "Contact.Content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, "AboutMe.Mail"), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 13, "Contact.Btn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n.contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: var(--lightest-slate);\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: var(--primary-color);\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FERUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0Esd0JBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0Esb0JBQUE7RUNDTjtBQUNGO0FERUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0Esd0JBQUE7SUFDQSx5QkFBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0Esb0JBQUE7RUNBTjtBQUNGO0FBakNBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWtDSjtBQWhDSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFrQ1I7QUEvQkk7RUFFSSxrQkFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJEU1E7RUNSUixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQWdDUjtBQTlCSTtFQUNJLGtCQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJCRFRFO0VDVUYsZUFBQTtFQUNBLDBGRExHO0VDTUgsbUJBQUE7RUFDQSxtQkFBQTtFQUlBLHVCQUFBO0VBQ0Esa0JBQUE7QUFnQ1I7QUEzQkE7RUFFSTtJQUNJLGFBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtFQTZCTjtFQTNCTTtJQUNJLG1CQUFBO0lBQ0Esc0JBQUE7RUE2QlY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICMxZTFiMWI7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNjRmZmRhO1xuICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAtLXByaW1hcnktb3BhY2l0eTogIzY0ZmZkYTtcbiAgICAtLXNsYXRlOiAjODg5MmIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLWltZy1ob3ZlcjogIzY0ZmZkYTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMjMyMzI0ZTA7XG4gICAgICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tYmctY29sb3I6ICMwYTFlMmY7XG4gICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzAyOGFmZjtcbiAgICAgICAgLS1iZy1jb2xvci1ob3ZlcjogIzExMjI0MDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6ICMwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICNkMGQzZGQ7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuJFNsYXRlICAgICAgICA6IHZhcigtLXNsYXRlKTtcbiRMaWdodFNsYXRlICAgOiB2YXIoLS1saWdodC1zbGF0ZSk7XG4kTGlnaHRlc3RTbGF0ZTogdmFyKC0tbGlnaHRlc3Qtc2xhdGUpO1xuJFByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJFByaW1hcnlPcGFjaXR5IDogdmFyKC0tcHJpbWFyeS1vcGFjaXR5KTtcbiRCYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4kQmFja2dyb3VuZEhvdmVyOiB2YXIoLS1iZy1jb2xvci1ob3Zlcik7XG4kSW1nSG92ZXI6IHZhcigtLWltZy1ob3Zlcik7XG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmNvbnRhY3R7XG5cbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuXG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAuY29udGFjdC10aXRsZXtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG4gICAgLmNvbnRhY3QtcHJlLXRpdGxle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgXG4gICAgLmNvbnRhY3R7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG5cbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3575:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 7206);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2491);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/jobs.component */ 185);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 2711);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4407);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 1605);








class HomeComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-banner")(2, "app-about")(3, "app-jobs")(4, "app-projects")(5, "app-testimonial")(6, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__.JobsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.projectsComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_5__.TestimonialComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7142:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3575);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2491);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 7206);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1605);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4407);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobs/jobs.component */ 185);
/* harmony import */ var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-projects/more-projects.component */ 6437);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ 2711);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__.JobsComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.projectsComponent,
        _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__.MoreprojectsComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
        _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__.TestimonialComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 185:
/*!********************************************************!*\
  !*** ./src/app/components/home/jobs/jobs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsComponent": () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function JobsComponent_li_12_ng_template_3_div_0_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const jobDescriptionParagraph_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobsComponent_li_12_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, JobsComponent_li_12_ng_template_3_div_0_p_7_Template, 2, 3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobP_r6 = ctx.$implicit;
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", jobP_r6.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@ ", job_r2.Tab, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobP_r6.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", jobP_r6.Description);
} }
function JobsComponent_li_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, JobsComponent_li_12_ng_template_3_div_0_Template, 9, 4, "div", 14);
} if (rf & 2) {
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r2.Profiles);
} }
function JobsComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JobsComponent_li_12_ng_template_3_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", job_r2.Tab)("ngbNavItem", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Tab);
} }
class JobsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.active = 0;
    }
    ngOnInit() {
    }
}
JobsComponent.ɵfac = function JobsComponent_Factory(t) { return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
JobsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobsComponent, selectors: [["app-jobs"]], decls: 15, vars: 8, consts: [["id", "jobs", 1, "section", "jobs"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["class", "pb-4", 4, "ngFor", "ngForOf"], [1, "pb-4"], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "ul", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function JobsComponent_Template_ul_activeIdChange_10_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobsComponent_li_12_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Experience.Jobs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 185px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: var(--bg-color-hover) !important;\n  color: var(--primary-color) !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: var(--bg-color-hover) !important;\n  color: var(--primary-color) !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: var(--slate);\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid var(--primary-opacity);\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: var(--bg-color-hover);\n}\n.jobs[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: var(--lightest-slate);\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: var(--light-slate);\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: var(--primary-color);\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n    padding-left: 30px;\n  }\n\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEVBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QURFSjtBQ0NBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0VERU47QUFDRjtBQ0NBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0VEQ047QUFDRjtBQWxDQTtFQUNDLGFBQUE7QUFvQ0Q7QUFsQ0M7RUFDQyxpQkFBQTtBQW9DRjtBQWpDQztFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQW1DRjtBQWhDQztFQUNDLGtEQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBa0NGO0FBL0JDO0VBQ0Msa0RBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFpQ0Y7QUE5QkM7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsMERBQUE7RUFDQSxlQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEsMERBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEZDVFM7RURVVCxlQUFBO0VBQ0EsbUJDcEJjO0FEb0RoQjtBQTdCQztFQUNDLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQ3JCZ0I7QURvRGxCO0FBM0JBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBOEJEO0FBNUJDO0VBQ0MsNEJDbENjO0VEbUNkLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBOEJGO0FBNUJFO0VBQ0MsMkJDdkNPO0FEcUVWO0FBMUJDO0VBQ0MsMEZDdENTO0VEdUNULGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDckRjO0VEc0RkLG1CQUFBO0FBNEJGO0FBekJDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTJCRjtBQXpCRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSwyQkNqRU87QUQ0RlY7QUF0QkE7RUFFRTtJQUNDLFlBQUE7SUFDQSxrQkFBQTtFQXdCRDs7RUFyQkQ7SUFDQyx5QkFBQTtFQXdCQTtFQXRCQTtJQUNDLDJCQUFBO0VBd0JEO0VBckJBO0lBQ0MsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUF1QkQ7QUFDRiIsImZpbGUiOiJqb2JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdC50YWItY29udGVudCB7XG5cdFx0bWFyZ2luLWxlZnQ6IDM4cHg7XG5cdH1cblxuXHR1bCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDE4NXB4O1xuXHRcdGJvcmRlcjogbm9uZTtcblx0fVxuXG5cdGEuYWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkQmFja2dyb3VuZEhvdmVyICFpbXBvcnRhbnQ7XG5cdFx0Y29sb3I6ICRQcmltYXJ5ICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0fVxuXG5cdGE6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRCYWNrZ3JvdW5kSG92ZXIgIWltcG9ydGFudDtcblx0XHRjb2xvcjogJFByaW1hcnkgIWltcG9ydGFudDtcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHR9XG5cblx0YSB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcblx0XHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG5cdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0XHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0aGVpZ2h0OiA0MnB4O1xuXHRcdHBhZGRpbmc6IDAgMjBweCAycHg7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGNvbG9yOiAkU2xhdGU7XG5cdH1cblxuXHRsaSB7XG5cdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkUHJpbWFyeU9wYWNpdHk7XG5cdFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDJweDtcblx0XHRib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICRCYWNrZ3JvdW5kSG92ZXI7XG5cdH1cbn1cblxuLmpvYnMge1xuXHRtYXgtd2lkdGg6IDcwMHB4O1xuXHRtYXJnaW46IGF1dG87XG5cblx0LnRpdGxlLXRhYi1jb250ZW50IHtcblx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG5cdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXG5cdFx0LmNvbXBhbnktdGFiLWNvbnRlbnQge1xuXHRcdFx0Y29sb3I6ICRQcmltYXJ5O1xuXHRcdH1cblx0fVxuXG5cdC5qb2ItdGltZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHQtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG5cdFx0LW1vei1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuXHRcdC1tcy1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuXHRcdGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG5cdFx0Y29sb3I6ICRMaWdodFNsYXRlO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblxuXHQuam9iLWRlc2NyaXB0aW9uIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCLilrlcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRjb2xvcjogJFByaW1hcnk7XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuam9icyB7XG5cdFx0LmpvYi1kZXNjcmlwdGlvbiB7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdFx0fVxuXHR9XG5cdDo6bmctZGVlcCAuam9icy10YWJzIHtcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG5cdFx0LnRhYi1jb250ZW50IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHR1bCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHRcdH1cblx0fVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICMxZTFiMWI7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNjRmZmRhO1xuICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAtLXByaW1hcnktb3BhY2l0eTogIzY0ZmZkYTtcbiAgICAtLXNsYXRlOiAjODg5MmIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLWltZy1ob3ZlcjogIzY0ZmZkYTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMjMyMzI0ZTA7XG4gICAgICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tYmctY29sb3I6ICMwYTFlMmY7XG4gICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzAyOGFmZjtcbiAgICAgICAgLS1iZy1jb2xvci1ob3ZlcjogIzExMjI0MDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6ICMwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICNkMGQzZGQ7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuJFNsYXRlICAgICAgICA6IHZhcigtLXNsYXRlKTtcbiRMaWdodFNsYXRlICAgOiB2YXIoLS1saWdodC1zbGF0ZSk7XG4kTGlnaHRlc3RTbGF0ZTogdmFyKC0tbGlnaHRlc3Qtc2xhdGUpO1xuJFByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJFByaW1hcnlPcGFjaXR5IDogdmFyKC0tcHJpbWFyeS1vcGFjaXR5KTtcbiRCYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4kQmFja2dyb3VuZEhvdmVyOiB2YXIoLS1iZy1jb2xvci1ob3Zlcik7XG4kSW1nSG92ZXI6IHZhcigtLWltZy1ob3Zlcik7XG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */"] });


/***/ }),

/***/ 6437:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/more-projects/more-projects.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreprojectsComponent": () => (/* binding */ MoreprojectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function MoreprojectsComponent_div_9_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r4);
} }
function MoreprojectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const project_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.redirect(project_r1["demoLink"], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 12)(5, "g", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 14)(7, "path", 15)(8, "path", 16)(9, "path", 17)(10, "path", 18)(11, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20)(13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.analyticsService.sendAnalyticEvent("click_pokemonlist_external_link", "projects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.analyticsService.sendAnalyticEvent("click_pokemonlist_github", "projects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div")(22, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MoreprojectsComponent_div_9_li_23_Template, 3, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
} }
class MoreprojectsComponent {
    constructor(router, analyticsService) {
        this.router = router;
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    redirect(route, event) {
        const id = event.target.id;
        if (id == "demoLink" || id == "ghLink") {
            return;
        }
        window.open(route, "_blank");
    }
}
MoreprojectsComponent.ɵfac = function MoreprojectsComponent_Factory(t) { return new (t || MoreprojectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
MoreprojectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoreprojectsComponent, selectors: [["app-more-projects"]], decls: 11, vars: 6, consts: [[1, "section", "more-projects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 project-col", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "project-col", 3, "click"], [1, "more-project-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 520 520"], ["transform", "translate(0.000000,529.000000) scale(0.100000,-0.100000)", "fill", "currentColor", "stroke", "none"], ["d", "M4533 4838 l-233 -232 0 56 c0 67 -15 107 -44 114 -12 2 -491 3\n\t\t\t\t\t\t\t\t\t\t-1066 2 l-1045 -3 -60 -32 c-49 -26 -135 -107 -466 -440 -429 -431 -438 -442\n\t\t\t\t\t\t\t\t\t\t-459 -555 -6 -28 -10 -138 -10 -245 l0 -195 -67 3 c-82 3 -112 -5 -117 -34 -3\n\t\t\t\t\t\t\t\t\t\t-12 -8 -92 -11 -177 -9 -215 -17 -218 -176 -55 -95 97 -117 115 -143 115 -26\n\t\t\t\t\t\t\t\t\t\t0 -54 -24 -199 -169 -148 -148 -168 -172 -162 -192 4 -13 58 -76 120 -139 107\n\t\t\t\t\t\t\t\t\t\t-109 112 -117 103 -142 l-10 -28 -173 0 c-168 0 -174 -1 -189 -22 -13 -19 -16\n\t\t\t\t\t\t\t\t\t\t-60 -16 -253 0 -126 4 -237 10 -245 10 -17 112 -28 261 -29 95 -1 96 -1 108\n\t\t\t\t\t\t\t\t\t\t-28 13 -28 11 -30 -108 -144 -100 -96 -121 -120 -121 -144 0 -25 28 -57 168\n\t\t\t\t\t\t\t\t\t\t-197 92 -92 175 -168 185 -168 10 0 73 52 142 116 108 100 128 115 150 110\n\t\t\t\t\t\t\t\t\t\tl25 -6 0 -170 c0 -213 -2 -210 130 -210 l90 0 0 -185 c0 -172 1 -186 20 -205\n\t\t\t\t\t\t\t\t\t\t20 -20 33 -20 689 -20 l668 0 5 -50 c3 -28 13 -59 23 -70 18 -20 33 -20 1042\n\t\t\t\t\t\t\t\t\t\t-20 1010 0 1023 0 1043 20 11 11 20 29 20 40 0 13 -70 93 -189 217 l-189 197\n\t\t\t\t\t\t\t\t\t\t5 1360 5 1361 449 450 c440 441 449 451 449 490 0 38 -8 47 -173 212 -165 165\n\t\t\t\t\t\t\t\t\t\t-174 173 -212 173 -38 0 -47 -8 -272 -232z m402 -28 l120 -120 -103 -102 -102\n\t\t\t\t\t\t\t\t\t\t-103 -122 122 -123 123 100 100 c55 55 102 100 105 100 3 0 59 -54 125 -120z\n\t\t\t\t\t\t\t\t\t\tm-765 -242 l0 -93 -560 -560 -560 -560 -125 -300 c-134 -320 -141 -347 -94\n\t\t\t\t\t\t\t\t\t\t-374 24 -13 42 -7 330 113 l304 127 352 351 352 352 -6 -1234 c-3 -679 -6\n\t\t\t\t\t\t\t\t\t\t-1236 -7 -1237 -1 -2 -1158 1180 -1396 1427 -119 124 -139 140 -167 140 -24 0\n\t\t\t\t\t\t\t\t\t\t-37 -7 -49 -26 -16 -23 -17 -95 -11 -950 l5 -924 -629 0 -629 0 0 140 0 140\n\t\t\t\t\t\t\t\t\t\t84 0 c64 0 87 4 97 16 9 11 14 65 17 184 l5 168 26 12 c25 11 30 8 143 -109\n\t\t\t\t\t\t\t\t\t\t93 -96 122 -121 144 -121 21 0 59 32 183 153 180 176 180 176 181 201 0 10\n\t\t\t\t\t\t\t\t\t\t-35 55 -77 100 -161 169 -155 161 -147 189 l6 27 173 0 c151 0 174 2 187 18\n\t\t\t\t\t\t\t\t\t\t13 14 17 57 20 255 4 282 10 267 -112 267 -42 0 -118 3 -168 6 -86 7 -91 8\n\t\t\t\t\t\t\t\t\t\t-97 32 -5 22 8 40 109 141 97 97 116 121 116 147 0 25 -25 54 -169 198 -148\n\t\t\t\t\t\t\t\t\t\t146 -172 167 -193 161 -12 -4 -75 -58 -138 -119 -110 -108 -116 -113 -142\n\t\t\t\t\t\t\t\t\t\t-103 l-28 11 0 172 c0 210 4 204 -133 204 l-88 0 3 223 c3 193 5 226 22 257\n\t\t\t\t\t\t\t\t\t\t26 49 74 98 121 123 38 21 54 22 355 25 173 1 325 4 337 7 40 9 44 34 27 147\n\t\t\t\t\t\t\t\t\t\t-22 145 -23 384 -1 467 20 73 29 88 60 94 12 2 460 5 995 6 l972 1 0 -92z\n\t\t\t\t\t\t\t\t\t\tm-75 -838 l-665 -665 -122 123 -123 122 665 665 665 665 122 -122 123 -123\n\t\t\t\t\t\t\t\t\t\t-665 -665z m-2090 623 c0 -87 3 -186 7 -220 l8 -63 -227 0 -227 0 44 48 c84\n\t\t\t\t\t\t\t\t\t\t89 385 392 390 392 3 0 5 -71 5 -157z m1310 -1353 c-6 -10 -326 -142 -331\n\t\t\t\t\t\t\t\t\t\t-137 -2 2 20 62 50 133 30 71 61 147 70 168 l17 40 99 -99 c54 -54 97 -102 95\n\t\t\t\t\t\t\t\t\t\t-105z m-2003 184 l67 -7 -5 -141 c-4 -84 -2 -151 4 -166 7 -19 30 -34 93 -59\n\t\t\t\t\t\t\t\t\t\t46 -19 93 -34 103 -33 11 0 47 27 80 59 34 32 85 81 114 108 l54 50 98 -105\n\t\t\t\t\t\t\t\t\t\t99 -105 -115 -116 c-63 -64 -114 -118 -114 -122 0 -3 14 -39 30 -80 17 -42 30\n\t\t\t\t\t\t\t\t\t\t-80 30 -86 0 -5 10 -17 22 -25 18 -13 53 -16 175 -16 l154 0 -3 -147 -3 -148\n\t\t\t\t\t\t\t\t\t\t-150 4 c-176 4 -181 2 -222 -94 -49 -115 -50 -115 77 -240 l111 -110 -108\n\t\t\t\t\t\t\t\t\t\t-103 -108 -102 -107 109 c-59 60 -116 112 -127 116 -11 3 -33 -1 -50 -9 -16\n\t\t\t\t\t\t\t\t\t\t-9 -55 -25 -86 -37 -40 -15 -59 -28 -66 -46 -5 -13 -9 -89 -9 -169 l0 -144\n\t\t\t\t\t\t\t\t\t\t-145 0 -145 0 0 158 c0 111 -4 163 -12 174 -12 14 -172 88 -192 88 -5 0 -60\n\t\t\t\t\t\t\t\t\t\t-50 -123 -112 l-113 -112 -105 104 -105 104 115 117 c63 64 115 121 115 127 0\n\t\t\t\t\t\t\t\t\t\t26 -63 169 -82 185 -17 15 -42 17 -174 17 l-154 0 0 93 c0 50 3 116 6 145 l7\n\t\t\t\t\t\t\t\t\t\t52 157 0 c114 0 160 3 168 13 18 22 76 171 74 191 0 11 -49 68 -108 127 -58\n\t\t\t\t\t\t\t\t\t\t59 -105 111 -103 115 2 5 49 53 105 106 l100 97 114 -114 c63 -63 119 -115\n\t\t\t\t\t\t\t\t\t\t125 -115 26 0 172 64 188 82 15 17 17 42 17 174 l0 154 83 0 c45 0 112 -3 149\n\t\t\t\t\t\t\t\t\t\t-6z m2324 -1678 c439 -450 801 -823 802 -827 2 -5 -43 -9 -100 -9 l-103 0 -15\n\t\t\t\t\t\t\t\t\t\t33 c-13 28 -20 32 -55 32 -36 0 -42 -4 -54 -32 -14 -31 -18 -33 -63 -33 -44 0\n\t\t\t\t\t\t\t\t\t\t-50 3 -59 27 -12 33 -26 43 -58 43 -30 0 -61 -26 -61 -52 0 -15 -8 -18 -55\n\t\t\t\t\t\t\t\t\t\t-18 -45 0 -55 3 -55 17 0 26 -30 53 -59 53 -34 0 -48 -10 -60 -43 -9 -24 -15\n\t\t\t\t\t\t\t\t\t\t-27 -59 -27 -45 0 -49 2 -63 33 -12 28 -18 32 -54 32 -35 0 -42 -4 -55 -32\n\t\t\t\t\t\t\t\t\t\t-14 -31 -18 -33 -67 -33 -43 0 -53 3 -53 17 0 26 -30 53 -59 53 -34 0 -48 -10\n\t\t\t\t\t\t\t\t\t\t-60 -43 -9 -24 -15 -27 -58 -27 -44 0 -49 3 -63 33 -13 28 -20 32 -55 32 -35\n\t\t\t\t\t\t\t\t\t\t0 -42 -4 -55 -32 -14 -30 -19 -33 -63 -33 -36 0 -49 4 -54 17 -25 70 -101 70\n\t\t\t\t\t\t\t\t\t\t-126 1 -4 -10 -13 -18 -22 -18 -13 0 -15 100 -15 917 l0 918 89 -90 c48 -50\n\t\t\t\t\t\t\t\t\t\t448 -459 887 -909z"], ["d", "M2480 4360 c-25 -25 -26 -62 -2 -83 26 -24 173 -24 196 -1 22 21 20\n\t\t\t\t\t\t\t\t\t\t67 -2 87 -29 26 -165 24 -192 -3z"], ["d", "M2890 4360 c-25 -25 -25 -51 -1 -81 17 -22 27 -24 100 -24 84 0 102\n\t\t\t\t\t\t\t\t\t\t8 115 51 4 13 -1 30 -15 47 -19 25 -26 27 -100 27 -66 0 -82 -3 -99 -20z"], ["d", "M3301 4354 c-26 -33 -26 -45 -2 -75 17 -22 27 -24 101 -24 74 0 84 2\n\t\t\t\t\t\t\t\t\t\t101 24 24 30 24 42 -2 75 -19 24 -26 26 -99 26 -73 0 -80 -2 -99 -26z"], ["d", "M1101 2654 c-176 -47 -312 -198 -341 -378 -49 -305 220 -576 524\n\t\t\t\t\t\t\t\t\t\t-527 255 41 431 282 387 531 -25 138 -118 269 -238 333 -98 52 -230 69 -332\n\t\t\t\t\t\t\t\t\t\t41z m264 -146 c211 -109 253 -382 83 -544 -74 -72 -118 -89 -228 -89 -113 0\n\t\t\t\t\t\t\t\t\t\t-167 21 -240 95 -72 72 -95 128 -95 235 0 80 3 97 30 148 36 71 108 139 178\n\t\t\t\t\t\t\t\t\t\t167 75 29 202 24 272 -12z"], ["d", "M2924 1752 c-31 -21 -34 -54 -34 -424 0 -322 2 -377 16 -396 l15 -22\n\t\t\t\t\t\t\t\t\t\t394 0 394 0 20 27 c14 17 19 34 15 47 -3 12 -175 191 -383 399 -380 381 -398\n\t\t\t\t\t\t\t\t\t\t396 -437 369z m356 -467 l255 -255 -258 0 -257 0 0 255 c0 140 1 255 3 255 1\n\t\t\t\t\t\t\t\t\t\t0 117 -115 257 -255z"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "href", "click"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-project-title", "mt-4"], [1, "other-project-description"], [1, "more-projects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"]], template: function MoreprojectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MoreprojectsComponent_div_9_Template, 24, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "OtherProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "OtherProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: var(--bg-color-hover);\n  cursor: pointer;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover, .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: var(--primary-color);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: var(--lightest-slate);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--light-slate);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwibW9yZS1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FERUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0Esd0JBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0Esb0JBQUE7RUNDTjtBQUNGO0FERUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0Esd0JBQUE7SUFDQSx5QkFBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0Esb0JBQUE7RUNBTjtBQUNGO0FBaENDO0VBQ0MsYUFBQTtFQUNBLGFBQUE7QUFrQ0Y7QUFoQ0U7RUFDQyxrREFBQTtFQUVBLDBEQUFBO0VBSUEsYUFBQTtFQUlBLDhCQUFBO0VBSUEsbUJBQUE7RUFHQSxzQkFBQTtFQUlBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLDBEQUFBO0VBQ0EsdUNEUWU7RUNQZixlQUFBO0FBa0NIO0FBaENHO0VBR0MsMkJBQUE7QUFrQ0o7QUFoQ0c7RUFFQyxrREFBQTtBQWlDSjtBQTlCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJEWE07QUMyQ1Y7QUE3Qkc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkRsQlk7QUNpRGhCO0FBNUJHO0VBQ0MsZUFBQTtFQUNBLHlCRHhCWTtBQ3NEaEI7QUEzQkc7RUFJQyxhQUFBO0VBSUEscUJBQUE7RUFJQSxZQUFBO0VBR0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNkJKO0FBM0JJO0VBQ0MsZUFBQTtFQUNBLG1CRGxEVztFQ21EWCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZENUNNO0FDeUVYO0FBNUJLO0VBQ0MscUJBQUE7QUE4Qk47QUF0QkE7RUFFRTtJQUNDLFlBQUE7RUF3QkQ7QUFDRiIsImZpbGUiOiJtb3JlLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICMxZTFiMWI7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNjRmZmRhO1xuICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAtLXByaW1hcnktb3BhY2l0eTogIzY0ZmZkYTtcbiAgICAtLXNsYXRlOiAjODg5MmIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLWltZy1ob3ZlcjogIzY0ZmZkYTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMjMyMzI0ZTA7XG4gICAgICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tYmctY29sb3I6ICMwYTFlMmY7XG4gICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzAyOGFmZjtcbiAgICAgICAgLS1iZy1jb2xvci1ob3ZlcjogIzExMjI0MDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6ICMwMjhhZmY7XG4gICAgICAgIC0tc2xhdGU6ICNkMGQzZGQ7XG4gICAgICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgICAgIC0taW1nLWhvdmVyOiAjMDI4YWZmO1xuICAgIH1cbn1cblxuJFNsYXRlICAgICAgICA6IHZhcigtLXNsYXRlKTtcbiRMaWdodFNsYXRlICAgOiB2YXIoLS1saWdodC1zbGF0ZSk7XG4kTGlnaHRlc3RTbGF0ZTogdmFyKC0tbGlnaHRlc3Qtc2xhdGUpO1xuJFByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJFByaW1hcnlPcGFjaXR5IDogdmFyKC0tcHJpbWFyeS1vcGFjaXR5KTtcbiRCYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4kQmFja2dyb3VuZEhvdmVyOiB2YXIoLS1iZy1jb2xvci1ob3Zlcik7XG4kSW1nSG92ZXI6IHZhcigtLWltZy1ob3Zlcik7XG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1vcmUtcHJvamVjdHMge1xuXHQucHJvamVjdC1jb2wge1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0aGVpZ2h0OiA0MDBweDtcblxuXHRcdC5tb3JlLXByb2plY3QtYm94IHtcblx0XHRcdGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcblx0XHRcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdFx0XHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcblx0XHRcdC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRwYWRkaW5nOiAycmVtIDEuNzVyZW07XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJEJhY2tncm91bmRIb3Zlcjtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHRcdFx0XHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG5cdFx0XHR9XG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0Jjpmb2N1cyB7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdmcge1xuXHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRjb2xvcjogJFByaW1hcnk7XG5cdFx0XHR9XG5cblx0XHRcdC5vdGhlci1wcm9qZWN0LXRpdGxlIHtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMTBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG5cdFx0XHR9XG5cblx0XHRcdC5vdGhlci1wcm9qZWN0LWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdFx0XHRjb2xvcjogJExpZ2h0U2xhdGU7XG5cdFx0XHR9XG5cblx0XHRcdC5tb3JlLXByb2plY3RzLXNraWxscyB7XG5cdFx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdFx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHQtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0LXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xuXHRcdFx0XHQtbXMtZmxleC1hbGlnbjogZmxleC1lbmQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0LXdlYmtpdC1ib3gtZmxleDogMTtcblx0XHRcdFx0LXdlYmtpdC1mbGV4LWdyb3c6IDE7XG5cdFx0XHRcdC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuXHRcdFx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0XHRcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHQtbXMtZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdG1hcmdpbjogMjBweCAwIDAgMDtcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblxuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAkU2xhdGU7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNzU7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdFx0XHRcdFx0LnVuZGVybGluZSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMy41cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcblx0Lm1vcmUtcHJvamVjdHMge1xuXHRcdC5wcm9qZWN0LWNvbCB7XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2711:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsComponent": () => (/* binding */ projectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





const _c0 = ["imgContainer"];
function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r17.$implicit;
    const i_r2 = ctx_r17.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r11.slide + i_r2);
} }
function projectsComponent_div_9_owl_carousel_o_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function projectsComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function projectsComponent_div_9_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function projectsComponent_div_9_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function projectsComponent_div_9_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Know more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function projectsComponent_div_9_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r23);
} }
function projectsComponent_div_9_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_ul_16_li_1_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
} }
function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r30.$implicit;
    const i_r2 = ctx_r30.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r25.slide + i_r2);
} }
function projectsComponent_div_9_owl_carousel_o_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r9.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function projectsComponent_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function projectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, projectsComponent_div_9_div_2_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, projectsComponent_div_9_a_11_Template, 3, 1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, projectsComponent_div_9_span_12_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, projectsComponent_div_9_a_13_Template, 3, 1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function projectsComponent_div_9_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.debug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, projectsComponent_div_9_ul_16_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, projectsComponent_div_9_owl_carousel_o_17_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, projectsComponent_div_9_div_18_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", project_r1.img, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("project-info-right", i_r2 % 2 == 0)("project-info-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 30, "FeatureProjects.Label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["ghLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["ghLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["demoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", project_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.showTechStack);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
} }
class projectsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            navSpeed: 700,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
        };
    }
    ngOnInit() { }
    debug() {
        this.imgContainer.nativeElement.scroll({
            top: this.imgContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }
}
projectsComponent.ɵfac = function projectsComponent_Factory(t) { return new (t || projectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
projectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: projectsComponent, selectors: [["app-projects"]], viewQuery: function projectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
    } }, decls: 12, vars: 6, consts: [["id", "projects", 1, "section", "projects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["class", "d-flex project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "project-container"], ["class", "owl-carousel-o", 3, "options", 4, "ngIf"], ["class", "img-feature-project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], [1, "h-100"], [1, "project-box"], [1, "feature-project"], [1, "project-name"], [1, "project-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], [1, "project-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], ["class", "project-skills", 4, "ngIf"], [1, "owl-carousel-o", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "img-container"], ["imgContainer", ""], [1, "img-feature-project", "rounded", 3, "src", "alt"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-project-container"], [1, "img-feature-project-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-project", "rounded", 3, "src", "alt"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "fab", "fa-github"], [1, "fas", "fa-external-link-alt"], [1, "project-skills"], ["class", "ml-3", 4, "ngFor", "ngForOf"], [1, "ml-3"], [1, "underline", "technology"]], template: function projectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, projectsComponent_div_9_Template, 19, 32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "FeatureProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #1e1b1b;\n  --primary-color: #64ffda;\n  --bg-color-hover: #232324e0;\n  --primary-opacity: #64ffda;\n  --slate: #8892b0;\n  --light-slate: #a8b2d1;\n  --lightest-slate: #ccd6f6;\n  --img-hover: #64ffda;\n}\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #1e1b1b;\n    --primary-color: #028aff;\n    --bg-color-hover: #232324e0;\n    --primary-opacity: 028aff;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  [_ngcontent-%COMP%]:root {\n    --bg-color: #0a1e2f;\n    --primary-color: #028aff;\n    --bg-color-hover: #112240;\n    --primary-opacity: #028aff;\n    --slate: #d0d3dd;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --img-hover: #028aff;\n  }\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .feature-project[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: var(--primary-color);\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 0px;\n  color: var(--lightest-slate);\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: var(--bg-color-hover);\n  color: var(--light-slate);\n  font-size: 18px;\n  border-radius: 3px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: var(--slate);\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 0%;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px;\n}\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.img-feature-project-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-feature-project-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: var(--light-slate);\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .img-feature-project-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .projects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background-color: var(--bg-color-hover);\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  background: #ffffff33;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 420px;\n  overflow: auto;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary-color);\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREVBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0VDQ047QUFDRjtBREVBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0VDQU47QUFDRjtBQWpDQztFQUNDLGVBQUE7QUFtQ0Y7QUFsQ0U7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFvQ0g7QUFsQ0U7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFvQ0g7QUFsQ0U7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0FBb0NIO0FBbkNHO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJEbUJNO0VDbEJOLDBGRHdCTztFQ3ZCUCxnQkFBQTtFQUNBLGNBQUE7QUFxQ0o7QUFuQ0c7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLDRCRFVZO0FDMkJoQjtBQW5DRztFQUNDLGtEQUFBO0VBRUEsMERBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUNES2M7RUNKZCx5QkREWTtFQ0VaLGVBQUE7RUFDQSxrQkFBQTtBQXFDSjtBQW5DRztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLGFBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFxQ0o7QUFwQ0k7RUFDQyxlQUFBO0VBQ0EsMEZEWk07RUNhTixlQUFBO0VBQ0EsbUJEdkJXO0VDd0JYLGtCQUFBO0VBQ0EsbUJBQUE7QUFzQ0w7QUFyQ0s7RUFDQyxtQkFBQTtBQXVDTjtBQW5DRztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUFxQ0o7QUFwQ0k7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQXNDTDtBQS9CQTtFQUNDLFlBQUE7QUFrQ0Q7QUFoQ0E7RUFDQyxhQUFBO0FBbUNEO0FBaENBO0VBQ0M7SUFDQyxhQUFBO0VBbUNBOztFQWpDRDtJQUNDLFVBQUE7SUFDQSx5QkFBQTtJQUNBLDhCQUFBO0VBb0NBO0VBbkNBO0lBQ0MsbUJBQUE7SUFDQSxzQkFBQTtFQXFDRDtFQW5DQTtJQUNDLFdBQUE7RUFxQ0Q7O0VBbENEOztJQUVDLFVBQUE7RUFxQ0E7QUFDRjtBQWxDQTtFQUNDOztJQUVDLGlDQUFBO0VBb0NBO0FBQ0Y7QUFqQ0E7RUFDQztJQUNDLGFBQUE7RUFtQ0E7O0VBaENBO0lBQ0MsdUJBQUE7SUFDQSx5QkFBQTtFQW1DRDtFQWxDQztJQUNDLFdBQUE7RUFvQ0Y7RUFsQ0M7SUFDQyxXQUFBO0VBb0NGO0VBbENDO0lBQ0MsdUJBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSx3Q0FBQTtJQUNBLHlCRG5HWTtJQ29HWixlQUFBO0lBQ0Esa0JBQUE7RUFvQ0Y7RUFsQ0M7O0lBRUMseUJBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0VBb0NGO0VBbkNFOztJQUNDLGNBQUE7RUFzQ0g7RUFuQ0M7SUFDQyxhQUFBO0VBcUNGO0VBbENBOztJQUVDLFlBQUE7RUFvQ0Q7RUFsQ0E7O0lBRUMsNkJBQUE7RUFvQ0Q7RUFsQ0E7SUFDQyxrQ0FBQTtFQW9DRDtFQWxDQTtJQUNDLGtDQUFBO0VBb0NEO0VBakNBOztJQUVDLGFBQUE7SUFDQSx1Q0RwSWU7RUN1S2hCO0FBQ0Y7QUEvQkE7O0VBRUMsa0NBQUE7QUFpQ0Q7QUE5QkE7RUFDQyxxQkFBQTtBQWlDRDtBQTlCQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWlDRDtBQTlCQSxVQUFBO0FBRUE7RUFDQyxVQUFBO0FBZ0NEO0FBN0JBLFVBQUE7QUFFQTtFQUNDLGlDQUFBO0VBQ0Esa0JBQUE7QUErQkQ7QUE1QkEsV0FBQTtBQUVBO0VBQ0MsZ0NENUtTO0VDNktULGtCQUFBO0FBOEJEO0FBM0JBLG9CQUFBO0FBRUE7RUFDQyxnQ0RuTFM7QUNnTlYiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gICAgLS1iZy1jb2xvcjogIzFlMWIxYjtcbiAgICAtLXByaW1hcnktY29sb3I6ICM2NGZmZGE7XG4gICAgLS1iZy1jb2xvci1ob3ZlcjogIzIzMjMyNGUwO1xuICAgIC0tcHJpbWFyeS1vcGFjaXR5OiAjNjRmZmRhO1xuICAgIC0tc2xhdGU6ICM4ODkyYjA7XG4gICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAtLWxpZ2h0ZXN0LXNsYXRlOiAjY2NkNmY2O1xuICAgIC0taW1nLWhvdmVyOiAjNjRmZmRhO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLWJnLWNvbG9yOiAjMWUxYjFiO1xuICAgICAgICAtLXByaW1hcnktY29sb3I6ICMwMjhhZmY7XG4gICAgICAgIC0tYmctY29sb3ItaG92ZXI6ICMyMzIzMjRlMDtcbiAgICAgICAgLS1wcmltYXJ5LW9wYWNpdHk6IDAyOGFmZjtcbiAgICAgICAgLS1zbGF0ZTogIzg4OTJiMDtcbiAgICAgICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAgICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAgICAgLS1pbWctaG92ZXI6ICMwMjhhZmY7XG4gICAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1iZy1jb2xvcjogIzBhMWUyZjtcbiAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMDI4YWZmO1xuICAgICAgICAtLWJnLWNvbG9yLWhvdmVyOiAjMTEyMjQwO1xuICAgICAgICAtLXByaW1hcnktb3BhY2l0eTogIzAyOGFmZjtcbiAgICAgICAgLS1zbGF0ZTogI2QwZDNkZDtcbiAgICAgICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAgICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAgICAgLS1pbWctaG92ZXI6ICMwMjhhZmY7XG4gICAgfVxufVxuXG4kU2xhdGUgICAgICAgIDogdmFyKC0tc2xhdGUpO1xuJExpZ2h0U2xhdGUgICA6IHZhcigtLWxpZ2h0LXNsYXRlKTtcbiRMaWdodGVzdFNsYXRlOiB2YXIoLS1saWdodGVzdC1zbGF0ZSk7XG4kUHJpbWFyeTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kUHJpbWFyeU9wYWNpdHkgOiB2YXIoLS1wcmltYXJ5LW9wYWNpdHkpO1xuJEJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiRCYWNrZ3JvdW5kSG92ZXI6IHZhcigtLWJnLWNvbG9yLWhvdmVyKTtcbiRJbWdIb3ZlcjogdmFyKC0taW1nLWhvdmVyKTtcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuLnByb2plY3RzIHtcblx0LnByb2plY3QtY29udGFpbmVyIHtcblx0XHRtYXJnaW46IDEwMHB4IDA7XG5cdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcblx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IC01N3B4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdH1cblx0XHQucHJvamVjdC1pbmZvLXJpZ2h0IHtcblx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRtYXJnaW4tbGVmdDogLTU3cHg7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdH1cblx0XHQucHJvamVjdC1ib3gge1xuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHQuZmVhdHVyZS1wcm9qZWN0IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRjb2xvcjogJFByaW1hcnk7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xuXHRcdFx0fVxuXHRcdFx0LnByb2plY3QtbmFtZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMHB4O1xuXHRcdFx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1kZXNjcmlwdGlvbi1ib3gge1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRCYWNrZ3JvdW5kSG92ZXI7XG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRTbGF0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1za2lsbHMge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdFx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRtYXJnaW46IDI1cHggMCAxMHB4O1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdGNvbG9yOiAkU2xhdGU7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0LnRlY2hub2xvZ3kge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5wcm9qZWN0LWxpbmtzIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0cGFkZGluZzogMTBweCAwJTtcblx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ub3dsLWNhcm91c2VsLW8ge1xuXHR3aWR0aDogNjAwcHg7XG59XG4uaW1nLWZlYXR1cmUtcHJvamVjdC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcblx0Lm93bC1jYXJvdXNlbC1vIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuXHRcdGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcblx0XHQuaW1nLWZlYXR1cmUtcHJvamVjdC1ib3gge1xuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0fVxuXHRcdC5pbWctZmVhdHVyZS1wcm9qZWN0IHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxuXHQucHJvamVjdC1pbmZvLXJpZ2h0LFxuXHQucHJvamVjdC1pbmZvLWxlZnQge1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdC5wcm9qZWN0LWluZm8tcmlnaHQsXG5cdC5wcm9qZWN0LWluZm8tbGVmdCB7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQub3dsLWNhcm91c2VsLW8ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LnByb2plY3RzIHtcblx0XHQucHJvamVjdC1jb250YWluZXIge1xuXHRcdFx0aGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW46IDMzcHggMCAhaW1wb3J0YW50O1xuXHRcdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1pbmZvLXJpZ2h0IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1kZXNjcmlwdGlvbi1ib3gge1xuXHRcdFx0XHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRTbGF0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1pbmZvLXJpZ2h0LFxuXHRcdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcblx0XHRcdFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdC5wcm9qZWN0LWJveCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5wcm9qZWN0LWluZm8tcmlnaHQsXG5cdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHR9XG5cdFx0LnRleHQtcmlnaHQsXG5cdFx0LnRleHQtbGVmdCB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0Lmp1c3RpZnktY29udGVudC1lbmQge1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0Lmp1c3RpZnktY29udGVudC1zdGFydCB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdC5wcm9qZWN0LWluZm8tcmlnaHQgLnByb2plY3QtYm94LFxuXHRcdC5wcm9qZWN0LWluZm8tbGVmdCAucHJvamVjdC1ib3gge1xuXHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRCYWNrZ3JvdW5kSG92ZXI7XG5cdFx0fVxuXHR9XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3Bhbixcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XG59XG5cbi5pbWctY29udGFpbmVyIHtcblx0d2lkdGg6IDYwMHB4O1xuXHRtYXgtaGVpZ2h0OiA0MjBweDtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogd2lkdGggKi9cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdHdpZHRoOiA3cHg7XG59XG5cbi8qIFRyYWNrICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICM4ODkyYjA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogSGFuZGxlICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuXHRiYWNrZ3JvdW5kOiAkUHJpbWFyeTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICRQcmltYXJ5O1xufVxuIl19 */"] });


/***/ }),

/***/ 4407:
/*!**********************************************************************!*\
  !*** ./src/app/components/home/testimonial/testimonial.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialComponent": () => (/* binding */ TestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function TestimonialComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 8)(3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const testimonial_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", testimonial_r1.Comment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", testimonial_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" -", testimonial_r1.Name, ", ", testimonial_r1.Position, " of ", testimonial_r1.Company, " ");
} }
class TestimonialComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() { }
}
TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
TestimonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 11, vars: 6, consts: [["id", "testimonial", 1, "section", "testimonials"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], [4, "ngFor", "ngForOf"], [1, "testimonial-content"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["alt", "", 1, "testimonial-photo", 3, "src"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestimonialComponent_ng_container_9_Template, 6, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "Testimonial.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Testimonial.Items"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".testimonials.section[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.testimonial-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 20px;\n}\n\n.testimonial-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNEIiwiZmlsZSI6InRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy5zZWN0aW9uIC5zZWN0aW9uLWJveCB7XG5cdHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udGVzdGltb25pYWwtcGhvdG8ge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRlc3RpbW9uaWFsLWNvbnRlbnQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3325:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 5943);


class AnalyticsService {
    constructor($gaService) {
        this.$gaService = $gaService;
    }
    sendAnalyticEvent(action, category, label) {
        this.$gaService.event(action, category, label);
    }
    sendAnalyticPageView(path, title) {
        this.$gaService.pageView(path, title);
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService)); };
AnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5307:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class LanguageService {
    constructor(translateService, location) {
        this.translateService = translateService;
        this.location = location;
        this.language = 'en';
    }
    initLanguage() {
        this.translateService.addLangs(["en", "es"]);
        //let language = navigator.language || (navigator as any).userLanguage;
        this.translateService.setDefaultLang(this.language);
        // Change the URL without navigate:
        this.location.go(this.language);
    }
    changeLanguage(language) {
        this.location.go(language);
        this.language = language;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    trackAnalyticID: "G-XE9X54XCMH",
    geolocationAPIKey: "42611117e4f4448b8c06bbbf2cf5aa9d"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map