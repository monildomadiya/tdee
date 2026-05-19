/**
 * Central tool registry — used by Sidebar, Footer, Header, Home, and every calculator
 * for strong, consistent internal linking across the entire site.
 */

export const TOOL_CATEGORIES = {
  fitness: {
    id: 'fitness',
    label: 'Fitness & Body',
    color: '#0d9488',
    bg: '#f0fdfa',
    border: '#99f6e4',
    tools: [
      { path: '/tdee-calculator',          name: 'TDEE Calculator',              short: 'TDEE',        desc: 'Total daily calorie burn for any goal.' },
      { path: '/bmr-calculator',           name: 'BMR Calculator',               short: 'BMR',         desc: 'Resting metabolic rate estimation.' },
      { path: '/bmi-calculator',           name: 'BMI Calculator',               short: 'BMI',         desc: 'Body Mass Index for height & weight.' },
      { path: '/body-fat-calculator',      name: 'Body Fat Calculator',          short: 'Body Fat',    desc: 'U.S. Navy tape-measure method.' },
      { path: '/lean-body-mass-calculator',name: 'Lean Body Mass Calculator',    short: 'LBM',         desc: 'Calculate lean mass vs fat.' },
      { path: '/ideal-weight',             name: 'Ideal Weight Calculator',      short: 'Ideal Weight',desc: 'Optimal body weight via validated formulas.' },
      { path: '/healthy-weight-calculator',name: 'Healthy Weight Calculator',    short: 'Healthy Wt',  desc: 'Determine your healthy weight range.' },
      { path: '/army-body-fat-calculator', name: 'Army Body Fat Calculator',     short: 'Army BF',     desc: 'Military body fat standards.' },
      { path: '/body-type-calculator',     name: 'Body Type Calculator',         short: 'Body Type',   desc: 'Ectomorph, mesomorph, or endomorph.' },
      { path: '/body-surface-area-calculator', name: 'Body Surface Area Calculator', short: 'BSA',    desc: 'BSA for medical dosing & metrics.' },
    ],
  },
  nutrition: {
    id: 'nutrition',
    label: 'Nutrition & Calories',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    tools: [
      { path: '/calorie-calculator',       name: 'Calorie Calculator',           short: 'Calories',    desc: 'Precise daily calorie needs.' },
      { path: '/calorie-deficit',          name: 'Calorie Deficit Calculator',   short: 'Cal Deficit', desc: 'Plan your weight loss calorie target.' },
      { path: '/macro-calculator',         name: 'Macro Calculator',             short: 'Macros',      desc: 'Optimal protein, carbs & fat split.' },
      { path: '/protein-calculator',       name: 'Protein Calculator',           short: 'Protein',     desc: 'Daily protein needs for your goal.' },
      { path: '/carbohydrate-calculator',  name: 'Carbohydrate Calculator',      short: 'Carbs',       desc: 'Daily carbohydrate intake target.' },
      { path: '/fat-intake-calculator',    name: 'Fat Intake Calculator',        short: 'Fat Intake',  desc: 'Daily dietary fat needs.' },
      { path: '/keto-macro-calculator',    name: 'Keto Macro Calculator',        short: 'Keto',        desc: 'Macros for ketogenic diets.' },
      { path: '/water-intake-calculator',  name: 'Water Intake Calculator',      short: 'Hydration',   desc: 'Daily water intake needs.' },
      { path: '/guess-calories-game',      name: 'Guess the Calories Game',      short: 'Game',        desc: 'Test your nutrition knowledge.', isNew: true },
    ],
  },
  weight: {
    id: 'weight',
    label: 'Weight Management',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    tools: [
      { path: '/weight-loss-timeline',     name: 'Weight Loss Timeline',         short: 'WL Timeline', desc: "See when you'll reach your goal weight." },
      { path: '/calories-burned-calculator', name: 'Calories Burned Calculator', short: 'Cal Burned',  desc: 'Calories burned during exercise.' },
      { path: '/pace-calculator',          name: 'Pace Calculator',              short: 'Pace',        desc: 'Running pace and speed.' },
      { path: '/one-rep-max-calculator',   name: 'One Rep Max Calculator',       short: '1RM',         desc: 'Estimate your 1RM for strength training.' },
      { path: '/target-heart-rate-calculator', name: 'Target Heart Rate Calculator', short: 'Heart Rate', desc: 'Optimal heart rate zones.' },
      { path: '/gfr-calculator',           name: 'GFR Calculator',               short: 'GFR',         desc: 'Glomerular Filtration Rate.' },
      { path: '/bac-calculator',           name: 'BAC Calculator',               short: 'BAC',         desc: 'Blood Alcohol Content estimation.' },
      { path: '/intermittent-fasting-calculator', name: 'Intermittent Fasting Calculator', short: 'IF Calc', desc: 'Track fasting and eating windows.', isNew: true },
      { path: '/sleep-calculator',          name: 'Sleep Calculator',              short: 'Sleep',       desc: 'Best sleep & wake times by sleep cycle.', isNew: true },
      { path: '/vo2-max-calculator',        name: 'VO2 Max Calculator',            short: 'VO2 Max',     desc: 'Estimate your maximal aerobic fitness.', isNew: true },
    ],
  },
  body: {
    id: 'body',
    label: 'Body Composition',
    color: '#0891b2',
    bg: '#ecfeff',
    border: '#a5f3fc',
    tools: [
      { path: '/waist-to-hip-ratio-calculator', name: 'Waist-to-Hip Ratio Calculator', short: 'WHR',      desc: 'WHO cardiovascular health risk assessment.', isNew: true },
      { path: '/creatine-calculator',      name: 'Creatine Calculator',          short: 'Creatine',    desc: 'Loading & maintenance dose for your weight.', isNew: true },
    ],
  },
  pregnancy: {
    id: 'pregnancy',
    label: "Women's Health",
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#ddd6fe',
    tools: [
      { path: '/pregnancy-calculator',     name: 'Pregnancy Calculator',         short: 'Pregnancy',   desc: 'Pregnancy timeline and milestones.' },
      { path: '/due-date-calculator',      name: 'Due Date Calculator',          short: 'Due Date',    desc: 'Estimated delivery date.' },
      { path: '/ovulation-calculator',     name: 'Ovulation Calculator',         short: 'Ovulation',   desc: 'Fertile window estimation.' },
      { path: '/conception-calculator',    name: 'Conception Calculator',        short: 'Conception',  desc: 'Estimate conception date.' },
      { path: '/period-calculator',        name: 'Period Calculator',            short: 'Period',      desc: 'Predict next period.' },
      { path: '/pregnancy-weight-gain-calculator', name: 'Pregnancy Weight Gain Calculator', short: 'Preg Weight', desc: 'Safe weight gain during pregnancy.' },
      { path: '/pregnancy-conception-calculator',  name: 'Pregnancy Conception Calculator',  short: 'Preg Conc',   desc: 'Conception date from due date.' },
    ],
  },
};

