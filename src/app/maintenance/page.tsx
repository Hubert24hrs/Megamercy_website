export default function MaintenancePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Under Maintenance | Megamercy Apartments</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #0a0a0a;
          }

          .bg {
            position: fixed;
            inset: 0;
            z-index: 0;
            background:
              radial-gradient(ellipse at 20% 50%, rgba(180, 130, 60, 0.18) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(100, 80, 40, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(160, 110, 50, 0.12) 0%, transparent 50%),
              linear-gradient(135deg, #0d0b08 0%, #12100d 40%, #0f0d0a 100%);
            animation: bgPulse 8s ease-in-out infinite;
          }

          @keyframes bgPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }

          .particles {
            position: fixed;
            inset: 0;
            z-index: 1;
            overflow: hidden;
          }

          .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(212, 170, 90, 0.4);
            border-radius: 50%;
            animation: float linear infinite;
          }

          @keyframes float {
            0% { transform: translateY(100vh) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-10px) translateX(30px); opacity: 0; }
          }

          .card {
            position: relative;
            z-index: 10;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(212, 170, 90, 0.2);
            border-radius: 24px;
            padding: 60px 70px;
            max-width: 580px;
            width: 90%;
            text-align: center;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow:
              0 0 0 1px rgba(212, 170, 90, 0.05),
              0 40px 80px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
            animation: cardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          @keyframes cardIn {
            from { opacity: 0; transform: translateY(30px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          .icon-wrap {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: rgba(212, 170, 90, 0.08);
            border: 1px solid rgba(212, 170, 90, 0.25);
            margin-bottom: 28px;
            animation: iconPulse 3s ease-in-out infinite;
          }

          @keyframes iconPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(212, 170, 90, 0.3); }
            50% { box-shadow: 0 0 0 14px rgba(212, 170, 90, 0); }
          }

          .icon-wrap svg {
            width: 32px;
            height: 32px;
            color: #d4aa5a;
          }

          .brand {
            font-family: 'Cormorant Garamond', serif;
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            color: #d4aa5a;
            margin-bottom: 16px;
            opacity: 0.8;
          }

          .title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(32px, 5vw, 46px);
            font-weight: 300;
            color: #f0e8d5;
            line-height: 1.15;
            margin-bottom: 20px;
            letter-spacing: -0.01em;
          }

          .divider {
            width: 48px;
            height: 1px;
            background: linear-gradient(90deg, transparent, #d4aa5a, transparent);
            margin: 0 auto 24px;
          }

          .subtitle {
            font-size: 15px;
            font-weight: 300;
            color: rgba(240, 232, 213, 0.6);
            line-height: 1.7;
            margin-bottom: 36px;
          }

          .status-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 24px;
            background: rgba(212, 170, 90, 0.06);
            border: 1px solid rgba(212, 170, 90, 0.15);
            border-radius: 100px;
            display: inline-flex;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #d4aa5a;
            animation: blink 1.5s ease-in-out infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.85); }
          }

          .status-text {
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0.1em;
            color: rgba(212, 170, 90, 0.85);
            text-transform: uppercase;
          }

          .footer-note {
            margin-top: 40px;
            font-size: 12px;
            color: rgba(240, 232, 213, 0.25);
            letter-spacing: 0.05em;
          }

          .line-accent {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #d4aa5a, transparent);
            border-radius: 2px;
          }
        `}</style>
      </head>
      <body>
        <div className="bg" />

        <div className="particles">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i * 17 + 5) % 100}%`,
                animationDuration: `${8 + (i % 7) * 2}s`,
                animationDelay: `${(i * 0.7) % 6}s`,
                width: i % 3 === 0 ? '3px' : '2px',
                height: i % 3 === 0 ? '3px' : '2px',
                opacity: 0.3 + (i % 4) * 0.1,
              }}
            />
          ))}
        </div>

        <div className="card">
          <div className="line-accent" />

          <div className="icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          <p className="brand">Megamercy Apartments</p>
          <h1 className="title">We&apos;ll Be Back<br />Shortly</h1>
          <div className="divider" />
          <p className="subtitle">
            Our website is currently undergoing scheduled maintenance.<br />
            We apologize for the inconvenience and appreciate your patience.
          </p>

          <div className="status-row">
            <span className="dot" />
            <span className="status-text">Maintenance in Progress</span>
          </div>

          <p className="footer-note">magmercyapartments.com</p>
        </div>
      </body>
    </html>
  )
}
