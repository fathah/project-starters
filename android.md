## Generate Key
```sh
keytool -genkey -v -keystore ~/keyname.jks -keyalg RSA -keysize 2048 -validity 10000 -alias aliasname
```

## Update Configs

#### `android/key.properties`
```properties
storePassword=your-store-password
keyPassword=your-key-password
keyAlias=aliasname
storeFile=keyname.jks
```
⚠️ Don’t commit this file to GitHub (add to .gitignore).

#### `android/app/build.gradle`
> At the top
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file("key.properties")
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

> Inside `android {}`
```gradle
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
}
```

### Flutter Build & Release
```sh
flutter clean
flutter pub get
flutter build appbundle --release
```
