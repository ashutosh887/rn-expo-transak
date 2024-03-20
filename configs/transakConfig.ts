import { Transak, TransakConfig } from "@transak/transak-sdk";

const transakConfig: TransakConfig = {
  apiKey: "API_KEY",
  environment: Transak.ENVIRONMENTS.STAGING,
  exchangeScreenTitle: "React Native Expo Demo",
};

export default transakConfig;
