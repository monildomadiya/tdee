"use client";
import React from 'react';
import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

/* Reusable country page template */
const CountryPage = ({ country, code, unit, titleFocus, desc, intro, tips, slug, cities, faqs }) => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `TDEE Calculator ${country}`,
    "operatingSystem": "Web",
    "applicationCategory": "HealthAndFitnessApplication",
    "description": desc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs ? faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    })) : []
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="page-hero">
        <div className="container">
          <div className="badge badge-blue" style={{ marginBottom:'.75rem' }}>🌍 {country}</div>
          <h1>TDEE Calculator {country}</h1>
          <p>{desc}</p>
          {intro && <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7', textAlign: 'left', background: 'var(--card)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--r-lg)' }}>{intro}</p>}
        </div>
      </div>
      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
          <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', padding:'3rem 2rem', marginBottom:'3rem', textAlign:'center', boxShadow:'var(--shadow-sm)' }}>
          <p style={{ marginBottom:'1.5rem', fontSize:'1.2rem', fontWeight:500, color:'var(--text)' }}>Use our full, premium calculator — seamlessly supports {unit}.</p>
          <Link href="/tdee-calculator" className="btn" style={{ width:'auto', padding:'16px 40px', display:'inline-flex', fontSize:'1.15rem' }}>
            🔥 Open TDEE Calculator
          </Link>
        </div>

        <article className="article-section">
          <h2>TDEE Calculator for {country} Users</h2>
          <p>Our TDEE (Total Daily Energy Expenditure) calculator is fully optimized for people residing in {country}. It natively supports {unit} and uses the medically validated <strong>Mifflin-St Jeor formula</strong> to provide an extremely accurate estimation of your daily caloric needs for weight loss, maintenance, or muscle gain.</p>
          
          {cities && (
            <p>Whether you are training in <strong>{cities.join(', ')}</strong> or anywhere else in {country}, understanding your specific metabolic rate is the most critical step in achieving your fitness goals.</p>
          )}

          <h2>{country}-Specific Fitness & Nutrition Tips</h2>
          <ul style={{ marginBottom: '2rem' }}>
            {tips.map((t,i) => <li key={i} style={{ marginBottom: '.5rem' }}>{t}</li>)}
          </ul>

          <h2>How to Use This Tool</h2>
          <ol style={{ marginBottom: '2rem' }}>
            <li>Click the button above to launch the full calculator interface.</li>
            <li>Select your preferred unit system (<strong>{unit.includes('lb') ? 'Imperial' : 'Metric'}</strong>).</li>
            <li>Enter your age, biological gender, exact height, current weight, and weekly activity level.</li>
            <li>Instantly receive your precise TDEE, BMR, BMI, and a scientifically balanced macronutrient split.</li>
          </ol>

          {faqs && faqs.length > 0 && (
            <>
              <h2>Frequently Asked Questions ({country})</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ background: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '.5rem', color: 'var(--blue)' }}>{faq.q}</h3>
                    <p style={{ margin: 0, fontSize: '.95rem' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <h2>Explore Related Health Tools</h2>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginTop:'1rem' }}>
            {[['/bmi-calculator','BMI Calculator'],['/macro-calculator','Macro Calculator'],['/calorie-deficit','Calorie Deficit'],['/ideal-weight','Ideal Weight']].map(([to,l])=>(
              <Link key={to} href={to} className="btn outline" style={{ width:'auto', padding:'9px 18px', fontSize:'.88rem' }}>{l}</Link>
            ))}
          </div>
        </article>
        </div>
        <Sidebar />
      </main>
    </>
  );
};

