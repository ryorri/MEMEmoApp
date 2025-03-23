# Ścieżka do folderu emulatorów w Android SDK
$emulatorPath = "H:\AndroidSDK\emulator"

# Nazwa AVD (Android Virtual Device)
$avdName = "Pixel_8_Pro_API_31"

# Uruchomienie emulatora z resetowaniem danych
Write-Host "Uruchamianie emulatora: $avdName od zera..."
& "$emulatorPath\emulator.exe" -avd $avdName -wipe-data
