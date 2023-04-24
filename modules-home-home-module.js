(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "+Jn9":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/family-unit/family-unit-full-page/family-unit-full-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FamilyUnitFullPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyUnitFullPageComponent", function() { return FamilyUnitFullPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");











var FamilyUnitFullPageComponent = /** @class */ (function () {
    function FamilyUnitFullPageComponent(userService, modalService, localService, sidebarService) {
        this.userService = userService;
        this.modalService = modalService;
        this.localService = localService;
        this.sidebarService = sidebarService;
        this.isloading = true;
    }
    FamilyUnitFullPageComponent.prototype.ngOnInit = function () {
        this.loadServiceInfo();
    };
    FamilyUnitFullPageComponent.prototype.loadServiceInfo = function () {
        var _this = this;
        var identityToken = this.userService.currentUserValue;
        this.sidebarService
            .getServiceInfo(this.data.id, identityToken.partnerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.data = res;
            _this.isloading = false;
        }))
            .subscribe();
    };
    FamilyUnitFullPageComponent.ɵfac = function FamilyUnitFullPageComponent_Factory(t) { return new (t || FamilyUnitFullPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"])); };
    FamilyUnitFullPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FamilyUnitFullPageComponent, selectors: [["app-family-unit-full-page"]], inputs: { data: "data" }, decls: 5, vars: 1, consts: [[1, "d-flex", "ds-mb-24p", "align-items-center"], [1, "ds-h1", "ds-m-bold", "ds-c-black", "ds-mr-24p"]], template: function FamilyUnitFullPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "family-unit-full-page works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5LXVuaXQvZmFtaWx5LXVuaXQtZnVsbC1wYWdlL2ZhbWlseS11bml0LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FamilyUnitFullPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyUnitFullPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-family-unit-full-page',
                templateUrl: './family-unit-full-page.component.html',
                styleUrls: ['./family-unit-full-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"] }, { type: src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal.service */ "WDzv");
/* harmony import */ var src_app_components_custom_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/custom/modal/modal.component */ "1NTe");
/* harmony import */ var src_app_components_instruction_guide_instruction_guide_mobile_instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/instruction-guide/instruction-guide-mobile/instruction-guide-mobile.component */ "TdWr");
/* harmony import */ var src_app_services_backup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/backup.service */ "Ueei");
/* harmony import */ var src_app_services_bitdefendermsp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/bitdefendermsp.service */ "aDds");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/services.service */ "6+PL");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_service_one_page_shared_serviceCategoryCodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../service/service-one-page/shared/serviceCategoryCodes */ "UxC6");
/* harmony import */ var _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_instruction_guide_instruction_guide_web_instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/instruction-guide/instruction-guide-web/instruction-guide-web.component */ "Ozhh");
/* harmony import */ var _cybersecurity_service_cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cybersecurity-service/cybersecurity-service.component */ "x8/L");
/* harmony import */ var _servicess_status_servicess_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./servicess-status/servicess-status.component */ "DdhC");
/* harmony import */ var _expert_support_expert_support_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./expert-support/expert-support.component */ "XVia");
/* harmony import */ var _trendmicro_service_trendmicro_service_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trendmicro-service/trendmicro-service.component */ "aXZo");
/* harmony import */ var _acuetix_service_acuetix_service_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./acuetix-service/acuetix-service.component */ "voSF");
/* harmony import */ var _attack_simulator_service_attack_simulator_service_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./attack-simulator-service/attack-simulator-service.component */ "dOTy");
/* harmony import */ var _bitdefender_service_bitdefender_service_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bitdefender-service/bitdefender-service.component */ "AlY9");
/* harmony import */ var _bitdefendermsm_service_bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bitdefendermsm-service/bitdefendermsm-service.component */ "dpRF");
/* harmony import */ var _user_security_user_security_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user-security/user-security.component */ "paOW");
/* harmony import */ var _components_custom_cybersecurity_questions_cybersecurity_questions_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/custom/cybersecurity-questions/cybersecurity-questions.component */ "WFeL");
/* harmony import */ var _network_protection_network_protection_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./network-protection/network-protection.component */ "4kX4");
/* harmony import */ var _identity_theft_protection_identity_theft_protection_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./identity-theft-protection/identity-theft-protection.component */ "0asI");
/* harmony import */ var _credit_card_fraud_protection_credit_card_fraud_protection_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./credit-card-fraud-protection/credit-card-fraud-protection.component */ "shPI");
/* harmony import */ var _cyberscoring_service_cyberscoring_cyberscoring_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cyberscoring-service/cyberscoring/cyberscoring.component */ "KPHG");
/* harmony import */ var _elearning_service_elearning_service_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./elearning-service/elearning-service.component */ "OqEv");
/* harmony import */ var _gravity_service_gravity_service_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./gravity-service/gravity-service.component */ "9yul");
/* harmony import */ var _geolocation_service_geolocation_service_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./geolocation-service/geolocation-service.component */ "DIzj");
/* harmony import */ var _secure_browsing_secure_browsing_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./secure-browsing/secure-browsing.component */ "VDqy");
/* harmony import */ var _secure_transfer_secure_transfer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./secure-transfer/secure-transfer.component */ "VmzO");
/* harmony import */ var _chat_service_chat_service_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./chat-service/chat-service.component */ "wSxy");
/* harmony import */ var _informative_service_informative_service_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./informative-service/informative-service.component */ "dbYM");
/* harmony import */ var _cpr_service_cpr_service_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cpr-service/cpr-service.component */ "wz8U");
/* harmony import */ var _professional_service_professional_service_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./professional-service/professional-service.component */ "R/mC");
/* harmony import */ var _digital_support_form_digital_support_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./digital-support-form/digital-support-form.component */ "XtDQ");
/* harmony import */ var _antivirus_service_antivirus_service_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./antivirus-service/antivirus-service.component */ "wUwW");
/* harmony import */ var _backup_service_backup_service_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./backup-service/backup-service.component */ "2uoc");
/* harmony import */ var _digital_certificate_service_digital_certificate_service_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./digital-certificate-service/digital-certificate-service.component */ "bN/a");
/* harmony import */ var _digital_life_service_digital_life_service_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./digital-life-service/digital-life-service.component */ "79Z/");
/* harmony import */ var _internet_report_service_internet_report_service_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internet-report-service/internet-report-service.component */ "l6Nc");
/* harmony import */ var _EVD_service_EVD_service_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./EVD-service/EVD-service.component */ "wv23");
/* harmony import */ var _office_activation_service_office_activation_service_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./office-activation-service/office-activation-service.component */ "gqI1");
/* harmony import */ var _agent_service_agent_service_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./agent-service/agent-service.component */ "HflO");
/* harmony import */ var _bitdefender_mobile_bitdefender_mobile_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./bitdefender-mobile/bitdefender-mobile.component */ "lvJS");
/* harmony import */ var _bitdefender_security_bitdefender_security_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./bitdefender-security/bitdefender-security.component */ "aMg4");
/* harmony import */ var _bitdefender_total_bitdefender_total_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./bitdefender-total/bitdefender-total.component */ "KBKL");
/* harmony import */ var _cyber_alarm_cyber_alarm_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./cyber-alarm/cyber-alarm.component */ "E+xT");
/* harmony import */ var _digital_legacy_service_digital_legacy_service_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./digital-legacy-service/digital-legacy-service.component */ "Jnmi");
/* harmony import */ var _digital_will_service_digital_will_service_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./digital-will-service/digital-will-service.component */ "S8rj");
/* harmony import */ var _cadastre_form_service_cadastre_form_service_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./cadastre-form-service/cadastre-form-service.component */ "zzNu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







































































function HomeComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "HOLA"), " ", ctx_r3.userService.currentUserValue.name, " ");
} }
function HomeComponent_ng_container_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.suiteName, " ");
} }
function HomeComponent_ng_container_0_app_instruction_guide_web_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-instruction-guide-web", 11);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("instructionConfig", ctx_r5.instructionConfig)("userName", ctx_r5.userService.currentUserValue.name)("partnerName", ctx_r5.partnerService.partner.name);
} }
function HomeComponent_ng_container_0_button_18_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_container_0_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.goToWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.staticContentUrl + "img/fact_check.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "COMP_USER.SUPPORT_NOTIFICATION.CONTINUE_ACTIVATION"), " ");
} }
function HomeComponent_ng_container_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cybersecurity-service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_0_ng_template_20_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-servicess-status", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finalized", function HomeComponent_ng_container_0_ng_template_20_div_0_Template_app_servicess_status_finalized_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.onJumbotromFinalized($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_0_ng_template_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expert-support", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r13.homeDashboard);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-trendmicro-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-acuetix-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-attack-simulator-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bitdefender-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bitdefendermsm-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-security", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cybersecurity-questions", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serviceCard", true)("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-network-protection", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-identity-theft-protection", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-credit-card-fraud-protection", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cyberscoring", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serviceCard", true)("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-elearning-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gravity-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-geolocation-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secure-browsing", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secure-transfer", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-service", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18)("isCardInHome", true);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-informative-service", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18)("isCardInHome", true);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cpr-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-professional-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-digital-support-form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-antivirus-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-backup-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-digital-certificate-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-digital-life-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-internet-report-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-EVD-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-office-activation-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-agent-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bitdefender-mobile", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bitdefender-security", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bitdefender-total", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cyber-alarm", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-digital-legacy", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-digital-will-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cadastre-form-service", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", service_r18);
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_2_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_3_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_4_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_5_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_6_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_7_Template, 2, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_8_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_9_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_10_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_11_Template, 2, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_12_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_13_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_14_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_15_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_16_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_17_Template, 2, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_18_Template, 2, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_19_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_20_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_21_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_22_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_23_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_24_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_25_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_26_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_27_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_28_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_29_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_30_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_31_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_32_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_33_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_34_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_35_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_div_36_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", service_r18.typeCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "TRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ACU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ATS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MSM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CFR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CII");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CYB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ELE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "GRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "GEO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "NAV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "TNX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "INF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CPR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "FCP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "FSK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "KAV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BAK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "FRC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "FRV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "FRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "EVD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "365");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "AGN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BFM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "CIB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ELD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ETD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "FRD");
} }
function HomeComponent_ng_container_0_ng_template_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_ng_template_20_ng_container_2_div_1_Template, 37, 37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.homeDashboard.services);
} }
function HomeComponent_ng_container_0_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_container_0_ng_template_20_div_0_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_ng_template_20_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_0_ng_template_20_ng_container_2_Template, 2, 1, "ng-container", 18);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.existJumbotron);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.existDigitalSupport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.homeDashboard && ctx_r9.homeDashboard.services && ctx_r9.homeDashboard.services.length);
} }
function HomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_container_0_div_14_Template, 3, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_container_0_div_15_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_ng_container_0_app_instruction_guide_web_16_Template, 1, 3, "app-instruction-guide-web", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_ng_container_0_button_18_Template, 5, 4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_ng_container_0_div_19_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_ng_container_0_ng_template_20_Template, 3, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "ULTIMO_ACCESO"), ":\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 11, ctx_r0.slastPreviousAccessDate.toLocaleString(), "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 14, ctx_r0.slastPreviousAccessDate.toLocaleString(), "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideGreeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hideGreeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instructionConfig && ctx_r0.jumbotromFinalizated && !ctx_r0.instructionGuideSkip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.wizardSkiped);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.existCyberSecurity)("ngIfElse", _r8);
} }
function HomeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.partnerService.preloaderImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var HomeComponent = /** @class */ (function () {
    function HomeComponent(serviceService, partnerService, suiteService, userService, modalService, localService, sidebarService, bitdefendermspService, backupService, route, CDKmodalService) {
        this.serviceService = serviceService;
        this.partnerService = partnerService;
        this.suiteService = suiteService;
        this.userService = userService;
        this.modalService = modalService;
        this.localService = localService;
        this.sidebarService = sidebarService;
        this.bitdefendermspService = bitdefendermspService;
        this.backupService = backupService;
        this.route = route;
        this.CDKmodalService = CDKmodalService;
        this.filteredServices = [];
        this.loading = true;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].STATIC_CONTENT;
        this.existDigitalSupport = false;
        this.existCyberSecurity = false;
        this.existJumbotron = false;
        this.wizardSkiped = false;
        this.instructionGuideSkip = false;
        this.instructionGuideMobileSkip = false;
        this.jumbotromFinalizated = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isMobile = window.screen.width <= 767;
        this.loadHomeServices();
        this.slastPreviousAccessDate = this.userService.currentUserValue.lastPreviousAccessDate.toString().indexOf("Z") >= 0 ?
            this.userService.currentUserValue.lastPreviousAccessDate.toString() : this.userService.currentUserValue.lastPreviousAccessDate.toString() + 'Z';
        this.getNameSuiteAndhideGreeting();
    };
    HomeComponent.prototype.getNameSuiteAndhideGreeting = function () {
        var _this = this;
        this.suiteService.suites.map(function (e) {
            _this.suiteName = e.name;
            _this.hideGreeting = e.hideGreeting;
        });
    };
    HomeComponent.prototype.goToWizard = function () {
        this.route.navigate(['/auto-activation']);
    };
    HomeComponent.prototype.setLocalStorage = function (key, data) {
        this.localService.setJsonValue(key, data);
    };
    HomeComponent.prototype.cardOpenModal = function (name, desc, icon) {
        var modalRef = this.modalService.open(src_app_components_custom_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]);
        modalRef.componentInstance.name = name;
        modalRef.componentInstance.desc = desc;
        modalRef.componentInstance.icon = icon;
    };
    HomeComponent.prototype.loadHomeServices = function () {
        var _this = this;
        var identityToken = this.userService.currentUserValue;
        this.sidebarService
            .getUserServicesDashboard(this.userService.selSuiteId, identityToken.partnerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.homeDashboard = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.showExportSupportCard(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.showJumbotrom(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.showCybersecurityCard(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            if (!_this.existJumbotron) {
                _this.showInstructionGuide();
            }
            else {
                if (_this.isMobile)
                    _this.tourGuideMobile();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.loading = false; }))
            .subscribe();
    };
    HomeComponent.prototype.showJumbotrom = function () {
        this.existJumbotron = !this.homeDashboard || !this.homeDashboard.services || this.homeDashboard.services.length == 0 ? false : true;
        if (!this.existJumbotron) {
            this.jumbotromFinalizated = true;
        }
    };
    HomeComponent.prototype.showExportSupportCard = function () {
        if (this.sidebarService && this.sidebarService.userMenuOptions) {
            this.existDigitalSupport = this.sidebarService.userMenuOptions.some(function (x) { return x.code === _service_service_one_page_shared_serviceCategoryCodes__WEBPACK_IMPORTED_MODULE_15__["ServiceCategoryCodes"].DigitalSupport || x.code === _service_service_one_page_shared_serviceCategoryCodes__WEBPACK_IMPORTED_MODULE_15__["ServiceCategoryCodes"].KIT; });
        }
    };
    HomeComponent.prototype.showCybersecurityCard = function () {
        if (!this.existJumbotron && !this.existDigitalSupport) {
            this.existCyberSecurity = true;
        }
    };
    HomeComponent.prototype.onJumbotromFinalized = function () {
        this.jumbotromFinalizated = true;
        if (!this.isMobile)
            this.tourGuideDesktop();
    };
    HomeComponent.prototype.showInstructionGuide = function () {
        if (this.isMobile) {
            this.tourGuideMobile();
        }
        else {
            this.tourGuideDesktop();
        }
    };
    HomeComponent.prototype.tourGuideMobile = function () {
        var alreadySawTheMobileGuideTour = localStorage.getItem('tourGuideMobileOpen') ? true : false;
        this.instructionGuideMobileSkip = localStorage.getItem('dontShowMobileGuidedTourAgain') ? true : false;
        if (!this.instructionGuideMobileSkip && !alreadySawTheMobileGuideTour) {
            localStorage.setItem('tourGuideMobileOpen', 'true');
            var config = {
                modalClass: ['ds-modal-xs', 'ds-pb-0'],
                position: 'center',
                data: {
                    userName: this.userService.currentUserValue.name,
                    partnerName: this.partnerService.partner.name,
                    instructionConfig: {
                        startedStep: true,
                        hasHomeMenu: this.sidebarService.hasHomeMenu,
                        hasFamilyMenu: this.sidebarService.hasFamilyMenu,
                        hasServices: this.sidebarService.hasServicesMenu,
                        hasJumbotrom: this.existJumbotron,
                    }
                }
            };
            this.CDKmodalService.open(src_app_components_instruction_guide_instruction_guide_mobile_instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_6__["InstructionGuideMobileComponent"], config);
        }
    };
    HomeComponent.prototype.tourGuideDesktop = function () {
        var alreadySawTheWebGuideTour = localStorage.getItem('tourGuideWebOpen') ? true : false;
        this.instructionGuideSkip = localStorage.getItem('dontShowWebGuidedTourAgain') ? true : false;
        if (!alreadySawTheWebGuideTour) {
            localStorage.setItem('tourGuideWebOpen', 'true');
            this.instructionConfig = {
                startedStep: true,
                hasHomeMenu: this.sidebarService.hasHomeMenu,
                hasFamilyMenu: this.sidebarService.hasFamilyMenu,
                hasServices: this.sidebarService.hasServicesMenu,
                hasJumbotrom: this.existJumbotron && this.jumbotromFinalizated,
            };
        }
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_11__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_10__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_12__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_16__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitdefendermsp_service__WEBPACK_IMPORTED_MODULE_8__["BitdefendermspService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backup_service__WEBPACK_IMPORTED_MODULE_7__["BackupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_4__["CDKModalService"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["id", "user-sesion-welcome", 1, "flex-column", "w-50"], [1, "ds-caption", "ds-r-regular", "ds-c-secondary"], ["class", "ds-h1 ds-m-bold ds-c-black", 4, "ngIf"], [3, "instructionConfig", "userName", "partnerName", 4, "ngIf"], [1, "content-home"], ["id", "activation", "style", "margin: 0px 0px 12px ", 3, "click", 4, "ngIf"], ["class", "ds-mb-12p mt-4", 4, "ngIf", "ngIfElse"], ["renderServices", ""], [1, "ds-h1", "ds-m-bold", "ds-c-black"], [3, "instructionConfig", "userName", "partnerName"], ["id", "activation", 2, "margin", "0px 0px 12px", 3, "click"], ["width", "16", 3, "src"], [1, "ml-2"], [1, "ds-mb-12p", "mt-4"], ["class", "ds-mb-12p", 4, "ngIf"], ["class", "ds-mb-12p mt-2", 4, "ngIf"], [4, "ngIf"], [1, "ds-mb-12p"], [3, "finalized"], [1, "ds-mb-12p", "mt-2"], [3, "data"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "ds-mb-12p", 4, "ngSwitchCase"], ["class", "card h-100  ds-mb-12p", 4, "ngSwitchCase"], [1, "card", "h-100", "ds-mb-12p"], [3, "serviceCard", "data"], [3, "data", "isCardInHome"], [1, "app-loading"], [1, "logo"], [3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 22, 17, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _components_instruction_guide_instruction_guide_web_instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_18__["InstructionGuideWebComponent"], _cybersecurity_service_cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_19__["CybersecurityServiceComponent"], _servicess_status_servicess_status_component__WEBPACK_IMPORTED_MODULE_20__["ServicessStatusComponent"], _expert_support_expert_support_component__WEBPACK_IMPORTED_MODULE_21__["ExpertSupportComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitchCase"], _trendmicro_service_trendmicro_service_component__WEBPACK_IMPORTED_MODULE_22__["TrendmicroServiceComponent"], _acuetix_service_acuetix_service_component__WEBPACK_IMPORTED_MODULE_23__["AcuetixServiceComponent"], _attack_simulator_service_attack_simulator_service_component__WEBPACK_IMPORTED_MODULE_24__["AttackSimulatorServiceComponent"], _bitdefender_service_bitdefender_service_component__WEBPACK_IMPORTED_MODULE_25__["BitdefenderServiceComponent"], _bitdefendermsm_service_bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_26__["BitdefenderMSMServiceComponent"], _user_security_user_security_component__WEBPACK_IMPORTED_MODULE_27__["UserSecurityComponent"], _components_custom_cybersecurity_questions_cybersecurity_questions_component__WEBPACK_IMPORTED_MODULE_28__["CybersecurityQuestionsComponent"], _network_protection_network_protection_component__WEBPACK_IMPORTED_MODULE_29__["NetworkProtectionComponent"], _identity_theft_protection_identity_theft_protection_component__WEBPACK_IMPORTED_MODULE_30__["IdentityTheftProtectionComponent"], _credit_card_fraud_protection_credit_card_fraud_protection_component__WEBPACK_IMPORTED_MODULE_31__["CreditCardFraudProtectionComponent"], _cyberscoring_service_cyberscoring_cyberscoring_component__WEBPACK_IMPORTED_MODULE_32__["CyberscoringComponent"], _elearning_service_elearning_service_component__WEBPACK_IMPORTED_MODULE_33__["ElearningServiceComponent"], _gravity_service_gravity_service_component__WEBPACK_IMPORTED_MODULE_34__["GravityServiceComponent"], _geolocation_service_geolocation_service_component__WEBPACK_IMPORTED_MODULE_35__["GeolocationServiceComponent"], _secure_browsing_secure_browsing_component__WEBPACK_IMPORTED_MODULE_36__["SecureBrowsingComponent"], _secure_transfer_secure_transfer_component__WEBPACK_IMPORTED_MODULE_37__["SecureTransferComponent"], _chat_service_chat_service_component__WEBPACK_IMPORTED_MODULE_38__["ChatServiceComponent"], _informative_service_informative_service_component__WEBPACK_IMPORTED_MODULE_39__["InformativeServiceComponent"], _cpr_service_cpr_service_component__WEBPACK_IMPORTED_MODULE_40__["CprServiceComponent"], _professional_service_professional_service_component__WEBPACK_IMPORTED_MODULE_41__["ProfessionalServiceComponent"], _digital_support_form_digital_support_form_component__WEBPACK_IMPORTED_MODULE_42__["DigitalSupportFormComponent"], _antivirus_service_antivirus_service_component__WEBPACK_IMPORTED_MODULE_43__["AntivirusServiceComponent"], _backup_service_backup_service_component__WEBPACK_IMPORTED_MODULE_44__["BackupServiceComponent"], _digital_certificate_service_digital_certificate_service_component__WEBPACK_IMPORTED_MODULE_45__["DigitalCertificateServiceComponent"], _digital_life_service_digital_life_service_component__WEBPACK_IMPORTED_MODULE_46__["DigitalLifeServiceComponent"], _internet_report_service_internet_report_service_component__WEBPACK_IMPORTED_MODULE_47__["InternetReportServiceComponent"], _EVD_service_EVD_service_component__WEBPACK_IMPORTED_MODULE_48__["EVDServiceComponent"], _office_activation_service_office_activation_service_component__WEBPACK_IMPORTED_MODULE_49__["OfficeActivationServiceComponent"], _agent_service_agent_service_component__WEBPACK_IMPORTED_MODULE_50__["AgentServiceComponent"], _bitdefender_mobile_bitdefender_mobile_component__WEBPACK_IMPORTED_MODULE_51__["BitdefenderMobileComponent"], _bitdefender_security_bitdefender_security_component__WEBPACK_IMPORTED_MODULE_52__["BitdefenderSecurityComponent"], _bitdefender_total_bitdefender_total_component__WEBPACK_IMPORTED_MODULE_53__["BitdefenderTotalComponent"], _cyber_alarm_cyber_alarm_component__WEBPACK_IMPORTED_MODULE_54__["CyberAlarmComponent"], _digital_legacy_service_digital_legacy_service_component__WEBPACK_IMPORTED_MODULE_55__["DigitalLegacyServiceComponent"], _digital_will_service_digital_will_service_component__WEBPACK_IMPORTED_MODULE_56__["DigitalWillServiceComponent"], _cadastre_form_service_cadastre_form_service_component__WEBPACK_IMPORTED_MODULE_57__["CadastreFormServiceComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_58__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], styles: ["#user-sesion-welcome[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content-home[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n  padding-bottom: 1rem;\n}\n\n@media only screen and (max-width: 767px) {\n  .content-home[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n\n  #user-sesion-welcome[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXItc2VzaW9uLXdlbGNvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGVudC1ob21lIHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQtaG9tZSB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gICN1c2VyLXNlc2lvbi13ZWxjb21lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_11__["ServicesService"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_10__["PartnerService"] }, { type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_12__["SuiteService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"] }, { type: _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_16__["SidebarService"] }, { type: src_app_services_bitdefendermsp_service__WEBPACK_IMPORTED_MODULE_8__["BitdefendermspService"] }, { type: src_app_services_backup_service__WEBPACK_IMPORTED_MODULE_7__["BackupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_4__["CDKModalService"] }]; }, null); })();


/***/ }),

/***/ "2IQN":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/instruction-guide/instruction-guide-web/instruction-guide-web.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: InstructionGuideWebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionGuideWebModule", function() { return InstructionGuideWebModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction-guide-web.component */ "Ozhh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





var InstructionGuideWebModule = /** @class */ (function () {
    function InstructionGuideWebModule() {
    }
    InstructionGuideWebModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InstructionGuideWebModule });
    InstructionGuideWebModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InstructionGuideWebModule_Factory(t) { return new (t || InstructionGuideWebModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            ]] });
    return InstructionGuideWebModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InstructionGuideWebModule, { declarations: [_instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideWebComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideWebComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionGuideWebModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                ],
                declarations: [_instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideWebComponent"]],
                exports: [_instruction_guide_web_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideWebComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "2lVm":
/*!********************************************************************!*\
  !*** ./src/app/modules/family-unit/components/shared/Timezones.ts ***!
  \********************************************************************/
/*! exports provided: TIMEZONELIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEZONELIST", function() { return TIMEZONELIST; });
var TIMEZONELIST = [
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa",
    "Africa/Algiers",
    "Africa/Asmara",
    "Africa/Bamako",
    "Africa/Bangui",
    "Africa/Banjul",
    "Africa/Bissau",
    "Africa/Blantyre",
    "Africa/Brazzaville",
    "Africa/Bujumbura",
    "Africa/Cairo",
    "Africa/Casablanca",
    "Africa/Ceuta",
    "Africa/Conakry",
    "Africa/Dakar",
    "Africa/Dar_es_Salaam",
    "Africa/Djibouti",
    "Africa/Douala",
    "Africa/El_Aaiun",
    "Africa/Freetown",
    "Africa/Gaborone",
    "Africa/Harare",
    "Africa/Johannesburg",
    "Africa/Juba",
    "Africa/Kampala",
    "Africa/Khartoum",
    "Africa/Kigali",
    "Africa/Kinshasa",
    "Africa/Lagos",
    "Africa/Libreville",
    "Africa/Lome",
    "Africa/Luanda",
    "Africa/Lubumbashi",
    "Africa/Lusaka",
    "Africa/Malabo",
    "Africa/Maputo",
    "Africa/Maseru",
    "Africa/Mbabane",
    "Africa/Mogadishu",
    "Africa/Monrovia",
    "Africa/Nairobi",
    "Africa/Ndjamena",
    "Africa/Niamey",
    "Africa/Nouakchott",
    "Africa/Ouagadougou",
    "Africa/Porto-Novo",
    "Africa/Sao_Tome",
    "Africa/Tripoli",
    "Africa/Tunis",
    "Africa/Windhoek",
    "America/Adak",
    "America/Anchorage",
    "America/Anguilla",
    "America/Antigua",
    "America/Araguaina",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Catamarca",
    "America/Argentina/Cordoba",
    "America/Argentina/Jujuy",
    "America/Argentina/La_Rioja",
    "America/Argentina/Mendoza",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Salta",
    "America/Argentina/San_Juan",
    "America/Argentina/San_Luis",
    "America/Argentina/Tucuman",
    "America/Argentina/Ushuaia",
    "America/Aruba",
    "America/Asuncion",
    "America/Atikokan",
    "America/Bahia",
    "America/Bahia_Banderas",
    "America/Barbados",
    "America/Belem",
    "America/Belize",
    "America/Blanc-Sablon",
    "America/Boa_Vista",
    "America/Bogota",
    "America/Boise",
    "America/Cambridge_Bay",
    "America/Campo_Grande",
    "America/Cancun",
    "America/Caracas",
    "America/Cayenne",
    "America/Cayman",
    "America/Chicago",
    "America/Chihuahua",
    "America/Costa_Rica",
    "America/Creston",
    "America/Cuiaba",
    "America/Curacao",
    "America/Danmarkshavn",
    "America/Dawson",
    "America/Dawson_Creek",
    "America/Denver",
    "America/Detroit",
    "America/Dominica",
    "America/Edmonton",
    "America/Eirunepe",
    "America/El_Salvador",
    "America/Fort_Nelson",
    "America/Fortaleza",
    "America/Glace_Bay",
    "America/Goose_Bay",
    "America/Grand_Turk",
    "America/Grenada",
    "America/Guadeloupe",
    "America/Guatemala",
    "America/Guayaquil",
    "America/Guyana",
    "America/Halifax",
    "America/Havana",
    "America/Hermosillo",
    "America/Indiana/Indianapolis",
    "America/Indiana/Knox",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Tell_City",
    "America/Indiana/Vevay",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Inuvik",
    "America/Iqaluit",
    "America/Jamaica",
    "America/Juneau",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Kralendijk",
    "America/La_Paz",
    "America/Lima",
    "America/Los_Angeles",
    "America/Lower_Princes",
    "America/Maceio",
    "America/Managua",
    "America/Manaus",
    "America/Marigot",
    "America/Martinique",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Menominee",
    "America/Merida",
    "America/Metlakatla",
    "America/Mexico_City",
    "America/Miquelon",
    "America/Moncton",
    "America/Monterrey",
    "America/Montevideo",
    "America/Montserrat",
    "America/Nassau",
    "America/New_York",
    "America/Nipigon",
    "America/Nome",
    "America/Noronha",
    "America/North_Dakota/Beulah",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/Nuuk",
    "America/Ojinaga",
    "America/Panama",
    "America/Pangnirtung",
    "America/Paramaribo",
    "America/Phoenix",
    "America/Port-au-Prince",
    "America/Port_of_Spain",
    "America/Porto_Velho",
    "America/Puerto_Rico",
    "America/Punta_Arenas",
    "America/Rainy_River",
    "America/Rankin_Inlet",
    "America/Recife",
    "America/Regina",
    "America/Resolute",
    "America/Rio_Branco",
    "America/Santarem",
    "America/Santiago",
    "America/Santo_Domingo",
    "America/Sao_Paulo",
    "America/Scoresbysund",
    "America/Sitka",
    "America/St_Barthelemy",
    "America/St_Johns",
    "America/St_Kitts",
    "America/St_Lucia",
    "America/St_Thomas",
    "America/St_Vincent",
    "America/Swift_Current",
    "America/Tegucigalpa",
    "America/Thule",
    "America/Thunder_Bay",
    "America/Tijuana",
    "America/Toronto",
    "America/Tortola",
    "America/Vancouver",
    "America/Whitehorse",
    "America/Winnipeg",
    "America/Yakutat",
    "America/Yellowknife",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville",
    "Antarctica/Macquarie",
    "Antarctica/Mawson",
    "Antarctica/McMurdo",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "Arctic/Longyearbyen",
    "Asia/Aden",
    "Asia/Almaty",
    "Asia/Amman",
    "Asia/Anadyr",
    "Asia/Aqtau",
    "Asia/Aqtobe",
    "Asia/Ashgabat",
    "Asia/Atyrau",
    "Asia/Baghdad",
    "Asia/Bahrain",
    "Asia/Baku",
    "Asia/Bangkok",
    "Asia/Barnaul",
    "Asia/Beirut",
    "Asia/Bishkek",
    "Asia/Brunei",
    "Asia/Chita",
    "Asia/Choibalsan",
    "Asia/Colombo",
    "Asia/Damascus",
    "Asia/Dhaka",
    "Asia/Dili",
    "Asia/Dubai",
    "Asia/Dushanbe",
    "Asia/Famagusta",
    "Asia/Gaza",
    "Asia/Hebron",
    "Asia/Ho_Chi_Minh",
    "Asia/Hong_Kong",
    "Asia/Hovd",
    "Asia/Irkutsk",
    "Asia/Jakarta",
    "Asia/Jayapura",
    "Asia/Jerusalem",
    "Asia/Kabul",
    "Asia/Kamchatka",
    "Asia/Karachi",
    "Asia/Kathmandu",
    "Asia/Khandyga",
    "Asia/Kolkata",
    "Asia/Krasnoyarsk",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Asia/Kuwait",
    "Asia/Macau",
    "Asia/Magadan",
    "Asia/Makassar",
    "Asia/Manila",
    "Asia/Muscat",
    "Asia/Nicosia",
    "Asia/Novokuznetsk",
    "Asia/Novosibirsk",
    "Asia/Omsk",
    "Asia/Oral",
    "Asia/Phnom_Penh",
    "Asia/Pontianak",
    "Asia/Pyongyang",
    "Asia/Qatar",
    "Asia/Qostanay",
    "Asia/Qyzylorda",
    "Asia/Riyadh",
    "Asia/Sakhalin",
    "Asia/Samarkand",
    "Asia/Seoul",
    "Asia/Shanghai",
    "Asia/Singapore",
    "Asia/Srednekolymsk",
    "Asia/Taipei",
    "Asia/Tashkent",
    "Asia/Tbilisi",
    "Asia/Tehran",
    "Asia/Thimphu",
    "Asia/Tokyo",
    "Asia/Tomsk",
    "Asia/Ulaanbaatar",
    "Asia/Urumqi",
    "Asia/Ust-Nera",
    "Asia/Vientiane",
    "Asia/Vladivostok",
    "Asia/Yakutsk",
    "Asia/Yangon",
    "Asia/Yekaterinburg",
    "Asia/Yerevan",
    "Atlantic/Azores",
    "Atlantic/Bermuda",
    "Atlantic/Canary",
    "Atlantic/Cape_Verde",
    "Atlantic/Faroe",
    "Atlantic/Madeira",
    "Atlantic/Reykjavik",
    "Atlantic/South_Georgia",
    "Atlantic/St_Helena",
    "Atlantic/Stanley",
    "Australia/Adelaide",
    "Australia/Brisbane",
    "Australia/Broken_Hill",
    "Australia/Currie",
    "Australia/Darwin",
    "Australia/Eucla",
    "Australia/Hobart",
    "Australia/Lindeman",
    "Australia/Lord_Howe",
    "Australia/Melbourne",
    "Australia/Perth",
    "Australia/Sydney",
    "Europe/Amsterdam",
    "Europe/Andorra",
    "Europe/Astrakhan",
    "Europe/Athens",
    "Europe/Belgrade",
    "Europe/Berlin",
    "Europe/Bratislava",
    "Europe/Brussels",
    "Europe/Bucharest",
    "Europe/Budapest",
    "Europe/Busingen",
    "Europe/Chisinau",
    "Europe/Copenhagen",
    "Europe/Dublin",
    "Europe/Gibraltar",
    "Europe/Guernsey",
    "Europe/Helsinki",
    "Europe/Isle_of_Man",
    "Europe/Istanbul",
    "Europe/Jersey",
    "Europe/Kaliningrad",
    "Europe/Kiev",
    "Europe/Kirov",
    "Europe/Lisbon",
    "Europe/Ljubljana",
    "Europe/London",
    "Europe/Luxembourg",
    "Europe/Madrid",
    "Europe/Malta",
    "Europe/Mariehamn",
    "Europe/Minsk",
    "Europe/Monaco",
    "Europe/Moscow",
    "Europe/Oslo",
    "Europe/Paris",
    "Europe/Podgorica",
    "Europe/Prague",
    "Europe/Riga",
    "Europe/Rome",
    "Europe/Samara",
    "Europe/San_Marino",
    "Europe/Sarajevo",
    "Europe/Saratov",
    "Europe/Simferopol",
    "Europe/Skopje",
    "Europe/Sofia",
    "Europe/Stockholm",
    "Europe/Tallinn",
    "Europe/Tirane",
    "Europe/Ulyanovsk",
    "Europe/Uzhgorod",
    "Europe/Vaduz",
    "Europe/Vatican",
    "Europe/Vienna",
    "Europe/Vilnius",
    "Europe/Volgograd",
    "Europe/Warsaw",
    "Europe/Zagreb",
    "Europe/Zaporozhye",
    "Europe/Zurich",
    "Indian/Antananarivo",
    "Indian/Chagos",
    "Indian/Christmas",
    "Indian/Cocos",
    "Indian/Comoro",
    "Indian/Kerguelen",
    "Indian/Mahe",
    "Indian/Maldives",
    "Indian/Mauritius",
    "Indian/Mayotte",
    "Indian/Reunion",
    "Pacific/Apia",
    "Pacific/Auckland",
    "Pacific/Bougainville",
    "Pacific/Chatham",
    "Pacific/Chuuk",
    "Pacific/Easter",
    "Pacific/Efate",
    "Pacific/Enderbury",
    "Pacific/Fakaofo",
    "Pacific/Fiji",
    "Pacific/Funafuti",
    "Pacific/Galapagos",
    "Pacific/Gambier",
    "Pacific/Guadalcanal",
    "Pacific/Guam",
    "Pacific/Honolulu",
    "Pacific/Kiritimati",
    "Pacific/Kosrae",
    "Pacific/Kwajalein",
    "Pacific/Majuro",
    "Pacific/Marquesas",
    "Pacific/Midway",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Norfolk",
    "Pacific/Noumea",
    "Pacific/Pago_Pago",
    "Pacific/Palau",
    "Pacific/Pitcairn",
    "Pacific/Pohnpei",
    "Pacific/Port_Moresby",
    "Pacific/Rarotonga",
    "Pacific/Saipan",
    "Pacific/Tahiti",
    "Pacific/Tarawa",
    "Pacific/Tongatapu",
    "Pacific/Wake",
    "Pacific/Wallis",
];


/***/ }),

/***/ "7dW1":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/unit-card/unit-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UnitCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitCardComponent", function() { return UnitCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-user-profile/edit-user-profile.component */ "hXJO");
/* harmony import */ var _delte_user_profile_delte_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delte-user-profile/delte-user-profile.component */ "qvdf");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "vpDk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function UnitCardComponent_div_0_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UnitCardComponent_div_0_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UnitCardComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardComponent_div_0_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnitCardComponent_div_0_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardComponent_div_0_button_16_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.openDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "FAMILY_UNIT.BTN_SHOW_INFO"), " ");
} }
function UnitCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UnitCardComponent_div_0_img_4_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnitCardComponent_div_0_img_5_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UnitCardComponent_div_0_div_7_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardComponent_div_0_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UnitCardComponent_div_0_button_16_Template, 4, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.index > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.profile.name, " ", ctx_r0.profile.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fullProfiledata);
} }
function UnitCardComponent_app_edit_user_profile_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-edit-user-profile", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function UnitCardComponent_app_edit_user_profile_1_Template_app_edit_user_profile_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.getEditModalAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profile", ctx_r1.profile);
} }
function UnitCardComponent_app_delte_user_profile_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delte-user-profile", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function UnitCardComponent_app_delte_user_profile_2_Template_app_delte_user_profile_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.getDeleteModalAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profile", ctx_r2.profile);
} }
function UnitCardComponent_app_user_detail_3_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-detail", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function UnitCardComponent_app_user_detail_3_Template_app_user_detail_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.getDetailModalAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profile", ctx_r3.profile)("detail", ctx_r3.fullProfiledata);
} }
function UnitCardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.partnerService.preloaderImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var UnitCardComponent = /** @class */ (function () {
    function UnitCardComponent(modalService, userService, partnerService) {
        this.modalService = modalService;
        this.userService = userService;
        this.partnerService = partnerService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].STATIC_CONTENT;
        this.isOpenEditProfile = false;
        this.isOpenDelete = false;
        this.isOpenDetail = false;
        this.index = 0;
        this.profile = null;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UnitCardComponent.prototype.ngOnInit = function () {
        this.getUserDetailData();
    };
    UnitCardComponent.prototype.openDetail = function () {
        this.isOpenDetail = true;
    };
    UnitCardComponent.prototype.editProfile = function () {
        this.isOpenEditProfile = true;
    };
    UnitCardComponent.prototype.deleteProfile = function () {
        this.isOpenDelete = true;
    };
    UnitCardComponent.prototype.getEditModalAction = function (event) {
        var _this = this;
        if (event.action) {
            this.action.emit(event);
        }
        setTimeout(function () {
            _this.isOpenEditProfile = event.isModalOpen;
        }, 500);
    };
    UnitCardComponent.prototype.getDeleteModalAction = function (event) {
        var _this = this;
        if (event.action) {
            this.action.emit(event);
        }
        setTimeout(function () {
            _this.isOpenDelete = event.isModalOpen;
        }, 500);
    };
    UnitCardComponent.prototype.getDetailModalAction = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.isOpenDetail = event.isModalOpen;
        }, 500);
    };
    UnitCardComponent.prototype.getUserDetailData = function () {
        var _this = this;
        console.log(this.userService.userProfileDetailList);
        this.userService.userProfileDetailList.forEach(function (element, index) {
            if (element.userProfileId === _this.profile.userProfileId) {
                _this.fullProfiledata = element;
            }
        });
    };
    UnitCardComponent.ɵfac = function UnitCardComponent_Factory(t) { return new (t || UnitCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"])); };
    UnitCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitCardComponent, selectors: [["app-unit-card"]], inputs: { index: "index", profile: "profile" }, outputs: { action: "action" }, decls: 6, vars: 5, consts: [["class", "container card-unit", 4, "ngIf", "ngIfElse"], [3, "profile", "action", 4, "ngIf"], [3, "profile", "detail", "action", 4, "ngIf"], ["loadingTemplate", ""], [1, "container", "card-unit"], [1, "row"], [1, "col-lg"], [1, "head-unit-container"], ["class", "unit-card-img", "alt", "", 3, "src", 4, "ngIf"], [1, "head-icons-container"], ["class", "icon-trash fs-20 main-secondary cursor", 3, "click", 4, "ngIf"], [1, "icon-edit", "fs-20", "main-secondary", "cursor", 3, "click"], [1, "card-unit-info"], [1, "user-name"], ["class", "btn btn-primary wizard-resume-btn d-flex align-items-center justify-content-center", 4, "ngIf"], ["alt", "", 1, "unit-card-img", 3, "src"], [1, "icon-trash", "fs-20", "main-secondary", "cursor", 3, "click"], [1, "btn", "btn-primary", "wizard-resume-btn", "d-flex", "align-items-center", "justify-content-center"], [1, "text-uppercase", 3, "click"], [3, "profile", "action"], [3, "profile", "detail", "action"], [1, "app-unit-loading"], [1, "logo"], [1, "unit-logo", 3, "src"]], template: function UnitCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnitCardComponent_div_0_Template, 17, 7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnitCardComponent_app_edit_user_profile_1_Template, 1, 1, "app-edit-user-profile", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UnitCardComponent_app_delte_user_profile_2_Template, 1, 1, "app-delte-user-profile", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UnitCardComponent_app_user_detail_3_Template, 1, 2, "app-user-detail", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UnitCardComponent_ng_template_4_Template, 3, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile && ctx.fullProfiledata)("ngIfElse", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpenEditProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpenDelete);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpenDetail);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditUserProfileComponent"], _delte_user_profile_delte_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["DelteUserProfileComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".card-unit[_ngcontent-%COMP%] {\n  border: solid 1px #bcc4d4;\n  padding: 0.5rem;\n  border-radius: 8px;\n}\n\n.head-unit-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n.head-icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.card-unit-info[_ngcontent-%COMP%] {\n  max-width: 65%;\n  padding: 0.5rem;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.unit-card-img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n}\n\n.app-unit-loading[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white !important;\n  color: #4a3ef3;\n  font-family: \"Roboto\";\n}\n\n.unit-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3VuaXQtY2FyZC91bml0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5LXVuaXQvY29tcG9uZW50cy91bml0LWNhcmQvdW5pdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdW5pdHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmNjNGQ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5oZWFkLXVuaXQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmhlYWQtaWNvbnMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FyZC11bml0LWluZm97XG4gICAgbWF4LXdpZHRoOiA2NSU7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4udXNlci1uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnVuaXQtY2FyZC1pbWd7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG4uYXBwLXVuaXQtbG9hZGluZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoNzQsIDYyLCAyNDMpO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLnVuaXQtbG9nb3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */"] });
    return UnitCardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-unit-card",
                templateUrl: "./unit-card.component.html",
                styleUrls: ["./unit-card.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "CoEj":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/home/security-questionnaire/security-questionnaire.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SecurityQuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionnaireComponent", function() { return SecurityQuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SecurityQuestionnaireComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " El riesgo global de tu empresa es: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "75");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Esta puntuaci\u00F3n es considerada como:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Riesgo alto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " La riesgo por \u00E1rea es: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PERSONAS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "/100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Riesgo bajo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "PERSONAS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "/100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Riesgo bajo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00DAltimo cuestionario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 12/16/2020 - 6:52:13 pm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Puedes hacer el cuestionario todas las veces que quieras para conocer el impacto de las nuevas pol\u00EDticas de seguridad que implementes en tu compa\u00F1\u00EDa. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Hacer cuestionario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " m\u00E1s informaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SecurityQuestionnaireComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Realiza el cuestionario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Eval\u00FAa la situaci\u00F3n de seguridad de tu empresa y averigua c\u00F3mo puedes mejorarla. Al realizar este cuestionario podr\u00E1s conocer con m\u00E1s claridad c\u00F3mo impactan las pol\u00EDticas de seguridad de tu compa\u00F1\u00EDa y si es necesario revisarlas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hacer cuestionario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var SecurityQuestionnaireComponent = /** @class */ (function () {
    function SecurityQuestionnaireComponent() {
    }
    SecurityQuestionnaireComponent.prototype.ngOnInit = function () {
    };
    SecurityQuestionnaireComponent.ɵfac = function SecurityQuestionnaireComponent_Factory(t) { return new (t || SecurityQuestionnaireComponent)(); };
    SecurityQuestionnaireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecurityQuestionnaireComponent, selectors: [["app-security-questionnaire"]], decls: 11, vars: 2, consts: [[1, "ds-card"], [1, "ds-card-header", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "icon-formulario-ciberseguridad", "mr-2"], [1, "ds-h4", "ds-m-bold", "ds-c-black"], [1, "icon-info", "ds-header-icon-right"], [1, "ds-card-body"], [4, "ngIf", "ngIfElse"], ["NoAswerQuestionYet", ""], [1, "content-result-questionary"], [1, "result-step"], [1, "ds-h4", "ds-m-bold", "ds-c-black", "ds-mb-16p"], [1, "global-result"], [1, "first-content"], [1, "d-flex", "flex-column"], [1, "ds-m-bold", "ds-fs-48", "ds-c-danger"], [1, "ds-m-bold", "ds-h4", "ds-c-black"], [1, "progress", "global-score-progress", "warning", "ds-mb-24p"], ["role", "progressbar", "aria-valuemin", "5", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "68%"], [1, "second-content"], [1, "ds-r-regular", "ds-caption", "ds-c-black", "ds-mb-4p"], [1, "ds-h2", "ds-m-bold", "ds-c-danger"], [1, "progress-bar-item"], [1, "item-content", "d-flex", "justify-content-between"], [1, "d-flex"], [1, "icon-cuest-cib-personas", "ds-mr-8p"], [1, "ds-r-bold", "ds-fs-14", "ds-c-black", "ds-ml-8p"], [1, "ds-body-primary", "ds-r-bold", "ds-c-black"], [1, "ds-body-secondary", "ds-r-regular", "ds-c-black", 2, "margin-top", "2px"], [1, "ds-body-secondary", "ds-r-bold", "ds-c-black"], [1, "continue-step"], [1, "ds-h4", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", "ds-mb-24p"], [1, "btn", "btn-primary", "ds-mb-12p"], [1, "btn", "btn-outline-secondary", "ds-r-bold", "ds-t-uppercase"], [1, "w-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "max-w-778p"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "icon-formulario-ciberseguridad", "cyber-main-icon", "ds-c-primary", "ds-mb-10p"], [1, "ds-h2", "ds-m-bold", "ds-c-black", "ds-mb-8p"], [1, "ds-t-center", "ds-body-primary", "ds-r-regular", "ds-mb-12p"], [1, "btn", "btn-primary"]], template: function SecurityQuestionnaireComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cuestionario de ciberseguridad ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SecurityQuestionnaireComponent_ng_container_8_Template, 66, 0, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SecurityQuestionnaireComponent_ng_template_9_Template, 10, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".content-result-questionary[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 66.6%;\n  margin-right: 24px;\n  border-right: 2px solid #ECF1F8;\n}\n.content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 24px;\n  align-items: center;\n}\n.content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%]   .first-content[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 24px;\n}\n.content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%]   .second-content[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40%;\n}\n.content-result-questionary[_ngcontent-%COMP%]   .continue-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  width: 33.3%;\n  padding: 0px 24px;\n}\n.global-score-progress[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-height: 9px !important;\n  background: #ffffff !important;\n  border-radius: 8px !important;\n}\n.global-score-progress.danger[_ngcontent-%COMP%] {\n  border: 1px solid #EB1919;\n}\n.global-score-progress.warning[_ngcontent-%COMP%] {\n  border: 1px solid #FFC507;\n}\n.global-score-progress.success[_ngcontent-%COMP%] {\n  border: 1px solid #14BD44;\n}\n.progress-bar-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 8px;\n  border: 2px solid #FFE4C4;\n}\n.progress-bar-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8px 16px;\n}\n.progress-bar-item[_ngcontent-%COMP%]::before {\n  content: \" \";\n  position: absolute;\n  width: 30%;\n  height: 100%;\n  background-color: #FFE4C4;\n  border-radius: 8px;\n}\n@media screen and (max-width: 1200px) {\n  .content-result-questionary[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 24px;\n    border-right: none;\n    border-bottom: 2px solid #ECF1F8;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%]   .first-content[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n    width: 100%;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%]   .second-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .continue-step[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 24px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .content-result-questionary[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 24px;\n    border-right: none;\n    border-bottom: 2px solid #ECF1F8;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%]   .first-content[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n    width: 100%;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .result-step[_ngcontent-%COMP%]   .global-result[_ngcontent-%COMP%]   .second-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .content-result-questionary[_ngcontent-%COMP%]   .continue-step[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3NlY3VyaXR5LXF1ZXN0aW9ubmFpcmUvc2VjdXJpdHktcXVlc3Rpb25uYWlyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFFTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQVI7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFISjtBQVVBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQVBGO0FBU0U7RUFDRSx5QkFBQTtBQVBKO0FBVUU7RUFDRSx5QkFBQTtBQVJKO0FBV0U7RUFDRSx5QkFBQTtBQVRKO0FBY0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFYRjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQVZKO0FBY0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFYRjtBQWNBO0VBRUU7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQVpGO0VBYUU7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdDQUFBO0VBWEo7RUFhSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQVhOO0VBWU07SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUFWUjtFQWFNO0lBQ0UsV0FBQTtFQVhSO0VBZ0JFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBZEo7QUFDRjtBQXFCQTtFQUVFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFwQkY7RUFxQkU7SUFDRSxXQUFBO0lBRUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdDQUFBO0VBcEJKO0VBc0JJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBcEJOO0VBcUJNO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBbkJSO0VBc0JNO0lBQ0UsV0FBQTtFQXBCUjtFQXlCRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQXZCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3NlY3VyaXR5LXF1ZXN0aW9ubmFpcmUvc2VjdXJpdHktcXVlc3Rpb25uYWlyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXJlc3VsdC1xdWVzdGlvbmFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLnJlc3VsdC1zdGVwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDY2LjYlO1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRUNGMUY4O1xuXG4gICAgJiAuZ2xvYmFsLXJlc3VsdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYgLmZpcnN0LWNvbnRlbnR7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgIH1cblxuICAgICAgJiAuc2Vjb25kLWNvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRpbnVlLXN0ZXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzMuMyU7XG4gICAgcGFkZGluZzogMHB4IDI0cHg7XG4gIH1cbn1cblxuXG5cblxuLmdsb2JhbC1zY29yZS1wcm9ncmVzc3tcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA5cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcblxuICAmLmRhbmdlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VCMTkxOTtcbiAgfVxuXG4gICYud2FybmluZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzUwNztcbiAgfVxuXG4gICYuc3VjY2VzcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE0QkQ0NDtcbiAgfVxufVxuXG5cbi5wcm9ncmVzcy1iYXItaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZFNEM0O1xuICAmIC5pdGVtLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgfVxufVxuXG4ucHJvZ3Jlc3MtYmFyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTRDNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblxuICAuY29udGVudC1yZXN1bHQtcXVlc3Rpb25hcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5yZXN1bHQtc3RlcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VDRjFGODtcblxuICAgICAgJiAuZ2xvYmFsLXJlc3VsdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICYgLmZpcnN0LWNvbnRlbnR7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJiAuc2Vjb25kLWNvbnRlbnR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGludWUtc3RlcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG5cblxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgLmNvbnRlbnQtcmVzdWx0LXF1ZXN0aW9uYXJ5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAucmVzdWx0LXN0ZXAge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VDRjFGODtcblxuICAgICAgJiAuZ2xvYmFsLXJlc3VsdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICYgLmZpcnN0LWNvbnRlbnR7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJiAuc2Vjb25kLWNvbnRlbnR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGludWUtc3RlcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG5cblxufVxuIl19 */"] });
    return SecurityQuestionnaireComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityQuestionnaireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-questionnaire',
                templateUrl: './security-questionnaire.component.html',
                styleUrls: ['./security-questionnaire.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G+/A":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/security-questionnaire/security-questionnaire.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SecurityQuestionnaireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionnaireModule", function() { return SecurityQuestionnaireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _security_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-questionnaire.component */ "CoEj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");






var SecurityQuestionnaireModule = /** @class */ (function () {
    function SecurityQuestionnaireModule() {
    }
    SecurityQuestionnaireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecurityQuestionnaireModule });
    SecurityQuestionnaireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecurityQuestionnaireModule_Factory(t) { return new (t || SecurityQuestionnaireModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ]] });
    return SecurityQuestionnaireModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecurityQuestionnaireModule, { declarations: [_security_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionnaireComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_security_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionnaireComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityQuestionnaireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
                ],
                declarations: [_security_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionnaireComponent"]],
                exports: [_security_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionnaireComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "HyxC":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0Pcf");
/* harmony import */ var _identity_theft_protection_itp_full_page_itp_full_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity-theft-protection/itp-full-page/itp-full-page.component */ "lG/0");






var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            {
                path: 'identity-protection',
                component: _identity_theft_protection_itp_full_page_itp_full_page_component__WEBPACK_IMPORTED_MODULE_3__["ItpFullPageComponent"],
            }
        ]
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return HomeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "IYLX":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/home/bitdefendermsm-service/msm-info-service/msm-info-service.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: MSMInfoServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMInfoServiceModule", function() { return MSMInfoServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _msm_info_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./msm-info-service.component */ "nwws");






var MSMInfoServiceModule = /** @class */ (function () {
    function MSMInfoServiceModule() {
    }
    MSMInfoServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MSMInfoServiceModule });
    MSMInfoServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MSMInfoServiceModule_Factory(t) { return new (t || MSMInfoServiceModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"],
            ]] });
    return MSMInfoServiceModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MSMInfoServiceModule, { declarations: [_msm_info_service_component__WEBPACK_IMPORTED_MODULE_4__["MSMInfoServiceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"]], exports: [_msm_info_service_component__WEBPACK_IMPORTED_MODULE_4__["MSMInfoServiceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MSMInfoServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"],
                ],
                declarations: [_msm_info_service_component__WEBPACK_IMPORTED_MODULE_4__["MSMInfoServiceComponent"]],
                exports: [_msm_info_service_component__WEBPACK_IMPORTED_MODULE_4__["MSMInfoServiceComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "J4iX":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/unit-card-list/unit-card-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UnitCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitCardListComponent", function() { return UnitCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal.service */ "WDzv");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _add_user_profile_add_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-user-profile/add-user-profile.component */ "uQ+M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function UnitCardListComponent_div_5_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UnitCardListComponent_div_5_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    var profile_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", profile_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UnitCardListComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardListComponent_div_5_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnitCardListComponent_div_5_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardListComponent_div_5_button_17_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "FAMILY_UNIT.BTN_SHOW_INFO"), " ");
} }
function UnitCardListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnitCardListComponent_div_5_img_5_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UnitCardListComponent_div_5_img_6_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UnitCardListComponent_div_5_div_8_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardListComponent_div_5_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UnitCardListComponent_div_5_button_17_Template, 4, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var profile_r2 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !profile_r2.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", profile_r2.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.index > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", profile_r2.name, " ", profile_r2.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fullProfiledata);
} }
function UnitCardListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardListComponent_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "FAMILY_UNIT.ADD_PROFILE"), " ");
} }
var UnitCardListComponent = /** @class */ (function () {
    function UnitCardListComponent(userService, CDKmodalService) {
        var _this = this;
        this.userService = userService;
        this.CDKmodalService = CDKmodalService;
        this.isOpenAddProfile = false;
        this.isOpenResult = false;
        this.isForAdd = false;
        this.count = 0;
        this.items = [];
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STATIC_CONTENT;
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    UnitCardListComponent.prototype.ngOnInit = function () {
        this.items = this.userService.userProfileList;
    };
    UnitCardListComponent.prototype.addProfile = function () {
        var config = {
            modalClass: 'ds-modal-xs',
            position: 'center',
        };
        this.CDKmodalService.open(_add_user_profile_add_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["AddUserProfileComponent"], config);
        // this.modalService.open(AddUserProfileComponent);
        // this.isOpenAddProfile = true;
    };
    // getModalAction(event: any) {
    //   this.selectedProfile = event.profile;
    //   this.isForAdd = event.isForAdd;
    //   setTimeout(() => {
    //     this.isOpenResult = true;
    //     this.isOpenAddProfile = event.isModalOpen;
    //     this.addUserProfile(event.profile)
    //   }, 500);
    // }
    // getResultAction(event: any) {
    //   console.log(event, this.isOpenResult);
    //   setTimeout(() => {
    //     this.isOpenResult = event.isModalOpen;
    //   }, 500);
    // }
    // getUnitAction(event: any) {
    //   console.log(event);
    //   if (event.isFordelete) {
    //     console.log("aqui borra");
    //     this.deleteUserProfile(event.profile);
    //   }
    //   if (event.profile && !event.isFordelete) {
    //     this.selectedProfile = event.profile;
    //     setTimeout(() => {
    //       this.isOpenResult = true;
    //     }, 500);
    //   }
    // }
    UnitCardListComponent.prototype.getFamilyProfiles = function (userId) {
        // this.userService.userProfileList = []
        // this.userService.getFamilyProfiles(userId).then(
        //   (resp: any) => {
        //    this.userService.userProfileList.push(this.profileData[0]);
        //     resp.forEach((element) => {
        //       this.userService.userProfileList.push(element);
        //     });
        //     this.getUserProfileDetail();
        //   },
        //   (error) => {
        //     console.warn(error);
        //   }
        // );
    };
    UnitCardListComponent.prototype.getUserProfileDetail = function () {
        var _this = this;
        this.userService.userProfileDetailList = [];
        this.userService.userProfileList.forEach(function (elemnt, idex) {
            _this.userService.getUserProfileData(elemnt.userProfileId).then(function (resp) {
                resp[0].userProfileId = elemnt.userProfileId;
                if (_this.userService.userProfileList.length >
                    _this.userService.userProfileDetailList.length) {
                    _this.userService.userProfileDetailList.push(resp[0]);
                }
                // this.action.emit(true)
                // this.profileData =  this.userService.userProfileList;
                _this.ngOnInit();
            }, function (error) {
                console.log(error);
            });
        });
    };
    // addUserProfile(profile) {
    //   console.log('añadiendo')
    //   this.getFamilyProfiles(this.currentUser.id)
    // }
    UnitCardListComponent.prototype.deleteUserProfile = function (profile) {
        // let index = this.profileData.indexOf(profile);
        // this.profileData.splice(index, 1);
        // this.userService.deleteUserProfile(profile).then(
        //   (resp) => {
        //     console.log(resp);
        //   },
        //   (error) => {
        //     console.warn(error);
        //   }
        // );
    };
    UnitCardListComponent.ɵfac = function UnitCardListComponent_Factory(t) { return new (t || UnitCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_1__["CDKModalService"])); };
    UnitCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitCardListComponent, selectors: [["app-unit-card-list"]], decls: 7, vars: 2, consts: [[1, "ds-card", "pl-1", "mt-3", "minW-100", "text-center", 2, "padding", "24px"], [1, "card", "w-100", "ml-fix"], [1, "card-body", "pr-0", "pl-0"], [1, "container-fluid", "mt-4"], [1, "row"], ["class", "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3 justify-content-between d-flex flex-column mobile-mb", 4, "ngFor", "ngForOf"], ["class", "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3 justify-content-between d-flex flex-column mobile-mb", 4, "ngIf"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "mb-3", "justify-content-between", "d-flex", "flex-column", "mobile-mb"], [1, "container", "card-unit"], [1, "col-lg"], [1, "head-unit-container"], ["class", "unit-card-img", "alt", "", 3, "src", 4, "ngIf"], [1, "head-icons-container"], ["class", "icon-trash fs-20 main-secondary cursor", 3, "click", 4, "ngIf"], [1, "icon-edit", "fs-20", "main-secondary", "cursor", 3, "click"], [1, "card-unit-info"], [1, "user-name"], ["class", "btn btn-primary wizard-resume-btn d-flex align-items-center justify-content-center", 4, "ngIf"], ["alt", "", 1, "unit-card-img", 3, "src"], [1, "icon-trash", "fs-20", "main-secondary", "cursor", 3, "click"], [1, "btn", "btn-primary", "wizard-resume-btn", "d-flex", "align-items-center", "justify-content-center"], [1, "text-uppercase", 3, "click"], [1, "container", "add-card", 3, "click"], [1, "add-card-info"], [1, "add"], [1, "info", "text-center"]], template: function UnitCardListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnitCardListComponent_div_5_Template, 18, 7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UnitCardListComponent_div_6_Template, 10, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length < 5);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".ml-fix[_ngcontent-%COMP%] {\n  margin-left: 11px;\n}\n\n.add-card[_ngcontent-%COMP%] {\n  border: 2px dashed #BCC4D4;\n  border-radius: 8px;\n}\n\n.add-card-info[_ngcontent-%COMP%] {\n  height: 208px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 1rem;\n  cursor: pointer;\n  color: #BCC4D4;\n}\n\n.add[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.card-unit[_ngcontent-%COMP%] {\n  border: solid 1px #bcc4d4;\n  padding: 0.5rem;\n  border-radius: 8px;\n  height: 100%;\n}\n\n.head-unit-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n.head-icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.card-unit-info[_ngcontent-%COMP%] {\n  max-width: 65%;\n  padding: 0.5rem;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.unit-card-img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n}\n\n.app-unit-loading[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white !important;\n  color: #4a3ef3;\n  font-family: \"Roboto\";\n}\n\n.unit-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3VuaXQtY2FyZC1saXN0L3VuaXQtY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBTUE7RUFDSSxpQkFBQTtBQUhKOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3VuaXQtY2FyZC1saXN0L3VuaXQtY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1sLWZpeHtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbn1cblxuLmFkZC1jYXJke1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQkNDNEQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmFkZC1jYXJkLWluZm97XG4gICAgaGVpZ2h0OiAyMDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjQkNDNEQ0O1xufVxuXG5cblxuXG5cbi5hZGQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5cbi5jYXJkLXVuaXR7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiY2M0ZDQ7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkLXVuaXQtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmhlYWQtaWNvbnMtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FyZC11bml0LWluZm97XG4gIG1heC13aWR0aDogNjUlO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi51c2VyLW5hbWV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi51bml0LWNhcmQtaW1ne1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLmFwcC11bml0LWxvYWRpbmcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2IoNzQsIDYyLCAyNDMpO1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi51bml0LWxvZ297XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */"] });
    return UnitCardListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitCardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-unit-card-list",
                templateUrl: "./unit-card-list.component.html",
                styleUrls: ["./unit-card-list.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_1__["CDKModalService"] }]; }, null); })();


/***/ }),

