# Setup Instructions

## Quick Start (Recommended)

### 1. Install Node.js
- Download from https://nodejs.org/ (LTS version recommended)
- Or install via Homebrew: `brew install node`

### 2. Install Expo CLI
```bash
npm install -g @expo/cli
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npx expo start
```

### 5. Run on your device
- Install "Expo Go" app on your phone from:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- Scan the QR code displayed in your terminal with your phone's camera
- The app will open in Expo Go

### 6. Alternative: Run on simulator/emulator
- Press `i` in terminal to open iOS simulator (Mac only)
- Press `a` in terminal to open Android emulator (requires Android Studio)
- Press `w` to open in web browser

## Development Setup (Optional)

### For iOS Simulator (Mac only)
- Install Xcode from App Store
- Install Xcode command line tools: `xcode-select --install`

### For Android Emulator
- Install Android Studio
- Set up Android SDK
- Create Android Virtual Device (AVD)

## Troubleshooting

- If you get permission errors with npm, use: `sudo npm install -g`
- For iOS simulator issues, try: `npx react-native run-ios --simulator="iPhone 14"`
- For Android issues, ensure AVD is running: `npx react-native run-android`