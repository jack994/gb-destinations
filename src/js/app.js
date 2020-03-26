import { button, secretParagraph } from './ticket';
import '../css/main.scss';

let showText = false;

const toggleTextState = () => {
    showText = !showText;
    updateTextParagraph()
};

const updateTextParagraph = () => {
    if(showText){
        secretParagraph.style.display = 'block';
    }
    else{
        secretParagraph.style.display = 'none';
    }
};

button.addEventListener('click', toggleTextState);
updateTextParagraph();