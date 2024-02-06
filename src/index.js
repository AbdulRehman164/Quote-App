import './styles/style.css';
import { getAuthors } from './Quotes';

getAuthors()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });
