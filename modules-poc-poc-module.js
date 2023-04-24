(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-poc-poc-module"],{

/***/ "09hZ":
/*!****************************************************!*\
  !*** ./src/app/services/dashboard-user.service.ts ***!
  \****************************************************/
/*! exports provided: DashboardUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserService", function() { return DashboardUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _validators_bytes_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/bytes.validator */ "2riZ");
/* harmony import */ var _models_DashboardUserProteccionDispositivo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/DashboardUserProteccionDispositivo */ "ZMR+");
/* harmony import */ var _models_DashboardUserSeguridadUsuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/DashboardUserSeguridadUsuario */ "1FGQ");
/* harmony import */ var _models_DashboardUserProteccionRed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/DashboardUserProteccionRed */ "mqyR");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/services.service */ "6+PL");

 //










var DashboardUserService = /** @class */ (function () {
    function DashboardUserService(http, serviceService) {
        this.http = http;
        this.serviceService = serviceService;
        this.minDate = new Date("1/1/0001 12:00:00");
        this.deviceProtectionAll = { devices: 0, alerts: 0, dateLast: this.minDate };
        this.backupAll = { licences: 0, spacedUsed: '', isNotification: false, dangerAlerts: 0, koAlerts: 0, dangerAlertsDate: this.minDate, koAlertsDate: this.minDate, okAlertsDate: this.minDate };
        this.CreditCardAll = { cards: 0, alerts: 0, alertsDate: this.minDate };
        this.CredentialsAll = { credentials: 0, alerts: 0, alertsDate: this.minDate };
        this.NetProtectionAll = { devices: 0, alerts: 0, dangerAlerts: 0, dangerAlertsDate: this.minDate, koAlertsDate: this.minDate, dateLast: this.minDate };
        this.VulnerabilitiesAll = { alerts: 0, alertsDate: this.minDate, dangerAlerts: 0, dangerAlertsDate: this.minDate, dateLast: this.minDate, isAcunetix: false };
        this.deviceProtectionSingle = { devices: 0, alerts: 0, dateLast: this.minDate };
        this.backupSingle = { licences: 0, spaceAssigned: '', spacedUsed: '', isNotification: false, dangerAlerts: 0, koAlerts: 0, dangerDate: this.minDate, koDate: this.minDate, backupPercent: 0, okDate: this.minDate };
        this.CreditCardSingle = { cards: 0, alerts: 0, alertsDate: this.minDate };
        this.CredentialsSingle = { credentials: 0, alerts: 0, alertsDate: this.minDate };
        this.NetProtectionSingle = { devices: 0, alerts: 0, dangerAlerts: 0, alertsDate: this.minDate };
        this.VulnerabilitiesPageSingle = { alerts: 0, dangerAlerts: 0, alertsDate: this.minDate, isAcunetix: false };
    }
    DashboardUserService.prototype.getUserDashboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "api/user/GetUserDashboard").toPromise().then(function (result) {
                        _this.listDashboardUser = result;
                        _this.deviceProtectionSingle.devices = 0;
                        _this.deviceProtectionSingle.alerts = 0;
                        _this.deviceProtectionAll.devices = 0;
                        _this.deviceProtectionAll.alerts = 0;
                        _this.backupSingle.licences = 0;
                        _this.backupAll.licences = 0;
                        _this.backupAll.spacedUsed = '';
                        _this.CreditCardAll.cards = 0;
                        _this.CreditCardAll.alerts = 0;
                        _this.CredentialsAll.credentials = 0;
                        _this.CredentialsAll.alerts = 0;
                        _this.NetProtectionAll.alerts = _this.NetProtectionAll.dangerAlerts = _this.NetProtectionAll.devices = 0;
                        _this.VulnerabilitiesAll.alerts = _this.VulnerabilitiesAll.dangerAlerts = 0;
                        _this.CreditCardSingle = { cards: 0, alerts: 0, alertsDate: _this.minDate };
                        _this.CredentialsSingle = { credentials: 0, alerts: 0, alertsDate: _this.minDate };
                        if (_this.listDashboardUser) {
                            var dashboardUser = void 0;
                            _this.listDashboardUserProteccionDispositivo = [];
                            _this.listDashboardUserSeguridadUsuario = [];
                            _this.listDashboardUserProteccionRed = [];
                            var dashboardUserProteccionDispositivo = void 0;
                            var dashboardUserSeguridadUsuario = void 0;
                            var dashboardUserProteccionRed = void 0;
                            var device = void 0;
                            var dateScanned = void 0;
                            var dateLast = void 0;
                            var alertmsp = void 0;
                            _this.backupAll.dangerAlerts = 0;
                            _this.backupAll.koAlerts = 0;
                            _this.NetProtectionSingle.alerts = 0;
                            _this.NetProtectionSingle.dangerAlerts = 0;
                            var auxAcronisData = 0;
                            for (var i = 0; i < _this.listDashboardUser.length; i++) {
                                dashboardUser = _this.listDashboardUser[i];
                                dashboardUserProteccionDispositivo = new _models_DashboardUserProteccionDispositivo__WEBPACK_IMPORTED_MODULE_5__["DashboardUserProteccionDispositivo"]();
                                dashboardUserProteccionDispositivo.name = dashboardUser.name;
                                dashboardUserProteccionDispositivo.surname = dashboardUser.surname;
                                dashboardUserProteccionDispositivo.deviceDesktop = -1;
                                dashboardUserProteccionDispositivo.deviceMobile = -1;
                                dashboardUserProteccionDispositivo.latestScan = _this.minDate;
                                dashboardUserProteccionDispositivo.profileImage = dashboardUser.profileImage;
                                dashboardUserProteccionDispositivo.isActive = dashboardUser.isActive;
                                dashboardUserProteccionDispositivo.isAdmin = dashboardUser.isAdmin;
                                dashboardUserSeguridadUsuario = new _models_DashboardUserSeguridadUsuario__WEBPACK_IMPORTED_MODULE_6__["DashboardUserSeguridadUsuario"]();
                                dashboardUserSeguridadUsuario.name = dashboardUser.name;
                                dashboardUserSeguridadUsuario.surname = dashboardUser.surname;
                                dashboardUserSeguridadUsuario.profileImage = dashboardUser.profileImage;
                                dashboardUserSeguridadUsuario.isActive = dashboardUser.isActive;
                                dashboardUserSeguridadUsuario.isAdmin = dashboardUser.isAdmin;
                                dashboardUserSeguridadUsuario.dangerAlerts = 0;
                                dashboardUserSeguridadUsuario.koAlerts = 0;
                                dashboardUserSeguridadUsuario.isNotification = false;
                                dashboardUserProteccionRed = new _models_DashboardUserProteccionRed__WEBPACK_IMPORTED_MODULE_7__["DashboardUserProteccionRed"]();
                                dashboardUserProteccionRed.id = dashboardUser.id;
                                dashboardUserProteccionRed.name = dashboardUser.name;
                                dashboardUserProteccionRed.surname = dashboardUser.surname;
                                dashboardUserProteccionRed.profileImage = dashboardUser.profileImage;
                                dashboardUserProteccionRed.isActive = dashboardUser.isActive;
                                dashboardUserProteccionRed.isAdmin = dashboardUser.isAdmin;
                                dashboardUserProteccionRed.koAlerts = 0;
                                dashboardUserProteccionRed.dangerAlerts = 0;
                                dashboardUserProteccionRed.createDate = _this.minDate;
                                dashboardUserProteccionRed.dangerAlertsDate = _this.minDate;
                                dashboardUserProteccionRed.koAlertsDate = _this.minDate;
                                if (dashboardUser.devices && dashboardUser.devices.length > 0) {
                                    dashboardUserProteccionDispositivo.deviceDesktop = 0;
                                    dashboardUserProteccionDispositivo.deviceMobile = 0;
                                    dashboardUserProteccionDispositivo.deviceAlertHigh = 0;
                                    dashboardUserProteccionDispositivo.deviceCheck = 0;
                                    for (var j = 0; j < dashboardUser.devices.length; j++) {
                                        device = dashboardUser.devices[j];
                                        if (device.os == "windows" || device.os == "osx")
                                            dashboardUserProteccionDispositivo.deviceDesktop++;
                                        else
                                            dashboardUserProteccionDispositivo.deviceMobile++;
                                        if (dashboardUser.isMsp) {
                                            alertmsp = 0;
                                            if (device.tasks != null && device.tasks.length > 0) {
                                                dateScanned = _this.minDate;
                                                for (var _i = 0, _a = device.tasks; _i < _a.length; _i++) {
                                                    var task = _a[_i];
                                                    alertmsp += task.filesUnresolved;
                                                    dateLast = new Date(task.dt);
                                                    dateScanned = dateLast > dateScanned ? dateLast : dateScanned;
                                                }
                                                dashboardUserProteccionDispositivo.deviceAlertHigh += alertmsp;
                                                dashboardUserProteccionDispositivo.latestScan = dateScanned > dashboardUserProteccionDispositivo.latestScan ? dateScanned : dashboardUserProteccionDispositivo.latestScan;
                                                _this.deviceProtectionAll.dateLast = dashboardUserProteccionDispositivo.latestScan > _this.deviceProtectionAll.dateLast ? dashboardUserProteccionDispositivo.latestScan : _this.deviceProtectionAll.dateLast;
                                            }
                                        }
                                        else {
                                            device.qsDate = device.qsDate != null ? new Date(device.qsDate) : _this.minDate;
                                            device.fsDate = device.fsDate != null ? new Date(device.fsDate) : _this.minDate;
                                            if (device.fsDate > device.qsDate) {
                                                if (device.fsUnresolved != 0)
                                                    dashboardUserProteccionDispositivo.deviceAlertHigh++;
                                                else
                                                    dashboardUserProteccionDispositivo.deviceCheck++;
                                                dateScanned = device.fsDate;
                                            }
                                            else if (device.fsDate < device.qsDate) {
                                                if (device.qsUnresolved != 0)
                                                    dashboardUserProteccionDispositivo.deviceAlertHigh++;
                                                else
                                                    dashboardUserProteccionDispositivo.deviceCheck++;
                                                dateScanned = device.qsDate;
                                            }
                                            else if (device.fsDate === device.qsDate) // Show as bitdefender service as no error
                                             {
                                            }
                                            else
                                                dashboardUserProteccionDispositivo.deviceAlertHigh++;
                                            if (dateScanned) {
                                                dashboardUserProteccionDispositivo.latestScan = dateScanned > dashboardUserProteccionDispositivo.latestScan ? dateScanned : dashboardUserProteccionDispositivo.latestScan;
                                                _this.deviceProtectionAll.dateLast = dashboardUserProteccionDispositivo.latestScan > _this.deviceProtectionAll.dateLast ? dashboardUserProteccionDispositivo.latestScan : _this.deviceProtectionAll.dateLast;
                                            }
                                        }
                                        if (dashboardUser.isAdmin) {
                                            _this.deviceProtectionSingle.devices = dashboardUserProteccionDispositivo.deviceDesktop + dashboardUserProteccionDispositivo.deviceMobile;
                                            _this.deviceProtectionSingle.dateLast = dashboardUserProteccionDispositivo.latestScan;
                                            _this.deviceProtectionSingle.alerts = dashboardUserProteccionDispositivo.deviceAlertHigh;
                                        }
                                    }
                                    _this.deviceProtectionAll.devices += dashboardUserProteccionDispositivo.deviceDesktop + dashboardUserProteccionDispositivo.deviceMobile;
                                    _this.deviceProtectionAll.alerts += dashboardUserProteccionDispositivo.deviceAlertHigh;
                                }
                                //acronis, se muestra las alertas y fechas de criticidad 3 y 4 sobre las de criticidad 2
                                if (dashboardUser.isAcronis) {
                                    dashboardUserSeguridadUsuario.wksInstalled = dashboardUser.acronis.wksInstalled;
                                    dashboardUserSeguridadUsuario.mobInstalled = dashboardUser.acronis.mobInstalled;
                                    dashboardUserSeguridadUsuario.spacedUsed = _validators_bytes_validator__WEBPACK_IMPORTED_MODULE_4__["BytesValidator"].GetSpaceWithDecimals(dashboardUser.acronis.spacedUsed);
                                    auxAcronisData += dashboardUser.acronis.spacedUsed;
                                    dashboardUserSeguridadUsuario.dangerAlertsDate = _this.minDate;
                                    dashboardUserSeguridadUsuario.koAlertsDate = _this.minDate;
                                    _this.backupAll.licences += 1;
                                    if (dashboardUser.acronis.events) {
                                        for (var _b = 0, _c = dashboardUser.acronis.events; _b < _c.length; _b++) {
                                            var ev = _c[_b];
                                            dateLast = new Date(ev.notificationDate);
                                            if (ev.criticity == 2) {
                                                dashboardUserSeguridadUsuario.dangerAlerts++;
                                                dashboardUserSeguridadUsuario.dangerAlertsDate = dateLast > dashboardUserSeguridadUsuario.dangerAlertsDate ? dateLast : dashboardUserSeguridadUsuario.dangerAlertsDate;
                                            }
                                            else if (ev.criticity == 3 || ev.criticity == 4) {
                                                dashboardUserSeguridadUsuario.koAlerts++;
                                                dashboardUserSeguridadUsuario.koAlertsDate = dateLast > dashboardUserSeguridadUsuario.koAlertsDate ? dateLast : dashboardUserSeguridadUsuario.koAlertsDate;
                                            }
                                            else {
                                                dashboardUserSeguridadUsuario.okAlertsDate = dateLast > dashboardUserSeguridadUsuario.okAlertsDate ? dateLast : dashboardUserSeguridadUsuario.okAlertsDate;
                                            }
                                            dashboardUserSeguridadUsuario.isNotification = true;
                                        }
                                        _this.backupAll.okAlertsDate = dashboardUserSeguridadUsuario.okAlertsDate > _this.backupAll.okAlertsDate ? dashboardUserSeguridadUsuario.okAlertsDate : _this.backupAll.okAlertsDate;
                                        _this.backupAll.dangerAlertsDate = dashboardUserSeguridadUsuario.dangerAlertsDate > _this.backupAll.dangerAlertsDate ? dashboardUserSeguridadUsuario.dangerAlertsDate : _this.backupAll.dangerAlertsDate;
                                        _this.backupAll.koAlertsDate = dashboardUserSeguridadUsuario.koAlertsDate > _this.backupAll.koAlertsDate ? dashboardUserSeguridadUsuario.koAlertsDate : _this.backupAll.koAlertsDate;
                                        _this.backupAll.dangerAlerts += dashboardUserSeguridadUsuario.dangerAlerts;
                                        _this.backupAll.koAlerts += dashboardUserSeguridadUsuario.koAlerts;
                                    }
                                    if (!_this.backupAll.isNotification) {
                                        _this.backupAll.isNotification = (_this.backupAll.dangerAlerts + _this.backupAll.koAlerts) > 0;
                                    }
                                    if (dashboardUserSeguridadUsuario.isAdmin) {
                                        _this.backupSingle.isNotification = (dashboardUserSeguridadUsuario.dangerAlerts + dashboardUserSeguridadUsuario.koAlerts) > 0;
                                        _this.backupSingle.spacedUsed = _validators_bytes_validator__WEBPACK_IMPORTED_MODULE_4__["BytesValidator"].GetSpaceWithDecimals(dashboardUser.acronis.spacedUsed);
                                        _this.backupSingle.spaceAssigned = _validators_bytes_validator__WEBPACK_IMPORTED_MODULE_4__["BytesValidator"].GetSpaceWithDecimals(dashboardUser.acronis.spaceAssigned);
                                        _this.backupSingle.koAlerts = dashboardUserSeguridadUsuario.koAlerts;
                                        _this.backupSingle.dangerAlerts = dashboardUserSeguridadUsuario.dangerAlerts;
                                        _this.backupSingle.dangerDate = dashboardUserSeguridadUsuario.dangerAlertsDate;
                                        _this.backupSingle.koDate = dashboardUserSeguridadUsuario.koAlertsDate;
                                        _this.backupSingle.okDate = dashboardUserSeguridadUsuario.okAlertsDate;
                                        _this.backupSingle.backupPercent = ((dashboardUser.acronis.spacedUsed * 100) / dashboardUser.acronis.spaceAssigned);
                                        _this.backupSingle.licences += 1;
                                    }
                                }
                                else {
                                    dashboardUserSeguridadUsuario.wksInstalled = "-";
                                    dashboardUserSeguridadUsuario.mobInstalled = "-";
                                    dashboardUserSeguridadUsuario.spacedUsed = "-";
                                }
                                //tarjetas
                                dashboardUserSeguridadUsuario.cardLength = 0;
                                if (dashboardUser.cards) {
                                    dashboardUserSeguridadUsuario.cardAlertHigh = 0;
                                    dashboardUserSeguridadUsuario.lastAnalysisDateCard = _this.minDate;
                                    dashboardUserSeguridadUsuario.cardLength = dashboardUser.cards.length;
                                    dateLast = undefined;
                                    for (var j = 0; j < dashboardUserSeguridadUsuario.cardLength; j++) {
                                        if (dashboardUser.cards[j].detection)
                                            dashboardUserSeguridadUsuario.cardAlertHigh++;
                                        if (dashboardUser.cards[j].lastAnalysisDate != null)
                                            dateLast = new Date(dashboardUser.cards[j].lastAnalysisDate);
                                        if (dateLast != undefined) {
                                            dashboardUserSeguridadUsuario.lastAnalysisDateCard = dateLast > dashboardUserSeguridadUsuario.lastAnalysisDateCard ? dateLast : dashboardUserSeguridadUsuario.lastAnalysisDateCard;
                                        }
                                        _this.CreditCardAll.cards++;
                                    }
                                    _this.CreditCardAll.alertsDate = dashboardUserSeguridadUsuario.lastAnalysisDateCard > _this.CreditCardAll.alertsDate ? dashboardUserSeguridadUsuario.lastAnalysisDateCard : _this.CreditCardAll.alertsDate;
                                    _this.CreditCardAll.alerts += dashboardUserSeguridadUsuario.cardAlertHigh;
                                    if (dashboardUserSeguridadUsuario.isAdmin) {
                                        _this.CreditCardSingle.cards = dashboardUserSeguridadUsuario.cardLength;
                                        _this.CreditCardSingle.alerts = dashboardUserSeguridadUsuario.cardAlertHigh;
                                        _this.CreditCardSingle.alertsDate = dashboardUserSeguridadUsuario.lastAnalysisDateCard;
                                    }
                                }
                                //identidad
                                dashboardUserSeguridadUsuario.identitiesLength = 0;
                                if (dashboardUser.identities) {
                                    dashboardUserSeguridadUsuario.identityAlertHigh = 0;
                                    dashboardUserSeguridadUsuario.lastAnalysisDateIdentity = _this.minDate;
                                    dashboardUserSeguridadUsuario.identitiesLength = dashboardUser.identities.length;
                                    dateLast = undefined;
                                    for (var j = 0; j < dashboardUserSeguridadUsuario.identitiesLength; j++) {
                                        if (dashboardUser.identities[j].lastAnalysisDate != null)
                                            dateLast = new Date(dashboardUser.identities[j].lastAnalysisDate);
                                        if (dateLast != undefined) {
                                            dashboardUserSeguridadUsuario.lastAnalysisDateIdentity = dateLast > dashboardUserSeguridadUsuario.lastAnalysisDateIdentity ? dateLast : dashboardUserSeguridadUsuario.lastAnalysisDateIdentity;
                                        }
                                        if (dashboardUser.identities[j].alertLength > 0) {
                                            dashboardUserSeguridadUsuario.identityAlertHigh += dashboardUser.identities[j].alertLength;
                                        }
                                        _this.CredentialsAll.credentials++;
                                    }
                                    _this.CredentialsAll.alerts += dashboardUserSeguridadUsuario.identityAlertHigh;
                                    _this.CredentialsAll.alertsDate = dashboardUserSeguridadUsuario.lastAnalysisDateIdentity > _this.CredentialsAll.alertsDate ? dashboardUserSeguridadUsuario.lastAnalysisDateIdentity : _this.CredentialsAll.alertsDate;
                                    if (dashboardUserSeguridadUsuario.isAdmin) {
                                        _this.CredentialsSingle.credentials = dashboardUserSeguridadUsuario.identitiesLength;
                                        _this.CredentialsSingle.alerts = dashboardUserSeguridadUsuario.identityAlertHigh;
                                        _this.CredentialsSingle.alertsDate = dashboardUserSeguridadUsuario.lastAnalysisDateIdentity;
                                    }
                                }
                                //Fractel
                                if (dashboardUser.lstFractel != null) {
                                    var n = dashboardUser.lstFractel.length;
                                    dashboardUserProteccionRed.devicesLength += n;
                                    var FractelData = void 0;
                                    dateLast = _this.minDate;
                                    var auxDangerDate = _this.minDate;
                                    var auxKoDate = _this.minDate;
                                    var adminDate = _this.minDate;
                                    for (var i_1 = 0; i_1 < n; i_1++) {
                                        FractelData = dashboardUser.lstFractel[i_1];
                                        if (FractelData.memoryUsedPercent > 90) {
                                            if (dashboardUserProteccionRed.isAdmin)
                                                _this.NetProtectionSingle.alerts += 1;
                                            dashboardUserProteccionRed.koAlerts++;
                                            auxKoDate = new Date(FractelData.createDate);
                                        }
                                        else if (FractelData.hDiskUsedPercent > 90) {
                                            if (dashboardUserProteccionRed.isAdmin)
                                                _this.NetProtectionSingle.alerts += 1;
                                            dashboardUserProteccionRed.koAlerts++;
                                            auxKoDate = new Date(FractelData.createDate);
                                        }
                                        else if (FractelData.memoryUsedPercent > 80) {
                                            if (dashboardUserProteccionRed.isAdmin)
                                                _this.NetProtectionSingle.dangerAlerts += 1;
                                            dashboardUserProteccionRed.dangerAlerts++;
                                            auxDangerDate = new Date(FractelData.createDate);
                                        }
                                        else if (FractelData.hDiskUsedPercent > 80) {
                                            if (dashboardUserProteccionRed.isAdmin)
                                                _this.NetProtectionSingle.dangerAlerts += 1;
                                            dashboardUserProteccionRed.dangerAlerts++;
                                            auxDangerDate = new Date(FractelData.createDate);
                                        }
                                        dateLast = new Date(FractelData.createDate);
                                        dashboardUserProteccionRed.createDate = dateLast > dashboardUserProteccionRed.createDate ? dateLast : dashboardUserProteccionRed.createDate;
                                        dashboardUserProteccionRed.dangerAlertsDate = auxDangerDate > dashboardUserProteccionRed.dangerAlertsDate ? auxDangerDate : dashboardUserProteccionRed.dangerAlertsDate;
                                        dashboardUserProteccionRed.koAlertsDate = auxKoDate > dashboardUserProteccionRed.koAlertsDate ? auxKoDate : dashboardUserProteccionRed.koAlertsDate;
                                        if (dashboardUserProteccionRed.isAdmin)
                                            adminDate = dateLast > adminDate ? dateLast : adminDate;
                                    }
                                    if (dashboardUserProteccionRed.isAdmin) {
                                        _this.NetProtectionSingle.devices = n;
                                        _this.NetProtectionSingle.alertsDate = dashboardUserProteccionRed.createDate;
                                    }
                                    _this.NetProtectionAll.devices += n;
                                    _this.NetProtectionAll.dateLast = dashboardUserProteccionRed.createDate > _this.NetProtectionAll.dateLast ? dashboardUserProteccionRed.createDate : _this.NetProtectionAll.dateLast;
                                    _this.NetProtectionAll.dangerAlertsDate = dashboardUserProteccionRed.dangerAlertsDate > _this.NetProtectionAll.dangerAlertsDate ? dashboardUserProteccionRed.dangerAlertsDate : _this.NetProtectionAll.dangerAlertsDate;
                                    _this.NetProtectionAll.koAlertsDate = dashboardUserProteccionRed.koAlertsDate > _this.NetProtectionAll.koAlertsDate ? dashboardUserProteccionRed.koAlertsDate : _this.NetProtectionAll.koAlertsDate;
                                    _this.NetProtectionAll.dangerAlerts += dashboardUserProteccionRed.dangerAlerts;
                                    _this.NetProtectionAll.alerts += dashboardUserProteccionRed.koAlerts;
                                }
                                //Acunetix
                                if (dashboardUser.acunetix) {
                                    _this.VulnerabilitiesAll.isAcunetix = true;
                                    var dateLast_1 = new Date(dashboardUser.acunetix.reportGenerated);
                                    if (dashboardUser.isAdmin) {
                                        _this.VulnerabilitiesPageSingle.alerts = dashboardUser.acunetix.reportAlertsHigh;
                                        _this.VulnerabilitiesPageSingle.dangerAlerts = dashboardUser.acunetix.reportAlertsMedium;
                                        _this.VulnerabilitiesPageSingle.alertsDate = dateLast_1;
                                        _this.VulnerabilitiesPageSingle.isAcunetix = true;
                                    }
                                    _this.VulnerabilitiesAll.alerts += dashboardUser.acunetix.reportAlertsHigh;
                                    _this.VulnerabilitiesAll.dangerAlerts += dashboardUser.acunetix.reportAlertsMedium;
                                    if (dashboardUser.acunetix.reportAlertsMedium && dashboardUser.acunetix.reportAlertsMedium > 0)
                                        _this.VulnerabilitiesAll.dangerAlertsDate = dateLast_1 > _this.VulnerabilitiesAll.dangerAlertsDate ?
                                            dateLast_1 : _this.VulnerabilitiesAll.dangerAlertsDate;
                                    if (dashboardUser.acunetix.reportAlertsHigh && dashboardUser.acunetix.reportAlertsHigh > 0)
                                        _this.VulnerabilitiesAll.alertsDate = dateLast_1 > _this.VulnerabilitiesAll.alertsDate ?
                                            dateLast_1 : _this.VulnerabilitiesAll.alertsDate;
                                    _this.VulnerabilitiesAll.dateLast = dateLast_1 > _this.VulnerabilitiesAll.dateLast ?
                                        dateLast_1 : _this.VulnerabilitiesAll.dateLast;
                                }
                                _this.listDashboardUserSeguridadUsuario.push(dashboardUserSeguridadUsuario);
                                _this.listDashboardUserProteccionDispositivo.push(dashboardUserProteccionDispositivo);
                                _this.listDashboardUserProteccionRed.push(dashboardUserProteccionRed);
                            }
                            _this.backupAll.spacedUsed = _validators_bytes_validator__WEBPACK_IMPORTED_MODULE_4__["BytesValidator"].GetSpaceWithDecimals(auxAcronisData);
                            // for(let s of this.serviceService.userServices){
                            //   if(s.typeCode=="CPR" || s.typeCode=="BMS") this.deviceProtectionName = s.name;
                            //   else if(s.typeCode=="CAC") this.backupName=s.name;
                            //   else if(s.typeCode=="CIT") this.CreditCardName=s.name;
                            //   else if(s.typeCode=="CII") this.CredentialName =s.name;
                            //   else if(s.typeCode=="CFR") this.NetProtectionName =s.name;
                            //   else if(s.typeCode=="ACU") this.VulnerabilitiesName=s.name;
                            // }
                        }
                    })];
            });
        });
    };
    DashboardUserService.ɵfac = function DashboardUserService_Factory(t) { return new (t || DashboardUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_8__["ServicesService"])); };
    DashboardUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardUserService, factory: DashboardUserService.ɵfac, providedIn: 'root' });
    return DashboardUserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_services_service__WEBPACK_IMPORTED_MODULE_8__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "0MNC":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var LayoutModule = /*#__PURE__*/Object(_home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function LayoutModule() {
  Object(_home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutModule);
});
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  }
});
/*@__PURE__*/
(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{}]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
var mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
var mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
var MediaMatcher = /*#__PURE__*/function () {
  function MediaMatcher(_platform) {
    Object(_home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MediaMatcher);
    this._platform = _platform;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ?
    // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
    // call it from a different scope.
    window.matchMedia.bind(window) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  Object(_home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MediaMatcher, [{
    key: "matchMedia",
    value: function matchMedia(query) {
      if (this._platform.WEBKIT) {
        createEmptyStyleRule(query);
      }
      return this._matchMedia(query);
    }
  }]);
  return MediaMatcher;
}();
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
  return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
};
MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function MediaMatcher_Factory() {
    return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
  },
  token: MediaMatcher,
  providedIn: "root"
});
MediaMatcher.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
  }];
};
/*@__PURE__*/
(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MediaMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
    }];
  }, null);
})();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: function addListener() {},
    removeListener: function removeListener() {}
  };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
