// Simulated library database (replace with a real database)
const libraryDatabase = [
    'Book 1: Title A',
    'Book 2: Title B',
    'Book 3: Title C',
    'Book 4: Title D',
    'Book 5: Title E'
];

// Function to check book availability
function checkAvailability(recommendations) {
    const availableBooks = recommendations.filter(book => libraryDatabase.includes(book));
    return availableBooks;
}

// Update the event listener to check availability
form.addEventListener('submit', async (e) => {
    // ... (previous code)

    if (response.ok) {
        const data = await response.json();
        const recommendedBooks = data.recommendations;
        const availableBooks = checkAvailability(recommendedBooks);

        // Display available books
        recommendationsDiv.innerHTML = '<h2>Book Recommendations:</h2>' +
            (availableBooks.length > 0 ? availableBooks.join('<br>') : 'No recommended books are available in the library.');
    } else {
        recommendationsDiv.innerHTML = '<p>Failed to fetch recommendations. Please try again later.</p>';
    }
});
