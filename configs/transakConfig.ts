import { Transak, TransakConfig } from "@transak/transak-sdk";

const apiKey = process.env.EXPO_PUBLIC_TRANSAK_API_KEY;

const transakConfig: TransakConfig = {
  apiKey,
  environment: Transak.ENVIRONMENTS.STAGING,
  exchangeScreenTitle: "React Native Expo Demo",
};

export default transakConfig;
