import { registerRootComponent } from "expo";
import { Client } from "./src/utilities/backendLibrary/MEMEmoAppBackend";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const backend = new Client("http://192.168.0.171:5039");
registerRootComponent(App);

export { backend as Backend };
