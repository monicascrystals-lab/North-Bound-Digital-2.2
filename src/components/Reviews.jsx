import reviews from '../data/reviews'

function Reviews() {
  return (
    <section id="reviews" className="section reviews-section">
      {/* Future React Bits reviews carousel can be added around these cards */}
      <div className="section-header">
        <p className="eyebrow">Designed to earn trust</p>
        <h2>Strong local businesses deserve a strong online presence.</h2>
        <p>
          Thoughtful, easy-to-use websites create the confidence that gets visitors to take the next step.
        </p>
      </div>

      <div className="reviews-grid" role="list">
        {reviews.map((review) => (
          <article key={review.id} className="review-card" role="listitem">
            <div className="review-stars" aria-hidden="true">
              {'★'.repeat(review.rating).padEnd(5, '☆')}
            </div>
            <p className="review-text">“{review.text}”</p>
            <p className="review-author">— {review.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
