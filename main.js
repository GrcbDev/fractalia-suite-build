(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gcarrillo/proyectos/fractalia/suite/src/main.ts */"zUnb");


/***/ }),

/***/ "0+yD":
/*!******************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.module.ts ***!
  \******************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "rdml");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "OZ9l");





var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TooltipModule });
    TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return TooltipModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, { declarations: [_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"],
        _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"],
                    _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "0Jdf":
/*!************************************************************************************!*\
  !*** ./src/app/components/layout/header-integrated/header-integrated.component.ts ***!
  \************************************************************************************/
/*! exports provided: HeaderIntegratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIntegratedComponent", function() { return HeaderIntegratedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/services.service */ "6+PL");
/* harmony import */ var src_app_models_userNotificationGrouped__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/userNotificationGrouped */ "F3zH");
/* harmony import */ var src_app_services_app_installer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/app-installer.service */ "oGhC");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/notification.service */ "9L4e");
/* harmony import */ var src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/utils/string-utils */ "372O");
/* harmony import */ var src_app_services_emit_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/emit.service */ "LVjK");
/* harmony import */ var _fra_tabs_fra_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../fra-tabs/fra-tabs.component */ "Lv2G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fra_tabs_fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../fra-tabs/fra-tab/fra-tab.component */ "vcuW");
/* harmony import */ var _notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notifications/own-notification/own-notification.component */ "TUpm");
/* harmony import */ var _notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notifications/support-notification/support-notification.component */ "lD+1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
































function HeaderIntegratedComponent_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 9, "MEJORA_EXPERIENCIA"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r2.showDownloadText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "DESCARGA_APP_DISPOSITIVO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r2.showChromeAdvice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 13, "DOWNLOAD_PWA.CHROME_ADVICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r2.showSafariAdvice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 15, "DOWNLOAD_PWA.SAFARI_TEXT1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.staticContentUrl + "img/share_icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 17, "DOWNLOAD_PWA.SAFARI_TEXT2"));
} }
function HeaderIntegratedComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.notificationService.totalNotReadedNotifications && ctx_r3.notificationService.totalNotReadedNotifications > 99 ? "+99" : ctx_r3.notificationService.totalNotReadedNotifications, " ");
} }
function HeaderIntegratedComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderIntegratedComponent_div_2_button_2_Template, 18, 19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderIntegratedComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.toogleNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderIntegratedComponent_div_2_div_6_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showDownloadButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.notificationUnreaded || ctx_r0.notificationChildsUnreaded || ctx_r0.supportNotificationUnreaded);
} }
function HeaderIntegratedComponent_div_11_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderIntegratedComponent_div_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.goToWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r6.staticContentUrl + "img/fact_check.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "COMP_USER.SUPPORT_NOTIFICATION.CONTINUE_ACTIVATION"), " ");
} }
function HeaderIntegratedComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderIntegratedComponent_div_11_button_1_Template, 5, 4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.wizardSkiped);
} }
var HeaderIntegratedComponent = /** @class */ (function () {
    function HeaderIntegratedComponent(userService, partnerService, router, suiteService, serviceService, appInstallerService, notificationService, localService, emitService) {
        var _this = this;
        this.userService = userService;
        this.partnerService = partnerService;
        this.router = router;
        this.suiteService = suiteService;
        this.serviceService = serviceService;
        this.appInstallerService = appInstallerService;
        this.notificationService = notificationService;
        this.localService = localService;
        this.emitService = emitService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].STATIC_CONTENT;
        this.defaultPhoto = this.staticContentUrl + "img/profileDefaultMenu.png";
        this.userNotificationsGrouped = [];
        this.userNotificationsGroupedChilds = [];
        this.supportNotificationGrouped = [];
        this.notificationUnreaded = false;
        this.notificationUnreadedHelper = false;
        this.notificationChildsUnreaded = false;
        this.supportNotificationUnreaded = false;
        this.supportNotificationUnreadedHelper = false;
        this.showDownloadText = false;
        this.showSafariAdvice = false;
        this.showChromeAdvice = false;
        this.showDownloadButton = false;
        this.showNotificationButton = true;
        this.wizardSkiped = false;
        this.continueActivateBtn = false;
        this.numInten = 5;
        this.numActualInten = 0;
        this.hasGeneralNotificationsUnReaded = false;
        this.ownNotification = 0 /* OwnNotifications */;
        this.anotherNotification = 2 /* AnotherNotifications */;
        this.supportNotification = 1 /* SupportNotifications */;
        this.isNotificationOpen = false;
        this.continue = true;
        this.tabActiveDueNotReadedNotification = 0 /* OwnNotifications */;
        this.totalNotReadedOwnNotifications = 0;
        this.totalNotReadedAnotherNotifications = 0;
        this.totalNotReadedSupportNotifications = 0;
        this.servicesFinalized = 0;
        this.servicesActivated = 0;
        this.wizardIsInvokable = false;
        this.countOpenNotifications = 0;
        this.countOpenSupport = 0;
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HeaderIntegratedComponent.prototype.ngAfterViewInit = function () {
        this.wizardInvokable();
    };
    HeaderIntegratedComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.wizardSkiped = localStorage.getItem("skipWizard") == "true";
                if (this.currentUser &&
                    this.currentUser.roleId === 1 &&
                    this.showNotificationButton) {
                    this.watchOpenNotification();
                    this.watchClickOutsideNotification();
                    this.getAndProcessNotifications();
                }
                if (this.partnerService.partner.loginType === 2 &&
                    this.userService &&
                    this.userService.currentUserValue &&
                    this.userService.currentUserValue.checkTermsAcceptDate) {
                    this.continue = true;
                }
                else {
                    this.continue = false;
                }
                this.emitService.rechargeSidebar.subscribe(function (bool) {
                    if (_this.partnerService.partner.loginType === 2 &&
                        _this.userService.currentUserValue.checkTermsAcceptDate) {
                        _this.continue = true;
                    }
                    else {
                        _this.continue = false;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HeaderIntegratedComponent.prototype.ngDoCheck = function () {
        this.validateMedia();
    };
    HeaderIntegratedComponent.prototype.getAndProcessNotifications = function () {
        var _this = this;
        this.userService.getUserNotifications().then(function (result) {
            var group = _this.groupNotifications();
            _this.userNotificationsGrouped = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].sortByProperty(group.own, "notificationDate", true);
            _this.userNotificationsGroupedChilds = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].sortByProperty(group.another, "notificationDate", true);
            _this.supportNotificationGrouped = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].sortByProperty(group.support, "notificationDate", true);
            _this.notificationService.showBell =
                _this.notificationUnreaded ||
                    _this.notificationChildsUnreaded ||
                    _this.supportNotificationUnreaded;
        });
    };
    HeaderIntegratedComponent.prototype.checkOSOrBrowser = function (osOrBrowser) {
        return this.appInstallerService[osOrBrowser]();
    };
    HeaderIntegratedComponent.prototype.ngAfterContentInit = function () {
        this.appInstallerService.showInstallBox(); // Chrome - edge
        if (!this.appInstallerService.isStandalone()) {
            if ((this.appInstallerService.isWindows() ||
                this.appInstallerService.isAndroid()) &&
                this.appInstallerService.isChrome()) {
                this.showDownloadText = true;
                this.showDownloadButton = true;
            }
            if (this.appInstallerService.isIos() &&
                this.appInstallerService.isSafari()) {
                // iOs Safari
                this.showSafariAdvice = true;
                this.appInstallerService.showDownloadBox = true;
            }
            if ((this.appInstallerService.isWindows() ||
                this.appInstallerService.isAndroid()) &&
                !this.appInstallerService.isChrome()) {
                // Windows/Android and no chrome
                this.appInstallerService.showDownloadBox = true;
                this.showChromeAdvice = true;
            }
        }
    };
    HeaderIntegratedComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderIntegratedComponent.prototype.groupNotifications = function () {
        var _this = this;
        var ownNotifications = [];
        var anotherNotifications = [];
        var supportNotifications = [];
        var ownNotiReadad = false;
        var anotherNotiReadad = false;
        var supportNotiReadad = false;
        this.totalNotReadedOwnNotifications = 0;
        this.totalNotReadedAnotherNotifications = 0;
        this.totalNotReadedSupportNotifications = 0;
        if (this.userService.userNotifications != null) {
            this.userService.userNotifications.forEach(function (element) {
                var notificationDate = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].convertDateLatinFormat(element.notificationDate);
                if (element.userId == _this.currentUser.id && !element.type) {
                    if (!element.readed) {
                        ownNotiReadad = true;
                        _this.totalNotReadedOwnNotifications++;
                    }
                    var found = ownNotifications.some(function (ung) { return ung.notificationDate === notificationDate; });
                    if (!found) {
                        var ung = new src_app_models_userNotificationGrouped__WEBPACK_IMPORTED_MODULE_8__["UserNotificationGrouped"]();
                        ung.notificationDate = notificationDate;
                        ung.notifications.push(element);
                        ownNotifications.push(ung);
                    }
                    else {
                        ownNotifications
                            .find(function (ung) { return ung.notificationDate === notificationDate; })
                            .notifications.push(element);
                    }
                }
                if (element.userId !== _this.currentUser.id && !element.type) {
                    if (!element.readed) {
                        anotherNotiReadad = true;
                        _this.totalNotReadedAnotherNotifications++;
                    }
                    var found = anotherNotifications.some(function (ung) { return ung.notificationDate === notificationDate; });
                    if (!found) {
                        var ung = new src_app_models_userNotificationGrouped__WEBPACK_IMPORTED_MODULE_8__["UserNotificationGrouped"]();
                        ung.notificationDate = notificationDate;
                        ung.notifications.push(element);
                        anotherNotifications.push(ung);
                    }
                    else {
                        anotherNotifications
                            .find(function (ung) { return ung.notificationDate === notificationDate; })
                            .notifications.push(element);
                    }
                }
                if (element.userId == _this.currentUser.id && element.type == "NS") {
                    if (!element.readed) {
                        _this.totalNotReadedSupportNotifications++;
                        supportNotiReadad = true;
                    }
                    element.description = element.description;
                    element.parseLinks = element.links ? JSON.parse(element.links) : null;
                    element.parseFiles = element.attachedFilesNames
                        ? element.attachedFilesNames.replace(/[\[\]]/g, "").split(",")
                        : "";
                    element.parseURLFiles = element.attachedFiles
                        ? element.attachedFiles.replace(/[\[\]]/g, "").split(",")
                        : "";
                    var found = supportNotifications.some(function (ung) { return ung.notificationDate === notificationDate; });
                    if (!found) {
                        var ung = new src_app_models_userNotificationGrouped__WEBPACK_IMPORTED_MODULE_8__["UserNotificationGrouped"]();
                        ung.notificationDate = notificationDate;
                        ung.notifications.push(element);
                        supportNotifications.push(ung);
                    }
                    else {
                        supportNotifications
                            .find(function (ung) { return ung.notificationDate === notificationDate; })
                            .notifications.push(element);
                    }
                }
            });
        }
        var tabWithMaxNotificacion = Math.max(this.totalNotReadedOwnNotifications, 
        /* this.totalNotReadedAnotherNotifications, */
        this.totalNotReadedSupportNotifications);
        if (tabWithMaxNotificacion == this.totalNotReadedOwnNotifications) {
            this.tabActiveDueNotReadedNotification =
                0 /* OwnNotifications */;
        } /*  else if (
          tabWithMaxNotificacion == this.totalNotReadedAnotherNotifications
        ) {
          this.tabActiveDueNotReadedNotification =
            NotificationTabs.AnotherNotifications;
        } */
        else if (tabWithMaxNotificacion == this.totalNotReadedSupportNotifications) {
            this.tabActiveDueNotReadedNotification =
                1 /* SupportNotifications */;
        }
        this.resetTabsAndActive(this.tabActiveDueNotReadedNotification);
        this.notificationUnreaded = ownNotiReadad;
        this.notificationUnreadedHelper = ownNotiReadad;
        this.calculatedTotalNotification();
        this.notificationChildsUnreaded = anotherNotiReadad;
        this.supportNotificationUnreaded = supportNotiReadad;
        this.supportNotificationUnreadedHelper = supportNotiReadad;
        return {
            own: ownNotifications,
            another: anotherNotifications,
            support: supportNotifications,
        };
    };
    HeaderIntegratedComponent.prototype.checkProfile = function () {
        if (this.currentUser.isAdminUserId &&
            this.currentUser.companyUser.maxLicense > 1) {
            this.router.navigate(["/user-list"]);
            return;
        }
        else {
            this.router.navigate(["/profile"]);
            return;
        }
    };
    HeaderIntegratedComponent.prototype.changeTab = function (event, status) {
        switch (event.id) {
            case 0 /* OwnNotifications */:
                if (this.countOpenNotifications > 0) {
                    this.readNotifications(status, false);
                }
                else {
                    this.readNotifications(status, true);
                }
                break;
            case 2 /* AnotherNotifications */:
                this.readChildsNotifications();
                break;
            case 1 /* SupportNotifications */:
                if (this.countOpenSupport > 0) {
                    this.readSupportNotification(status, false);
                }
                else {
                    this.readSupportNotification(status, true);
                }
                break;
            default:
                break;
        }
    };
    HeaderIntegratedComponent.prototype.deleteAllByTab = function (event) {
        switch (event.id) {
            case 0 /* OwnNotifications */:
                this.hideNotifications();
                break;
            case 2 /* AnotherNotifications */:
                this.hideChildsNotifications();
                break;
            case 1 /* SupportNotifications */:
                // this.readSupportNotification();
                break;
            default:
                break;
        }
    };
    HeaderIntegratedComponent.prototype.updateGeneralNotification = function () {
        this.notificationService.showBell =
            this.notificationUnreaded ||
                this.notificationChildsUnreaded ||
                this.supportNotificationUnreaded;
    };
    HeaderIntegratedComponent.prototype.calculatedTotalNotification = function () {
        var totalNotReaded = this.totalNotReadedOwnNotifications +
            this.totalNotReadedAnotherNotifications +
            this.totalNotReadedSupportNotifications;
        this.notificationService.totalNotReadedNotifications =
            totalNotReaded > 99 ? "+" + totalNotReaded : totalNotReaded.toString();
    };
    HeaderIntegratedComponent.prototype.readNotifications = function (status, recentOpen) {
        var _this = this;
        if (this.notificationUnreadedHelper) {
            this.userService.readUserNotifications().then(function () {
                if (status) {
                    if (recentOpen) {
                        _this.notificationUnreadedHelper = false;
                    }
                    else {
                        _this.userNotificationsGrouped.forEach(function (userNotif) {
                            userNotif.notifications.forEach(function (notif) {
                                notif.readed = true;
                            });
                        });
                    }
                }
                if (recentOpen) {
                    _this.countOpenNotifications++;
                }
                else if (!recentOpen) {
                    _this.countOpenNotifications = 0;
                }
                if (_this.countOpenNotifications > 1) {
                    _this.notificationUnreadedHelper = false;
                }
                else {
                    _this.notificationUnreadedHelper = true;
                }
                _this.totalNotReadedOwnNotifications = 0;
                _this.calculatedTotalNotification();
                _this.notificationUnreaded = false;
                _this.updateGeneralNotification();
            });
        }
    };
    HeaderIntegratedComponent.prototype.readSupportNotification = function (status, recentOpen) {
        var _this = this;
        if (this.supportNotificationUnreadedHelper) {
            this.userService.readSupportNotifications().then(function () {
                if (status) {
                    if (recentOpen) {
                        _this.supportNotificationUnreadedHelper = false;
                    }
                    else {
                        _this.supportNotificationGrouped.forEach(function (userNotif) {
                            userNotif.notifications.forEach(function (notif) {
                                notif.readed = true;
                            });
                        });
                    }
                }
                if (recentOpen) {
                    _this.countOpenSupport = 1;
                }
                else {
                    _this.countOpenSupport = 0;
                }
                if (_this.countOpenSupport > 1) {
                    _this.supportNotificationUnreadedHelper = false;
                }
                else {
                    _this.supportNotificationUnreadedHelper = true;
                }
                _this.totalNotReadedSupportNotifications = 0;
                _this.calculatedTotalNotification();
                _this.supportNotificationUnreaded = false;
                _this.updateGeneralNotification();
            });
        }
    };
    HeaderIntegratedComponent.prototype.readChildsNotifications = function () {
        var _this = this;
        if (this.notificationChildsUnreaded) {
            this.userService.readUserChildsNotifications().then(function () {
                _this.userNotificationsGroupedChilds.forEach(function (userNotif) {
                    userNotif.notifications.forEach(function (notif) {
                        notif.readed = true;
                    });
                });
                _this.totalNotReadedAnotherNotifications = 0;
                _this.calculatedTotalNotification();
                _this.notificationChildsUnreaded = false;
                _this.updateGeneralNotification();
            });
        }
    };
    HeaderIntegratedComponent.prototype.hideNotifications = function () {
        var _this = this;
        this.userService.hideUserNotifications().then(function (result) {
            _this.userNotificationsGrouped = [];
        });
    };
    HeaderIntegratedComponent.prototype.hideChildsNotifications = function () {
        var _this = this;
        this.userService.hideUserChildsNotifications().then(function (result) {
            _this.userNotificationsGroupedChilds = [];
        });
    };
    HeaderIntegratedComponent.prototype.getLocalStorage = function (key) {
        return this.localService.getJsonValue(key);
    };
    HeaderIntegratedComponent.prototype.setLocalStorage = function (key, data) {
        this.localService.setJsonValue(key, data);
    };
    HeaderIntegratedComponent.prototype.goToWizard = function () {
        this.router.navigate(["/auto-activation"]);
    };
    HeaderIntegratedComponent.prototype.toogleNotification = function () {
        if (!this.isNotificationOpen) {
            if (this.tabActiveDueNotReadedNotification == 0 /* OwnNotifications */) {
                if (this.countOpenNotifications > 0) {
                    this.readNotifications(false, false);
                }
                else {
                    this.readNotifications(false, true);
                }
            }
            else if (this.tabActiveDueNotReadedNotification == 1 /* SupportNotifications */) {
                if (this.countOpenSupport > 0) {
                    this.readSupportNotification(false, false);
                }
                else {
                    this.readSupportNotification(false, true);
                }
            }
        }
        this.notificationService.toogleNotification();
    };
    HeaderIntegratedComponent.prototype.watchOpenNotification = function () {
        var _this = this;
        this.notificationService.openNotification$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (res) { return !!res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
            var toogle = _a.toogle;
            _this.isNotificationOpen = toogle;
            if (toogle) {
                if (_this.tabActiveDueNotReadedNotification) {
                    /* this.changeTab({ id: NotificationTabs.OwnNotifications }); */
                    _this.changeTab({ id: _this.tabActiveDueNotReadedNotification }, false);
                }
            }
            else {
                _this.getAndProcessNotifications();
            }
        }))
            .subscribe();
    };
    HeaderIntegratedComponent.prototype.resetTabsAndActive = function (index) {
        this.tabs.resetTabs(index);
    };
    HeaderIntegratedComponent.prototype.watchClickOutsideNotification = function () {
        var _this = this;
        window.addEventListener("click", function (e) {
            var iconMobile = document.getElementById("noti-icon-mobile");
            var buttonNoti = document.getElementById("button-noti");
            var notificationDiv = document.getElementById("notification");
            if (notificationDiv || buttonNoti || iconMobile) {
                if (!(notificationDiv.contains(e.target) ||
                    iconMobile.contains(e.target) ||
                    buttonNoti.contains(e.target))) {
                    _this.notificationService.closeNotification();
                }
            }
        });
    };
    HeaderIntegratedComponent.prototype.validateMedia = function () {
        if (!window.matchMedia("(display-mode: standalone)").matches) {
            this.showDownloadButton = true;
        }
        else if (window.matchMedia("(display-mode: standalone)").matches) {
            this.showDownloadButton = false;
        }
    };
    HeaderIntegratedComponent.prototype.wizardInvokable = function () {
        var _this = this;
        this.userService.getActivationServices().then(function (result) {
            var services = result;
            if (services.length > 0) {
                _this.servicesActivated = services.length;
                services.forEach(function (element) {
                    if (element.finalized)
                        _this.servicesFinalized++;
                });
                if (_this.servicesActivated != _this.servicesFinalized)
                    _this.wizardIsInvokable = true;
            }
        });
    };
    HeaderIntegratedComponent.ɵfac = function HeaderIntegratedComponent_Factory(t) { return new (t || HeaderIntegratedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_installer_service__WEBPACK_IMPORTED_MODULE_9__["AppInstallerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_emit_service__WEBPACK_IMPORTED_MODULE_14__["EmitService"])); };
    HeaderIntegratedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderIntegratedComponent, selectors: [["app-header-integrated"]], viewQuery: function HeaderIntegratedComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_fra_tabs_fra_tabs_component__WEBPACK_IMPORTED_MODULE_15__["FraTabsComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        } }, decls: 12, vars: 19, consts: [[1, "header-right"], [1, "container-fluid"], ["class", "d-flex justify-content-end mr-2", 4, "ngIf"], ["id", "notification", 1, "navbar-collapse", "px-3", 3, "hidden"], [3, "onTabChange", "onDeleteAll"], [3, "id", "label", "showNotificationAsNoReaded", "backgroundColor", "showDeleteAllButton"], [3, "notifications"], [3, "id", "label", "backgroundColor", "showNotificationAsNoReaded", "showDeleteAllButton"], ["id", "activation-container", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mr-2"], ["id", "web-right-header", 1, "d-flex", "d-flex", "align-items-center"], ["id", "download-pwa", "class", "btn btn-outline-primary mr-3", 4, "ngIf"], [1, "d-flex"], ["id", "button-noti", 1, "button-notification", 3, "click"], [1, "icon-bell", 2, "font-size", "1.4rem", "color", "#666A73"], ["class", "noti-bell", 4, "ngIf"], ["id", "download-pwa", 1, "btn", "btn-outline-primary", "mr-3"], [1, "icon-download-app"], [1, "text"], [1, "r-bold", "c-black", 3, "hidden"], ["alt", "Compartir", "width", "20", "height", "20", 3, "src"], [1, "noti-bell"], [1, "ds-caption", "ds-r-regular"], ["id", "activation-container"], ["id", "resume-wizard", "class", "btn btn-primary wizard-resume-btn d-flex align-items-center", 3, "click", 4, "ngIf"], ["id", "resume-wizard", 1, "btn", "btn-primary", "wizard-resume-btn", "d-flex", "align-items-center", 3, "click"], ["width", "16", 3, "src"], [1, "ml-2", "text-uppercase"]], template: function HeaderIntegratedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderIntegratedComponent_div_2_Template, 7, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-fra-tabs", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onTabChange", function HeaderIntegratedComponent_Template_app_fra_tabs_onTabChange_4_listener($event) { return ctx.changeTab($event, true); })("onDeleteAll", function HeaderIntegratedComponent_Template_app_fra_tabs_onDeleteAll_4_listener($event) { return ctx.deleteAllByTab($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-fra-tab", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-own-notification", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-fra-tab", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-support-notification", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderIntegratedComponent_div_11_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser && ctx.currentUser.roleId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isNotificationOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, "NOTIFICATIONS.MY_NOTIFICATIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ownNotification)("showNotificationAsNoReaded", ctx.notificationUnreaded)("backgroundColor", "#EB1919")("showDeleteAllButton", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("notifications", ctx.userNotificationsGrouped);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 17, "NOTIFICATIONS.SUPPORT_NOTIFICATIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.supportNotification)("backgroundColor", "#EB1919")("showNotificationAsNoReaded", ctx.supportNotificationUnreaded)("showDeleteAllButton", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("notifications", ctx.supportNotificationGrouped);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.wizardIsInvokable);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _fra_tabs_fra_tabs_component__WEBPACK_IMPORTED_MODULE_15__["FraTabsComponent"], _fra_tabs_fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_17__["FraTabComponent"], _notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_18__["OwnNotificationComponent"], _notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_19__["SupportNotificationComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]], styles: [".button-notification {\n  width: 48px;\n  height: 48px;\n  border-radius: 50% !important;\n  background-color: #fff;\n  border: 1px solid #fff;\n}\n\n/**/\n\n.r-regular {\n  font-family: \"RobotoRegular\";\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14.06px;\n  color: #666A73;\n}\n\n.roboto {\n  font-family: \"RobotoRegular\";\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16.41px;\n  color: #666A73;\n  cursor: pointer;\n}\n\n.r-bold {\n  font-family: \"RobotoBold\";\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n}\n\n.c-black {\n  color: #333;\n}\n\n.body-font {\n  font-family: \"RobotoRegular\";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16.41px;\n  color: #34383F;\n}\n\n.background-alert {\n  padding: 12px;\n  border-radius: 8px;\n}\n\n.hr-color {\n  border-bottom: 2px solid #ECF1F8;\n  margin-top: 0.5rem;\n  margin-bottom: 2rem;\n  width: calc(100% - 10px);\n}\n\n.text-align-justify {\n  text-align: justify;\n}\n\n.blueNote {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #36B3ED;\n  position: absolute;\n  top: 18px;\n  right: 30px;\n}\n\n.header-right ul li .navbar-collapse {\n  min-height: 80vh;\n}\n\n#download-pwa [class*=icon-] {\n  font-size: 20px !important;\n}\n\n#icons-right {\n  display: flex !important;\n  flex-direction: row !important;\n  margin-top: 2rem;\n  margin-right: 10px;\n}\n\n#notification {\n  right: 25px !important;\n  position: absolute;\n  background: #fff;\n  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  margin-top: 0.5rem;\n  width: 600px;\n  z-index: 1;\n}\n\n.noti-bell {\n  position: relative;\n  background: #EB1919;\n  margin-left: -12px;\n  border-radius: 14px;\n  display: flex;\n  padding: 2px 3px;\n  height: 18px;\n  min-width: 18px;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n@media only screen and (max-width: 767px) {\n  #web-right-header {\n    display: none;\n  }\n\n  #notification {\n    position: fixed !important;\n    width: 95%;\n    top: 80px;\n    right: 3% !important;\n  }\n\n  .header-right ul li .navbar-collapse {\n    margin: 5% auto;\n    left: 0;\n    right: 0;\n  }\n\n  button#download-pwa {\n    visibility: hidden;\n  }\n\n  #button-noti {\n    visibility: hidden;\n  }\n\n  .noti-bell {\n    visibility: hidden;\n  }\n}\n\n@media (max-width: 767px) {\n  #activation-container {\n    display: none;\n  }\n}\n\n.ds-service-icon {\n  /* color: #36B3ED !important; */\n  font-size: 40px !important;\n}\n\n@media (max-width: 450px) {\n  .section--icon {\n    width: 30% !important;\n  }\n\n  .section--text {\n    margin-left: 20px;\n    width: 70% !important;\n  }\n\n  .alerta-icon {\n    width: 90px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWludGVncmF0ZWQvaGVhZGVyLWludGVncmF0ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBLEdBQUE7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBREY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtFQUZGOztFQUlBO0lBRUUsMEJBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLG9CQUFBO0VBRkY7O0VBS0E7SUFDRSxlQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUFGRjs7RUFLQTtJQUNFLGtCQUFBO0VBRkY7O0VBS0E7SUFDRSxrQkFBQTtFQUZGOztFQUtBO0lBQ0Usa0JBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxhQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLCtCQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UscUJBQUE7RUFKRjs7RUFNQTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7RUFIRjs7RUFNQTtJQUNFLHNCQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1pbnRlZ3JhdGVkL2hlYWRlci1pbnRlZ3JhdGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1ub3RpZmljYXRpb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLyoqL1xuXG4uci1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTQuMDZweDtcbiAgY29sb3I6ICM2NjZBNzM7XG59XG5cbi5yb2JvdG97XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2LjQxcHg7XG4gIGNvbG9yOiAjNjY2QTczO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yLWJvbGQge1xuICBmb250LWZhbWlseTogJ1JvYm90b0JvbGQnO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uYy1ibGFjayB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYm9keS1mb250e1xuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNi40MXB4O1xuICBjb2xvcjogIzM0MzgzRjtcbn1cblxuLmJhY2tncm91bmQtYWxlcnR7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhyLWNvbG9ye1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VDRjFGODtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG59XG5cbi50ZXh0LWFsaWduLWp1c3RpZnl7XG4gIHRleHQtYWxpZ246IGp1c3RpZnlcbn1cblxuXG4uYmx1ZU5vdGV7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2QjNFRDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHVsIGxpIC5uYXZiYXItY29sbGFwc2Uge1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4jZG93bmxvYWQtcHdhIFtjbGFzcyo9aWNvbi1dIHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNpY29ucy1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNub3RpZmljYXRpb24ge1xuICByaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjVweCByZ2IoMCAwIDAgLyAzMCUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgd2lkdGg6IDYwMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG5cbi5ub3RpLWJlbGx7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0VCMTkxOTtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAycHggM3B4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1pbi13aWR0aDogMThweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjd2ViLXJpZ2h0LWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbm90aWZpY2F0aW9uIHtcbiAgICAvLyBtYXJnaW4tdG9wOjEycHg7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1JTtcbiAgICB0b3A6ODBweDtcbiAgICByaWdodDogMyUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQgdWwgbGkgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICBidXR0b24jZG93bmxvYWQtcHdhIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAjYnV0dG9uLW5vdGkge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gIC5ub3RpLWJlbGx7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICNhY3RpdmF0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5kcy1zZXJ2aWNlLWljb24ge1xuICAvKiBjb2xvcjogIzM2QjNFRCAhaW1wb3J0YW50OyAqL1xuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlY3Rpb24tLWljb24ge1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvbi0tdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYWxlcnRhLWljb24ge1xuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"], encapsulation: 2 });
    return HeaderIntegratedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderIntegratedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-header-integrated",
                templateUrl: "./header-integrated.component.html",
                styleUrls: ["./header-integrated.component.scss"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__["SuiteService"] }, { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_7__["ServicesService"] }, { type: src_app_services_app_installer_service__WEBPACK_IMPORTED_MODULE_9__["AppInstallerService"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__["LocalService"] }, { type: src_app_services_emit_service__WEBPACK_IMPORTED_MODULE_14__["EmitService"] }]; }, { tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_fra_tabs_fra_tabs_component__WEBPACK_IMPORTED_MODULE_15__["FraTabsComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1N2o":
/*!*************************************!*\
  !*** ./src/app/utils/ImageUtils.ts ***!
  \*************************************/
/*! exports provided: ImageUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUtils", function() { return ImageUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);


var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
    }
    ImageUtils.compressImage = function (src, newX, newY) {
        return new Promise(function (res, rej) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                var elem = document.createElement('canvas');
                elem.width = newX;
                elem.height = newY;
                var ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, newX, newY);
                var data = ctx.canvas.toDataURL();
                res(data);
            };
            img.onerror = function (error) { return rej(error); };
        });
    };
    ImageUtils.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    ImageUtils.noCacheImagen = function (path) {
        return path + "?nocache=" + new Date().getTime();
    };
    ImageUtils.donwloadFileFromURL = function (url, filename) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var file, fileBlob;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        file = _a.sent();
                        if (!file) return [3 /*break*/, 3];
                        return [4 /*yield*/, file.blob()];
                    case 2:
                        fileBlob = _a.sent();
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(fileBlob, filename);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ImageUtils;
}());



/***/ }),

