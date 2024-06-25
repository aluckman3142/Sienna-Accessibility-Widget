const elementNodeNames: string[] = [
    'B',
    'STRONG',
    'I',
    'U',
    'EM',
    'MARK',
    'SUB',
    'SUP',
    'INS',
    'PRE',
    'ABBR'
];

function getTextFromNode(node) {}

function getFullSentence(node: Node): string {
    if (!node) {
        return '';
    }

    // Check if any text is selected
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        // Get the selected text
        const selectedText = selection.toString().trim();
        if (selectedText) {
            return selectedText;
        }
    }

    // If no text is selected, return the full text content of the element
    return node.textContent.trim();
}

function speakText(text) {
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        if (text) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(text));
        }
    } else {
        console.log('Text-to-speech not supported in this browser.');
    }
}

export default function screenReader(enable = false) {
    if (enable) {
        (window as any).__asw__onClickScreenReader = (event) => {
            var clickedElement = event.target;

            if (!['BODY', 'HEAD', 'HTML'].includes(clickedElement.nodeName)) {
                var selectedText = getFullSentence(clickedElement);

                speakText(selectedText);
            }
        };

        document.addEventListener('click', (window as any).__asw__onClickScreenReader);
    } else {
        if ((window as any).__asw__onClickScreenReader) {
            document.removeEventListener('click', (window as any).__asw__onClickScreenReader);
            delete (window as any).__asw__onClickScreenReader;
        }
    }
}
