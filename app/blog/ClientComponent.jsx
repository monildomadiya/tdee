"use client";
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const blogPosts = [
  {
    "slug": "ultimate-guide-tdee",
    "title": "The Ultimate Guide to Understanding Your TDEE",
    "excerpt": "Your Total Daily Energy Expenditure is the foundation of weight loss. Here is exactly how it works."
  },
  {
    "slug": "why-bmi-is-just-a-starting-point",
    "title": "Why BMI Is Just a Starting Point (And What to Measure Instead)",
    "excerpt": "Body Mass Index is a widely used health metric, but it has severe limitations. Learn why body fat percentage matters more."
  },
  {
    "slug": "how-to-count-macros-for-fat-loss",
    "title": "How to Count Macros for Fat Loss: A Beginner's Guide",
    "excerpt": "Calories dictate weight loss, but macros dictate body composition. Learn how to balance protein, carbs, and fat."
  },
  {
    "slug": "truth-about-calorie-deficits",
    "title": "The Truth About Calorie Deficits: How Low is Too Low?",
    "excerpt": "Starvation diets ruin metabolisms. Discover the science of setting a healthy, sustainable calorie deficit."
  },
  {
    "slug": "keto-diet-macros-explained",
    "title": "Keto Diet Macros: How to Stay in Ketosis",
    "excerpt": "The Ketogenic diet requires strict macronutrient adherence. Here is how to calculate and track your keto macros."
  },
  {
    "slug": "us-army-body-fat-standards",
    "title": "The US Army Body Fat Standards Explained",
    "excerpt": "How does the military measure fitness? A deep dive into AR 600-9 and the circumference tape test."
  },
  {
    "slug": "healthy-pregnancy-weight-gain",
    "title": "Healthy Weight Gain During Pregnancy: What to Expect",
    "excerpt": "Pregnancy weight gain is necessary and healthy. Learn the official IOM guidelines for your body type."
  },
  {
    "slug": "lean-body-mass-explained",
    "title": "Lean Body Mass vs. Body Weight: What's the Difference?",
    "excerpt": "Stop staring at the scale. Understanding your Lean Body Mass is the key to true body recomposition."
  },
  {
    "slug": "how-to-maintain-muscle-losing-fat",
    "title": "How to Maintain Muscle While Losing Fat",
    "excerpt": "Body recomposition is the holy grail of fitness. Here are the three non-negotiable rules to keep muscle while cutting."
  },
  {
    "slug": "hydration-and-weight-loss",
    "title": "Hydration and Weight Loss: Does Drinking Water Burn Calories?",
    "excerpt": "Water is the unsung hero of weight loss. Explore the metabolic benefits of staying properly hydrated."
  }
];

