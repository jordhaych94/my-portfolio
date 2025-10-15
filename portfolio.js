document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('review-form');

  if (reviewForm) {
    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for your feedback!');
      reviewForm.reset();
    });
  }
});