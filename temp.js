// ===== 1. QUIZ DATA =====
const questions = [
  {q: "When faced with a problem, you usually:", options: [{t:"choleric", text:"Take charge and find a fast solution"},{t:"sanguine", text:"Talk to people and brainstorm ideas"},{t:"melancholic", text:"Analyze all details before acting"},{t:"phlegmatic", text:"Stay calm and go with the flow"}]},
  {q: "In a group, you are most likely to:", options: [{t:"choleric", text:"Lead and assign tasks"},{t:"sanguine", text:"Energize everyone and keep it fun"},{t:"melancholic", text:"Make sure everything is correct"},{t:"phlegmatic", text:"Support others and keep peace"}]},
  {q: "How do you handle stress?", options: [{t:"choleric", text:"Get more driven and push harder"},{t:"sanguine", text:"Distract yourself with people or activities"},{t:"melancholic", text:"Worry and overthink it"},{t:"phlegmatic", text:"Stay relaxed and don’t take it to heart"}]},
  {q: "Your ideal weekend is:", options: [{t:"choleric", text:"Working on goals or a project"},{t:"sanguine", text:"Parties, events, meeting new people"},{t:"melancholic", text:"Quiet time, reading, or deep hobbies"},{t:"phlegmatic", text:"Chilling, no pressure, no rush"}]},
  {q: "When someone criticizes you:", options: [{t:"choleric", text:"Push back and defend your position"},{t:"sanguine", text:"Laugh it off, then forget it"},{t:"melancholic", text:"Take it seriously and reflect a lot"},{t:"phlegmatic", text:"Accept it and avoid conflict"}]},
  {q: "You make decisions by:", options: [{t:"choleric", text:"What gets results fastest"},{t:"sanguine", text:"What feels exciting"},{t:"melancholic", text:"What’s most logical and perfect"},{t:"phlegmatic", text:"What keeps everyone comfortable"}]},
  {q: "Your energy level is usually:", options: [{t:"choleric", text:"High and focused"},{t:"sanguine", text:"High and social"},{t:"melancholic", text:"Steady but reserved"},{t:"phlegmatic", text:"Calm and even"}]},
  {q: "How do you see rules and deadlines?", options: [{t:"choleric", text:"Guidelines to beat"},{t:"sanguine", text:"Suggestions, I’m flexible"},{t:"melancholic", text:"Important, must be followed"},{t:"phlegmatic", text:"Okay if we’re not rushed"}]},
  {q: "When planning a trip, you prefer to:", options: [{t:"choleric", text:"Set the itinerary and make sure we hit all goals"},{t:"sanguine", text:"Keep it spontaneous and see where we end up"},{t:"melancholic", text:"Research everything and plan every detail"},{t:"phlegmatic", text:"Go along with whatever the group wants"}]},
  {q: "Your workspace is usually:", options: [{t:"choleric", text:"Organized for maximum productivity"},{t:"sanguine", text:"A bit messy but full of creative stuff"},{t:"melancholic", text:"Perfectly neat and everything has a place"},{t:"phlegmatic", text:"Comfortable and low-maintenance"}]},
  {q: "When you feel wronged, you:", options: [{t:"choleric", text:"Confront the person directly"},{t:"sanguine", text:"Talk about it with friends then move on"},{t:"melancholic", text:"Hold onto it and think about it for days"},{t:"phlegmatic", text:"Let it go to avoid drama"}]},
  {q: "You’re best at:", options: [{t:"choleric", text:"Getting things done under pressure"},{t:"sanguine", text:"Motivating and connecting people"},{t:"melancholic", text:"Finding errors and improving quality"},{t:"phlegmatic", text:"Mediating and keeping people calm"}]},
  {q: "In conversations you tend to:", options: [{t:"choleric", text:"Talk with authority and get to the point"},{t:"sanguine", text:"Tell stories and make people laugh"},{t:"melancholic", text:"Listen deeply and ask thoughtful questions"},{t:"phlegmatic", text:"Listen and agree to keep things smooth"}]},
  {q: "When starting a new habit:", options: [{t:"choleric", text:"Go all in with strict goals"},{t:"sanguine", text:"Start excited but might lose interest"},{t:"melancholic", text:"Plan it perfectly before starting"},{t:"phlegmatic", text:"Ease into it slowly without pressure"}]},
  {q: "What drains you the most?", options: [{t:"choleric", text:"Incompetence and wasted time"},{t:"sanguine", text:"Boredom and routine"},{t:"melancholic", text:"Chaos and lack of standards"},{t:"phlegmatic", text:"Conflict and high pressure"}]},
  {q: "Your friends would describe you as:", options: [{t:"choleric", text:"Bossy but dependable"},{t:"sanguine", text:"Fun and unpredictable"},{t:"melancholic", text:"Thoughtful and reliable"},{t:"phlegmatic", text:"Easygoing and supportive"}]}
];

