import CoreTelephony
import ExpoModulesCore

public class ExpoDeviceCountryModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoDeviceCountry')` in JavaScript.
    Name("ExpoDeviceCountry")

    // iOS: SIM/home carrier country (ISO 3166-1 alpha-2), e.g. "TH" or "US", or null if unavailable.
    Function("getSimCountry") { () -> String? in
      return self.getCarrierISOCountry()
    }

    Function("getNetworkCountry") { () -> String? in
      return nil
    }
  }
}

// MARK: - Helpers
extension ExpoDeviceCountryModule {
  private func normalize(_ code: String?) -> String? {
    guard let c = code?.trimmingCharacters(in: .whitespacesAndNewlines), !c.isEmpty else {
      return nil
    }
    return c.uppercased()
  }

  /// Reads carrier ISO country from CoreTelephony.
  /// Works without special permissions. Returns nil on Wi-Fi-only devices / no SIM.
  fileprivate func getCarrierISOCountry() -> String? {
    let networkInfo = CTTelephonyNetworkInfo()

    if #available(iOS 12.0, *) {
      if let providers = networkInfo.serviceSubscriberCellularProviders, !providers.isEmpty {
        for (_, carrier) in providers {
          if let iso = normalize(carrier.isoCountryCode) { return iso }
        }
      }
    } else {
      if let carrier = networkInfo.subscriberCellularProvider,
        let iso = normalize(carrier.isoCountryCode)
      {
        return iso
      }
    }
    return nil
  }
}
