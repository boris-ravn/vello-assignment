const { useState } = React;

/* ---- lucide-style icons, paths copied 1:1 from the live prototype ---- */

function SignalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function BatteryFullIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10v4" />
      <path d="M14 10v4" />
      <path d="M22 14v-4" />
      <path d="M6 10v4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="nbd__heart" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

function FootprintsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 18.9 6.1 21.3l1.3-6.6L2.5 9.5l6.6-.8L12 2.5z" />
    </svg>
  );
}

function MessageCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

/* ---- shared components ---- */

function IconButton({ label, variant = "default", children, onClick, ...rest }) {
  const modifier = variant === "default" ? "" : ` vl-iconbtn--${variant}`;
  return (
    <button className={`vl-iconbtn vl-iconbtn--md${modifier}`} aria-label={label} onClick={onClick} {...rest}>
      <span className="vl-iconbtn__i">{children}</span>
    </button>
  );
}

function Badge({ variant = "neutral", size = "md", dot = false, icon, children }) {
  return (
    <span className={`vl-badge vl-badge--${variant} vl-badge--${size}`}>
      {dot && <i className="vl-badge__dot"></i>}
      {icon}
      {children}
    </span>
  );
}

const VERIFIED_STATUS_LABEL = {
  verified: "Background-checked",
  pending: "Verification pending",
  "top-rated": "Top-rated neighbor",
  unverified: "Not yet verified",
};

function VerifiedMark({ status = "verified", size = 17 }) {
  if (status !== "verified") return null;
  return (
    <svg
      className="vl-vmark vl-vbadge__mark"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={VERIFIED_STATUS_LABEL.verified}
    >
      <title>{VERIFIED_STATUS_LABEL.verified}</title>
      <path
        d="M12 2.2 4.6 5v6.1c0 4.6 3.1 7.9 7.4 9.6 4.3-1.7 7.4-5 7.4-9.6V5L12 2.2Z"
        fill="var(--green-600)"
        stroke="none"
        strokeWidth="0"
        strokeLinejoin="round"
      />
      <path
        d="m8.4 12 2.5 2.5 4.7-5"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedBadge({ status = "verified", size = "md", label }) {
  return (
    <span className={`vl-vbadge vl-vbadge--${status} vl-vbadge--${size}`}>
      <VerifiedMark status={status} size={size === "sm" ? 15 : 17} />
      {label || VERIFIED_STATUS_LABEL[status]}
    </span>
  );
}

function Avatar({ size, src, alt, initials }) {
  return (
    <span className={`vl-avatar vl-avatar--${size}`}>
      {src ? (
        <img className="vl-avatar__img" src={src} alt={alt} />
      ) : (
        <span className="vl-avatar__fallback" aria-label={alt}>
          {initials}
        </span>
      )}
    </span>
  );
}

function Rating({ value, count, size = "sm", starsOnly = false }) {
  return (
    <span className={`vl-rating vl-rating--${size}`}>
      <span className="vl-rating__stars" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>
            <StarIcon />
          </span>
        ))}
      </span>
      {!starsOnly && (
        <>
          <span className="vl-rating__value">{value.toFixed(1)}</span>
          {count !== undefined && <span className="vl-rating__count">({count})</span>}
        </>
      )}
    </span>
  );
}

/* ---- profile screen ---- */

