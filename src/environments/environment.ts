// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
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
  FB_APP_ID : '818925648718306',
  GOOGLE_APP_ID : '1029241894559-one04bug77k0dlg3a855l3hrm8ehl6s9.apps.googleusercontent.com',
  STATIC_CONTENT : 'https://devstatic.app.onlineassist.me/suite/',
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
