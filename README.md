# expo-device-country

Expo module that exposes the device's ISO 3166-1 alpha-2 country code using SIM and network data where available. Ideal for tailoring content or flows by a user's detected country without asking for additional permissions.

> **iOS note:** Apple does not expose an API for the currently registered network country, so `getNetworkCountry()` always returns `null` on iOS. Only SIM/home carrier data is available there.

> **New Architecture:** Fully compatible with Expo's New Architecture out of the box.

## Features

- Synchronous helpers to read the SIM-issued country code as a two-letter ISO string, e.g. `US` or `TH`.
- On Android, access to both the SIM country (`TelephonyManager.getSimCountryIso`) and currently registered network country (`TelephonyManager.getNetworkCountryIso`).
- Designed for Expo Router/React Navigation and other client-side flows that need country awareness without server round-trips.
- Seamless autolinking in Expo apps and React Native projects configured with Expo modules.

## Installation

### Expo app projects

```bash
npx expo install expo-device-country
```

This works for Expo projects created with `npx create-expo-app`, including apps built with EAS or classic builds.

### React Native projects (with Expo modules)

```bash
npm install expo-device-country
# or
# yarn add expo-device-country
# pnpm add expo-device-country

npx pod-install
```

Make sure the `expo` package is configured by following [Install Expo modules in React Native projects](https://docs.expo.dev/bare/installing-expo-modules/).

## Usage

```ts
import ExpoDeviceCountry from "expo-device-country";

const simCountry = ExpoDeviceCountry.getSimCountry();
const networkCountry = ExpoDeviceCountry.getNetworkCountry();

if (simCountry) {
  console.log(`SIM country: ${simCountry}`);
}

// Fall back to network country when SIM data is unavailable
const resolvedCountry = simCountry ?? networkCountry ?? "US";
```

Both methods return a two-letter uppercase country code or `null` if that dataset is not available on the device.

## API

| Method                | Description                                                                                                                                                       | Return type         | Platforms                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| `getSimCountry()`     | Reads the home carrier/SIM country. On iOS this uses `CoreTelephony`; on Android it uses `TelephonyManager#getSimCountryIso`. No additional permissions required. | `string \| null`    | iOS: available (SIM only); Android: available |
| `getNetworkCountry()` | Reads the currently registered mobile network country. Returns `null` on devices without cellular service or on iOS, where the data is unavailable.               | `string \| null`    | iOS: not available; Android: available        |


> **Note:** Web support is not available. The module can only be imported on native platforms.

## Example app

The `example/` directory contains a minimal Expo app that consumes this module.

```bash
cd example
npx expo start
```

## Platform notes

- **iOS:** `getSimCountry` uses `CTTelephonyNetworkInfo` and returns `null` on Wi-Fi only devices or when no SIM is present. `getNetworkCountry` always returns `null` because iOS does not provide this information.
- **Android:** Uses `TelephonyManager` to resolve SIM and network countries. A value is only returned on real devices with an active SIM or network registration.

## License

MIT
