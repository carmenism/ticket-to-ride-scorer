/**
 * This module makes makes the global UIkit available as a module export.
 */
/// <reference types="uikit" />

const globalScope = window as any;
if (!globalScope.UIkit) {
  globalScope.UIkit = undefined;
}

const _UIkit = UIkit;

export { _UIkit as UIkit };
