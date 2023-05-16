using FMS.Debugging;

namespace FMS
{
    public class FMSConsts
    {
        public const string LocalizationSourceName = "FMS";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "45f86faa113b4747a89392d4be58a2f8";
    }
}
