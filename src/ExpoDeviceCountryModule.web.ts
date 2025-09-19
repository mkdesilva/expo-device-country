import { registerWebModule, NativeModule } from 'expo';

import { ExpoDeviceCountryModuleEvents } from './ExpoDeviceCountry.types';

class ExpoDeviceCountryModule extends NativeModule<ExpoDeviceCountryModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoDeviceCountryModule, 'ExpoDeviceCountryModule');