// Flat array of all tools
export const ALL_TOOLS = Object.values(TOOL_CATEGORIES).flatMap(cat => cat.tools);

// Related tools map: given a tool path, returns related tool paths
export const RELATED_TOOLS = {
  '/tdee-calculator': ['/bmr-calculator', '/macro-calculator', '/calorie-deficit', '/bmi-calculator', '/ideal-weight', '/body-fat-calculator', '/calorie-calculator'],
  '/bmi-calculator': ['/tdee-calculator', '/ideal-weight', '/healthy-weight-calculator', '/body-fat-calculator', '/calorie-deficit', '/bmr-calculator'],
  '/bmr-calculator': ['/tdee-calculator', '/calorie-calculator', '/macro-calculator', '/calorie-deficit', '/bmi-calculator'],
  '/macro-calculator': ['/tdee-calculator', '/protein-calculator', '/calorie-deficit', '/keto-macro-calculator', '/calorie-calculator'],
  '/calorie-deficit': ['/tdee-calculator', '/weight-loss-timeline', '/macro-calculator', '/calorie-calculator', '/bmi-calculator'],
  '/calorie-calculator': ['/tdee-calculator', '/calorie-deficit', '/macro-calculator', '/bmr-calculator', '/protein-calculator'],
  '/body-fat-calculator': ['/tdee-calculator', '/lean-body-mass-calculator', '/army-body-fat-calculator', '/bmi-calculator', '/ideal-weight'],
  '/lean-body-mass-calculator': ['/body-fat-calculator', '/army-body-fat-calculator', '/tdee-calculator', '/protein-calculator', '/one-rep-max-calculator'],
  '/ideal-weight': ['/bmi-calculator', '/healthy-weight-calculator', '/body-fat-calculator', '/tdee-calculator', '/calorie-deficit'],
  '/healthy-weight-calculator': ['/ideal-weight', '/bmi-calculator', '/body-fat-calculator', '/tdee-calculator'],
  '/protein-calculator': ['/macro-calculator', '/tdee-calculator', '/calorie-calculator', '/keto-macro-calculator', '/lean-body-mass-calculator'],
  '/carbohydrate-calculator': ['/macro-calculator', '/calorie-calculator', '/tdee-calculator', '/fat-intake-calculator', '/keto-macro-calculator'],
  '/fat-intake-calculator': ['/macro-calculator', '/carbohydrate-calculator', '/protein-calculator', '/keto-macro-calculator', '/calorie-calculator'],
  '/keto-macro-calculator': ['/macro-calculator', '/fat-intake-calculator', '/protein-calculator', '/calorie-deficit', '/tdee-calculator'],
  '/water-intake-calculator': ['/tdee-calculator', '/calorie-calculator', '/calories-burned-calculator'],
  '/weight-loss-timeline': ['/calorie-deficit', '/tdee-calculator', '/calories-burned-calculator', '/macro-calculator', '/bmi-calculator'],
  '/calories-burned-calculator': ['/tdee-calculator', '/weight-loss-timeline', '/calorie-deficit', '/pace-calculator', '/target-heart-rate-calculator'],
  '/one-rep-max-calculator': ['/lean-body-mass-calculator', '/protein-calculator', '/calories-burned-calculator', '/target-heart-rate-calculator'],
  '/target-heart-rate-calculator': ['/calories-burned-calculator', '/pace-calculator', '/tdee-calculator', '/bac-calculator'],
  '/pace-calculator': ['/target-heart-rate-calculator', '/calories-burned-calculator', '/weight-loss-timeline'],
  '/army-body-fat-calculator': ['/body-fat-calculator', '/lean-body-mass-calculator', '/bmi-calculator', '/ideal-weight'],
  '/body-type-calculator': ['/bmi-calculator', '/body-fat-calculator', '/ideal-weight', '/tdee-calculator'],
  '/body-surface-area-calculator': ['/bmi-calculator', '/body-fat-calculator', '/gfr-calculator'],
  '/gfr-calculator': ['/body-surface-area-calculator', '/bmi-calculator', '/body-fat-calculator'],
  '/bac-calculator': ['/target-heart-rate-calculator', '/tdee-calculator'],
  '/pregnancy-calculator': ['/due-date-calculator', '/ovulation-calculator', '/pregnancy-weight-gain-calculator', '/conception-calculator', '/period-calculator'],
  '/due-date-calculator': ['/pregnancy-calculator', '/conception-calculator', '/pregnancy-weight-gain-calculator', '/ovulation-calculator'],
  '/ovulation-calculator': ['/period-calculator', '/conception-calculator', '/due-date-calculator', '/pregnancy-calculator'],
  '/conception-calculator': ['/ovulation-calculator', '/due-date-calculator', '/pregnancy-calculator', '/pregnancy-conception-calculator'],
  '/period-calculator': ['/ovulation-calculator', '/conception-calculator', '/pregnancy-calculator'],
  '/pregnancy-weight-gain-calculator': ['/pregnancy-calculator', '/due-date-calculator', '/bmi-calculator', '/calorie-calculator'],
  '/pregnancy-conception-calculator': ['/conception-calculator', '/due-date-calculator', '/pregnancy-calculator'],
  '/guess-calories-game': ['/calorie-calculator', '/tdee-calculator', '/macro-calculator', '/calorie-deficit', '/ideal-weight'],
  '/intermittent-fasting-calculator': ['/tdee-calculator', '/calorie-deficit', '/macro-calculator', '/weight-loss-timeline', '/calorie-calculator'],
};

// Get related tool objects for a path
export function getRelatedTools(currentPath, limit = 6) {
  const related = RELATED_TOOLS[currentPath] || [];
  return related.slice(0, limit).map(p => ALL_TOOLS.find(t => t.path === p)).filter(Boolean);
}

// Get category for a tool path
export function getToolCategory(path) {
  return Object.values(TOOL_CATEGORIES).find(cat => cat.tools.some(t => t.path === path));
}