const temperaments = {
  choleric: {name: "Choleric", color: "choleric", desc: "You’re a natural leader. Goal-driven, confident, and decisive. You get things done.", traits: ["Direct, assertive, and takes initiative","Competitive and likes to win","Independent and self-motivated","Can be impatient or blunt"], advice: ["Pause before reacting.","Listen more. People follow you better when they feel heard.","Schedule rest. Burnout is real.","Channel your intensity into 1-2 big goals."]},
  sanguine: {name: "Sanguine", color: "sanguine", desc: "You’re the people person. Optimistic, fun, and spontaneous. You light up any room.", traits: ["Talkative, outgoing, and enthusiastic","Creative and loves new experiences","Forgives easily and doesn’t hold grudges","Can be disorganized or distracted"], advice: ["Use reminders and calendars.","Balance fun with responsibility.","Give space to quieter people.","Complete one project before starting three new ones."]},
  melancholic: {name: "Melancholic", color: "melancholic", desc: "You’re thoughtful and principled. You care about quality, truth, and doing things right.", traits: ["Analytical, detail-oriented, and reliable","Deep thinker and values meaning","Loyal and sensitive to others","Can be self-critical or moody"], advice: ["Perfection is good, but done is better.","Talk to someone when you’re stuck in your head.","Celebrate small wins.","Protect your energy from too much criticism."]},
  phlegmatic: {name: "Phlegmatic", color: "phlegmatic", desc: "You’re steady and peaceful. People trust you because you’re calm and reliable.", traits: ["Calm, easygoing, and good listener","Avoids conflict and values harmony","Consistent and dependable","Can be passive or avoid decisions"], advice: ["Your opinion matters. Practice setting boundaries.","Growth comes from small discomforts.","Don’t bottle up feelings to keep peace.","Partner with a goal-driven person."]}
};

const blendDescriptions = {
  "choleric-sanguine": "You’re a Charismatic Leader. You drive results but bring people with you.",
  "choleric-melancholic": "You’re a Principled Commander. Vision with high standards.",
  "choleric-phlegmatic": "You’re a Steady Director. Calm on the surface, determined underneath.",
  "sanguine-choleric": "You’re an Influential Motivator. People energy plus goal energy.",
  "sanguine-melancholic": "You’re a Thoughtful Creative. Warmth plus depth.",
  "sanguine-phlegmatic": "You’re a Friendly Harmonizer. Easygoing and supportive.",
  "melancholic-choleric": "You’re a Perfectionist Strategist. Deep thinker with drive.",
  "melancholic-sanguine": "You’re a Compassionate Analyst. Details plus warmth.",
  "melancholic-phlegmatic": "You’re a Quiet Perfectionist. Calm and principled.",
  "phlegmatic-choleric": "You’re a Calm Achiever. Steady with quiet backbone.",
  "phlegmatic-sanguine": "You’re a Peaceful Connector. Warm and inclusive.",
  "phlegmatic-melancholic": "You’re a Gentle Idealist. Sensitive and reflective."
};

// ===== 2. STATE =====
let currentQ = 0;
let answers = {};

