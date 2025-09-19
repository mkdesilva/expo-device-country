import * as React from 'react';

import { ExpoDeviceCountryViewProps } from './ExpoDeviceCountry.types';

export default function ExpoDeviceCountryView(props: ExpoDeviceCountryViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