/***/ "1VDo":
/*!******************************************************************!*\
  !*** ./src/app/modules/home/rgpd-service/shared/rgpd.service.ts ***!
  \******************************************************************/
/*! exports provided: RgpdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RgpdService", function() { return RgpdService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");






var RgpdService = /** @class */ (function () {
    function RgpdService(httpClient) {
        this.httpClient = httpClient;
        this.changeStep$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.nextStep$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.section$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    RgpdService.prototype.emitChangeStep = function (value) {
        this.changeStep$.next(value);
    };
    RgpdService.prototype.emitReload = function (value) {
        this.reload$.next(value);
    };
    RgpdService.prototype.emitGoToSection = function (section) {
        this.section$.next(section);
    };
    RgpdService.prototype.emitGoToStep = function (step) {
        this.nextStep$.next(step);
    };
    RgpdService.prototype.getRgpdData = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/formmodel");
    };
    RgpdService.prototype.saveRgpdData = function (data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/formmodel", data);
    };
    RgpdService.prototype.updateRgpdDataLocal = function (data) {
        this.rgpdData = data;
    };
    RgpdService.prototype.getRgpdDataLocal = function () {
        return this.rgpdData;
    };
    RgpdService.prototype.proccessDataToUpdate = function (step, stepData) {
        var findSection = this.rgpdData.sections.findIndex(function (section) { return section.sectionId === step; });
        this.rgpdData.sections[findSection].completed = true;
        this.rgpdData.sections[findSection].enabled = stepData.stepForm.get('sectionQuestion').value;
        if (this.rgpdData.sections[findSection].questions && this.rgpdData.sections[findSection].questions.length) {
            var _loop_1 = function (index) {
                var element = this_1.rgpdData.sections[findSection].questions[index];
                if (this_1.rgpdData.sections[findSection].enabled) {
                    var findValues = stepData.formValues.find(function (x) { return x.questionId === element.questionId; });
                    if (findValues.answers && findValues.answers.length) {
                        var answersSelecteds = findValues.answers.filter(function (x) { return x.isChecked; });
                        var haveOtherField = answersSelecteds.find(function (x) { return x.hasFieldOther; });
                        if (haveOtherField) {
                            element.other = haveOtherField.otherField;
                        }
                        else {
                            element.other = "";
                        }
                        element.answersSelected = answersSelecteds.map(function (x) { return x.answerId; });
                    }
                }
                else {
                    element.answersSelected = [];
                    element.other = "";
                }
            };
            var this_1 = this;
            for (var index = 0; index < this.rgpdData.sections[findSection].questions.length; index++) {
                _loop_1(index);
            }
        }
        if (this.rgpdData.sections[findSection].enabled) {
            this.rgpdData.sections[findSection].thirdCompanies = stepData.agentList.map(function (x) { return x; });
        }
        else {
            this.rgpdData.sections[findSection].thirdCompanies = [];
        }
    };
    RgpdService.prototype.generateRgpdModelDocument = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/generatemodel");
    };
    RgpdService.prototype.downloadRgpdModelDocument = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/getmodelfile", { headers: headers, params: params, responseType: 'text' });
    };
    RgpdService.prototype.getRgpd = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/getstatus", { params: params });
    };
    RgpdService.prototype.getFormEval = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/formeval", { params: params });
    };
    RgpdService.prototype.updateRgpd = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/rgpd/formeval", data, { params: params });
    };
    RgpdService.ɵfac = function RgpdService_Factory(t) { return new (t || RgpdService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    RgpdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RgpdService, factory: RgpdService.ɵfac, providedIn: 'root' });
    return RgpdService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RgpdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "372O":
/*!***************************************!*\
  !*** ./src/app/utils/string-utils.ts ***!
  \***************************************/
/*! exports provided: StringUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtils", function() { return StringUtils; });
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.isValidString = function (str) {
        return str !== null && str !== undefined && typeof str === "string" && str.length > 0;
    };
    StringUtils.validarEmail = function (email) {
        if (email.length <= 2) {
            return false;
        }
        if (email.indexOf("@") == -1) {
            return false;
        }
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;
        if (dot == -1 || dot < 2 || dotCount > 2) {
            return false;
        }
        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                return false;
            }
        }
        return true;
    };
    StringUtils.deepClone = function (arg) {
        return JSON.parse(JSON.stringify(arg));
    };
    StringUtils.getCurrentDate = function () {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date();
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    };
    StringUtils.convertDateLatinFormat = function (date) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    };
    StringUtils.convertDateWithHour = function (date) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        function parseHour(val) {
            if (val > 12) {
                s = "pm";
                return pad(val - 12);
            }
            else {
                s = "am";
                return val;
            }
        }
        var s = '';
        var d = new Date(date);
        var h = parseHour(d.getHours());
        var parseDate = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
        var res = parseDate + ' - ' + h + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + " " + s;
        return res;
    };
    StringUtils.addDaysAndFormat = function (date, days) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    };
    StringUtils.groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    ;
    StringUtils.sortByProperty = function (array, property, inverse) {
        if (inverse === void 0) { inverse = false; }
        var arraySortered = array.sort(function (a, b) {
            if (a[property] > b[property]) {
                return 1;
            }
            if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        });
        if (inverse) {
            return arraySortered.reverse();
        }
        return arraySortered;
    };
    StringUtils.textareaReplaceLineBreaks = function (text) {
        if (!text) {
            return '';
        }
        return text.replace(/(\r\n|\n)/g, '<br/>');
    };
    StringUtils.removeHTML = function (text) {
        if (!text)
            return text;
        var without_html = text.replace(/<[^>]*>?/gm, '');
        return without_html;
    };
    StringUtils.truncateHTML = function (text, charlimit) {
        if (charlimit === void 0) { charlimit = 0; }
        if (!text || text.length <= charlimit) {
            return text;
        }
        var without_html = text.replace(/<(?:.|\n)*?>/gm, '');
        var shortened = without_html.substring(0, charlimit);
        return shortened;
    };
    StringUtils.isMobileOrTabletCheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor);
        return check;
    };
    ;
    return StringUtils;
}());



/***/ }),

/***/ "5lIf":
/*!***************************************************!*\
  !*** ./src/app/components/call/call.component.ts ***!
  \***************************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/call.service */ "tCwg");
/* harmony import */ var _twilio_voice_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @twilio/voice-sdk */ "30at");
/* harmony import */ var _twilio_voice_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_twilio_voice_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cdk-modal/services/cdk-modal-ref */ "UdKV");










var CallComponent = /** @class */ (function () {
    function CallComponent(callService, activeModal, modalRef) {
        this.callService = callService;
        this.activeModal = activeModal;
        this.modalRef = modalRef;
    }
    CallComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callService.getToken()];
                    case 1:
                        _a.sent();
                        this.device = new _twilio_voice_sdk__WEBPACK_IMPORTED_MODULE_3__["Device"](this.callService.Token);
                        this.device.connect().then(function (c) {
                            _this.call = c;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CallComponent.prototype.onColgar = function () {
        this.call.disconnect();
        this.device.disconnectAll();
        this.activeModal.close();
    };
    CallComponent.prototype.clickDigit = function (numero) {
        this.call.sendDigits(numero);
    };
    CallComponent.prototype.onMute = function () {
        if (!this.call.isMuted)
            this.call.mute();
        else
            this.call.mute(false);
    };
    CallComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    CallComponent.ɵfac = function CallComponent_Factory(t) { return new (t || CallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_5__["CDKModalRef"])); };
    CallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CallComponent, selectors: [["app-call"]], decls: 35, vars: 0, consts: [[1, "d-flex", "w-100", "justify-content-end"], ["type", "button", 1, "btn", "ds-fs-14", 3, "click"], [1, "icon-close"], [1, "p-3", "w-100", "justify-content-center", "btn"], [1, "btn-dialpad", "rounded-circle", 3, "click"], [1, "btn-dialpad", "rounded-circle", "mx-3", 3, "click"], [1, "my-3"], [1, "btn-colgar", "rounded-circle", "mt-1", "line-colgar", 3, "click"], [1, "fas", "fa-phone"]], template: function CallComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_1_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_5_listener() { return ctx.clickDigit("1"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_7_listener() { return ctx.clickDigit("2"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_9_listener() { return ctx.clickDigit("3"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_12_listener() { return ctx.clickDigit("4"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_14_listener() { return ctx.clickDigit("5"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_16_listener() { return ctx.clickDigit("6"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_19_listener() { return ctx.clickDigit("7"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_21_listener() { return ctx.clickDigit("8"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_23_listener() { return ctx.clickDigit("9"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "9");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_26_listener() { return ctx.clickDigit("*"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u2731");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_28_listener() { return ctx.clickDigit("0"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_30_listener() { return ctx.clickDigit("#"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallComponent_Template_button_click_33_listener() { return ctx.onColgar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbC9jYWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CallComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-call',
                templateUrl: './call.component.html',
                styleUrls: ['./call.component.scss']
            }]
    }], function () { return [{ type: src_app_services_call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }, { type: _cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_5__["CDKModalRef"] }]; }, null); })();


/***/ }),

/***/ "6+PL":
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language.service */ "kyOO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message.service */ "tZre");
/* harmony import */ var _local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./local.service */ "s3jE");

















var ServicesService = /** @class */ (function () {
    function ServicesService(http, userService, languageService, messageService, translate, localService) {
        this.http = http;
        this.userService = userService;
        this.languageService = languageService;
        this.messageService = messageService;
        this.translate = translate;
        this.localService = localService;
        this.userTags = [];
        this.selCategory = 0;
        this.currentServicesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentServices = this.currentServicesSubject.asObservable();
    }
    Object.defineProperty(ServicesService.prototype, "currentServicesValue", {
        get: function () {
            return this.currentServicesSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    ServicesService.prototype.getLocalStorage = function (key) {
        return this.localService.getJsonValue(key);
    };
    ServicesService.prototype.postContactForm = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/formkitdigital", data).toPromise()];
            });
        });
    };
    ServicesService.ɵfac = function ServicesService_Factory(t) { return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"])); };
    ServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServicesService, factory: ServicesService.ɵfac, providedIn: 'root' });
    return ServicesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "7Hzr":
/*!*********************************************!*\
  !*** ./src/app/services/partner.service.ts ***!
  \*********************************************/
/*! exports provided: PartnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerService", function() { return PartnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.service */ "kyOO");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country.service */ "Xpb8");
/* harmony import */ var _app_installer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-installer.service */ "oGhC");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _singleSignon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./singleSignon.service */ "CTQb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/domainFlows */ "bcgG");






















var PartnerService = /** @class */ (function () {
    function PartnerService(http, languageService, countryService, appInstaller, sanitizer, router, translate, singleSignonService) {
        this.http = http;
        this.languageService = languageService;
        this.countryService = countryService;
        this.appInstaller = appInstaller;
        this.sanitizer = sanitizer;
        this.router = router;
        this.translate = translate;
        this.singleSignonService = singleSignonService;
        this.staticContentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].STATIC_CONTENT;
        this.preloaderImage = '';
        this.isRecover = false;
        var domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
        if (domain.includes(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host)) {
            domain = domain.split(".")[0];
        }
    }
    PartnerService.prototype.delay = function (delayInms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(2);
            }, delayInms);
        });
    };
    PartnerService.prototype.Init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var domain;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.browser = this.getBrowserName();
                        return [4 /*yield*/, this.appInstaller.registerServiceWorker()];
                    case 1:
                        _a.sent();
                        domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
                        if (domain.includes(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host)) {
                            domain = domain.split(".")[0];
                        }
                        _a.label = 2;
                    case 2:
                        if (!(localStorage.getItem('swLoaded') == 'false')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.delay(20)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4:
                        domain = "fractalia";
                        return [4 /*yield*/, this.loadInitialElements(domain)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                                var addr = new URL(window.location.href);
                                var recover = addr.searchParams.get("recover");
                                params = params.set('subdomain', domain);
                                params = params.set('lan', _this.languageService.lan);
                                _this.http
                                    .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/partner", { params: params })
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (res) { return _this.partner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (res) { return _this.setLayout(res.layoutDesign); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.loadLookAndFeel(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.domainValidation(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.setLanguage(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () {
                                    if (_this.partner.nextFlow == _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__["DomainFlow"].Normal) {
                                        _this.standartFlow(domain, recover);
                                    }
                                    else if (_this.partner.nextFlow == _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__["DomainFlow"].NotFoundValidation) {
                                        _this.router.navigate(['not-found']);
                                    }
                                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        this.translate.use(this.languageService.lan);
                                        this.router.navigate(['not-found']);
                                        return [2 /*return*/];
                                    });
                                }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { return resolve(); }))
                                    .subscribe();
                            })];
                }
            });
        });
    };
    PartnerService.prototype.loadLookAndFeel = function () {
        this.cssUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].STATIC_SERVER + "webapi/partners/" + this.partner.code + "/css/lookfeel.css?nocache=" + new Date().getTime();
        var link = document.createElement('link');
        link.id = "lkPartner";
        link.href = this.cssUrl;
        link.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(link);
    };
    PartnerService.prototype.domainValidation = function () {
        if (this.partner && this.partner.id) {
            this.partner.nextFlow = _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__["DomainFlow"].Normal;
        }
        else if (this.partner.customDomain) {
            this.partner.nextFlow = _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__["DomainFlow"].NotFoundValidation;
        }
        else {
            this.partner.nextFlow = _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__["DomainFlow"].NotFoundValidation;
        }
    };
    PartnerService.prototype.setLanguage = function () {
        var _this = this;
        if (this.partner.nextFlow == _models_domainFlows__WEBPACK_IMPORTED_MODULE_12__["DomainFlow"].Normal && this.partner.lan) {
            this.translate.use(this.partner.lan);
            this.languageService.setLanguage(this.partner.lan, false);
        }
        this.translate.use(this.languageService.lan).subscribe(function () {
            if (!_this.partner.loginTitle) {
                _this.translate.get('LOGIN_TITLE_DEFAULT').toPromise().then(function (res) { _this.partner.loginTitle = res; });
            }
            if (!_this.partner.loginSubtitle) {
                _this.translate.get('LOGIN_SUBTITLE_DEFAULT').toPromise().then(function (res) { return _this.partner.loginSubtitle = res; });
            }
        });
    };
    PartnerService.prototype.setLayout = function (layout) {
        this.layout = layout;
    };
    PartnerService.prototype.standartFlow = function (domain, recover) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialElements) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadInitialElements(domain)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.partnerCookies = this.partner.partnerCookies;
                        this.countryService.getCountries(this.partner.id).then(function (result) {
                            _this.countries = result.sort(function (a, b) {
                                if (a.name < b.name) {
                                    return -1;
                                }
                                if (a.name > b.name) {
                                    return 1;
                                }
                            });
                        });
                        if (recover != null && recover.length == 36) {
                            this.isRecover = true;
                            this.recover = recover;
                        }
                        // Get background login image
                        if (this.partner.login != null && this.partner.login != "") {
                            this.backgroundImage = 'url(' + this.partner.login + ')';
                        }
                        else { // Get default
                            this.backgroundImage = '';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PartnerService.prototype.getBrowserName = function () {
        var agent = window.navigator.userAgent.toLowerCase();
        console.log("agent:", agent);
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    };
    PartnerService.prototype.loadScript = function (url, id, integrity, crossOrigin, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var script;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                script = document.createElement('script');
                script.src = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].STATIC_CONTENT + url + "?v=" + this.versionJs;
                script.id = id;
                type ? script.type = type : null;
                integrity ? script.integrity = integrity : null;
                crossOrigin ? script.crossOrigin = crossOrigin : null;
                document.getElementsByTagName('head')[0].appendChild(script);
                return [2 /*return*/];
            });
        });
    };
    PartnerService.prototype.loadCss = function (url, id, rel, crossOrigin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stylesUrl, link;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                stylesUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].STATIC_CONTENT + url + "?v=" + this.versionCss;
                link = document.createElement('link');
                crossOrigin ? link.crossOrigin = crossOrigin : null;
                link.id = id;
                link.rel = rel;
                link.href = stylesUrl;
                link.type = 'text/css';
                document.getElementsByTagName('head')[0].appendChild(link);
                return [2 /*return*/];
            });
        });
    };
    PartnerService.prototype.getPartner = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                params = params.set('id', id.toString());
                return [2 /*return*/, this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/partner/get", { params: params }).toPromise()];
            });
        });
    };
    PartnerService.prototype.loadInitialElements = function (domain) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                params = params.set('subdomain', domain);
                params = params.set('lan', this.languageService.lan);
                this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/partner/initialelements", { params: params }).toPromise().then(function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var preloader;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!result) return [3 /*break*/, 12];
                                this.initialElements = result;
                                this.versionJs = this.initialElements.jsVersion;
                                this.versionCss = this.initialElements.cssVersion;
                                if (this.initialElements.preloader) {
                                    this.preloaderImage = this.initialElements.preloader;
                                    preloader = document.getElementById('initialPreloader');
                                    if (preloader) {
                                        preloader.setAttribute("src", this.preloaderImage);
                                        preloader.style.visibility = "visible";
                                    }
                                }
                                // default
                                else {
                                    this.initialElements.preloader = this.staticContentUrl + "img/brand/preloader.gif";
                                }
                                if (result.favicon) {
                                    document.getElementById('favicon').setAttribute("href", this.initialElements.favicon);
                                }
                                if (this.initialElements.loginType == 1) {
                                    this.singleSignonService.FacebookInit();
                                    this.singleSignonService.GoogleInit();
                                }
                                if (result.pwaName && result.pwaIconPath && result.pwaStatusBarColor && result.pwaMobileIconPath && !domain.includes("localhost")) { // Has pwa configuration -> registering sw and pwa configuration
                                    this.loadPwaManifest();
                                }
                                return [4 /*yield*/, this.loadCss("fonts/myicons/myicons.css", 'myIcons', 'stylesheet')];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.loadCss("fonts/newcore/newcore.css", 'newCore', 'stylesheet')];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.loadScript("fonts/font-awesome/font-awesome.js", 'fontAwesome', null, 'anonymous')];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, this.loadCss("css/bootstrap.min.css", 'bootstrapMinCss', 'stylesheet', 'anonymous')];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, this.loadCss("css/bootstrap-select.min.css", 'bootstrapSelectMinCss', 'stylesheet')];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, this.loadScript("js/jquery-3.6.0.min.js", 'jqueryJs', null, 'anonymous')];
                            case 6:
                                _a.sent();
                                return [4 /*yield*/, this.loadScript("js/popper.min.js", 'popperJs', null, 'anonymous')];
                            case 7:
                                _a.sent();
                                return [4 /*yield*/, this.loadScript("js/bootstrap.min.js", 'bootstrapMinJs', null, 'anonymous')];
                            case 8:
                                _a.sent();
                                return [4 /*yield*/, this.loadScript("js/bootstrap-select.min.js", 'bootstrapSelectMinJs')];
                            case 9:
                                _a.sent();
                                return [4 /*yield*/, this.loadScript("js/startchat.js", 'startchat', null, 'anonymous')];
                            case 10:
                                _a.sent();
                                return [4 /*yield*/, this.loadCss("css/styles.css", 'styles', 'stylesheet')];
                            case 11:
                                _a.sent();
                                _a.label = 12;
                            case 12: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ////////////////////////
    // PWA CONFIGURATION
    PartnerService.prototype.loadPwaManifest = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pwaManifest).subscribe(function (data) {
                    var jsonstring = JSON.stringify(data);
                    jsonstring = jsonstring.split('{{name}}').join(_this.initialElements.pwaName);
                    jsonstring = jsonstring.split('{{statusBarColor}}').join(_this.initialElements.pwaStatusBarColor);
                    jsonstring = jsonstring.split('{{backgroundColor}}').join(_this.initialElements.pwaBackgroundColor);
                    var url;
                    if (window.location.href.indexOf("suite/") >= 0) {
                        url = new URL(window.location.href.substring(0, window.location.href.indexOf("suite/") + 6));
                    }
                    else {
                        url = new URL(window.location.href);
                    }
                    jsonstring = jsonstring.split('{{siteUrl}}').join(url.toString());
                    if ((navigator.userAgent.match(/Android/i)) ||
                        (navigator.userAgent.match(/webOS/i)) ||
                        (navigator.userAgent.match(/iPhone/i)) ||
                        (navigator.userAgent.match(/iPad/i))) {
                        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) // Mandatory to "statusbar" iOS
                         {
                            // iOS Status bar will be main body background color
                            var iosStatusBarStyle = document.createElement('meta');
                            iosStatusBarStyle.name = "apple-mobile-web-app-status-bar-style";
                            iosStatusBarStyle.content = 'black-translucent';
                            document.getElementsByTagName('head')[0].appendChild(iosStatusBarStyle);
                            // document.getElementById('main-body').style.backgroundColor = this.initialElements.pwaStatusBarColor
                        }
                        jsonstring = jsonstring.split('{{pwaIcon}}').join(_this.initialElements.pwaMobileIconPath);
                    }
                    else {
                        jsonstring = jsonstring.split('{{pwaIcon}}').join(_this.initialElements.pwaIconPath);
                    }
                    var link = document.createElement('link');
                    var blob = new Blob([jsonstring], { type: 'application/json' });
                    var manifestURL = URL.createObjectURL(blob);
                    link.href = manifestURL;
                    link.rel = 'manifest';
                    document.getElementsByTagName('head')[0].appendChild(link);
                    var metaThemecolor = document.createElement('meta');
                    metaThemecolor.name = "theme-color";
                    metaThemecolor.content = _this.initialElements.pwaStatusBarColor;
                    document.getElementsByTagName('head')[0].appendChild(metaThemecolor);
                    var linkIosIcon = document.createElement('link');
                    linkIosIcon.href = _this.initialElements.pwaMobileIconPath;
                    linkIosIcon.rel = 'apple-touch-icon';
                    document.getElementsByTagName('head')[0].appendChild(linkIosIcon);
                    _this.appInstaller.showInstallerAuto();
                });
                return [2 /*return*/];
            });
        });
    };
    PartnerService.ɵfac = function PartnerService_Factory(t) { return new (t || PartnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_installer_service__WEBPACK_IMPORTED_MODULE_6__["AppInstallerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_singleSignon_service__WEBPACK_IMPORTED_MODULE_9__["SingleSignonService"])); };
    PartnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PartnerService, factory: PartnerService.ɵfac, providedIn: 'root' });
    return PartnerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PartnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }, { type: _country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"] }, { type: _app_installer_service__WEBPACK_IMPORTED_MODULE_6__["AppInstallerService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }, { type: _singleSignon_service__WEBPACK_IMPORTED_MODULE_9__["SingleSignonService"] }]; }, null); })();


/***/ }),

/***/ "7MbT":
/*!********************************************************!*\
  !*** ./src/app/modules/shared/sidebar-menu.service.ts ***!
  \********************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");














var SidebarService = /** @class */ (function () {
    function SidebarService(httpClient, userService, suiteService, translate) {
        this.httpClient = httpClient;
        this.userService = userService;
        this.suiteService = suiteService;
        this.translate = translate;
        this.menu = [];
        this.menuList = [];
        this.reloadJumbotron$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.reloadSidebar$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.hasHomeMenu = false;
        this.hasFamilyMenu = false;
        this.hasServicesMenu = false;
    }
    SidebarService.prototype.emitReloadJumbotrom = function (value) {
        this.reloadJumbotron$.next(value);
    };
    SidebarService.prototype.emitReloadSidebar = function (value) {
        this.reloadSidebar$.next(value);
    };
    SidebarService.prototype.resetMenu = function () {
        this.menuList = [];
    };
    SidebarService.prototype.handleLogout = function () {
        this.resetMenu();
        this.userService.logout();
    };
    SidebarService.prototype.setActiveRouteByUrl = function (url) {
        if (this.previusActive && Object.keys(this.previusActive).length) {
            this.menu[this.previusActive.index].active = false;
        }
        else {
            this.findAndSetRouteInactive();
        }
        var parameter = {
            key: 'route',
            value: url,
        };
        var findUrl = this.findByParameters(this.menu, parameter);
        if (findUrl && Object.keys(findUrl).length > 0) {
            this.setActiveRouteRecursive(findUrl);
        }
    };
    SidebarService.prototype.findAndSetRouteInactive = function () {
        var findIndexActive = this.menu.findIndex(function (x) { return x.active === true; });
        if (findIndexActive !== -1) {
            this.previusActive = this.menu[findIndexActive];
            this.menu[findIndexActive].active = false;
        }
    };
    SidebarService.prototype.setActiveRouteRecursive = function (itemMenu) {
        if (itemMenu && itemMenu.parentId) {
            var parameter = {
                key: 'id',
                value: itemMenu.parentId,
            };
            var parent_1 = this.findByParameters(this.menu, parameter);
            if (parent_1 && Object.keys(parent_1).length > 0) {
                this.setActiveRouteRecursive(parent_1);
            }
        }
        else {
            this.menu[itemMenu.index].active = true;
            this.previusActive = itemMenu;
        }
    };
    SidebarService.prototype.findByParameters = function (source, parameter) {
        for (var index = 0; index < source.length; index++) {
            var element = source[index];
            if (element[parameter.key] === parameter.value) {
                element.index = index;
                return element;
            }
            if (element && element.children && element.children.length) {
                var subResult = this.findByParameters(element.children, parameter);
                if (subResult) {
                    return subResult;
                }
            }
        }
    };
    SidebarService.prototype.getUserSuites = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var langUser = localStorage.getItem('langUser');
        params = params.set('lan', langUser);
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/suite/user_suite", { params: params });
    };
    SidebarService.prototype.getPartner = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('id', id.toString());
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/partner/get", { params: params });
    };
    SidebarService.prototype.getUserCategories = function (suiteId, partnertId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('suiteId', suiteId.toString());
        params = params.set('partnerId', partnertId.toString());
        var langUser = localStorage.getItem('langUser');
        params = params.set('lan', langUser);
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/service/user/category", { params: params });
    };
    SidebarService.prototype.getUserServices = function (suiteId, partnertId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('suiteId', suiteId.toString());
        params = params.set('partnerId', partnertId.toString());
        var langUser = localStorage.getItem('langUser');
        params = params.set('lan', langUser);
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/user/services", { params: params });
    };
    SidebarService.prototype.getUserServicesMenu = function (suiteId, partnertId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('suiteId', suiteId.toString());
        params = params.set('partnerId', partnertId.toString());
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/menu/menuservices", { params: params });
    };
    SidebarService.prototype.getUserServicesDashboard = function (suiteId, partnertId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('suiteId', suiteId.toString());
        params = params.set('partnerId', partnertId.toString());
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/menu/dashboardservices", { params: params });
    };
    SidebarService.prototype.getChatInfo = function (serviceId, suiteId, partnertId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('partnersuiteid', suiteId.toString());
        params = params.set('partnerid', partnertId.toString());
        params = params.set('serviceid', serviceId.toString());
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/menu/chatservice", { params: params });
    };
    SidebarService.prototype.getJumbotromInformation = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/user/jumbotron");
    };
    SidebarService.prototype.getServiceInfo = function (serviceId, partnertId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('partnerid', partnertId.toString());
        params = params.set('serviceid', serviceId.toString());
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/menu/infoservice", { params: params });
    };
    SidebarService.prototype.getServiceInfoByCode = function (serviceCode) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.set('serviceCode', serviceCode);
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiEndpoint + "api/menu/getServiceByCode", { params: params });
    };
    SidebarService.prototype.callMultipleAPIToSidebarMenu = function () {
        var _this = this;
        var identityToken = this.userService.currentUserValue;
        if (identityToken) {
            return new Promise(function (resolve) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                    _this.getUserSuites(),
                    _this.getPartner(identityToken.partnerId)
                ])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                    if (response[0] && response[0].length) {
                        _this.suiteService.suites = response[0];
                        _this.userService.selSuiteId = response[0][0].id;
                        _this.userService.selSuiteName = response[0][0].name;
                        _this.suiteService.isUnitFamily = response[0][0].suiteType == 1;
                        localStorage.setItem('maxCardsByUser', response[0][0].maxCardsByUser.toString());
                        localStorage.setItem('maxIdentitiesByUser', response[0][0].maxIdentitiesByUser.toString());
                    }
                    if (response[1] && Object.keys(response[1]).length) {
                        var tempUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
                        tempUser = Object.assign({}, _this.userService.currentUserValue);
                        tempUser.partnerName = response[1].name;
                        _this.userService.updateCurrentUser(tempUser);
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                        // this.getUserCategories(this.userService.selSuiteId, identityToken.partnerId),
                        _this.getUserServicesMenu(_this.userService.selSuiteId, identityToken.partnerId),
                    ])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                        if (response[0] && response[0].length) {
                            _this.userMenuOptions = response[0];
                        }
                        // if(response[0] && response[0].length) {
                        //   this.userCategories = response[0];
                        // }
                        // if(response[1] && Object.keys(response[1]).length) {
                        //   this.userServices = response[1];
                        //   this.serviceServices.processUsers(response[1]);
                        //   this.formatServicesByCategory()
                        // }
                    }), 
                    // tap(() => this.menuList = this.initMenu()),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.processUserMenuItems(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.processUserServices(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return resolve(true); }));
                })).subscribe();
            });
        }
    };
    SidebarService.prototype.initMenu = function () {
        return [
            {
                id: 0,
                name: this.translate.instant("MY_PROFILE"),
                route: 'profile',
                icon: 'icon-home',
                parent: true,
                active: false
            },
            {
                id: 1,
                name: this.translate.instant("HOME"),
                route: 'home',
                icon: 'icon-home',
                parent: true,
                active: false
            },
            {
                id: 2,
                name: this.translate.instant("CONFIGURATION"),
                route: 'user-managment',
                icon: 'icon-users',
                parent: true,
                active: false
            },
        ];
    };
    SidebarService.prototype.processMenuItems = function () {
        var _this = this;
        var menuItems = this.userCategories.map(function (x) {
            var itemMenu = {
                id: x.id,
                name: x.desc,
                route: '',
                icon: x.icon,
                parent: true,
                showChildren: false,
                active: false,
            };
            var findServices = _this.userServices.filter(function (item) { return item.categoryId == x.id; });
            itemMenu.children = findServices.map(function (s) {
                var child = {
                    id: s.id,
                    name: s.name,
                    route: 'service/' + s.code,
                    icon: s.icon,
                    parentId: x.id,
                    parent: false,
                    active: false
                };
                return child;
            });
            return itemMenu;
        });
        this.menuList = this.menuList.concat(menuItems);
    };
    SidebarService.prototype.getMenu = function () {
        return this.menuList;
    };
    SidebarService.prototype.formatServicesByCategory = function () {
        var _this = this;
        this.userServicesFormated = this.userServices.map(function (item) {
            var findCategory = _this.userMenuOptions.find(function (x) { return x.id == item.categoryId; });
            if (findCategory) {
                item.category = findCategory.name;
                item.categoryIcon = findCategory.icon;
            }
            return item;
        });
    };
    SidebarService.prototype.processUserMenuItems = function () {
        var menuItems;
        if (this.userMenuOptions && this.userMenuOptions.length > 0) {
            menuItems = this.userMenuOptions.map(function (x) {
                var itemMenu = {
                    id: x.id,
                    name: x.name,
                    route: '',
                    icon: x.icon,
                    parent: true,
                    showChildren: false,
                    active: false,
                    code: x.code
                };
                itemMenu.children = x.services.map(function (s) {
                    var child = {
                        id: s.id,
                        name: s.name,
                        route: 'service/' + s.code,
                        icon: s.icon,
                        parentId: x.id,
                        parent: false,
                        active: false,
                        code: s.code
                    };
                    return child;
                });
                return itemMenu;
            });
            /// Se filtran los datos por nombre si llegan repetidos.
            if (menuItems && menuItems.length > 0) {
                for (var index = 0; index < menuItems.length; index++) {
                    var child = [];
                    var children = menuItems[index].children;
                    if (children && children.length > 0) {
                        var _loop_1 = function (index2) {
                            var c = children[index2];
                            var e = child.filter(function (w) { return w.code.trim().toLowerCase() === c.code.trim().toLowerCase(); });
                            if (e && e.length === 0) {
                                child.push(c);
                            }
                        };
                        for (var index2 = 0; index2 < children.length; index2++) {
                            _loop_1(index2);
                        }
                    }
                    menuItems[index].children = child;
                }
            }
        }
        else {
            menuItems = [];
        }
        this.menuList = this.menuList.concat(menuItems);
    };
    SidebarService.prototype.processUserServices = function () {
        var abc = [];
        if (this.userMenuOptions && this.userMenuOptions.length > 0) {
            this.userMenuOptions.forEach(function (x) {
                var servicesFormatted = x.services.map(function (s) {
                    s.categoryId = x.id;
                    s.category = x.name;
                    return s;
                });
                abc = abc.concat(servicesFormatted);
            });
        }
        this.userServicesFormated = abc;
    };
    SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
    return SidebarService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__["SuiteService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "8RUi":
/*!********************************************************!*\
  !*** ./src/app/components/fra-tabs/fra-tabs.module.ts ***!
  \********************************************************/
/*! exports provided: FraTabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraTabsModule", function() { return FraTabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fra-tab/fra-tab.component */ "vcuW");
/* harmony import */ var _fra_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fra-tabs.component */ "Lv2G");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






var FraTabsModule = /** @class */ (function () {
    function FraTabsModule() {
    }
    FraTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FraTabsModule });
    FraTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FraTabsModule_Factory(t) { return new (t || FraTabsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            ]] });
    return FraTabsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FraTabsModule, { declarations: [_fra_tabs_component__WEBPACK_IMPORTED_MODULE_3__["FraTabsComponent"],
        _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_2__["FraTabComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_fra_tabs_component__WEBPACK_IMPORTED_MODULE_3__["FraTabsComponent"],
        _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_2__["FraTabComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FraTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ],
                declarations: [
                    _fra_tabs_component__WEBPACK_IMPORTED_MODULE_3__["FraTabsComponent"],
                    _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_2__["FraTabComponent"]
                ],
                exports: [
                    _fra_tabs_component__WEBPACK_IMPORTED_MODULE_3__["FraTabsComponent"],
                    _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_2__["FraTabComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "8lNY":
/*!****************************************!*\
  !*** ./src/app/pipes/callback.pipe.ts ***!
  \****************************************/
/*! exports provided: CallbackPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackPipe", function() { return CallbackPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var CallbackPipe = /** @class */ (function () {
    function CallbackPipe() {
    }
    CallbackPipe.prototype.transform = function (items, callback) {
        if (!items || !callback) {
            return items;
        }
        return items.filter(function (item) { return callback(item); });
    };
    CallbackPipe.ɵfac = function CallbackPipe_Factory(t) { return new (t || CallbackPipe)(); };
    CallbackPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "callback", type: CallbackPipe, pure: false });
    return CallbackPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'callback',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "9KET":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "gK8K");
/* harmony import */ var _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-integrated/header-integrated.component */ "0Jdf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "H3jT");








var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(partnerService) {
        this.partnerService = partnerService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_1__["PartnerService"])); };
    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 0, consts: [["id", "suite", 1, "minheight", "ml-344p"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header-integrated");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_3__["HeaderIntegratedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".ml-344p {\n  margin-left: 344px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tbC0zNDRwe1xuICBtYXJnaW4tbGVmdDogMzQ0cHg7XG59XG4iXX0= */"], encapsulation: 2 });
    return LayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_1__["PartnerService"] }]; }, null); })();


/***/ }),

/***/ "9L4e":
/*!************************************************************************************!*\
  !*** ./src/app/components/layout/header-integrated/shared/notification.service.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/string-utils */ "372O");




var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.openNotification$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.showBell$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isOpen = false;
        this.sidebarToogle = true;
        this.showBell = false;
        this.totalNotReadedNotifications = "";
        this.initSidebarToogle();
    }
    NotificationService.prototype.toogleNotification = function () {
        this.isOpen = !this.isOpen;
        this.openNotification$.next({ toogle: this.isOpen });
        var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__["StringUtils"].isMobileOrTabletCheck();
        if (isMobile)
            document.body.style.overflowY = this.isOpen ? 'hidden' : 'auto';
    };
    NotificationService.prototype.closeNotification = function () {
        if (this.isOpen) {
            this.isOpen = false;
            this.openNotification$.next({ toogle: this.isOpen });
            var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__["StringUtils"].isMobileOrTabletCheck();
            if (isMobile)
                document.body.style.overflowY = this.isOpen ? 'hidden' : 'auto';
        }
    };
    NotificationService.prototype.initSidebarToogle = function () {
        this.sidebarToogle = window.screen.width > 767;
    };
    NotificationService.prototype.toogleSidebarToogle = function () {
        this.sidebarToogle = !this.sidebarToogle;
        this.removeModalOpen();
    };
    NotificationService.prototype.removeModalOpen = function () {
        if (!this.sidebarToogle) {
            var body = document.getElementById('main-body');
            body.classList.remove("modal-open");
        }
    };
    NotificationService.prototype.setSidebarToogle = function (value) {
        this.sidebarToogle = value;
        this.removeModalOpen();
    };
    NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
    return NotificationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9fQs":
/*!**********************************************************!*\
  !*** ./src/app/components/infomodal/infomodal.module.ts ***!
  \**********************************************************/
/*! exports provided: InfoModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalModule", function() { return InfoModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _infomodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infomodal.component */ "nY9P");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nz-spinner/nz-spinner.module */ "gT/A");








var InfoModalModule = /** @class */ (function () {
    function InfoModalModule() {
    }
    InfoModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InfoModalModule });
    InfoModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InfoModalModule_Factory(t) { return new (t || InfoModalModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
    return InfoModalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfoModalModule, { declarations: [_infomodal_component__WEBPACK_IMPORTED_MODULE_3__["InfoModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
        _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _infomodal_component__WEBPACK_IMPORTED_MODULE_3__["InfoModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                    _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ],
                declarations: [
                    _infomodal_component__WEBPACK_IMPORTED_MODULE_3__["InfoModalComponent"]
                ],
                exports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _infomodal_component__WEBPACK_IMPORTED_MODULE_3__["InfoModalComponent"],
                ],
                entryComponents: [
                    _infomodal_component__WEBPACK_IMPORTED_MODULE_3__["InfoModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // Server DEV
    apiEndpoint: "https://api.smartsupport.devonlineassist.me/",
    // apiEndpoint: "https://api.demo.onlineassist.me/",
    provisionEndpoint: "https://api-provision.smartsupport.devonlineassist.me/",
    //apiEndpoint: "https://localhost:44336/",
    //provisionEndpoint: "https://localhost:44337/",
    host: ".smartsupport.devonlineassist.me",
    // host: "",
    pwaManifest: 'https://devstatic.app.onlineassist.me/suite/json/pwa-manifest.json',
    fractelPath: 'res/download/fractel/dev/',
    translatePath: 'https://devstatic.app.onlineassist.me/suite/i18n/',
    FB_APP_ID: '818925648718306',
    GOOGLE_APP_ID: '1029241894559-one04bug77k0dlg3a855l3hrm8ehl6s9.apps.googleusercontent.com',
    STATIC_CONTENT: 'https://devstatic.app.onlineassist.me/suite/',
    STATIC_SERVER: 'https://devstatic.app.onlineassist.me/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filter) {
        if (filter == undefined || filter == "")
            return list;
        var result = [];
        result = list.filter(function (res) {
            return (res.name + " " + res.internalName).toLowerCase().match(filter.toLowerCase());
        });
        return result;
    };
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
    return FilterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "CTQb":
/*!**************************************************!*\
  !*** ./src/app/services/singleSignon.service.ts ***!
  \**************************************************/
/*! exports provided: SingleSignonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSignonService", function() { return SingleSignonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");








var SingleSignonService = /** @class */ (function () {
    function SingleSignonService(messageService, translate) {
        this.messageService = messageService;
        this.translate = translate;
        this.gapiSetup = false; // marks if the gapi library has been loaded
    }
    SingleSignonService.prototype.GoogleInit = function () {
        var js, id = 'google-platformjs', ref = document.getElementsByTagName('script')[0];
        if (document.getElementById(id)) {
            return;
        }
        js = document.createElement('script');
        js.id = id;
        js.async = true;
        js.anon;
        js.src = "https://apis.google.com/js/platform.js";
        // js.src = "https://apis.google.com/js/api.js";
        ref.parentNode.insertBefore(js, ref);
    };
    SingleSignonService.prototype.GoogleAuthentication = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pload;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                pload = new Promise(function (resolve) {
                    gapi.load('auth2', resolve);
                });
                return [2 /*return*/, pload.then(function () {
                        gapi.auth2
                            .init({
                            client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_APP_ID,
                            cookie_policy: "none"
                        })
                            .then(function (auth) {
                            _this.authInstance = auth;
                            if (_this.authInstance.isSignedIn.get()) {
                                _this.authInstance.currentUser.get().disconnect();
                            }
                        }, function (err) {
                            _this.messageService.add(_this.translate.instant("SINGLE_SIGN_ON.THIRD_PARTY_COOKIES"), "error");
                        });
                    })];
            });
        });
    };
    SingleSignonService.prototype.GoogleLogin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.authInstance.isSignedIn.get()) {
                    this.authInstance.currentUser.get().disconnect();
                }
                // let options = new gapi.auth2.SigninOptionsBuilder();
                // options.setAppPackageName("http://localhost:4200");
                // options.setFetchBasicProfile(true);
                // options.setPrompt('select_account');
                // options.setScope('profile').setScope('email');
                // this.authInstance.signIn(options);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.authInstance.signIn().then(function (user) {
                            _this.GoogleUser = user;
                            resolve();
                        }, function (error) {
                            console.log("error logeado : ", error);
                        });
                    })];
            });
        });
    };
    SingleSignonService.prototype.FacebookInit = function () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].FB_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v10.0'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    SingleSignonService.prototype.FacebookGetStatus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            FB.getLoginStatus(function (response) {
                                if (response.status === 'connected') {
                                    FB.logout();
                                }
                                resolve(response);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SingleSignonService.prototype.FacebookLogin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        FB.login(function (response) {
                            _this.FacebookStatus = response;
                            resolve();
                        }, { scope: 'email' });
                    })];
            });
        });
    };
    SingleSignonService.prototype.FacebookGetEmail = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        FB.api('/me', { fields: ['email'] }, function (responseUser) {
                            _this.FacebookUser = responseUser;
                            FB.logout();
                            resolve();
                        });
                    })];
            });
        });
    };
    SingleSignonService.ɵfac = function SingleSignonService_Factory(t) { return new (t || SingleSignonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    SingleSignonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SingleSignonService, factory: SingleSignonService.ɵfac, providedIn: 'root' });
    return SingleSignonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SingleSignonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "F3zH":
/*!***************************************************!*\
  !*** ./src/app/models/userNotificationGrouped.ts ***!
  \***************************************************/
/*! exports provided: UserNotificationGrouped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationGrouped", function() { return UserNotificationGrouped; });
var UserNotificationGrouped = /** @class */ (function () {
    function UserNotificationGrouped() {
        this.notifications = [];
    }
    return UserNotificationGrouped;
}());



/***/ }),

/***/ "Gvde":
/*!*******************************************************************!*\
  !*** ./src/app/dynamic-render/dynamic-render-component.module.ts ***!
  \*******************************************************************/
/*! exports provided: DynamicRenderComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponentModule", function() { return DynamicRenderComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-render-component.service */ "NKj7");
/* harmony import */ var _render_component_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-component.directive */ "utrB");




var DynamicRenderComponentModule = /** @class */ (function () {
    function DynamicRenderComponentModule() {
    }
    DynamicRenderComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DynamicRenderComponentModule });
    DynamicRenderComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DynamicRenderComponentModule_Factory(t) { return new (t || DynamicRenderComponentModule)(); }, providers: [_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_1__["DynamicRenderComponentService"]], imports: [[]] });
    return DynamicRenderComponentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DynamicRenderComponentModule, { declarations: [_render_component_directive__WEBPACK_IMPORTED_MODULE_2__["RenderComponentDirective"]], exports: [_render_component_directive__WEBPACK_IMPORTED_MODULE_2__["RenderComponentDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicRenderComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [_render_component_directive__WEBPACK_IMPORTED_MODULE_2__["RenderComponentDirective"]],
                exports: [_render_component_directive__WEBPACK_IMPORTED_MODULE_2__["RenderComponentDirective"]],
                providers: [_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_1__["DynamicRenderComponentService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "H3jT":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "kyOO");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../call/call.component */ "5lIf");
/* harmony import */ var _callmeback_callmeback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../callmeback/callmeback.component */ "cOAc");
/* harmony import */ var _cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cdk-modal/services/cdk-modal.service */ "WDzv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tooltip/tooltip.directive */ "OZ9l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function FooterComponent_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "CUSTOMER_CARE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "CUSTOMER_CARE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r1.partnerService.partner.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.partnerService.partner.phone);
} }
function FooterComponent_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "CONTACT_WHATSAPP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "CONTACT_WHATSAPP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send?phone=", ctx_r2.partnerService.partner.whatsapp, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FooterComponent_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_5_span_5_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.abrirCMB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "CALL_ME_BACK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "CALL_ME_BACK"));
} }
function FooterComponent_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_5_span_6_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.openCallModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "CLICK2CALL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "CLICK2CALL"));
} }
function FooterComponent_div_5_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "SEND_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "SEND_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r5.partnerService.partner.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FooterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_5_span_2_Template, 6, 8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_div_5_span_3_Template, 5, 7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_div_5_span_5_Template, 5, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_div_5_span_6_Template, 5, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FooterComponent_div_5_span_7_Template, 5, 7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.partnerService.partner.includePhone && ctx_r0.partnerService.partner.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.partnerService.partner.includeWhatsapp && ctx_r0.partnerService.partner.whatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.partnerService.partner != null && ctx_r0.partnerService.partner.includeCallMeBack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.partnerService.partner != null && ctx_r0.partnerService.partner.includeC2C);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.partnerService.partner.includeEmail && ctx_r0.partnerService.partner.email);
} }
//TEST
var FooterComponent = /** @class */ (function () {
    function FooterComponent(userService, partnerService, modalService, CDKmodalService, languageService) {
        this.userService = userService;
        this.partnerService = partnerService;
        this.modalService = modalService;
        this.CDKmodalService = CDKmodalService;
        this.languageService = languageService;
        this.termLink = "Términos y condiciones";
    }
    FooterComponent.prototype.ngOnInit = function () {
        if (this.languageService.lan === "es-ES") {
            this.termLink = "Términos y condiciones";
        }
        else if (this.languageService.lan === "pt-BR") {
            this.termLink = "Termos e condições do serviço";
        }
    };
    FooterComponent.prototype.openCallModal = function () {
        var config = {
            modalClass: 'ds-modal-xs',
            position: 'center',
        };
        this.CDKmodalService.open(_call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"], config);
    };
    FooterComponent.prototype.abrirCMB = function () {
        this.modalService.open(_callmeback_callmeback_component__WEBPACK_IMPORTED_MODULE_6__["CallmebackComponent"]);
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_7__["CDKModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 13, consts: [[1, "container-fluid", "m767"], ["id", "suitefooter", 1, "ml-3", "mr-3"], [1, "row"], [1, "col-xl-5", "col-ll-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "order-xl-12", "text-center", "text-xl-right", "mb-4", "mb-xl-0", "d-flex", "flex-column", "justify-content-center"], ["class", "linkstlflogin", 4, "ngIf"], [1, "col-xl-5", "col-ll-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "text-center", "text-xl-left", "mb-5", "mb-xl-0", "d-flex", "flex-column", "justify-content-center"], [1, "linkslogin", "tlf", "legals"], [1, "pl-0"], ["href", "javascript:void(0)", 1, "", 3, "routerLink"], [1, "cpp"], [1, "col-xl-2", "col-ll-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "order-xl-2", "text-center", "d-flex", "flex-column", "justify-content-center"], [1, "poweredby"], [1, "linkstlflogin"], [1, "links"], ["class", "numb icon-phone-number ", 3, "tooltip", "title", 4, "ngIf"], ["class", "numb", 3, "tooltip", "title", 4, "ngIf"], [1, "sdn"], ["class", "numb envelope", 3, "tooltip", "title", 4, "ngIf"], [1, "numb", "icon-phone-number", 3, "tooltip", "title"], [1, "", 3, "href"], [1, "icon-phone", 2, "color", "#666A73"], [1, "numb", 3, "tooltip", "title"], ["target", "_blank", 1, "icon-phone-number", 3, "href"], [1, "icon-whatsapp", 2, "color", "#666A73"], [1, "", 3, "click"], [1, "icon-call-me-back", 2, "color", "#666A73"], [1, "icon-click-to-call", 2, "color", "#666A73"], [1, "numb", "envelope", 3, "tooltip", "title"], [1, "color-icon", 3, "href"], [1, "icon-small-envelope", 2, "color", "#666A73"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_div_5_Template, 8, 5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Powered by Fractalia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.includePhone || ctx.partnerService.partner.includeWhatsapp || ctx.partnerService.partner.includeEmail || ctx.partnerService.partner.includeCallMeBack || ctx.partnerService.partner.includeC2C);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/terms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "TERMINOS_Y_CONDICIONES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/policyCookies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "POLITICA_COOKIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/policyPrivacy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "POLITICA_PRIVACIDAD"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  bottom: 0;\n  position: relative;\n}\n\n.foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmZvb3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG5cbi8vIGZvb3RlciB7XG4vLyAgIGJhY2tncm91bmQ6ICNFQ0YxRjg7XG4vLyAgIHotaW5kZXg6IDYwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIG1pbi1oZWlnaHQ6IGNhbGMoMjB2aCkgIWltcG9ydGFudDtcbi8vIH1cbiJdfQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_7__["CDKModalService"] }, { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "IRsC":
/*!*****************************************!*\
  !*** ./src/app/models/userChildProv.ts ***!
  \*****************************************/
/*! exports provided: UserChildProv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChildProv", function() { return UserChildProv; });
var UserChildProv = /** @class */ (function () {
    function UserChildProv() {
    }
    return UserChildProv;
}());



/***/ }),

/***/ "KZlS":
/*!****************************************************!*\
  !*** ./src/app/components/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: CoreLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLayoutModule", function() { return CoreLayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _call_call_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../call/call.module */ "Rjd1");
