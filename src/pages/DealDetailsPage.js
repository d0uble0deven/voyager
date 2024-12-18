// DealDetailsPage.js
import React from "react";
import "./DealDetailsPage.css";

import TestDataButton from "../TestDataButton";
import FlightInspoComponent from "../FlightInspoComponent";

import MediaGallery from "../Organisms/MediaGallery";

import FlightBookingEngine from "../Organisms/FlightBookingEngine";
import HotelBookingEngine from "../Organisms/HotelBookingEngine";
import EventBookingEngine from "../Organisms/EventBookingEngine";

const DealDetailsPage = () => {
  return (
    <div className="deal-details-page">
      <main id="main-content">
        <section className="trip-overview">
          <h1>Highlights of Japan</h1>
          <p>
            14 days, 6 cities | From $4,079{" "}
            <span className="discount-price">
              $3,429 before flights ($650 off)
            </span>
            | Estimated payments as low as $83
          </p>
          <div className="trip-info">
            <div className="trip-type">Trip type: Plus</div>
            <div className="reviews">4.8 out of 5 stars (301 reviews)</div>
            <div className="activity-level">Activity level: Low</div>
          </div>
          <a href="#dates-prices" className="cta-button">
            See dates & prices
          </a>
          <div className="media-gallery-container">
            <MediaGallery />
          </div>
        </section>

        <div className="why-go-and-trip-dates">
          <section className="why-go">
            <h2>Why go?</h2>
            <p>
              In Japan, there’s something unique around every corner. It could
              be a centuries-old shrine, it could be a street lit entirely in
              neon, but it’s probably a vending machine. Immerse yourself in the
              past and travel into the future as you explore every side of the
              Land of the Rising Sun.
            </p>
            <ul className="features">
              <li>
                Round-trip flights & airport transfers (or book 'em yourself)
              </li>
              <li>12 nights in handpicked accommodations</li>
              <li>12 breakfasts</li>
              <li>4 dinners</li>
              <li>Expert Tour Director</li>
              <li>24/7 support</li>
              <li>2 insider tours with a local guide</li>
              <li>Entrance to shrines, temples, and other local attractions</li>
            </ul>
          </section>
        </div>

        <div className="why-go-and-trip-dates">
          <section className="select-trip-dates">
            <h2>Select Trip Dates</h2>
            <div className="trip-dates-card">
              <ul className="trip-dates-list">
                <FlightBookingEngine />
              </ul>
            </div>
          </section>
          <section className="select-trip-dates">
            <h2>Select Hotel Stays</h2>
            <div className="trip-dates-card">
              <ul className="trip-dates-list">
                <HotelBookingEngine />
              </ul>
            </div>
          </section>
          <section className="select-trip-dates">
            <h2>Purchase Tickets</h2>
            <div className="trip-dates-card">
              <ul className="trip-dates-list">
                <EventBookingEngine />
              </ul>
            </div>
          </section>
        </div>

        <section className="traveler-photos">
          <h2>Traveler photos</h2>
          <div className="media-gallery-expanded">
            <img
              src="https://images.pexels.com/photos/1270210/pexels-photo-1270210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A large calm body of water with mountains in the background and ornate red temple structures situated over the water"
            />
            <img
              src="https://images.pexels.com/photos/2187456/pexels-photo-2187456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A red ornate temple with multiple layers and gold detailing with a blue sky in the background"
            />
            <img
              src="https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk"
            />
            <img
              src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk"
            />
            <img
              src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A red ornate temple with multiple layers and gold detailing with a blue sky in the background"
            />
            <img
              src="https://images.pexels.com/photos/161309/traditional-and-technology-zojoji-temple-tokyo-culture-161309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk"
            />
            <img
              src="https://images.pexels.com/photos/2187456/pexels-photo-2187456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A red ornate temple with multiple layers and gold detailing with a blue sky in the background"
            />
            <img
              src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A red ornate temple with multiple layers and gold detailing with a blue sky in the background"
            />
            <img
              src="https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk"
            />
            <img
              src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk"
            />
            <img
              src="https://images.pexels.com/photos/1270210/pexels-photo-1270210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A large calm body of water with mountains in the background and ornate red temple structures situated over the water"
            />
            <img
              src="https://images.pexels.com/photos/161309/traditional-and-technology-zojoji-temple-tokyo-culture-161309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk"
            />
            <img
              src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A red ornate temple with multiple layers and gold detailing with a blue sky in the background"
            />
          </div>
          <a href="#" className="load-more-button">
            Load More - Media Gallery
          </a>
        </section>

        <section className="reviews">
          <h2>Reviews</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <h3>SHINYA IS THE BEST!!!</h3>
              <p>5 out of 5 stars</p>
              <p>1st-time traveler Philip, traveled in Nov 2024</p>
              <p>
                Give that man a raise!! He really goes above and beyond to make
                sure that everyone is taken care of and is having a good time.
                Although that might just be my experience since I know that
                travelers from Utah are his favorite.
              </p>
            </div>
            <div className="review-card">
              <h3>Unforgettable experience</h3>
              <p>5 out of 5 stars</p>
              <p>1st-time traveler Kimberly, traveled in Nov 2024</p>
              <p>
                Shinya, our tour director, was absolutely phenomenal! His energy
                and enthusiasm made the trip unforgettable. He provided
                excellent local insights, recommended fantastic dining spots,
                and went out of his way to help those of us with tattoos find a
                private onsen to visit.
              </p>
            </div>
            <div className="review-card">
              <h3>Highlights of Japan 11-24th of November</h3>
              <p>5 out of 5 stars</p>
              <p>1st-time traveler Anonymous, traveled in Nov 2024</p>
              <p>
                This trip is my first booking with EF Ultimate Break and it is
                also my first time in Japan. Our tour guide Shinya, was the most
                helpful and kind person I have had the opportunity to meet. I am
                very grateful for the people I got to meet and share memories
                with.
              </p>
            </div>
            <div className="review-card">
              <h3>Trip of a lifetime</h3>
              <p>5 out of 5 stars</p>
              <p>1st-time traveler Anonymous, traveled in Nov 2024</p>
              <p>
                If you're thinking about booking this trip, this is your sign to
                do it. I'm so glad I committed and booked this trip. Japan is
                such a unique country in that you will feel equally in a modern
                utopia and in a preserved ancient past rich with history.
                There's really nothing like it.
              </p>
            </div>
          </div>
          <a href="#" className="load-more-button">
            Load More Reviews
          </a>
        </section>
      </main>
      <footer className="footer">
        <div className="contact-info">
          <p>EF Center Boston</p>
          <p>Two Education Circle, Cambridge, MA 02141</p>
        </div>
        <nav className="footer-nav">
          <a href="/faq">FAQ</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact us</a>
        </nav>
      </footer>
    </div>
  );
};

export default DealDetailsPage;