/***/ "JlOI":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/bitdefendermsm-service/bitdefendermsm-service.module.ts ***!
  \**************************************************************************************/
/*! exports provided: BitdefenderServiceMSMModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitdefenderServiceMSMModule", function() { return BitdefenderServiceMSMModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/custom/modal/modal.module */ "MBzk");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dynamic-render/dynamic-render-component.module */ "Gvde");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/cdk-modal/cdk-modal.module */ "xG9v");
/* harmony import */ var src_app_components_custom_automatic_activation_help_modal_msp_modal_mspmodal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/custom/automatic-activation/help-modal/msp-modal/mspmodal.module */ "LQ1W");
/* harmony import */ var _bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bitdefendermsm-service.component */ "dpRF");
/* harmony import */ var _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./msm-in-process/msm-in-process.component */ "ifMy");
/* harmony import */ var _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./msm-not-started/msm-not-started.component */ "ErP5");
/* harmony import */ var _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./msm-results/msm-results.component */ "hEH7");
/* harmony import */ var _msm_info_service_msm_info_service_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./msm-info-service/msm-info-service.module */ "IYLX");
/* harmony import */ var src_app_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/dropdown/dropdown.module */ "aock");
/* harmony import */ var _poc_add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../poc/add-profile/add-profile.module */ "H2Rf");


















var BitdefenderServiceMSMModule = /** @class */ (function () {
    function BitdefenderServiceMSMModule() {
    }
    BitdefenderServiceMSMModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BitdefenderServiceMSMModule });
    BitdefenderServiceMSMModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BitdefenderServiceMSMModule_Factory(t) { return new (t || BitdefenderServiceMSMModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_8__["CDKModalModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_6__["DynamicRenderComponentModule"],
                _msm_info_service_msm_info_service_module__WEBPACK_IMPORTED_MODULE_14__["MSMInfoServiceModule"],
                src_app_components_custom_automatic_activation_help_modal_msp_modal_mspmodal_module__WEBPACK_IMPORTED_MODULE_9__["MspmodalModule"],
                _poc_add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_16__["AddProfileModule"],
                src_app_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
            ]] });
    return BitdefenderServiceMSMModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BitdefenderServiceMSMModule, { declarations: [_bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_10__["BitdefenderMSMServiceComponent"],
        _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_11__["MSMInProcessComponent"],
        _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_12__["MSMNotStartedComponent"],
        _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_13__["MSMResultsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
        src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_8__["CDKModalModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
        src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_6__["DynamicRenderComponentModule"],
        _msm_info_service_msm_info_service_module__WEBPACK_IMPORTED_MODULE_14__["MSMInfoServiceModule"],
        src_app_components_custom_automatic_activation_help_modal_msp_modal_mspmodal_module__WEBPACK_IMPORTED_MODULE_9__["MspmodalModule"],
        _poc_add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_16__["AddProfileModule"],
        src_app_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"]], exports: [_bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_10__["BitdefenderMSMServiceComponent"],
        _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_11__["MSMInProcessComponent"],
        _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_12__["MSMNotStartedComponent"],
        _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_13__["MSMResultsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitdefenderServiceMSMModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                    src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_8__["CDKModalModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                    src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_6__["DynamicRenderComponentModule"],
                    _msm_info_service_msm_info_service_module__WEBPACK_IMPORTED_MODULE_14__["MSMInfoServiceModule"],
                    src_app_components_custom_automatic_activation_help_modal_msp_modal_mspmodal_module__WEBPACK_IMPORTED_MODULE_9__["MspmodalModule"],
                    _poc_add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_16__["AddProfileModule"],
                    src_app_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                ],
                declarations: [
                    _bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_10__["BitdefenderMSMServiceComponent"],
                    _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_11__["MSMInProcessComponent"],
                    _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_12__["MSMNotStartedComponent"],
                    _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_13__["MSMResultsComponent"]
                ],
                exports: [
                    _bitdefendermsm_service_component__WEBPACK_IMPORTED_MODULE_10__["BitdefenderMSMServiceComponent"],
                    _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_11__["MSMInProcessComponent"],
                    _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_12__["MSMNotStartedComponent"],
                    _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_13__["MSMResultsComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "MRAI":
/*!************************************************************!*\
  !*** ./src/app/modules/family-unit/family-unit.routing.ts ***!
  \************************************************************/
/*! exports provided: FamilyUnitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyUnitRoutingModule", function() { return FamilyUnitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _family_unit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./family-unit.component */ "adnx");





var routes = [
    {
        path: '',
        component: _family_unit_component__WEBPACK_IMPORTED_MODULE_2__["FamilyUnitComponent"]
    },
];
var FamilyUnitRoutingModule = /** @class */ (function () {
    function FamilyUnitRoutingModule() {
    }
    FamilyUnitRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FamilyUnitRoutingModule });
    FamilyUnitRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FamilyUnitRoutingModule_Factory(t) { return new (t || FamilyUnitRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FamilyUnitRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FamilyUnitRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyUnitRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Ozhh":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/instruction-guide/instruction-guide-web/instruction-guide-web.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InstructionGuideWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionGuideWebComponent", function() { return InstructionGuideWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function InstructionGuideWebComponent_div_0_ng_container_1_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_1_ng_container_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.finalize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "WIZARD.BTNS.COMPLETED"));
} }
function InstructionGuideWebComponent_div_0_ng_container_1_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_1_ng_template_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.onNextStep("startedStep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_INSTRUCTION_GUIDE.START_VISIT"), " ");
} }
function InstructionGuideWebComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InstructionGuideWebComponent_div_0_ng_container_1_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.doNotShowAgain($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InstructionGuideWebComponent_div_0_ng_container_1_ng_container_22_Template, 4, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InstructionGuideWebComponent_div_0_ng_container_1_ng_template_23_Template, 4, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Paso 1 de ", ctx_r1.instructionsGuideCards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "COMP_INSTRUCTION_GUIDE.REGARD"), " ", ctx_r1.userName, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "COMP_INSTRUCTION_GUIDE.WELCOME_GUIDE"), " ", ctx_r1.partnerName, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, "COMP_INSTRUCTION_GUIDE.WELCOME_GUIDE2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, "COMP_INSTRUCTION_GUIDE.GUIDED_TOUR_TEXT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getPositionFromList("startedStep") === ctx_r1.instructionsGuideCards.length)("ngIfElse", _r7);
} }
function InstructionGuideWebComponent_div_0_ng_container_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_2_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.finalize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "WIZARD.BTNS.COMPLETED"));
} }
function InstructionGuideWebComponent_div_0_ng_container_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_2_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.onNextStep("hasHomeMenu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_INSTRUCTION_GUIDE.NEXT_TEXT"), " ");
} }
function InstructionGuideWebComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_2_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InstructionGuideWebComponent_div_0_ng_container_2_ng_container_16_Template, 4, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InstructionGuideWebComponent_div_0_ng_container_2_ng_template_17_Template, 4, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.configHomeMenuCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "COMP_INSTRUCTION_GUIDE.STEP_GUIDE"), " ", ctx_r2.getPositionFromList("hasHomeMenu"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "COMP_INSTRUCTION_GUIDE.STEP_GUIDE2"), " ", ctx_r2.instructionsGuideCards.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, "HOME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "COMP_INSTRUCTION_GUIDE.DIRECT_GUIDE_ACCESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getPositionFromList("hasHomeMenu") === ctx_r2.instructionsGuideCards.length)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.configHomeMenuStep);
} }
function InstructionGuideWebComponent_div_0_ng_container_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_3_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.finalize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "WIZARD.BTNS.COMPLETED"));
} }
function InstructionGuideWebComponent_div_0_ng_container_3_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_3_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.onNextStep("hasFamilyMenu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_INSTRUCTION_GUIDE.NEXT_TEXT"), " ");
} }
function InstructionGuideWebComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_3_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InstructionGuideWebComponent_div_0_ng_container_3_ng_container_16_Template, 4, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InstructionGuideWebComponent_div_0_ng_container_3_ng_template_17_Template, 4, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.configFamilyMenuCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "COMP_INSTRUCTION_GUIDE.STEP_GUIDE"), " ", ctx_r3.getPositionFromList("hasFamilyMenu"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "COMP_INSTRUCTION_GUIDE.STEP_GUIDE2"), " ", ctx_r3.instructionsGuideCards.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, "FAMILY_UNIT.MENU_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "COMP_INSTRUCTION_GUIDE.CREATE_MEMBERS_PROFILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getPositionFromList("hasFamilyMenu") === ctx_r3.instructionsGuideCards.length)("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.configFamilyMenuStep);
} }
function InstructionGuideWebComponent_div_0_ng_container_4_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_4_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.finalize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "WIZARD.BTNS.COMPLETED"));
} }
function InstructionGuideWebComponent_div_0_ng_container_4_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_4_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.onNextStep("hasServices"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_INSTRUCTION_GUIDE.NEXT_TEXT"), " ");
} }
function InstructionGuideWebComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_4_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InstructionGuideWebComponent_div_0_ng_container_4_ng_container_16_Template, 4, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InstructionGuideWebComponent_div_0_ng_container_4_ng_template_17_Template, 4, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.configServicesCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "COMP_INSTRUCTION_GUIDE.STEP_GUIDE"), " ", ctx_r4.getPositionFromList("hasServices"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "COMP_INSTRUCTION_GUIDE.STEP_GUIDE2"), " ", ctx_r4.instructionsGuideCards.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, "TUTORIAL.TITLE1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "COMP_INSTRUCTION_GUIDE.BROWSE_ALL_SERVICES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getPositionFromList("hasServices") === ctx_r4.instructionsGuideCards.length)("ngIfElse", _r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.configServicesStep);
} }
function InstructionGuideWebComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_5_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideWebComponent_div_0_ng_container_5_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.finalize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.configJumbotromCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Paso ", ctx_r5.getPositionFromList("hasJumbotrom"), " de ", ctx_r5.instructionsGuideCards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "COMP_INSTRUCTION_GUIDE.STATUS_OF_THE_SERVICES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "COMP_INSTRUCTION_GUIDE.ACTIVE_SERVICES_BAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "WIZARD.BTNS.COMPLETED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.configJumbotromStep);
} }
function InstructionGuideWebComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionGuideWebComponent_div_0_ng_container_1_Template, 25, 17, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InstructionGuideWebComponent_div_0_ng_container_2_Template, 20, 18, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InstructionGuideWebComponent_div_0_ng_container_3_Template, 20, 18, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InstructionGuideWebComponent_div_0_ng_container_4_Template, 20, 18, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InstructionGuideWebComponent_div_0_ng_container_5_Template, 18, 13, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instructionConfig.startedStep && ctx_r0.showFirstStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instructionConfig.hasHomeMenu && ctx_r0.showHomeMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instructionConfig.hasFamilyMenu && ctx_r0.showFamilyMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instructionConfig.hasServices && ctx_r0.showServices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instructionConfig.hasJumbotrom && ctx_r0.showJumbotrom);
} }
var InstructionGuideWebComponent = /** @class */ (function () {
    // temporalCheckBox =
    function InstructionGuideWebComponent() {
        this.showFirstStep = true;
        this.showHomeMenu = false;
        this.showFamilyMenu = false;
        this.showServices = false;
        this.showJumbotrom = false;
        this.finalized = false;
        this.userName = 'Julito';
        this.partnerName = 'Fractalia';
        this.instructionsGuideCards = [];
        var body = document.getElementById("main-body");
        body.classList.add('modal-open');
    }
    InstructionGuideWebComponent.prototype.ngOnInit = function () {
        this.initialSetupList();
        if (this.instructionConfig.hasHomeMenu)
            this.setHomeMenuSetup();
        if (this.instructionConfig.hasFamilyMenu)
            this.setFamilyMenuSetup();
        if (this.instructionConfig.hasServices)
            this.setServicesSetup();
        if (this.instructionConfig.hasJumbotrom)
            this.setJumbotromSetup();
    };
    InstructionGuideWebComponent.prototype.closeModal = function () {
        this.finalized = true;
        this.removeBodyClass();
    };
    InstructionGuideWebComponent.prototype.removeBodyClass = function () {
        var body = document.getElementById("main-body");
        body.classList.remove('modal-open');
    };
    InstructionGuideWebComponent.prototype.onNextStep = function (target) {
        var find = this.instructionsGuideCards.findIndex(function (x) { return x == target; });
        if (find >= 0) {
            var currentStep = this.instructionsGuideCards[find];
            var nextStep = this.instructionsGuideCards[find + 1];
            this.setActionToStep(currentStep, false);
            this.setActionToStep(nextStep, true);
        }
    };
    InstructionGuideWebComponent.prototype.setActionToStep = function (step, action) {
        switch (step) {
            case 'startedStep':
                this.showFirstStep = action;
                break;
            case 'hasHomeMenu':
                this.showHomeMenu = action;
                break;
            case 'hasFamilyMenu':
                this.showFamilyMenu = action;
                break;
            case 'hasServices':
                this.showServices = action;
                break;
            case 'hasJumbotrom':
                this.showJumbotrom = action;
                break;
        }
    };
    InstructionGuideWebComponent.prototype.doNotShowAgain = function (show) {
        if (show) {
            localStorage.setItem('dontShowWebGuidedTourAgain', 'true');
        }
        else {
            localStorage.removeItem('dontShowWebGuidedTourAgain');
        }
    };
    InstructionGuideWebComponent.prototype.finalize = function () {
        localStorage.setItem('dontShowWebGuidedTourAgain', 'true');
        this.closeModal();
    };
    InstructionGuideWebComponent.prototype.setJumbotromSetup = function () {
        var jumbotrom = document.getElementById("jumbotrom");
        var config = jumbotrom.getBoundingClientRect();
        this.configJumbotromStep = {
            top: (config.top - 10) + 'px',
            left: (config.left - 10) + 'px',
            width: (config.width + 20) + 'px',
            height: (config.height + 20) + 'px',
        };
        this.configJumbotromCard = {
            top: (config.top + (config.height) + 40) + 'px',
            left: (config.left + (config.width / 2) - 300) + 'px',
            width: '434px',
            height: 'auto',
        };
    };
    InstructionGuideWebComponent.prototype.setServicesSetup = function () {
        var menuServices = document.getElementById("menu-services");
        var configMenuServices = menuServices.getBoundingClientRect();
        this.configServicesStep = {
            top: (configMenuServices.top - 10) + 'px',
            left: (configMenuServices.left - 10) + 'px',
            width: (configMenuServices.width + 20) + 'px',
            height: (configMenuServices.height + 20) + 'px',
        };
        this.configServicesCard = {
            top: (configMenuServices.top) + 'px',
            left: (configMenuServices.left + configMenuServices.width + 50) + 'px',
            width: '434px',
            height: 'auto',
        };
    };
    InstructionGuideWebComponent.prototype.setFamilyMenuSetup = function () {
        var menuFamily = document.getElementById("family-unit-menu");
        var configMenuFamily = menuFamily.getBoundingClientRect();
        this.configFamilyMenuStep = {
            top: (configMenuFamily.top) + 'px',
            left: (configMenuFamily.left) + 'px',
            width: (configMenuFamily.width) + 'px',
            height: (configMenuFamily.height) + 'px',
        };
        this.configFamilyMenuCard = {
            top: (configMenuFamily.top) + 'px',
            left: (configMenuFamily.left + configMenuFamily.width + 50) + 'px',
            width: '434px',
            height: 'auto',
        };
    };
    InstructionGuideWebComponent.prototype.setHomeMenuSetup = function () {
        var menuHome = document.getElementById("home-menu");
        var configMenuHome = menuHome.getBoundingClientRect();
        this.configHomeMenuStep = {
            top: (configMenuHome.top) + 'px',
            left: (configMenuHome.left) + 'px',
            width: (configMenuHome.width) + 'px',
            height: (configMenuHome.height) + 'px',
        };
        this.configHomeMenuCard = {
            top: (configMenuHome.top) + 'px',
            left: (configMenuHome.left + configMenuHome.width + 50) + 'px',
            width: '434px',
            height: 'auto',
        };
    };
    InstructionGuideWebComponent.prototype.initialSetupList = function () {
        for (var property in this.instructionConfig) {
            if (this.instructionConfig[property]) {
                this.instructionsGuideCards.push(property);
            }
        }
    };
    InstructionGuideWebComponent.prototype.getPositionFromList = function (target) {
        var find = this.instructionsGuideCards.findIndex(function (x) { return x == target; });
        return find >= 0 ? find + 1 : 0;
    };
    InstructionGuideWebComponent.ɵfac = function InstructionGuideWebComponent_Factory(t) { return new (t || InstructionGuideWebComponent)(); };
    InstructionGuideWebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionGuideWebComponent, selectors: [["app-instruction-guide-web"]], inputs: { instructionConfig: "instructionConfig", userName: "userName", partnerName: "partnerName" }, decls: 1, vars: 1, consts: [["class", "cdk-overlay-container", 4, "ngIf"], [1, "cdk-overlay-container"], [4, "ngIf"], [1, "cdk-overlay-backdrop", "cdk-overlay-dark-backdrop", "cdk-overlay-backdrop-showing"], [1, "cdk-global-overlay-wrapper", 2, "justify-content", "center", "align-items", "center"], ["id", "cdk-overlay-0", 1, "cdk-overlay-pane", "ds-modal-container", "ds-modal-sm", 2, "pointer-events", "auto", "position", "static"], [1, "ds-flex-row", "ds-jc-between", "ds-al-center", "ds-mb-24p"], [1, "ds-caption", "ds-r-regular", "ds-c-secondary"], [1, "icon-close", "ds-cur-pointer", "ds-c-secondary", "ds-fs-18", 3, "click"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", "ds-mb-24p"], [1, "ds-mb-32p"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkA1", 1, "custom-control-input", 3, "change"], ["for", "checkA1", 1, "custom-control-label"], [1, "ds-flex-row", "ds-jc-end"], [4, "ngIf", "ngIfElse"], ["Next0", ""], [1, "ds-btn-primary", "ds-t-uppercase", 3, "click"], [1, "ds-ml-8p", "icon-right-big-arrow"], [1, "cdk-overlay-backdrop", "cdk-overlay-backdrop-showing"], [1, "cdk-overlay-pane", "instruction-card", "left-arrow", 3, "ngStyle"], ["Next", ""], [2, "position", "fixed", "box-shadow", "rgba(0, 0, 0, 0.7) 0px 0px 0px 9999px", "z-index", "100", 3, "ngStyle"], ["Next2", ""], ["Next3", ""], [1, "cdk-overlay-pane", "instruction-card", "above-arrow", 3, "ngStyle"]], template: function InstructionGuideWebComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InstructionGuideWebComponent_div_0_Template, 6, 5, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.finalized);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.instruction-card[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 10px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n}\n\n.instruction-card.above-arrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  top: -15px;\n  left: 25px;\n  width: 0px;\n  height: 0px;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 15px solid #ffff;\n  font-size: 0px;\n  line-height: 0px;\n}\n\n.instruction-card.left-arrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 25px;\n  left: -15px;\n  width: 0px;\n  height: 0px;\n  border-bottom: 15px solid transparent;\n  \n  border-top: 15px solid transparent;\n  \n  border-right: 15px solid #fff;\n  \n  font-size: 0px;\n  line-height: 0px;\n}\n\n.custom-control-label[_ngcontent-%COMP%]::before {\n  top: 0px;\n}\n\n.custom-control-label[_ngcontent-%COMP%]::after {\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdGlvbi1ndWlkZS9pbnN0cnVjdGlvbi1ndWlkZS13ZWIvaW5zdHJ1Y3Rpb24tZ3VpZGUtd2ViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZOOztBQU9JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQXVDLHFCQUFBO0VBQ3ZDLGtDQUFBO0VBQW1DLG1CQUFBO0VBQ25DLDZCQUFBO0VBQThCLHVCQUFBO0VBQzlCLGNBQUE7RUFDQSxnQkFBQTtBQUZOOztBQVNBO0VBQ0UsUUFBQTtBQU5GOztBQVNBO0VBQ0UsUUFBQTtBQU5GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdGlvbi1ndWlkZS9pbnN0cnVjdGlvbi1ndWlkZS13ZWIvaW5zdHJ1Y3Rpb24tZ3VpZGUtd2ViLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNzApO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuLmluc3RydWN0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcblxuICAmLmFib3ZlLWFycm93IHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC01cHg7XG4gICAgICB0b3A6IC0xNXB4O1xuICAgICAgbGVmdDogMjVweDtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAmLmxlZnQtYXJyb3cge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDoyNXB4O1xuICAgICAgbGVmdDotMTVweDtcbiAgICAgIHdpZHRoOjBweDtcbiAgICAgIGhlaWdodDowcHg7XG4gICAgICBib3JkZXItYm90dG9tOjE1cHggc29saWQgdHJhbnNwYXJlbnQ7ICAvKiBpenF1aWVyZGEgZmxlY2hhICovXG4gICAgICBib3JkZXItdG9wOjE1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qIGRlcmVjaGEgZmxlY2hhICovXG4gICAgICBib3JkZXItcmlnaHQ6MTVweCBzb2xpZCAjZmZmOyAvKiBiYXNlIGZsZWNoYSB5IGNvbG9yKi9cbiAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICB9XG4gIH1cblxufVxuXG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgdG9wOjBweFxufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgdG9wOjBweFxufVxuIl19 */"] });
    return InstructionGuideWebComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionGuideWebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction-guide-web',
                templateUrl: './instruction-guide-web.component.html',
                styleUrls: ['./instruction-guide-web.component.scss']
            }]
    }], function () { return []; }, { instructionConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], partnerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RJK6":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/cybersecurity-service/cybersecurity-service.module.ts ***!
  \************************************************************************************/
