import { button, secretParagraph } from './ticket';
import STYLES from '../css/main.scss';

const toggleTextState = () => {
    secretParagraph.classList.toggle("invisible");
};

button.addEventListener('click', toggleTextState);
toggleTextState();