// ===== 3. DOM ELEMENTS - DECLARED ONCE ONLY =====
const qWrapper = document.getElementById('qWrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressBar = document.getElementById('progressBar');
const qCounter = document.getElementById('qCounter');

const homeView = document.getElementById('homeView');
const instructionsView = document.getElementById('instructionsView');
const quizView = document.getElementById('quizView');
const resultView = document.getElementById('result');

const menuToggle = document.getElementById('menuToggle');
const menuDropdown = document.getElementById('menuDropdown');

// ===== 4. VIEW MANAGER =====
function showView(name){
  const views = [homeView, instructionsView, quizView, resultView];
  views.forEach(v => { if(v) v.style.display = 'none'; });
  if(name === 'home' && homeView) homeView.style.display = 'block';
  if(name === 'instructions' && instructionsView) instructionsView.style.display = 'block';
  if(name === 'quiz' && quizView) quizView.style.display = 'block';
  if(name === 'result' && resultView) resultView.style.display = 'block';
  if(menuDropdown) menuDropdown.classList.remove('open');
}

function startTest(){
  answers = {};
  currentQ = 0;
  localStorage.removeItem('temperamentAnswers');
  localStorage.removeItem('temperamentCurrentQ');
  document.querySelectorAll('input[type="radio"]').forEach(r=> r.checked = false);
  document.querySelectorAll('.option').forEach(l=> l.classList.remove('selected'));
  if(progressBar) progressBar.style.width = '0%';
  showView('quiz');
  showQuestion(0);
}

// ===== 5. MENU LISTENERS =====
if(menuToggle){
  menuToggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    menuDropdown.classList.toggle('open');
  });
  document.addEventListener('click', ()=> {
    menuDropdown?.classList.remove('open');
  });
}

document.getElementById('menuHomeBtn')?.addEventListener('click', ()=> showView('home'));
document.getElementById('menuInstructionsBtn')?.addEventListener('click', ()=> showView('instructions'));
document.getElementById('menuStartTestBtn')?.addEventListener('click', startTest);
document.getElementById('homeStartBtn')?.addEventListener('click', startTest);
document.getElementById('homeInstructionsBtn')?.addEventListener('click', ()=> showView('instructions'));
document.getElementById('instructionsStartBtn')?.addEventListener('click', startTest);
document.getElementById('homeBtn')?.addEventListener('click', ()=> showView('home'));
document.getElementById('retakeBtn')?.addEventListener('click', startTest);

// ===== 6. BUILD QUESTIONS =====
if(qWrapper){
  questions.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `qcard-${idx}`;
    card.innerHTML = `
      <div class="q-title">${idx + 1}. ${item.q}</div>
      <div class="options">
        ${item.options.map((opt, i) => {
          const id = `q${idx}o${i}`;
          return `<label class="option" for="${id}">
            <div class="radio-dot"></div>
            <input type="radio" name="q${idx}" id="${id}" value="${opt.t}">
            ${opt.text}
          </label>`;
        }).join('')}
      </div>
    `;
    qWrapper.appendChild(card);
  });
}

// ===== 7. QUIZ LOGIC =====
function showQuestion(index){
  document.querySelectorAll('.q-card').forEach(c => c.classList.remove('active'));
  currentQ = index;
  const card = document.getElementById(`qcard-${currentQ}`);
  if(card) card.classList.add('active');
  if(qCounter) qCounter.textContent = `${currentQ + 1} / ${questions.length}`;
  if(prevBtn) prevBtn.disabled = currentQ === 0;
  if(nextBtn){
    nextBtn.textContent = currentQ === questions.length - 1 ? 'See Result' : 'Next';
    nextBtn.disabled = answers[`q${currentQ}`] === undefined;
  }
  updateProgress();
  restoreAnswer();
  saveProgress();
}

function updateProgress(){
  if(!progressBar) return;
  const percent = (Object.keys(answers).length / questions.length) * 100;
  progressBar.style.width = percent + '%';
}