/* ── Country Pages ── */
export const TDEEUs = () => <CountryPage
  country="United States" code="us" unit="lbs and inches"
  titleFocus="Calculate Maintenance Calories in Pounds & Inches"
  desc="Free TDEE calculator for US users. Calculate your maintenance calories, BMR, BMI, and macros using pounds and inches. Powered by the Mifflin-St Jeor formula."
  cities={['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']}
  faqs={[
    { q: "Does this calculator use American units?", a: "Yes, our tool natively supports pounds (lbs) and feet/inches (ft/in), which is the standard across the United States." },
    { q: "Is the Mifflin-St Jeor formula accurate for Americans?", a: "Absolutely. The Mifflin-St Jeor equation is recommended by the American Dietetic Association as the most reliable formula for estimating resting metabolic rate in adults." },
    { q: "How many calories should an American eat per day?", a: "The average American needs between 1,600–3,000 calories per day depending on age, gender, weight, height, and activity level. Your personal TDEE is far more accurate than national averages." },
    { q: "What is a good TDEE for weight loss in the US?", a: "For safe weight loss, eat 300–500 calories below your TDEE daily. This creates a deficit of 2,100–3,500 calories per week, resulting in roughly 0.5–1 lb of fat loss per week." },
  ]}
  tips={[
    'US dietary guidelines recommend 1,600–2,400 cal/day for women and 2,000–3,000 for men, but these are broad averages — your TDEE is specific to you.',
    'The average American consumes ~3,600 calories/day, well above most TDEEs. Knowing your number prevents unintentional overeating.',
    'Popular US diets (keto, intermittent fasting) still work within your TDEE — they just shift how you reach your calorie target.',
    'Use lbs for weight and ft/in for height — our calculator supports Imperial units natively.',
    'American fast food is calorie-dense. A Big Mac meal alone can be 1,100 kcal — nearly half a sedentary adult\'s TDEE.',
  ]}

  intro="When tracking fitness and nutritional goals in the United States, understanding your Total Daily Energy Expenditure (TDEE) is absolutely essential. The standard American diet is often highly calorie-dense, and relying on broad national averages can lead to unintentional weight gain. Our US-focused TDEE calculator natively supports imperial measurements, allowing you to seamlessly enter your weight in pounds and height in feet and inches without complicated conversions. By utilizing the medically validated Mifflin-St Jeor formula, this tool provides you with a highly accurate metabolic baseline. Whether you are following popular American dietary trends like keto, intermittent fasting, or a standard macro-tracking approach, establishing an exact caloric target tailored to your unique age, weight, and daily activity level is the most critical first step toward sustainable weight management and overall metabolic health." />;

export const TDEEUk = () => <CountryPage
  country="United Kingdom" code="uk" unit="metric and imperial (kg, stone, lbs)"
  titleFocus="Calculate Daily Calories, BMR & Macros"
  desc="Free TDEE calculator for UK users. Works in metric and imperial units including stone. Get your maintenance calories, weight loss target, and macro split."
  cities={['London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh']}
  faqs={[
    { q: "Can I enter my weight in stones?", a: "While the primary interface defaults to kg or lbs, you can easily convert stones to pounds (1 stone = 14 lbs) to use the imperial setting." },
    { q: "Does the NHS recommend tracking TDEE?", a: "The NHS generally recommends eating a balanced diet and understanding your caloric baseline. Knowing your TDEE helps you achieve the safe 500-600 calorie deficit they recommend for weight loss." },
    { q: "How many calories should I eat to lose weight in the UK?", a: "The NHS recommends a deficit of 500–600 calories per day below your TDEE for safe, steady weight loss of about 0.5kg per week." },
    { q: "What is the average TDEE for a UK adult?", a: "The average UK adult TDEE is approximately 2,000 kcal/day for women and 2,500 kcal/day for men, though individual values vary widely based on body size and activity." },
  ]}
  tips={[
    'UK adults consume an average of 2,000–2,500 kcal/day. Your personal TDEE may be significantly different based on activity.',
    'NHS guidelines recommend a 500–600 cal/day deficit for weight loss — which aligns with our "Weight Loss" result.',
    'Our calculator supports kg/cm for metric UK users and lbs for those who prefer imperial.',
    'UK gym culture is growing rapidly — use the "Active" or "Very Active" setting if you train 4+ days a week.',
    'British diets often include high-calorie pub meals. Understanding your TDEE helps make smarter choices when dining out.',
  ]}

  intro="For residents of the United Kingdom, achieving healthy weight management requires a precise understanding of your Total Daily Energy Expenditure (TDEE). While NHS guidelines provide general recommendations for daily caloric intake and suggest a 500 to 600 calorie deficit for safe weight loss, these broad averages do not account for your specific body composition or lifestyle. Our UK-focused TDEE calculator bridges this gap by offering a fully localized experience that seamlessly supports both metric measurements and the traditional imperial stone and pounds. By leveraging the scientifically validated Mifflin-St Jeor equation, this tool calculates your exact maintenance calories and provides tailored macronutrient splits. Whether you are navigating the calorie-dense options of traditional British cuisine or adhering to a strict gym routine, knowing your exact TDEE ensures your nutritional approach is based on concrete science rather than guesswork." />;

