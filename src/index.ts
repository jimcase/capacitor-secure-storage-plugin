import { registerPlugin } from "@capacitor/core";

import { SecureStoragePluginInterface } from "./definitions";

export const SecureStoragePlugin = registerPlugin<SecureStoragePluginInterface>("SecureStoragePlugin", {
  web: async () => await import("./web.js").then((m) => new m.SecureStoragePluginWeb()),
});

export * from "./definitions.js";

export interface SecureStorageInterface {
  SecureStoragePluginInterface: SecureStoragePluginInterface;
}
