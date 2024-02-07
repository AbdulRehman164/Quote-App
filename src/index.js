import './styles/style.css';
import { getAuthors, getTags, getHomeQuotes } from './Quotes';

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

getHomeQuotes(
    1,
    ['albert-einstein', 'thomas-edison'],
    ['happiness', 'history']
).then((result) => {
    console.log(result);
});