/* harmony import */ var _callmeback_callmeback_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../callmeback/callmeback.module */ "kHaP");
/* harmony import */ var _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cdk-modal/cdk-modal.module */ "xG9v");
/* harmony import */ var _fra_tabs_fra_tabs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fra-tabs/fra-tabs.module */ "8RUi");
/* harmony import */ var _infomodal_infomodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../infomodal/infomodal.module */ "9fQs");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tooltip/tooltip.module */ "0+yD");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "H3jT");
/* harmony import */ var _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-integrated/header-integrated.component */ "0Jdf");
/* harmony import */ var _header_integrated_notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header-integrated/notifications/own-notification/own-notification.component */ "TUpm");
/* harmony import */ var _header_integrated_notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header-integrated/notifications/support-notification/support-notification.component */ "lD+1");
/* harmony import */ var _header_integrated_notifications_user_notification_user_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header-integrated/notifications/user-notification/user-notification.component */ "UgUh");
/* harmony import */ var _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header-integrated/shared/notification.service */ "9L4e");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "gK8K");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout.component */ "9KET");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "KhAy");






















var CoreLayoutModule = /** @class */ (function () {
    function CoreLayoutModule() {
    }
    CoreLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreLayoutModule });
    CoreLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreLayoutModule_Factory(t) { return new (t || CoreLayoutModule)(); }, providers: [
            _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _infomodal_infomodal_module__WEBPACK_IMPORTED_MODULE_9__["InfoModalModule"],
                _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__["CDKModalModule"],
                _call_call_module__WEBPACK_IMPORTED_MODULE_5__["CallModule"],
                _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__["CDKModalModule"],
                _callmeback_callmeback_module__WEBPACK_IMPORTED_MODULE_6__["CallMeBackModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _fra_tabs_fra_tabs_module__WEBPACK_IMPORTED_MODULE_8__["FraTabsModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
            ]] });
    return CoreLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreLayoutModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
        _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_12__["HeaderIntegratedComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _header_integrated_notifications_user_notification_user_notification_component__WEBPACK_IMPORTED_MODULE_15__["UserNotificationComponent"],
        _header_integrated_notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_14__["SupportNotificationComponent"],
        _header_integrated_notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_13__["OwnNotificationComponent"],
        _layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _infomodal_infomodal_module__WEBPACK_IMPORTED_MODULE_9__["InfoModalModule"],
        _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__["CDKModalModule"],
        _call_call_module__WEBPACK_IMPORTED_MODULE_5__["CallModule"],
        _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__["CDKModalModule"],
        _callmeback_callmeback_module__WEBPACK_IMPORTED_MODULE_6__["CallMeBackModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _fra_tabs_fra_tabs_module__WEBPACK_IMPORTED_MODULE_8__["FraTabsModule"],
        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
        _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_12__["HeaderIntegratedComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _header_integrated_notifications_user_notification_user_notification_component__WEBPACK_IMPORTED_MODULE_15__["UserNotificationComponent"],
        _header_integrated_notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_14__["SupportNotificationComponent"],
        _header_integrated_notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_13__["OwnNotificationComponent"],
        _layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _infomodal_infomodal_module__WEBPACK_IMPORTED_MODULE_9__["InfoModalModule"],
                    _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__["CDKModalModule"],
                    _call_call_module__WEBPACK_IMPORTED_MODULE_5__["CallModule"],
                    _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_7__["CDKModalModule"],
                    _callmeback_callmeback_module__WEBPACK_IMPORTED_MODULE_6__["CallMeBackModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _fra_tabs_fra_tabs_module__WEBPACK_IMPORTED_MODULE_8__["FraTabsModule"],
                    _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                ],
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                    _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_12__["HeaderIntegratedComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _header_integrated_notifications_user_notification_user_notification_component__WEBPACK_IMPORTED_MODULE_15__["UserNotificationComponent"],
                    _header_integrated_notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_14__["SupportNotificationComponent"],
                    _header_integrated_notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_13__["OwnNotificationComponent"],
                    _layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"]
                ],
                providers: [
                    _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                    _header_integrated_header_integrated_component__WEBPACK_IMPORTED_MODULE_12__["HeaderIntegratedComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _header_integrated_notifications_user_notification_user_notification_component__WEBPACK_IMPORTED_MODULE_15__["UserNotificationComponent"],
                    _header_integrated_notifications_support_notification_support_notification_component__WEBPACK_IMPORTED_MODULE_14__["SupportNotificationComponent"],
                    _header_integrated_notifications_own_notification_own_notification_component__WEBPACK_IMPORTED_MODULE_13__["OwnNotificationComponent"],
                    _layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "KhAy":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var src_app_services_emit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emit.service */ "LVjK");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header-integrated/shared/notification.service */ "9L4e");
/* harmony import */ var src_app_modules_home_rgpd_service_shared_rgpd_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/home/rgpd-service/shared/rgpd.service */ "1VDo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../tooltip/tooltip.directive */ "OZ9l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");























var _c0 = ["sidebarContent"];
function SidebarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "HOME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "HOME"), " ");
} }
function SidebarComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "FAMILY_UNIT.MENU_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.staticContentUrl + "img/family-unit/unit_family_menu.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "FAMILY_UNIT.MENU_TITLE"), " ");
} }
function SidebarComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "CONFIGURATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "CONFIGURATION"), " ");
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", child_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r12.name, " ");
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r12.name, " ");
} }
var _c1 = function (a0) { return [a0]; };
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r19.goToRGPChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_span_2_Template, 2, 2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_span_3_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var child_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, child_r12.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r12.name.length >= 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r12.name.length < 40);
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", child_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r12.name, " ");
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r12.name, " ");
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_2_span_2_Template, 2, 2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_2_span_3_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var child_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, child_r12.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r12.name.length >= 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r12.name.length < 40);
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_1_Template, 4, 5, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_ng_container_2_Template, 4, 5, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var child_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r12.code === "RGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r12.code !== "RGP");
} }
var _c2 = function (a0) { return { "active": a0 }; };
var _c3 = function (a0) { return { "arrow-down": a0 }; };
var _c4 = function (a0) { return { "height": a0, "transition": "height .2s" }; };
function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ng_container_20_ng_container_2_ng_container_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.clickItemMenu(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_ng_container_11_Template, 3, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, _r10.isActive && !item_r6.showChildren));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c3, item_r6.showChildren));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c4, item_r6.showChildren ? 40 * item_r6.children.length + "px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6.children);
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ng_container_20_ng_container_2_ng_template_2_ng_container_2_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r34.handleLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r31.userService.currentUserValue.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.userService.menuPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "CERRAR_SESION"));
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
function SidebarComponent_ng_container_20_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_20_ng_container_2_ng_template_2_ng_container_2_Template, 8, 6, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ng_container_20_ng_container_2_ng_template_2_ng_template_3_Template, 3, 4, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, item_r6.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.route == "profile")("ngIfElse", _r32);
} }
function SidebarComponent_ng_container_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_container_20_ng_container_2_ng_container_1_Template, 12, 15, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_20_ng_container_2_ng_template_2_Template, 5, 6, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6 && item_r6.children)("ngIfElse", _r8);
} }
function SidebarComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_20_ng_container_2_Template, 4, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.menuList);
} }
var _c5 = function (a0) { return { "sidebar--show": a0 }; };
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(renderer, router, userService, suiteService, partnerService, sidebarService, notificationService, emitService, rgpdService) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.userService = userService;
        this.suiteService = suiteService;
        this.partnerService = partnerService;
        this.sidebarService = sidebarService;
        this.notificationService = notificationService;
        this.emitService = emitService;
        this.rgpdService = rgpdService;
        this.menuList = [];
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].STATIC_CONTENT;
        this.defaultPhoto = this.staticContentUrl + "img/profileDefaultMenu.png";
        this.validationProfile = false;
        this.showUnitFamily = false;
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        window.addEventListener("resize", function (e) {
            if (document.body.clientWidth >= 751) {
                document.getElementById('sidebar-toogle').classList.add("sidebar--show");
                _this.notificationService.setSidebarToogle(true);
            }
            if (document.body.clientWidth < 751) {
                document.getElementById('sidebar-toogle').classList.remove("sidebar--show");
                _this.notificationService.setSidebarToogle(false);
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarConfig();
        this.watchRefreshSidebar();
        this.emitService.rechargeSidebar.subscribe(function (bool) {
            _this.sidebarConfig();
        });
    };
    SidebarComponent.prototype.sidebarConfig = function (reload) {
        if (reload === void 0) { reload = false; }
        this.menuList = this.sidebarService.getMenu();
        if (this.currentUser.roleId === 4 || this.currentUser.roleId === 7 || this.currentUser.roleId === 3 || this.currentUser.roleId === 2) {
            this.showBasicUserItems = false;
        }
        this.showUnitFamily = this.suiteService.isUnitFamily;
        this.sidebarService.hasFamilyMenu = this.showUnitFamily;
        if (this.suiteService.suites && this.suiteService.suites.length) {
            this.userService.selSuiteId = this.suiteService.suites[0].id;
            this.userService.selSuiteName = this.suiteService.suites[0].name;
            this.showBasicUserItems = true;
        }
        if (this.userService && this.userService.currentUserValue && this.userService.currentUserValue.passwordChanged && this.showBasicUserItems && this.userService.currentUserValue.inJira) {
            this.validationProfile = true;
            this.sidebarService.hasHomeMenu = true;
            this.sidebarService.hasServicesMenu = this.menuList && this.menuList.length > 0;
        }
        if (this.partnerService.partner.loginType === 2 && this.userService && this.userService.currentUserValue && this.userService.currentUserValue.passwordChanged && this.showBasicUserItems && this.userService.currentUserValue.checkTermsAcceptDate) {
            this.validationProfile = true;
            this.sidebarService.hasHomeMenu = true;
            this.sidebarService.hasServicesMenu = this.menuList && this.menuList.length > 0;
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            if (val && val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (document.body.clientWidth < 751) {
                    var toogle = document.getElementById('sidebar-toogle');
                    if (toogle) {
                        toogle.classList.remove("sidebar--show");
                        _this.notificationService.setSidebarToogle(false);
                    }
                }
            }
        });
        this.renderer.listen('window', 'click', function (e) {
            if (document.body.clientWidth < 751) {
                if (e.target !== document.getElementById('button-sidebar') && !_this.sidebarContent.nativeElement.contains(e.target)) {
                    var toogle = document.getElementById('sidebar-toogle');
                    if (toogle) {
                        toogle.classList.remove("sidebar--show");
                        _this.notificationService.setSidebarToogle(false);
                    }
                }
            }
        });
    };
    SidebarComponent.prototype.clickItemMenu = function (menuItem) {
        if (this.menuList.length >= 2) {
            var menuOpen = this.menuList.find(function (x) { return x.showChildren == true; });
            var isSameMenuOrIsOpen = menuOpen ? menuItem.id === menuOpen.id : false;
            if (!isSameMenuOrIsOpen) {
                this.closeAnotherMenus();
            }
            this.toogleItemMenu(menuItem);
        }
        else {
            this.toogleItemMenu(menuItem);
        }
    };
    SidebarComponent.prototype.goToRGPChange = function () {
        this.rgpdService.emitReload(true);
    };
    SidebarComponent.prototype.toogleItemMenu = function (menuItem) {
        if (menuItem && menuItem.children) {
            menuItem.showChildren = !menuItem.showChildren;
        }
    };
    SidebarComponent.prototype.closeAnotherMenus = function () {
        this.menuList.forEach(function (x) { return x.showChildren = false; });
    };
    SidebarComponent.prototype.handleLogout = function () {
        this.sidebarService.handleLogout();
    };
    SidebarComponent.prototype.watchRefreshSidebar = function () {
        var _this = this;
        this.sidebarService.reloadSidebar$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (data) { return !!data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.sidebarConfig(true); }))
            .subscribe();
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_emit_service__WEBPACK_IMPORTED_MODULE_4__["EmitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_home_rgpd_service_shared_rgpd_service__WEBPACK_IMPORTED_MODULE_10__["RgpdService"])); };
    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarContent = _t.first);
        } }, inputs: { logo: "logo" }, decls: 21, vars: 19, consts: [["id", "sidebar-toogle", 1, "sidebar", 3, "ngClass"], [1, "sidebar-container"], [1, "header-sidebar"], [1, "icon-menu", "cursor", "mr-4"], ["alt", "homepage", 1, "light-logo", 3, "src"], [1, "ds-nav"], [1, "ds-ul-main-list"], ["sidebarContent", ""], ["routerLinkActive", "active", 1, "ds-main-li-profile"], ["href", "javascript:void(0)", "routerLink", "profile", 1, "nav-link", 3, "tooltip"], [1, "profile-imagen", 3, "alt", "src"], [1, "span-link"], [1, "icon-logout", 3, "tooltip", "click"], ["routerLink", "home", "id", "home-menu", "routerLinkActive", "active", "class", "ds-main-li-item", 4, "ngIf"], ["routerLink", "family-unit", "id", "family-unit-menu", "routerLinkActive", "active", "class", "ds-main-li-item", 4, "ngIf"], ["routerLink", "user-managment", "routerLinkActive", "active", "class", "ds-main-li-item", 4, "ngIf"], [4, "ngIf"], ["routerLink", "home", "id", "home-menu", "routerLinkActive", "active", 1, "ds-main-li-item"], ["href", "javascript:void(0)", 1, "nav-link", 3, "tooltip"], [1, "icon-home"], ["routerLink", "family-unit", "id", "family-unit-menu", "routerLinkActive", "active", 1, "ds-main-li-item"], ["alt", "", 3, "src"], ["routerLink", "user-managment", "routerLinkActive", "active", 1, "ds-main-li-item"], [1, "icon-users"], ["id", "menu-services"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["noChildren", ""], ["routerLinkActive", "", 1, "ds-main-li-item", "with-children", 3, "ngClass"], ["rla", "routerLinkActive"], ["href", "javascript:void(0)", 1, "nav-children", 3, "tooltip", "click"], [1, "underline"], [1, "d-flex", "align-items-center"], [1, "icon-bottom-arrow", 3, "ngClass"], [1, "children-ul-list", 3, "ngStyle"], ["routerLinkActive", "active", 1, "children-li-inside", 3, "routerLink", "click"], [3, "tooltip", 4, "ngIf"], [3, "tooltip"], ["routerLinkActive", "active", 1, "children-li-inside", 3, "routerLink"], ["routerLinkActive", "active", 1, "ds-main-li-item", 3, "routerLink"], ["noProfileMenu", ""], [1, "separate"], [1, "profile-imagen", 3, "src", "alt"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_span_click_15_listener() { return ctx.handleLogout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SidebarComponent_li_17_Template, 7, 6, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidebarComponent_li_18_Template, 8, 7, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidebarComponent_li_19_Template, 7, 6, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_ng_container_20_Template, 3, 1, "ng-container", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c5, ctx.notificationService.sidebarToogle));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "MY_PROFILE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.userService.currentUserValue.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userService.menuPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, "MY_PROFILE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "CERRAR_SESION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUnitFamily);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser && ctx.currentUser.isAdminUserId && ctx.currentUser.companyUser.maxLicense > 1 && ctx.validationProfile && !ctx.showUnitFamily);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationProfile);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".header-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 20px 10px 20px 24px;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n  --transform: translateX(-100%);\n  --transition: transform .8s;\n}\n\n@media only screen and (max-width: 767px) {\n  .sidebar[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 10;\n  }\n}\n\n.sidebar--show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: unset;\n  --transform: translateX(0);\n  --transition: transform .8s;\n}\n\n.sidebar--show-no-effect[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: unset;\n  --transform: translateX(0);\n}\n\n.sidebar-container[_ngcontent-%COMP%] {\n  width: 344px;\n  border: none;\n  background-color: white;\n  transform: var(--transform);\n  transition: var(--transition);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSxvQ0FBQTtJQUNBLFdBQUE7RUFIRjtBQUNGOztBQWlCQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFmRjs7QUFrQkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQWZGOztBQW1CQTtFQUNFLFlBQUE7RUFFQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBakJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5oZWFkZXItc2lkZWJhcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogIDIwcHggMTBweCAyMHB4IDI0cHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAwO1xuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcbiAgLS10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtLXRyYW5zaXRpb246IHRyYW5zZm9ybSAgLjhzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbn1cblxuXG4vLyAjYnV0dG9uLXNpZGViYXIge1xuLy8gICAmLnRvb2dsZS0tc2hvd3tcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG5cbi8vICAgLy8gJjpub3QoLnRvb2dsZS0tc2hvdykgI3NpZGViYXItb3Blbntcbi8vICAgLy8gICBkaXNwbGF5OiBub25lO1xuLy8gICAvLyB9XG4vLyB9XG5cbi5zaWRlYmFyLS1zaG93e1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogdW5zZXQ7XG4gIC0tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAtLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHM7XG59XG5cbi5zaWRlYmFyLS1zaG93LW5vLWVmZmVjdHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IHVuc2V0O1xuICAtLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuXG4uc2lkZWJhci1jb250YWluZXJ7XG4gIHdpZHRoOiAzNDRweDtcbiAgLy8gbWFyZ2luLXRvcDogNzdweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2Zvcm0pO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbiJdfQ== */"] });
    return SidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_6__["SuiteService"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__["PartnerService"] }, { type: src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }, { type: _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }, { type: src_app_services_emit_service__WEBPACK_IMPORTED_MODULE_4__["EmitService"] }, { type: src_app_modules_home_rgpd_service_shared_rgpd_service__WEBPACK_IMPORTED_MODULE_10__["RgpdService"] }]; }, { sidebarContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebarContent']
        }], logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LVjK":
/*!******************************************!*\
  !*** ./src/app/services/emit.service.ts ***!
  \******************************************/
/*! exports provided: EmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitService", function() { return EmitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var EmitService = /** @class */ (function () {
    function EmitService() {
        this.rechargeSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmitService.ɵfac = function EmitService_Factory(t) { return new (t || EmitService)(); };
    EmitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmitService, factory: EmitService.ɵfac, providedIn: 'root' });
    return EmitService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lv2G":
/*!***********************************************************!*\
  !*** ./src/app/components/fra-tabs/fra-tabs.component.ts ***!
  \***********************************************************/
/*! exports provided: FraTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraTabsComponent", function() { return FraTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fra-tab/fra-tab.component */ "vcuW");
/* harmony import */ var _shared_tab_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/tab-templates */ "v6WZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function FraTabsComponent_div_0_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);
} if (rf & 2) {
    var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", tab_r4.backgroundColor ? tab_r4.backgroundColor : "");
} }
var _c0 = function (a0) { return { active: a0 }; };
function FraTabsComponent_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FraTabsComponent_div_0_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var tab_r4 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.selectTab(tab_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FraTabsComponent_div_0_li_2_span_3_Template, 1, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, tab_r4.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tab_r4.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.showNotificationAsNoReaded);
} }
function FraTabsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FraTabsComponent_div_0_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onDeleteAllNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.DELETE_ALL"), " ");
} }
function FraTabsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FraTabsComponent_div_0_li_2_Template, 5, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FraTabsComponent_div_0_div_3_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showDeleteAllNotification);
} }
var _c1 = function (a0, a1) { return { categorySelected: a0, all: a1 }; };
function FraTabsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FraTabsComponent_div_1_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var tab_r12 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.selectTab(tab_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, tab_r12.active, i_r13 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r12.name);
} }
function FraTabsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FraTabsComponent_div_1_div_1_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tabs);
} }
var _c2 = ["*"];
var FraTabsComponent = /** @class */ (function () {
    function FraTabsComponent() {
        this.tabTemplate = _shared_tab_templates__WEBPACK_IMPORTED_MODULE_2__["FrabTabTemplate"].NotificationTemplate;
        this.onTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeleteAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @Input() reload: boolean;
        this.serviceTemplate = _shared_tab_templates__WEBPACK_IMPORTED_MODULE_2__["FrabTabTemplate"].ServiceTemplate;
        this.notificationTemplate = _shared_tab_templates__WEBPACK_IMPORTED_MODULE_2__["FrabTabTemplate"].NotificationTemplate;
        this.showDeleteAllNotification = false;
    }
    FraTabsComponent.prototype.ngAfterContentInit = function () {
        console.log('init fra tabs');
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    FraTabsComponent.prototype.selectTab = function (tab) {
        this.tabs.toArray().forEach(function (tab) { return (tab.active = false); });
        this.showDeleteAllNotification = tab.showDeleteAllButton;
        this.onTabChange.emit(tab);
        tab.active = true;
    };
    FraTabsComponent.prototype.resetTabs = function (index) {
        var tabs = this.tabs.toArray();
        tabs.forEach(function (tab) { return (tab.active = false); });
        /* tabs[0].active = true; */
        tabs[index].active = true;
        // const activeTabs = this.tabs.filter((tab) => tab.active);
        // if (activeTabs.length === 0) {
        //   this.selectTab(this.tabs.first);
        // }
    };
    FraTabsComponent.prototype.onDeleteAllNotification = function () {
        var activeTab = this.tabs.find(function (tab) { return tab.active; });
        if (!activeTab)
            activeTab = this.tabs.first;
        this.onDeleteAll.emit(activeTab);
    };
    FraTabsComponent.ɵfac = function FraTabsComponent_Factory(t) { return new (t || FraTabsComponent)(); };
    FraTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FraTabsComponent, selectors: [["app-fra-tabs"]], contentQueries: function FraTabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_1__["FraTabComponent"], false);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
        } }, inputs: { tabTemplate: "tabTemplate" }, outputs: { onTabChange: "onTabChange", onDeleteAll: "onDeleteAll" }, ngContentSelectors: _c2, decls: 3, vars: 2, consts: [["class", "top-tabs__container", 4, "ngIf"], ["class", "nav-category", 4, "ngIf"], [1, "top-tabs__container"], [1, "top-tabs__nav"], ["class", "top-tabs__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "delete-all-notification roboto ds-t-uppercase", 3, "click", 4, "ngIf"], [1, "top-tabs__item", 3, "ngClass", "click"], ["class", "noti-active", 3, "background-color", 4, "ngIf"], [1, "line"], [1, "noti-active"], [1, "delete-all-notification", "roboto", "ds-t-uppercase", 3, "click"], [1, "nav-category"], ["class", "categorybtns", 4, "ngFor", "ngForOf"], [1, "categorybtns"], [1, "category", 3, "ngClass", "click"], [1, "categoryname"]], template: function FraTabsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FraTabsComponent_div_0_Template, 4, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FraTabsComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabTemplate == ctx.notificationTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabTemplate == ctx.serviceTemplate);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".top-tabs__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.top-tabs__nav[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  border-bottom: 2px solid #ECF1F8;\n}\n.top-tabs__item[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  font-family: \"RobotoRegular\";\n  font-size: 12px;\n  font-weight: 400;\n  color: #666A73;\n  cursor: pointer;\n}\n.top-tabs__item.active[_ngcontent-%COMP%] {\n  font-family: \"RobotoBold\";\n  color: #34383F;\n  border-bottom: 3px solid #36B3ED;\n}\n.delete-all-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 5%;\n}\n@media (max-width: 767px) {\n  .delete-all-notification[_ngcontent-%COMP%] {\n    position: unset;\n    margin-top: 1rem;\n  }\n}\n.noti-active[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 5px;\n  height: 6px;\n  width: 6px !important;\n  background: #EB1919;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmEtdGFicy9mcmEtdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUlDO0VBQ0Msa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRkY7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBRE47QUFPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFKRjtBQU9BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcmEtdGFicy9mcmEtdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtdGFicyB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAmX19uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VDRjFGODtcbiAgfVxuXG4gJl9faXRlbSB7XG4gIHBhZGRpbmc6IDE1cHggMTJweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NkE3MztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XG4gICAgICBjb2xvcjogIzM0MzgzRjtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzZCM0VEO1xuICAgIH1cbiB9XG5cblxufVxuLmRlbGV0ZS1hbGwtbm90aWZpY2F0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgcmlnaHQ6IDUlO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcbiAgLmRlbGV0ZS1hbGwtbm90aWZpY2F0aW9ue1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICBtYXJnaW4tdG9wOjFyZW07XG4gIH1cbn1cblxuLm5vdGktYWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDZweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjRUIxOTE5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"] });
    return FraTabsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FraTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fra-tabs',
                templateUrl: './fra-tabs.component.html',
                styleUrls: ['./fra-tabs.component.scss']
            }]
    }], null, { tabTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_fra_tab_fra_tab_component__WEBPACK_IMPORTED_MODULE_1__["FraTabComponent"]]
        }], onTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDeleteAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "NKj7":