/*! exports provided: CybersecurityServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CybersecurityServiceModule", function() { return CybersecurityServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cybersecurity-service.component */ "x8/L");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");






var CybersecurityServiceModule = /** @class */ (function () {
    function CybersecurityServiceModule() {
    }
    CybersecurityServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CybersecurityServiceModule });
    CybersecurityServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CybersecurityServiceModule_Factory(t) { return new (t || CybersecurityServiceModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ]] });
    return CybersecurityServiceModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CybersecurityServiceModule, { declarations: [_cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_3__["CybersecurityServiceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_3__["CybersecurityServiceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CybersecurityServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
                ],
                declarations: [_cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_3__["CybersecurityServiceComponent"]],
                exports: [_cybersecurity_service_component__WEBPACK_IMPORTED_MODULE_3__["CybersecurityServiceComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "S5MQ":
/*!************************************************************************!*\
  !*** ./src/app/modules/home/default-service/default-service.module.ts ***!
  \************************************************************************/
/*! exports provided: DefaultServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultServiceModule", function() { return DefaultServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _default_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-service.component */ "fgjM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/custom/modal/modal.module */ "MBzk");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");








var DefaultServiceModule = /** @class */ (function () {
    function DefaultServiceModule() {
    }
    DefaultServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultServiceModule });
    DefaultServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultServiceModule_Factory(t) { return new (t || DefaultServiceModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
                src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]
            ]] });
    return DefaultServiceModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultServiceModule, { declarations: [_default_service_component__WEBPACK_IMPORTED_MODULE_2__["DefaultServiceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
        src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
                    src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]
                ],
                declarations: [_default_service_component__WEBPACK_IMPORTED_MODULE_2__["DefaultServiceComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TdWr":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/instruction-guide/instruction-guide-mobile/instruction-guide-mobile.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: InstructionGuideMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionGuideMobileComponent", function() { return InstructionGuideMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../slider/slider.component */ "+zoA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _slider_shared_slide_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../slider/shared/slide.directive */ "4md3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function InstructionGuideMobileComponent_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideMobileComponent_ng_container_5_ng_template_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onNextStep("startedStep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InstructionGuideMobileComponent_ng_container_5_ng_template_1_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.doNotShowAgain($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.staticContentUrl + "img/instruction-guide/step1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, "COMP_INSTRUCTION_GUIDE.REGARD"), " ", ctx_r5.userName, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "COMP_INSTRUCTION_GUIDE.WELCOME_GUIDE"), " ", ctx_r5.partnerName, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "COMP_INSTRUCTION_GUIDE.WELCOME_GUIDE2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, "COMP_INSTRUCTION_GUIDE.START_VISIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "COMP_INSTRUCTION_GUIDE.GUIDED_TOUR_TEXT"));
} }
function InstructionGuideMobileComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionGuideMobileComponent_ng_container_5_ng_template_1_Template, 20, 18, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InstructionGuideMobileComponent_ng_container_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideMobileComponent_ng_container_6_ng_template_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onNextStep("startedStep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.staticContentUrl + "img/instruction-guide/step2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "HOME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "COMP_INSTRUCTION_GUIDE.DIRECT_GUIDE_ACCESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "COMP_INSTRUCTION_GUIDE.NEXT_TEXT"), " ");
} }
function InstructionGuideMobileComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionGuideMobileComponent_ng_container_6_ng_template_1_Template, 14, 10, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InstructionGuideMobileComponent_ng_container_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideMobileComponent_ng_container_7_ng_template_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onNextStep("startedStep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.staticContentUrl + "img/instruction-guide/step3.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "FAMILY_UNIT.MENU_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "COMP_INSTRUCTION_GUIDE.CREATE_MEMBERS_PROFILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "COMP_INSTRUCTION_GUIDE.NEXT_TEXT"), " ");
} }
function InstructionGuideMobileComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionGuideMobileComponent_ng_container_7_ng_template_1_Template, 14, 10, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InstructionGuideMobileComponent_ng_container_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideMobileComponent_ng_container_8_ng_template_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onNextStep("startedStep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r15.staticContentUrl + "img/instruction-guide/step4.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "TUTORIAL.TITLE1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "COMP_INSTRUCTION_GUIDE.BROWSE_ALL_SERVICES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "COMP_INSTRUCTION_GUIDE.NEXT_TEXT"), " ");
} }
function InstructionGuideMobileComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionGuideMobileComponent_ng_container_8_ng_template_1_Template, 14, 10, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InstructionGuideMobileComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideMobileComponent_ng_container_9_ng_template_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.finalize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r18.staticContentUrl + "img/instruction-guide/step5.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "COMP_INSTRUCTION_GUIDE.STATUS_OF_THE_SERVICES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "COMP_INSTRUCTION_GUIDE.ACTIVE_SERVICES_BAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "WIZARD.BTNS.COMPLETED"), " ");
} }
function InstructionGuideMobileComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionGuideMobileComponent_ng_container_9_ng_template_1_Template, 14, 10, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var InstructionGuideMobileComponent = /** @class */ (function () {
    function InstructionGuideMobileComponent(modalRef) {
        this.modalRef = modalRef;
        this.userName = '';
        this.partnerName = '';
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].STATIC_CONTENT;
        this.isLoading = true;
    }
    InstructionGuideMobileComponent.prototype.ngOnInit = function () {
        var data = this.modalRef.config.data;
        this.instructionConfig = data.instructionConfig;
        this.userName = data.userName;
        this.partnerName = data.partnerName;
        this.isLoading = false;
    };
    InstructionGuideMobileComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    InstructionGuideMobileComponent.prototype.doNotShowAgain = function (show) {
        if (show) {
            localStorage.setItem('dontShowMobileGuidedTourAgain', 'true');
        }
        else {
            localStorage.removeItem('dontShowMobileGuidedTourAgain');
        }
    };
    InstructionGuideMobileComponent.prototype.finalize = function () {
        localStorage.setItem('dontShowMobileGuidedTourAgain', 'true');
        this.closeModal();
    };
    InstructionGuideMobileComponent.prototype.onNextStep = function (target) {
        this.slider.nextPage();
        // const find = this.instructionsGuideCards.findIndex(x => x == target);
        // if(find >= 0) {
        //   const currentStep = this.instructionsGuideCards[find];
        //   const nextStep = this.instructionsGuideCards[find+1];
        //   this.setActionToStep(currentStep, false);
        //   this.setActionToStep(nextStep, true);
        // }
    };
    InstructionGuideMobileComponent.ɵfac = function InstructionGuideMobileComponent_Factory(t) { return new (t || InstructionGuideMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_2__["CDKModalRef"])); };
    InstructionGuideMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionGuideMobileComponent, selectors: [["app-instruction-guide-mobile"]], viewQuery: function InstructionGuideMobileComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        } }, decls: 10, vars: 6, consts: [[1, "d-flex", "w-100", "justify-content-end", "ds-mb-24p"], ["type", "button", 1, "btn", "ds-fs-14", "ds-p-0", 3, "click"], [1, "icon-close"], [3, "showArrows"], [4, "ngIf"], ["Slide", ""], [1, "ds-flex-column"], [1, "ds-mb-32p"], ["alt", "", 3, "src"], [1, "ds-h4", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", "ds-mb-32p"], [1, "ds-btn-primary", "ds-t-uppercase", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkA1", 1, "custom-control-input", 3, "change"], ["for", "checkA1", 1, "custom-control-label"], ["alt", "", 1, "step-images", 3, "src"], [1, "ds-mb-32p", "ds-flex-row", "ds-jc-end"], [1, "ds-ml-8p", "icon-right-big-arrow"], [1, "ds-mb-24p"], [1, "ds-mb-16p", "ds-flex-row", "ds-jc-end"], [1, "ds-mb-16p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", "ds-mb-16p"], [1, "ds-mb-16p", "ds-flex-row", "ds-jc-center"]], template: function InstructionGuideMobileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionGuideMobileComponent_Template_button_click_2_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InstructionGuideMobileComponent_ng_container_5_Template, 2, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InstructionGuideMobileComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InstructionGuideMobileComponent_ng_container_7_Template, 2, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InstructionGuideMobileComponent_ng_container_8_Template, 2, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InstructionGuideMobileComponent_ng_container_9_Template, 2, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showArrows", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructionConfig.startedStep);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructionConfig.hasHomeMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructionConfig.hasFamilyMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructionConfig.hasServices);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructionConfig.hasJumbotrom);
        } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _slider_shared_slide_directive__WEBPACK_IMPORTED_MODULE_5__["SlideDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".custom-control-label[_ngcontent-%COMP%]::before {\n  top: 0px;\n}\n\n.custom-control-label[_ngcontent-%COMP%]::after {\n  top: 0px;\n}\n\n.step-images[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 205px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdGlvbi1ndWlkZS9pbnN0cnVjdGlvbi1ndWlkZS1tb2JpbGUvaW5zdHJ1Y3Rpb24tZ3VpZGUtbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24tZ3VpZGUvaW5zdHJ1Y3Rpb24tZ3VpZGUtbW9iaWxlL2luc3RydWN0aW9uLWd1aWRlLW1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgdG9wOjBweFxufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgdG9wOjBweFxufVxuXG5cbi5zdGVwLWltYWdlcyB7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyMDVweDtcbn1cbiJdfQ== */"] });
    return InstructionGuideMobileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionGuideMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction-guide-mobile',
                templateUrl: './instruction-guide-mobile.component.html',
                styleUrls: ['./instruction-guide-mobile.component.scss']
            }]
    }], function () { return [{ type: _cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_2__["CDKModalRef"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]]
        }] }); })();


/***/ }),

/***/ "Xvsp":
/*!***********************************************************!*\
  !*** ./src/app/modules/family-unit/family-unit.module.ts ***!
  \***********************************************************/
/*! exports provided: FamilyUnitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyUnitModule", function() { return FamilyUnitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _family_unit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./family-unit.component */ "adnx");
/* harmony import */ var _components_unit_information_unit_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/unit-information/unit-information.component */ "i7c4");
/* harmony import */ var _components_unit_card_list_unit_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/unit-card-list/unit-card-list.component */ "J4iX");
/* harmony import */ var _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/unit-card/unit-card.component */ "7dW1");
/* harmony import */ var _components_add_user_profile_add_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-user-profile/add-user-profile.component */ "uQ+M");
/* harmony import */ var _components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-user-profile/edit-user-profile.component */ "hXJO");
/* harmony import */ var _components_delte_user_profile_delte_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delte-user-profile/delte-user-profile.component */ "qvdf");
/* harmony import */ var _family_unit_full_page_family_unit_full_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./family-unit-full-page/family-unit-full-page.component */ "+Jn9");
/* harmony import */ var _family_unit_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./family-unit.routing */ "MRAI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../home/servicess-status/servicess-status.module */ "LmLT");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "vpDk");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/result/result.component */ "jKnP");
/* harmony import */ var _components_user_detail_service_item_service_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-detail/service-item/service-item.component */ "zIgQ");
/* harmony import */ var src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/cdk-modal/cdk-modal.module */ "xG9v");




















