// Script to handle toggling of plant details

document.addEventListener('DOMContentLoaded', () => {
    // Select all plant cards
    const cards = document.querySelectorAll('.plant-card');
    cards.forEach(card => {
        // Add click handler
        card.addEventListener('click', event => {
            toggleDetails(card);
        });
        // Add keydown handler for accessibility (Enter or Space)
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleDetails(card);
            }
        });
    });
});

/**
 * Toggle the visibility of the details section within a card.
 * Close other open cards to ensure only one plant's details are expanded at a time.
 *
 * @param {HTMLElement} card The card element to toggle
 */
function toggleDetails(card) {
    const details = card.querySelector('.details');
    const isOpen = details.style.display === 'block';
    // Close all other cards first
    document.querySelectorAll('.plant-card .details').forEach(panel => {
        panel.style.display = 'none';
    });
    // Toggle the selected card
    details.style.display = isOpen ? 'none' : 'block';
}