var BreakpointObserver = /*#__PURE__*/function () {
  function BreakpointObserver(_mediaMatcher, _zone) {
    Object(_home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BreakpointObserver);
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    /**  A map of all media queries currently being listened for. */
    this._queries = new Map();
    /** A subject for all other observables to takeUntil based on. */
    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  Object(_home_gcarrillo_proyectos_fractalia_suite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BreakpointObserver, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroySubject.next();
      this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
  }, {
    key: "isMatched",
    value: function isMatched(value) {
      var _this = this;
      var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceArray"])(value));
      return queries.some(function (mediaQuery) {
        return _this._registerQuery(mediaQuery).mql.matches;
      });
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
  }, {
    key: "observe",
    value: function observe(value) {
      var _this2 = this;
      var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceArray"])(value));
      var observables = queries.map(function (query) {
        return _this2._registerQuery(query).observable;
      });
      var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(observables);
      // Emit the first state immediately, and then debounce the subsequent emissions.
      stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(0)));
      return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (breakpointStates) {
        var response = {
          matches: false,
          breakpoints: {}
        };
        breakpointStates.forEach(function (_ref) {
          var matches = _ref.matches,
            query = _ref.query;
          response.matches = response.matches || matches;
          response.breakpoints[query] = matches;
        });
        return response;
      }));
    }
    /** Registers a specific query to be listened for. */
  }, {
    key: "_registerQuery",
    value: function _registerQuery(query) {
      var _this3 = this;
      // Only set up a new MediaQueryList if it is not already being listened for.
      if (this._queries.has(query)) {
        return this._queries.get(query);
      }
      var mql = this._mediaMatcher.matchMedia(query);
      // Create callback for match changes and add it is as a listener.
      var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
        var handler = function handler(e) {
          return _this3._zone.run(function () {
            return observer.next(e);
          });
        };
        mql.addListener(handler);
        return function () {
          mql.removeListener(handler);
        };
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref2) {
        var matches = _ref2.matches;
        return {
          query: query,
          matches: matches
        };
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject));
      // Add the MediaQueryList to the set of queries.
      var output = {
        observable: queryObservable,
        mql: mql
      };
      this._queries.set(query, output);
      return output;
    }
  }]);
  return BreakpointObserver;
}();
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
  return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
};
BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function BreakpointObserver_Factory() {
    return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
  },
  token: BreakpointObserver,
  providedIn: "root"
});
BreakpointObserver.ctorParameters = function () {
  return [{
    type: MediaMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }];
};
/*@__PURE__*/
(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BreakpointObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MediaMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }];
  }, null);
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
  return queries.map(function (query) {
    return query.split(',');
  }).reduce(function (a1, a2) {
    return a1.concat(a2);
  }).map(function (query) {
    return query.trim();
  });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
