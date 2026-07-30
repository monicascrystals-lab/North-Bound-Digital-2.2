import reviews from '../data/reviews'

function Reviews() {
  return (
    <section id="reviews" className="section reviews-section">
      {/* Future React Bits reviews carousel can be added around these cards */}
      <div className="section-header">
        <p className="eyebrow">Reviews</p>
        <h2>Placeholder testimonials for future reviews</h2>
        <p>
          These sample review cards show how a future carousel or animated review list can be
          presented on the website.
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
