import { lazy } from 'react';

export const lazyImport = (readyImport, element = null) => {
  return element
    ? lazy(() =>
        readyImport.then(module => ({
          ...module,
          default: module[element],
        }))
      )
    : lazy(() => readyImport);
};
