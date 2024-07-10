export const ALL_SELECTOR = ['', '*:not(.material-icons,.asw-menu,.asw-menu *,.q-icon)'];

export const LINKS_SELECOTR = ['a[href]'];

export const REQUIRED_SELECOTRS = ['.required + .q-field .q-field__control', '.required + input'];

export const HEADER_SELECTORS = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    '.wsite-headline',
    '.wsite-content-title'
];

export const TEXT_SELECTORS = [
    ...HEADER_SELECTORS,
    'img',
    'p',
    'i',
    'svg',
    'a',
    'button:not(.asw-btn)',
    'label',
    'li',
    'ol'
];