export const TDEECanada = () => <CountryPage
  country="Canada" code="canada" unit="metric (kg/cm) and imperial (lbs/ft)"
  titleFocus="Daily Calorie & Macro Calculator"
  desc="Free TDEE calculator for Canadians. Calculate your daily calories in kg or lbs. Get BMR, BMI, maintenance calories, and macros for your fitness goal."
  cities={['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']}
  faqs={[
    { q: "Should I use Metric or Imperial?", a: "Canada is officially metric, so nutrition labels use grams and milliliters. However, many Canadians still weigh themselves in pounds. Our tool supports both seamlessly." },
    { q: "How do winter activities affect my TDEE?", a: "Cold-weather sports like hockey, snowboarding, and skiing burn significant calories. If you are active during Canadian winters, ensure you select an 'Active' multiplier." },
    { q: "How many calories do Canadians need per day?", a: "Health Canada's reference values suggest 1,900–2,100 kcal/day for women and 2,300–2,600 for men, though your exact TDEE depends on your weight, height, age, and activity level." },
    { q: "What is the best diet for Canadians?", a: "Canada's Food Guide recommends a predominantly plant-based diet rich in vegetables, whole grains, and proteins. Your TDEE tells you exactly how many calories to eat — the guide tells you what to fill them with." },
  ]}
  tips={[
    'Canada officially uses the metric system — select kg/cm for consistent results aligned with Canadian nutrition labels.',
    'Health Canada recommends active Canadians aim for 150+ minutes of moderate activity weekly — factor this into your activity level.',
    'Canadian nutrition labels show calories per 100g; knowing your TDEE helps you understand these in context.',
    'Popular Canadian winter activities (hockey, skiing) are high-energy — choose "Active" or "Very Active" if you participate regularly.',
    'Maple syrup and poutine are calorie-dense staples — tracking your intake against your TDEE keeps you on track.',
  ]}

  intro="Navigating nutritional goals in Canada is vastly simplified when you understand your Total Daily Energy Expenditure (TDEE). Health Canada provides excellent generalized dietary guidelines, emphasizing whole foods and active living, but individual caloric needs vary drastically based on your unique body metrics and activity level. Our Canada-optimized TDEE calculator is designed to seamlessly support both the official metric system (kilograms and centimeters) used on Canadian nutrition labels, as well as the imperial system (pounds) commonly used for personal body weight. Whether you are extremely active during the winter months participating in hockey and skiing, or maintaining a moderate exercise routine, this tool uses the clinical-grade Mifflin-St Jeor equation to pinpoint your exact caloric baseline. This level of precision is fundamental for structuring a safe, effective calorie deficit for fat loss or a surplus for muscle gain." />;

export const TDEEAustralia = () => <CountryPage
  country="Australia" code="australia" unit="metric (kg/cm)"
  titleFocus="Maintenance Calories & Macros"
  desc="Free TDEE calculator for Australians. Get your maintenance calories, BMR, BMI, and macro split in metric units. Perfect for Australians tracking fitness goals."
  cities={['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']}
  faqs={[
    { q: "Is the tool optimized for Australian dietary standards?", a: "Yes. By utilizing your TDEE in metric measurements (kg/cm), it flawlessly aligns with the Australian Dietary Guidelines and local nutritional labels." },
    { q: "How does heat impact my daily calories?", a: "While training in hot Australian climates increases heart rate and sweat loss, it only slightly elevates caloric burn. Still, stay highly hydrated and track your macros consistently." },
    { q: "How many calories should Australians eat per day?", a: "Australian Dietary Guidelines suggest approximately 8,700 kJ (2,080 kcal) per day for women and 10,900 kJ (2,600 kcal) for men. Your personal TDEE is always more accurate." },
    { q: "Is TDEE calculation accurate for Indigenous Australians?", a: "The Mifflin-St Jeor formula is validated across diverse populations. For the most accurate results, ensure your age, height, weight, and activity level are entered precisely." },
  ]}
  tips={[
    'Australia uses the metric system — use kg and cm for the most accurate results with Australian nutrition labels.',
    'The Australian Dietary Guidelines recommend 2,080 kcal/day for women and 2,750 for men on average — your personal TDEE may differ.',
    'Australians have high outdoor activity rates. If you surf, hike, or play sport regularly, choose "Active" or above.',
    'Heat affects energy expenditure — Australians in hot climates may need to hydrate more carefully when tracking calories.',
    'Australia has high rates of weekend sport participation — factor in your Saturday cricket or footy match in your activity level.',
  ]}

  intro="In Australia, a nation characterized by an incredibly active, outdoor-centric lifestyle, accurately calculating your Total Daily Energy Expenditure (TDEE) is crucial for optimal health and athletic performance. The Australian Dietary Guidelines suggest average daily intakes, but the significant variations in daily activity—from regular surfing and hiking to intense gym sessions—demand a personalized approach to nutrition. Our Australia-specific TDEE calculator uses the globally validated Mifflin-St Jeor formula and natively supports the metric system (kilograms and centimeters), ensuring perfect alignment with local food packaging and nutritional labels. By determining your precise maintenance calories, you can confidently navigate Australia's robust food culture while making informed decisions about portion sizes and macronutrient distribution. This targeted approach is the cornerstone of sustainable weight loss, muscle development, and long-term metabolic health." />;

