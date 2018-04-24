// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCr8HC0YDcfxIJJELeJ4OH2QEYIH_MxGpI",
    authDomain: "pdmpark-22036.firebaseapp.com",
    databaseURL: "https://pdmpark-22036.firebaseio.com",
    projectId: "pdmpark-22036",
    storageBucket: "pdmpark-22036.appspot.com",
    messagingSenderId: "105445754986"

  },

  googleMapsKey: 'AIzaSyCiTBXSU8SXohHlhw8nOX0bmbvXMvI1mBA',
  dialogflow:{
    EasyTravelAssistant:'a8780afe30a7493284d6fe4080bdd6d4'
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYW1pbGEyMjAzNiIsImEiOiJjamc2M291b3kycnJsMndxcDhtZXdhaDlnIn0.byD49qq7-UMzR6XI6-gsww'
  }
};