/*!********************************************************************!*\
  !*** ./src/app/dynamic-render/dynamic-render-component.service.ts ***!
  \********************************************************************/
/*! exports provided: DynamicRenderComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponentService", function() { return DynamicRenderComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DynamicRenderComponentService = /** @class */ (function () {
    function DynamicRenderComponentService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DynamicRenderComponentService.prototype.loadComponent = function (container, component, data) {
        var _this = this;
        setTimeout(function () {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(component);
            if (container) {
                var viewContainerRef = container.viewContainerRef;
                viewContainerRef.clear();
                var componentRef = viewContainerRef.createComponent(componentFactory);
                componentRef.instance.data = data;
            }
        }, 100);
    };
    DynamicRenderComponentService.prototype.cleanContainer = function (container) {
        if (container) {
            var viewContainerRef = container.viewContainerRef;
            viewContainerRef.clear();
        }
    };
    DynamicRenderComponentService.ɵfac = function DynamicRenderComponentService_Factory(t) { return new (t || DynamicRenderComponentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
    DynamicRenderComponentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicRenderComponentService, factory: DynamicRenderComponentService.ɵfac });
    return DynamicRenderComponentService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicRenderComponentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "OZ9l":
/*!*********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.directive.ts ***!
  \*********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/string-utils */ "372O");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "rdml");
/* harmony import */ var _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.enums */ "bVYc");





var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(elementRef, appRef, componentFactoryResolver, injector) {
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.tooltip = '';
        this.position = _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipPosition"].DEFAULT;
        this.theme = _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipTheme"].DEFAULT;
        this.showDelay = 0;
        this.hideDelay = 0;
        this.componentRef = null;
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].isMobileOrTabletCheck();
        if (!isMobile) {
            this.initializeTooltip();
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].isMobileOrTabletCheck();
        if (!isMobile) {
            this.setHideTooltipTimeout();
        }
    };
    TooltipDirective.prototype.onMouseMove = function ($event) {
        var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].isMobileOrTabletCheck();
        if (!isMobile) {
            if (this.componentRef !== null && this.position === _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipPosition"].DYNAMIC) {
                this.componentRef.instance.left = $event.clientX;
                this.componentRef.instance.top = $event.clientY;
                this.componentRef.instance.tooltip = this.tooltip;
            }
        }
    };
    TooltipDirective.prototype.onTouchStart = function ($event) {
        var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].isMobileOrTabletCheck();
        if (!isMobile) {
            $event.preventDefault();
            window.clearTimeout(this.touchTimeout);
            this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
        }
    };
    TooltipDirective.prototype.onTouchEnd = function () {
        var isMobile = src_app_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].isMobileOrTabletCheck();
        if (!isMobile) {
            window.clearTimeout(this.touchTimeout);
            this.setHideTooltipTimeout();
        }
    };
    TooltipDirective.prototype.initializeTooltip = function () {
        if (this.componentRef === null) {
            window.clearInterval(this.hideDelay);
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"]);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            var tooltipDOMElement = this.componentRef.hostView.rootNodes[0];
            this.setTooltipComponentProperties();
            document.body.appendChild(tooltipDOMElement);
            this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
        }
    };
    TooltipDirective.prototype.setTooltipComponentProperties = function () {
        if (this.componentRef !== null) {
            this.componentRef.instance.tooltip = this.tooltip;
            this.componentRef.instance.position = this.position;
            this.componentRef.instance.theme = this.theme;
            var _a = this.elementRef.nativeElement.getBoundingClientRect(), left = _a.left, right = _a.right, top_1 = _a.top, bottom = _a.bottom;
            switch (this.position) {
                case _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipPosition"].BELOW: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(bottom);
                    break;
                }
                case _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipPosition"].ABOVE: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(top_1) - 7;
                    break;
                }
                case _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipPosition"].RIGHT: {
                    this.componentRef.instance.left = Math.round(right);
                    this.componentRef.instance.top = Math.round(top_1 + (bottom - top_1) / 2);
                    break;
                }
                case _tooltip_enums__WEBPACK_IMPORTED_MODULE_3__["TooltipPosition"].LEFT: {
                    this.componentRef.instance.left = Math.round(left);
                    this.componentRef.instance.top = Math.round(top_1 + (bottom - top_1) / 2);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    };
    TooltipDirective.prototype.showTooltip = function () {
        if (this.componentRef !== null) {
            this.componentRef.instance.visible = true;
        }
    };
    TooltipDirective.prototype.setHideTooltipTimeout = function () {
        this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    TooltipDirective.prototype.destroy = function () {
        if (this.componentRef !== null) {
            window.clearInterval(this.showTimeout);
            window.clearInterval(this.hideDelay);
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousemove", function TooltipDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); })("touchstart", function TooltipDirective_touchstart_HostBindingHandler($event) { return ctx.onTouchStart($event); })("touchend", function TooltipDirective_touchend_HostBindingHandler() { return ctx.onTouchEnd(); });
        } }, inputs: { tooltip: "tooltip", position: "position", theme: "theme", showDelay: "showDelay", hideDelay: "hideDelay" } });
    return TooltipDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tooltip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }], onTouchStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
        }], onTouchEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchend']
        }] }); })();


/***/ }),

/***/ "P97S":
/*!******************************************************!*\
  !*** ./src/app/guards/is-enterprise-layout.guard.ts ***!
  \******************************************************/
/*! exports provided: IsEnterpriseLayoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEnterpriseLayoutGuard", function() { return IsEnterpriseLayoutGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_suite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/suite.service */ "Zknh");






var IsEnterpriseLayoutGuard = /** @class */ (function () {
    function IsEnterpriseLayoutGuard(router, suiteService) {
        this.router = router;
        this.suiteService = suiteService;
    }
    IsEnterpriseLayoutGuard.prototype.canActivate = function () {
        if (!this.suiteService.isUnitFamily) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    IsEnterpriseLayoutGuard.ɵfac = function IsEnterpriseLayoutGuard_Factory(t) { return new (t || IsEnterpriseLayoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_suite_service__WEBPACK_IMPORTED_MODULE_2__["SuiteService"])); };
    IsEnterpriseLayoutGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsEnterpriseLayoutGuard, factory: IsEnterpriseLayoutGuard.ɵfac, providedIn: 'root' });
    return IsEnterpriseLayoutGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsEnterpriseLayoutGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_suite_service__WEBPACK_IMPORTED_MODULE_2__["SuiteService"] }]; }, null); })();


/***/ }),

/***/ "Rjd1":
/*!************************************************!*\
  !*** ./src/app/components/call/call.module.ts ***!
  \************************************************/
/*! exports provided: CallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallModule", function() { return CallModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _call_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call.component */ "5lIf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nz-spinner/nz-spinner.module */ "gT/A");








var CallModule = /** @class */ (function () {
    function CallModule() {
    }
    CallModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallModule });
    CallModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallModule_Factory(t) { return new (t || CallModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
            ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
    return CallModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallModule, { declarations: [_call_component__WEBPACK_IMPORTED_MODULE_4__["CallComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _call_component__WEBPACK_IMPORTED_MODULE_4__["CallComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                ],
                declarations: [
                    _call_component__WEBPACK_IMPORTED_MODULE_4__["CallComponent"]
                ],
                providers: [],
                exports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _call_component__WEBPACK_IMPORTED_MODULE_4__["CallComponent"]
                ],
                entryComponents: [
                    _call_component__WEBPACK_IMPORTED_MODULE_4__["CallComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "SVzj":
/*!*******************************!*\
  !*** ./src/app/models/key.ts ***!
  \*******************************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
var Key = /** @class */ (function () {
    function Key() {
    }
    return Key;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/partner.service */ "7Hzr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _models_domainFlows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/domainFlows */ "bcgG");
/* harmony import */ var _services_app_installer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/app-installer.service */ "oGhC");
/* harmony import */ var _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/messages/messages.component */ "tUgU");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nz-spinner/nz-spinner */ "b+Yv");




















var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, document, renderer, router, sanitizer, partnerService, updates, titleService, metaService, _elementRef, userService, route, appInstallerService) {
        var _this = this;
        this.platformId = platformId;
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.sanitizer = sanitizer;
        this.partnerService = partnerService;
        this.updates = updates;
        this.titleService = titleService;
        this.metaService = metaService;
        this._elementRef = _elementRef;
        this.userService = userService;
        this.route = route;
        this.appInstallerService = appInstallerService;
        this.staticContentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STATIC_CONTENT;
        var navEndEvents$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }));
        navEndEvents$.subscribe(function (event) {
            _this.onGoogleAnalytics(_this.googleAnyliticsId, event.urlAfterRedirects);
            if (_this.partnerService.partner.subdomain == 'phoness') {
                console.log('Fractalia-Suite', 'HOTJAR CARGADO!!');
                _this.onHotJar();
            }
            else {
                console.log('Fractalia-Suite', 'HOTJAR NO CARGADO!!');
            }
        });
        updates.available.subscribe(function (event) {
            console.log('current version is', event.current);
            console.log('available version is', event.available);
        });
        updates.activated.subscribe(function (event) {
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
        updates.available.subscribe(function (event) {
            updates.activateUpdate().then(function () {
                document.location.reload();
                console.log("The app is updating right now");
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this._elementRef.nativeElement.removeAttribute("ng-version");
        this.partner = this.partnerService.partner;
        if (this.partner && this.partner.nextFlow && this.partner.nextFlow == _models_domainFlows__WEBPACK_IMPORTED_MODULE_9__["DomainFlow"].Normal) {
            this.googleAnyliticsId = this.partnerService.partner.googleAnyliticsId;
            var title = this.partnerService.partner.seoTitle;
            var description = this.partnerService.partner.seoDescription;
            var imageSocialMedia = this.partnerService.partner.seoImage;
            var url = this.partnerService.partner.partnerURL;
            this.titleService.setTitle(title);
            this.metaService.updateTag({ name: "description", content: title }, "name='description'");
            this.metaService.updateTag({ property: "og:title", content: title }, "property='og:title'");
            this.metaService.updateTag({ property: "og:url", content: url }, "property='og:url'");
            this.metaService.updateTag({ property: "og:description", content: description }, "property='og:description'");
            this.metaService.updateTag({ property: "og:image", content: imageSocialMedia }, "property='og:image'");
            this.metaService.updateTag({ name: "twitter:title", content: title }, "name='twitter:title'");
            this.metaService.updateTag({ name: "twitter:url", content: url }, "name='twitter:url'");
            this.metaService.updateTag({ name: "twitter:description", content: description }, "name='twitter:description'");
            this.metaService.updateTag({ name: "twitter:image", content: imageSocialMedia }, "name='twitter:image'");
            var params = new URLSearchParams(window.location.search);
            if (params.has("tokensso")) {
                this.userService.tokenSSO = params.get("tokensso");
                this.userService.sendEmail = params.get("em");
            }
            else {
                if (localStorage.getItem("activationToken")) {
                    this.userService.activationToken = localStorage.getItem("activationToken");
                }
            }
        }
    };
    AppComponent.prototype.onGoogleAnalytics = function (gaWebSiteTagId, pagePath) {
        var gaScript1 = document.createElement('script');
        gaScript1.setAttribute('async', 'true');
        gaScript1.setAttribute('src', "https://www.googletagmanager.com/gtag/js?id=" + gaWebSiteTagId);
        var gaScript2 = document.createElement('script');
        gaScript2.innerText = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '" + gaWebSiteTagId + "', { 'page_path': '" + pagePath + "' });gtag('config', '" + gaWebSiteTagId + "', { 'cookie_flags': 'SameSite=None;HttpOnly;Secure' });";
        document.documentElement.firstChild.appendChild(gaScript1);
        document.documentElement.firstChild.appendChild(gaScript2);
    };
    AppComponent.prototype.onHotJar = function () {
        var gaScript1 = document.createElement('script');
        gaScript1.innerText = "(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3406822,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');";
        document.documentElement.firstChild.appendChild(gaScript1);
    };
    AppComponent.prototype.onActivate = function (event) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.router.events.subscribe(function (event) {
                window.scroll(0, 0);
            });
        }
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.checkOSOrBrowser("isAndroid");
        // console.log('display-mode: standalone: '+window.matchMedia("(display-mode: standalone)").matches + this.appInstallerService.isAndroid())
    };
    AppComponent.prototype.checkOSOrBrowser = function (osOrBrowser) {
        this.GUSTAVO = 'display-mode: standalone: ' + window.matchMedia("(display-mode: standalone)").matches + ' ' + osOrBrowser + ' ' + this.appInstallerService[osOrBrowser]();
        return this.appInstallerService[osOrBrowser]();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_installer_service__WEBPACK_IMPORTED_MODULE_10__["AppInstallerService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[3, "activate"], [3, "hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_0_listener($event) { return ctx.onActivate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-messages");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-spinner", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.GUSTAVO);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_12__["NzSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _services_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["SwUpdate"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_app_installer_service__WEBPACK_IMPORTED_MODULE_10__["AppInstallerService"] }]; }, null); })();


/***/ }),

/***/ "TQtI":
/*!**********************************************!*\
  !*** ./src/app/validators/user.validator.ts ***!
  \**********************************************/
/*! exports provided: UserValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserValidator", function() { return UserValidator; });
var UserValidator = /** @class */ (function () {
    function UserValidator() {
    }
    UserValidator.validEmail = function (email) {
        return UserValidator.EMAIL_PATTERN.test(String(email).toLowerCase()) ? ({ validEmail: true }) : null;
    };
    UserValidator.validPhone = function (phone) {
        var strPhone = typeof phone == "string" ? phone : phone.value;
        if (strPhone == null || strPhone.length == 0) {
            return null;
        }
        if (strPhone.match(/^[+]*[0-9]*$/g) != null) {
            return ({ validPhone: true });
        }
        return null;
    };
    UserValidator.validUrl = function (url) {
        var valid = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(url);
        return valid ? ({ validEmail: true }) : null;
    };
    UserValidator.NIFValidation = function (license) {
        var letters = "TRWAGMYFPDXBNJZSQVHLCKET";
        var lastCharacter = license[license.length - 1].toString().toUpperCase();
        var numericCharacters = license.substring(0, license.length - 1);
        var indice = +numericCharacters % 23;
        if (!isNaN(indice))
            if (letters[indice].toString() == lastCharacter && numericCharacters.length == 8)
                return null;
        return ({ validNIF: true });
    };
    UserValidator.NIEValidation = function (license) {
        var letters = "TRWAGMYFPDXBNJZSQVHLCKET";
        var lastCharacter = license[license.length - 1].toString().toUpperCase();
        var firstCharacter = license[0].toString().toUpperCase();
        var numericCharacters = license.substring(0, license.length - 1);
        switch (firstCharacter) {
            case "Z":
                numericCharacters = numericCharacters.replace("Z", "2");
                break;
            case "Y":
                numericCharacters = numericCharacters.replace("Y", "1");
                break;
            case "X":
                numericCharacters = numericCharacters.replace("X", "0");
                break;
            default: return ({ validNIE: true });
        }
        var indice = +numericCharacters % 23;
        if (letters[indice].toString() == lastCharacter && numericCharacters.length == 8)
            return null;
        return ({ validNIF: true });
    };
    UserValidator.EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return UserValidator;
}());



/***/ }),

/***/ "TUpm":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/layout/header-integrated/notifications/own-notification/own-notification.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: OwnNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnNotificationComponent", function() { return OwnNotificationComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function OwnNotificationComponent_ng_container_1_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.TODAY"), "");
} }
function OwnNotificationComponent_ng_container_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.YESTERDAY"), "");
} }
function OwnNotificationComponent_ng_container_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dateNotifications_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dateNotifications_r4.notificationDate, "");
} }
function OwnNotificationComponent_ng_container_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var notification_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", notification_r10.serviceIcon, " ds-service-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r10.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 7, (notification_r10.notificationDate.toString() + "Z").toLocaleString(), "HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", notification_r10.readed ? "ds-bg-background" : "ds-bg-secondary-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notification_r10.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function OwnNotificationComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OwnNotificationComponent_ng_container_1_div_1_span_2_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OwnNotificationComponent_ng_container_1_div_1_span_3_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OwnNotificationComponent_ng_container_1_div_1_span_4_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OwnNotificationComponent_ng_container_1_div_1_div_6_Template, 12, 10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dateNotifications_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", dateNotifications_r4.notificationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r3.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r3.yesterdayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", dateNotifications_r4.notifications);
} }
function OwnNotificationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OwnNotificationComponent_ng_container_1_div_1_Template, 7, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sortNotifications);
} }
function OwnNotificationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "COMP_USER.SUPPORT_NOTIFICATION.NO_NOTIFICATIONS_YET"));
} }
var OwnNotificationComponent = /** @class */ (function () {
    function OwnNotificationComponent(datePipe) {
        this.datePipe = datePipe;
        this.notifications = [];
        this.isloading = false;
        this.sortNotifications = [];
    }
    OwnNotificationComponent.prototype.ngOnInit = function () {
        console.log('init own');
        this.currentDate = this.getCurrentDate();
        this.yesterdayDate = this.getYesterday();
    };
    OwnNotificationComponent.prototype.ngOnChanges = function (changes) {
        this.sortNotifications = changes.notifications.currentValue.sort(function (a, b) {
            var dateA = new Date(a.notificationDate.split("/").reverse().join("/"));
            var dateB = new Date(b.notificationDate.split("/").reverse().join("/"));
            return dateB - dateA;
        });
    };
    OwnNotificationComponent.prototype.getCurrentDate = function () {
        var date = new Date();
        var formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
        return formattedDate;
    };
    OwnNotificationComponent.prototype.getYesterday = function () {
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        var formattedDate = this.datePipe.transform(yesterday, 'dd/MM/yyyy');
        return formattedDate;
    };
    OwnNotificationComponent.ɵfac = function OwnNotificationComponent_Factory(t) { return new (t || OwnNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"])); };
    OwnNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwnNotificationComponent, selectors: [["app-own-notification"]], inputs: { notifications: "notifications" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "notif-container"], [4, "ngIf", "ngIfElse"], ["dontHaveNotifications", ""], ["class", "mb-4", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "mb-4", 3, "ngSwitch"], [1, "d-flex", "justify-content-center", "align-items-end", "r-regular"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "hr-color"], ["class", "d-flex align-items-center mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-4"], [1, "section--icon", "flex-column", "alerta"], [1, "alerta-icon"], [1, "ds-r-regular", "ds-c-secondary", "fs-12", "px-2", 2, "white-space", "break-spaces"], [1, "section--text", "w-100"], ["id", "hora", 1, "ml-2", "ds-r-regular", "ds-c-secondary"], [1, "background-alert", 3, "ngClass"], [1, "ds-c-black", "mb-0", 2, "word-wrap", "break-word", 3, "innerHTML"], [1, "no-alerta"], [1, "none-notification", "icon-bell", "mb-2", "ds-c-secondary-disabled"], [1, "ds-r-regular", "ds-c-secondary", "fs-16", "pt-2"]], template: function OwnNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OwnNotificationComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OwnNotificationComponent_ng_template_2_Template, 5, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortNotifications.length > 0)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], styles: [".icon-bell[_ngcontent-%COMP%] {\n  font-size: 64px !important;\n  color: #BCC4D4 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWludGVncmF0ZWQvbm90aWZpY2F0aW9ucy9vd24tbm90aWZpY2F0aW9uL293bi1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXItaW50ZWdyYXRlZC9ub3RpZmljYXRpb25zL293bi1ub3RpZmljYXRpb24vb3duLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJlbGwge1xuICBmb250LXNpemU6IDY0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNCQ0M0RDQgIWltcG9ydGFudDtcbn0iXX0= */"] });
    return OwnNotificationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwnNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-own-notification',
                templateUrl: './own-notification.component.html',
                styleUrls: ['./own-notification.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }]; }, { notifications: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        var currentUser = this.userService.currentUserValue;
        if (currentUser &&
            Object.keys(currentUser).length > 1) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
    return AuthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "UdKV":
/*!****************************************************************!*\
  !*** ./src/app/components/cdk-modal/services/cdk-modal-ref.ts ***!
  \****************************************************************/
/*! exports provided: CDKModalRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDKModalRef", function() { return CDKModalRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

var CDKModalRef = /** @class */ (function () {
    function CDKModalRef(overlayRef, component, config) {
        this.overlayRef = overlayRef;
        this.component = component;
        this.config = config;
        this.afterClosed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    CDKModalRef.prototype.close = function (config) {
        var modalOpens = document.querySelectorAll('.cdk-global-overlay-wrapper');
        if (modalOpens.length <= 1) {
            var body = document.getElementById("main-body");
            body.classList.remove('cdk-modal-open');
        }
        this.overlayRef.dispose();
        this.afterClosed$.next(config);
        this.afterClosed$.complete();
    };
    return CDKModalRef;
}());



/***/ }),

/***/ "UgUh":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/layout/header-integrated/notifications/user-notification/user-notification.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UserNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationComponent", function() { return UserNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function UserNotificationComponent_ng_container_1_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.TODAY"), "");
} }
function UserNotificationComponent_ng_container_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.YESTERDAY"), "");
} }
function UserNotificationComponent_ng_container_1_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dateNotifications_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, dateNotifications_r4.notificationDate, "dd/MM/yyyy"), "");
} }
function UserNotificationComponent_ng_container_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var notification_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r10.serviceIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 11, (notification_r10.notificationDate.toString() + "Z").toLocaleString(), "HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", notification_r10.readed ? "ds-bg-background" : "ds-bg-secondary-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r10.serviceIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", notification_r10.serviceName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notification_r10.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UserNotificationComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserNotificationComponent_ng_container_1_div_1_span_2_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserNotificationComponent_ng_container_1_div_1_span_4_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserNotificationComponent_ng_container_1_div_1_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserNotificationComponent_ng_container_1_div_1_div_8_Template, 15, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dateNotifications_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", dateNotifications_r4.notificationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r3.currentDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, ctx_r3.yesterdayDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", dateNotifications_r4.notifications);
} }
function UserNotificationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserNotificationComponent_ng_container_1_div_1_Template, 9, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
} }
function UserNotificationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "COMP_USER.SUPPORT_NOTIFICATION.NO_NOTIFICATIONS_YET"));
} }
var UserNotificationComponent = /** @class */ (function () {
    function UserNotificationComponent() {
        this.notifications = [];
    }
    UserNotificationComponent.prototype.ngOnInit = function () {
        console.log('init user');
    };
    UserNotificationComponent.prototype.ngOnChanges = function () {
    };
    UserNotificationComponent.ɵfac = function UserNotificationComponent_Factory(t) { return new (t || UserNotificationComponent)(); };
    UserNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserNotificationComponent, selectors: [["app-user-notification"]], inputs: { notifications: "notifications" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "notif-container"], [4, "ngIf", "ngIfElse"], ["dontHaveNotifications", ""], ["class", "mb-4", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "mb-4", 3, "ngSwitch"], [1, "d-flex", "justify-content-center", "align-items-end", "r-regular"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "hr-color"], ["class", "d-flex align-items-center mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-4"], [1, "section--icon", "flex-column", "alerta"], [1, "alerta-icon"], [1, "section--text"], ["id", "hora", 1, "ml-2"], [1, "background-alert", 3, "ngClass"], [1, "body-font", "d-flex", "text-align-justify"], [3, "innerHtml"], [2, "word-wrap", "break-word", 3, "innerHTML"], [1, "no-alerta"], [1, "none-notification", "icon-bell", "mb-2"], [1, "regular"]], template: function UserNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserNotificationComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserNotificationComponent_ng_template_2_Template, 5, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1pbnRlZ3JhdGVkL25vdGlmaWNhdGlvbnMvdXNlci1ub3RpZmljYXRpb24vdXNlci1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return UserNotificationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-notification',
                templateUrl: './user-notification.component.html',
                styleUrls: ['./user-notification.component.scss']
            }]
    }], function () { return []; }, { notifications: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Vf+f":
/*!********************************************!*\
  !*** ./src/app/guards/activation.guard.ts ***!
  \********************************************/
/*! exports provided: ActivationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationGuard", function() { return ActivationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "qfBg");






var ActivationGuard = /** @class */ (function () {
    function ActivationGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ActivationGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.userService.currentUserValue;
        var activationToken = localStorage.getItem("activationToken");
        if (activationToken) {
            this.userService.activationToken = activationToken;
            this.router.navigate(['activation']);
            return false;
        }
        if (state.url != "/profile" && currentUser.role == "BAS" && (!currentUser.checkTermsAcceptDate || !currentUser.inJira || !currentUser.passwordChanged)) {
            this.router.navigate(['/profile']);
            return false;
        }
        else {
            return true;
        }
    };
    ActivationGuard.ɵfac = function ActivationGuard_Factory(t) { return new (t || ActivationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    ActivationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActivationGuard, factory: ActivationGuard.ɵfac, providedIn: 'root' });
    return ActivationGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "WDzv":
/*!********************************************************************!*\
  !*** ./src/app/components/cdk-modal/services/cdk-modal.service.ts ***!
  \********************************************************************/
/*! exports provided: CDKModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDKModalService", function() { return CDKModalService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cdk_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cdk-modal.component */ "uqof");
/* harmony import */ var _cdk_modal_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cdk-modal-ref */ "UdKV");
/* harmony import */ var _cdk_modal_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cdk-modal-tokens */ "qM9Q");