var FamilyUnitModule = /** @class */ (function () {
    function FamilyUnitModule() {
    }
    FamilyUnitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FamilyUnitModule });
    FamilyUnitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FamilyUnitModule_Factory(t) { return new (t || FamilyUnitModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_13__["NzSpinnerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _family_unit_routing__WEBPACK_IMPORTED_MODULE_10__["FamilyUnitRoutingModule"],
                _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_14__["ServicessStatusModule"],
                src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_18__["CDKModalModule"],
            ]] });
    return FamilyUnitModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FamilyUnitModule, { declarations: [_family_unit_component__WEBPACK_IMPORTED_MODULE_2__["FamilyUnitComponent"],
        _components_unit_information_unit_information_component__WEBPACK_IMPORTED_MODULE_3__["UnitInformationComponent"],
        _components_unit_card_list_unit_card_list_component__WEBPACK_IMPORTED_MODULE_4__["UnitCardListComponent"],
        _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_5__["UnitCardComponent"],
        _components_add_user_profile_add_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["AddUserProfileComponent"],
        _components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditUserProfileComponent"],
        _components_delte_user_profile_delte_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["DelteUserProfileComponent"],
        _family_unit_full_page_family_unit_full_page_component__WEBPACK_IMPORTED_MODULE_9__["FamilyUnitFullPageComponent"],
        _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"],
        _components_result_result_component__WEBPACK_IMPORTED_MODULE_16__["ResultComponent"],
        _components_user_detail_service_item_service_item_component__WEBPACK_IMPORTED_MODULE_17__["ServiceItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_13__["NzSpinnerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
        _family_unit_routing__WEBPACK_IMPORTED_MODULE_10__["FamilyUnitRoutingModule"],
        _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_14__["ServicessStatusModule"],
        src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_18__["CDKModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyUnitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _family_unit_component__WEBPACK_IMPORTED_MODULE_2__["FamilyUnitComponent"],
                    _components_unit_information_unit_information_component__WEBPACK_IMPORTED_MODULE_3__["UnitInformationComponent"],
                    _components_unit_card_list_unit_card_list_component__WEBPACK_IMPORTED_MODULE_4__["UnitCardListComponent"],
                    _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_5__["UnitCardComponent"],
                    _components_add_user_profile_add_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["AddUserProfileComponent"],
                    _components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditUserProfileComponent"],
                    _components_delte_user_profile_delte_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["DelteUserProfileComponent"],
                    _family_unit_full_page_family_unit_full_page_component__WEBPACK_IMPORTED_MODULE_9__["FamilyUnitFullPageComponent"],
                    _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"],
                    _components_result_result_component__WEBPACK_IMPORTED_MODULE_16__["ResultComponent"],
                    _components_user_detail_service_item_service_item_component__WEBPACK_IMPORTED_MODULE_17__["ServiceItemComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_13__["NzSpinnerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                    _family_unit_routing__WEBPACK_IMPORTED_MODULE_10__["FamilyUnitRoutingModule"],
                    _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_14__["ServicessStatusModule"],
                    src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_18__["CDKModalModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "adnx":
/*!**************************************************************!*\
  !*** ./src/app/modules/family-unit/family-unit.component.ts ***!
  \**************************************************************/
/*! exports provided: FamilyUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyUnitComponent", function() { return FamilyUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_backup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backup.service */ "Ueei");
/* harmony import */ var src_app_services_bitdefendermsp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bitdefendermsp.service */ "aDds");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/services.service */ "6+PL");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_servicess_status_servicess_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/servicess-status/servicess-status.component */ "DdhC");
/* harmony import */ var _components_unit_information_unit_information_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/unit-information/unit-information.component */ "i7c4");
/* harmony import */ var _components_unit_card_list_unit_card_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/unit-card-list/unit-card-list.component */ "J4iX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


























function FamilyUnitComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-servicess-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-unit-information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-unit-card-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "ULTIMO_ACCESO"), ":\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx_r0.slastPreviousAccessDate.toLocaleString(), "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 10, ctx_r0.slastPreviousAccessDate.toLocaleString(), "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "HOLA"), " ", ctx_r0.userService.currentUserValue.name, " ");
} }
function FamilyUnitComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.partnerService.preloaderImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var FamilyUnitComponent = /** @class */ (function () {
    function FamilyUnitComponent(router, serviceService, partnerService, suiteService, userService, 
    // public modalService: NgbModal,
    localService, sidebarService, bitdefendermspService, backupService, route) {
        this.router = router;
        this.serviceService = serviceService;
        this.partnerService = partnerService;
        this.suiteService = suiteService;
        this.userService = userService;
        this.localService = localService;
        this.sidebarService = sidebarService;
        this.bitdefendermspService = bitdefendermspService;
        this.backupService = backupService;
        this.route = route;
        this.filteredServices = [];
        this.loading = true;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].STATIC_CONTENT;
        this.existDigitalSupport = false;
        this.existCyberSecurity = false;
        this.existJumbotron = false;
        this.wizardSkiped = false;
        this.profileData = [];
    }
    FamilyUnitComponent.prototype.ngOnInit = function () {
        this.slastPreviousAccessDate =
            this.userService.currentUserValue.lastPreviousAccessDate
                .toString()
                .indexOf("Z") >= 0
                ? this.userService.currentUserValue.lastPreviousAccessDate.toString()
                : this.userService.currentUserValue.lastPreviousAccessDate.toString() +
                    "Z";
        this.loadUnitFamilyInfo();
        console.log('uunit family load');
    };
    FamilyUnitComponent.prototype.loadData = function () {
    };
    FamilyUnitComponent.prototype.loadUnitFamilyInfo = function () {
        var _this = this;
        var currentUser = this.userService.currentUserValue;
        this.userService.userProfileList = [];
        this.userService
            .getFamilyProfiles(currentUser.id)
            .then(function (resp) {
            console.log(resp);
            _this.loading = false;
            var date = new Date();
            var payload = {
                userProfileId: 0,
                userId: currentUser.id,
                name: currentUser.name,
                surname: currentUser.surname,
                email: currentUser.email,
                photo: "",
                timezone: "",
                gender: "",
                creationDate: date.toString(),
                creationUser: 0,
                modificationDate: "",
                modificationUser: 0,
                deletedDate: "",
                deleted: false,
            };
            _this.userService.userProfileList.push(payload);
            resp.forEach(function (element) {
                _this.userService.userProfileList.push(element);
            });
            console.log('this.userService.userProfileList', _this.userService.userProfileList);
            // this.getUserProfileDetail()
        });
    };
    FamilyUnitComponent.prototype.setLocalStorage = function (key, data) {
        this.localService.setJsonValue(key, data);
    };
    FamilyUnitComponent.prototype.cardOpenModal = function (name, desc, icon) {
        // const modalRef = this.modalService.open(ModalComponent);
        // modalRef.componentInstance.name = name;
        // modalRef.componentInstance.desc = desc;
        // modalRef.componentInstance.icon = icon;
    };
    FamilyUnitComponent.prototype.getDataFromAppUnit = function (event) {
        console.log('data desde el componente', event);
        this.profileData = event;
    };
    FamilyUnitComponent.prototype.reaload = function (event) {
        var _this = this;
        if (event) {
            this.profileData = [];
            setTimeout(function () {
                _this.profileData = _this.userService.userProfileList;
            }, 1000);
        }
    };
    FamilyUnitComponent.ɵfac = function FamilyUnitComponent_Factory(t) { return new (t || FamilyUnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_6__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_7__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitdefendermsp_service__WEBPACK_IMPORTED_MODULE_3__["BitdefendermspService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backup_service__WEBPACK_IMPORTED_MODULE_2__["BackupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    FamilyUnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FamilyUnitComponent, selectors: [["app-family-unit"]], inputs: { data: "data" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["id", "user-sesion-welcome", 1, "flex-column"], [1, "ds-caption", "ds-r-regular", "ds-c-secondary"], [1, "ds-h1", "ds-m-bold", "ds-c-black"], [1, "content-single-service-fix"], [1, "ds-mb-24p"], [1, "ds-mb-12p"], [1, "ds-mb-24p", "align-items-center"], [1, "app-loading"], [1, "logo"], [3, "src"]], template: function FamilyUnitComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FamilyUnitComponent_ng_container_0_Template, 24, 15, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FamilyUnitComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _home_servicess_status_servicess_status_component__WEBPACK_IMPORTED_MODULE_12__["ServicessStatusComponent"], _components_unit_information_unit_information_component__WEBPACK_IMPORTED_MODULE_13__["UnitInformationComponent"], _components_unit_card_list_unit_card_list_component__WEBPACK_IMPORTED_MODULE_14__["UnitCardListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".content-single-service-fix[_ngcontent-%COMP%] {\n  padding-top: 5rem !important;\n  padding-bottom: 1rem;\n}\n\n@media only screen and (max-width: 767px) {\n  .content-single-service-fix[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9mYW1pbHktdW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UseUJBQUE7RUFDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9mYW1pbHktdW5pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXNpbmdsZS1zZXJ2aWNlLWZpeCB7XG4gICAgcGFkZGluZy10b3A6IDVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudC1zaW5nbGUtc2VydmljZS1maXgge1xuICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiJdfQ== */"] });
    return FamilyUnitComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyUnitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-family-unit",
                templateUrl: "./family-unit.component.html",
                styleUrls: ["./family-unit.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_6__["ServicesService"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__["PartnerService"] }, { type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_7__["SuiteService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"] }, { type: _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"] }, { type: src_app_services_bitdefendermsp_service__WEBPACK_IMPORTED_MODULE_3__["BitdefendermspService"] }, { type: src_app_services_backup_service__WEBPACK_IMPORTED_MODULE_2__["BackupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bGa+":
/*!***************************************!*\
  !*** ./src/app/models/userProfile.ts ***!
  \***************************************/
/*! exports provided: UserProfileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileData", function() { return UserProfileData; });
var UserProfileData = /** @class */ (function () {
    function UserProfileData() {
    }
    return UserProfileData;
}());



/***/ }),

/***/ "dpRF":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/home/bitdefendermsm-service/bitdefendermsm-service.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BitdefenderMSMServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitdefenderMSMServiceComponent", function() { return BitdefenderMSMServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_custom_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/custom/modal/modal.component */ "1NTe");
/* harmony import */ var src_app_dynamic_render_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dynamic-render/dynamic-render-component.service */ "NKj7");
/* harmony import */ var src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dynamic-render/render-component.directive */ "utrB");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./msm-in-process/msm-in-process.component */ "ifMy");
/* harmony import */ var _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./msm-not-started/msm-not-started.component */ "ErP5");
/* harmony import */ var _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./msm-results/msm-results.component */ "hEH7");
/* harmony import */ var _shared_bitdefendermsm_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/bitdefendermsm.service */ "s/q+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");




















function BitdefenderMSMServiceComponent_ng_template_8_Template(rf, ctx) { }
function BitdefenderMSMServiceComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var BitdefenderMSMServiceComponent = /** @class */ (function () {
    function BitdefenderMSMServiceComponent(userService, bitdefendermsmService, modalService, sidebarService, dynamicRenderComponentService) {
        this.userService = userService;
        this.bitdefendermsmService = bitdefendermsmService;
        this.modalService = modalService;
        this.sidebarService = sidebarService;
        this.dynamicRenderComponentService = dynamicRenderComponentService;
        this.isloading = true;
        this.msmInformation = {};
    }
    BitdefenderMSMServiceComponent.prototype.ngOnInit = function () {
    };
    BitdefenderMSMServiceComponent.prototype.ngAfterViewInit = function () {
        if (!this.data.longDesc) {
            this.loadServiceInfo();
        }
        else {
            this.loadMSMInformation();
        }
        this.watchMSMChange();
        this.watchMSMReload();
    };
    BitdefenderMSMServiceComponent.prototype.loadComponentByBussinesStrategy = function (step) {
        if (!step) {
            this.renderMSMNotStarted();
            return;
        }
        switch (step.nextStep) {
            case 0 /* MSMNotStarted */:
                this.renderMSMNotStarted();
                break;
            case 1 /* MSMInProccessFirstStep */:
            case 2 /* MSMInProccessSecondStep */:
                this.renderMSMInProcess(step);
                break;
            case 3 /* MSMResults */:
                this.renderMSMWithResults(step);
                break;
        }
    };
    BitdefenderMSMServiceComponent.prototype.renderMSMNotStarted = function () {
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _msm_not_started_msm_not_started_component__WEBPACK_IMPORTED_MODULE_9__["MSMNotStartedComponent"], this.data);
    };
    BitdefenderMSMServiceComponent.prototype.renderMSMInProcess = function (stepInformation) {
        var data = {
            service: this.data,
            stepInformation: {
                nextStep: stepInformation.nextStep,
                data: stepInformation.stepInformation
            }
        };
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _msm_in_process_msm_in_process_component__WEBPACK_IMPORTED_MODULE_8__["MSMInProcessComponent"], data);
    };
    BitdefenderMSMServiceComponent.prototype.renderMSMWithResults = function (stepInformation) {
        var data = {
            service: this.data,
            stepInformation: {
                nextStep: stepInformation.nextStep,
                data: stepInformation.stepInformation
            }
        };
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _msm_results_msm_results_component__WEBPACK_IMPORTED_MODULE_10__["MSMResultsComponent"], data);
    };
    BitdefenderMSMServiceComponent.prototype.loadServiceInfo = function () {
        var _this = this;
        var identityToken = this.userService.currentUserValue;
        this.sidebarService
            .getServiceInfo(this.data.id, identityToken.partnerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return _this.data = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loadMSMInformation(); }))
            .subscribe();
    };
    BitdefenderMSMServiceComponent.prototype.open = function (name, desc, icon) {
        var modalRef = this.modalService.open(src_app_components_custom_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]);
        modalRef.componentInstance.name = name;
        modalRef.componentInstance.desc = desc;
        modalRef.componentInstance.icon = icon;
    };
    BitdefenderMSMServiceComponent.prototype.loadMSMInformation = function () {
        var _this = this;
        this.isloading = true;
        this.bitdefendermsmService.getUserLicenceMSM(this.userService.selSuiteId.toString())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.bitdefendermsmService.formatBitDefenderMSMData(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            var nextStep = {
                nextStep: _this.currentStepValidate(),
                stepInformation: data
            };
            _this.loadComponentByBussinesStrategy(nextStep);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.isloading = false; })).subscribe();
    };
    BitdefenderMSMServiceComponent.prototype.currentStepValidate = function () {
        var bitdenderResponse = this.bitdefendermsmService.bitdefenderResponse;
        var stateGeneral = 0;
        switch (bitdenderResponse.state) {
            case "request" /* Request */:
                stateGeneral = 0 /* MSMNotStarted */;
                break;
            case "pending" /* Pending */:
                stateGeneral = 1 /* MSMInProccessFirstStep */;
                break;
            case "active" /* Active */:
                stateGeneral = 2 /* MSMInProccessSecondStep */;
                break;
            case "activeDevice" /* ActiveInDevice */:
                stateGeneral = 3 /* MSMResults */;
                break;
            default:
                stateGeneral = 0 /* MSMNotStarted */;
                break;
        }
        return stateGeneral;
    };
    BitdefenderMSMServiceComponent.prototype.watchMSMChange = function () {
        var _this = this;
        this.bitdefendermsmService.msmServicechange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (data) { return !!data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.loadComponentByBussinesStrategy(data); }))
            .subscribe();
    };
    BitdefenderMSMServiceComponent.prototype.watchMSMReload = function () {
        var _this = this;
        this.bitdefendermsmService.msmServicereload$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (data) { return !!data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loadMSMInformation(); }))
            .subscribe();
    };
    BitdefenderMSMServiceComponent.ɵfac = function BitdefenderMSMServiceComponent_Factory(t) { return new (t || BitdefenderMSMServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bitdefendermsm_service__WEBPACK_IMPORTED_MODULE_11__["BitdefendermsmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dynamic_render_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_4__["DynamicRenderComponentService"])); };
    BitdefenderMSMServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BitdefenderMSMServiceComponent, selectors: [["app-bitdefendermsm-service"]], viewQuery: function BitdefenderMSMServiceComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_5__["RenderComponentDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveContainer = _t.first);
        } }, inputs: { data: "data" }, decls: 10, vars: 5, consts: [[1, "ds-card", "informative-service-content"], [1, "ds-card-header", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "ds-h4", "ds-m-bold", "ds-c-black"], [1, "icon-info", "ds-header-icon-right", "cursor", 3, "click"], [1, "ds-card-body"], ["render-component", ""], [4, "ngIf"], [1, "default-section", "fa-3x"], [1, "fas", "fa-spinner", "fa-spin"]], template: function BitdefenderMSMServiceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BitdefenderMSMServiceComponent_Template_span_click_6_listener() { return ctx.open(ctx.data.name, ctx.data.longDesc, ctx.data.icon); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BitdefenderMSMServiceComponent_ng_template_8_Template, 0, 0, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BitdefenderMSMServiceComponent_ng_container_9_Template, 3, 0, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.data.icon, " ds-fs-24 mr-2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);
        } }, directives: [src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_5__["RenderComponentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9iaXRkZWZlbmRlcm1zbS1zZXJ2aWNlL2JpdGRlZmVuZGVybXNtLXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BitdefenderMSMServiceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitdefenderMSMServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bitdefendermsm-service',
                templateUrl: './bitdefendermsm-service.component.html',
                styleUrls: ['./bitdefendermsm-service.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _shared_bitdefendermsm_service__WEBPACK_IMPORTED_MODULE_11__["BitdefendermsmService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"] }, { type: src_app_dynamic_render_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_4__["DynamicRenderComponentService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directiveContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_5__["RenderComponentDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "hXJO":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/edit-user-profile/edit-user-profile.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileComponent", function() { return EditUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/ImageUtils */ "1N2o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_models_userProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/userProfile */ "bGa+");
/* harmony import */ var _shared_Timezones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Timezones */ "2lVm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");


















var _c0 = ["basicModal"];
function EditUserProfileComponent_ng_template_0_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7, " ");
} }
function EditUserProfileComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserProfileComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditUserProfileComponent_ng_template_0_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onUploadImagen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserProfileComponent_ng_template_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserProfileComponent_ng_template_0_Template_input_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.profile.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserProfileComponent_ng_template_0_Template_input_ngModelChange_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.profile.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserProfileComponent_ng_template_0_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.profile.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserProfileComponent_ng_template_0_Template_select_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.profile.gender = $event; })("change", function EditUserProfileComponent_ng_template_0_Template_select_change_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onChangGender($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 47, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserProfileComponent_ng_template_0_Template_select_ngModelChange_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.profile.timezone = $event; })("change", function EditUserProfileComponent_ng_template_0_Template_select_change_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onChangTimezone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, EditUserProfileComponent_ng_template_0_option_86_Template, 2, 2, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserProfileComponent_ng_template_0_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.continue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 23, "FAMILY_UNIT.TITLE_EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.sanitizer.bypassSecurityTrustUrl(ctx_r1.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 25, "FAMILY_UNIT.PROFILE_PICTURE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 27, "FAMILY_UNIT.ACTION_DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 29, "CUT_PROFILE_IMAGE_USER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 31, "CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 33, "OK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 35, "CAMPOS_OBLIGATORIOS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 37, "FAMILY_UNIT.NAME"), " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 39, "FAMILY_UNIT.ALIAS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.profile.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 41, "FAMILY_UNIT.EMAIL"), " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 43, "FAMILY_UNIT.GENDER"), " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.profile.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 45, "FAMILY_UNIT.MALE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 47, "FAMILY_UNIT.FEMALE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 49, "FAMILY_UNIT.TIME_ZONE"), " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.profile.timezone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.timeZoneList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 51, "FAMILY_UNIT.BTN_SAVE"));
} }
var EditUserProfileComponent = /** @class */ (function () {
    function EditUserProfileComponent(modalService, translate, messageService, sanitizer, userService) {
        this.modalService = modalService;
        this.translate = translate;
        this.messageService = messageService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STATIC_CONTENT;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.basicModalCloseResult = "";
        this.timeZoneList = _shared_Timezones__WEBPACK_IMPORTED_MODULE_9__["TIMEZONELIST"];
        this.count = 0;
        this.image = this.staticContentUrl + "img/add-user.png";
    }
    EditUserProfileComponent.prototype.ngOnInit = function () { };
    EditUserProfileComponent.prototype.ngAfterViewInit = function () {
        this.openBasicModal(this.basicModal);
    };
    EditUserProfileComponent.prototype.openBasicModal = function (content) {
        var _this = this;
        console.log(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        this.modalService
            .open(content, { centered: true })
            .result.then(function (result) {
            _this.basicModalCloseResult = "Modal closed" + result;
            close();
        })
            .catch(function (res) {
            close();
        });
    };
    EditUserProfileComponent.prototype.continue = function () {
        var _this = this;
        console.log(this.profile);
        if (this.count === 0) {
            this.count = this.count + 1;
            this.modalService.dismissAll();
            this.userService.editUserProfile(this.profile).then(function (resp) {
                console.log(resp);
                _this.action.emit({
                    isModalOpen: false,
                    profile: _this.profile,
                    isForAdd: false,
                });
            }, function (error) {
                console.log("error: ", error);
                _this.modalService.dismissAll();
            });
        }
    };
    EditUserProfileComponent.prototype.close = function () {
        this.action.emit({
            isModalOpen: false,
            action: null,
        });
        this.modalService.dismissAll();
    };
    EditUserProfileComponent.prototype.onUploadImagen = function ($event) {
        var _this = this;
        var target = $event.target;
        if (target.files != null) {
            if (target.files.length > 0) {
                var file = target.files[0];
                var value = target.value.toLowerCase();
                var ext = value.split(".").pop();
                var name_1 = target.name.toLowerCase();
                var exts = ["png", "jpg", "jpeg", "gif"];
                if (name_1 == "favicon") {
                    exts = ["png", "jpg", "jpeg", "gif", "ico"];
                }
                if (exts.indexOf(ext) != -1) {
                    this.getBase64(file).then(function (result) {
                        src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_2__["ImageUtils"].compressImage(result, 100, 100).then(function (compressed) {
                            _this.image = compressed;
                            // this.user.profileImage = this.image;
                            _this.profile.photo = _this.image;
                        });
                    });
                }
                else {
                    console.clear();
                    this.translate
                        .get("ONLY_IMAGES_ERROR")
                        .subscribe(function (res) { return _this.messageService.add(res, "error"); });
                }
            }
        }
    };
    EditUserProfileComponent.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    EditUserProfileComponent.prototype.onChangGender = function (e) {
        console.log(e.target.value);
        this.profile.gender = e.target.value;
    };
    EditUserProfileComponent.prototype.onChangTimezone = function (e) {
        this.profile.timezone = e.target.value;
    };
    EditUserProfileComponent.ɵfac = function EditUserProfileComponent_Factory(t) { return new (t || EditUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
    EditUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserProfileComponent, selectors: [["app-edit-user-profile"]], viewQuery: function EditUserProfileComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicModal = _t.first);
        } }, inputs: { profile: "profile" }, outputs: { action: "action" }, decls: 2, vars: 0, consts: [["class", "modal-content", "style", "max-width: 400px"], ["basicModal", ""], [1, "mt-21", "modal-head-container"], [1, "row"], [1, "col", "close-container"], ["type", "button", 1, "new-close", 3, "click"], [1, "icon-close"], [1, "col"], [1, "right-card-text", "mb-4", "fs-24", "bold"], [1, "row", "mb-3"], [1, "picture-container"], [1, ""], [1, "d-flex", "align-items-center", "modal-width-fix"], [1, "photo"], ["name", "favicon", "type", "file", "accept", "image/x-png,image/jpeg,image/gif,image/x-icon", 2, "display", "none", 3, "change"], ["profileImage", ""], ["type", "button", 1, "btn", "bback", 3, "click"], ["width", "64", "height", "64", 2, "width", "64px", "height", "64px", "border-radius", "50%", 3, "src"], [1, "text"], [1, "title"], [1, "subtitle"], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "img-container"], ["id", "image", 3, "src"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", "id", "crop", 1, "btn", "btn-primary"], [1, "form-group", "col-lg-12", "col-md-12", "col-sm-12", "mt-2", "pl-0", "pr-0", "mb-0"], [1, "w-100", "fs-12"], [1, "row", "mt-2", "mr-4", "ml-4"], ["novalidate", "", 1, "col-sm-12", "pl-0", "pr-0", "ng-untouched"], [1, "form-group", "col-md-12", "col-sm-12", "pl-0", "pr-0", "no-padding-responsive"], [1, "modal-form-label", "neutral-black"], ["type", "text", "name", "name", "maxlength", "40", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "surname", "maxlength", "40", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "maxlength", "40", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange"], ["id", "", "name", "gender", 1, "form-control", "new-input", 3, "ngModel", "ngModelChange", "change"], ["selectProfile", ""], ["value", "Male", "selected", ""], ["value", "Female"], ["id", "", "name", "timezone", 1, "form-control", "new-input", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-lg-12", "pl-0", "pr-0", "identity-btns", "d-flex", "justify-content-end"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "d-block", 3, "click"], [3, "value"]], template: function EditUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditUserProfileComponent_ng_template_0_Template, 93, 53, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".add-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 64px;\n  border: solid 2px #bcc4d4;\n  width: 64px;\n  color: #bcc4d4;\n  border-radius: 64px;\n  cursor: pointer;\n}\n\n.modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.modal-width-fix[_ngcontent-%COMP%] {\n  width: 482px;\n}\n\n@media only screen and (max-width: 767px) {\n  .modal-width-fix[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n\np.title[_ngcontent-%COMP%] {\n  color: #34383f;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL2VkaXQtdXNlci1wcm9maWxlL2VkaXQtdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZhbWlseS11bml0L2NvbXBvbmVudHMvZWRpdC11c2VyLXByb2ZpbGUvZWRpdC11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2JjYzRkNDtcbiAgd2lkdGg6IDY0cHg7XG4gIGNvbG9yOiAjYmNjNGQ0O1xuICBib3JkZXItcmFkaXVzOiA2NHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1oZWFkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5jbG9zZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLm1vZGFsLXdpZHRoLWZpeCB7XG4gIHdpZHRoOiA0ODJweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubW9kYWwtd2lkdGgtZml4IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbn1cblxucC50aXRsZSB7XG4gIGNvbG9yOiAjMzQzODNmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"] });
    return EditUserProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-edit-user-profile",
                templateUrl: "./edit-user-profile.component.html",
                styleUrls: ["./edit-user-profile.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], basicModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["basicModal"]
        }] }); })();


/***/ }),

/***/ "i7c4":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/unit-information/unit-information.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UnitInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitInformationComponent", function() { return UnitInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














var UnitInformationComponent = /** @class */ (function () {
    function UnitInformationComponent(partnerService, suiteService, userService, localService, sidebarService) {
        var _this = this;
        this.partnerService = partnerService;
        this.suiteService = suiteService;
        this.userService = userService;
        this.localService = localService;
        this.sidebarService = sidebarService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].STATIC_CONTENT;
        this.profilesAdded = 0;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.profilesAdded = this.userService.userProfileList.length;
    }
    UnitInformationComponent.prototype.ngOnInit = function () {
        this.emitData();
    };
    UnitInformationComponent.prototype.emitData = function () {
        this.action.emit(this.userService.userProfileList);
    };
    UnitInformationComponent.ɵfac = function UnitInformationComponent_Factory(t) { return new (t || UnitInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_4__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
    UnitInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitInformationComponent, selectors: [["app-unit-information"]], outputs: { action: "action" }, decls: 28, vars: 11, consts: [[1, "ds-card", "pl-1", "mt-3", "minW-100", "text-center", 2, "padding", "24px"], [1, "card", "w-100", "ml-fix"], [1, "card-body", "pr-0", "pl-0"], [1, "container-fluid", "mt-4"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "mb-3", "justify-content-between", "d-flex", "flex-column", "mobile-mb"], [1, "ds-m-bold", "ds-c-black", "ds-h2", "ds-fs-24", "ds-mb-12p"], [1, "ds-r-regular", "ds-body-primary", "ds-fs-16", "ds-c-black", "ds-mb-12p"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "mb-3", "desktop-only", "justify-content-between", "d-flex", "flex-column", "mobile-mb", "pl-4", "pr-4"], ["alt", "", 3, "src"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "d-flex", "flex-column"], [1, "title", "text-center", "mb-4", "neutral-black", "fs-16"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "circle-profile", "text-center"], [1, "added"], [1, "pending-divider"], [1, "pending"]], template: function UnitInformationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "/");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "FAMILY_UNIT.SECTION_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "FAMILY_UNIT.SECTION_DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.staticContentUrl + "img/family-unit/unit_family.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, "FAMILY_UNIT.LIST_OF_PROFILES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profilesAdded);
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".ml-fix[_ngcontent-%COMP%] {\n  margin-left: 11px;\n}\n\n.circle-profile[_ngcontent-%COMP%] {\n  border: solid 3px #36b3ed;\n  color: #36b3ed;\n  width: 96px;\n  height: 96px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 96px;\n  background-color: #ECF1F8;\n}\n\n.added[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.pending[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  margin-top: 4px;\n}\n\n.pending-divider[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-top: 4px;\n}\n\n@media only screen and (max-width: 767px) {\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3VuaXQtaW5mb3JtYXRpb24vdW5pdC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0Usd0JBQUE7RUFDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3VuaXQtaW5mb3JtYXRpb24vdW5pdC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tbC1maXh7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5jaXJjbGUtcHJvZmlsZXtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjMzZiM2VkO1xuICAgIGNvbG9yOiAjMzZiM2VkO1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMUY4O1xufVxuXG4uYWRkZWR7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wZW5kaW5ne1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5wZW5kaW5nLWRpdmlkZXJ7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmRlc2t0b3Atb25seSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiJdfQ== */"] });
    return UnitInformationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-unit-information",
                templateUrl: "./unit-information.component.html",
                styleUrls: ["./unit-information.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__["PartnerService"] }, { type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_4__["SuiteService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"] }, { type: src_app_modules_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0Pcf");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.routing */ "HyxC");
