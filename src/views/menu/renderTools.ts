import stopAnimations from '../../tools/stopAnimations';
import readableFont from '../../tools/readableFont';
import { getSettings } from '../../storage';
import bigCursor from '../../tools/bigCursor';
import highlightTitle from '../../tools/highlightTitle';
import readingGuide from '../../tools/readingGuide';
import highlightLinks from '../../tools/highlightLinks';
import adjustLetterSpacing from '../../tools/adjustLetterSpacing';
import adjustLineHeight from '../../tools/adjustLineHeight';
import adjustFontWeight from '../../tools/adjustFontWeight';
import highlightRequired from '../../tools/highlightRequired';
import screenReader from '../../tools/screenReader';

export default function renderTools() {
    let { states } = getSettings();

    highlightTitle(states['highlight-title']);
    highlightRequired(states['highlight-required']);
    highlightLinks(states['highlight-links']);

    adjustLetterSpacing(states['letter-spacing']);
    adjustLineHeight(states['line-height']);
    adjustFontWeight(states['font-weight']);

    readableFont(states['readable-font']);

    readingGuide(states['readable-guide']);
    screenReader(states['screen-reader']);
    stopAnimations(states['stop-animations']);
    bigCursor(states['big-cursor']);
}