export const TDEEUA = () => <CountryPage
  country="UAE" code="uae" unit="metric (kg/cm)"
  titleFocus="Daily Calories, BMR & Macro Calculator"
  desc="Free TDEE calculator for UAE users and expats. Calculate daily calories, BMR, and macros in metric units. Ideal for fitness goals in Dubai, Abu Dhabi and across the UAE."
  cities={['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah']}
  faqs={[
    { q: "How does Ramadan affect my TDEE?", a: "During Ramadan, your eating window shrinks to suhoor and iftar. Your total daily TDEE stays the same — distribute your calories across these two meals to maintain your goals." },
    { q: "Is this calculator suitable for expats in the UAE?", a: "Absolutely. The Mifflin-St Jeor formula used in our calculator is validated across all ethnicities and body types, making it ideal for the diverse expat population in the UAE." },
    { q: "How does the UAE climate affect calorie needs?", a: "Extreme heat in UAE summers discourages outdoor activity, which can lower your daily calorie burn. Adjust your activity level to 'Lightly Active' or 'Sedentary' if you spend most time indoors." },
    { q: "What is a healthy weight for UAE residents?", a: "A healthy BMI is 18.5–24.9 regardless of nationality. Use our BMI Calculator alongside TDEE for a complete picture of your health status." },
  ]}
  tips={[
    'The UAE has a high expat population — our calculator works for all ethnicities and body types using globally validated formulas.',
    'Hot UAE summers reduce outdoor activity — choose your activity level based on actual movement, not just gym sessions.',
    'Ramadan affects eating patterns significantly. During Ramadan, use your TDEE as a total daily calorie target and distribute meals to suhoor and iftar.',
    'UAE gyms and fitness culture are thriving. If you train 4–5 days/week, use the "Active" activity level.',
    'UAE food culture blends Middle Eastern and international cuisines — track caloric-dense staples like biryani, shawarma, and luqaimat mindfully.',
  ]}

  intro="In the United Arab Emirates, where extreme summer temperatures often shift physical activity indoors and cultural practices like Ramadan significantly alter eating patterns, understanding your Total Daily Energy Expenditure (TDEE) is vital. The UAE boasts a incredibly diverse expat population and a thriving fitness culture, meaning generalized dietary advice often falls short of individual needs. Our UAE-focused TDEE calculator uses the globally validated Mifflin-St Jeor equation and operates seamlessly in metric units (kilograms and centimeters). By identifying your precise maintenance calories, you can accurately plan your meals—whether you are structuring suhoor and iftar during fasting months, or balancing the rich, calorie-dense foods common in Middle Eastern and international cuisines. This scientific approach ensures your nutrition aligns perfectly with your specific lifestyle, body composition, and long-term health objectives." />;