/* harmony import */ var _expert_support_expert_support_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expert-support/expert-support.module */ "f8MZ");
/* harmony import */ var src_app_modules_home_cyberscoring_service_cyberscoring_cyberscoring_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/home/cyberscoring-service/cyberscoring/cyberscoring.module */ "tLwq");
/* harmony import */ var src_app_components_custom_cybersecurity_questions_cybersegurity_question_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/custom/cybersecurity-questions/cybersegurity-question.module */ "GGZ+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_custom_cyberalarm_geolocalizacion_integrated_geolocalizacion_integrated_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/custom/cyberalarm/geolocalizacion-integrated/geolocalizacion-integrated.module */ "WcAG");
/* harmony import */ var _cybersecurity_service_cybersecurity_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cybersecurity-service/cybersecurity-service.module */ "RJK6");
/* harmony import */ var _informative_service_informative_service_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./informative-service/informative-service.module */ "e2EE");
/* harmony import */ var _geolocation_service_geolocation_service_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geolocation-service/geolocation-service.module */ "0QOQ");
/* harmony import */ var _credit_card_fraud_protection_credit_card_fraud_protection_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./credit-card-fraud-protection/credit-card-fraud-protection.module */ "n+Bk");
/* harmony import */ var _identity_theft_protection_identity_theft_protection_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./identity-theft-protection/identity-theft-protection.module */ "bWqI");
/* harmony import */ var _security_questionnaire_security_questionnaire_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./security-questionnaire/security-questionnaire.module */ "G+/A");
/* harmony import */ var _cyberscoring_service_cyberscoring_service_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cyberscoring-service/cyberscoring-service.module */ "tnD6");
/* harmony import */ var _servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./servicess-status/servicess-status.module */ "LmLT");
/* harmony import */ var _identity_theft_protection_itp_full_page_itp_full_page_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./identity-theft-protection/itp-full-page/itp-full-page.module */ "t2n0");
/* harmony import */ var src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/custom/modal/modal.module */ "MBzk");
/* harmony import */ var _default_service_default_service_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./default-service/default-service.module */ "S5MQ");
/* harmony import */ var _bitdefender_service_bitdefender_service_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bitdefender-service/bitdefender-service.module */ "S+Ti");
/* harmony import */ var _acuetix_service_acuetix_service_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./acuetix-service/acuetix-service.module */ "77V8");
/* harmony import */ var _attack_simulator_service_attack_simulator_service_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./attack-simulator-service/attack-simulator-service.module */ "+fcl");
/* harmony import */ var _user_security_user_security_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-security/user-security.module */ "lg/T");
/* harmony import */ var _network_protection_network_protection_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./network-protection/network-protection.module */ "6iDr");
/* harmony import */ var _elearning_service_elearning_service_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./elearning-service/elearning-service.module */ "SkO9");
/* harmony import */ var _gravity_service_gravity_service_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gravity-service/gravity-service.module */ "9rFg");
/* harmony import */ var _secure_browsing_secure_browsing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./secure-browsing/secure-browsing.module */ "zDA/");
/* harmony import */ var _secure_transfer_secure_transfer_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./secure-transfer/secure-transfer.module */ "FD2C");
/* harmony import */ var _professional_service_professional_service_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./professional-service/professional-service.module */ "iWCB");
/* harmony import */ var _digital_support_form_digital_support_form_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./digital-support-form/digital-support-form.module */ "s0U5");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var _chat_service_chat_service_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./chat-service/chat-service.module */ "KxUd");
/* harmony import */ var _cpr_service_cpr_service_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cpr-service/cpr-service.module */ "k+hr");
/* harmony import */ var _antivirus_service_antivirus_service_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./antivirus-service/antivirus-service.module */ "DGah");
/* harmony import */ var _backup_service_backup_service_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./backup-service/backup-service.module */ "3GE2");
/* harmony import */ var _digital_certificate_service_digital_certificate_service_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./digital-certificate-service/digital-certificate-service.module */ "9G96");
/* harmony import */ var _digital_life_service_digital_life_service_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./digital-life-service/digital-life-service.module */ "CBve");
/* harmony import */ var _internet_report_service_internet_report_service_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internet-report-service/internet-report-service.module */ "Qak8");
/* harmony import */ var _EVD_service_EVD_service_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./EVD-service/EVD-service.module */ "az97");
/* harmony import */ var _office_activation_service_office_activation_service_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./office-activation-service/office-activation-service.module */ "LPI1");
/* harmony import */ var _agent_service_agent_service_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./agent-service/agent-service.module */ "0QQl");
/* harmony import */ var _bitdefender_mobile_bitdefender_mobile_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./bitdefender-mobile/bitdefender-mobile.module */ "5Ag1");
/* harmony import */ var _bitdefender_security_bitdefender_security_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./bitdefender-security/bitdefender-security.module */ "wnnh");
/* harmony import */ var _bitdefender_total_bitdefender_total_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./bitdefender-total/bitdefender-total.module */ "pddg");
/* harmony import */ var _cyber_alarm_cyber_alarm_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./cyber-alarm/cyber-alarm.module */ "+/oZ");
/* harmony import */ var _digital_legacy_service_digital_legacy_service_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./digital-legacy-service/digital-legacy-service.module */ "WQU/");
/* harmony import */ var _digital_will_service_digital_will_service_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./digital-will-service/digital-will-service.module */ "LbHT");
/* harmony import */ var _cadastre_form_service_cadastre_form_service_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./cadastre-form-service/cadastre-form-service.module */ "LxE7");
/* harmony import */ var _bitdefendermsm_service_bitdefendermsm_service_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./bitdefendermsm-service/bitdefendermsm-service.module */ "JlOI");
/* harmony import */ var _family_unit_family_unit_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../family-unit/family-unit.module */ "Xvsp");
/* harmony import */ var src_app_components_instruction_guide_instruction_guide_web_instruction_guide_web_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/app/components/instruction-guide/instruction-guide-web/instruction-guide-web.module */ "2IQN");
/* harmony import */ var src_app_components_instruction_guide_instruction_guide_mobile_instruction_guide_mobile_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! src/app/components/instruction-guide/instruction-guide-mobile/instruction-guide-mobile.module */ "s+x1");
/* harmony import */ var src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! src/app/components/cdk-modal/cdk-modal.module */ "xG9v");
/* harmony import */ var _trendmicro_service_trendmicro_service_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./trendmicro-service/trendmicro-service.module */ "DtzU");
/* harmony import */ var _rgpd_service_rgpd_service_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./rgpd-service/rgpd-service.module */ "OrFy");

























































var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _expert_support_expert_support_module__WEBPACK_IMPORTED_MODULE_4__["ExpertSupportModule"],
                _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                src_app_modules_home_cyberscoring_service_cyberscoring_cyberscoring_module__WEBPACK_IMPORTED_MODULE_5__["CyberscoringModule"],
                src_app_components_custom_cybersecurity_questions_cybersegurity_question_module__WEBPACK_IMPORTED_MODULE_6__["CyberSegurityQuestionModule"],
                src_app_components_custom_cyberalarm_geolocalizacion_integrated_geolocalizacion_integrated_module__WEBPACK_IMPORTED_MODULE_8__["GeolocalizacionModule"],
                src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_53__["CDKModalModule"],
                //NgxGaugeModule,
                _cybersecurity_service_cybersecurity_service_module__WEBPACK_IMPORTED_MODULE_9__["CybersecurityServiceModule"],
                _informative_service_informative_service_module__WEBPACK_IMPORTED_MODULE_10__["InformativeServiceModule"],
                _geolocation_service_geolocation_service_module__WEBPACK_IMPORTED_MODULE_11__["GeolocationServiceModule"],
                _credit_card_fraud_protection_credit_card_fraud_protection_module__WEBPACK_IMPORTED_MODULE_12__["CreditCardFraudProtectionModule"],
                _identity_theft_protection_identity_theft_protection_module__WEBPACK_IMPORTED_MODULE_13__["IdentityTheftProtectionModule"],
                _security_questionnaire_security_questionnaire_module__WEBPACK_IMPORTED_MODULE_14__["SecurityQuestionnaireModule"],
                _cyberscoring_service_cyberscoring_service_module__WEBPACK_IMPORTED_MODULE_15__["CyberscoringServiceModule"],
                _servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_16__["ServicessStatusModule"],
                _identity_theft_protection_itp_full_page_itp_full_page_module__WEBPACK_IMPORTED_MODULE_17__["ItpFullPageModule"],
                src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalModule"],
                _bitdefender_service_bitdefender_service_module__WEBPACK_IMPORTED_MODULE_20__["BitdefenderServiceModule"],
                _bitdefendermsm_service_bitdefendermsm_service_module__WEBPACK_IMPORTED_MODULE_49__["BitdefenderServiceMSMModule"],
                _default_service_default_service_module__WEBPACK_IMPORTED_MODULE_19__["DefaultServiceModule"],
                _acuetix_service_acuetix_service_module__WEBPACK_IMPORTED_MODULE_21__["AcuetixServiceModule"],
                _user_security_user_security_module__WEBPACK_IMPORTED_MODULE_23__["UserSecurityModule"],
                _attack_simulator_service_attack_simulator_service_module__WEBPACK_IMPORTED_MODULE_22__["AttackSimulatorServiceModule"],
                _network_protection_network_protection_module__WEBPACK_IMPORTED_MODULE_24__["NetworkProtectionModule"],
                _elearning_service_elearning_service_module__WEBPACK_IMPORTED_MODULE_25__["ElearningServiceModule"],
                _gravity_service_gravity_service_module__WEBPACK_IMPORTED_MODULE_26__["GravityServiceModule"],
                _secure_browsing_secure_browsing_module__WEBPACK_IMPORTED_MODULE_27__["SecureBrowsingModule"],
                _secure_transfer_secure_transfer_module__WEBPACK_IMPORTED_MODULE_28__["SecureTransferModule"],
                _professional_service_professional_service_module__WEBPACK_IMPORTED_MODULE_29__["ProfessionalServiceModule"],
                _digital_support_form_digital_support_form_module__WEBPACK_IMPORTED_MODULE_30__["DigitalSupportFormModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_31__["NzSpinnerModule"],
                _chat_service_chat_service_module__WEBPACK_IMPORTED_MODULE_32__["ChatServiceModule"],
                _cpr_service_cpr_service_module__WEBPACK_IMPORTED_MODULE_33__["CprServiceModule"],
                _antivirus_service_antivirus_service_module__WEBPACK_IMPORTED_MODULE_34__["AntivirusServiceModule"],
                _backup_service_backup_service_module__WEBPACK_IMPORTED_MODULE_35__["BackupServiceModule"],
                _digital_certificate_service_digital_certificate_service_module__WEBPACK_IMPORTED_MODULE_36__["DigitalCertificateServiceModule"],
                _digital_life_service_digital_life_service_module__WEBPACK_IMPORTED_MODULE_37__["DigitalLifeServiceModule"],
                _internet_report_service_internet_report_service_module__WEBPACK_IMPORTED_MODULE_38__["InternetReportServiceModule"],
                _EVD_service_EVD_service_module__WEBPACK_IMPORTED_MODULE_39__["EVDServiceModule"],
                _office_activation_service_office_activation_service_module__WEBPACK_IMPORTED_MODULE_40__["OfficeActivationServiceModule"],
                _agent_service_agent_service_module__WEBPACK_IMPORTED_MODULE_41__["AgentServiceModule"],
                _bitdefender_mobile_bitdefender_mobile_module__WEBPACK_IMPORTED_MODULE_42__["BitdefenderMobileModule"],
                _bitdefender_security_bitdefender_security_module__WEBPACK_IMPORTED_MODULE_43__["BitdefenderSecurityModule"],
                _bitdefender_total_bitdefender_total_module__WEBPACK_IMPORTED_MODULE_44__["BitdefenderTotalModule"],
                _cyber_alarm_cyber_alarm_module__WEBPACK_IMPORTED_MODULE_45__["CyberAlarmModule"],
                _digital_legacy_service_digital_legacy_service_module__WEBPACK_IMPORTED_MODULE_46__["DigitalLegacyServiceModule"],
                _digital_will_service_digital_will_service_module__WEBPACK_IMPORTED_MODULE_47__["DigitalWillServiceModule"],
                _cadastre_form_service_cadastre_form_service_module__WEBPACK_IMPORTED_MODULE_48__["CadastreFormServiceModule"],
                _family_unit_family_unit_module__WEBPACK_IMPORTED_MODULE_50__["FamilyUnitModule"],
                _trendmicro_service_trendmicro_service_module__WEBPACK_IMPORTED_MODULE_54__["TrendmicroServiceModule"],
                _rgpd_service_rgpd_service_module__WEBPACK_IMPORTED_MODULE_55__["RgpdServiceModule"],
                src_app_components_instruction_guide_instruction_guide_mobile_instruction_guide_mobile_module__WEBPACK_IMPORTED_MODULE_52__["InstructionGuideMobileModule"],
                src_app_components_instruction_guide_instruction_guide_web_instruction_guide_web_module__WEBPACK_IMPORTED_MODULE_51__["InstructionGuideWebModule"],
            ]] });
    return HomeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _expert_support_expert_support_module__WEBPACK_IMPORTED_MODULE_4__["ExpertSupportModule"],
        _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        src_app_modules_home_cyberscoring_service_cyberscoring_cyberscoring_module__WEBPACK_IMPORTED_MODULE_5__["CyberscoringModule"],
        src_app_components_custom_cybersecurity_questions_cybersegurity_question_module__WEBPACK_IMPORTED_MODULE_6__["CyberSegurityQuestionModule"],
        src_app_components_custom_cyberalarm_geolocalizacion_integrated_geolocalizacion_integrated_module__WEBPACK_IMPORTED_MODULE_8__["GeolocalizacionModule"],
        src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_53__["CDKModalModule"],
        //NgxGaugeModule,
        _cybersecurity_service_cybersecurity_service_module__WEBPACK_IMPORTED_MODULE_9__["CybersecurityServiceModule"],
        _informative_service_informative_service_module__WEBPACK_IMPORTED_MODULE_10__["InformativeServiceModule"],
        _geolocation_service_geolocation_service_module__WEBPACK_IMPORTED_MODULE_11__["GeolocationServiceModule"],
        _credit_card_fraud_protection_credit_card_fraud_protection_module__WEBPACK_IMPORTED_MODULE_12__["CreditCardFraudProtectionModule"],
        _identity_theft_protection_identity_theft_protection_module__WEBPACK_IMPORTED_MODULE_13__["IdentityTheftProtectionModule"],
        _security_questionnaire_security_questionnaire_module__WEBPACK_IMPORTED_MODULE_14__["SecurityQuestionnaireModule"],
        _cyberscoring_service_cyberscoring_service_module__WEBPACK_IMPORTED_MODULE_15__["CyberscoringServiceModule"],
        _servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_16__["ServicessStatusModule"],
        _identity_theft_protection_itp_full_page_itp_full_page_module__WEBPACK_IMPORTED_MODULE_17__["ItpFullPageModule"],
        src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalModule"],
        _bitdefender_service_bitdefender_service_module__WEBPACK_IMPORTED_MODULE_20__["BitdefenderServiceModule"],
        _bitdefendermsm_service_bitdefendermsm_service_module__WEBPACK_IMPORTED_MODULE_49__["BitdefenderServiceMSMModule"],
        _default_service_default_service_module__WEBPACK_IMPORTED_MODULE_19__["DefaultServiceModule"],
        _acuetix_service_acuetix_service_module__WEBPACK_IMPORTED_MODULE_21__["AcuetixServiceModule"],
        _user_security_user_security_module__WEBPACK_IMPORTED_MODULE_23__["UserSecurityModule"],
        _attack_simulator_service_attack_simulator_service_module__WEBPACK_IMPORTED_MODULE_22__["AttackSimulatorServiceModule"],
        _network_protection_network_protection_module__WEBPACK_IMPORTED_MODULE_24__["NetworkProtectionModule"],
        _elearning_service_elearning_service_module__WEBPACK_IMPORTED_MODULE_25__["ElearningServiceModule"],
        _gravity_service_gravity_service_module__WEBPACK_IMPORTED_MODULE_26__["GravityServiceModule"],
        _secure_browsing_secure_browsing_module__WEBPACK_IMPORTED_MODULE_27__["SecureBrowsingModule"],
        _secure_transfer_secure_transfer_module__WEBPACK_IMPORTED_MODULE_28__["SecureTransferModule"],
        _professional_service_professional_service_module__WEBPACK_IMPORTED_MODULE_29__["ProfessionalServiceModule"],
        _digital_support_form_digital_support_form_module__WEBPACK_IMPORTED_MODULE_30__["DigitalSupportFormModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_31__["NzSpinnerModule"],
        _chat_service_chat_service_module__WEBPACK_IMPORTED_MODULE_32__["ChatServiceModule"],
        _cpr_service_cpr_service_module__WEBPACK_IMPORTED_MODULE_33__["CprServiceModule"],
        _antivirus_service_antivirus_service_module__WEBPACK_IMPORTED_MODULE_34__["AntivirusServiceModule"],
        _backup_service_backup_service_module__WEBPACK_IMPORTED_MODULE_35__["BackupServiceModule"],
        _digital_certificate_service_digital_certificate_service_module__WEBPACK_IMPORTED_MODULE_36__["DigitalCertificateServiceModule"],
        _digital_life_service_digital_life_service_module__WEBPACK_IMPORTED_MODULE_37__["DigitalLifeServiceModule"],
        _internet_report_service_internet_report_service_module__WEBPACK_IMPORTED_MODULE_38__["InternetReportServiceModule"],
        _EVD_service_EVD_service_module__WEBPACK_IMPORTED_MODULE_39__["EVDServiceModule"],
        _office_activation_service_office_activation_service_module__WEBPACK_IMPORTED_MODULE_40__["OfficeActivationServiceModule"],
        _agent_service_agent_service_module__WEBPACK_IMPORTED_MODULE_41__["AgentServiceModule"],
        _bitdefender_mobile_bitdefender_mobile_module__WEBPACK_IMPORTED_MODULE_42__["BitdefenderMobileModule"],
        _bitdefender_security_bitdefender_security_module__WEBPACK_IMPORTED_MODULE_43__["BitdefenderSecurityModule"],
        _bitdefender_total_bitdefender_total_module__WEBPACK_IMPORTED_MODULE_44__["BitdefenderTotalModule"],
        _cyber_alarm_cyber_alarm_module__WEBPACK_IMPORTED_MODULE_45__["CyberAlarmModule"],
        _digital_legacy_service_digital_legacy_service_module__WEBPACK_IMPORTED_MODULE_46__["DigitalLegacyServiceModule"],
        _digital_will_service_digital_will_service_module__WEBPACK_IMPORTED_MODULE_47__["DigitalWillServiceModule"],
        _cadastre_form_service_cadastre_form_service_module__WEBPACK_IMPORTED_MODULE_48__["CadastreFormServiceModule"],
        _family_unit_family_unit_module__WEBPACK_IMPORTED_MODULE_50__["FamilyUnitModule"],
        _trendmicro_service_trendmicro_service_module__WEBPACK_IMPORTED_MODULE_54__["TrendmicroServiceModule"],
        _rgpd_service_rgpd_service_module__WEBPACK_IMPORTED_MODULE_55__["RgpdServiceModule"],
        src_app_components_instruction_guide_instruction_guide_mobile_instruction_guide_mobile_module__WEBPACK_IMPORTED_MODULE_52__["InstructionGuideMobileModule"],
        src_app_components_instruction_guide_instruction_guide_web_instruction_guide_web_module__WEBPACK_IMPORTED_MODULE_51__["InstructionGuideWebModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _expert_support_expert_support_module__WEBPACK_IMPORTED_MODULE_4__["ExpertSupportModule"],
                    _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    src_app_modules_home_cyberscoring_service_cyberscoring_cyberscoring_module__WEBPACK_IMPORTED_MODULE_5__["CyberscoringModule"],
                    src_app_components_custom_cybersecurity_questions_cybersegurity_question_module__WEBPACK_IMPORTED_MODULE_6__["CyberSegurityQuestionModule"],
                    src_app_components_custom_cyberalarm_geolocalizacion_integrated_geolocalizacion_integrated_module__WEBPACK_IMPORTED_MODULE_8__["GeolocalizacionModule"],
                    src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_53__["CDKModalModule"],
                    //NgxGaugeModule,
                    _cybersecurity_service_cybersecurity_service_module__WEBPACK_IMPORTED_MODULE_9__["CybersecurityServiceModule"],
                    _informative_service_informative_service_module__WEBPACK_IMPORTED_MODULE_10__["InformativeServiceModule"],
                    _geolocation_service_geolocation_service_module__WEBPACK_IMPORTED_MODULE_11__["GeolocationServiceModule"],
                    _credit_card_fraud_protection_credit_card_fraud_protection_module__WEBPACK_IMPORTED_MODULE_12__["CreditCardFraudProtectionModule"],
                    _identity_theft_protection_identity_theft_protection_module__WEBPACK_IMPORTED_MODULE_13__["IdentityTheftProtectionModule"],
                    _security_questionnaire_security_questionnaire_module__WEBPACK_IMPORTED_MODULE_14__["SecurityQuestionnaireModule"],
                    _cyberscoring_service_cyberscoring_service_module__WEBPACK_IMPORTED_MODULE_15__["CyberscoringServiceModule"],
                    _servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_16__["ServicessStatusModule"],
                    _identity_theft_protection_itp_full_page_itp_full_page_module__WEBPACK_IMPORTED_MODULE_17__["ItpFullPageModule"],
                    src_app_components_custom_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalModule"],
                    _bitdefender_service_bitdefender_service_module__WEBPACK_IMPORTED_MODULE_20__["BitdefenderServiceModule"],
                    _bitdefendermsm_service_bitdefendermsm_service_module__WEBPACK_IMPORTED_MODULE_49__["BitdefenderServiceMSMModule"],
                    _default_service_default_service_module__WEBPACK_IMPORTED_MODULE_19__["DefaultServiceModule"],
                    _acuetix_service_acuetix_service_module__WEBPACK_IMPORTED_MODULE_21__["AcuetixServiceModule"],
                    _user_security_user_security_module__WEBPACK_IMPORTED_MODULE_23__["UserSecurityModule"],
                    _attack_simulator_service_attack_simulator_service_module__WEBPACK_IMPORTED_MODULE_22__["AttackSimulatorServiceModule"],
                    _network_protection_network_protection_module__WEBPACK_IMPORTED_MODULE_24__["NetworkProtectionModule"],
                    _elearning_service_elearning_service_module__WEBPACK_IMPORTED_MODULE_25__["ElearningServiceModule"],
                    _gravity_service_gravity_service_module__WEBPACK_IMPORTED_MODULE_26__["GravityServiceModule"],
                    _secure_browsing_secure_browsing_module__WEBPACK_IMPORTED_MODULE_27__["SecureBrowsingModule"],
                    _secure_transfer_secure_transfer_module__WEBPACK_IMPORTED_MODULE_28__["SecureTransferModule"],
                    _professional_service_professional_service_module__WEBPACK_IMPORTED_MODULE_29__["ProfessionalServiceModule"],
                    _digital_support_form_digital_support_form_module__WEBPACK_IMPORTED_MODULE_30__["DigitalSupportFormModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_31__["NzSpinnerModule"],
                    _chat_service_chat_service_module__WEBPACK_IMPORTED_MODULE_32__["ChatServiceModule"],
                    _cpr_service_cpr_service_module__WEBPACK_IMPORTED_MODULE_33__["CprServiceModule"],
                    _antivirus_service_antivirus_service_module__WEBPACK_IMPORTED_MODULE_34__["AntivirusServiceModule"],
                    _backup_service_backup_service_module__WEBPACK_IMPORTED_MODULE_35__["BackupServiceModule"],
                    _digital_certificate_service_digital_certificate_service_module__WEBPACK_IMPORTED_MODULE_36__["DigitalCertificateServiceModule"],
                    _digital_life_service_digital_life_service_module__WEBPACK_IMPORTED_MODULE_37__["DigitalLifeServiceModule"],
                    _internet_report_service_internet_report_service_module__WEBPACK_IMPORTED_MODULE_38__["InternetReportServiceModule"],
                    _EVD_service_EVD_service_module__WEBPACK_IMPORTED_MODULE_39__["EVDServiceModule"],
                    _office_activation_service_office_activation_service_module__WEBPACK_IMPORTED_MODULE_40__["OfficeActivationServiceModule"],
                    _agent_service_agent_service_module__WEBPACK_IMPORTED_MODULE_41__["AgentServiceModule"],
                    _bitdefender_mobile_bitdefender_mobile_module__WEBPACK_IMPORTED_MODULE_42__["BitdefenderMobileModule"],
                    _bitdefender_security_bitdefender_security_module__WEBPACK_IMPORTED_MODULE_43__["BitdefenderSecurityModule"],
                    _bitdefender_total_bitdefender_total_module__WEBPACK_IMPORTED_MODULE_44__["BitdefenderTotalModule"],
                    _cyber_alarm_cyber_alarm_module__WEBPACK_IMPORTED_MODULE_45__["CyberAlarmModule"],
                    _digital_legacy_service_digital_legacy_service_module__WEBPACK_IMPORTED_MODULE_46__["DigitalLegacyServiceModule"],
                    _digital_will_service_digital_will_service_module__WEBPACK_IMPORTED_MODULE_47__["DigitalWillServiceModule"],
                    _cadastre_form_service_cadastre_form_service_module__WEBPACK_IMPORTED_MODULE_48__["CadastreFormServiceModule"],
                    _family_unit_family_unit_module__WEBPACK_IMPORTED_MODULE_50__["FamilyUnitModule"],
                    _trendmicro_service_trendmicro_service_module__WEBPACK_IMPORTED_MODULE_54__["TrendmicroServiceModule"],
                    _rgpd_service_rgpd_service_module__WEBPACK_IMPORTED_MODULE_55__["RgpdServiceModule"],
                    src_app_components_instruction_guide_instruction_guide_mobile_instruction_guide_mobile_module__WEBPACK_IMPORTED_MODULE_52__["InstructionGuideMobileModule"],
                    src_app_components_instruction_guide_instruction_guide_web_instruction_guide_web_module__WEBPACK_IMPORTED_MODULE_51__["InstructionGuideWebModule"],
                ],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                ],
                exports: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jKnP":
/*!***************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/result/result.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_models_userProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/userProfile */ "bGa+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







var _c0 = ["basicModal"];
function ResultComponent_ng_template_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.RESULT_TITLE_CREATE"), "");
} }
function ResultComponent_ng_template_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.RESULT_TITLE_EDIT"), "");
} }
var _c1 = function (a0) { return { userName: a0 }; };
function ResultComponent_ng_template_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "FAMILY_UNIT.RESULT_INFO_CREATE", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r5.profile.name)), " ");
} }
function ResultComponent_ng_template_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "FAMILY_UNIT.RESULT_INFO_EDIT1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r6.profile.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "FAMILY_UNIT.RESULT_INFO_EDIT2"), " ");
} }
function ResultComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultComponent_ng_template_0_span_11_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResultComponent_ng_template_0_span_12_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResultComponent_ng_template_0_span_14_Template, 3, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResultComponent_ng_template_0_span_15_Template, 7, 9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_ng_template_0_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.staticContentUrl + "img/family-unit/ok_result.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isForAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isForAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isForAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isForAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 6, "FAMILY_UNIT.BTN_CLOSE"), "");
} }
var ResultComponent = /** @class */ (function () {
    function ResultComponent(modalService) {
        this.modalService = modalService;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.basicModalCloseResult = '';
        this.isForAdd = true;
    }
    ResultComponent.prototype.ngOnInit = function () {
        console.log('dentro del componente', this.isForAdd);
    };
    ResultComponent.prototype.ngAfterViewInit = function () {
        this.openBasicModal(this.basicModal);
    };
    ResultComponent.prototype.openBasicModal = function (content) {
        var _this = this;
        console.log(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.basicModalCloseResult = "Modal closed" + result;
            _this.continue();
        }).catch(function (res) {
            _this.continue();
        });
    };
    ResultComponent.prototype.continue = function () {
        this.action.emit(true);
    };
    ResultComponent.prototype.close = function () {
        this.action.emit({
            isModalOpen: false,
            action: null,
        });
        this.modalService.dismissAll();
    };
    ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], viewQuery: function ResultComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicModal = _t.first);
        } }, inputs: { isForAdd: "isForAdd", profile: "profile" }, outputs: { action: "action" }, decls: 2, vars: 0, consts: [["basicModal", ""], [1, "mt-21", "modal-head-container"], [1, "row"], [1, "col", "close-container"], ["type", "button", 1, "new-close", 3, "click"], [1, "icon-close"], [1, "row", "mb-5"], [1, "col"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["alt", "", 1, "mb-4", 3, "src"], [1, "fs-20", "mb-3", "bold", "delete-text-container", "padding-delete-fix"], [4, "ngIf"], [1, "delete-text-container"], [1, "form-group", "col-lg-12", "pl-0", "pr-0", "identity-btns", "d-flex", "justify-content-end"], [1, "d-flex", "justify-content-end"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "text-center", "d-block"], [1, "", 3, "click"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultComponent_ng_template_0_Template, 24, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.big-trash-icon[_ngcontent-%COMP%] {\n  font-size: 6rem;\n}\n\n.delete-text-container[_ngcontent-%COMP%] {\n  max-width: 382px;\n  text-align: center;\n}\n\n.padding-delete-fix[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n@media only screen and (max-width: 767px) {\n  .delete-text-container[_ngcontent-%COMP%] {\n    max-width: 300px;\n    text-align: start;\n  }\n\n  .padding-delete-fix[_ngcontent-%COMP%] {\n    padding-left: unset;\n    padding-right: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQUNOOztFQUVFO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZhbWlseS11bml0L2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5jbG9zZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmJpZy10cmFzaC1pY29ue1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbn1cblxuLmRlbGV0ZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzODJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWRkaW5nLWRlbGV0ZS1maXh7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmRlbGV0ZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cblxuICAgIC5wYWRkaW5nLWRlbGV0ZS1maXh7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgICB9XG4gICAgXG4gIH1cblxuIl19 */"] });
    return ResultComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], basicModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basicModal']
        }], isForAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qvdf":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/delte-user-profile/delte-user-profile.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DelteUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelteUserProfileComponent", function() { return DelteUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







var _c0 = ["basicModal"];
var _c1 = function (a0) { return { userName: a0 }; };
function DelteUserProfileComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DelteUserProfileComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DelteUserProfileComponent_ng_template_0_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DelteUserProfileComponent_ng_template_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.continue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, "FAMILY_UNIT.DELETE_CONFIRMATION", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r1.profile.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "FAMILY_UNIT.DELETION_DETAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "COMP_USER.BUTTONS.CANCEL"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, "FAMILY_UNIT.DELETE_BUTTON"));
} }
var DelteUserProfileComponent = /** @class */ (function () {
    function DelteUserProfileComponent(modalService, userService) {
        this.modalService = modalService;
        this.userService = userService;
        this.profile = null;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.basicModalCloseResult = "";
        this.count = 0;
    }
    DelteUserProfileComponent.prototype.ngOnInit = function () { };
    DelteUserProfileComponent.prototype.ngAfterViewInit = function () {
        this.openBasicModal(this.basicModal);
    };
    DelteUserProfileComponent.prototype.openBasicModal = function (content) {
        var _this = this;
        console.log(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        this.modalService
            .open(content, { centered: true })
            .result.then(function (result) {
            _this.basicModalCloseResult = "Modal closed" + result;
            close();
        })
            .catch(function (res) {
            close();
        });
    };
    DelteUserProfileComponent.prototype.continue = function () {
        this.profile.deleted = true;
        if (this.count === 0) {
            this.count = this.count + 1;
            this.action.emit({
                isModalOpen: false,
                action: true,
                isFordelete: true,
                profile: this.profile
            });
            this.close();
            /*
                  this.userService.deleteUserProfile(this.profile).then(
                    (resp) => {
                      console.log(resp);
                      this.close();
                      const newList = this.userService.userProfileList;
            
                      this.userService.userProfileList = newList.filter(
                        (element) => element.userProfileId !== this.profile.userProfileId
                      );
            
                      this.action.emit({
                        isModalOpen: false,
                        action: true,
                        isFordelete: true
                      });
                    },
                    (error) => {
                      console.warn(error);
                      this.close();
                    }
                  );
                  */
        }
    };
    DelteUserProfileComponent.prototype.close = function () {
        this.action.emit({
            isModalOpen: false,
            action: null,
        });
        this.modalService.dismissAll();
    };
    DelteUserProfileComponent.ɵfac = function DelteUserProfileComponent_Factory(t) { return new (t || DelteUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    DelteUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DelteUserProfileComponent, selectors: [["app-delte-user-profile"]], viewQuery: function DelteUserProfileComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicModal = _t.first);
        } }, inputs: { profile: "profile" }, outputs: { action: "action" }, decls: 2, vars: 0, consts: [["basicModal", ""], [1, "mt-21", "modal-head-container"], [1, "row"], [1, "col", "close-container"], ["type", "button", 1, "new-close", 3, "click"], [1, "icon-close"], [1, "row", "mb-5"], [1, "col"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "icon-trash", "big-trash-icon", "mb-4"], [1, "fs-20", "mb-3", "bold", "delete-text-container", "padding-delete-fix"], [1, "delete-text-container"], [1, "form-group", "col-lg-12", "pl-0", "pr-0", "identity-btns", "d-flex", "justify-content-end"], [1, "d-flex", "justify-content-end"], ["type", "submit", "disabled", "", 1, "btn", "btn-outline-secondary", "text-center", "d-block", "mr-2", "main-secondary", "text-uppercase", "ng-star-inserted"], [1, "", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "d-block", 3, "click"], [1, ""]], template: function DelteUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DelteUserProfileComponent_ng_template_0_Template, 28, 15, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.big-trash-icon[_ngcontent-%COMP%] {\n  font-size: 6rem;\n}\n\n.delete-text-container[_ngcontent-%COMP%] {\n  max-width: 382px;\n  text-align: center;\n}\n\n.padding-delete-fix[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n@media only screen and (max-width: 767px) {\n  .delete-text-container[_ngcontent-%COMP%] {\n    max-width: 300px;\n    text-align: start;\n  }\n\n  .padding-delete-fix[_ngcontent-%COMP%] {\n    padding-left: unset;\n    padding-right: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL2RlbHRlLXVzZXItcHJvZmlsZS9kZWx0ZS11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQUNOOztFQUVFO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZhbWlseS11bml0L2NvbXBvbmVudHMvZGVsdGUtdXNlci1wcm9maWxlL2RlbHRlLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5jbG9zZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmJpZy10cmFzaC1pY29ue1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbn1cblxuLmRlbGV0ZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzODJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWRkaW5nLWRlbGV0ZS1maXh7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmRlbGV0ZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cblxuICAgIC5wYWRkaW5nLWRlbGV0ZS1maXh7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgICB9XG4gICAgXG4gIH1cblxuIl19 */"] });
    return DelteUserProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DelteUserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-delte-user-profile",
                templateUrl: "./delte-user-profile.component.html",
                styleUrls: ["./delte-user-profile.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, { profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], basicModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["basicModal"]
        }] }); })();


/***/ }),

