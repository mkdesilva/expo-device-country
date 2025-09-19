import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoDeviceCountryViewProps } from './ExpoDeviceCountry.types';

const NativeView: React.ComponentType<ExpoDeviceCountryViewProps> =
  requireNativeView('ExpoDeviceCountry');

export default function ExpoDeviceCountryView(props: ExpoDeviceCountryViewProps) {
  return <NativeView {...props} />;
}
