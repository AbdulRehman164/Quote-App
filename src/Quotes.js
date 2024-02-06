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
