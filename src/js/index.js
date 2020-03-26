import { button, secretParagraph } from './ticket';

const showText = false;

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