const blogContent = {
  "ultimate-guide-tdee": {
    "title": "The Ultimate Guide to Understanding Your TDEE",
    "excerpt": "Your Total Daily Energy Expenditure is the foundation of weight loss. Here is exactly how it works.",
    "content": "<p>If you have ever tried to lose weight, gain muscle, or simply maintain your current physique, you have likely heard the term <strong>TDEE</strong>. Your Total Daily Energy Expenditure is the single most important number in nutrition.</p>\n<h2>What is TDEE?</h2>\n<p>Simply put, TDEE is the total number of calories your body burns in a 24-hour period. It is composed of four distinct metabolic engines:</p>\n<ul>\n    <li><strong>Basal Metabolic Rate (BMR):</strong> The calories you burn just staying alive. This accounts for roughly 60-70% of your total daily burn.</li>\n    <li><strong>Non-Exercise Activity Thermogenesis (NEAT):</strong> The calories burned from subconscious movements—fidgeting, walking to the kitchen, typing.</li>\n    <li><strong>Thermic Effect of Food (TEF):</strong> The energy required to digest and process the food you eat. Protein requires the most energy to digest.</li>\n    <li><strong>Exercise Activity Thermogenesis (EAT):</strong> The calories burned during intentional workouts and sports.</li>\n</ul>\n<h2>Why Your TDEE Matters</h2>\n<p>Without knowing your TDEE, any diet is just guesswork. If your goal is fat loss, you must consume fewer calories than your TDEE. This creates a <a href=\"/calorie-deficit\">Calorie Deficit</a>. If your goal is muscle gain, you must eat slightly more than your TDEE.</p>\n<p>To find your exact baseline, use our free <a href=\"/tdee-calculator\">TDEE Calculator</a>. By recalculating every few weeks as your weight changes, you ensure your diet never stalls.</p>"
  },
  "why-bmi-is-just-a-starting-point": {
    "title": "Why BMI Is Just a Starting Point (And What to Measure Instead)",
    "excerpt": "Body Mass Index is a widely used health metric, but it has severe limitations. Learn why body fat percentage matters more.",
    "content": "<p>The <strong>Body Mass Index (BMI)</strong> was invented in the 1830s. Despite being nearly 200 years old, it remains the standard tool used by doctors worldwide to classify weight. However, relying solely on a <a href=\"/bmi-calculator\">BMI Calculator</a> can be misleading.</p>\n<h2>The Core Limitation of BMI</h2>\n<p>BMI only measures two things: height and weight. It is completely blind to <strong>body composition</strong>. A bodybuilder with 8% body fat and 100kg of pure muscle might have the exact same BMI as an office worker with 35% body fat.</p>\n<p>According to the BMI scale, both individuals are \"Obese.\" Obviously, their health risks are entirely different.</p>\n<h2>What You Should Measure Instead</h2>\n<p>While BMI is a helpful population-level screening tool, individuals should focus on metrics that distinguish between fat mass and fat-free mass:</p>\n<ul>\n    <li><strong>Body Fat Percentage:</strong> This is the true indicator of metabolic health. You can estimate yours using our <a href=\"/body-fat-calculator\">Body Fat Calculator</a>, which uses the highly accurate US Navy circumference method.</li>\n    <li><strong>Lean Body Mass (LBM):</strong> Your bones, organs, water, and muscle tissue. Tracking LBM ensures that when you lose weight, you are losing fat, not muscle. Check your LBM using our <a href=\"/lean-body-mass-calculator\">Lean Body Mass Calculator</a>.</li>\n    <li><strong>Waist-to-Hip Ratio:</strong> Central adiposity (belly fat) is a much stronger predictor of cardiovascular disease than overall weight.</li>\n</ul>\n<p>In conclusion, use BMI to see where you stand generally, but track your body fat and lean mass to measure true progress.</p>"
  },
  "how-to-count-macros-for-fat-loss": {
    "title": "How to Count Macros for Fat Loss: A Beginner's Guide",
    "excerpt": "Calories dictate weight loss, but macros dictate body composition. Learn how to balance protein, carbs, and fat.",
    "content": "<p>You have calculated your <a href=\"/tdee-calculator\">TDEE</a>, established a <a href=\"/calorie-deficit\">calorie deficit</a>, and now you are ready to lose weight. But what exactly should those calories consist of? This is where <strong>macronutrients</strong> come into play.</p>\n<h2>The Big Three Macros</h2>\n<p>Macronutrients are the structural components of food that provide energy:</p>\n<ul>\n    <li><strong>Protein (4 calories per gram):</strong> The building block of muscle. High protein intake is crucial during fat loss to prevent muscle wasting and increase satiety.</li>\n    <li><strong>Carbohydrates (4 calories per gram):</strong> Your body's preferred fuel source, especially for high-intensity workouts.</li>\n    <li><strong>Fat (9 calories per gram):</strong> Essential for hormone production and joint health.</li>\n</ul>\n<h2>Finding Your Optimal Split</h2>\n<p>There is no single \"magic\" macro ratio, but a great starting point for fat loss is a <strong>40/30/30 split</strong> (40% Protein, 30% Carbs, 30% Fat). This high-protein approach keeps you full and protects lean tissue while the body burns fat stores.</p>\n<p>You can effortlessly generate your daily gram targets using our <a href=\"/macro-calculator\">Macro Calculator</a>. Simply plug in your daily calorie goal, select your preferred diet style (Balanced, Low Carb, or Keto), and the calculator will provide your exact daily targets.</p>"
  },
  "truth-about-calorie-deficits": {
    "title": "The Truth About Calorie Deficits: How Low is Too Low?",
    "excerpt": "Starvation diets ruin metabolisms. Discover the science of setting a healthy, sustainable calorie deficit.",
    "content": "<p>It is a fundamental law of thermodynamics: to lose fat, you must consume fewer calories than your body burns. This is known as a <strong>calorie deficit</strong>. However, more is not always better.</p>\n<h2>The Danger of Extreme Deficits</h2>\n<p>When people want fast results, they often slash their calories drastically—sometimes eating less than 1,200 calories a day. This causes a cascade of negative physiological responses:</p>\n<ul>\n    <li><strong>Muscle Loss:</strong> The body will break down muscle tissue for energy.</li>\n    <li><strong>Metabolic Adaptation:</strong> Your body slows down its <a href=\"/tdee-calculator\">BMR</a> to survive on less energy.</li>\n    <li><strong>Hormonal Crash:</strong> Testosterone and thyroid hormones plummet, while the stress hormone cortisol skyrockets.</li>\n</ul>\n<h2>The Sweet Spot: 300 to 500 Calories</h2>\n<p>Scientific consensus suggests that a moderate deficit of <strong>300 to 500 calories per day</strong> is the optimal range for sustainable fat loss. This equates to about 0.5 to 1 pound of fat loss per week.</p>\n<p>To find your exact target without risking metabolic damage, use our <a href=\"/calorie-deficit\">Calorie Deficit Calculator</a>. It factors in your current metrics to generate a safe, mathematically sound timeline for your weight loss goals.</p>"
  },
  "keto-diet-macros-explained": {
    "title": "Keto Diet Macros: How to Stay in Ketosis",
    "excerpt": "The Ketogenic diet requires strict macronutrient adherence. Here is how to calculate and track your keto macros.",
    "content": "<p>The Ketogenic (Keto) diet is an extremely low-carbohydrate, high-fat diet that forces your body to burn fat for fuel rather than glucose. This metabolic state is called <strong>ketosis</strong>.</p>\n<h2>The Standard Keto Macro Split</h2>\n<p>Unlike traditional diets that balance macros evenly, Keto requires a highly specific ratio to prevent the body from utilizing carbohydrates:</p>\n<ul>\n    <li><strong>Fat:</strong> 70-75% of daily calories</li>\n    <li><strong>Protein:</strong> 20-25% of daily calories</li>\n    <li><strong>Carbohydrates:</strong> 5% of daily calories (usually strictly under 20-30g of <em>net carbs</em>)</li>\n</ul>\n<h2>Net Carbs vs. Total Carbs</h2>\n<p>When tracking for keto, fiber does not count toward your daily carb limit because the body cannot digest it. <strong>Net Carbs = Total Carbs - Fiber.</strong></p>\n<p>Because the math can get complicated, we built a dedicated tool to help you. Enter your details into our <a href=\"/keto-macro-calculator\">Keto Macro Calculator</a> to get your exact fat, protein, and net carb targets tailored to your specific <a href=\"/tdee-calculator\">TDEE</a>.</p>"
  },
  "us-army-body-fat-standards": {
    "title": "The US Army Body Fat Standards Explained",
    "excerpt": "How does the military measure fitness? A deep dive into AR 600-9 and the circumference tape test.",
    "content": "<p>The United States Military does not rely solely on weight to determine combat readiness. Under regulation <strong>AR 600-9</strong>, the Army utilizes a specialized tape test to estimate body fat percentage.</p>\n<h2>How the Tape Test Works</h2>\n<p>The Army circumference method requires measuring specific body parts depending on biological sex:</p>\n<ul>\n    <li><strong>Men:</strong> Neck and Abdomen (at the navel)</li>\n    <li><strong>Women:</strong> Neck, Waist (narrowest point), and Hips (widest point)</li>\n</ul>\n<p>These measurements, combined with height, are plugged into a complex logarithmic formula to determine body fat percentage. If a soldier exceeds the screening table weight limits, they must pass this tape test to remain in good standing.</p>\n<h2>Check Your Status</h2>\n<p>You do not have to do the complex math yourself. If you are preparing for military service or just want a highly validated estimate of your body composition, use our <a href=\"/army-body-fat-calculator\">Army Body Fat Calculator</a>. It instantly computes your percentage and compares it against the official age and gender standards.</p>"
  },
  "healthy-pregnancy-weight-gain": {
    "title": "Healthy Weight Gain During Pregnancy: What to Expect",
    "excerpt": "Pregnancy weight gain is necessary and healthy. Learn the official IOM guidelines for your body type.",
    "content": "<p>Weight gain during pregnancy is a natural, essential process that supports the growth of your baby. However, gaining too much or too little can pose risks. The <strong>Institute of Medicine (IOM)</strong> has established clear guidelines to help mothers track their progress.</p>\n<h2>It Is Based on Pre-Pregnancy BMI</h2>\n<p>Your recommended weight gain is directly tied to your <a href=\"/bmi-calculator\">Body Mass Index</a> before you became pregnant:</p>\n<ul>\n    <li><strong>Underweight (BMI < 18.5):</strong> Recommended gain of 28–40 lbs (12.5–18 kg).</li>\n    <li><strong>Normal Weight (BMI 18.5-24.9):</strong> Recommended gain of 25–35 lbs (11.5–16 kg).</li>\n    <li><strong>Overweight (BMI 25.0-29.9):</strong> Recommended gain of 15–25 lbs (7–11.5 kg).</li>\n    <li><strong>Obese (BMI > 30):</strong> Recommended gain of 11–20 lbs (5–9 kg).</li>\n</ul>\n<h2>Pacing the Gain</h2>\n<p>Weight is rarely gained linearly. During the first trimester, a gain of just 1-4 lbs is typical. The majority of weight is added during the second and third trimesters.</p>\n<p>To see exactly where your weight should be at any specific week of gestation, use our <a href=\"/pregnancy-weight-gain-calculator\">Pregnancy Weight Gain Calculator</a> to generate a personalized, week-by-week trajectory.</p>"
  },
  "lean-body-mass-explained": {
    "title": "Lean Body Mass vs. Body Weight: What's the Difference?",
    "excerpt": "Stop staring at the scale. Understanding your Lean Body Mass is the key to true body recomposition.",
    "content": "<p>When you step on a scale, the number staring back at you is your total body weight. But that number tells a very incomplete story. Your total weight is composed of two primary elements: Fat Mass and <strong>Lean Body Mass (LBM)</strong>.</p>\n<h2>What is Lean Body Mass?</h2>\n<p>Your LBM is everything in your body that is not fat. This includes:</p>\n<ul>\n    <li>Muscle tissue</li>\n    <li>Bones</li>\n    <li>Organs</li>\n    <li>Water</li>\n    <li>Skin</li>\n</ul>\n<h2>Why LBM Matters for Dieting</h2>\n<p>When you enter a <a href=\"/calorie-deficit\">Calorie Deficit</a>, your goal should be to lose fat, not weight. If you lose 10 pounds, but 5 pounds of it was muscle (LBM), your metabolism will slow down, making it harder to keep the weight off.</p>\n<p>By maximizing protein intake using a <a href=\"/macro-calculator\">Macro Calculator</a> and engaging in resistance training, you protect your LBM while burning fat. To track your fat-free mass, use our <a href=\"/lean-body-mass-calculator\">Lean Body Mass Calculator</a> to see how much of your weight is actually active, metabolic tissue.</p>"
  },
  "how-to-maintain-muscle-losing-fat": {
    "title": "How to Maintain Muscle While Losing Fat",
    "excerpt": "Body recomposition is the holy grail of fitness. Here are the three non-negotiable rules to keep muscle while cutting.",
    "content": "<p>Losing weight is easy—just eat less. But losing fat while maintaining (or even building) muscle requires precision. Here are the three fundamental rules of body recomposition.</p>\n<h2>Rule 1: A Conservative Deficit</h2>\n<p>Severe calorie restriction causes the body to panic and burn muscle for energy. Keep your deficit between 300-500 calories below your <a href=\"/tdee-calculator\">TDEE</a>. This signals the body to tap into fat stores without panicking.</p>\n<h2>Rule 2: High Protein Intake</h2>\n<p>Protein is the building block of muscle tissue. During a cut, your protein needs actually <em>increase</em> to prevent muscle breakdown. Aim for at least 1 gram of protein per pound of <a href=\"/ideal-weight\">Ideal Body Weight</a>.</p>\n<h2>Rule 3: Heavy Resistance Training</h2>\n<p>You must give your body a reason to keep the muscle. Lifting heavy weights provides a stimulus that tells your nervous system, \"We need this muscle tissue for survival.\"</p>\n<p>To perfectly align your diet with these rules, use our <a href=\"/macro-calculator\">Macro Calculator</a> and select the \"High Protein\" preset to generate your daily targets.</p>"
  },
  "hydration-and-weight-loss": {
    "title": "Hydration and Weight Loss: Does Drinking Water Burn Calories?",
    "excerpt": "Water is the unsung hero of weight loss. Explore the metabolic benefits of staying properly hydrated.",
    "content": "<p>We all know we should drink more water, but its role in fat loss is often underestimated. Proper hydration directly impacts your <a href=\"/tdee-calculator\">TDEE</a> and overall metabolic health.</p>\n<h2>Water Induced Thermogenesis</h2>\n<p>Studies have shown that drinking 500ml of water can temporarily boost your metabolic rate by up to 30% for about an hour. This is known as water-induced thermogenesis. The body expends energy to heat the cold water to body temperature.</p>\n<h2>Satiety and Calorie Control</h2>\n<p>The brain often confuses thirst with hunger. By staying hydrated, you prevent phantom hunger pangs, making it significantly easier to stick to your <a href=\"/calorie-deficit\">Calorie Deficit</a>.</p>\n<h2>How Much Should You Drink?</h2>\n<p>The \"8 glasses a day\" rule is outdated. Your water needs depend on your weight, activity level, and climate. For a personalized, scientifically backed daily target, try our free <a href=\"/water-intake-calculator\">Water Intake Calculator</a>.</p>"
  }
};