function ProviderProfile({ available = true, reviewCount = 39 }) {
  const [saved, setSaved] = useState(false);
  const hasReviews = reviewCount > 0;

  return (
    <div className="phone">
      <div className="statusbar">
        <span className="statusbar__time">9:41</span>
        <span className="statusbar__icons">
          <SignalIcon />
          <WifiIcon />
          <BatteryFullIcon />
        </span>
      </div>

      <div className="screen">
        <div className="appbar">
          <IconButton label="Back" variant="default">
            <ArrowLeftIcon />
          </IconButton>
          <span className="appbar__title">Grace Lin</span>
          <IconButton
            label="Save to favorites"
            variant="default"
            onClick={() => setSaved(!saved)}
            aria-pressed={saved}
          >
            <HeartIcon />
          </IconButton>
        </div>

        <div className="scroll">
          <div className="nbd__hero">
            <span className="nbd__avatar">
              <Avatar
                size="xl"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&facepad=3&w=240&h=240&q=70"
                alt="Grace Lin"
              />
              <span className="nbd__vmark">
                <svg width="32" height="32" viewBox="0 0 24 24" role="img" aria-label="Background-checked">
                  <path
                    d="M12 2.2 4.6 5v6.1c0 4.6 3.1 7.9 7.4 9.6 4.3-1.7 7.4-5 7.4-9.6V5L12 2.2Z"
                    fill="var(--green-600)"
                    stroke="var(--surface-card)"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.4 12 2.5 2.5 4.7-5"
                    fill="none"
                    stroke="var(--paper)"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>

            <div className="nbd__name">Grace Lin</div>
            <div className="nbd__svc">Math &amp; SAT tutoring</div>

            <div className="nbd__badges">
              {available && (
                <Badge variant="success" dot>
                  Available
                </Badge>
              )}
              <Badge variant="neutral" icon={<FootprintsIcon />}>
                14 min walk
              </Badge>
            </div>

            <div className="nbd__stats">
              <div className="nbd__stat">
                <div className="nbd__statv nbd__statv--rating">
                  {hasReviews ? (
                    <Rating value={5.0} size="sm" />
                  ) : (
                    <Badge variant="info">New</Badge>
                  )}
                </div>
                <div className="nbd__statk">{hasReviews ? "39 reviews" : "No reviews yet"}</div>
              </div>
              <div className="nbd__stat">
                <div className="nbd__statv">$40</div>
                <div className="nbd__statk">from / hr</div>
              </div>
              <div className="nbd__stat">
                <div className="nbd__statv nbd__statv--sm">~1 hr</div>
                <div className="nbd__statk">response</div>
              </div>
            </div>
          </div>

          <div className="nbd__sec">
            <div className="nbd__h">
              <span>About</span>
            </div>
            <p className="nbd__about">
              Math and SAT prep for grades 7 through 12. We can work at the Bay Ridge library or at your
              kitchen table — whichever helps your kid focus.
            </p>
            <div className="nbd__trustrow">
              <span className="nbd__trustmeta">On Vello since 2025</span>
              <VerifiedBadge status="verified" size="sm" />
            </div>
          </div>

          <div className="nbd__sec">
            <div className="nbd__h">
              <span>What Grace offers</span>
            </div>
            <div className="nbd__svcs">
              <button className="nbd__svcrow" type="button">
                <span className="nbd__svcl">Math tutoring, 1 hour</span>
                <span className="nbd__svcp">
                  $40 <span>per hr</span>
                </span>
                <span className="nbd__svcchev">
                  <ChevronRightIcon />
                </span>
              </button>
              <button className="nbd__svcrow" type="button">
                <span className="nbd__svcl">SAT prep, 90 min</span>
                <span className="nbd__svcp">
                  $55 <span>per session</span>
                </span>
                <span className="nbd__svcchev">
                  <ChevronRightIcon />
                </span>
              </button>
            </div>
          </div>

          <div className="nbd__sec">
            <div className="nbd__h">
              <span>Reviews</span>
              <span className="nbd__hrate">
                <Rating value={5.0} count={39} />
              </span>
            </div>
            <div className="nbd__revs">
              <div className="nbd__rev">
                <div className="nbd__revtop">
                  <Avatar size="sm" initials="HK" alt="Hana K." />
                  <span className="nbd__revwho">Hana K.</span>
                  <span className="nbd__revat">1 month ago</span>
                </div>
                <Rating value={5} />
                <p className="nbd__revtext">My daughter went from a C to an A- in one semester. Grace is patient.</p>
              </div>
              <div className="nbd__rev">
                <div className="nbd__revtop">
                  <Avatar size="sm" initials="RO" alt="Ruth O." />
                  <span className="nbd__revwho">Ruth O.</span>
                  <span className="nbd__revat">Mar 2026</span>
                </div>
                <Rating value={5} />
                <p className="nbd__revtext">Explains things three different ways until it lands. Rare skill.</p>
              </div>
            </div>
            <div className="nbd__more">
              <button className="quietlink">Read all 39 reviews</button>
            </div>
          </div>
        </div>

        <div className="nbd__cta">
          <IconButton label="Message Grace Lin" variant="default">
            <MessageCircleIcon />
          </IconButton>
          <button className="vl-btn vl-btn--lg vl-btn--full">
            <span className="vl-btn__icon">
              <CalendarCheckIcon />
            </span>
            Book Grace
          </button>
        </div>

        <div className="navwrap">
          <nav className="vl-bottomnav">
            <button className="vl-navitem vl-navitem--active" aria-current="page">
              <HomeIcon />
              <span>Home</span>
            </button>
            <button className="vl-navitem">
              <CalendarIcon />
              <span>Bookings</span>
            </button>
            <button className="vl-navitem">
              <span className="vl-navitem__badge">3</span>
              <MessageCircleIcon />
              <span>Messages</span>
            </button>
            <button className="vl-navitem">
              <UserIcon />
              <span>Profile</span>
            </button>
          </nav>
          <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
}

/* ---- audit harness: lets the two implemented states (zero-review,
   unavailable) be inspected without hardcoding a second static screen ---- */

function AuditDemo() {
  const [available, setAvailable] = useState(true);
  const [hasReviews, setHasReviews] = useState(true);

  return (
    <div className="demo-wrap">
      <div className="demo-controls">
        <label>
          <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
          Available
        </label>
        <label>
          <input type="checkbox" checked={hasReviews} onChange={(e) => setHasReviews(e.target.checked)} />
          Has reviews
        </label>
      </div>
      <ProviderProfile available={available} reviewCount={hasReviews ? 39 : 0} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AuditDemo />);