var CDKModalService = /** @class */ (function () {
    function CDKModalService(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    CDKModalService.prototype.open = function (component, config) {
        var positionStrategy = this.overlay
            .position()
            .global();
        switch (config === null || config === void 0 ? void 0 : config.position) {
            case 'horizontal-center':
                positionStrategy
                    .centerHorizontally();
                break;
            default:
                positionStrategy
                    .centerHorizontally()
                    .centerVertically();
                break;
        }
        var finalClass = [];
        if (config.modalClass && typeof (config.modalClass) === 'string') {
            finalClass = [config.modalClass];
        }
        else if (config.modalClass && Array.isArray(config.modalClass)) {
            finalClass = config.modalClass;
        }
        var overlayRef = this.overlay.create({
            positionStrategy: positionStrategy,
            hasBackdrop: true,
            panelClass: ['ds-modal-container'].concat(finalClass),
            minWidth: config === null || config === void 0 ? void 0 : config.minWidth,
        });
        var body = document.getElementById("main-body");
        body.classList.add('cdk-modal-open');
        var modalRef = new _cdk_modal_ref__WEBPACK_IMPORTED_MODULE_4__["CDKModalRef"](overlayRef, component, config);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: this.injector,
            providers: [
                { provide: _cdk_modal_ref__WEBPACK_IMPORTED_MODULE_4__["CDKModalRef"], useValue: modalRef },
                { provide: _cdk_modal_tokens__WEBPACK_IMPORTED_MODULE_5__["MODAL_DATA"], useValue: config === null || config === void 0 ? void 0 : config.data },
            ],
        });
        var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_cdk_modal_component__WEBPACK_IMPORTED_MODULE_3__["CDKModalComponent"], null, injector);
        overlayRef.attach(portal);
        return modalRef;
    };
    CDKModalService.ɵfac = function CDKModalService_Factory(t) { return new (t || CDKModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    CDKModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CDKModalService, factory: CDKModalService.ɵfac, providedIn: 'root' });
    return CDKModalService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CDKModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }]; }, null); })();


/***/ }),

/***/ "Xpb8":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");






var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function (partnerId) {
        if (partnerId === void 0) { partnerId = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                if (partnerId > 0)
                    params = params.set('partnerId', partnerId.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/country", { params: params }).toPromise()];
            });
        });
    };
    CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });
    return CountryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        console.log(type);
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
    SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
    return SafePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "Z9tt":
/*!************************************!*\
  !*** ./src/app/models/userProv.ts ***!
  \************************************/
/*! exports provided: UserProv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProv", function() { return UserProv; });
var UserProv = /** @class */ (function () {
    function UserProv() {
    }
    return UserProv;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: partnerInitializer, HttpLoaderFactory, menuOptionsProviderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partnerInitializer", function() { return partnerInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuOptionsProviderFactory", function() { return menuOptionsProviderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/messages/messages.component */ "tUgU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "hzlp");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "t2gh");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _services_partner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/partner.service */ "7Hzr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var _dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dynamic-render/dynamic-render-component.module */ "Gvde");
/* harmony import */ var _components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _services_app_installer_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/app-installer.service */ "oGhC");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/chat.service */ "sjK5");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/country.service */ "Xpb8");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/language.service */ "kyOO");
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/local.service */ "s3jE");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/message.service */ "tZre");
/* harmony import */ var _services_singleSignon_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/singleSignon.service */ "CTQb");
/* harmony import */ var _services_suite_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/suite.service */ "Zknh");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/layout/layout.module */ "KZlS");
/* harmony import */ var _modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-cookie-service */ "ReVU");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








































Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_16___default.a);
var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_20__;
var icons = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
function partnerInitializer(appInitService) {
    return function () {
        return appInitService.Init();
    };
}
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].translatePath);
    //return new TranslateHttpLoader(http, './assets/i18n/');
}
function menuOptionsProviderFactory(provider) {
    return function () { return provider.callMultipleAPIToSidebarMenu(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__["NgbActiveModal"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__["CookieService"],
            _modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_34__["SidebarService"],
            _services_partner_service__WEBPACK_IMPORTED_MODULE_9__["PartnerService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_27__["LanguageService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_26__["CountryService"],
            _services_app_installer_service__WEBPACK_IMPORTED_MODULE_24__["AppInstallerService"],
            _services_singleSignon_service__WEBPACK_IMPORTED_MODULE_30__["SingleSignonService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"],
            _services_local_service__WEBPACK_IMPORTED_MODULE_28__["LocalService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_32__["UserService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"],
            _services_suite_service__WEBPACK_IMPORTED_MODULE_31__["SuiteService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_25__["ChatService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: partnerInitializer, deps: [_services_partner_service__WEBPACK_IMPORTED_MODULE_9__["PartnerService"]], multi: true },
            { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RECAPTCHA_V3_SITE_KEY"], useValue: "6LcQKUsaAAAAAEm58xRN6A2dIHZnzDcd3Lmv_K_m" },
            { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NZ_I18N"], useValue: _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_16___default.a }, { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NZ_ICONS"], useValue: icons },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: menuOptionsProviderFactory,
                deps: [_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_34__["SidebarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]],
                multi: true,
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('sw.js', { scope: '/suite/', enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production, registrationStrategy: 'registerImmediately' }),
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaV3Module"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"],
                _dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_21__["DynamicRenderComponentModule"],
                _components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_22__["NzSpinnerModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"],
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_33__["CoreLayoutModule"],
            ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaV3Module"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"],
        _dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_21__["DynamicRenderComponentModule"],
        _components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_22__["NzSpinnerModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"],
        _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_33__["CoreLayoutModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
                ],
                entryComponents: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                        }
                    }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('sw.js', { scope: '/suite/', enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production, registrationStrategy: 'registerImmediately' }),
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaV3Module"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"],
                    _dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_21__["DynamicRenderComponentModule"],
                    _components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_22__["NzSpinnerModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"],
                    _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_33__["CoreLayoutModule"],
                ],
                providers: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__["NgbActiveModal"],
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__["CookieService"],
                    _modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_34__["SidebarService"],
                    _services_partner_service__WEBPACK_IMPORTED_MODULE_9__["PartnerService"],
                    _services_language_service__WEBPACK_IMPORTED_MODULE_27__["LanguageService"],
                    _services_country_service__WEBPACK_IMPORTED_MODULE_26__["CountryService"],
                    _services_app_installer_service__WEBPACK_IMPORTED_MODULE_24__["AppInstallerService"],
                    _services_singleSignon_service__WEBPACK_IMPORTED_MODULE_30__["SingleSignonService"],
                    _services_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"],
                    _services_local_service__WEBPACK_IMPORTED_MODULE_28__["LocalService"],
                    _services_user_service__WEBPACK_IMPORTED_MODULE_32__["UserService"],
                    _services_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"],
                    _services_suite_service__WEBPACK_IMPORTED_MODULE_31__["SuiteService"],
                    _services_chat_service__WEBPACK_IMPORTED_MODULE_25__["ChatService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: partnerInitializer, deps: [_services_partner_service__WEBPACK_IMPORTED_MODULE_9__["PartnerService"]], multi: true },
                    { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RECAPTCHA_V3_SITE_KEY"], useValue: "6LcQKUsaAAAAAEm58xRN6A2dIHZnzDcd3Lmv_K_m" },
                    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NZ_I18N"], useValue: _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_16___default.a }, { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NZ_ICONS"], useValue: icons },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: menuOptionsProviderFactory,
                        deps: [_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_34__["SidebarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                exports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zknh":
/*!*******************************************!*\
  !*** ./src/app/services/suite.service.ts ***!
  \*******************************************/
/*! exports provided: SuiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiteService", function() { return SuiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.service */ "kyOO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");








var SuiteService = /** @class */ (function () {
    function SuiteService(http, languageService) {
        this.http = http;
        this.languageService = languageService;
        this.isUnitFamily = false;
    }
    SuiteService.prototype.getUserSuites = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.suites != undefined)
                    return [2 /*return*/];
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                params = params.set('lan', this.languageService.lan);
                //return this.http.get<Suite[]>(environment.apiEndpoint + "api/suite/user", {params}).toPromise().then(result => {this.suites = result;});
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/suite/user_suite", { params: params }).toPromise().then(function (result) { _this.suites = result; })];
            });
        });
    };
    SuiteService.ɵfac = function SuiteService_Factory(t) { return new (t || SuiteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
    SuiteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuiteService, factory: SuiteService.ɵfac, providedIn: 'root' });
    return SuiteService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SuiteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "b+Yv":
/*!*****************************************************!*\
  !*** ./src/app/components/nz-spinner/nz-spinner.ts ***!
  \*****************************************************/
/*! exports provided: NzSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpinnerComponent", function() { return NzSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");



var NzSpinnerComponent = /** @class */ (function () {
    function NzSpinnerComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._elementRef.nativeElement.removeAttribute("ng-version");
    }
    NzSpinnerComponent.ɵfac = function NzSpinnerComponent_Factory(t) { return new (t || NzSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    NzSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSpinnerComponent, selectors: [["nz-spinner"]], decls: 1, vars: 0, consts: [["nzSimple", ""]], template: function NzSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spin", 0);
        } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_1__["NzSpinComponent"]], styles: [""] });
    return NzSpinnerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-spinner',
                template: "\n      <nz-spin nzSimple></nz-spin>\n  ",
                styles: [
                    "\n    "
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "bVYc":
/*!*****************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.enums.ts ***!
  \*****************************************************/
/*! exports provided: TooltipPosition, TooltipTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPosition", function() { return TooltipPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipTheme", function() { return TooltipTheme; });
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["ABOVE"] = "above";
    TooltipPosition["BELOW"] = "below";
    TooltipPosition["LEFT"] = "left";
    TooltipPosition["RIGHT"] = "right";
    TooltipPosition["DYNAMIC"] = "dynamic";
    TooltipPosition["DEFAULT"] = "above";
})(TooltipPosition || (TooltipPosition = {}));
var TooltipTheme;
(function (TooltipTheme) {
    TooltipTheme["DARK"] = "dark";
    TooltipTheme["LIGHT"] = "light";
    TooltipTheme["DEFAULT"] = "dark";
})(TooltipTheme || (TooltipTheme = {}));


/***/ }),

/***/ "bcgG":
/*!***************************************!*\
  !*** ./src/app/models/domainFlows.ts ***!
  \***************************************/
/*! exports provided: DomainFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainFlow", function() { return DomainFlow; });
var DomainFlow;
(function (DomainFlow) {
    DomainFlow[DomainFlow["NotFoundValidation"] = 0] = "NotFoundValidation";
    DomainFlow[DomainFlow["Normal"] = 1] = "Normal";
})(DomainFlow || (DomainFlow = {}));


/***/ }),

/***/ "cOAc":
/*!***************************************************************!*\
  !*** ./src/app/components/callmeback/callmeback.component.ts ***!
  \***************************************************************/
/*! exports provided: CallmebackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallmebackComponent", function() { return CallmebackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_models_callmeback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/callmeback */ "kkBV");
/* harmony import */ var src_app_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/form.service */ "md+p");
/* harmony import */ var src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/user.validator */ "TQtI");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nz-spinner/nz-spinner */ "b+Yv");

















function CallmebackComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r6);
} }
function CallmebackComponent_nz_spinner_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CallmebackComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ENVIAR"), " ");
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
var CallmebackComponent = /** @class */ (function () {
    function CallmebackComponent(activeModal, userService, formService, messageService, translate) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.formService = formService;
        this.messageService = messageService;
        this.translate = translate;
        this.data = new src_app_models_callmeback__WEBPACK_IMPORTED_MODULE_3__["Callmeback"];
        this.loading = false;
        this.postError = false;
        this.submitted = false;
        this.showMessage = false;
        this.message = "";
    }
    CallmebackComponent.prototype.ngOnInit = function () {
        // console.log("ngOnInit");
        // console.log(this.userService.currentUserValue);
        if (this.formService.formCallmeback && this.formService.formCallmeback.message) {
            // console.log("Cargamos de Service");
            this.data = this.formService.formCallmeback;
        }
        else if (this.userService.currentUserValue) {
            // console.log("Cargamos datos del usuario");
            this.data.name = this.userService.currentUserValue.name;
            this.data.surname = this.userService.currentUserValue.surname;
            this.data.email = this.userService.currentUserValue.email;
            this.data.phone = this.userService.currentUserValue.phone;
            this.data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
    };
    CallmebackComponent.prototype.ngOnDestroy = function () {
        // console.log("ngOnDestroy");
        this.formService.formCallmeback = this.data;
    };
    CallmebackComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log("onSubmit");
        this.showMessage = false;
        // if (this.data.phone != null && this.data.phone.length > 0) {
        //   if (UserValidator.validPhone(this.data.phone) == null) {
        //     this.message = this.translate.instant('MULTIUSER.VALIDATION11'); this.showMessage = true; this.loading = false; return;
        //   }
        // }
        if (src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_5__["UserValidator"].validEmail(this.data.email) == null) {
            this.message = this.translate.instant('MULTIUSER.VALIDATION4');
            this.showMessage = true;
            this.loading = false;
            return;
        }
        this.postError = false;
        this.submitted = true;
        this.loading = true;
        this.translate.get('FORM_ENVIANDO').subscribe(function (res) { return _this.messageService.add(res, "ok"); });
        this.formService.postCallmeback(this.data).then(function (result) {
            _this.loading = false;
            _this.translate.get('FORM_ENVIADO').subscribe(function (res) { return _this.messageService.add(res, "ok"); });
            _this.activeModal.close();
        }, function (error) {
            _this.translate.get('ERROR_ENVIO_FORM').subscribe(function (res) {
                _this.messageService.add(res, "error");
                _this.postError = true;
                _this.loading = false;
            });
        });
    };
    CallmebackComponent.ɵfac = function CallmebackComponent_Factory(t) { return new (t || CallmebackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"])); };
    CallmebackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallmebackComponent, selectors: [["app-callmeback"]], inputs: { name: "name", icon: "icon" }, decls: 82, vars: 83, consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "icon-close"], [1, "modal-title"], [1, "icon"], [1, "modal-body"], [1, "card"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "sscard", "w-100", "mb-4"], [3, "ngSubmit"], [1, "form-row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "form-group"], ["for", "name"], ["type", "text", "required", "", "name", "name", "maxlength", "200", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["name", "ngModel"], ["for", "surname"], ["type", "text", "required", "", "name", "surname", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["surname", "ngModel"], ["for", "phone"], ["type", "text", "required", "", "name", "phone", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["phone", "ngModel"], ["for", "email"], ["type", "text", "required", "", "name", "email", "maxlength", "100", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["email", "ngModel"], ["type", "text", "required", "", "name", "schedule", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["schedule", "ngModel"], ["type", "text", "required", "", "name", "timezone", "maxlength", "100", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["timezone", "ngModel"], ["required", "", "name", "message", "rows", "3", 1, "form-control", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["message", "ngModel"], [1, "mt-3"], ["class", "alert alert-dismissible", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", 3, "disabled"], [4, "ngIf"], [1, "modal-footer"], ["role", "alert", 1, "alert", "alert-dismissible"], [1, "text-danger"]], template: function CallmebackComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallmebackComponent_Template_button_click_1_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CallmebackComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_input_ngModelChange_24_listener($event) { return ctx.data.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_input_ngModelChange_32_listener($event) { return ctx.data.surname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 22, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_input_ngModelChange_41_listener($event) { return ctx.data.phone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 25, 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_input_ngModelChange_49_listener($event) { return ctx.data.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 27, 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_input_ngModelChange_58_listener($event) { return ctx.data.schedule = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 29, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_input_ngModelChange_66_listener($event) { return ctx.data.timezone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "textarea", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallmebackComponent_Template_textarea_ngModelChange_73_listener($event) { return ctx.data.message = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CallmebackComponent_div_77_Template, 3, 1, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, CallmebackComponent_nz_spinner_79_Template, 2, 0, "nz-spinner", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CallmebackComponent_div_80_Template, 3, 3, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 37);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 37, "COMP_CALLMEBACK.TITULO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 39, "FORMULARIO_TEXTO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 41, "COMP_CALLMEBACK.NAME"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 43, "COMP_CALLMEBACK.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, _r0.invalid && (_r0.dirty || _r0.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 45, "COMP_CALLMEBACK.SURNAME"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 47, "COMP_CALLMEBACK.SURNAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.surname)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c0, _r1.invalid && (_r1.dirty || _r1.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 49, "COMP_CALLMEBACK.PHONE"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 51, "COMP_CALLMEBACK.PHONE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.phone)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c0, _r2.invalid && (_r2.dirty || _r2.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 53, "COMP_CALLMEBACK.EMAIL"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 55, "COMP_CALLMEBACK.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c0, _r3.invalid && (_r3.dirty || _r3.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 57, "COMP_CALLMEBACK.SCHEDULE"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 59, "COMP_CALLMEBACK.SCHEDULE_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.schedule)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c0, _r4.invalid && (_r4.dirty || _r4.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 61, "COMP_CALLMEBACK.TIMEZONE"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 63, "COMP_CALLMEBACK.TIMEZONE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.timezone)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c0, _r5.invalid && (_r5.dirty || _r5.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 65, "COMP_CALLMEBACK.MESSAGE"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 67, "COMP_CALLMEBACK.SUGGESTION"), " *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.message)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c0, _r6.invalid && (_r6.dirty || _r6.touched)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || _r0.invalid || _r1.invalid || _r3.invalid || _r2.invalid || _r5.invalid || _r4.invalid || _r6.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_10__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbG1lYmFjay9jYWxsbWViYWNrLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CallmebackComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallmebackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-callmeback',
                templateUrl: './callmeback.component.html',
                styleUrls: ['./callmeback.component.scss'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "gK8K":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header-integrated/shared/notification.service */ "9L4e");
/* harmony import */ var src_app_services_app_installer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app-installer.service */ "oGhC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "KhAy");















function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#EB1919");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.notificationService.totalNotReadedNotifications && ctx_r0.notificationService.totalNotReadedNotifications > 99 ? "+99" : ctx_r0.notificationService.totalNotReadedNotifications);
} }
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, router, partnerService, notificationService, appInstallerService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.partnerService = partnerService;
        this.notificationService = notificationService;
        this.appInstallerService = appInstallerService;
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HeaderComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.currentUser) {
                    this.loginType = this.partnerService.partner.loginType;
                    if (this.loginType == 2 && !this.currentUser.isAdminUserId && (this.currentUser.email == undefined || this.currentUser.email == null || this.currentUser.email == "")) {
                        this.messageService.add("Recomendación: establezca un correo electónico con el fin de establecer un canal de notificaciones, por favor, vaya a su perfil y añádalo.", "info");
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HeaderComponent.prototype.ngAfterContentInit = function () { };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.toogleNotificacion = function () {
        this.notificationService.toogleNotification();
    };
    HeaderComponent.prototype.openSidebar = function () {
        var sidebarId = document.getElementById("sidebar-toogle");
        if (sidebarId) {
            var body = document.getElementById('main-body');
            if (this.notificationService.sidebarToogle && body) {
                body.classList.remove("modal-open");
            }
            else {
                body.classList.add("modal-open");
            }
            this.notificationService.toogleSidebarToogle();
            sidebarId.classList.toggle("sidebar--show");
        }
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_installer_service__WEBPACK_IMPORTED_MODULE_6__["AppInstallerService"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 6, consts: [[1, "toolbar", "fixed"], [1, "frac-navbar"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], ["id", "button-sidebar", 1, "cursor", "mr-4", 3, "ngClass", "click"], ["routerLink", "/home"], ["alt", "homepage", 1, "light-logo", 3, "src"], [1, "d-flex"], ["id", "download", 1, "btn", "btn-primary", "mr-3", "btn-download"], [1, "icon-download-app"], ["id", "noti-icon-mobile", 1, "noti-icon-mobile", 3, "click"], [3, "ngClass"], ["class", "noti-bell-header", 3, "background-color", 4, "ngIf"], [3, "logo"], [1, "noti-bell-header"], [1, "ds-c-white"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() { return ctx.openSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_11_listener() { return ctx.toogleNotificacion(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 3, 3, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-sidebar", 13);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.notificationService.sidebarToogle ? "icon-close" : "icon-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.userService.currentUserValue && !ctx.userService.currentUserValue.checkTermsAcceptDate ? "true" : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.partnerService.partner.logotipo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.notificationService.isOpen ? "icon-close" : "icon-bell");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notificationService.showBell);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("logo", ctx.partnerService.partner.logotipo);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"]], styles: [".frac-navbar {\n  background-color: #FFF;\n  padding: 20px 10px 20px 24px;\n}\n\n.btn-download {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.noti-bell-header {\n  position: relative;\n  min-width: 12px;\n  height: 12px;\n  background: #EB1919;\n  margin-left: -12px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8px;\n  line-height: 9px;\n  font-weight: 400;\n  padding: 2px 3px;\n}\n\n.noti-icon-mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 36px;\n  width: 36px !important;\n  border: 1px solid #ECF1F8;\n  background-color: #ECF1F8;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n\n.pwa-icon {\n  font-size: 20px;\n  padding: 2px;\n  color: #fff;\n  background: #00b1ea;\n  border-radius: 10px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n\n.light-logo {\n  width: 160px;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\n.icon-menu {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  .frac-navbar {\n    width: 100%;\n  }\n\n  .noti-icon-mobile {\n    visibility: visible;\n  }\n\n  .icon-menu {\n    display: block;\n  }\n\n  .light-logo {\n    width: 120px;\n  }\n\n  .header-right ul li {\n    max-width: 100% !important;\n    text-align: center;\n    vertical-align: middle;\n  }\n\n  #notificacion {\n    width: 391px;\n    margin-top: 12px;\n  }\n}\n\n.toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  color: #2a2a2a;\n  font-weight: 600;\n  border-bottom: 1px solid #dfe3eb;\n}\n\n.toolbar img {\n  margin: 0 16px;\n}\n\n:host {\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  background: #ffffff;\n  color: #2a2a2a;\n}\n\n.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 940;\n}\n\n.toolbar {\n  visibility: hidden;\n}\n\n@media only screen and (max-width: 767px) {\n  .toolbar {\n    visibility: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFTQTtFQUNFO0lBQ0UsV0FBQTtFQU5GOztFQVNBO0lBQ0UsbUJBQUE7RUFORjs7RUFTQTtJQUNDLGNBQUE7RUFORDs7RUFTQTtJQUNFLFlBQUE7RUFORjs7RUFTQTtJQUNFLDBCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQU5GOztFQVNBO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VBTkY7QUFDRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7QUFWRjs7QUFhQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVkY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtBQVhGOztBQWNBO0VBQ0U7SUFDRSxtQkFBQTtFQVhGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZnJhYy1uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAyNHB4O1xufVxuXG4uYnRuLWRvd25sb2Fke1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLm5vdGktYmVsbC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRUIxOTE5O1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMnB4IDNweDtcbn1cblxuXG4ubm90aS1pY29uLW1vYmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICAjRUNGMUY4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMUY4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHdhLWljb257XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwYjFlYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpZ2h0LWxvZ28ge1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLW1lbnUgIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLy8gLmxpZ2h0LWxvZ28ge1xuICAvLyAgIHdpZHRoOiAxMjBweDtcbiAgLy8gfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZnJhYy1uYXZiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5vdGktaWNvbi1tb2JpbGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAuaWNvbi1tZW51ICB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5saWdodC1sb2dvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cblxuICAuaGVhZGVyLXJpZ2h0IHVsIGxpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICNub3RpZmljYWNpb24ge1xuICAgIHdpZHRoOiAzOTFweDtcbiAgICBtYXJnaW4tdG9wOjEycHg7XG4gIH1cbn1cblxuXG5cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGZlM2ViO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuOmhvc3Qge1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMyYTJhMmE7XG59XG5cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTQwO1xufVxuXG4udG9vbGJhciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudG9vbGJhciB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4iXX0= */"], encapsulation: 2 });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__["PartnerService"] }, { type: _header_integrated_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: src_app_services_app_installer_service__WEBPACK_IMPORTED_MODULE_6__["AppInstallerService"] }]; }, null); })();


/***/ }),

/***/ "gT/A":
/*!************************************************************!*\
  !*** ./src/app/components/nz-spinner/nz-spinner.module.ts ***!
  \************************************************************/
/*! exports provided: NzSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpinnerModule", function() { return NzSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _nz_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nz-spinner */ "b+Yv");





var NzSpinnerModule = /** @class */ (function () {
    function NzSpinnerModule() {
    }
    NzSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzSpinnerModule });
    NzSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzSpinnerModule_Factory(t) { return new (t || NzSpinnerModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_2__["NzSpinModule"]
            ]] });
    return NzSpinnerModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSpinnerModule, { declarations: [_nz_spinner__WEBPACK_IMPORTED_MODULE_3__["NzSpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_2__["NzSpinModule"]], exports: [_nz_spinner__WEBPACK_IMPORTED_MODULE_3__["NzSpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_2__["NzSpinModule"]
                ],
                declarations: [
                    _nz_spinner__WEBPACK_IMPORTED_MODULE_3__["NzSpinnerComponent"]
                ],
                exports: [
                    _nz_spinner__WEBPACK_IMPORTED_MODULE_3__["NzSpinnerComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "hzlp":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser
            && currentUser.token
            && !request.url.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].STATIC_CONTENT)
        // && request.url != environment.apiEndpoint + "api/user"
        ) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
    return JwtInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _callback_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback.pipe */ "8lNY");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "BhhM");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe.pipe */ "YYwF");






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return PipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"],
        _callback_pipe__WEBPACK_IMPORTED_MODULE_2__["CallbackPipe"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"], _callback_pipe__WEBPACK_IMPORTED_MODULE_2__["CallbackPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"],
                    _callback_pipe__WEBPACK_IMPORTED_MODULE_2__["CallbackPipe"],
                    _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"],
                ],
                exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"], _callback_pipe__WEBPACK_IMPORTED_MODULE_2__["CallbackPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kHaP":
/*!************************************************************!*\
  !*** ./src/app/components/callmeback/callmeback.module.ts ***!
  \************************************************************/
/*! exports provided: CallMeBackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallMeBackModule", function() { return CallMeBackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _callmeback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./callmeback.component */ "cOAc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cdk-modal/cdk-modal.module */ "xG9v");
/* harmony import */ var _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nz-spinner/nz-spinner.module */ "gT/A");









var CallMeBackModule = /** @class */ (function () {
    function CallMeBackModule() {
    }
    CallMeBackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallMeBackModule });
    CallMeBackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallMeBackModule_Factory(t) { return new (t || CallMeBackModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_6__["CDKModalModule"],
                _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
            ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
    return CallMeBackModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallMeBackModule, { declarations: [_callmeback_component__WEBPACK_IMPORTED_MODULE_4__["CallmebackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_6__["CDKModalModule"],
        _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _callmeback_component__WEBPACK_IMPORTED_MODULE_4__["CallmebackComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallMeBackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_6__["CDKModalModule"],
                    _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
                ],
                declarations: [
                    _callmeback_component__WEBPACK_IMPORTED_MODULE_4__["CallmebackComponent"]
                ],
                providers: [],
                exports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _callmeback_component__WEBPACK_IMPORTED_MODULE_4__["CallmebackComponent"]
                ],
                entryComponents: [
                    _callmeback_component__WEBPACK_IMPORTED_MODULE_4__["CallmebackComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kkBV":
/*!**************************************!*\
  !*** ./src/app/models/callmeback.ts ***!
  \**************************************/
/*! exports provided: Callmeback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callmeback", function() { return Callmeback; });
var Callmeback = /** @class */ (function () {
    function Callmeback() {
    }
    return Callmeback;
}());



/***/ }),

/***/ "kyOO":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");








var LanguageService = /** @class */ (function () {
    function LanguageService(translate, http) {
        this.translate = translate;
        this.http = http;
        this.lan = "es-ES";
        var lang = navigator.language;
        // var lang = "es";
        var langUser = localStorage.getItem('langUser');
        if (langUser)
            this.lan = langUser;
        else {
            this.lan = lang;
            localStorage.setItem('langUser', lang);
        }
    }
    LanguageService.prototype.setLanguage = function (code, reload) {
        if (reload === void 0) { reload = false; }
        // console.log("setLanguage: "+code+" - "+reload);
        localStorage.setItem('langUser', code);
        if (this.lan != code) {
            // console.log("Changing language to "+code+" - reload: "+reload);
            this.lan = code;
            this.translate.use(code);
            if (reload)
                window.location.reload();
        }
    };
    LanguageService.prototype.getLanguages = function (partnerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('partnerId', partnerId.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/language", { params: params }).toPromise()];
            });
        });
    };
    LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
    return LanguageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lD+1":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/layout/header-integrated/notifications/support-notification/support-notification.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: SupportNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportNotificationComponent", function() { return SupportNotificationComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/ImageUtils */ "1N2o");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function SupportNotificationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function SupportNotificationComponent_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.TODAY"), "");
} }
function SupportNotificationComponent_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS.YESTERDAY"), "");
} }
function SupportNotificationComponent_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dateNotifications_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dateNotifications_r4.notificationDate, "");
} }
function SupportNotificationComponent_div_2_div_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r13.linkUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13.linkName);
} }
function SupportNotificationComponent_div_2_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupportNotificationComponent_div_2_div_6_div_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); var i_r15 = ctx.index; var notification_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.downloadFile(notification_r10, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r14);
} }
function SupportNotificationComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SupportNotificationComponent_div_2_div_6_div_13_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SupportNotificationComponent_div_2_div_6_div_15_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var notification_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", notification_r10.serviceIcon, " ds-service-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r10.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 9, (notification_r10.notificationDate.toString() + "Z").toLocaleString(), "HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", notification_r10.readed ? "ds-bg-background" : "ds-bg-secondary-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", notification_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", notification_r10.parseLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", notification_r10.parseFiles);
} }
function SupportNotificationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SupportNotificationComponent_div_2_span_2_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SupportNotificationComponent_div_2_span_3_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SupportNotificationComponent_div_2_span_4_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SupportNotificationComponent_div_2_div_6_Template, 16, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dateNotifications_r4 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", dateNotifications_r4.notificationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.yesterdayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", dateNotifications_r4.notifications);
} }
function SupportNotificationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "COMP_USER.SUPPORT_NOTIFICATION.NO_NOTIFICATIONS_YET"));
} }
var SupportNotificationComponent = /** @class */ (function () {
    function SupportNotificationComponent(datePipe) {
        this.datePipe = datePipe;
        this.notifications = [];
        this.isloading = false;
        this.sortNotifications = [];
    }
    SupportNotificationComponent.prototype.ngOnInit = function () {
        console.log('init supprt');
        this.currentDate = this.getCurrentDate();
        this.yesterdayDate = this.getYesterday();
    };
    SupportNotificationComponent.prototype.ngOnChanges = function (changes) {
        this.sortNotifications = changes.notifications.currentValue.sort(function (a, b) {
            var dateA = new Date(a.notificationDate.split("/").reverse().join("/"));
            var dateB = new Date(b.notificationDate.split("/").reverse().join("/"));
            return dateB - dateA;
        });
    };
    SupportNotificationComponent.prototype.downloadFile = function (item, index) {
        var urlFile = item.parseURLFiles[index];
        var fileName = item.parseFiles[index];
        src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_2__["ImageUtils"].donwloadFileFromURL(urlFile, fileName);
    };
    SupportNotificationComponent.prototype.getCurrentDate = function () {
        var date = new Date();
        var formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
        return formattedDate;
    };
    SupportNotificationComponent.prototype.getYesterday = function () {
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        var formattedDate = this.datePipe.transform(yesterday, 'dd/MM/yyyy');
        return formattedDate;
    };
    SupportNotificationComponent.ɵfac = function SupportNotificationComponent_Factory(t) { return new (t || SupportNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"])); };
    SupportNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SupportNotificationComponent, selectors: [["app-support-notification"]], inputs: { notifications: "notifications" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "notif-container"], [4, "ngIf", "ngIfElse"], ["class", "mb-4", 3, "ngSwitch", 4, "ngFor", "ngForOf"], ["dontHaveNotifications", ""], [1, "mb-4", 3, "ngSwitch"], [1, "d-flex", "justify-content-center", "align-items-end", "r-regular"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "hr-color"], ["class", "d-flex align-items-center mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-4"], [1, "section--icon", "flex-column", "alerta"], [1, "alerta-icon"], [2, "font-size", "3em", "color", "#242B59"], [1, "section--text"], [1, "ml-2", "ds-r-regular", "ds-c-secondary"], [1, "background-alert", 3, "ngClass"], [1, "body-font", "d-flex", "text-align-justify", "ds-c-black", "mb-0", 2, "word-break", "break-word", 3, "innerText"], [1, "link-content", "r-regular"], ["class", "d-flex align-items-center mr-2 mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mr-2", "mb-2"], ["target", "_blank", 2, "color", "#0349FE", 3, "href"], [1, "fas", "fa-link"], [1, "ml-1"], ["href", "javascript:void(0)", 2, "color", "#0349FE", 3, "click"], [1, "fa", "fa-download"], [1, "no-alerta"], [1, "none-notification", "icon-bell", "mb-2"], [1, "regular"]], template: function SupportNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SupportNotificationComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SupportNotificationComponent_div_2_Template, 7, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SupportNotificationComponent_ng_template_3_Template, 5, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0)("ngIfElse", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notifications);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], styles: [".link-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWludGVncmF0ZWQvbm90aWZpY2F0aW9ucy9zdXBwb3J0LW5vdGlmaWNhdGlvbi9zdXBwb3J0LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXItaW50ZWdyYXRlZC9ub3RpZmljYXRpb25zL3N1cHBvcnQtbm90aWZpY2F0aW9uL3N1cHBvcnQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmstY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"] });
    return SupportNotificationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SupportNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-support-notification',
                templateUrl: './support-notification.component.html',
                styleUrls: ['./support-notification.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }]; }, { notifications: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "md+p":
/*!******************************************!*\
  !*** ./src/app/services/form.service.ts ***!
  \******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
    }
    FormService.prototype.getFormFields = function (serviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('serviceId', serviceId.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/formfield", { params: params }).toPromise()];
            });
        });
    };
    FormService.prototype.postDigitalLife = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/life", data).toPromise()];
            });
        });
    };
    FormService.prototype.postCertificate = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/certificate", data).toPromise()];
            });
        });
    };
    FormService.prototype.postInternet = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/presencia", data).toPromise()];
            });
        });
    };
    FormService.prototype.postExpertsConnection = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/expertsconnection", data).toPromise()];
            });
        });
    };
    FormService.prototype.postCallmeback = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/callmeback", data).toPromise()];
            });
        });
    };
    FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    FormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
    return FormService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SecureStorage = __webpack_require__(/*! secure-web-storage */ "pJXH");