/***/ "s+x1":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/instruction-guide/instruction-guide-mobile/instruction-guide-mobile.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: InstructionGuideMobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionGuideMobileModule", function() { return InstructionGuideMobileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction-guide-mobile.component */ "TdWr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _slider_slider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../slider/slider.module */ "+ate");






var InstructionGuideMobileModule = /** @class */ (function () {
    function InstructionGuideMobileModule() {
    }
    InstructionGuideMobileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InstructionGuideMobileModule });
    InstructionGuideMobileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InstructionGuideMobileModule_Factory(t) { return new (t || InstructionGuideMobileModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _slider_slider_module__WEBPACK_IMPORTED_MODULE_4__["SliderModule"]
            ]] });
    return InstructionGuideMobileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InstructionGuideMobileModule, { declarations: [_instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideMobileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _slider_slider_module__WEBPACK_IMPORTED_MODULE_4__["SliderModule"]], exports: [_instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideMobileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionGuideMobileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _slider_slider_module__WEBPACK_IMPORTED_MODULE_4__["SliderModule"]
                ],
                declarations: [
                    _instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideMobileComponent"]
                ],
                providers: [],
                exports: [
                    _instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideMobileComponent"]
                ],
                entryComponents: [
                    _instruction_guide_mobile_component__WEBPACK_IMPORTED_MODULE_2__["InstructionGuideMobileComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uQ+M":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/add-user-profile/add-user-profile.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserProfileComponent", function() { return AddUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/ImageUtils */ "1N2o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_Timezones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/Timezones */ "2lVm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");

















var _c0 = ["basicModal"];
function AddUserProfileComponent_option_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4, " ");
} }
var AddUserProfileComponent = /** @class */ (function () {
    function AddUserProfileComponent(modalService, translate, messageService, sanitizer, userService) {
        this.modalService = modalService;
        this.translate = translate;
        this.messageService = messageService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STATIC_CONTENT;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.basicModalCloseResult = "";
        this.date = new Date();
        this.timezone = this.date.getTimezoneOffset();
        this.profile = {
            userProfileId: 0,
            userId: 0,
            name: "",
            surname: "",
            email: "",
            photo: "",
            timezone: this.timezone.toString(),
            gender: "",
            creationDate: this.date,
            creationUser: 0,
            modificationDate: this.date,
            modificationUser: 0,
            deletedDate: "",
            deleted: false,
        };
        this.image = this.staticContentUrl + "img/add-user.png";
        this.timeZoneList = _shared_Timezones__WEBPACK_IMPORTED_MODULE_8__["TIMEZONELIST"];
        this.count = 0;
    }
    AddUserProfileComponent.prototype.ngOnInit = function () { };
    AddUserProfileComponent.prototype.ngAfterViewInit = function () {
        this.openBasicModal(this.basicModal);
    };
    AddUserProfileComponent.prototype.openBasicModal = function (content) {
        var _this = this;
        this.modalService
            .open(content, { centered: true })
            .result.then(function (result) {
            _this.basicModalCloseResult = "Modal closed" + result;
            close();
        })
            .catch(function (res) {
            close();
        });
    };
    AddUserProfileComponent.prototype.continue = function () {
        var _this = this;
        console.log(this.profile);
        this.modalService.dismissAll();
        if (this.count === 0) {
            this.count = this.count + 1;
            this.userService.addUserProfile(this.profile).then(function (resp) {
                console.log(resp);
                _this.action.emit({
                    isModalOpen: false,
                    profile: _this.profile,
                    isForAdd: true,
                });
            }, function (error) {
                console.log("error: ", error);
                _this.modalService.dismissAll();
            });
        }
    };
    AddUserProfileComponent.prototype.close = function () {
        this.action.emit({
            isModalOpen: false,
            action: null,
        });
        this.modalService.dismissAll();
    };
    AddUserProfileComponent.prototype.onUploadImagen = function ($event) {
        var _this = this;
        var target = $event.target;
        if (target.files != null) {
            if (target.files.length > 0) {
                var file = target.files[0];
                var value = target.value.toLowerCase();
                var ext = value.split(".").pop();
                var name_1 = target.name.toLowerCase();
                var exts = ["png", "jpg", "jpeg", "gif"];
                if (name_1 == "favicon") {
                    exts = ["png", "jpg", "jpeg", "gif", "ico"];
                }
                if (exts.indexOf(ext) != -1) {
                    this.getBase64(file).then(function (result) {
                        src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_6__["ImageUtils"].compressImage(result, 100, 100).then(function (compressed) {
                            _this.image = compressed;
                            _this.profile.photo = _this.image;
                        });
                    });
                }
                else {
                    console.clear();
                    this.translate
                        .get("ONLY_IMAGES_ERROR")
                        .subscribe(function (res) { return _this.messageService.add(res, "error"); });
                }
            }
        }
    };
    AddUserProfileComponent.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    AddUserProfileComponent.prototype.onChangGender = function (e) {
        console.log(e.target.value);
        this.profile.gender = e.target.value;
    };
    AddUserProfileComponent.prototype.onChangTimezone = function (e) {
        this.profile.timezone = e.target.value;
    };
    AddUserProfileComponent.ɵfac = function AddUserProfileComponent_Factory(t) { return new (t || AddUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
    AddUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserProfileComponent, selectors: [["app-add-user-profile"]], viewQuery: function AddUserProfileComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicModal = _t.first);
        } }, outputs: { action: "action" }, decls: 99, vars: 52, consts: [[1, "d-flex", "w-100", "justify-content-end"], ["type", "button", 1, "btn", "ds-fs-14"], [1, "icon-close"], [1, "p-3", "w-100", "justify-content-center", "btn"], [1, "mt-21", "modal-head-container"], [1, "row"], [1, "col", "close-container"], ["type", "button", 1, "new-close", 3, "click"], [1, "col"], [1, "right-card-text", "mb-4", "fs-24", "bold"], [1, "row", "mb-3"], [1, "picture-container"], [1, ""], [1, "d-flex", "align-items-center", "modal-width-fix"], [1, "photo"], ["name", "favicon", "type", "file", "accept", "image/x-png,image/jpeg,image/gif,image/x-icon", 2, "display", "none", 3, "change"], ["profileImage", ""], ["type", "button", 1, "btn", "bback", 3, "click"], ["width", "64", "height", "64", 2, "width", "64px", "height", "64px", "border-radius", "50%", 3, "src"], [1, "text"], [1, "title"], [1, "subtitle"], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "img-container"], ["id", "image", "src", ""], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", "id", "crop", 1, "btn", "btn-primary"], [1, "form-group", "col-lg-12", "col-md-12", "col-sm-12", "mt-2", "pl-0", "pr-0", "mb-0"], [1, "w-100", "fs-12"], [1, "row", "mt-2", "mr-4", "ml-4"], ["novalidate", "", 1, "col-sm-12", "pl-0", "pr-0", "ng-untouched", "ng-pristine", "ng-invalid"], [1, "form-group", "col-md-12", "col-sm-12", "pl-0", "pr-0", "no-padding-responsive"], [1, "modal-form-label", "neutral-black"], ["type", "text", "name", "name", "maxlength", "40", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "surname", "maxlength", "40", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "maxlength", "40", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange"], ["id", "", "name", "gender", 1, "form-control", "new-input", "ng-untouched", 3, "ngModel", "ngModelChange", "change"], ["selectProfile", ""], ["value", "Male"], ["value", "Female"], ["id", "", "name", "timezone", 1, "form-control", "new-input", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-lg-12", "pl-0", "pr-0", "identity-btns", "d-flex", "justify-content-end"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "d-block", 3, "click"], [3, "value"]], template: function AddUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "hola");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserProfileComponent_Template_button_click_9_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddUserProfileComponent_Template_input_change_22_listener($event) { return ctx.onUploadImagen($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserProfileComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.click(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserProfileComponent_Template_input_ngModelChange_63_listener($event) { return ctx.profile.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserProfileComponent_Template_input_ngModelChange_68_listener($event) { return ctx.profile.surname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserProfileComponent_Template_input_ngModelChange_73_listener($event) { return ctx.profile.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 44, 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserProfileComponent_Template_select_ngModelChange_78_listener($event) { return ctx.profile.gender = $event; })("change", function AddUserProfileComponent_Template_select_change_78_listener($event) { return ctx.onChangGender($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "select", 48, 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserProfileComponent_Template_select_ngModelChange_90_listener($event) { return ctx.profile.timezone = $event; })("change", function AddUserProfileComponent_Template_select_change_90_listener($event) { return ctx.onChangTimezone($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AddUserProfileComponent_option_92_Template, 2, 2, "option", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserProfileComponent_Template_button_click_95_listener() { return ctx.continue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 22, "FAMILY_UNIT.TITLE_ADD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.sanitizer.bypassSecurityTrustUrl(ctx.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 24, "FAMILY_UNIT.PROFILE_PICTURE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 26, "FAMILY_UNIT.ACTION_DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 28, "CUT_PROFILE_IMAGE_USER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 30, "CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 32, "OK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" * ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 34, "FAMILY_UNIT.REQUIRED_FIELDS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 36, "FAMILY_UNIT.NAME"), " * ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 38, "FAMILY_UNIT.ALIAS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.surname);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 40, "FAMILY_UNIT.EMAIL"), " * ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 42, "FAMILY_UNIT.GENDER"), " * ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.gender);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 44, "FAMILY_UNIT.MALE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 46, "FAMILY_UNIT.FEMALE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 48, "FAMILY_UNIT.TIME_ZONE"), " * ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.timezone);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeZoneList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 50, "FAMILY_UNIT.BTN_CREATE"));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".add-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 64px;\n  border: solid 2px #bcc4d4;\n  width: 64px;\n  color: #bcc4d4;\n  border-radius: 64px;\n  cursor: pointer;\n}\n\n.modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.modal-width-fix[_ngcontent-%COMP%] {\n  width: 482px;\n}\n\n@media only screen and (max-width: 767px) {\n  .modal-width-fix[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n\np.title[_ngcontent-%COMP%] {\n  color: #34383f;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL2FkZC11c2VyLXByb2ZpbGUvYWRkLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL2FkZC11c2VyLXByb2ZpbGUvYWRkLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjYmNjNGQ0O1xuICB3aWR0aDogNjRweDtcbiAgY29sb3I6ICNiY2M0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDY0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWhlYWQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmNsb3NlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubW9kYWwtd2lkdGgtZml4IHtcbiAgd2lkdGg6IDQ4MnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tb2RhbC13aWR0aC1maXgge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgfVxufVxuXG5wLnRpdGxlIHtcbiAgY29sb3I6ICMzNDM4M2Y7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"] });
    return AddUserProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-add-user-profile",
                templateUrl: "./add-user-profile.component.html",
                styleUrls: ["./add-user-profile.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], basicModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["basicModal"]
        }] }); })();


/***/ }),

/***/ "vpDk":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/user-detail/user-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









