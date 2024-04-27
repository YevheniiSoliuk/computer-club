import { BASE_URL } from "../constants";

export async function getReviews() {
  const res = await fetch(`${BASE_URL}/reviews`);
  const reviews = await res.json();

  const html = reviews.map((review) => `
    <div class="review-container">
      <div class="avatar-image-container">
        <img src="${review.avatar}" alt="Client avatar 1"/>
      </div>
      <div class="rate-container">
        <div class="stars">
        ${Array.from(new Array(5)).map((_, index) => {
          return `<svg class="${review.rate > index ? 'star_checked' : ''}" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2543 2.16146L8.42011 7.90798L2.07897 8.83246C0.941813 8.99739 0.486084 10.3993 1.31074 11.2023L5.89841 15.6727L4.81334 21.9878C4.61803 23.1293 5.82029 23.9844 6.82723 23.4505L12.5 20.4687L18.1727 23.4505C19.1797 23.98 20.3819 23.1293 20.1866 21.9878L19.1015 15.6727L23.6892 11.2023C24.5139 10.3993 24.0581 8.99739 22.921 8.83246L16.5798 7.90798L13.7456 2.16146C13.2378 1.13715 11.7665 1.12413 11.2543 2.16146Z" fill="white"/>
          </svg>`;
        }).join(' ')}
        </div>
        <p class="rate">${review.rate}/5</p>
      </div>
      <p>${review.review}</p>
    </div>
  `).join('');

  const reviewContainerNode = document.querySelector('.reviews-container');
  reviewContainerNode.innerHTML = html;
}