function restoreAnswer(){
  const saved = answers[`q${currentQ}`];
  const currentCard = document.getElementById(`qcard-${currentQ}`);
  if(!currentCard) return;
  currentCard.querySelectorAll('.option').forEach(l => l.classList.remove('selected'));
  if(saved){
    const radio = currentCard.querySelector(`input[name="q${currentQ}"][value="${saved}"]`);
    if(radio){
      radio.checked = true;
      radio.closest('.option')?.classList.add('selected');
    }
  }
}

if(qWrapper){
  qWrapper.addEventListener('click', e => {
    const label = e.target.closest('.option');
    if(!label) return;
    const radio = label.querySelector('input[type="radio"]');
    if(!radio) return;
    radio.checked = true;
    const currentCard = document.getElementById(`qcard-${currentQ}`);
    currentCard?.querySelectorAll('.option').forEach(l => l.classList.remove('selected'));
    label.classList.add('selected');
    answers[`q${currentQ}`] = radio.value;
    if(nextBtn) nextBtn.disabled = false;
    saveProgress();
    updateProgress();
  });
}

if(nextBtn){
  nextBtn.addEventListener('click', () => {
    if(currentQ < questions.length - 1) showQuestion(currentQ + 1);
    else showResult();
  });
}
if(prevBtn){
  prevBtn.addEventListener('click', () => {
    if(currentQ > 0) showQuestion(currentQ - 1);
  });
}

function showResult(){
  const scores = {choleric:0, sanguine:0, melancholic:0, phlegmatic:0};
  Object.values(answers).forEach(val => { if(scores[val] !== undefined) scores[val]++; });

  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  const [primaryKey, primaryScore] = sorted[0];
  const [secondaryKey, secondaryScore] = sorted[1];
  const primary = temperaments[primaryKey];
  const secondary = temperaments[secondaryKey];

  const isBlend = (primaryScore - secondaryScore) <= 2;
  const key = `${primaryKey}-${secondaryKey}`;
  const blendText = blendDescriptions[key] || `You lead with ${primary.name} and have strong ${secondary.name} tendencies.`;

  showView('result');

  const badge = document.getElementById('badge');
  const title = document.getElementById('resultTitle');
  const desc = document.getElementById('resultDesc');
  const traitsList = document.getElementById('traitsList');
  const adviceList = document.getElementById('adviceList');
  const breakdown = document.getElementById('scoreBreakdown');

  if(isBlend){
    badge.className = `badge ${primary.color}`;
    badge.textContent = `${primary.name} + ${secondary.name}`;
    title.textContent = `You are primarily ${primary.name} with ${secondary.name}`;
    desc.textContent = blendText;
    traitsList.innerHTML = [...primary.traits.slice(0,2), ...secondary.traits.slice(0,2)].map(t=>`<li>${t}</li>`).join('');
    adviceList.innerHTML = [...primary.advice.slice(0,2), ...secondary.advice.slice(0,2)].map(t=>`<li>${t}</li>`).join('');
  } else {
    badge.className = `badge ${primary.color}`;
    badge.textContent = primary.name;
    title.textContent = `You are ${primary.name}`;
    desc.textContent = primary.desc;
    traitsList.innerHTML = primary.traits.map(t=>`<li>${t}</li>`).join('');
    adviceList.innerHTML = primary.advice.map(t=>`<li>${t}</li>`).join('');
  }
  if(breakdown){
    breakdown.innerHTML = sorted.map(([k,v])=> `<div>${temperaments[k].name}: ${v}</div>`).join('');
  }
  localStorage.removeItem('temperamentAnswers');
  localStorage.removeItem('temperamentCurrentQ');
}

function saveProgress(){
  localStorage.setItem('temperamentAnswers', JSON.stringify(answers));
  localStorage.setItem('temperamentCurrentQ', currentQ);
}
function loadProgress(){
  const saved = localStorage.getItem('temperamentAnswers');
  const savedQ = localStorage.getItem('temperamentCurrentQ');
  if(saved) answers = JSON.parse(saved);
  if(savedQ !== null) currentQ = parseInt(savedQ, 10);
  return saved;
}

// ===== 8. INIT =====
loadProgress();
if(Object.keys(answers).length > 0){
  showView('quiz');
  showQuestion(currentQ);
} else {
  showView('home');
}