export const TDEEFrance = () => <CountryPage
  country="France" code="france" unit="metric (kg/cm)"
  titleFocus="Calculateur TDEE France – Calories Journalières"
  desc="Free TDEE calculator for France. Calculate your daily calories, BMR, BMI, and macros in metric units. Perfect for French users tracking their caloric needs and fitness goals."
  cities={['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Nice']}
  faqs={[
    { q: "How many calories does the average French person need?", a: "The average French adult needs approximately 1,800–2,200 kcal/day for women and 2,200–2,700 kcal/day for men. However, your exact TDEE depends on your weight, height, age, and activity level." },
    { q: "Is the French diet good for weight loss?", a: "The traditional French diet is rich in whole foods, healthy fats, and moderate portions — which can naturally align with a slight calorie deficit. Use your TDEE to quantify exactly how much to eat." },
    { q: "What units does this calculator use for French users?", a: "France uses the metric system. Our calculator uses kilograms (kg) for weight and centimeters (cm) for height, fully aligned with French standards." },
    { q: "How does French cuisine affect caloric intake?", a: "French cuisine can be rich in butter, cheese, and wine — all calorically dense. Knowing your TDEE helps you enjoy French food mindfully without exceeding your daily target." },
  ]}
  tips={[
    'France uses the metric system — enter your weight in kg and height in cm for precise results.',
    'The traditional French diet emphasizes quality over quantity. Focus on your TDEE to maintain the balance that French cuisine naturally encourages.',
    'French adults walking through cities like Paris or Lyon accumulate significant non-exercise activity — factor this into your activity level.',
    'Wine and cheese are cultural staples but calorie-dense. A glass of Bordeaux contains ~120 kcal; track these against your daily TDEE.',
    'French public health guidelines recommend at least 30 minutes of moderate exercise daily — elevate your activity multiplier accordingly.',
  ]}

  intro="In France, where the culinary culture famously emphasizes high-quality ingredients, rich flavors, and moderate portion sizes, knowing your Total Daily Energy Expenditure (TDEE) is an incredibly powerful tool for maintaining a healthy lifestyle. While the traditional French diet naturally supports metabolic health, individual caloric needs can vary wildly depending on your specific daily activity, age, and body composition. Our France-optimized TDEE calculator uses the scientifically validated Mifflin-St Jeor formula and natively supports the metric system (kilograms and centimeters) for perfect consistency with European nutritional standards. By establishing your exact caloric baseline, you can continue to enjoy culturally significant, calorie-dense foods like artisan cheeses and wine in moderation, without compromising your fitness goals. This precise, data-driven approach is essential for anyone looking to achieve sustainable weight loss or muscle maintenance." />;

export const TDEEMexico = () => <CountryPage
  country="Mexico" code="mexico" unit="metric (kg/cm)"
  titleFocus="Calculadora TDEE México – Calorías Diarias"
  desc="Free TDEE calculator for Mexico. Calculate your daily calories, BMR, and macros in metric units. Ideal for Mexicans managing weight loss, muscle gain, or healthy eating habits."
  cities={['Mexico City', 'Guadalajara', 'Monterrey', 'Tijuana', 'Puebla', 'Cancún']}
  faqs={[
    { q: "How many calories should a Mexican adult eat per day?", a: "Mexican dietary guidelines suggest 1,800–2,200 kcal/day for women and 2,200–2,800 for men on average. Your personal TDEE calculated from your exact stats is always more accurate." },
    { q: "Is the Mexican diet healthy?", a: "Traditional Mexican food includes beans, corn, vegetables, and lean meats — all nutritious foods. The challenge is calorie-dense preparations. Your TDEE helps you enjoy traditional meals while staying in balance." },
    { q: "Does altitude in Mexico City affect my TDEE?", a: "Yes, living at high altitude (Mexico City is at 2,240m) slightly elevates your basal metabolic rate due to lower oxygen levels. The effect is small but real — select 'Lightly Active' at minimum if you live there." },
    { q: "What is a healthy weight for Mexicans?", a: "A BMI of 18.5–24.9 is considered healthy globally. Due to genetic differences, some health organizations suggest a lower BMI threshold for metabolic risk in Latin American populations." },
  ]}
  tips={[
    'Mexico uses the metric system — use kg and cm for consistent results with Mexican nutrition labels.',
    'Traditional Mexican meals like beans, tortillas, and nopales are nutritious and fiber-rich — great for staying within your TDEE.',
    'Mexico City\'s high altitude slightly elevates your metabolic rate — account for this when choosing your activity multiplier.',
    'Aguas frescas, horchata, and sodas are very popular but calorie-dense drinks. Track liquid calories against your TDEE.',
    'Salsa-based dishes and salsas contain minimal calories — use them generously as low-calorie flavor additions.',
  ]}

  intro="For users in Mexico, determining your precise Total Daily Energy Expenditure (TDEE) is a critical step toward achieving long-term health and fitness goals. Traditional Mexican cuisine is rich in nutrient-dense ingredients like beans, corn, and lean proteins, but many popular preparations and beverages can be unexpectedly high in calories. Our Mexico-optimized TDEE calculator utilizes the medically validated Mifflin-St Jeor formula and natively supports the metric system (kilograms and centimeters), ensuring your results align perfectly with local nutritional labeling. Additionally, this tool helps you account for environmental factors, such as the slightly elevated metabolic rates experienced by those living at high altitudes in cities like Mexico City. By identifying your exact daily caloric needs, you can enjoy the vibrant flavors of Mexican food while effectively managing your weight through a targeted, science-backed nutritional strategy." />;

