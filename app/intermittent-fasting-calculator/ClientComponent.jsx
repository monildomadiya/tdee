"use client";
import React, { useState, useEffect } from 'react';
import './calculator.css';

const PROTOCOLS = [
  { id: "16:8", fast: 16, eat: 8, tag: "Most popular" },
  { id: "18:6", fast: 18, eat: 6, tag: "Intermediate" },
  { id: "20:4", fast: 20, eat: 4, tag: "Advanced" },
  { id: "OMAD", fast: 23, eat: 1, tag: "1 meal / day" },
];

const TIPS = {
  "16:8": [
    "Skip breakfast — eat between 12pm & 8pm for an easy window",
    "Black coffee and plain tea are allowed during fasting",
    "Sleep naturally covers 7–8 hours of your 16h fast",
    "Ideal starting protocol for beginners"
  ],
  "18:6": [
    "Try a 1pm – 7pm eating window to fit social meals",
    "A great step up once 16:8 feels comfortable",
    "Drink 2–3 litres of water throughout the day",
    "Combine with a calorie deficit for faster fat loss"
  ],
  "20:4": [
    "One large meal plus a small snack window",
    "Strong appetite-suppression effect after 2 weeks",
    "Take electrolytes to prevent fatigue and headaches",
    "Not recommended for beginners — build up first"
  ],
  "OMAD": [
    "One large, nutrient-dense meal at the same time daily",
    "Extreme protocol — speak to a doctor before starting",
    "Ensure you hit all macro and micronutrient targets",
    "Not ideal for long-term use for most people"
  ],
};

function fmt12(h) {
  let n = ((h % 24) + 24) % 24;
  let hh = Math.floor(n), mm = Math.round((n - hh) * 60);
  if (mm === 60) { mm = 0; hh = (hh + 1) % 24; }
  const ap = hh >= 12 ? 'PM' : 'AM', h12 = hh % 12 || 12;
  return `${h12}:${String(mm).padStart(2, '0')} ${ap}`;
}

