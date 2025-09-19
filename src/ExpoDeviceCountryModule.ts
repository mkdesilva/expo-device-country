import { NativeModule, requireNativeModule } from 'expo';

import { ExpoDeviceCountryModuleEvents } from './ExpoDeviceCountry.types';

declare class ExpoDeviceCountryModule extends NativeModule<ExpoDeviceCountryModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoDeviceCountryModule>('ExpoDeviceCountry');
