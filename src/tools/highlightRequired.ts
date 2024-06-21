import { injectToolCSS } from '../utils/cssGenerator';
import { REQUIRED_SELECOTRS } from '../enum/Selectors';
import IToolConfig from '../types/IToolConfig';

export const highlightRequiredConfig: IToolConfig = {
    id: 'highlight-required',
    selector: `html`,
    childrenSelector: REQUIRED_SELECOTRS,
    styles: { background: '#F2C037', color: 'black' }
};

export default function highlightRequired(enable = false) {
    injectToolCSS({
        ...highlightRequiredConfig,
        enable
    });
}