function fmtCD(s) {
  if (s <= 0) return "00:00:00";
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

function polar(cx, cy, r, deg) {
  const rad = (deg - 90) * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function arc(cx, cy, ro, ri, sd, span) {
  if (span >= 359.9) {
    return `M${cx} ${cy - ro}A${ro} ${ro} 0 1 1 ${cx - 0.01} ${cy - ro}ZM${cx} ${cy - ri}A${ri} ${ri} 0 1 0 ${cx - 0.01} ${cy - ri}Z`;
  }
  const ed = sd + span, lg = span > 180 ? 1 : 0;
  const [x1, y1] = polar(cx, cy, ro, sd), [x2, y2] = polar(cx, cy, ro, ed);
  const [x3, y3] = polar(cx, cy, ri, ed), [x4, y4] = polar(cx, cy, ri, sd);
  return `M${x1.toFixed(2)} ${y1.toFixed(2)}A${ro} ${ro} 0 ${lg} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}L${x3.toFixed(2)} ${y3.toFixed(2)}A${ri} ${ri} 0 ${lg} 0 ${x4.toFixed(2)} ${y4.toFixed(2)}Z`;
}

function h2d(h) {
  return (((h % 24) + 24) % 24) / 24 * 360;
}

export default function ClientComponent() {
  const [protoId, setProtoId] = useState("16:8");
  const [lastMeal, setLastMeal] = useState("");
  const [nowH, setNowH] = useState(0);

  useEffect(() => {
    const n = new Date();
    setLastMeal(`${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`);
    
    const updateTime = () => {
      const d = new Date();
      setNowH(d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600);
    };
    updateTime();
    const int = setInterval(updateTime, 1000);
    return () => clearInterval(int);
  }, []);

  const p = PROTOCOLS.find(x => x.id === protoId) || PROTOCOLS[0];
  
  let lm = 20; // default 8pm
  if (lastMeal) {
    const [h, m] = lastMeal.split(':').map(Number);
    lm = h + m / 60;
  }

  const fastEndH = lm + p.fast;
  const eatSH = lm - p.eat;
  const crossesMidnight = fastEndH > 24;

  let elapsed = nowH - lm;
  if (elapsed < 0) elapsed += 24;
  const inFast = elapsed >= 0 && elapsed < p.fast;
  const secsLeft = inFast ? Math.round((p.fast - elapsed) * 3600) : 0;

  // SVG parameters
  const cx = 150, cy = 150, ro = 140, ri = 104;
  const fsd = h2d(lm), fspan = (p.fast / 24) * 360;
  const esd = h2d(eatSH), espan = (p.eat / 24) * 360;
  const nd = h2d(nowH);
  const [nx, ny] = polar(cx, cy, (ro + ri) / 2, nd);

  const labels = [0, 3, 6, 9, 12, 15, 18, 21].map(h => {
    const deg = (h / 24) * 360;
    const [lx, ly] = polar(cx, cy, ri - 18, deg);
    const lbl = h === 0 ? '12a' : h === 12 ? '12p' : h < 12 ? `${h}a` : `${h - 12}p`;
    return (
      <text key={h} x={lx.toFixed(1)} y={ly.toFixed(1)} textAnchor="middle" dominantBaseline="middle" fill="var(--muted)" fontSize="9" fontFamily="inherit" fontWeight="600">
        {lbl}
      </text>
    );
  });

  const ticks = Array.from({ length: 24 }).map((_, i) => {
    const deg = (i / 24) * 360;
    const [x1, y1] = polar(cx, cy, ro, deg), [x2, y2] = polar(cx, cy, ro - 5, deg);
    return (
      <line key={i} x1={x1.toFixed(1)} y1={y1.toFixed(1)} x2={x2.toFixed(1)} y2={y2.toFixed(1)} stroke="var(--border)" strokeWidth="2" />
    );
  });

  const cVal = inFast ? fmtCD(secsLeft) : 'Open';
  const cColor = inFast ? '#6366f1' : '#22c55e';
  const cLabel = inFast ? 'until eating window' : 'eating window';

  return (
    <div className="ifc-wrap">
      <div className="ifc-proto-bar">
        {PROTOCOLS.map(proto => (
          <button 
            key={proto.id}
            className={`ifc-proto-btn ${protoId === proto.id ? 'active' : ''}`}
            onClick={() => setProtoId(proto.id)}
          >
            {proto.id}
            <div className="ifc-proto-tag">{proto.tag}</div>
          </button>
        ))}
      </div>

      <div className="ifc-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <div className="ifc-section-label">Last meal / start fast</div>
          <input 
            type="time" 
            className="ifc-time-input" 
            value={lastMeal} 
            onChange={e => setLastMeal(e.target.value)} 
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="ifc-section-label">Fast ends at</div>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#6366f1', marginTop: '4px' }}>
            {fmt12(fastEndH)}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', fontWeight: 600 }}>
            {crossesMidnight ? '(next day)' : ''}
          </div>
        </div>
      </div>

      <div className="ifc-clock-card">
        <svg viewBox="0 0 300 300" width="100%" style={{ maxWidth: '280px', display: 'block', margin: '0 auto' }}>
          <circle cx={cx} cy={cy} r={ro} fill="none" stroke="var(--bg)" strokeWidth={ro - ri} />
          <path d={arc(cx, cy, ro, ri, fsd, fspan)} fill="#6366f1" opacity=".85" />
          <path d={arc(cx, cy, ro, ri, esd, espan)} fill="#22c55e" opacity=".85" />
          {ticks}
          {labels}
          <circle cx={nx.toFixed(1)} cy={ny.toFixed(1)} r="9" fill="var(--text)" />
          <circle cx={nx.toFixed(1)} cy={ny.toFixed(1)} r="3.5" fill="var(--bg)" />
          <text x={cx} y={cy - 20} textAnchor="middle" fill="var(--muted)" fontSize="11" fontWeight="700" letterSpacing="0.05em" style={{ textTransform: 'uppercase' }}>{cLabel}</text>
          <text x={cx} y={cy + 8} textAnchor="middle" fill={cColor} fontSize={inFast ? 24 : 20} fontWeight="800" fontFamily="inherit" letterSpacing={inFast ? '1' : '0'}>{cVal}</text>
          <text x={cx} y={cy + 30} textAnchor="middle" fill={inFast ? '#6366f1' : '#22c55e'} fontSize="12" fontWeight="600" opacity=".8">{inFast ? `${p.fast}:00 protocol` : 'Enjoy your meal 🥗'}</text>
        </svg>

        <div className="ifc-legend">
          <div className="ifc-legend-item"><div className="ifc-dot" style={{ background: '#6366f1' }}></div>Fasting {p.fast}h</div>
          <div className="ifc-legend-item"><div className="ifc-dot" style={{ background: '#22c55e' }}></div>Eating {p.eat}h</div>
          <div className="ifc-legend-item"><div className="ifc-dot" style={{ borderRadius: '50%', background: 'var(--text)' }}></div>Now</div>
        </div>
      </div>

      <div className="ifc-grid2">
        <div className="ifc-card" style={{ marginBottom: 0 }}>
          <div className="ifc-section-label">Eating window</div>
          <div className="ifc-win-num" style={{ color: '#22c55e' }}>{fmt12(eatSH)}</div>
          <div className="ifc-win-sep">to</div>
          <div className="ifc-win-num" style={{ color: '#22c55e' }}>{fmt12(lm)}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '8px', fontWeight: 600 }}>{p.eat} hours</div>
        </div>
        <div className="ifc-card" style={{ marginBottom: 0 }}>
          <div className="ifc-section-label">Fasting window</div>
          <div className="ifc-win-num" style={{ color: '#6366f1' }}>{fmt12(lm)}</div>
          <div className="ifc-win-sep">to</div>
          <div className="ifc-win-num" style={{ color: '#6366f1' }}>{fmt12(fastEndH)}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '8px', fontWeight: 600 }}>{p.fast} hours</div>
        </div>
      </div>

      <div className="ifc-card" style={{ marginTop: '1rem', marginBottom: 0 }}>
        <div className="ifc-section-label" style={{ marginBottom: '12px' }}>Tips for {p.id}</div>
        <div>
          {(TIPS[p.id] || []).map((t, i) => (
             <div className="ifc-tip-row" key={i}>
              <span className="ifc-tip-arr">→</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