var Breakpoints = {
  XSmall: '(max-width: 599.99px)',
  Small: '(min-width: 600px) and (max-width: 959.99px)',
  Medium: '(min-width: 960px) and (max-width: 1279.99px)',
  Large: '(min-width: 1280px) and (max-width: 1919.99px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "1FGQ":
/*!*********************************************************!*\
  !*** ./src/app/models/DashboardUserSeguridadUsuario.ts ***!
  \*********************************************************/
/*! exports provided: DashboardUserSeguridadUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserSeguridadUsuario", function() { return DashboardUserSeguridadUsuario; });
var DashboardUserSeguridadUsuario = /** @class */ (function () {
    function DashboardUserSeguridadUsuario() {
        this.spacedUsed = '-1';
        this.spaceAssigned = '-1';
        this.wksInstalled = '';
        this.mobInstalled = '';
    }
    return DashboardUserSeguridadUsuario;
}());



/***/ }),

/***/ "1q0s":
/*!******************************************************************!*\
  !*** ./src/app/modules/poc/delete-card/delete-card.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCardComponent", function() { return DeleteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_dashboard_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dashboard-user.service */ "09hZ");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_services_monitored_cards_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitored-cards.service */ "Y0uy");
/* harmony import */ var _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/family-unit.service */ "5SoQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");















function DeleteCardComponent_section_3_nz_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spinner");
} }
function DeleteCardComponent_section_3_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CANCEL"), " ");
} }
function DeleteCardComponent_section_3_nz_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spinner");
} }
function DeleteCardComponent_section_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_GRAVITY.REMOVE_FORM.DELETE_BUTTON"), " ");
} }
function DeleteCardComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCardComponent_section_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DeleteCardComponent_section_3_nz_spinner_17_Template, 1, 0, "nz-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DeleteCardComponent_section_3_div_18_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCardComponent_section_3_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DeleteCardComponent_section_3_nz_spinner_20_Template, 1, 0, "nz-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DeleteCardComponent_section_3_div_21_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "CYBERALARM.CARDS.REMOVE_FORM.SURE1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "CYBERALARM.CARDS.REMOVE_FORM.SURE2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCard.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.loading ? "focus" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
var DeleteCardComponent = /** @class */ (function () {
    function DeleteCardComponent(activeModal, monitoredCardsService, translate, _messageService, dashboardService, familyUnitService) {
        this.activeModal = activeModal;
        this.monitoredCardsService = monitoredCardsService;
        this.translate = translate;
        this._messageService = _messageService;
        this.dashboardService = dashboardService;
        this.familyUnitService = familyUnitService;
        this.loading = false;
    }
    DeleteCardComponent.prototype.ngOnInit = function () {
        console.log(this.selectedCard);
    };
    Object.defineProperty(DeleteCardComponent.prototype, "messageService", {
        get: function () {
            return this._messageService;
        },
        set: function (value) {
            this._messageService = value;
        },
        enumerable: false,
        configurable: true
    });
    DeleteCardComponent.prototype.deleteCard = function () {
        var _this = this;
        this.loading = true;
        this.translate
            .get("REQUEST_DELETE_SERVICE")
            .subscribe(function (res) { return _this.messageService.add(res, "ok"); });
        this.monitoredCardsService
            .deleteMonitoredCard(this.selectedCard.itemId)
            .then(function (result) {
            _this.loading = false;
            if (result) {
                _this.messageService.add(_this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_OK"), "ok");
                _this.closeModal(true);
                _this.familyUnitService.emitDeleteCard(true);
                _this.dashboardService.getUserDashboard();
            }
            else {
                _this.messageService.add(_this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_ERROR"), "error");
                _this.closeModal();
            }
        });
    };
    DeleteCardComponent.prototype.closeModal = function (value) {
        this.activeModal.close(value);
    };
    DeleteCardComponent.ɵfac = function DeleteCardComponent_Factory(t) { return new (t || DeleteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_monitored_cards_service__WEBPACK_IMPORTED_MODULE_5__["MonitoredCardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_user_service__WEBPACK_IMPORTED_MODULE_3__["DashboardUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_6__["FamilyUnitService"])); };
    DeleteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteCardComponent, selectors: [["app-delete-card"]], inputs: { selectedCard: "selectedCard" }, decls: 4, vars: 1, consts: [[1, "modal-content", 2, "max-height", "500px", "min-height", "480px", "max-width", "400px", "padding", "1rem"], [1, "d-flex", "w-100", "justify-content-end"], [1, "icon-close", "ds-fs-14", "ds-cur-pointer", 3, "click"], ["class", "row mt-2 mr-4 ml-4 mb-4", 4, "ngIf"], [1, "row", "mt-2", "mr-4", "ml-4", "mb-4"], [1, "col-sm-12", "pl-0", "pr-0", "d-flex", "justify-content-center"], [1, "new-modal-img", "mb-4", "mt-0", "fs-78", "icon-trash", "neutral-black"], [1, "col-sm-12", "pl-0", "pr-0", "mb-2", "d-flex", "justify-content-center"], [1, "wizard-modal-title", "fs-20", "lh-24", "neutral-black"], [1, "wizard-modal-text", "neutral-black", "fs-16", "lh-19"], [1, "col-sm-12", "pl-0", "pr-0", "wizard-modal-btns", "d-flex"], [1, "btn", "btn-outline-secondary", "wizard-modal-btn", "mr-2", 3, "ngClass", "click"], [4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "btn", "btn-primary", "wizard-modal-btn", 3, "click"], [1, "text-uppercase"]], template: function DeleteCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCardComponent_Template_div_click_2_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteCardComponent_section_3_Template, 22, 12, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCard);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9jL2RlbGV0ZS1jYXJkL2RlbGV0ZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return DeleteCardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-delete-card",
                templateUrl: "./delete-card.component.html",
                styleUrls: ["./delete-card.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: src_app_services_monitored_cards_service__WEBPACK_IMPORTED_MODULE_5__["MonitoredCardsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: src_app_services_dashboard_user_service__WEBPACK_IMPORTED_MODULE_3__["DashboardUserService"] }, { type: _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_6__["FamilyUnitService"] }]; }, { selectedCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2riZ":
/*!***********************************************!*\
  !*** ./src/app/validators/bytes.validator.ts ***!
  \***********************************************/
/*! exports provided: BytesValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesValidator", function() { return BytesValidator; });
var BytesValidator = /** @class */ (function () {
    function BytesValidator() {
    }
    BytesValidator.FormatBytes = function (size) {
        if (size === 0)
            return 0;
        var bytesSize = size.replace(BytesValidator.numberRegex, '').replace(BytesValidator.spaceRegex, '');
        var k = 1024;
        var sizes = ['TB', 'GB', 'MB', 'KB', 'B'];
        var unit = size.replace(/[0-9]/g, '').replace(BytesValidator.spaceRegex, '');
        for (var index = sizes.indexOf(unit); index < sizes.length - 1; index++) {
            bytesSize = bytesSize * k;
        }
        return bytesSize;
    };
    BytesValidator.GetSpaceWithDecimals = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return '0 Bytes';
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + BytesValidator.units[i];
    };
    BytesValidator.GetSpaceWithDecimals2 = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return 0;
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    };
    BytesValidator.numberRegex = /\D/g;
    BytesValidator.spaceRegex = /\s/g;
    BytesValidator.formatRegex = /^[0-9]+[\s]{0,1}[KMGT]{0,1}B$/;
    BytesValidator.units = ['B', 'KB', 'MB', 'GB', 'TB'];
    BytesValidator.ValidateBytes = function (size) {
        var result = false;
        size = size.toUpperCase();
        var correctFormat = BytesValidator.formatRegex.test(size);
        BytesValidator.units.forEach(function (e) {
            result = result || size.indexOf(e) > 0;
        });
        if (result && correctFormat)
            return BytesValidator.FormatBytes(size);
        else
            return 0;
    };
    return BytesValidator;
}());



/***/ }),

/***/ "3SjU":
/*!*******************************************!*\
  !*** ./src/app/modules/poc/poc.module.ts ***!
  \*******************************************/
/*! exports provided: PocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocModule", function() { return PocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _poc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poc.component */ "v8D2");
/* harmony import */ var _poc_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poc.routing */ "LUJy");
/* harmony import */ var src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/cdk-modal/cdk-modal.module */ "xG9v");
/* harmony import */ var _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/servicess-status/servicess-status.module */ "LmLT");
/* harmony import */ var _delete_profile_delete_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-profile/delete-profile.module */ "VJj+");
/* harmony import */ var _add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-profile/add-profile.module */ "H2Rf");
/* harmony import */ var _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-profile/edit-profile.module */ "v1tv");
/* harmony import */ var _profile_info_profile_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-info/profile-info.module */ "lzg0");
/* harmony import */ var _delete_card_delete_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delete-card/delete-card.component */ "1q0s");
/* harmony import */ var _warning_card_warning_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./warning-card/warning-card.component */ "HZlV");














var PocModule = /** @class */ (function () {
    function PocModule() {
    }
    PocModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PocModule });
    PocModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PocModule_Factory(t) { return new (t || PocModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _poc_routing__WEBPACK_IMPORTED_MODULE_4__["PocRoutingModule"],
                _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_6__["ServicessStatusModule"],
                src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_5__["CDKModalModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_8__["AddProfileModule"],
                _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_9__["EditProfileModule"],
                _delete_profile_delete_profile_module__WEBPACK_IMPORTED_MODULE_7__["DeleteProfileModule"],
                _profile_info_profile_info_module__WEBPACK_IMPORTED_MODULE_10__["ProfileInfoModule"],
            ]] });
    return PocModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PocModule, { declarations: [_poc_component__WEBPACK_IMPORTED_MODULE_3__["PocComponent"], _delete_card_delete_card_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCardComponent"], _warning_card_warning_card_component__WEBPACK_IMPORTED_MODULE_12__["WarningCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _poc_routing__WEBPACK_IMPORTED_MODULE_4__["PocRoutingModule"],
        _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_6__["ServicessStatusModule"],
        src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_5__["CDKModalModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_8__["AddProfileModule"],
        _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_9__["EditProfileModule"],
        _delete_profile_delete_profile_module__WEBPACK_IMPORTED_MODULE_7__["DeleteProfileModule"],
        _profile_info_profile_info_module__WEBPACK_IMPORTED_MODULE_10__["ProfileInfoModule"]], exports: [_poc_component__WEBPACK_IMPORTED_MODULE_3__["PocComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PocModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _poc_routing__WEBPACK_IMPORTED_MODULE_4__["PocRoutingModule"],
                    _home_servicess_status_servicess_status_module__WEBPACK_IMPORTED_MODULE_6__["ServicessStatusModule"],
                    src_app_components_cdk_modal_cdk_modal_module__WEBPACK_IMPORTED_MODULE_5__["CDKModalModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _add_profile_add_profile_module__WEBPACK_IMPORTED_MODULE_8__["AddProfileModule"],
                    _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_9__["EditProfileModule"],
                    _delete_profile_delete_profile_module__WEBPACK_IMPORTED_MODULE_7__["DeleteProfileModule"],
                    _profile_info_profile_info_module__WEBPACK_IMPORTED_MODULE_10__["ProfileInfoModule"],
                ],
                declarations: [_poc_component__WEBPACK_IMPORTED_MODULE_3__["PocComponent"], _delete_card_delete_card_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCardComponent"], _warning_card_warning_card_component__WEBPACK_IMPORTED_MODULE_12__["WarningCardComponent"]],
                exports: [_poc_component__WEBPACK_IMPORTED_MODULE_3__["PocComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "HZlV":
/*!********************************************************************!*\
  !*** ./src/app/modules/poc/warning-card/warning-card.component.ts ***!
  \********************************************************************/
/*! exports provided: WarningCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningCardComponent", function() { return WarningCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function WarningCardComponent_nz_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spinner");
} }
function WarningCardComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "WIZARD.BTNS.CLOSE"), " ");
} }
var WarningCardComponent = /** @class */ (function () {
    function WarningCardComponent(activeModal) {
        this.activeModal = activeModal;
        this.loading = false;
    }
    WarningCardComponent.prototype.ngOnInit = function () { };
    WarningCardComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    WarningCardComponent.ɵfac = function WarningCardComponent_Factory(t) { return new (t || WarningCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
    WarningCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarningCardComponent, selectors: [["app-warning-card"]], inputs: { selectedCard: "selectedCard" }, decls: 20, vars: 8, consts: [[1, "modal-content", "breachModal"], [1, "new-modal-header", "row", "ml-4"], [1, "col-sm-12", "d-flex", "justify-content-end"], ["type", "button", "id", "closeModal", "aria-label", "Close", 1, "new-close", "col-1", "pr-0", 3, "click"], [1, "icon-close", 3, "click"], [1, "row", "mt-2", "mr-4", "ml-4", "mb-4", "breach-body"], [1, "col-sm-12", "pl-0", "pr-0", "d-flex", "justify-content-center"], [1, "new-modal-img", "mb-4", "mt-0", "fs-78", "icon-warning", "semantic-danger"], [1, "col-sm-12", "pl-0", "pr-0", "mb-2", "d-flex", "justify-content-center"], [1, "wizard-modal-title", "fs-20", "lh-24", "neutral-black"], [1, "wizard-modal-text", "neutral-black", "fs-16", "lh-19"], [1, "col-sm-12", "mt-3", "pl-0", "pr-0", "justify-content-end", "d-flex"], [1, "btn", "btn-primary", "wizard-modal-btn", 3, "click"], [4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "text-uppercase"]], template: function WarningCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningCardComponent_Template_button_click_3_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningCardComponent_Template_div_click_4_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningCardComponent_Template_button_click_17_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WarningCardComponent_nz_spinner_18_Template, 1, 0, "nz-spinner", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WarningCardComponent_div_19_Template, 3, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, "CYBERALARM.CARDS.FRAUD_MODAL.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, "CYBERALARM.CARDS.FRAUD_MODAL.TEXT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9jL3dhcm5pbmctY2FyZC93YXJuaW5nLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return WarningCardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-warning-card",
                templateUrl: "./warning-card.component.html",
                styleUrls: ["./warning-card.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { selectedCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LUJy":
/*!********************************************!*\
  !*** ./src/app/modules/poc/poc.routing.ts ***!
  \********************************************/
/*! exports provided: PocRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocRoutingModule", function() { return PocRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _poc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poc.component */ "v8D2");





var routes = [
    {
        path: '',
        component: _poc_component__WEBPACK_IMPORTED_MODULE_2__["PocComponent"]
    },
];
var PocRoutingModule = /** @class */ (function () {
    function PocRoutingModule() {
    }
    PocRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PocRoutingModule });
    PocRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PocRoutingModule_Factory(t) { return new (t || PocRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PocRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PocRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PocRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QT3/":
/*!********************************************************************!*\
  !*** ./src/app/modules/poc/profile-info/profile-info.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal.service */ "WDzv");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _home_identity_theft_protection_itp_delete_item_itp_delete_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../home/identity-theft-protection/itp-delete-item/itp-delete-item.component */ "YQtU");
/* harmony import */ var _home_identity_theft_protection_itp_warning_modal_itp_warning_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home/identity-theft-protection/itp-warning-modal/itp-warning-modal.component */ "CpQq");
/* harmony import */ var _service_service_one_page_shared_serviceCodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/service-one-page/shared/serviceCodes */ "sK00");
/* harmony import */ var _delete_card_delete_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../delete-card/delete-card.component */ "1q0s");
/* harmony import */ var _warning_card_warning_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../warning-card/warning-card.component */ "HZlV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function ProfileInfoComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 25);
} }
function ProfileInfoComponent_ng_container_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.profile.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProfileInfoComponent_ng_container_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "FAMILY_UNIT.PROFILE_CREATION_DATE"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, ctx_r4.profile.creationDate, "dd/MM/yyyy"), " ");
} }
var _c0 = function (a0) { return { "ds-mt-12p": a0 }; };
function ProfileInfoComponent_ng_container_5_div_31_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var device_r15 = ctx.$implicit;
    var c_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, c_r16 > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", device_r15.itemIcon, " ds-mr-8p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r15.itemName);
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileInfoComponent_ng_container_5_div_31_ng_container_7_span_2_Template, 4, 7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r7.devices);
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_container_11_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "CYBERALARM.IDENTITIES.PROTECTING"));
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_container_11_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "CYBERALARM.IDENTITIES.DANGER"));
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileInfoComponent_ng_container_5_div_31_ng_container_11_div_2_ng_container_1_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileInfoComponent_ng_container_5_div_31_ng_container_11_div_2_ng_container_2_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var device_r19 = ctx.$implicit;
    var c_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, c_r20 > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r19.itemStatus === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r19.itemStatus > 0);
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileInfoComponent_ng_container_5_div_31_ng_container_11_div_2_Template, 3, 5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r7.devices);
} }
function ProfileInfoComponent_ng_container_5_div_31_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c1 = function (a0) { return { "status-ok": a0 }; };
var _c2 = function (a0) { return { "text-center": a0 }; };
function ProfileInfoComponent_ng_container_5_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileInfoComponent_ng_container_5_div_31_ng_container_7_Template, 3, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileInfoComponent_ng_container_5_div_31_ng_template_8_Template, 2, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfileInfoComponent_ng_container_5_div_31_ng_container_11_Template, 3, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileInfoComponent_ng_container_5_div_31_ng_template_12_Template, 2, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, item_r7.isUsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, item_r7.devices.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.devices.length)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, item_r7.devices.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.devices.length)("ngIfElse", _r12);
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_b_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CYBERALARM.IDENTITIES.EMAIL"), ":");
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_b_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CYBERALARM.CARDS.ALIAS"), ":");
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_b_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CYBERSECURITY.PROTECTION.DEVICE"), ":");
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_p_14_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CYBERALARM.CARDS.NUM"), ":");
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_p_14_b_1_Template, 3, 3, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var device_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.serviceType == "CIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r27.itemValue, " ");
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "CYBERALARM.IDENTITIES.PROTECTING"));
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "CYBERALARM.IDENTITIES.DANGER"));
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_29_Template(rf, ctx) { if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); var device_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r40.openWarningModal(item_r24, device_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); var device_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.deleteItem(item_r24, device_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c3 = function () { return ["BMS", "MSM"]; };
var _c4 = function () { return ["CIT"]; };
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_b_9_Template, 3, 3, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_b_10_Template, 3, 3, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_b_11_Template, 3, 3, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_p_14_Template, 4, 2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_26_Template, 6, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_27_Template, 6, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_29_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_div_30_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var device_r27 = ctx.$implicit;
    var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", device_r27.itemStatus === 0 ? "ok" : "ko");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r26.imageRounded, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r26.profile.name + " " + ctx_r26.profile.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.serviceType == "CII");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.serviceType == "CIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3).includes(item_r24.serviceType));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r27.itemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4).includes(item_r24.serviceType));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, "CYBERALARM.IDENTITIES.LASTANALISYS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 16, device_r27.itemDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r27.itemStatus === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r27.itemStatus > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r27.itemStatus > 0 && (item_r24.serviceType == "CII" || item_r24.serviceType == "CIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.serviceType == "CII" || item_r24.serviceType == "CIT");
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_div_4_Template, 31, 21, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r24.devices);
} }
function ProfileInfoComponent_ng_container_5_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileInfoComponent_ng_container_5_ng_container_34_ng_container_1_Template, 5, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.devices.length);
} }
var _c5 = function (a0) { return { "ds-c-primary": a0 }; };
function ProfileInfoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileInfoComponent_ng_container_5_div_2_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileInfoComponent_ng_container_5_img_3_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileInfoComponent_ng_container_5_div_10_Template, 4, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileInfoComponent_ng_container_5_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.onShowServiceInTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileInfoComponent_ng_container_5_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.onHideServiceInTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProfileInfoComponent_ng_container_5_div_31_Template, 14, 14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProfileInfoComponent_ng_container_5_ng_container_34_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.profile.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.profile.name + " " + ctx_r0.profile.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.profile.isOwnerAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c5, ctx_r0.showServiceInTable));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c5, !ctx_r0.showServiceInTable));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.showServiceInTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 15, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 17, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 19, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 21, "FAMILY_UNIT.USER_DETAIL_TABLE_TITLE_4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.serviceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.showServiceInTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.serviceList);
} }
function ProfileInfoComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(modalRef, userService, ngbModalService, CDKmodalService, breakpointObserver) {
        this.modalRef = modalRef;
        this.userService = userService;
        this.ngbModalService = ngbModalService;
        this.CDKmodalService = CDKmodalService;
        this.breakpointObserver = breakpointObserver;
        this.loading = true;
        this.showList = true;
        this.showGrid = false;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].STATIC_CONTENT;
        this.imageRounded = this.staticContentUrl + 'img/family-unit/fi-cnsuxl-user-circle.png';
        this.serviceList = [];
        this.showServiceInTable = true;
        this.checkBreakPoint();
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
        this.profile = this.modalRef.config.data;
        if (this.profile.photo)
            this.imageRounded = this.profile.photo;
        this.loadProfileEditById(this.profile.userProfileId);
        console.log(this.serviceList, 'servicelist');
        /*window.addEventListener("resize", e => {
          if(document.body.clientWidth >= 751) {
            this.showServiceInTable = true;
          }
          if(document.body.clientWidth <= 751) {
            this.showServiceInTable = false;
          }
        });*/
    };
    ProfileInfoComponent.prototype.checkBreakPoint = function () {
        var _this = this;
        this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall)
            .subscribe(function (state) {
            if (state.matches) {
                _this.showServiceInTable = false;
            }
        });
        this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Web)
            .subscribe(function (state) {
            if (state.matches) {
                _this.showServiceInTable = true;
            }
        });
    };
    ProfileInfoComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    ProfileInfoComponent.prototype.onShowServiceInTable = function () {
        this.showServiceInTable = true;
    };
    ProfileInfoComponent.prototype.onHideServiceInTable = function () {
        this.showServiceInTable = false;
    };
    ProfileInfoComponent.prototype.loadProfileEditById = function (userProfileId) {
        var _this = this;
        this.userService.getUserProfileData(userProfileId).then(function (res) {
            _this.serviceList = res;
            _this.loading = false;
        });
    };
    ProfileInfoComponent.prototype.deleteItem = function (service, item) {
        if (service.serviceType === _service_service_one_page_shared_serviceCodes__WEBPACK_IMPORTED_MODULE_9__["ServiceTypes"].IdentityTheftProtection) { //email
            this.deleteEmail(item);
        }
        if (service.serviceType === _service_service_one_page_shared_serviceCodes__WEBPACK_IMPORTED_MODULE_9__["ServiceTypes"].CreditCardProtection) {
            this.deleteCard(item);
        }
    };
    ProfileInfoComponent.prototype.deleteEmail = function (item) {
        var _this = this;
        var data = {
            identityId: item.itemId,
            identity: item.itemName,
        };
        var config = {
            data: data,
            modalClass: "ds-modal-sm",
            position: "top-center",
        };
        var modal = this.CDKmodalService.open(_home_identity_theft_protection_itp_delete_item_itp_delete_item_component__WEBPACK_IMPORTED_MODULE_7__["ItpDeleteItemComponent"], config);
        modal.afterClosed$.subscribe(function (deleteEmail) {
            if (deleteEmail) {
                _this.loadProfileEditById(_this.profile.userProfileId);
            }
        });
    };
    ProfileInfoComponent.prototype.deleteCard = function (item) {
        var _this = this;
        var ngbModalOptions = {
            centered: true,
            size: "sm",
            backdropClass: "modal-pp",
        };
        var modalRef = this.ngbModalService.open(_delete_card_delete_card_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCardComponent"], ngbModalOptions);
        modalRef.componentInstance.selectedCard = item;
        modalRef.result.then(function (deleteCard) {
            if (deleteCard) {
                _this.loadProfileEditById(_this.profile.userProfileId);
            }
        });
    };
    ProfileInfoComponent.prototype.openWarningModal = function (service, item) {
        if (service.serviceType === _service_service_one_page_shared_serviceCodes__WEBPACK_IMPORTED_MODULE_9__["ServiceTypes"].IdentityTheftProtection) {
            this.emailWarning(item);
        }
        if (service.serviceType === _service_service_one_page_shared_serviceCodes__WEBPACK_IMPORTED_MODULE_9__["ServiceTypes"].CreditCardProtection) {
            this.creditCardWarning();
        }
    };
    ProfileInfoComponent.prototype.emailWarning = function (item) {
        var modalData = {
            identity: item.itemName,
            identityId: item.itemId,
        };
        var ngbModalOptions = {
            centered: true,
            size: "sm",
            backdropClass: "modal-pp",
        };
        var modalRef = this.ngbModalService.open(_home_identity_theft_protection_itp_warning_modal_itp_warning_modal_component__WEBPACK_IMPORTED_MODULE_8__["ItpWarningModalComponent"], ngbModalOptions);
        modalRef.componentInstance.data = modalData;
    };
    ProfileInfoComponent.prototype.creditCardWarning = function () {
        var ngbModalOptions = {
            centered: true,
            size: "sm",
            backdropClass: "modal-pp",
        };
        this.ngbModalService.open(_warning_card_warning_card_component__WEBPACK_IMPORTED_MODULE_11__["WarningCardComponent"], ngbModalOptions);
    };
    ProfileInfoComponent.ɵfac = function ProfileInfoComponent_Factory(t) { return new (t || ProfileInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_3__["CDKModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_4__["CDKModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
    ProfileInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileInfoComponent, selectors: [["app-profile-info"]], decls: 7, vars: 5, consts: [[1, "ds-modal-header", "ds-p-24p"], [1, "ds-modal-title", "ds-h2", "ds-m-bold", "ds-c-black-zero"], [1, "icon-close", "ds-cur-pointer", "ds-fs-18", 3, "click"], [4, "ngIf"], [1, "section-image", "ds-px-24p"], ["class", "icon-user ds-fs-40 text-center image", "style", "background-color: #ecf1f8; border-radius: 50px;", 4, "ngIf"], ["class", "image", "alt", "", 3, "src", 4, "ngIf"], [1, "content-profile-image"], [1, "ds-flex-column"], [1, "ds-r-bold", "ds-body-primary", "ds-c-black", "ds-mb-8p"], [1, "ds-r-regular", "ds-body-primary", "ds-c-black", "ds-mb-8p"], ["class", "ds-r-regular ds-body-primary ds-c-black", 4, "ngIf"], [1, "section-mode-view", "ds-mx-24p", "ds-mb-32p"], [1, "icons"], [1, "icon-view-list", "ds-cur-pointer", 3, "ngClass", "click"], [1, "icon-view-module", "ds-cur-pointer", 3, "ngClass", "click"], [1, "grid-content"], [3, "hidden"], [1, "easy-table", 2, "height", "400px", "overflow-y", "auto", "overflow-x", "hidden", "padding", "8px"], [1, "easy-table-header"], [1, "cell", "padd"], [1, "cell", "text-center"], ["class", "easy-table-row", 4, "ngFor", "ngForOf"], [1, "ds-flex-column", 2, "height", "400px", "overflow-y", "auto", "overflow-x", "hidden", "padding", "8px"], [4, "ngFor", "ngForOf"], [1, "icon-user", "ds-fs-40", "text-center", "image", 2, "background-color", "#ecf1f8", "border-radius", "50px"], ["alt", "", 1, "image", 3, "src"], [1, "ds-r-regular", "ds-body-primary", "ds-c-black"], [1, "easy-table-row"], [1, "cell", "padd", "right-border"], [1, ""], [1, "cell", "text-center", "right-border"], [1, "circle-status", 3, "ngClass"], [1, "cell", "padd", "right-border", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["noItem", ""], [1, "cell", "padd", 3, "ngClass"], ["noItem2", ""], ["class", "device-service", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "device-service", 3, "ngClass"], [1, "ds-t-elipssis"], [1, "ds-caption", "ds-r-regular", "ds-c-black"], ["style", "height: 30px;", "class", " ds-flex-row ds-al-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ds-flex-row", "ds-al-center", 2, "height", "30px", 3, "ngClass"], [1, "icon-shield-check", "ds-c-success", "ds-mr-8p", "ds-fs-18", "fade-infinite"], [1, "ds-caption", "ds-r-bold", "ds-c-success"], [1, "icon-shield-cross", "ds-c-danger", "ds-mr-8p", "ds-fs-18"], [1, "ds-caption", "ds-r-bold", "ds-c-danger"], [1, "ds-body-primary", "ds-r-bold", "ds-c-black-zero", "ds-mb-12p"], [1, "row", "ds-mb-24p"], ["class", "col-xl-4 ds-mb-12p", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "ds-mb-12p"], [1, "card", "p-2", "h-100", "status", 2, "height", "182px !important", 3, "ngClass"], [1, "card-body", "p-0"], [1, "card-user-info"], [1, "user-small-image"], ["alt", "", 1, "small-image", 3, "src"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black"], [1, "neutral-black", "fs-16", "mb-0", "identity-email"], [1, "neutral-black", "fs-16"], ["class", "neutral-black fs-16 mb-0 identity-email", 4, "ngIf"], [1, "neutral-black", "fs-16", "mb-0"], [1, "card-footer", "p-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "creditcard-icon"], [1, "creditcard-status"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["class", "d-flex align-items-center mr-2 cursor-pointer", 3, "click", 4, "ngIf"], ["class", "d-flex align-items-center cursor-pointer", 3, "click", 4, "ngIf"], [1, "d-flex"], [1, "icon-shield-check", "semantic-success", "fs-24", "fade-infinite"], [1, "ml-2", "semantic-success", "align-self-center", "fs-16", "lh-19"], [1, "icon-shield-cross", "semantic-danger", "fs-24"], [1, "ml-2", "semantic-danger", "align-self-center", "fs-16", "lh-19"], [1, "d-flex", "align-items-center", "mr-2", "cursor-pointer", 3, "click"], [1, "icon-warning", "fs-18", "semantic-danger"], [1, "d-flex", "align-items-center", "cursor-pointer", 3, "click"], [1, "icon-trash", "fs-20", "main-secondary"], [1, "fa-3x", "default-section-600p"], [1, "fas", "fa-spinner", "fa-spin"]], template: function ProfileInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileInfoComponent_Template_i_click_4_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileInfoComponent_ng_container_5_Template, 35, 27, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileInfoComponent_ng_container_6_Template, 3, 0, "ng-container", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "FAMILY_UNIT.PROFILE_INFO"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: [".default-section-600p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 600px;\n}\n\n.section-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n\n.section-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n  margin-right: 24px;\n}\n\n.section-image[_ngcontent-%COMP%]   .content-profile-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.section-mode-view[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 2px solid #BCC4D4;\n}\n\n.section-mode-view[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  display: flex;\n}\n\n.grid-content[_ngcontent-%COMP%] {\n  max-height: 800px;\n  padding-left: 24px;\n  padding-right: 24px;\n  margin-bottom: 40px;\n}\n\n.easy-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.easy-table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 10% 30% 30%;\n}\n\n.easy-table-header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-family: \"RobotoBold\";\n  font-size: 16px;\n  line-height: 19px;\n  letter-spacing: -0.015em;\n  color: #000000;\n}\n\n.easy-table-header[_ngcontent-%COMP%]   .cell.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-table-header[_ngcontent-%COMP%]   .cell.padd[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n\n.easy-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 10% 30% 30%;\n  margin-bottom: 12px;\n  border: 1px solid #BCC4D4;\n  border-radius: 8px;\n}\n\n.easy-table-row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.easy-table-row[_ngcontent-%COMP%]   .cell.text-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.easy-table-row[_ngcontent-%COMP%]   .cell.right-border[_ngcontent-%COMP%] {\n  border-right: 1px solid #BCC4D4;\n}\n\n.easy-table-row[_ngcontent-%COMP%]   .cell.padd[_ngcontent-%COMP%] {\n  padding-right: 32px;\n  padding-left: 32px;\n}\n\n.circle-status[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background: #BCC4D4;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.circle-status.status-ok[_ngcontent-%COMP%] {\n  background-color: #14BD44;\n}\n\n.device-service[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: #ECF1F8;\n  border-radius: 50px;\n  padding: 8px 12px;\n  max-width: 100%;\n}\n\n.device-service[_ngcontent-%COMP%]   .ds-t-elipssis[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n@media only screen and (max-width: 767px) {\n  .section-image[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .section-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    margin-right: 18px;\n  }\n  .section-image[_ngcontent-%COMP%]   .content-profile-image[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .section-mode-view[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .easy-table[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb2MvcHJvZmlsZS1pbmZvL3Byb2ZpbGUtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFMRjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBSko7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVdBO0VBQ0UsV0FBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBUkY7O0FBU0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFTSTtFQUNFLGtCQUFBO0FBUE47O0FBU0k7RUFDRSxrQkFBQTtBQVBOOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBWUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVko7O0FBV0k7RUFDRSx1QkFBQTtBQVROOztBQVdJO0VBQ0UsK0JBQUE7QUFUTjs7QUFXSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBWkY7O0FBYUU7RUFDRSx5QkFBQTtBQVhKOztBQWVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWkY7O0FBYUU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0VBakJGO0VBa0JFO0lBQ0Usa0JBQUE7RUFoQko7RUFtQkU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQWpCSjs7RUFzQkU7SUFDRSxhQUFBO0VBbkJKOztFQXVCQTtJQUNFLGFBQUE7RUFwQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9jL3Byb2ZpbGUtaW5mby9wcm9maWxlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdHtcbi8vICAgbWF4LWhlaWdodDogNjkycHg7XG4vLyB9XG5cbi5kZWZhdWx0LXNlY3Rpb24tNjAwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cblxuXG4uc2VjdGlvbi1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLmltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgfVxuXG4gIC5jb250ZW50LXByb2ZpbGUtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnNlY3Rpb24tbW9kZS12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNCQ0M0RDQ7XG4gIC5pY29ucyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuXG4uZ3JpZC1jb250ZW50e1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG59XG5cblxuLmVhc3ktdGFibGV7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZWFzeS10YWJsZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDEwJSAzMCUgMzAlO1xuICAuY2VsbCB7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgJi50ZXh0LWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICYucGFkZCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgfVxuICB9XG59XG5cbi5lYXN5LXRhYmxlLXJvd3tcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMTAlIDMwJSAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0M0RDQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuXG4gIC5jZWxsIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYudGV4dC1jZW50ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgICYucmlnaHQtYm9yZGVyIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCQ0M0RDQ7O1xuICAgIH1cbiAgICAmLnBhZGQge1xuICAgICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICB9XG4gIH1cbn1cblxuXG4uY2lyY2xlLXN0YXR1cyB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNCQ0M0RDQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAmLnN0YXR1cy1vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0QkQ0NDtcbiAgfVxufVxuXG4uZGV2aWNlLXNlcnZpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZDogI0VDRjFGODtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLmRzLXQtZWxpcHNzaXMge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VjdGlvbi1pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIC5pbWFnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtcHJvZmlsZS1pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uLW1vZGUtdmlldyB7XG4gICAgLmljb25zIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmVhc3ktdGFibGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufVxuXG4iXX0= */"] });
    return ProfileInfoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-profile-info",
                templateUrl: "./profile-info.component.html",
                styleUrls: ["./profile-info.component.scss"],
            }]
    }], function () { return [{ type: src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_3__["CDKModalRef"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_4__["CDKModalService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "QvWc":
/*!********************************************************************!*\
  !*** ./src/app/modules/poc/edit-profile/edit-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/reactiveform-service */ "cU2l");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/ImageUtils */ "1N2o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/family-unit.service */ "5SoQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/nz-spinner/nz-spinner */ "b+Yv");























function EditProfileComponent_ng_container_0_form_3_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "GUARDAR_CAMBIOS"));
} }
function EditProfileComponent_ng_container_0_form_3_nz_spinner_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spinner");
} }
function EditProfileComponent_ng_container_0_form_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditProfileComponent_ng_container_0_form_3_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onUploadImagen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_ng_container_0_form_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_ng_container_0_form_3_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.saveEditProfileForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, EditProfileComponent_ng_container_0_form_3_span_48_Template, 3, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, EditProfileComponent_ng_container_0_form_3_nz_spinner_49_Template, 1, 0, "nz-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.editUserProfileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 14, "FAMILY_UNIT.TITLE_EDIT"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.sanitizer.bypassSecurityTrustUrl(ctx_r3.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, "FAMILY_UNIT.PROFILE_PICTURE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 18, "FAMILY_UNIT.ACTION_DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 20, "FAMILY_UNIT.REQUIRED_FIELDS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 22, "FAMILY_UNIT.NAME"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 24, "COMP_USER.SURNAME"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 26, "FAMILY_UNIT.EMAIL"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 28, "FAMILY_UNIT.GENDER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 30, "FAMILY_UNIT.MALE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 32, "FAMILY_UNIT.FEMALE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loading);
} }
function EditProfileComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function EditProfileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_ng_container_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditProfileComponent_ng_container_0_form_3_Template, 50, 34, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditProfileComponent_ng_container_0_ng_container_4_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
var _c0 = function (a0) { return { userName: a0 }; };
function EditProfileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_ng_template_1_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_ng_template_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "FAMILY_UNIT.RESULT_TITLE_EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 6, "FAMILY_UNIT.RESULT_INFO_EDIT1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx_r2.profile.name)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "FAMILY_UNIT.RESULT_INFO_EDIT2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, "COMP_USER.SUPPORT_NOTIFICATION.CLOSE"), " ");
} }
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(modalRef, userService, sanitizer, translate, messageService, formService, familyUnitService) {
        this.modalRef = modalRef;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.messageService = messageService;
        this.formService = formService;
        this.familyUnitService = familyUnitService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].STATIC_CONTENT;
        this.loading = false;
        this.image = this.staticContentUrl + "img/add-user.png";
        this.editProfileSuccessForm = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.profile = this.modalRef.config.data;
        this.createForm();
        this.setFormValues();
    };
    EditProfileComponent.prototype.createForm = function () {
        this.editUserProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null),
        });
    };
    EditProfileComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    EditProfileComponent.prototype.onUploadImagen = function ($event) {
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
                    src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_9__["ImageUtils"].getBase64(file).then(function (result) {
                        src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_9__["ImageUtils"].compressImage(result, 100, 100).then(function (compressed) {
                            _this.image = compressed;
                            _this.imagenToUpload = compressed;
                        });
                    });
                }
                else {
                    this.translate
                        .get("ONLY_IMAGES_ERROR")
                        .subscribe(function (res) { return _this.messageService.add(res, "error"); });
                }
            }
        }
    };
    EditProfileComponent.prototype.saveEditProfileForm = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.editUserProfileForm);
        if (this.editUserProfileForm.valid) {
            this.loading = true;
            var formValues = this.editUserProfileForm.getRawValue();
            var profile = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.profile);
            profile.name = formValues.name;
            profile.surname = formValues.surname;
            profile.email = formValues.email;
            // profile.timezone = formValues.timezone;
            profile.gender = formValues.gender;
            if (this.image !== this.profile.photo) {
                profile.photo = this.imagenToUpload;
            }
            this.userService.editUserProfile(profile)
                .then(function (resp) {
                _this.loading = false;
                _this.editProfileSuccessForm = true;
                _this.familyUnitService.emitNotification(true);
            }, function (error) {
                console.log("error: ", error);
            });
        }
    };
    EditProfileComponent.prototype.setFormValues = function () {
        var pathFormvalues = {
            name: this.profile.name,
            surname: this.profile.surname,
            email: this.profile.email,
            gender: this.profile.gender,
        };
        if (this.profile.photo) {
            this.image = this.profile.photo;
        }
        this.editUserProfileForm.patchValue(pathFormvalues);
    };
    EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_5__["CDKModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_11__["FamilyUnitService"])); };
    EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["editProfileSuccess", ""], [1, "d-flex", "w-100", "justify-content-end"], [1, "icon-close", "ds-fs-14", "ds-cur-pointer", 3, "click"], ["class", "d-flex flex-column", 3, "formGroup", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "flex-column", 3, "formGroup"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-24p"], [1, "d-flex", "align-items-center", "modal-width-fix"], [1, "photo"], ["name", "favicon", "type", "file", "accept", "image/x-png,image/jpeg,image/gif,image/x-icon", 2, "display", "none", 3, "change"], ["profileImage", ""], ["type", "button", 1, "btn", "bback", 3, "click"], ["width", "64", "height", "64", 2, "width", "64px", "height", "64px", "border-radius", "50%", 3, "src"], [1, "text"], [1, "title"], [1, "subtitle"], [1, "ds-caption", "ds-r-regular", "ds-c-secondary", "ds-mb-12p"], [1, "d-flex", "flex-column", "ds-mb-12p"], [1, "ds-label-control"], ["type", "text", "formControlName", "name", 1, "ds-control"], ["type", "text", "formControlName", "surname", 1, "ds-control"], ["type", "text", "formControlName", "email", 1, "ds-control"], ["formControlName", "gender", 1, "ds-control"], ["value", "Male"], ["value", "Female"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-primary", 3, "click"], [1, "default-section", "fa-3x"], [1, "fas", "fa-spinner", "fa-spin"], [1, "d-flex", "flex-column"], [1, "ds-modal-header", "ds-mb-32p", "justify-content-end"], [1, "icon-close", 3, "click"], [1, "ds-t-center", "d-flex", "flex-column", "ds-mb-32p"], [1, "icon-green-check", "fa-6x", "ds-c-success", "ds-mb-32p"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", 3, "innerHTML"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditProfileComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditProfileComponent_ng_template_1_Template, 18, 15, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editProfileSuccessForm)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_13__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".add-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 64px;\n  border: solid 2px #bcc4d4;\n  width: 64px;\n  color: #bcc4d4;\n  border-radius: 64px;\n  cursor: pointer;\n}\n\n.modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.modal-width-fix[_ngcontent-%COMP%] {\n  width: 482px;\n}\n\n@media only screen and (max-width: 767px) {\n  .modal-width-fix[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n\np.title[_ngcontent-%COMP%] {\n  color: #34383f;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb2MvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb2MvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjYmNjNGQ0O1xuICB3aWR0aDogNjRweDtcbiAgY29sb3I6ICNiY2M0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDY0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWhlYWQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmNsb3NlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubW9kYWwtd2lkdGgtZml4IHtcbiAgd2lkdGg6IDQ4MnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tb2RhbC13aWR0aC1maXgge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgfVxufVxuXG5wLnRpdGxlIHtcbiAgY29sb3I6ICMzNDM4M2Y7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"] });
    return EditProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-profile',
                templateUrl: './edit-profile.component.html',
                styleUrls: ['./edit-profile.component.scss']
            }]
    }], function () { return [{ type: src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_5__["CDKModalRef"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormService"] }, { type: _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_11__["FamilyUnitService"] }]; }, null); })();


/***/ }),

/***/ "VJj+":
/*!*********************************************************************!*\
  !*** ./src/app/modules/poc/delete-profile/delete-profile.module.ts ***!
  \*********************************************************************/
/*! exports provided: DeleteProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProfileModule", function() { return DeleteProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _delete_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-profile.component */ "wdUt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");






var DeleteProfileModule = /** @class */ (function () {
    function DeleteProfileModule() {
    }
    DeleteProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeleteProfileModule });
    DeleteProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeleteProfileModule_Factory(t) { return new (t || DeleteProfileModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
            ]] });
    return DeleteProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeleteProfileModule, { declarations: [_delete_profile_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"]], exports: [_delete_profile_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProfileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_4__["NzSpinnerModule"],
                ],
                declarations: [_delete_profile_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProfileComponent"]],
                exports: [_delete_profile_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProfileComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZMR+":
/*!**************************************************************!*\
  !*** ./src/app/models/DashboardUserProteccionDispositivo.ts ***!
  \**************************************************************/
/*! exports provided: DashboardUserProteccionDispositivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserProteccionDispositivo", function() { return DashboardUserProteccionDispositivo; });
var DashboardUserProteccionDispositivo = /** @class */ (function () {
    function DashboardUserProteccionDispositivo() {
    }
    return DashboardUserProteccionDispositivo;
}());



/***/ }),

/***/ "cU2l":
/*!*************************************************!*\
  !*** ./src/app/helpers/reactiveform-service.ts ***!
  \*************************************************/
/*! exports provided: ReactiveFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormService", function() { return ReactiveFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



var ReactiveFormService = /** @class */ (function () {
    function ReactiveFormService() {
    }
    ReactiveFormService.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ReactiveFormService.prototype.markFormArrayTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ReactiveFormService.prototype.markFormAsEnabled = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.enable();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ReactiveFormService.prototype.markFormAsDisabled = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.disable();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    /**
     * Marks all controls in a form group as touched
     * @param formGroup - The form group to touch
     */
    ReactiveFormService.prototype.markFormGroupAsTouchedRefactor = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"] && control.status !== 'VALID') {
                control.markAsTouched();
            }
            if (control.controls) {
                _this.markFormGroupAsTouchedRefactor(control);
            }
        });
    };
    ReactiveFormService.ɵfac = function ReactiveFormService_Factory(t) { return new (t || ReactiveFormService)(); };
    ReactiveFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReactiveFormService, factory: ReactiveFormService.ɵfac });
    return ReactiveFormService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "lzg0":
/*!*****************************************************************!*\
  !*** ./src/app/modules/poc/profile-info/profile-info.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoModule", function() { return ProfileInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-info.component */ "QT3/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");







var ProfileInfoModule = /** @class */ (function () {
    function ProfileInfoModule() {
    }
    ProfileInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileInfoModule });
    ProfileInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileInfoModule_Factory(t) { return new (t || ProfileInfoModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]] });
    return ProfileInfoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileInfoModule, { declarations: [_profile_info_component__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_profile_info_component__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileInfoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                declarations: [_profile_info_component__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoComponent"]],
                exports: [_profile_info_component__WEBPACK_IMPORTED_MODULE_2__["ProfileInfoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mqyR":
/*!******************************************************!*\
  !*** ./src/app/models/DashboardUserProteccionRed.ts ***!
  \******************************************************/
/*! exports provided: DashboardUserProteccionRed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserProteccionRed", function() { return DashboardUserProteccionRed; });
var DashboardUserProteccionRed = /** @class */ (function () {
    function DashboardUserProteccionRed() {
    }
    return DashboardUserProteccionRed;
}());



/***/ }),

/***/ "ozvF":
/*!**********************************************************!*\
  !*** ./src/app/services/monitored-identities.service.ts ***!
  \**********************************************************/
/*! exports provided: MonitoredIdentitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoredIdentitiesService", function() { return MonitoredIdentitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/string-utils */ "372O");








var MonitoredIdentitiesService = /** @class */ (function () {
    function MonitoredIdentitiesService(http) {
        this.http = http;
        this.identities = [];
        this.protectedIdentities = 0;
        this.breachedIdentities = 0;
        this.ITPInformation = {};
        this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    MonitoredIdentitiesService.prototype.getMonitoredIdentitiesByUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredidentities/").toPromise().then(function (result) {
                        _this.identities = result;
                        _this.protectedIdentities = _this.identities.filter(function (x) { return x.breaches === 0; }).length;
                        _this.breachedIdentities = _this.identities.length - _this.protectedIdentities;
                    })];
            });
        });
    };
    MonitoredIdentitiesService.prototype.emitReload = function (value) {
        this.reload$.next(value);
    };
    MonitoredIdentitiesService.prototype.getMonitoredIdentitiesByUser2 = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredidentities");
    };
    MonitoredIdentitiesService.prototype.setITPInformation = function (data) {
        this.ITPInformation = data;
    };
    MonitoredIdentitiesService.prototype.formatITPInformation = function (data) {
        if (!data || data.length == 0)
            return {};
        var maliciousEmail = 0;
        var formatData = data.map(function (item) {
            if (item.breaches > 0) {
                maliciousEmail++;
                item.cardClass = 'danger';
            }
            else {
                item.cardClass = 'success';
            }
            return item;
        });
        return {
            totalProtectedEmails: data.length - maliciousEmail,
            totalMaliciousEmails: maliciousEmail,
            items: formatData,
        };
    };
    MonitoredIdentitiesService.prototype.getITPInformation = function () {
        return _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].deepClone(this.ITPInformation);
    };
    MonitoredIdentitiesService.prototype.addMonitoredIdentity = function (Identities) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredidentities/", Identities).toPromise();
    };
    MonitoredIdentitiesService.prototype.addMonitoredIdentities = function (Identity) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredidentities/", Identity).toPromise();
    };
    MonitoredIdentitiesService.prototype.deleteMonitoredIdentity = function (IdentityId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredidentities?monitoredIdentityId=" + IdentityId).toPromise();
    };
    MonitoredIdentitiesService.prototype.getIdentityBreach = function (IdentityId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredidentities/getIdentityBreach?monitoredIdentityId=" + IdentityId).toPromise();
    };
    MonitoredIdentitiesService.ɵfac = function MonitoredIdentitiesService_Factory(t) { return new (t || MonitoredIdentitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    MonitoredIdentitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MonitoredIdentitiesService, factory: MonitoredIdentitiesService.ɵfac, providedIn: 'root' });
    return MonitoredIdentitiesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MonitoredIdentitiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v1tv":
