import './styles/style.css';
import { getAuthors, getTags } from './Quotes';

getAuthors()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });

getTags()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });
