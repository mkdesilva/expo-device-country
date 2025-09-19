package expo.modules.devicecountry

import android.content.Context
import android.content.pm.PackageManager
import android.os.Build
import android.telephony.SubscriptionManager
import android.telephony.TelephonyManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.util.Locale

class ExpoDeviceCountryModule : Module() {
  private fun hasTelephony(context: Context): Boolean {
    return context.packageManager.hasSystemFeature(PackageManager.FEATURE_TELEPHONY)
  }

  private fun telephony(context: Context): TelephonyManager? {
    return context.getSystemService(Context.TELEPHONY_SERVICE) as? TelephonyManager
  }

  private fun normalize(code: String?): String? {
    val c = code?.trim().orEmpty()
    return if (c.isEmpty()) null else c.uppercase(Locale.ROOT)
  }

  override fun definition() = ModuleDefinition {
    Name("ExpoDeviceCountry")

    Function("getNetworkCountry") {
      val ctx = appContext.reactContext ?: return@Function null
      if (!hasTelephony(ctx)) return@Function null

      val tm = telephony(ctx) ?: return@Function null
      return@Function normalize(tm.networkCountryIso)
    }

    Function("getSimCountry") {
      val ctx = appContext.reactContext ?: return@Function null
      if (!hasTelephony(ctx)) return@Function null

      val tm = telephony(ctx) ?: return@Function null
      return@Function normalize(tm.simCountryIso)
    }
  }
}