var _c0 = ["basicModal"];
function UserDetailComponent_ng_template_0_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_34_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_ng_template_0_div_34_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r11.showList = false; return ctx_r11.showGrid = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.staticContentUrl + "img/family-unit/menu-square.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.staticContentUrl + "img/family-unit/menu-square.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.staticContentUrl + "img/family-unit/menu-square.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.staticContentUrl + "img/family-unit/menu-square.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_37_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " iphone de Anabel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "FAMILY_UNIT.GEOLOCATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_37_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 49);
} }
function UserDetailComponent_ng_template_0_div_37_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 44);
} }
function UserDetailComponent_ng_template_0_div_37_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r27 = ctx.$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r26.staticContentUrl + "img/family-unit/email.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27.email, " ");
} }
function UserDetailComponent_ng_template_0_div_37_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_37_div_23_div_1_Template, 4, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.detail.monitoredIdentity);
} }
function UserDetailComponent_ng_template_0_div_37_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 59);
} }
function UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 61);
} }
function UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "FAMILY_UNIT.IN_WARNING"));
} }
function UserDetailComponent_ng_template_0_div_37_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_1_Template, 1, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_2_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_3_Template, 1, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_ng_template_0_div_37_div_25_div_1_div_4_Template, 4, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r29.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r29.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r29.status > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r29.status > 0);
} }
function UserDetailComponent_ng_template_0_div_37_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_37_div_25_div_1_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.detail.monitoredIdentity);
} }
function UserDetailComponent_ng_template_0_div_37_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_37_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 49);
} }
function UserDetailComponent_ng_template_0_div_37_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 44);
} }
function UserDetailComponent_ng_template_0_div_37_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r35 = ctx.$implicit;
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r34.staticContentUrl + "img/family-unit/creditcard.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r35.alias, " ");
} }
function UserDetailComponent_ng_template_0_div_37_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_37_div_46_div_1_Template, 4, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.detail.monitoredCard);
} }
function UserDetailComponent_ng_template_0_div_37_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 59);
} }
function UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 61);
} }
function UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "FAMILY_UNIT.IN_WARNING"));
} }
function UserDetailComponent_ng_template_0_div_37_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_1_Template, 1, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_2_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_3_Template, 1, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_ng_template_0_div_37_div_48_div_1_div_4_Template, 4, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r37.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r37.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.fraudDetected);
} }
function UserDetailComponent_ng_template_0_div_37_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_37_div_48_div_1_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.detail.monitoredCard);
} }
function UserDetailComponent_ng_template_0_div_37_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserDetailComponent_ng_template_0_div_37_div_15_Template, 13, 6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserDetailComponent_ng_template_0_div_37_div_21_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserDetailComponent_ng_template_0_div_37_div_22_Template, 1, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserDetailComponent_ng_template_0_div_37_div_23_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserDetailComponent_ng_template_0_div_37_div_24_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserDetailComponent_ng_template_0_div_37_div_25_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserDetailComponent_ng_template_0_div_37_div_26_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UserDetailComponent_ng_template_0_div_37_div_44_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserDetailComponent_ng_template_0_div_37_div_45_Template, 1, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserDetailComponent_ng_template_0_div_37_div_46_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UserDetailComponent_ng_template_0_div_37_div_47_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, UserDetailComponent_ng_template_0_div_37_div_48_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, UserDetailComponent_ng_template_0_div_37_div_49_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 21, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 23, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 25, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 27, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_4"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, "FAMILY_UNIT.IDENTITY_THEFT_PROTECTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredIdentity.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredIdentity.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredIdentity.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredIdentity.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredIdentity.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredIdentity.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, "FAMILY_UNIT.SAFE_NAVIGATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 33, "FAMILY_UNIT.CARDS_PROTECTED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredCard.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredCard.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredCard.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredCard.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredCard.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detail.monitoredCard.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 35, "FAMILY_UNIT.ANTI_VIRUS"), "");
} }
function UserDetailComponent_ng_template_0_div_38_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r45.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_1_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r46.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserDetailComponent_ng_template_0_div_38_div_1_img_8_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDetailComponent_ng_template_0_div_38_div_1_img_9_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Iphone de anabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "FAMILY_UNIT.GEOLOCATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r42.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.profile.name + " " + ctx_r42.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.staticContentUrl + "img/family-unit/iphone.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.staticContentUrl + "img/family-unit/bell.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, "FAMILY_UNIT.ADVICE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 15, "FAMILY_UNIT.ACTIVATED"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.staticContentUrl + "img/family-unit/ok.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 17, "FAMILY_UNIT.PROTECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.staticContentUrl + "img/family-unit/gears.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r49.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r50.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r51.staticContentUrl + "img/family-unit/ok.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r52.staticContentUrl + "img/family-unit/red-x.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.IN_WARNING"), " ");
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r56.staticContentUrl + "img/family-unit/danger.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c1 = function (a0, a1) { return { "not-secure": a0, "": a1 }; };
function UserDetailComponent_ng_template_0_div_38_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_38_div_2_div_5_img_3_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_ng_template_0_div_38_div_2_div_5_img_4_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_28_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_29_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_30_Template, 3, 3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_31_Template, 3, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_32_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserDetailComponent_ng_template_0_div_38_div_2_div_5_div_33_Template, 4, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r48 = ctx.$implicit;
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c1, item_r48.fraudDetected, !item_r48.fraudDetected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r47.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r47.profile.name + " " + ctx_r47.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, "FAMILY_UNIT.NUMBER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.numberCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "FAMILY_UNIT.ALIAS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, "FAMILY_UNIT.LAST_ANALYSIS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.lastAnalysisDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r48.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r48.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r48.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r48.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r48.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r48.fraudDetected);
} }
function UserDetailComponent_ng_template_0_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDetailComponent_ng_template_0_div_38_div_2_div_5_Template, 34, 25, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "FAMILY_UNIT.CARDS_PROTECTED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.detail.monitoredCard);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r59.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r60.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r61.staticContentUrl + "img/family-unit/ok.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r62.staticContentUrl + "img/family-unit/red-x.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.IN_WARNING"), " ");
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r66.staticContentUrl + "img/family-unit/danger.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_38_div_3_div_5_img_3_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_ng_template_0_div_38_div_3_div_5_img_4_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_23_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_24_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_25_Template, 3, 3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_26_Template, 3, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_27_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserDetailComponent_ng_template_0_div_38_div_3_div_5_div_28_Template, 4, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r58 = ctx.$implicit;
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r57.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r57.profile.name + " " + ctx_r57.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "FAMILY_UNIT.EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r58.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "FAMILY_UNIT.LAST_ANALYSIS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 17, item_r58.lastAnalysisDate, "mm/dd/yyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.status > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.status > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.status > 0);
} }
function UserDetailComponent_ng_template_0_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDetailComponent_ng_template_0_div_38_div_3_div_5_Template, 29, 20, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "FAMILY_UNIT.IDENTITY_THEFT_PROTECTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.detail.monitoredIdentity);
} }
function UserDetailComponent_ng_template_0_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_ng_template_0_div_38_div_1_Template, 38, 19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailComponent_ng_template_0_div_38_div_2_Template, 6, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_38_div_3_Template, 6, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.detail.monitoredCard.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.detail.monitoredIdentity.length > 0);
} }
function UserDetailComponent_ng_template_0_div_40_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r67.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_40_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r68.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserDetailComponent_ng_template_0_div_40_img_8_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDetailComponent_ng_template_0_div_40_img_9_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Iphone de anabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "FAMILY_UNIT.GEOLOCATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.profile.name + " " + ctx_r8.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.staticContentUrl + "img/family-unit/iphone.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.staticContentUrl + "img/family-unit/bell.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, "FAMILY_UNIT.ADVICE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 15, "FAMILY_UNIT.ACTIVATED"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.staticContentUrl + "img/family-unit/ok.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 17, "FAMILY_UNIT.PROTECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.staticContentUrl + "img/family-unit/gears.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_41_div_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r71.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_41_div_5_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r72.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_41_div_5_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r73.staticContentUrl + "img/family-unit/ok.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_41_div_5_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r74.staticContentUrl + "img/family-unit/red-x.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_41_div_5_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_41_div_5_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.IN_WARNING"), " ");
} }
function UserDetailComponent_ng_template_0_div_41_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_41_div_5_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r78.staticContentUrl + "img/family-unit/danger.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_41_div_5_img_3_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_ng_template_0_div_41_div_5_img_4_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserDetailComponent_ng_template_0_div_41_div_5_div_28_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserDetailComponent_ng_template_0_div_41_div_5_div_29_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserDetailComponent_ng_template_0_div_41_div_5_div_30_Template, 3, 3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserDetailComponent_ng_template_0_div_41_div_5_div_31_Template, 3, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserDetailComponent_ng_template_0_div_41_div_5_div_32_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserDetailComponent_ng_template_0_div_41_div_5_div_33_Template, 4, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r70 = ctx.$implicit;
    var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c1, item_r70.fraudDetected, !item_r70.fraudDetected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r69.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r69.profile.name + " " + ctx_r69.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, "FAMILY_UNIT.NUMBER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r70.numberCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "FAMILY_UNIT.ALIAS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r70.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, "FAMILY_UNIT.LAST_ANALYSIS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r70.lastAnalysisDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r70.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r70.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r70.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r70.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r70.fraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r70.fraudDetected);
} }
function UserDetailComponent_ng_template_0_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDetailComponent_ng_template_0_div_41_div_5_Template, 34, 25, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "FAMILY_UNIT.CARDS_PROTECTED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.detail.monitoredCard);
} }
function UserDetailComponent_ng_template_0_div_42_div_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r81.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_42_div_5_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r82.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_42_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r83.staticContentUrl + "img/family-unit/ok.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_42_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r84.staticContentUrl + "img/family-unit/red-x.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_42_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.PROTECTED"), " ");
} }
function UserDetailComponent_ng_template_0_div_42_div_5_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.IN_WARNING"), " ");
} }
function UserDetailComponent_ng_template_0_div_42_div_5_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_ng_template_0_div_42_div_5_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r88.staticContentUrl + "img/family-unit/danger.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_ng_template_0_div_42_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_ng_template_0_div_42_div_5_img_3_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_ng_template_0_div_42_div_5_img_4_Template, 1, 1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserDetailComponent_ng_template_0_div_42_div_5_div_23_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserDetailComponent_ng_template_0_div_42_div_5_div_24_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserDetailComponent_ng_template_0_div_42_div_5_div_25_Template, 3, 3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserDetailComponent_ng_template_0_div_42_div_5_div_26_Template, 3, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserDetailComponent_ng_template_0_div_42_div_5_div_27_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserDetailComponent_ng_template_0_div_42_div_5_div_28_Template, 4, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r80 = ctx.$implicit;
    var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r79.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r79.profile.name + " " + ctx_r79.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "FAMILY_UNIT.EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r80.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "FAMILY_UNIT.LAST_ANALYSIS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 17, item_r80.lastAnalysisDate, ctx_r79.mm / ctx_r79.dd / ctx_r79.yyy));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80.status > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80.status > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80.status > 0);
} }
function UserDetailComponent_ng_template_0_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDetailComponent_ng_template_0_div_42_div_5_Template, 29, 20, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "FAMILY_UNIT.IDENTITY_THEFT_PROTECTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.detail.monitoredIdentity);
} }
function UserDetailComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_ng_template_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDetailComponent_ng_template_0_img_13_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserDetailComponent_ng_template_0_img_14_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_ng_template_0_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r91.showList = true; return ctx_r91.showGrid = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UserDetailComponent_ng_template_0_div_34_Template, 7, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserDetailComponent_ng_template_0_div_37_Template, 62, 37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserDetailComponent_ng_template_0_div_38_Template, 4, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserDetailComponent_ng_template_0_div_40_Template, 38, 19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UserDetailComponent_ng_template_0_div_41_Template, 6, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UserDetailComponent_ng_template_0_div_42_Template, 6, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, "FAMILY_UNIT.PROFILE_INFO"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.profile.name + " " + ctx_r1.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 17, "FAMILY_UNIT.PROFILE_CREATION_DATE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 19, ctx_r1.profile.creationDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 22, "FAMILY_UNIT.PROFILE_CREATION_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 24, ctx_r1.profile.creationDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.detail.monitoredIdentity.length > 0 || ctx_r1.detail.monitoredCard.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.detail.monitoredCard.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.detail.monitoredIdentity.length > 0);
} }
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(modalService, userService) {
        this.modalService = modalService;
        this.userService = userService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STATIC_CONTENT;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.profile = null;
        this.detail = null;
        this.basicModalCloseResult = "";
        this.showList = true;
        this.showGrid = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        console.log(this.profile, this.detail, JSON.parse(this.detail.bitdefenderMsp.data));
    };
    UserDetailComponent.prototype.ngAfterViewInit = function () {
        this.openBasicModal(this.basicModal);
    };
    UserDetailComponent.prototype.openBasicModal = function (content) {
        var _this = this;
        console.log(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        this.modalService
            .open(content, { centered: true })
            .result.then(function (result) {
            _this.basicModalCloseResult = "Modal closed" + result;
            _this.continue();
        })
            .catch(function (res) {
            _this.continue();
        });
    };
    UserDetailComponent.prototype.continue = function () {
        this.action.emit(true);
    };
    UserDetailComponent.prototype.close = function () {
        this.action.emit({
            isModalOpen: false,
            action: null,
        });
        this.modalService.dismissAll();
    };
    UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], viewQuery: function UserDetailComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicModal = _t.first);
        } }, inputs: { profile: "profile", detail: "detail" }, outputs: { action: "action" }, decls: 2, vars: 0, consts: [["basicModal", ""], [1, "mt-21", "modal-head-container"], [1, "row"], [1, "col", "close-container"], [1, "title-modal-detail"], ["type", "button", 1, "new-close", 3, "click"], [1, "icon-close"], [1, "col"], [1, "head-user-info-container"], [1, "user-detail-card-header"], [1, "img-profile-container"], ["class", "unit-card-img", "alt", "", 3, "src", 4, "ngIf"], [1, "user-info"], [1, "user-name"], [1, "email-container"], [1, "user-creation-info", "date"], [1, "mobile-grid"], [1, "user-creation-info"], [1, "options-for-view-container"], [1, "list-info", 3, "click"], [1, "icon-menu", "cursor", 2, "margin-top", "1px", "margin-right", "5px"], ["class", "scuare-info", 3, "click", 4, "ngIf"], ["class", "list-view", 4, "ngIf"], ["class", "grid-view", 4, "ngIf"], ["class", "section-grid-container", 4, "ngIf"], ["alt", "", 1, "unit-card-img", 3, "src"], [1, "scuare-info", 3, "click"], [1, ""], ["alt", "", 1, "scuare-icon", 3, "src"], [1, "one-row"], [1, "list-view"], [1, "titles-container"], [1, "title-item", "service-unit-name-title"], [1, "title-item", "title-fix"], [1, "title-item"], [1, "unit-service-list"], ["class", "service-container", 4, "ngIf"], [1, "service-container"], [1, "service-unit-name"], [1, "usage"], ["class", "ok-mark", 4, "ngIf"], ["class", "no-ok-mark", 4, "ngIf"], ["class", "devices", 4, "ngIf"], ["class", "status", 4, "ngIf"], [1, "no-ok-mark"], [1, "devices"], [1, "text-center-fix"], [1, "status"], [1, "text-center-fix-last"], [1, "ok-mark"], [1, "image-device"], [1, "image-status"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["alt", "", 1, "credit-card-detail", 3, "src"], ["class", " icon-shield-check semantic-success fs-24 fade-infinite", 4, "ngIf"], ["class", "card-status-text", "style", " color: #14bd44; margin-top: 7px", 4, "ngIf"], ["class", "icon-shield-cross semantic-danger fs-24", 4, "ngIf"], ["class", "card-status-text danger-text", "style", "margin-top: 7px", 4, "ngIf"], [1, "icon-shield-check", "semantic-success", "fs-24", "fade-infinite"], [1, "card-status-text", 2, "color", "#14bd44", "margin-top", "7px"], [1, "icon-shield-cross", "semantic-danger", "fs-24"], [1, "card-status-text", "danger-text", 2, "margin-top", "7px"], [2, "width", "60px"], [1, "grid-view"], [1, "section-grid-container"], [1, "section-grid-title"], [1, "row", "section-grid-cards"], [1, "col-lg-4", "info-card"], [1, "card-user-info"], [1, "user-small-image"], ["class", "small-image", "alt", "", 3, "src", 4, "ngIf"], [1, "card-user-device"], [1, "card-device-icon"], ["alt", "", 1, "iphone-icon", 3, "src"], [1, "device-info"], [1, "card-notification"], [1, "card-notification-icon"], ["alt", "", 1, "bell-icon", 3, "src"], [1, "card-notification-title"], [1, "card-notification-status"], [1, "card-detail-footer"], [1, "card-device-status"], [1, "card-status-icon"], [1, "greeen-shield"], ["alt", "", 3, "src"], [1, "card-status-text"], [1, "card-footer-icons"], [1, "card-info-icon"], [1, "delete-card", "icon-trash", "fs-20", "main-secondary", "cursor"], ["alt", "", 1, "small-image", 3, "src"], ["class", "col-lg-4 info-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "info-card", 3, "ngClass"], [1, "card-number"], ["class", "greeen-shield", 4, "ngIf"], ["class", "red-shield", 4, "ngIf"], ["class", "card-status-text", 4, "ngIf"], ["class", "card-status-text danger-text", 4, "ngIf"], ["class", "card-footer-icons", 4, "ngIf"], [1, "red-shield"], [1, "card-status-text", "danger-text"], ["class", "col-lg-4 info-card", 4, "ngFor", "ngForOf"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserDetailComponent_ng_template_0_Template, 43, 27, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.img-profile-container[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.unit-card-img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}\n\n.title-modal-detail[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: black;\n}\n\n.head-user-info-container[_ngcontent-%COMP%] {\n  width: 750px;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 1rem;\n}\n\n.mobile-grid[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.options-for-view-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: solid 2px #bcc4d4;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 767px) {\n  .head-user-info-container[_ngcontent-%COMP%] {\n    width: 450px;\n    display: flex;\n    flex-direction: column;\n    justify-content: unset;\n  }\n\n  .title-modal-detail[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .options-for-view-container[_ngcontent-%COMP%], .list-view[_ngcontent-%COMP%], .grid-view[_ngcontent-%COMP%], .date[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-grid[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.user-detail-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: auto;\n}\n\n@media only screen and (max-width: 767px) {\n  .user-detail-card-header[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .user-creation-info[_ngcontent-%COMP%] {\n    margin-left: 70px;\n    margin-bottom: 1rem;\n  }\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.scuare-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: baseline;\n}\n\n.one-row[_ngcontent-%COMP%] {\n  margin-top: -12px;\n}\n\n.scuare-icon[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n}\n\n.list-info[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.scuare-info[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  cursor: pointer;\n}\n\n.titles-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold;\n  padding: 1rem;\n  border: solid 2px white;\n}\n\n.title-fix[_ngcontent-%COMP%] {\n  margin-left: 126px;\n}\n\n.service-container[_ngcontent-%COMP%] {\n  border: solid 2px #bcc4d4;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 1rem;\n  padding-right: 3rem;\n}\n\n.service-unit-name[_ngcontent-%COMP%], .usage[_ngcontent-%COMP%], .devices[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  border-right: solid 2px #bcc4d4;\n}\n\n.service-unit-name[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  width: 220px;\n}\n\n.usage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n}\n\n.usage[_ngcontent-%COMP%]   .ok-mark[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background: #14bd44;\n  border-radius: 50%;\n  margin-left: -44px;\n}\n\n.usage[_ngcontent-%COMP%]   .no-ok-mark[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background: #bcc4d4;\n  border-radius: 50%;\n  margin-left: -44px;\n}\n\n.devices[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.status[_ngcontent-%COMP%] {\n  width: 60px;\n  font-size: 13px;\n}\n\n.section-grid-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 1rem;\n  margin-left: -10px;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: solid 2px #14bd44;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  margin-right: 1rem;\n}\n\n.not-secure[_ngcontent-%COMP%] {\n  border: solid 2px #eb1919;\n}\n\n.user-small-image[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.small-image[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n}\n\n.card-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.card-user-device[_ngcontent-%COMP%], .card-notification[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.card-device-icon[_ngcontent-%COMP%], .card-notification-icon[_ngcontent-%COMP%], .card-notification-title[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.device-info[_ngcontent-%COMP%], .card-notification-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.card-detail-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.iphone-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n  margin-left: -4px;\n}\n\n.bell-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n\n.greeen-shield[_ngcontent-%COMP%] {\n  background-image: url('assets/green_shield.png');\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 27px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n\n.red-shield[_ngcontent-%COMP%] {\n  background-image: url('assets/red-shield.png');\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 27px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n\n.card-device-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #14bd44;\n}\n\n.card-status-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.danger-text[_ngcontent-%COMP%] {\n  color: #eb1919;\n}\n\n.card-number[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.card-footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.card-footer-icons[_ngcontent-%COMP%]   .card-info-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.credit-card-detail[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.devices[_ngcontent-%COMP%], .status[_ngcontent-%COMP%] {\n  display: flex;\n  \n  flex-direction: column;\n  align-items: baseline;\n}\n\n.text-center-fix[_ngcontent-%COMP%] {\n  margin-left: 39px;\n}\n\n.text-center-fix-last[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.icon-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHktdW5pdC9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtFQUVGOztFQUNBO0lBQ0UsZUFBQTtFQUVGOztFQUNBOzs7O0lBSUUsYUFBQTtFQUVGOztFQUNBO0lBQ0UsY0FBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFDRjs7RUFFQTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUlBOzs7RUFHRSxtQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTs7O0VBR0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsOENBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJRTtFQUNFLGtCQUFBO0FBRko7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUhGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBT0E7RUFDRSxjQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZhbWlseS11bml0L2NvbXBvbmVudHMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuXG4uY2xvc2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW1nLXByb2ZpbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnVuaXQtY2FyZC1pbWcge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50aXRsZS1tb2RhbC1kZXRhaWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkLXVzZXItaW5mby1jb250YWluZXIge1xuICB3aWR0aDogNzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5tb2JpbGUtZ3JpZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vcHRpb25zLWZvci12aWV3LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYmNjNGQ0O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oZWFkLXVzZXItaW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgfVxuXG4gIC50aXRsZS1tb2RhbC1kZXRhaWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5vcHRpb25zLWZvci12aWV3LWNvbnRhaW5lcixcbiAgLmxpc3QtdmlldyxcbiAgLmdyaWQtdmlldyxcbiAgLmRhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWdyaWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi51c2VyLWRldGFpbC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnVzZXItZGV0YWlsLWNhcmQtaGVhZGVyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICAudXNlci1jcmVhdGlvbi1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXG4gIH1cbn1cblxuLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zY3VhcmUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ub25lLXJvdyB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuXG4uc2N1YXJlLWljb24ge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cblxuLmxpc3QtaW5mbyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2N1YXJlLWluZm8ge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRsZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cblxuLnRpdGxlLWZpeCB7XG4gIG1hcmdpbi1sZWZ0OiAxMjZweDtcbn1cblxuLnNlcnZpY2UtY29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2JjYzRkNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcblxufVxuXG4uc2VydmljZS11bml0LW5hbWUsXG4udXNhZ2UsXG4uZGV2aWNlcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4ICNiY2M0ZDQ7XG59XG5cbi5zZXJ2aWNlLXVuaXQtbmFtZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLnVzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNHB4O1xuXG4gIC5vay1tYXJrIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogIzE0YmQ0NDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC00NHB4O1xuICB9XG5cbiAgLm5vLW9rLW1hcmsge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjYmNjNGQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTQ0cHg7XG4gIH1cbn1cblxuLmRldmljZXMge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zdGF0dXMge1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2VjdGlvbi1ncmlkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5pbmZvLWNhcmQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IHNvbGlkIDJweCAjMTRiZDQ0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm5vdC1zZWN1cmUge1xuICBib3JkZXI6IHNvbGlkIDJweCAjZWIxOTE5O1xufVxuXG4udXNlci1zbWFsbC1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNtYWxsLWltYWdlIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZC11c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtdXNlci1kZXZpY2UsXG4uY2FyZC1ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1kZXZpY2UtaWNvbixcbi5jYXJkLW5vdGlmaWNhdGlvbi1pY29uLFxuLmNhcmQtbm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGV2aWNlLWluZm8sXG4uY2FyZC1ub3RpZmljYXRpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtZGV0YWlsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlwaG9uZS1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG5cbi5iZWxsLWljb24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uZ3JlZWVuLXNoaWVsZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dyZWVuX3NoaWVsZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmVkLXNoaWVsZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlZC1zaGllbGQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNhcmQtZGV2aWNlLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTRiZDQ0O1xufVxuXG4uY2FyZC1zdGF0dXMtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGFuZ2VyLXRleHQge1xuICBjb2xvcjogI2ViMTkxOTtcbn1cblxuLmNhcmQtbnVtYmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXJkLWZvb3Rlci1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5jYXJkLWluZm8taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbi5jcmVkaXQtY2FyZC1kZXRhaWx7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRldmljZXMsIC5zdGF0dXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi50ZXh0LWNlbnRlci1maXgge1xuICBtYXJnaW4tbGVmdDogMzlweDtcbn1cblxuLnRleHQtY2VudGVyLWZpeC1sYXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG59XG5cbi5pY29uLW1lbnUgIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gfVxuIl19 */"] });
    return UserDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-user-detail",
                templateUrl: "./user-detail.component.html",
                styleUrls: ["./user-detail.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], basicModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["basicModal"]
        }] }); })();


/***/ }),

/***/ "x8/L":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/home/cybersecurity-service/cybersecurity-service.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CybersecurityServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CybersecurityServiceComponent", function() { return CybersecurityServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



var CybersecurityServiceComponent = /** @class */ (function () {
    function CybersecurityServiceComponent() {
    }
    CybersecurityServiceComponent.prototype.ngOnInit = function () {
    };
    CybersecurityServiceComponent.ɵfac = function CybersecurityServiceComponent_Factory(t) { return new (t || CybersecurityServiceComponent)(); };
    CybersecurityServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CybersecurityServiceComponent, selectors: [["app-cybersecurity-service"]], decls: 9, vars: 6, consts: [[1, "ds-card", "cybersecurity-content"], [1, "description"], [1, "ds-m-bold", "ds-c-black", "ds-h2", "ds-fs-24", "ds-mb-12p"], [1, "ds-r-regular", "ds-body-primary", "ds-fs-16", "ds-c-black", "ds-mb-12p"], [1, "img-cybersecurity", "withBG"]], template: function CybersecurityServiceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "COMP_CYBERSECURITY_SERVICE.CYBERSECURITY_PLATFORM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "COMP_CYBERSECURITY_SERVICE.WELCOME_PLATFORM"), " ");
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".cybersecurity-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.cybersecurity-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 32px 24px 0px 24px;\n  max-width: 468px;\n}\n.cybersecurity-content[_ngcontent-%COMP%]   .img-cybersecurity[_ngcontent-%COMP%] {\n  width: 50%;\n  background-position: center;\n  background-size: cover;\n  width: 492px;\n  min-height: 236px;\n  background-image: url(https://devstatic.app.onlineassist.me/suite/img/cybersecurity/cybersecurity-img-web.png);\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 1;\n  opacity: 0.5;\n}\n.cybersecurity-content[_ngcontent-%COMP%]   .img-cybersecurity.withBG[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, white, white, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));\n  z-index: -1;\n}\n@media only screen and (max-width: 1000px) {\n  .cybersecurity-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .cybersecurity-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 36px;\n    max-width: 100%;\n  }\n  .cybersecurity-content[_ngcontent-%COMP%]   .img-cybersecurity[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    opacity: 1;\n    border-radius: 0px 0px 8px 8px;\n  }\n  .cybersecurity-content[_ngcontent-%COMP%]   .img-cybersecurity.withBG[_ngcontent-%COMP%]::after {\n    background: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2N5YmVyc2VjdXJpdHktc2VydmljZS9jeWJlcnNlY3VyaXR5LXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQVVFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4R0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVJKO0FBV0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkhBQUE7RUFDQSxXQUFBO0FBVEo7QUFrQkE7RUFDRTtJQUNFLGVBQUE7RUFmRjtFQWdCRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFkSjtFQWdCRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLDhCQUFBO0VBZEo7RUFpQkU7SUFDRSxnQkFBQTtFQWZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY3liZXJzZWN1cml0eS1zZXJ2aWNlL2N5YmVyc2VjdXJpdHktc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jeWJlcnNlY3VyaXR5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJiAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMzJweCAyNHB4IDBweCAyNHB4O1xuICAgIG1heC13aWR0aDogNDY4cHg7XG4gIH1cblxuICAvLyAmIC5jeS1pbWctY29udGVudCB7XG4gIC8vICAgd2lkdGg6IDUwJTtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgLy8gfVxuXG5cbiAgJiAuaW1nLWN5YmVyc2VjdXJpdHkge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDQ5MnB4O1xuICAgIG1pbi1oZWlnaHQ6IDIzNnB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RldnN0YXRpYy5hcHAub25saW5lYXNzaXN0Lm1lL3N1aXRlL2ltZy9jeWJlcnNlY3VyaXR5L2N5YmVyc2VjdXJpdHktaW1nLXdlYi5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgJiAuaW1nLWN5YmVyc2VjdXJpdHkud2l0aEJHOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCAsIHdoaXRlLCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxyZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG5cbn1cblxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmN5YmVyc2VjdXJpdHktY29udGVudCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgICYgLmRlc2NyaXB0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgJiAuaW1nLWN5YmVyc2VjdXJpdHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDtcbiAgICB9XG5cbiAgICAmIC5pbWctY3liZXJzZWN1cml0eS53aXRoQkc6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5leHAtc3VwcG9ydC1jb250ZW50IHtcblxuICB9XG59XG5cblxuIl19 */"] });
    return CybersecurityServiceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CybersecurityServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cybersecurity-service',
                templateUrl: './cybersecurity-service.component.html',
                styleUrls: ['./cybersecurity-service.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zIgQ":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/family-unit/components/user-detail/service-item/service-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiceItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceItemComponent", function() { return ServiceItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ServiceItemComponent = /** @class */ (function () {
    function ServiceItemComponent() {
    }
    ServiceItemComponent.prototype.ngOnInit = function () {
    };
    ServiceItemComponent.ɵfac = function ServiceItemComponent_Factory(t) { return new (t || ServiceItemComponent)(); };
    ServiceItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceItemComponent, selectors: [["app-service-item"]], decls: 2, vars: 0, template: function ServiceItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "service-item works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5LXVuaXQvY29tcG9uZW50cy91c2VyLWRldGFpbC9zZXJ2aWNlLWl0ZW0vc2VydmljZS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ServiceItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-item',
                templateUrl: './service-item.component.html',
                styleUrls: ['./service-item.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-home-home-module.js.map