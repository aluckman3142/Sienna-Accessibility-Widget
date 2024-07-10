// entry.ts
import sienna from './sienna';
import reset from './views/menu/reset';
import runAccessibility from './views/menu/runAccessibility';
import load from 'load-script';

const translate = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

const getDataAttribute = (attr: any): any => {
    attr = `data-asw-${attr}`;
    return document?.querySelector(`[${attr}]`)?.getAttribute(attr);
};

const initialize = (): void => {
    let lang: string = getDataAttribute('lang');
    let position: string = getDataAttribute('position');
    let offset: string | number[] = getDataAttribute('offset');

    if (!lang) {
        lang = document
            ?.querySelector('html')
            ?.getAttribute('lang')
            ?.replace(/[_-].*/, '');
    }
    if (!lang && typeof navigator !== 'undefined' && navigator?.language) {
        lang = navigator?.language;
    }

    if (typeof offset === 'string') {
        offset = offset.split(',').map((value) => parseInt(value));
    }

    sienna({
        lang,
        position,
        offset
    });
};

const checkReadyState = (): void => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // Document is ready, call the initialization function
        initialize();

        load(translate, () => {});

        // Remove the event listener to ensure it's only executed once
        document.removeEventListener('readystatechange', checkReadyState);
    }
};

const render: Function = runAccessibility;

// Use readystatechange for async support
document.addEventListener('readystatechange', checkReadyState);

export { render, reset };