var SECRET_KEY = 'Fr@ctalia123.-';
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.secureStorage = new SecureStorage(localStorage, {
            hash: function hash(key) {
                key = crypto_js__WEBPACK_IMPORTED_MODULE_0__["SHA256"](key);
                return key.toString();
            },
            encrypt: function encrypt(data) {
                data = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(data, SECRET_KEY);
                data = data.toString();
                return data;
            },
            decrypt: function decrypt(data) {
                data = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(data, SECRET_KEY);
                data = data.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8);
                return data;
            }
        });
    }
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    return StorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nY9P":
/*!*************************************************************!*\
  !*** ./src/app/components/infomodal/infomodal.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalComponent", function() { return InfoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





var InfoModalComponent = /** @class */ (function () {
    function InfoModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    InfoModalComponent.prototype.ngOnInit = function () {
    };
    InfoModalComponent.ɵfac = function InfoModalComponent_Factory(t) { return new (t || InfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
    InfoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoModalComponent, selectors: [["app-modal"]], inputs: { message: "message" }, decls: 16, vars: 7, consts: [[1, "popup"], ["id", "popup"], [1, "popup-header"], ["href", "javascript:void(0);", 1, "cerrar", 3, "click"], ["_ngcontent-oui-c3", "", 1, "icon-close"], [1, "mt-4", "text-left"], ["id", "form_navegacion_dispositivo", "action", "/es/protecciones", "method", "post", "enctype", "multipart/form-data", 1, "dil"], [1, "popup-body"], [1, "text-left", "mt-2"], [1, "popup-footer", "text-left"], ["type", "submit", 1, "mt-2", "w-25", "btn", "btn-primary", 3, "click"]], template: function InfoModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoModalComponent_Template_a_click_3_listener() { return ctx.activeModal.dismiss("Cancel"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoModalComponent_Template_button_click_13_listener() { return ctx.activeModal.dismiss("OK"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "WARNING"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 5, "OK"));
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb21vZGFsL2luZm9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return InfoModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './infomodal.component.html',
                styleUrls: ['./infomodal.component.scss'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oGhC":
/*!***************************************************!*\
  !*** ./src/app/services/app-installer.service.ts ***!
  \***************************************************/
/*! exports provided: AppInstallerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInstallerService", function() { return AppInstallerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var AppInstallerService = /** @class */ (function () {
    function AppInstallerService() {
        var _this = this;
        this.showDownloadBox = false;
        this.osName = '';
        this.browser = '';
        this.standalone = false;
        this.handlerPrompt = function (event) {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            event.preventDefault();
            // Stash the event so it can be triggered later.
            _this.promptEvent = event;
            _this.showDownloadBox = true;
        };
    }
    AppInstallerService.prototype.registerServiceWorker = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.getNavigator();
                localStorage.setItem('swLoaded', 'false');
                if ('serviceWorker' in navigator) {
                    // Register a service worker hosted at the root of the
                    // site using the default scope.
                    navigator.serviceWorker.register('sw.js', { scope: '/suite/' }).then(function (registration) {
                        if (registration.installing) {
                            var sw_1 = registration.installing || registration.waiting;
                            sw_1.onstatechange = function () {
                                if (sw_1.state === 'installed') {
                                    // SW installed.  Refresh page so SW can respond with SW-enabled page.
                                    localStorage.setItem('swLoaded', 'true');
                                }
                            };
                        }
                        localStorage.setItem('swLoaded', 'true');
                    }).catch(function (error) {
                        localStorage.setItem('swLoaded', 'true');
                    });
                }
                else {
                    localStorage.setItem('swLoaded', 'true');
                }
                return [2 /*return*/];
            });
        });
    };
    AppInstallerService.prototype.showInstallerAuto = function () {
        // Customized A2HS  
        if (!this.isStandalone()) {
            window.addEventListener('beforeinstallprompt', this.handlerPrompt, true);
        }
        //document.addEventListener('mousedown', handler, true)
    };
    AppInstallerService.prototype.showInstallBox = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var handler, buttonOne, button;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = function () {
                            _this.showPrompt();
                        };
                        buttonOne = document.getElementById('download-pwa');
                        button = document.getElementById('download');
                        _a.label = 1;
                    case 1:
                        if (!(!button || !buttonOne)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.delay(200)];
                    case 2:
                        _a.sent();
                        button = document.getElementById('download');
                        buttonOne = document.getElementById('download-pwa');
                        return [3 /*break*/, 1];
                    case 3:
                        button.addEventListener('click', handler, true);
                        buttonOne.addEventListener('click', handler, true);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppInstallerService.prototype.showPrompt = function () {
        var _this = this;
        if (this.promptEvent) {
            this.promptEvent.prompt();
            this.promptEvent.userChoice.then(function (result) {
                if (result.outcome === 'accepted') {
                    window.removeEventListener('beforeinstallprompt', _this.handlerPrompt, true);
                    _this.showDownloadBox = false;
                    _this.promptEvent = undefined;
                }
            });
        }
    };
    AppInstallerService.prototype.getNavigator = function () {
        var usrAg = navigator.userAgent;
        // Browser
        if (usrAg.indexOf("Chrome") > -1) {
            this.browser = "Google Chrome";
        }
        else if (usrAg.indexOf("Safari") > -1 && usrAg.indexOf("CriOS") === -1) {
            this.browser = "Apple Safari";
        }
        else if (usrAg.indexOf("Firefox") > -1) {
            this.browser = "Mozilla Firefox";
        }
        else if (usrAg.indexOf("MSIE") > -1) {
            this.browser = "Microsoft Internet Explorer";
        }
        // Platform
        if (usrAg.indexOf("Windows") != -1)
            this.osName = "Windows";
        if (usrAg.indexOf("Mac") != -1)
            this.osName = "Mac";
        if (usrAg.indexOf("Linux") != -1)
            this.osName = "Linux";
        if (/Android/i.test(navigator.userAgent))
            this.osName = "Android";
        if (/iPhone|iPad/i.test(navigator.userAgent))
            this.osName = "iOS";
        // Standalone or not - app installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            this.standalone = true;
        }
    };
    AppInstallerService.prototype.isChrome = function () {
        return this.browser.indexOf("Chrome") != -1;
    };
    AppInstallerService.prototype.isSafari = function () {
        return this.browser.indexOf("Safari") != -1;
    };
    AppInstallerService.prototype.isFirefox = function () {
        return this.browser.indexOf("Firefox") != -1;
    };
    AppInstallerService.prototype.isWindows = function () {
        return this.osName.indexOf("Windows") != -1;
    };
    AppInstallerService.prototype.isAndroid = function () {
        return this.osName.indexOf("Android") != -1;
    };
    AppInstallerService.prototype.isIos = function () {
        return this.osName.indexOf("iOS") != -1;
    };
    AppInstallerService.prototype.isStandalone = function () {
        return this.standalone;
    };
    AppInstallerService.prototype.delay = function (delayInms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(2);
            }, delayInms);
        });
    };
    AppInstallerService.ɵfac = function AppInstallerService_Factory(t) { return new (t || AppInstallerService)(); };
    AppInstallerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppInstallerService, factory: AppInstallerService.ɵfac, providedIn: 'root' });
    return AppInstallerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppInstallerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qM9Q":
/*!*******************************************************************!*\
  !*** ./src/app/components/cdk-modal/services/cdk-modal-tokens.ts ***!
  \*******************************************************************/
/*! exports provided: MODAL_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_DATA", function() { return MODAL_DATA; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var MODAL_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MODAL_DATA');


/***/ }),

/***/ "qZOq":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message.service */ "tZre");
/* harmony import */ var _models_key__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/key */ "SVzj");
/* harmony import */ var _models_recoverPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/recoverPassword */ "ytqg");
/* harmony import */ var src_app_models_userProv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/userProv */ "Z9tt");
/* harmony import */ var src_app_models_userChildProv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/userChildProv */ "IRsC");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./language.service */ "kyOO");
/* harmony import */ var _local_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./local.service */ "s3jE");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/string-utils */ "372O");























