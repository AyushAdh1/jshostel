import "./App.css";
import hostelExterior from "./assets/hostel photo.jpg";
import hostelPanorama from "./assets/360-panorama.jpg";

const amenities = [
  {
    icon: "wifi",
    title: "Fiber Internet",
    description:
      "Fast and dependable Wi-Fi for study, work, and staying connected throughout the day.",
    dark: false,
  },
  {
    icon: "tour",
    title: "Local Experiences",
    description:
      "A calm and practical place to settle in while enjoying daily routines and local convenience.",
    dark: true,
  },
  {
    icon: "deck",
    title: "Shared Lounge",
    description:
      "Comfortable communal spaces for rest, conversation, and downtime with fellow residents.",
    dark: false,
  },
];

const rooms = [
  {
    title: "Single Seater",
    price: "NPR 14,500",
    unit: "/month",
    badges: ["Private Corner", "Best for Focus", "Secure Entry"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Kvr2L3tzC62jeQ-japFzQVYmDGcSnVZ_cBmeP4WXy4FL2i9jUeFq_CaNWPt0UNi3a_PVQQ-R4244DFzAar6YrKtAXcCFd3Uh659enmp2JshpHr5pIFfVEbnB2nxHXNB8OpP47Eesu1sWjLUNavTr372-LqCMqSWaoC9UyrnkxkENscYTFA-Pdew1mGegFwP_uC-kzD6QAjRVAGn3Q1m6vdVA1gMlT6xU-ScnQQFdy2rcZyPtBY5J",
    description:
      "A quiet room for one resident, ideal for focused study, work, and a simple routine.",
  },
  {
    title: "Dual Seater",
    price: "NPR 11,500",
    unit: "/month",
    badges: ["Shared Comfort", "Balanced Price", "Clean Setup"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlDHOYpg6wMvMhiRkjQ9S87ZskczaAw1V_S_3c4ILEgEX_LMsbm87BayKjwvMakLqt9z7S5qqoGdAcgP2N2g9b0efGG3t315Hp1oyDJslWD3r1_B188tY5aoTAnYeiKCXLZwjmSEnj6QMxj6W9KfuojFQhizsSECF5t0sPYzwqLXOPOE68DT8aRJDf1Erjv_2zxXt_xF1AzBiBMmFOPU8HUJ0x7AMs_zHmGx5Kj2ybHhNZa35jrQkh",
    description:
      "A practical two-person option with enough space for a comfortable and steady stay.",
  },
  {
    title: "Three Seater",
    price: "NPR 9,500",
    unit: "/month",
    badges: ["Most Affordable", "Community Feel", "Good for Groups"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCo0WK1TBKjtKypEIgKl3M2BxjfXSIf94VqmpV9schRe3aMqOGowNCdKuINKEtcW5ELG-O4EwX3HlJxwKKsN9u-ChGoZBmIhfw0nYZV2sWoR-KmQphNSVfxZWwOZ-UUWF_nNTr2oayA7yqv31rgUjW68FesFKQvmdA8FJHmoPEwmr_bljq4u-iqfgyYwAunDQ2IVXGkijP4IALCFKTl-gCzG3CKg1DYkwgEpECLMq-kNFF2QuD_Uwib",
    description:
      "A budget-friendly setup for three people that keeps the space practical and comfortable.",
  },
];

const reviews = [
  {
    name: "Roshan sah",
    meta: "5 reviews · 6 photos",
    initials: "RS",
    rating: 4,
    time: "8 years ago",
    text: "Hostel is very good for boys student as well as employee.. Have good environment and fooding facility..",
  },
  {
    name: "Roshan Chapagain",
    meta: "1 review",
    initials: "R",
    rating: 5,
    time: "8 years ago",
    text: "Nice hostel a friendly environment .l had been here since 5 yrs .......",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Contact Us",
  "Careers",
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="J.S Boys Hostel home">
          <span className="brand-mark">J</span>
          <span>
            <strong>J.S Boys Hostel</strong>
            <small>Balkumari, Lalitpur</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary navigation">
          <a href="#amenities">Amenities</a>
          <a href="#owner-says">Owner Says</a>
          <a href="#rooms">Rooms</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>
          <a href="tel:9813023251">Call</a>
        </nav>

        <a className="book-btn" href="tel:9813023251">
          Call Now
        </a>
      </header>

      <main className="main-content" id="home">
        <section className="hero-section">
          <div
            className="hero-background"
            style={{ backgroundImage: `url(${hostelExterior})` }}
          />
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-dot" />
              <span>Vibe Check: Dark, calm, and social</span>
            </div>
            <h1>Your Home Away from Home in the Heart of the City</h1>
            <p>
              J.S Boys Hostel offers a secure, tidy, and practical place to stay
              with reliable facilities, a calm environment, and easy access to
              daily essentials in Lalitpur.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Book Your Stay
              </a>
              <a className="btn btn-secondary" href="#rooms">
                Explore Rooms
              </a>
            </div>
            <div className="owner-pill">
              <span>Owner: Bikram Shahi</span>
              <span>Call: 9813023251</span>
            </div>
          </div>
        </section>

        <section id="amenities" className="section amenities-section">
          <div className="section-heading">
            <h2>Life at J.S Boys Hostel</h2>
            <p>
              More than a room. A practical, well-kept environment for daily
              living and easy routines.
            </p>
          </div>

          <div className="amenities-grid">
            <article className="panel-card panel-card-large">
              <img src={hostelPanorama} alt="J.S Boys Hostel rooftop panorama" />
              <div className="panel-overlay">
                <span className="panel-badge">Hostel photo</span>
                <h3>360 Balcony View</h3>
                <p>
                  A wide local view that shows the hostel from a different angle
                  and gives the listing more context.
                </p>
              </div>
            </article>

            {amenities.map((item) => (
              <article
                className={`panel-card amenity-card${item.dark ? " dark" : ""}`}
                key={item.title}
              >
                <div className="icon-badge" aria-hidden="true">
                  {item.icon === "wifi" && "📶"}
                  {item.icon === "tour" && "🧑‍🎓"}
                  {item.icon === "deck" && "🪑"}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="owner-says" className="section owner-says-section">
          <div className="section-heading">
            <h2>What the Owner Says</h2>
            <p>
              A short, natural note about the hostel and the kind of stay we
              want people to have.
            </p>
          </div>

          <article className="owner-say-card">
            <div className="owner-say-image-wrap" aria-hidden="true">
              <img src={hostelExterior} alt="J.S Boys Hostel exterior" />
            </div>
            <div className="owner-say-split">
              <p className="owner-quote">
                “We keep the hostel simple, clean, and comfortable. I want
                people to walk in, settle down quickly, and feel like they can
                just focus on their routine without any extra stress.”
              </p>
              <div className="owner-say-meta">
                <div className="owner-avatar" aria-hidden="true">
                  BS
                </div>
                <div className="owner-say-meta-text">
                  <strong>Bikram Shahi</strong>
                  <span>J.S Boys Hostel</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="rooms" className="section rooms-section">
          <div className="section-heading section-heading-row">
            <div>
              <h2>Rest & Recharge</h2>
              <p>
                Choose the room style that fits your routine, budget, and
                privacy needs.
              </p>
            </div>
            <div className="offer-pill">
              <span>Monthly pricing available</span>
            </div>
          </div>

          <div className="rooms-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.title}>
                <div className="room-content">
                  <div className="room-type-pill">{room.title}</div>
                  <div className="room-title-row">
                    <h3>{room.title}</h3>
                    <div className="room-price">
                      <span className="price">{room.price}</span>
                      <span className="price-unit">{room.unit}</span>
                    </div>
                  </div>
                  <p>{room.description}</p>
                  <div className="tag-row">
                    {room.badges.map((badge) => (
                      <span className="tag" key={badge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <div className="section-heading">
            <h2>What Residents Say on Google</h2>
            <p>
              Real feedback from students and employees who have stayed at J.S
              Boys Hostel.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-header">
                  <div className="review-avatar" aria-hidden="true">
                    {review.initials}
                  </div>
                  <div className="review-header-text">
                    <strong>{review.name}</strong>
                    <span>{review.meta}</span>
                  </div>
                </div>
                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                  <span className="review-time">{review.time}</span>
                </div>
                <p className="review-text">{review.text}</p>
              </article>
            ))}
          </div>

          <div className="reviews-cta">
            <a
              className="btn btn-secondary"
              href="https://maps.app.goo.gl/oPoyJh28nDu8vqjc8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read All Reviews on Google
            </a>
          </div>
        </section>

        <section id="location" className="section location-section">
          <div className="section-heading">
            <h2>Find Us</h2>
            <p>Located in Balkumari, Lalitpur — easy to reach and close to daily essentials.</p>
          </div>

          <div className="map-wrap">
            <iframe
              title="J.S Boys Hostel location on Google Maps"
              className="map-frame"
              src="https://www.google.com/maps?q=JS+Boys+Hostel+Balkumari+Lalitpur&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="reviews-cta">
            <a
              className="btn btn-secondary"
              href="https://maps.app.goo.gl/oPoyJh28nDu8vqjc8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <div className="footer-brand">J.S Boys Hostel</div>
            <p>Managed by Bikram Shahi</p>
            <p>Phone: 9813023251</p>
            <p>Balkumari, Lalitpur</p>
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
