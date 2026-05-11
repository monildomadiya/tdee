"use client";
import React, { useState, useEffect } from 'react';
import './game.css';

const FOODS = [
  { emoji:"🍌", name:"Banana", detail:"1 medium (118g)", kcal:105 },
  { emoji:"🍳", name:"Fried egg", detail:"1 large, in butter", kcal:92 },
  { emoji:"🍕", name:"Pizza slice", detail:"1 slice cheese pizza (107g)", kcal:285 },
  { emoji:"🥑", name:"Avocado", detail:"Half an avocado (100g)", kcal:160 },
  { emoji:"🍎", name:"Apple", detail:"1 medium (182g)", kcal:95 },
  { emoji:"🍚", name:"White rice", detail:"1 cup, cooked (186g)", kcal:242 },
  { emoji:"🥚", name:"Hard-boiled egg", detail:"1 large", kcal:78 },
  { emoji:"🥐", name:"Croissant", detail:"1 medium (57g)", kcal:231 },
  { emoji:"🥜", name:"Peanut butter", detail:"2 tablespoons (32g)", kcal:188 },
  { emoji:"🍫", name:"Milk chocolate bar", detail:"1 bar (44g)", kcal:235 },
  { emoji:"🥦", name:"Broccoli", detail:"1 cup, raw (91g)", kcal:31 },
  { emoji:"🍗", name:"Chicken breast", detail:"100g, grilled", kcal:165 },
  { emoji:"🥛", name:"Whole milk", detail:"1 cup (244ml)", kcal:149 },
  { emoji:"🍩", name:"Glazed donut", detail:"1 medium (60g)", kcal:269 },
  { emoji:"🥔", name:"Baked potato", detail:"1 medium (173g)", kcal:161 },
  { emoji:"🧇", name:"Waffle", detail:"1 large, plain (75g)", kcal:218 },
  { emoji:"🫐", name:"Blueberries", detail:"1 cup (148g)", kcal:84 },
  { emoji:"🥩", name:"Ribeye steak", detail:"100g, cooked", kcal:291 },
  { emoji:"🍦", name:"Vanilla ice cream", detail:"½ cup (66g)", kcal:137 },
  { emoji:"🧀", name:"Cheddar cheese", detail:"1 slice (28g)", kcal:113 },
  { emoji:"🥗", name:"Caesar salad", detail:"1 cup with dressing (77g)", kcal:170 },
  { emoji:"🍟", name:"French fries", detail:"Medium serving, fast food (117g)", kcal:365 },
  { emoji:"🥜", name:"Almonds", detail:"1 oz / 23 nuts (28g)", kcal:164 },
  { emoji:"🍊", name:"Orange", detail:"1 medium (131g)", kcal:62 },
  { emoji:"🧁", name:"Cupcake", detail:"1 with frosting (90g)", kcal:340 },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ClientGame() {
  const [screen, setScreen] = useState('start'); // start, game, result, final
  const [currentFoods, setCurrentFoods] = useState([]);
  const [round, setRound] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [roundResults, setRoundResults] = useState([]);
  const [guess, setGuess] = useState(200);
  const [resultData, setResultData] = useState(null);

  const startGame = () => {
    const shuffled = shuffle(FOODS).slice(0, 5);
    setCurrentFoods(shuffled);
    setRound(0);
    setTotalScore(0);
    setRoundResults([]);
    setGuess(200);
    setScreen('game');
  };

  const submitGuess = () => {
    const f = currentFoods[round];
    const actual = f.kcal;
    const diff = Math.abs(guess - actual);
    const pctOff = diff / actual;
    
    let pts, emoji, title, color;
    if (pctOff <= 0.05) { pts=100; emoji="🎯"; title="Perfect!"; color="#16a34a"; }
    else if (pctOff <= 0.15) { pts=80; emoji="🔥"; title="Excellent!"; color="#16a34a"; }
    else if (pctOff <= 0.25) { pts=60; emoji="👍"; title="Nice!"; color="#2563eb"; }
    else if (pctOff <= 0.40) { pts=40; emoji="😅"; title="Getting there"; color="#d97706"; }
    else if (pctOff <= 0.60) { pts=20; emoji="🤔"; title="Off the mark"; color="#d97706"; }
    else { pts=5; emoji="😬"; title="Way off!"; color="#dc2626"; }

    const accuracy = Math.max(0, Math.round((1 - pctOff) * 100));

    const newScore = totalScore + pts;
    setTotalScore(newScore);
    
    const rData = { ...f, guess, pts, diff, emoji, title, color, accuracy };
    setResultData(rData);
    setRoundResults([...roundResults, rData]);
    setScreen('result');
  };

  const nextRound = () => {
    if (round + 1 >= 5) {
      setScreen('final');
    } else {
      setRound(round + 1);
      setGuess(200);
      setScreen('game');
    }
  };

  if (screen === 'start') {
    return (
      <div className="game-wrap">
        <div className="start-card">
          <span className="big-emoji">🍽️</span>
          <h1 className="game-title">Guess the Calories</h1>
          <p className="game-sub">Can you guess how many calories are in each food? 5 rounds — the closer your guess, the more points you score.</p>
          <button className="submit-btn" onClick={startGame}>Start game</button>
        </div>
      </div>
    );
  }

  if (screen === 'game') {
    const f = currentFoods[round];
    return (
      <div className="game-wrap">
        <div className="hud">
          <div><div className="hud-label">Round</div><div className="hud-val">{round + 1} of 5</div></div>
          <div style={{ textAlign: 'right' }}><div className="hud-label">Score</div><div className="hud-val">{totalScore} pts</div></div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(round / 5) * 100}%` }}></div>
        </div>

        <div className="food-card">
          <span className="food-emoji">{f?.emoji}</span>
          <div className="food-name">{f?.name}</div>
          <div className="food-detail">{f?.detail}</div>
        </div>

        <div className="input-section">
          <span className="input-label">Drag the slider to set your calorie guess:</span>
          <div className="slider-row">
            <input 
              type="range" 
              min="0" max="800" step="5" 
              value={guess} 
              onChange={(e) => setGuess(parseInt(e.target.value))} 
            />
            <div className="cal-display">{guess} <span>kcal</span></div>
          </div>
          <button className="submit-btn" onClick={submitGuess}>Submit guess</button>
        </div>
      </div>
    );
  }

  if (screen === 'result' && resultData) {
    const r = resultData;
    const diffStr = r.guess - r.kcal === 0 ? '0' : (r.guess > r.kcal ? '+' : '-') + r.diff;

    return (
      <div className="game-wrap">
        <div className="result-card">
          <span className="result-emoji">{r.emoji}</span>
          <div className="result-title">{r.title}</div>
          <div className="result-sub">You guessed {r.guess} kcal for {r.name}</div>
          
          <div className="cal-row">
            <div className="cal-col">
              <div className="cal-num">{r.guess}</div>
              <div className="cal-lbl">Your guess</div>
            </div>
            <div className="cal-col">
              <div className="cal-num">{r.kcal}</div>
              <div className="cal-lbl">Actual kcal</div>
            </div>
            <div className="cal-col">
              <div className="cal-num" style={{ color: r.color }}>{diffStr}</div>
              <div className="cal-lbl">Difference</div>
            </div>
          </div>

          <div style={{ margin: '12px 0 4px' }}>
            <div className="accuracy-bar-wrap">
              <div className="accuracy-bar" style={{ width: `${r.accuracy}%`, background: r.color }}></div>
            </div>
          </div>
          <div className="accuracy-txt">{r.accuracy}% accuracy</div>
          
          <div className="pts-badge" style={{ background: `${r.color}15`, color: r.color, borderColor: `${r.color}30` }}>
            +{r.pts} pts
          </div>
        </div>
        <button className="next-btn" onClick={nextRound}>
          {round === 4 ? 'See final score →' : 'Next food →'}
        </button>
      </div>
    );
  }

  if (screen === 'final') {
    const avgAcc = Math.round(roundResults.reduce((s, r) => s + Math.max(0, 100 - Math.round((Math.abs(r.guess - r.kcal) / r.kcal) * 100)), 0) / 5);
    const bestPts = Math.max(...roundResults.map(r => r.pts));
    
    let grade, gradeEmoji;
    if (totalScore >= 450) { grade = "You're a calorie genius! 🧠"; gradeEmoji = "🏆"; }
    else if (totalScore >= 350) { grade = "Impressive nutritional knowledge!"; gradeEmoji = "🥇"; }
    else if (totalScore >= 250) { grade = "Not bad — keep practicing!"; gradeEmoji = "🥈"; }
    else if (totalScore >= 150) { grade = "Room to grow — try again!"; gradeEmoji = "🥉"; }
    else { grade = "Time to brush up on nutrition!"; gradeEmoji = "📚"; }

    return (
      <div className="game-wrap">
        <div className="start-card" style={{ marginBottom: '1.25rem' }}>
          <span className="big-emoji">{gradeEmoji}</span>
          <div className="game-title">Game over!</div>
          <div className="final-score-num">{totalScore}</div>
          <div className="grade-text">points</div>
        </div>

        <div className="score-cards">
          <div className="metric-card">
            <div className="metric-num">5/5</div>
            <div className="metric-lbl">Rounds</div>
          </div>
          <div className="metric-card">
            <div className="metric-num">{avgAcc}%</div>
            <div className="metric-lbl">Avg Acc</div>
          </div>
          <div className="metric-card">
            <div className="metric-num">{bestPts}</div>
            <div className="metric-lbl">Best Pts</div>
          </div>
        </div>

        <div className="round-list">
          {roundResults.map((r, i) => {
            const diff = r.guess - r.kcal;
            const diffStr = diff === 0 ? '0' : (diff > 0 ? `+${diff}` : `${diff}`);
            return (
              <div className="round-item" key={i}>
                <span className="round-emoji">{r.emoji}</span>
                <span className="round-name">{r.name}</span>
                <span className="round-cals">{r.kcal} kcal ({diffStr})</span>
                <span className="round-pts" style={{ color: r.color }}>+{r.pts} pts</span>
              </div>
            );
          })}
        </div>

        <button className="submit-btn" onClick={startGame} style={{ marginBottom: '1rem' }}>Play again</button>
        <div className="share-hint" style={{ textAlign: 'center' }}>Challenge a friend — see if they can beat your score!</div>
      </div>
    );
  }

  return null;
}
