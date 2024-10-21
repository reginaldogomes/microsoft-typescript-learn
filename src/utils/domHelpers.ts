// src/utils/domHelpers.ts
export const clearElementChildren = (element: HTMLElement): void => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