var test = /** @class */ (function () {
    function test() {
    }
    return test;
}());
var UserService = /** @class */ (function () {
    function UserService(http, router, messageService, translate, languageService, localService) {
        this.http = http;
        this.router = router;
        this.messageService = messageService;
        this.translate = translate;
        this.languageService = languageService;
        this.localService = localService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STATIC_CONTENT;
        this.menuPhoto = "";
        this.sendEmail = 'false';
        this.noActive = false;
        this.activationTokenCompleteProfile = false;
        this.userKeyStorage = new _models_key__WEBPACK_IMPORTED_MODULE_9__["Key"]();
        this.userProfileList = [];
        this.userProfileDetailList = [];
        var keepSession = localStorage.getItem('keepSession');
        var setCookies = localStorage.getItem('acceptCookies');
        var tokenSSO = localStorage.getItem('activationToken');
        if (!JSON.parse(keepSession)) {
            var langUser = localStorage.getItem('langUser');
            //localStorage.clear()
            localStorage.setItem('langUser', langUser);
            if (setCookies != null)
                localStorage.setItem('acceptCookies', setCookies);
        }
        if (tokenSSO != null) {
            localStorage.setItem("activationToken", tokenSSO);
        }
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.getLocalStorage('currentUser'));
        if (this.currentUserSubject.value != null) {
            this.currentUserSubject.value.profileImage = this.currentUserSubject.value.profileImage;
            if (this.currentUserSubject.value.profileImage === null) {
                this.menuPhoto = this.staticContentUrl + "img/profileDefaultMenu.png";
            }
            else {
                this.menuPhoto = this.currentUserValue.profileImage;
            }
        }
        this.currentUser = this.currentUserSubject.asObservable();
    }
    UserService.prototype.setUserKey = function (data) {
        this.userKeyStorage = new _models_key__WEBPACK_IMPORTED_MODULE_9__["Key"]();
        this.userKeyStorage.newKey = data.newKey;
        this.userKeyStorage.repeatKey = data.repeatKey;
    };
    Object.defineProperty(UserService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.updateCurrentUser = function (user) {
        this.currentUserSubject.next(user);
    };
    UserService.prototype.login = function (login) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user", login)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setLocalStorage('currentUser', user);
                localStorage.removeItem('currentService');
                localStorage.removeItem('suiteColor');
                localStorage.removeItem('suiteGradColor');
                localStorage.removeItem('suiteName');
                localStorage.removeItem('lastFractelItem');
                if (user.profileImage == null) {
                    _this.menuPhoto = _this.staticContentUrl + "img/profileDefaultMenu.png";
                }
                else {
                    _this.menuPhoto = user.profileImage;
                }
                _this.currentUserSubject.next(user);
                if (user.languageCode) {
                    _this.translate.use(user.languageCode);
                    _this.languageService.setLanguage(user.languageCode, false);
                }
            }
            return user;
        }));
    };
    UserService.prototype.loginSSOToken = function (login) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/loginssotoken", login)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setLocalStorage('currentUser', user);
                localStorage.removeItem('currentService');
                localStorage.removeItem('suiteColor');
                localStorage.removeItem('suiteGradColor');
                localStorage.removeItem('suiteName');
                localStorage.removeItem('lastFractelItem');
                if (user.profileImage == null) {
                    _this.menuPhoto = _this.staticContentUrl + "img/profileDefaultMenu.png";
                }
                else {
                    _this.menuPhoto = user.profileImage;
                }
                _this.currentUserSubject.next(user);
                if (user.languageCode) {
                    _this.translate.use(user.languageCode);
                    _this.languageService.setLanguage(user.languageCode, false);
                }
            }
            return user;
        }));
    };
    UserService.prototype.logout = function () {
        var impersonation = "";
        this.tokenSSO != undefined ? impersonation = "true" : impersonation = "false";
        this.logoutUser(impersonation).subscribe();
        var dontShowWebGuidedTourAgain = localStorage.getItem('dontShowWebGuidedTourAgain');
        var dontShowMobileGuidedTourAgain = localStorage.getItem('dontShowMobileGuidedTourAgain');
        this.updateCurrentUser(null);
        localStorage.clear();
        this.tokenSSO = "";
        this.activationToken = "";
        if (dontShowWebGuidedTourAgain)
            localStorage.setItem('dontShowWebGuidedTourAgain', dontShowWebGuidedTourAgain);
        if (dontShowMobileGuidedTourAgain)
            localStorage.setItem('dontShowMobileGuidedTourAgain', dontShowMobileGuidedTourAgain);
        if (!dontShowWebGuidedTourAgain) {
            localStorage.removeItem('tourGuideWebOpen');
            localStorage.removeItem('tourGuideMobileOpen');
        }
        this.router.navigate(['']);
    };
    UserService.prototype.localLogout = function () {
        // remove user from local storage to log user out
        var setCookies = localStorage.getItem('acceptCookies');
        // var langUser = localStorage.getItem('langUser')
        var activationToken = localStorage.getItem('activationToken');
        // localStorage.setItem('langUser', langUser)
        if (setCookies != null)
            localStorage.setItem('acceptCookies', setCookies);
        if (activationToken != null) {
            localStorage.setItem('activationToken', activationToken);
            this.activationToken = activationToken;
        }
        this.currentUserSubject.next(null);
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/"]);
        window.location.reload();
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (respUser) {
            // login successful if there's a jwt token in the response
            if (!respUser.token)
                respUser.token = user.token ? user.token : '';
            if (respUser && respUser.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setLocalStorage('currentUser', respUser);
                _this.currentUserSubject.next(respUser);
            }
            return respUser;
        }));
    };
    UserService.prototype.activateUser = function (user) {
        var _this = this;
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user?tokensso=" + this.activationToken, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //user.lastPreviousAccessDate = new Date("2022-04-11T15:20:18.379841")
                _this.setLocalStorage('currentUser', user);
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    UserService.prototype.updateFullProfile = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/updateFullProfile", user).toPromise();
    };
    UserService.prototype.updateProfile = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/updateProfile", user).toPromise();
    };
    //ADMIN
    UserService.prototype.getUserNotificationConfig = function (userId) {
        if (userId === void 0) { userId = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/notification_config", { params: params }).toPromise().then(function (result) { _this.userNotificationConfig = result; })];
            });
        });
    };
    UserService.prototype.setElearningNotification = function (data) {
        if (data) {
            this.userElearningNotification = data.state === 1 ? true : false;
        }
        else {
            this.userElearningNotification = false;
        }
    };
    UserService.prototype.getElearningNotificationData = function () {
        return _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__["StringUtils"].deepClone(this.userElearningNotification);
    };
    UserService.prototype.getElearningNotification = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/UserPost");
    };
    UserService.prototype.updateElearningNotification = function (userPostBody) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/UserPost", userPostBody);
    };
    UserService.prototype.updateUserNotificationConfig = function (userNotificationConfig) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/notification_config", userNotificationConfig);
    };
    UserService.prototype.getUserNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/notifications").toPromise().then(function (result) { _this.userNotifications = result; })];
            });
        });
    };
    UserService.prototype.readUserNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                //params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/read_user_notifications", null, { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.readSupportNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                //params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/NotificationSupport", null, { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.readUserChildsNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                //params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/read_user_childs_notifications", null, { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.hideUserNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                //params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/hide_user_notifications", null, { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.hideUserChildsNotifications = function (userId) {
        if (userId === void 0) { userId = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/hide_user_childs_notifications", null, { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.getFamilyUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                //if (userId > 0)
                //  params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/familyUsers", { params: params }).toPromise().then(function (result) { _this.familyUser = result; })];
            });
        });
    };
    UserService.prototype.getUserServices = function (userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('userId', userId.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/activeservices", { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.createUser = function (user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].provisionEndpoint + "api/user/adm", user).toPromise().then(function (result) {
                        _this.messageService.add(_this.translate.instant('COMP_USER.MESSAGE.OK'), "ok");
                    }, function (err) {
                        _this.messageService.add(_this.translate.instant('COMP_USER.MESSAGE.ERR'), "error");
                    })];
            });
        });
    };
    UserService.prototype.updateUserByAdminCompany = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/admCompany", user).toPromise();
    };
    UserService.prototype.updateUserKey = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/key", key).toPromise()];
            });
        });
    };
    UserService.prototype.updateUserKeyActivation = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/key?tokenSSO=" + this.activationToken, key).toPromise()];
            });
        });
    };
    UserService.prototype.deleteUser = function (user, key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].provisionEndpoint + "api/user/delete?key=" + key, user).toPromise()];
            });
        });
    };
    UserService.prototype.GetExistUserEid = function (user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/existseid", user).toPromise()];
            });
        });
    };
    UserService.prototype.decodeRegisterCode = function (user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('partnerId', user.partnerId.toString());
                params = params.set('registercode', user.eid.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/decoderegistercode", { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.decodeRegisterCodeObservable = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.set('partnerId', user.partnerId.toString());
        params = params.set('registercode', user.eid.toString());
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/decoderegistercode", { headers: headers, params: params, responseType: 'text' });
    };
    UserService.prototype.checkRegCodeActivated = function (registerCode, partnerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('partnerId', partnerId);
                params = params.set('registercode', registerCode);
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/checkregcodeactivated", { params: params }).toPromise()];
            });
        });
    };
    UserService.prototype.getUserSuites = function (partnerCode, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.set('partnerCode', partnerCode);
        params = params.set('userId', userId.toString());
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/suite/user/suites", { params: params }).toPromise();
    };
    UserService.prototype.recoverPassword = function (email, partId, eid) {
        var params = new _models_recoverPassword__WEBPACK_IMPORTED_MODULE_10__["RecoverPassword"]();
        params.email = email;
        params.partId = Number(partId);
        params.eid = eid;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/recoverPassword", params);
    };
    UserService.prototype.updateUserKeyPassword = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/keyPassword", key).toPromise()];
            });
        });
    };
    UserService.prototype.registerCode = function (request) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/registercode", request);
    };
    UserService.prototype.createCompanyUser = function (user, key) {
        if (user.typeUser == "1") {
            var userChildProv = new src_app_models_userChildProv__WEBPACK_IMPORTED_MODULE_12__["UserChildProv"]();
            userChildProv.name = user.name;
            userChildProv.surname = user.surname;
            userChildProv.email = user.email;
            userChildProv.eid = user.eid;
            userChildProv.address = user.adress;
            userChildProv.suites = user.userSuites.map(function (us) { return us.code; });
            userChildProv.city = user.city;
            userChildProv.postalcode = user.postalcode;
            userChildProv.phone = user.phone;
            userChildProv.phone2 = user.phone2;
            userChildProv.profileImage = user.profileImage;
            userChildProv.parentEid = user.parentEid;
            userChildProv.parentEmail = user.parentEmail;
            userChildProv.parentCompanyIdentification = user.parentCompanyIdentification;
            userChildProv.adminUserId = user.adminUserId;
            userChildProv.mobilePhone = user.mobilePhone;
            userChildProv.countryCode = user.countryCode;
            userChildProv.country = user.country;
            userChildProv.cif = user.cif;
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].provisionEndpoint + "api/user/userchild?key=" + key, userChildProv).toPromise();
        }
        else {
            var userProv = new src_app_models_userProv__WEBPACK_IMPORTED_MODULE_11__["UserProv"]();
            userProv.name = user.name;
            userProv.surname = user.surname;
            userProv.surname2 = user.surname2;
            userProv.email = user.email;
            userProv.suites = user.userSuites.map(function (us) { return us.code; });
            userProv.eid = user.eid;
            userProv.mobilePhone = user.mobilePhone;
            userProv.lote = user.lote;
            userProv.cif = user.cif;
            userProv.companyIdentification = user.companyIdentification;
            userProv.companyName = user.companyName;
            userProv.adress = user.companyAddress;
            userProv.companyPhones = user.companyPhones;
            userProv.companyAuthorizedPhones = user.companyAuthorizedPhones;
            userProv.companyAuthorizedFullname = user.companyAuthorizedFullname;
            userProv.companyMaxNumLicensesAllowed = +user.companyMaxNumLicensesAllowed;
            userProv.companyAddress = user.companyAddress;
            userProv.expirationDate = user.expirationDate;
            var users = [userProv];
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].provisionEndpoint + "api/user?key=" + key, users).toPromise().then(function (result) { return result[0]; });
        }
    };
    UserService.prototype.getCompanyUsers = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/userchild").toPromise().then(function (result) { _this.companyUser = result; })];
            });
        });
    };
    UserService.prototype.updateUserConfig = function (userconfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user/userConfig", userconfig).toPromise()];
            });
        });
    };
    UserService.prototype.getContracts = function (token) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.set('token', token);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/getuuids", { params: params }).toPromise();
    };
    UserService.prototype.getLocalStorage = function (key) {
        return this.localService.getJsonValue(key);
    };
    UserService.prototype.setLocalStorage = function (key, data) {
        this.localService.setJsonValue(key, data);
    };
    UserService.prototype.getPdf = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('AcunetixId', id);
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/Acunetix/getfile", { params: params, responseType: "text" }).toPromise()];
            });
        });
    };
    UserService.prototype.getCyberScoringPdf = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                params = params.set('cyberscoringId', id);
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/Cyberscoring/getpdffile", { params: params, responseType: "text" }).toPromise()];
            });
        });
    };
    UserService.prototype.loginPartner = function (data) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/user", data).toPromise();
    };
    UserService.prototype.logoutUser = function (val) {
        if (val == "true") {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/logout", { impersonation: val, SendEmail: this.sendEmail });
        }
        else {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/logout", { impersonation: val });
        }
    };
    UserService.prototype.getusertokendata = function (token, recover) {
        if (recover) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.set('isRecoverPassword', recover);
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/getusertokendata?tokensso=" + token, { params: params }).toPromise();
        }
        else {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/getusertokendata?tokensso=" + token).toPromise();
        }
    };
    UserService.prototype.processActivationServices = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getActivationServices().then(function (result) {
                var finalized = true;
                var tempData = result;
                if (localStorage.getItem("skipWizard") === null) {
                    if (tempData.length > 0) {
                        for (var i = 0; i < tempData.length; i++) {
                            if (tempData[i].finalized == false) {
                                finalized = false;
                                break;
                            }
                        }
                    }
                    if (!finalized) {
                        localStorage.setItem('skipWizard', 'true');
                        resolve({ finalized: false });
                    }
                    else {
                        localStorage.setItem('skipWizard', 'false');
                        resolve({ finalized: true });
                    }
                }
                else {
                    resolve({ finalized: true });
                }
            });
        });
    };
    UserService.prototype.getActivationServices = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/GetWizardAllStatus").toPromise()];
            });
        });
    };
    UserService.prototype.getFamilyProfiles = function (userId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + ("api/User/FamilyProfiles?userId=" + userId)).toPromise();
    };
    UserService.prototype.addUserProfile = function (dto) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/userProfile", dto).toPromise();
    };
    UserService.prototype.editUserProfile = function (dto) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/userProfile", dto).toPromise();
    };
    UserService.prototype.deleteUserProfile = function (dto) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/delUserProfile", dto).toPromise();
    };
    UserService.prototype.getUserProfileData = function (userProfileId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + ("api/User/UserProfileData?userProfileId=" + userProfileId)).toPromise();
    };
    UserService.prototype.getUserOrangeExpert = function (data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiEndpoint + "api/User/loginOrangeTuExperto", data);
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_13__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_14__["LocalService"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _language_service__WEBPACK_IMPORTED_MODULE_13__["LanguageService"] }, { type: _local_service__WEBPACK_IMPORTED_MODULE_14__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "rdml":
/*!*********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tooltip_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.enums */ "bVYc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




var _c0 = function (a0, a1) { return [a0, a1]; };
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.position = _tooltip_enums__WEBPACK_IMPORTED_MODULE_1__["TooltipPosition"].DEFAULT;
        this.theme = _tooltip_enums__WEBPACK_IMPORTED_MODULE_1__["TooltipTheme"].DEFAULT;
        this.tooltip = '';
        this.left = 0;
        this.top = 0;
        this.visible = false;
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["tooltip"]], decls: 2, vars: 11, consts: [[1, "tooltip", 3, "ngClass"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.left + "px")("top", ctx.top + "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tooltip--visible", ctx.visible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, "tooltip--" + ctx.position, "tooltip--" + ctx.theme));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tooltip, "\n");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: black;\n  border-radius: 4px;\n  color: #ffffff;\n  font-family: Arial;\n  padding: 6px 16px;\n  font-size: 12px;\n  font-family: \"RobotoRegular\";\n  opacity: 0;\n  width: -moz-max-content;\n  width: max-content;\n}\n.tooltip[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.tooltip--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 300ms;\n}\n.tooltip--light[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.tooltip--light[_ngcontent-%COMP%]::before {\n  border: 5px solid white;\n}\n.tooltip--dark[_ngcontent-%COMP%] {\n  background-color: #0349FE;\n  color: white;\n}\n.tooltip--dark[_ngcontent-%COMP%]::before {\n  border: 5px solid #0349FE;\n}\n.tooltip--below[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n  margin-top: 7px;\n}\n.tooltip--below[_ngcontent-%COMP%]::before {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-top: none;\n  left: calc(50% - 5px);\n  top: -5px;\n}\n.tooltip--above[_ngcontent-%COMP%] {\n  transform: translate(-50%, -100%);\n  margin-bottom: 7px;\n}\n.tooltip--above[_ngcontent-%COMP%]::before {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom: none;\n  left: calc(50% - 5px);\n  bottom: -5px;\n}\n.tooltip--left[_ngcontent-%COMP%] {\n  transform: translate(calc(-100% - 7px), -50%);\n}\n.tooltip--left[_ngcontent-%COMP%]::before {\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-right: none;\n  right: -5px;\n  top: calc(50% - 5px);\n}\n.tooltip--right[_ngcontent-%COMP%] {\n  transform: translateY(-50%);\n  margin-left: 7px;\n}\n.tooltip--right[_ngcontent-%COMP%]::before {\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-left: none;\n  left: -5px;\n  top: calc(50% - 5px);\n}\n.tooltip--dynamic[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.tooltip--dynamic[_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSx1QkFBQTtBQUROO0FBS0U7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBRUUseUJBQUE7QUFMTjtBQVNFO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0FBUEo7QUFTSTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQVBOO0FBV0U7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FBVEo7QUFXSTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVROO0FBYUU7RUFDRSw2Q0FBQTtBQVhKO0FBYUk7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFYTjtBQWVFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQWJKO0FBZUk7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFiTjtBQWlCRTtFQUNFLGlCQUFBO0FBZko7QUFpQkk7RUFDRSxhQUFBO0FBZk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgJi0tdmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICB9XG5cbiAgJi0tbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAmLS1kYXJrIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0OUZFO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAvLyBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMzQ5RkU7XG4gICAgfVxuICB9XG5cbiAgJi0tYmVsb3cge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1hcmdpbi10b3A6IDdweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICAgIHRvcDogLTVweDtcbiAgICB9XG4gIH1cblxuICAmLS1hYm92ZSB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgIH1cbiAgfVxuXG4gICYtLWxlZnQge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoY2FsYygtMTAwJSAtIDdweCksIC01MCUpO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICByaWdodDogLTVweDtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xuICAgIH1cbiAgfVxuXG4gICYtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICB9XG4gIH1cblxuICAmLS1keW5hbWljIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return TooltipComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tooltip',
                templateUrl: './tooltip.component.html',
                styleUrls: ['./tooltip.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s3jE":
/*!*******************************************!*\
  !*** ./src/app/services/local.service.ts ***!
  \*******************************************/
/*! exports provided: LocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalService", function() { return LocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "n90K");




var LocalService = /** @class */ (function () {
    function LocalService(storageService) {
        this.storageService = storageService;
    }
    // Set the json data to local 
    LocalService.prototype.setJsonValue = function (key, value) {
        this.storageService.secureStorage.setItem(key, value);
    };
    // Get the json value from local 
    LocalService.prototype.getJsonValue = function (key) {
        return this.storageService.secureStorage.getItem(key);
    }; // Clear the local 
    LocalService.prototype.clearToken = function () {
        return this.storageService.secureStorage.clear();
    };
    LocalService.ɵfac = function LocalService_Factory(t) { return new (t || LocalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
    LocalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalService, factory: LocalService.ɵfac, providedIn: 'root' });
    return LocalService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getChatData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/chatdata?serviceId=" + this.serviceId);
    };
    ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
    return ChatService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "t2gh":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.service */ "tZre");












var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, router, translate, messageService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.translate = translate;
        this.messageService = messageService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 403 || err.status === 401) {
                _this.translate.get('SESSION_EXPIRED').subscribe(function (res) { return _this.messageService.add(res, "error"); });
                _this.authenticationService.localLogout();
            }
            else if (err.status === 404) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
            else if (err.status === 501) // User exists in DB
             {
                _this.messageService.add("No se ha podido crear usuario (previamente creado en BBDD)", "error");
            }
            else if (err.status === 502) // User needs eid
             {
                _this.messageService.add("No se ha podido crear usuario (External ID necesario para este partner)", "error");
            }
            else if (err.status === 504) // Timeout
             {
                _this.messageService.add("La operación se está demorando. Espere un momento.", "ok");
            }
            else {
                _this.router.navigate(['/offline']);
            }
        }));
    };
    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
    return ErrorInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "tCwg":
/*!******************************************!*\
  !*** ./src/app/services/call.service.ts ***!
  \******************************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");








var CallService = /** @class */ (function () {
    function CallService(http, partnerservice) {
        this.http = http;
        this.partnerservice = partnerservice;
    }
    CallService.prototype.getToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var code, params;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                code = this.partnerservice.partner.apiKey;
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                // params = params.set("user", user);
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/call/GetToken?code=" + code, params, { responseType: 'text' }).toPromise().then(function (res) {
                        _this.Token = res;
                    })];
            });
        });
    };
    CallService.ɵfac = function CallService_Factory(t) { return new (t || CallService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__["PartnerService"])); };
    CallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CallService, factory: CallService.ɵfac, providedIn: 'root' });
    return CallService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__["PartnerService"] }]; }, null); })();


/***/ }),

/***/ "tUgU":
/*!******************************************************************!*\
  !*** ./src/app/components/common/messages/messages.component.ts ***!
  \******************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MessagesComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.text);
} }
function MessagesComponent_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.text);
} }
function MessagesComponent_div_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.text);
} }
function MessagesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessagesComponent_div_0_div_1_div_1_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesComponent_div_0_div_1_div_2_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessagesComponent_div_0_div_1_div_3_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.state == "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.state == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r2.state == "info");
} }
var _c0 = function () { return { "margin-bottom": "12vh" }; };
var _c1 = function () { return {}; };
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessagesComponent_div_0_div_1_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.messageService.user.roleId === 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("@fadeDownUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
} }
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
        this.isOpen = true;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    MessagesComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.messageService.messages.length > 0) {
                _this.messageService.messages.forEach(function (element) {
                    element.timeLeft--;
                });
                _this.messageService.messages.forEach(function (element, i) {
                    if (element.timeLeft <= 0) {
                        _this.messageService.messages.splice(i, 1);
                    }
                });
            }
        }, 1000);
    };
    MessagesComponent.prototype.delete = function (index) {
        this.messageService.messages.splice(index, 1);
        this.isOpen = false;
    };
    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [["class", "message-component", 3, "ngStyle", 4, "ngIf"], [1, "message-component", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["class", "card-message", "style", "background:#14BD44;", 4, "ngIf"], ["class", "card-message", "style", "background:#EB1919;", 4, "ngIf"], ["class", "card-message", "style", "background: #14bd44cc;", 4, "ngIf"], [1, "card-message", 2, "background", "#14BD44"], [1, "ds-r-regular", "ds-body-primary", "ds-c-white"], [1, "card-message", 2, "background", "#EB1919"], [1, "card-message", 2, "background", "#14bd44cc"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 2, 5, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2, data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeDownUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(100%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1,
                    }))),
                ])
            ] } });
    return MessagesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeDownUp', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateY(100%)',
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1,
                        }))),
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/message */ "qZOq");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "2hxB");
/* harmony import */ var _local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local.service */ "s3jE");






var MessageService = /** @class */ (function () {
    function MessageService(localService) {
        this.localService = localService;
        this.messages = [];
    }
    MessageService.prototype.getLocalStorage = function (key) {
        return this.localService.getJsonValue(key);
    };
    MessageService.prototype.add = function (message, state) {
        this.user = this.getLocalStorage('currentUser');
        if (this.user == null) {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
            this.user.roleId = 1;
        }
        var messageObj = new _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"]();
        messageObj.state = state;
        messageObj.text = message;
        if (this.user.roleId === 4) { // If is admin
            if (messageObj.state === "ok" || messageObj.state === "info") {
                messageObj.timeLeft = 5;
            }
            else {
                messageObj.timeLeft = 7;
            }
        }
        else { // Other users
            messageObj.timeLeft = 7;
        }
        this.messages.push(messageObj);
    };
    MessageService.prototype.clear = function () {
        this.messages.splice(0, 1);
    };
    MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"])); };
    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
    return MessageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "uP/V":
/*!*******************************************************!*\
  !*** ./src/app/guards/is-residential-layout.guard.ts ***!
  \*******************************************************/
/*! exports provided: IsResidentialLayoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsResidentialLayoutGuard", function() { return IsResidentialLayoutGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_suite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/suite.service */ "Zknh");






var IsResidentialLayoutGuard = /** @class */ (function () {
    function IsResidentialLayoutGuard(router, suiteService) {
        this.router = router;
        this.suiteService = suiteService;
    }
    IsResidentialLayoutGuard.prototype.canActivate = function () {
        if (this.suiteService.isUnitFamily) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    IsResidentialLayoutGuard.ɵfac = function IsResidentialLayoutGuard_Factory(t) { return new (t || IsResidentialLayoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_suite_service__WEBPACK_IMPORTED_MODULE_2__["SuiteService"])); };
    IsResidentialLayoutGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsResidentialLayoutGuard, factory: IsResidentialLayoutGuard.ɵfac, providedIn: 'root' });
    return IsResidentialLayoutGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsResidentialLayoutGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_suite_service__WEBPACK_IMPORTED_MODULE_2__["SuiteService"] }]; }, null); })();


/***/ }),

/***/ "uqof":
/*!*************************************************************!*\
  !*** ./src/app/components/cdk-modal/cdk-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: CDKModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDKModalComponent", function() { return CDKModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cdk-modal-ref */ "UdKV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CDKModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
var CDKModalComponent = /** @class */ (function () {
    function CDKModalComponent(modalRef) {
        this.modalRef = modalRef;
    }
    CDKModalComponent.prototype.ngOnInit = function () {
        this.component = this.modalRef.component;
    };
    CDKModalComponent.ɵfac = function CDKModalComponent_Factory(t) { return new (t || CDKModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__["CDKModalRef"])); };
    CDKModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CDKModalComponent, selectors: [["app-cdk-modal"]], decls: 1, vars: 1, consts: [[4, "ngComponentOutlet"]], template: function CDKModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CDKModalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.component);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZGstbW9kYWwvY2RrLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nkay1tb2RhbC9jZGstbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"] });
    return CDKModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CDKModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cdk-modal',
                templateUrl: './cdk-modal.component.html',
                styleUrls: ['./cdk-modal.component.scss'],
            }]
    }], function () { return [{ type: _services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__["CDKModalRef"] }]; }, null); })();


/***/ }),

/***/ "utrB":
/*!**************************************************************!*\
  !*** ./src/app/dynamic-render/render-component.directive.ts ***!
  \**************************************************************/
/*! exports provided: RenderComponentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderComponentDirective", function() { return RenderComponentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var RenderComponentDirective = /** @class */ (function () {
    function RenderComponentDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    RenderComponentDirective.ɵfac = function RenderComponentDirective_Factory(t) { return new (t || RenderComponentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
    RenderComponentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RenderComponentDirective, selectors: [["", "render-component", ""]] });
    return RenderComponentDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderComponentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[render-component]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "v6WZ":
/*!*************************************************************!*\
  !*** ./src/app/components/fra-tabs/shared/tab-templates.ts ***!
  \*************************************************************/
/*! exports provided: FrabTabTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrabTabTemplate", function() { return FrabTabTemplate; });
var FrabTabTemplate;
(function (FrabTabTemplate) {
    FrabTabTemplate[FrabTabTemplate["ServiceTemplate"] = 0] = "ServiceTemplate";
    FrabTabTemplate[FrabTabTemplate["NotificationTemplate"] = 1] = "NotificationTemplate";
    FrabTabTemplate[FrabTabTemplate["PartnerTempplate"] = 2] = "PartnerTempplate";
})(FrabTabTemplate || (FrabTabTemplate = {}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/layout.component */ "9KET");
/* harmony import */ var _guards_activation_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/activation.guard */ "Vf+f");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_is_enterprise_layout_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/is-enterprise-layout.guard */ "P97S");
/* harmony import */ var _guards_is_residential_layout_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/is-residential-layout.guard */ "uP/V");









var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.all(/*! import() | modules-security-security-module */[__webpack_require__.e("default~modules-home-home-module~modules-security-security-module~modules-service-service-module"), __webpack_require__.e("default~modules-my-profile-my-profile-module~modules-security-security-module~modules-user-managment~bbd46909"), __webpack_require__.e("common"), __webpack_require__.e("modules-security-security-module")]).then(__webpack_require__.bind(null, /*! ./modules/security/security.module */ "t5c3")).then(function (m) { return m.SecurityModule; }); }
    },
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: 'profile',
                loadChildren: function () { return Promise.all(/*! import() | modules-my-profile-my-profile-module */[__webpack_require__.e("default~modules-my-profile-my-profile-module~modules-security-security-module~modules-user-managment~bbd46909"), __webpack_require__.e("default~modules-my-profile-my-profile-module~modules-user-managment-user-managment-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-my-profile-my-profile-module")]).then(__webpack_require__.bind(null, /*! ./modules/my-profile/my-profile.module */ "394V")).then(function (m) { return m.MyProfileModule; }); }
            },
            {
                path: 'home',
                canActivate: [_guards_activation_guard__WEBPACK_IMPORTED_MODULE_3__["ActivationGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | modules-home-home-module */[__webpack_require__.e("default~modules-home-home-module~modules-security-security-module~modules-service-service-module"), __webpack_require__.e("default~modules-home-home-module~modules-poc-poc-module~modules-service-service-module"), __webpack_require__.e("default~modules-home-home-module~modules-service-service-module"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "iydT")).then(function (m) { return m.HomeModule; }); }
            },
            {
                path: 'user-managment',
                canActivate: [_guards_activation_guard__WEBPACK_IMPORTED_MODULE_3__["ActivationGuard"], _guards_is_enterprise_layout_guard__WEBPACK_IMPORTED_MODULE_5__["IsEnterpriseLayoutGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | modules-user-managment-user-managment-module */[__webpack_require__.e("default~modules-my-profile-my-profile-module~modules-security-security-module~modules-user-managment~bbd46909"), __webpack_require__.e("default~modules-my-profile-my-profile-module~modules-user-managment-user-managment-module"), __webpack_require__.e("modules-user-managment-user-managment-module")]).then(__webpack_require__.bind(null, /*! ./modules/user-managment/user-managment.module */ "bf+u")).then(function (m) { return m.UserManagmentModule; }); }
            },
            {
                path: 'service',
                canActivate: [_guards_activation_guard__WEBPACK_IMPORTED_MODULE_3__["ActivationGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | modules-service-service-module */[__webpack_require__.e("default~modules-home-home-module~modules-security-security-module~modules-service-service-module"), __webpack_require__.e("default~modules-home-home-module~modules-poc-poc-module~modules-service-service-module"), __webpack_require__.e("default~modules-home-home-module~modules-service-service-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-service-service-module")]).then(__webpack_require__.bind(null, /*! ./modules/service/service.module */ "Kvak")).then(function (m) { return m.ServiceModule; }); }
            },
            {
                path: 'family-unit',
                canActivate: [_guards_activation_guard__WEBPACK_IMPORTED_MODULE_3__["ActivationGuard"], _guards_is_residential_layout_guard__WEBPACK_IMPORTED_MODULE_6__["IsResidentialLayoutGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | modules-poc-poc-module */[__webpack_require__.e("default~modules-home-home-module~modules-poc-poc-module~modules-service-service-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-poc-poc-module")]).then(__webpack_require__.bind(null, /*! ./modules/poc/poc.module */ "3SjU")).then(function (m) { return m.PocModule; }); }
            },
            {
                path: 'poc',
                canActivate: [_guards_activation_guard__WEBPACK_IMPORTED_MODULE_3__["ActivationGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | modules-poc-poc-module */[__webpack_require__.e("default~modules-home-home-module~modules-poc-poc-module~modules-service-service-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-poc-poc-module")]).then(__webpack_require__.bind(null, /*! ./modules/poc/poc.module */ "3SjU")).then(function (m) { return m.PocModule; }); }
            },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vcuW":
/*!******************************************************************!*\
  !*** ./src/app/components/fra-tabs/fra-tab/fra-tab.component.ts ***!
  \******************************************************************/
/*! exports provided: FraTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraTabComponent", function() { return FraTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var _c0 = ["*"];
var FraTabComponent = /** @class */ (function () {
    function FraTabComponent() {
        this.active = false;
        this.notification = true;
        this.showNotificationAsNoReaded = false;
        this.showDeleteAllButton = false;
    }
    FraTabComponent.ɵfac = function FraTabComponent_Factory(t) { return new (t || FraTabComponent)(); };
    FraTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FraTabComponent, selectors: [["app-fra-tab"]], inputs: { label: "label", name: "name", icon: "icon", title: "title", id: "id", active: "active", notification: "notification", showNotificationAsNoReaded: "showNotificationAsNoReaded", showDeleteAllButton: "showDeleteAllButton", backgroundColor: "backgroundColor" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function FraTabComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJhLXRhYnMvZnJhLXRhYi9mcmEtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FraTabComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FraTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fra-tab',
                templateUrl: './fra-tab.component.html',
                styleUrls: ['./fra-tab.component.scss']
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showNotificationAsNoReaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showDeleteAllButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "xG9v":
/*!**********************************************************!*\
  !*** ./src/app/components/cdk-modal/cdk-modal.module.ts ***!
  \**********************************************************/
/*! exports provided: CDKModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDKModalModule", function() { return CDKModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cdk_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cdk-modal.component */ "uqof");
/* harmony import */ var _services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cdk-modal.service */ "WDzv");





var CDKModalModule = /** @class */ (function () {
    function CDKModalModule() {
    }
    CDKModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CDKModalModule });
    CDKModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CDKModalModule_Factory(t) { return new (t || CDKModalModule)(); }, providers: [_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_3__["CDKModalService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return CDKModalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CDKModalModule, { declarations: [_cdk_modal_component__WEBPACK_IMPORTED_MODULE_2__["CDKModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_cdk_modal_component__WEBPACK_IMPORTED_MODULE_2__["CDKModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CDKModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_cdk_modal_component__WEBPACK_IMPORTED_MODULE_2__["CDKModalComponent"]],
                exports: [_cdk_modal_component__WEBPACK_IMPORTED_MODULE_2__["CDKModalComponent"]],
                entryComponents: [_cdk_modal_component__WEBPACK_IMPORTED_MODULE_2__["CDKModalComponent"]],
                providers: [_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_3__["CDKModalService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ytqg":
/*!*******************************************!*\
  !*** ./src/app/models/recoverPassword.ts ***!
  \*******************************************/
/*! exports provided: RecoverPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPassword", function() { return RecoverPassword; });
var RecoverPassword = /** @class */ (function () {
    function RecoverPassword() {
    }
    return RecoverPassword;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map