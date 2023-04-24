import { lazy } from 'react';

import { ReactComponent as DefaultComponent } from './assets/eye.svg';
import { MAP_PROPS_TO_ICON } from './constants';

import { createRequierContext } from './createRequireContext';

const requireContext = createRequierContext();

export default class IconStore {
  #DefaultModuleComponent = { default: DefaultComponent };
  #context;
  #cache = new Map();
  constructor(context = requireContext) {
    this.#context = context;
  }

  get(name) {
    if (this.#cache.has(name)) {
      console.log('this.#cache.get(name)', this.#cache.get(name));
      return this.#cache.get(name);
    }
    return lazy(async () => {
      try {
        const module = await this.#context(MAP_PROPS_TO_ICON[name]);
        console.log('module', { default: module });
        this.#cache.set(name, module);
        return module;
      } catch (error) {
        console.log('err', error);
        return this.#DefaultModuleComponent;
      }
    });
  }
}
