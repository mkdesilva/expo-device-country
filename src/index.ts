// Reexport the native module. On web, it will be resolved to ExpoDeviceCountryModule.web.ts
// and on native platforms to ExpoDeviceCountryModule.ts
export { default } from './ExpoDeviceCountryModule';
export * from  './ExpoDeviceCountry.types';
