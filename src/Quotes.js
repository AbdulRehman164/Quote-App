export async function getAuthors() {
    const response = await fetch(
        'https://api.quotable.io/authors?limit=50&sortBy=quoteCount'
    );
    const result = await response.json();
    return result;
}

export async function getTags() {
    const response = await fetch(
        'https://api.quotable.io/tags?sortBy=quoteCount'
    );
    const result = await response.json();
    return result;
}

export async function getHomeQuotes(pageNumber, authors, tags) {
    let authorURL = `https://api.quotable.io/quotes?page=${pageNumber}&author=`;
    authors.forEach((author) => {
        authorURL += `${author}|`;
    });

    let tagsURL = `https://api.quotable.io/quotes?page=${pageNumber}&tags=`;
    tags.forEach((tag) => {
        tagsURL += `${tag}|`;
    });

    const authorResponse = await fetch(authorURL);
    const tagsResponse = await fetch(tagsURL);

    const authorResult = await authorResponse.json();
    const tagsResult = await tagsResponse.json();

    return [...authorResult.results, ...tagsResult.results];
}
