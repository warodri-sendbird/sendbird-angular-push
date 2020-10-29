// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    /**
     * You get this from Firebase console:
     * https://console.firebase.google.com/
     */
    firebase: {
        apiKey: "YOUR-DATA-HERE",
        authDomain: "YOUR-DATA-HERE",
        databaseURL: "YOUR-DATA-HERE",
        projectId: "YOUR-DATA-HERE",
        storageBucket: "YOUR-DATA-HERE",
        messagingSenderId: "YOUR-DATA-HERE",
        appId: "YOUR-DATA-HERE",
        measurementId: "YOUR-DATA-HERE"    
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