export const TDEEBrazil = () => <CountryPage
  country="Brazil" code="brazil" unit="metric (kg/cm)"
  titleFocus="Calculadora TDEE Brasil – Calorias Diárias"
  desc="Free TDEE calculator for Brazil. Calculate your daily calories, BMR, BMI, and macros in metric. Perfect for Brazilians tracking their fitness, weight loss, or muscle building goals."
  cities={['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Curitiba']}
  faqs={[
    { q: "How many calories do Brazilians need per day?", a: "Brazilian dietary guidelines suggest approximately 2,000 kcal/day as a reference. Your personal TDEE will vary significantly based on your age, weight, height, gender, and physical activity level." },
    { q: "Does Brazilian fitness culture affect TDEE?", a: "Brazil has a strong fitness culture, particularly in cities like Rio de Janeiro. If you train regularly for beach season, your TDEE will be significantly higher than a sedentary baseline." },
    { q: "Is the açaí bowl good for a calorie deficit?", a: "Plain açaí is nutritious, but common açaí bowls with granola, banana, and honey can contain 500–900 kcal. Track them against your TDEE to keep your deficit on track." },
    { q: "What are the best fitness calculators for Brazilians?", a: "Start with our TDEE Calculator for your daily calorie target, then use the Macro Calculator for your protein, carb, and fat split, and the BMI Calculator to assess your body composition." },
  ]}
  tips={[
    'Brazil uses the metric system — enter weight in kg and height in cm for accurate results.',
    'Brazilian fitness culture is strong — if you train at Academia (gym) regularly, select "Active" or "Very Active".',
    'Feijão (black beans) and arroz (rice) are staples that provide excellent protein and complex carbs — well-suited to any TDEE diet.',
    'Futebol (soccer) burns 400–700 kcal per hour. Include your Sunday jogo in your weekly activity multiplier.',
    'Açaí bowls are popular but often very calorie-dense — track the full portion, including toppings, against your daily TDEE.',
  ]}

  intro="Brazil's incredibly strong fitness culture and vibrant, active lifestyle make understanding your Total Daily Energy Expenditure (TDEE) an essential component of any health journey. While traditional Brazilian staples like rice and beans provide excellent foundational nutrition, the widespread popularity of calorie-dense treats like fully loaded açaí bowls requires careful dietary management. Our Brazil-focused TDEE calculator is perfectly adapted for the metric system, allowing you to input kilograms and centimeters for accurate, localized results. Utilizing the highly respected Mifflin-St Jeor equation, this tool calculates your exact daily maintenance calories, factoring in your specific age, weight, and activity level—from intense gym sessions to weekend football matches. This precise calculation empowers you to navigate Brazil's dynamic food culture while maintaining a structured, science-backed approach to fat loss, muscle gain, or healthy weight maintenance." />;