export const BlogIndex = () => {
  const allPosts = [...blogPosts];

  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      
      <h1>TDEE.TECH Blog</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>Master your metabolism with our deep-dive science guides and articles.</p>
      
      <div className="tool-grid">
        {allPosts.map(post => (
          <div key={post.slug} className="tool-card" style={{ display: 'flex', flexDirection: 'column' }}>
            {post.thumbUrl && (
              <div style={{ width: 'calc(100% + 3rem)', margin: '-1.5rem -1.5rem 1.5rem -1.5rem', height: '200px', background: 'var(--bg)', borderTopLeftRadius: 'var(--r)', borderTopRightRadius: 'var(--r)', overflow: 'hidden' }}>
                <img src={post.thumbUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            )}
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{post.title}</h3>
            <p style={{ fontSize: '.95rem', color: 'var(--text-2)', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block', textAlign: 'center', width: '100%' }}>Read Article</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export const BlogPost = ({ slug }) => {
  const post = blogContent[slug] || null;

  if (!post) return <main className="container" style={{ padding: '4rem 20px', textAlign: 'center' }}><h1>Article not found</h1><Link href="/blog" className="btn">Return to Blog</Link></main>;

  return (
    <main className="container" style={{ maxWidth: '800px', padding: '4rem 20px' }}>
      
      <Link href="/blog" style={{ color: 'var(--green)', display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600 }}>← Back to Blog</Link>
      
      {post.thumbUrl && (
        <img src={post.thumbUrl} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 'var(--r-lg)', marginBottom: '2rem', border: '1px solid var(--border)' }} />
      )}
      
      <h1 style={{ fontSize: '2.2rem', lineHeight: 1.3, marginBottom: '2rem' }}>{post.title}</h1>
      <article className="blog-article" dangerouslySetInnerHTML={{ __html: post.content }} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text)' }} />
    </main>
  );
};
