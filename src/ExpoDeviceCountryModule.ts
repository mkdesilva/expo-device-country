import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoDeviceCountryModule extends NativeModule {
  getNetworkCountry(): string | null;
  getSimCountry(): string | null;
}

export default requireNativeModule<ExpoDeviceCountryModule>(
  'ExpoDeviceCountry',
);
