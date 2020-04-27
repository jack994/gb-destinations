import { button, secretParagraph } from './ticket';
import styles from '../css/main.scss';

const toggleTextState = () => {
    console.log(styles);
    secretParagraph.classList.toggle(styles.invisible);
};

button.addEventListener('click', toggleTextState);
toggleTextState();