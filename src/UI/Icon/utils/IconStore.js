import { lazy } from 'react';

import { MAP_PROPS_TO_ICON } from './constants';

import { createRequierContext } from './createRequireContext';

import DefaultComponent from '../assets/eye.svg';

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
      return this.#cache.get(name);
    }
    return lazy(async () => {
      try {
        const module = await this.#context(MAP_PROPS_TO_ICON[name]);
        this.#cache.set(name, module.default);
        return module;
      } catch (error) {
        return this.#DefaultModuleComponent;
      }
    });
  }
}