export const TDEESouthAfrica = () => <CountryPage
  country="South Africa" code="south-africa" unit="metric (kg/cm)"
  titleFocus="Daily Calories & Macros – South Africa"
  desc="Free TDEE calculator for South Africa. Calculate your daily calorie needs, BMR, BMI, and macros in metric units. Trusted by South African fitness and nutrition enthusiasts."
  cities={['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein']}
  faqs={[
    { q: "How many calories should a South African eat per day?", a: "The South African Food-Based Dietary Guidelines don't prescribe a single calorie amount. Your personal TDEE — based on your height, weight, age, gender, and activity level — is the most accurate reference." },
    { q: "How does braai culture affect my caloric intake?", a: "A typical braai can include boerewors, ribs, and steak — all high in protein and fat. A full braai meal can easily reach 1,000–2,000 kcal. Tracking against your TDEE keeps you informed." },
    { q: "Is this calculator free for South African users?", a: "Yes, 100% free with no registration required. Our TDEE calculator works on all devices and is accessible to South African users whether you're in Johannesburg, Cape Town, or a rural area." },
    { q: "What is the obesity rate in South Africa and how does TDEE help?", a: "South Africa has one of the highest obesity rates in Africa. Understanding your TDEE and eating at or slightly below it is one of the most evidence-based approaches to managing and preventing obesity." },
  ]}
  tips={[
    'South Africa uses the metric system — enter weight in kg and height in cm.',
    'Braai (BBQ) culture is central to South African life. Lean cuts like chicken and fish braai well and are lower in calories than boerewors.',
    'South African summers are intense — outdoor activity in extreme heat may require higher hydration and slightly adjusted calorie intake.',
    'Rugby, cricket, and football (soccer) are popular — choose "Active" if you play sport more than 3 times per week.',
    'Mieliepap (maize porridge) is a calorie-dense staple — account for it carefully in your daily TDEE budget.',
  ]}

  intro="In South Africa, a nation celebrated for its intense sporting culture and active outdoor lifestyle, accurately calculating your Total Daily Energy Expenditure (TDEE) is fundamental to achieving your health and fitness objectives. The unique South African cultural landscape, particularly the popularity of the calorie-dense braai, makes relying on broad dietary averages ineffective for personal weight management. Our South Africa-focused TDEE calculator is fully optimized for metric measurements (kilograms and centimeters) and uses the clinical-grade Mifflin-St Jeor equation to deliver an exact metabolic baseline. Whether you are training for rugby, participating in endurance sports, or simply looking to manage your weight effectively, knowing your precise daily calorie target allows you to balance traditional cultural meals with your specific macronutrient requirements. This evidence-based approach is crucial for sustainable fat loss and overall metabolic health." />;

export const TDEENewZealand = () => <CountryPage
  country="New Zealand" code="new-zealand" unit="metric (kg/cm)"
  titleFocus="Daily Calories & Macros – New Zealand"
  desc="Free TDEE calculator for New Zealand. Calculate your daily calorie needs, BMR, BMI, and macros in metric. Perfect for Kiwis managing fitness, weight loss, or healthy eating."
  cities={['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin']}
  faqs={[
    { q: "How many calories do New Zealanders need per day?", a: "New Zealand's Ministry of Health suggests approximately 8,700 kJ (2,080 kcal) for women and 10,500 kJ (2,500 kcal) for men as reference values. Your TDEE from this calculator will be specific to your exact stats." },
    { q: "Does the New Zealand climate affect calorie needs?", a: "New Zealand has a temperate climate with significant variation between the North and South Islands. Those in colder Southland regions may have marginally higher basal metabolic rates than those in subtropical Northland." },
    { q: "How does Kiwi outdoor culture affect TDEE?", a: "New Zealanders are highly active outdoors — tramping, rugby, cycling, and water sports are all common. If you participate regularly, ensure your activity level is set to 'Active' or 'Very Active'." },
    { q: "Is this calculator suitable for Māori and Pasifika populations?", a: "The Mifflin-St Jeor formula is widely used across all ethnicities. Research suggests that Māori and Pasifika peoples may have different metabolic profiles — consult a healthcare provider for clinical dietary advice." },
  ]}
  tips={[
    'New Zealand uses the metric system — use kg and cm for results aligned with NZ nutrition labels.',
    'Kiwis have an active outdoor culture — tramping, rugby, and surfing all significantly boost your TDEE.',
    'Hangi and traditional Māori foods can be calorie-rich but nutrient-dense. Balance traditional meals within your daily TDEE.',
    'New Zealand dairy products are world-class but calorie-dense. Track yoghurt, cheese, and milk accurately.',
    'The NZ Ministry of Health recommends 2.5 hours of moderate activity per week — which shifts your TDEE multiplier from Sedentary to Lightly Active.',
  ]}

  intro="For residents of New Zealand, where an active, outdoor-oriented lifestyle is deeply ingrained in the culture, understanding your precise Total Daily Energy Expenditure (TDEE) is the key to unlocking your fitness potential. While the New Zealand Ministry of Health provides excellent baseline dietary guidelines, your individual caloric needs are heavily influenced by your specific body metrics and your participation in high-energy activities like tramping, rugby, or surfing. Our New Zealand-optimized TDEE calculator utilizes the scientifically validated Mifflin-St Jeor formula and natively supports the metric system (kilograms and centimeters) for seamless integration with local nutritional data. By pinpointing your exact maintenance calories, you can make informed decisions about your daily intake, perfectly balancing New Zealand's world-class, calorie-dense dairy products and traditional meals with your specific weight loss, maintenance, or muscle-building goals." />;