/*!*****************************************************************!*\
  !*** ./src/app/modules/poc/edit-profile/edit-profile.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.component */ "QvWc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/reactiveform-service */ "cU2l");








var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditProfileModule });
    EditProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditProfileModule_Factory(t) { return new (t || EditProfileModule)(); }, providers: [src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]] });
    return EditProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditProfileModule, { declarations: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                declarations: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"]],
                exports: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"]],
                providers: [src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "v8D2":
/*!**********************************************!*\
  !*** ./src/app/modules/poc/poc.component.ts ***!
  \**********************************************/
/*! exports provided: PocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocComponent", function() { return PocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal.service */ "WDzv");
/* harmony import */ var src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/suite.service */ "Zknh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/ImageUtils */ "1N2o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-profile/add-profile.component */ "BgmQ");
/* harmony import */ var _delete_profile_delete_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-profile/delete-profile.component */ "wdUt");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "QvWc");
/* harmony import */ var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-info/profile-info.component */ "QT3/");
/* harmony import */ var _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/family-unit.service */ "5SoQ");
/* harmony import */ var _shared_famiy_unit_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/famiy-unit-const */ "/zpU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_servicess_status_servicess_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../home/servicess-status/servicess-status.component */ "DdhC");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");























function PocComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "HOLA"), " ", ctx_r3.userService.currentUserValue.name, " ");
} }
function PocComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.suiteName, " ");
} }
function PocComponent_ng_container_0_div_49_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42);
} }
function PocComponent_ng_container_0_div_49_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    var profile_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", profile_r7.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PocComponent_ng_container_0_div_49_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PocComponent_ng_container_0_div_49_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var profile_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.deleteProfile(profile_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PocComponent_ng_container_0_div_49_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PocComponent_ng_container_0_div_49_div_5_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PocComponent_ng_container_0_div_49_img_6_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PocComponent_ng_container_0_div_49_div_8_Template, 1, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PocComponent_ng_container_0_div_49_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var profile_r7 = ctx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.editProfile(profile_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PocComponent_ng_container_0_div_49_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var profile_r7 = ctx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.openDetail(profile_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var profile_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !profile_r7.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", profile_r7.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !profile_r7.isOwnerAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", profile_r7.name, " ", profile_r7.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "FAMILY_UNIT.BTN_SHOW_INFO"), " ");
} }
function PocComponent_ng_container_0_div_50_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PocComponent_ng_container_0_div_50_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.addProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "FAMILY_UNIT.ADD_NEW_PROFILE"), " ");
} }
function PocComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PocComponent_ng_container_0_div_13_Template, 3, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PocComponent_ng_container_0_div_14_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-servicess-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PocComponent_ng_container_0_div_49_Template, 19, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PocComponent_ng_container_0_div_50_Template, 10, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, "ULTIMO_ACCESO"), ":\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 15, ctx_r0.slastPreviousAccessDate.toLocaleString(), "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 18, ctx_r0.slastPreviousAccessDate.toLocaleString(), "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideGreeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hideGreeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 21, "FAMILY_UNIT.SECTION_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 23, "FAMILY_UNIT.SECTION_DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.staticContentUrl + "img/family-unit/unit_family.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 25, "FAMILY_UNIT.LIST_OF_PROFILES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userService.userProfileList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.totalProfiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.items.length < 5);
} }
function PocComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PocComponent = /** @class */ (function () {
    function PocComponent(suiteService, CDKmodalService, userService, familyUnitService, router) {
        this.suiteService = suiteService;
        this.CDKmodalService = CDKmodalService;
        this.userService = userService;
        this.familyUnitService = familyUnitService;
        this.router = router;
        this.loading = true;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STATIC_CONTENT;
        this.items = [];
        // TODO: llamar a un servicio y usar esta variable
        this.familyUnitMaxProfiles = _shared_famiy_unit_const__WEBPACK_IMPORTED_MODULE_13__["FAMILY_UNIT_MAX_PROFILES"];
        this.totalProfiles = 0;
    }
    PocComponent.prototype.ngOnInit = function () {
        this.slastPreviousAccessDate =
            this.userService.currentUserValue.lastPreviousAccessDate
                .toString()
                .indexOf("Z") >= 0
                ? this.userService.currentUserValue.lastPreviousAccessDate.toString()
                : this.userService.currentUserValue.lastPreviousAccessDate.toString() +
                    "Z";
        this.getNameSuiteAndhideGreeting();
        this.loadUnitFamilyInfo();
        this.familyUnitService.init();
        this.watchModalChange();
        this.totalProfiles = this.familyUnitMaxProfiles + 1; // + el perfil principal
    };
    PocComponent.prototype.getNameSuiteAndhideGreeting = function () {
        var _this = this;
        this.suiteService.suites.map(function (e) {
            _this.suiteName = e.name;
            _this.hideGreeting = e.hideGreeting;
        });
    };
    PocComponent.prototype.addProfile = function () {
        var config = {
            modalClass: 'ds-modal-sm',
            position: 'center',
        };
        this.CDKmodalService.open(_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_8__["AddProfileComponent"], config);
    };
    PocComponent.prototype.editProfile = function (item) {
        if (item.isOwnerAccount) {
            this.router.navigate(['/profile']);
        }
        else {
            var config = {
                modalClass: 'ds-modal-sm',
                position: 'center',
                data: item
            };
            this.CDKmodalService.open(_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"], config);
        }
    };
    PocComponent.prototype.deleteProfile = function (item) {
        var config = {
            modalClass: 'ds-modal-sm',
            position: 'center',
            data: item
        };
        this.CDKmodalService.open(_delete_profile_delete_profile_component__WEBPACK_IMPORTED_MODULE_9__["DeleteProfileComponent"], config);
    };
    PocComponent.prototype.openDetail = function (item) {
        var config = {
            modalClass: ['ds-modal-xl', 'ds-p-0', 'ds-modal-height'],
            position: 'center',
            data: item
        };
        this.CDKmodalService.open(_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInfoComponent"], config);
    };
    PocComponent.prototype.loadUnitFamilyInfo = function () {
        var _this = this;
        var currentUser = this.userService.currentUserValue;
        this.userService.userProfileList = [];
        this.userService
            .getFamilyProfiles(currentUser.id)
            .then(function (resp) {
            _this.loading = false;
            var payload = {
                userProfileId: 0,
                userId: currentUser.id,
                name: currentUser.name,
                surname: currentUser.surname,
                email: currentUser.email,
                isOwnerAccount: true,
            };
            if (currentUser.profileImage) {
                payload.photo = currentUser.profileImage;
            }
            _this.userService.userProfileList.push(payload);
            resp.forEach(function (element) {
                element.isOwnerAccount = false;
                if (element.photo)
                    element.photo = src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_6__["ImageUtils"].noCacheImagen(element.photo);
                _this.userService.userProfileList.push(element);
            });
            _this.items = _this.userService.userProfileList;
        });
    };
    PocComponent.prototype.watchModalChange = function () {
        var _this = this;
        this.familyUnitService.familyUnitChange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (data) { return !!data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loadUnitFamilyInfo(); }))
            .subscribe();
    };
    PocComponent.ɵfac = function PocComponent_Factory(t) { return new (t || PocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_4__["SuiteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_3__["CDKModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_12__["FamilyUnitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    PocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PocComponent, selectors: [["app-poc"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], [1, "flex-column"], [1, "ds-caption", "ds-r-regular", "ds-c-secondary"], ["class", "ds-h1 ds-m-bold ds-c-black", 4, "ngIf"], [1, "content-single-service-fix"], [1, "ds-mb-24p"], [1, "card", 2, "width", "100%"], [1, "card-body", "pr-24", "pl-24"], [1, "container-fluid", "mt-4"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "mb-3", "justify-content-between", "d-flex", "flex-column", "mobile-mb"], [1, "ds-m-bold", "ds-c-black", "ds-h2", "ds-fs-24", "ds-mb-12p"], [1, "ds-r-regular", "ds-body-primary", "ds-fs-16", "ds-c-black", "ds-mb-12p"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "mb-3", "desktop-only", "justify-content-between", "d-flex", "flex-column", "mobile-mb", "pl-4", "pr-4"], ["alt", "", 2, "object-fit", "contain", "height", "300px", 3, "src"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "d-flex", "flex-column"], [1, "title", "text-center", "mb-4", "neutral-black", "fs-16"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "ds-pb-24p"], [1, "circle-profile", "text-center"], [1, "added"], [1, "pending-divider"], [1, "pending"], [1, "ds-flex-row", "ds-jc-center", "ds-al-center", 2, "width", "100%"], [1, "card-body", "pr-0", "pl-0"], [1, "container-fluid", "mt-2"], ["class", "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3 justify-content-between d-flex flex-column mobile-mb", 4, "ngFor", "ngForOf"], ["class", "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3 justify-content-between d-flex flex-column mobile-mb", 4, "ngIf"], [1, "ds-h1", "ds-m-bold", "ds-c-black"], [1, "container", "card-unit"], [1, "col-lg"], [1, "head-unit-container"], ["class", "icon-user ds-fs-40 text-center", "style", "background-color: #ecf1f8; border-radius: 50px;", 4, "ngIf"], ["class", "unit-card-img", "alt", "", 3, "src", 4, "ngIf"], [1, "head-icons-container"], ["class", "icon-trash fs-20 main-secondary cursor", 3, "click", 4, "ngIf"], [1, "icon-edit", "fs-20", "main-secondary", "cursor", 3, "click"], [1, "ds-flex-column"], [1, "user-name"], [1, "ds-mb-16p"], [1, "ds-flex-row", 2, "max-width", "160px"], [1, "ds-btn-primary", "ds-t-uppercase", 3, "click"], [1, "icon-user", "ds-fs-40", "text-center", 2, "background-color", "#ecf1f8", "border-radius", "50px"], ["alt", "", 1, "unit-card-img", 3, "src"], [1, "icon-trash", "fs-20", "main-secondary", "cursor", 3, "click"], [1, "container", "add-card", 3, "click"], [1, "add-card-info"], [1, "add"], [1, "info", "text-center"], [1, "app-loading"], [1, "logo"]], template: function PocComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PocComponent_ng_container_0_Template, 51, 27, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PocComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _home_servicess_status_servicess_status_component__WEBPACK_IMPORTED_MODULE_15__["ServicessStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: [".content-single-service-fix[_ngcontent-%COMP%] {\n  padding-top: 5rem !important;\n  padding-bottom: 1rem;\n}\n\n@media only screen and (max-width: 767px) {\n  .content-single-service-fix[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n}\n\n\n\n.ml-fix[_ngcontent-%COMP%] {\n  margin-left: 11px;\n}\n\n.circle-profile[_ngcontent-%COMP%] {\n  border: solid 3px #36b3ed;\n  color: #36b3ed;\n  width: 96px;\n  height: 96px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 96px;\n  background-color: #ECF1F8;\n}\n\n.added[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.pending[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  margin-top: 4px;\n}\n\n.pending-divider[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-top: 4px;\n}\n\n@media only screen and (max-width: 767px) {\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n\n\n.ml-fix[_ngcontent-%COMP%] {\n  margin-left: 11px;\n}\n\n.add-card[_ngcontent-%COMP%] {\n  border: 2px dashed #BCC4D4;\n  border-radius: 8px;\n}\n\n.add-card-info[_ngcontent-%COMP%] {\n  height: 208px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 1rem;\n  cursor: pointer;\n  color: #BCC4D4;\n}\n\n.add-card[_ngcontent-%COMP%]:hover {\n  background-color: #666A73;\n}\n\n.add[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.card-unit[_ngcontent-%COMP%] {\n  border: solid 2px #bcc4d4;\n  padding: 0.5rem;\n  border-radius: 8px;\n  height: 100%;\n}\n\n.head-unit-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n.head-icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.card-unit-info[_ngcontent-%COMP%] {\n  max-width: 65%;\n  padding: 0.5rem;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.unit-card-img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n}\n\n.app-unit-loading[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white !important;\n  color: #4a3ef3;\n  font-family: \"Roboto\";\n}\n\n.unit-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n}\n\n@media only screen and (max-width: 767px) {\n  .add-card[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .add-card-info[_ngcontent-%COMP%] {\n    height: 100px;\n    padding-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb2MvcG9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDRSx5QkFBQTtFQUFGO0FBQ0Y7O0FBSUEsR0FBQTs7QUFFQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0Usd0JBQUE7RUFIRjtBQUNGOztBQVFBLEdBQUE7O0FBRUE7RUFDRSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFQRjs7QUFZQTtFQUNFLHlCQUFBO0FBVEY7O0FBYUE7RUFDRSxpQkFBQTtBQVZGOztBQWNBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWEE7O0FBY0E7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBWEE7O0FBY0E7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQVhBOztBQWNBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFYQTs7QUFjQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVhBOztBQWNBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVhBOztBQWVBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBWkE7O0FBZUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVpBOztBQWVBO0VBQ0U7SUFDRSxhQUFBO0VBWkY7QUFDRjs7QUFlQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG9CQUFBO0VBYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9jL3BvYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXNpbmdsZS1zZXJ2aWNlLWZpeCB7XG4gIHBhZGRpbmctdG9wOiA1cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQtc2luZ2xlLXNlcnZpY2UtZml4IHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuLyoqL1xuXG4ubWwtZml4e1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cblxuLmNpcmNsZS1wcm9maWxle1xuICBib3JkZXI6IHNvbGlkIDNweCAjMzZiM2VkO1xuICBjb2xvcjogIzM2YjNlZDtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDk2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0YxRjg7XG59XG5cbi5hZGRlZHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGVuZGluZ3tcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ucGVuZGluZy1kaXZpZGVye1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGVza3RvcC1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5cbi8qKi9cblxuLm1sLWZpeHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5hZGQtY2FyZHtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNCQ0M0RDQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmFkZC1jYXJkLWluZm97XG4gIGhlaWdodDogMjA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNCQ0M0RDQ7XG5cbn1cblxuXG4uYWRkLWNhcmQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICAjNjY2QTczO1xufVxuXG5cbi5hZGQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuXG4uY2FyZC11bml0e1xuYm9yZGVyOiBzb2xpZCAycHggI2JjYzRkNDtcbnBhZGRpbmc6IDAuNXJlbTtcbmJvcmRlci1yYWRpdXM6IDhweDtcbmhlaWdodDogMTAwJTtcbn1cblxuLmhlYWQtdW5pdC1jb250YWluZXJ7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xucGFkZGluZzogMC41cmVtO1xufVxuXG4uaGVhZC1pY29ucy1jb250YWluZXJ7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYXJkLXVuaXQtaW5mb3tcbm1heC13aWR0aDogNjUlO1xucGFkZGluZzogMC41cmVtO1xufVxuXG4udXNlci1uYW1le1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXNpemU6IDFyZW07XG59XG5cbi51bml0LWNhcmQtaW1ne1xud2lkdGg6IDY1cHg7XG5oZWlnaHQ6IDY1cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLmFwcC11bml0LWxvYWRpbmcge1xuaGVpZ2h0OiBhdXRvO1xucG9zaXRpb246IHJlbGF0aXZlO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuY29sb3I6IHJnYig3NCwgNjIsIDI0Myk7XG5mb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi51bml0LWxvZ297XG53aWR0aDogNTBweDtcbmhlaWdodDogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWRkLWNhcmQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWRkLWNhcmQtaW5mbyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIl19 */"] });
    return PocComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poc',
                templateUrl: './poc.component.html',
                styleUrls: ['./poc.component.scss']
            }]
    }], function () { return [{ type: src_app_services_suite_service__WEBPACK_IMPORTED_MODULE_4__["SuiteService"] }, { type: src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_3__["CDKModalService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_12__["FamilyUnitService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "wdUt":
/*!************************************************************************!*\
  !*** ./src/app/modules/poc/delete-profile/delete-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProfileComponent", function() { return DeleteProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/family-unit.service */ "5SoQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/nz-spinner/nz-spinner */ "b+Yv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function DeleteProfileComponent_nz_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spinner");
} }
function DeleteProfileComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_GRAVITY.REMOVE_FORM.DELETE_BUTTON"), "");
} }
var _c0 = function (a0) { return { userName: a0 }; };
var DeleteProfileComponent = /** @class */ (function () {
    function DeleteProfileComponent(modalRef, userService, familyUnitService) {
        this.modalRef = modalRef;
        this.userService = userService;
        this.familyUnitService = familyUnitService;
        this.loading = false;
    }
    DeleteProfileComponent.prototype.ngOnInit = function () {
        this.profile = this.modalRef.config.data;
    };
    DeleteProfileComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    DeleteProfileComponent.prototype.saveDelete = function () {
        var _this = this;
        this.loading = true;
        this.userService.deleteUserProfile(this.profile)
            .then(function () {
            _this.familyUnitService.emitNotification(true);
            _this.loading = false;
            _this.closeModal();
        }, function (error) {
            console.log("error: ", error);
        });
    };
    DeleteProfileComponent.ɵfac = function DeleteProfileComponent_Factory(t) { return new (t || DeleteProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__["CDKModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_3__["FamilyUnitService"])); };
    DeleteProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteProfileComponent, selectors: [["app-delete-profile"]], decls: 17, vars: 14, consts: [[1, "d-flex", "w-100", "justify-content-end"], [1, "icon-close", "ds-fs-14", "ds-cur-pointer", 3, "click"], [1, "ds-t-center", "d-flex", "flex-column", "ds-mb-32p"], [1, "icon-trash", "fa-6x", "ds-c-black", "ds-mb-32p"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", "ds-mb-12p"], [1, "d-flex", "justify-content-end"], [1, "ds-btn-secondary", "ds-mr-12p", "ds-t-uppercase", 3, "click"], [1, "ds-btn-primary", "ds-t-uppercase", 3, "click"], [4, "ngIf"]], template: function DeleteProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProfileComponent_Template_div_click_1_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProfileComponent_Template_button_click_11_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProfileComponent_Template_button_click_14_listener() { return ctx.saveDelete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DeleteProfileComponent_nz_spinner_15_Template, 1, 0, "nz-spinner", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DeleteProfileComponent_span_16_Template, 3, 3, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, "FAMILY_UNIT.DELETE_CONFIRMATION", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.profile.name)), " ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "FAMILY_UNIT.DELETION_DETAIL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9jL2RlbGV0ZS1wcm9maWxlL2RlbGV0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return DeleteProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-profile',
                templateUrl: './delete-profile.component.html',
                styleUrls: ['./delete-profile.component.scss']
            }]
    }], function () { return [{ type: src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__["CDKModalRef"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_3__["FamilyUnitService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-poc-poc-module.js.map