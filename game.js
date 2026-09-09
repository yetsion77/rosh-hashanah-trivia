"use strict";
(() => {
  const questions = [
    { category: "בלוח השנה", question: "באיזה חודש עברי חל ראש השנה?", answers: ["תשרי", "ניסן", "כסלו", "אלול"], correct: 0, explanation: "ראש השנה חל בא׳ ובב׳ בתשרי, בפתיחת השנה העברית." },
    { category: "סימנים של חג", question: "מה מסמל המנהג לטבול תפוח בדבש?", answers: ["בקשה לשנה מתוקה", "זכר ליציאת מצרים", "את סיום החורף", "את חג הקציר"], correct: 0, explanation: "התפוח בדבש מבטא את התקווה לשנה טובה ומתוקה." },
    { category: "שומעים את החג", question: "באיזה כלי תוקעים בראש השנה?", answers: ["שופר", "חליל", "כינור", "תוף"], correct: 0, explanation: "תקיעת השופר היא מצווה מרכזית בראש השנה. השופר עשוי מקרן של בעל חיים, ובדרך כלל משתמשים בקרן איל." },
    { category: "שומעים את החג", question: "איזו מילה אינה שם של אחד מקולות השופר?", answers: ["הבדלה", "תקיעה", "שברים", "תרועה"], correct: 0, explanation: "תקיעה, שברים ותרועה הם קולות השופר. הבדלה היא טקס המציין את סיום השבת או החג." },
    { category: "מסביב לשולחן", question: "איזה פרי מקושר לברכה שירבו זכויותינו?", answers: ["רימון", "לימון", "אבטיח", "בננה"], correct: 0, explanation: "גרגרי הרימון הרבים משמשים סמל לריבוי זכויות. מספר הגרגרים משתנה מפרי לפרי." },
    { category: "ברכות ואיחולים", question: "איזו ברכה נהוג לאחל בראש השנה?", answers: ["שנה טובה ומתוקה", "חג אורים שמח", "חג חירות שמח", "פורים שמח"], correct: 0, explanation: "״שנה טובה ומתוקה״ היא ברכת חג נפוצה. נהוג גם לאחל ״כתיבה וחתימה טובה״." },
    { category: "בלוח השנה", question: "כמה ימים חוגגים את ראש השנה בישראל?", answers: ["יומיים", "יום אחד", "שבעה ימים", "שמונה ימים"], correct: 0, explanation: "ראש השנה נחגג במשך יומיים גם בישראל וגם בתפוצות." },
    { category: "מנהגי החג", question: "מה שמו של המנהג שבו אומרים תפילה ליד מקור מים?", answers: ["תשליך", "הקפות", "בדיקת חמץ", "ספירת העומר"], correct: 0, explanation: "בתשליך אומרים תפילה ליד מקור מים, כמנהג המסמל רצון להיפרד מחטאים ולפתוח דף חדש." },
    { category: "מסביב לשולחן", question: "מה מסמלת הבקשה ״שנהיה לראש ולא לזנב״?", answers: ["שאיפה להוביל ולהצליח", "בקשה שהחורף יסתיים", "בקשה לישון יותר", "זכר לנס פך השמן"], correct: 0, explanation: "זהו איחול להתקדמות ולהצלחה. במשפחות רבות אומרים אותו לצד ראש של דג או מאכל סמלי אחר." },
    { category: "זמן להתחדשות", question: "איך נקראים הימים מראש השנה ועד יום הכיפורים?", answers: ["עשרת ימי תשובה", "ימי החנוכה", "ימי ספירת העומר", "שלושת השבועות"], correct: 0, explanation: "עשרת ימי תשובה מתחילים בראש השנה ומסתיימים ביום הכיפורים. הם מוקדשים לחשבון נפש, לתשובה ולתיקון." },
    { category: "מתכוננים לחג", question: "איזה חודש מגיע מיד לפני תשרי?", answers: ["אלול", "אדר", "שבט", "סיוון"], correct: 0, explanation: "אלול הוא החודש שלפני תשרי, והוא נחשב זמן של הכנה לשנה החדשה וחשבון נפש." },
    { category: "מסביב לשולחן", question: "איזה מאכל מופיע בחג אצל משפחות רבות בצורה עגולה?", answers: ["חלה", "מצה", "אוזן המן", "לביבה"], correct: 0, explanation: "בקהילות רבות מכינים חלה עגולה לראש השנה. אחד ההסברים לצורתה הוא מחזוריות השנה." }
  ];
  const $ = id => document.getElementById(id);
  let round = [], index = 0, score = 0, chosen = null, history = [], phase = "welcome";
  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
    return copy;
  }
  function show(name) { ["welcome", "play", "results"].forEach(id => { $(id).hidden = id !== name; }); phase = name; }
  function start() {
    round = shuffle(questions).map(q => ({ ...q, choices: shuffle(q.answers.map((text, i) => ({ text, correct: i === q.correct }))) }));
    index = 0; score = 0; history = []; chosen = null;
    $("review").open = false; show("play"); render();
  }
  function render() {
    const q = round[index]; chosen = null;
    $("counter").textContent = `שאלה ${index + 1} מתוך ${round.length}`;
    $("score").textContent = score; $("progress").value = index;
    $("category").textContent = q.category; $("question").textContent = q.question;
    $("feedback").replaceChildren(); $("next").hidden = true;
    $("answers").replaceChildren();
    q.choices.forEach((choice, i) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "answer";
      const letter = document.createElement("span"); letter.className = "letter"; letter.textContent = "אבגד"[i]; letter.setAttribute("aria-hidden", "true");
      const text = document.createElement("span"); text.textContent = choice.text;
      button.append(letter, text); button.addEventListener("click", () => answer(i)); $("answers").append(button);
    });
    $("question").focus();
  }
  function answer(option) {
    if (phase !== "play" || chosen !== null || !Number.isInteger(option) || option < 0 || option > 3) return false;
    chosen = option; const q = round[index]; const correct = q.choices[option].correct;
    if (correct) score += 10;
    history.push({ question: q.question, correct, picked: q.choices[option].text, answer: q.answers[q.correct], explanation: q.explanation });
    [...$("answers").children].forEach((button, i) => {
      button.disabled = true;
      if (q.choices[i].correct) { button.classList.add("correct"); button.firstChild.textContent = "✓"; button.setAttribute("aria-label", `${q.choices[i].text} — התשובה הנכונה`); }
      else if (i === option) { button.classList.add("wrong"); button.firstChild.textContent = "✕"; button.setAttribute("aria-label", `${q.choices[i].text} — התשובה שבחרתם אינה נכונה`); }
    });
    $("score").textContent = score; $("progress").value = index + 1;
    const title = document.createElement("strong"); title.textContent = correct ? "בדיוק! עוד 10 נקודות של מתיקות 🍯" : `עוד משהו שלמדנו! התשובה הנכונה: ${q.answers[q.correct]}.`;
    const explanation = document.createElement("p"); explanation.textContent = q.explanation;
    $("feedback").append(title, explanation);
    $("next").textContent = index === round.length - 1 ? "לתוצאות החידון ←" : "לשאלה הבאה ←";
    $("next").hidden = false; $("next").focus(); return true;
  }
  function next() {
    if (phase !== "play" || chosen === null) return false;
    index++;
    if (index < round.length) render(); else finish();
    return true;
  }
  function finish() {
    show("results");
    $("result-title").textContent = score >= 100 ? "אלופי השנה החדשה!" : score >= 70 ? "יש לכם ידע מתוק!" : "כל שאלה היא התחלה חדשה!";
    $("total").textContent = score; $("summary").textContent = `עניתם נכון על ${score / 10} מתוך ${round.length} שאלות.`;
    $("review-list").replaceChildren();
    history.forEach(item => {
      const li = document.createElement("li");
      const title = document.createElement("strong"); title.textContent = item.question;
      const status = document.createElement("p"); status.className = "review-status"; status.textContent = item.correct ? "✓ עניתם נכון" : `✕ בחרתם: ${item.picked}`;
      const answerText = document.createElement("p"); answerText.textContent = `התשובה: ${item.answer}. ${item.explanation}`;
      li.append(title, status, answerText); $("review-list").append(li);
    });
    $("result-title").focus();
  }
  $("start").addEventListener("click", start); $("restart").addEventListener("click", start); $("next").addEventListener("click", next);
  // Optional browser-agent support. Normal browsers need no extension or service.
  if (document.modelContext?.registerTool) {
    const state = () => ({ phase, score, answered: history.length, question: phase === "play" ? round[index].question : null, options: phase === "play" ? round[index].choices.map(c => c.text) : [], awaitingNext: phase === "play" && chosen !== null });
    const lifecycle = new AbortController();
    const tools = [
      { name: "read_trivia", description: "Read the current trivia question, choices and score.", annotations: { readOnlyHint: true }, inputSchema: { type: "object", properties: {}, additionalProperties: false }, execute: state },
      { name: "start_trivia", description: "Start a new round, resetting the score.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, execute: () => { start(); return state(); } },
      { name: "answer_trivia", description: "Submit an answer, using an option number from 1 to 4.", inputSchema: { type: "object", properties: { option: { type: "integer", minimum: 1, maximum: 4 } }, required: ["option"], additionalProperties: false }, execute: input => { if (!answer(input?.option - 1)) throw new Error("Invalid option or no unanswered question."); return state(); } },
      { name: "next_trivia", description: "Continue after answering, or display final results.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, execute: () => { if (!next()) throw new Error("Answer the current question first."); return state(); } }
    ];
    for (const tool of tools) { try { Promise.resolve(document.modelContext.registerTool(tool, { signal: lifecycle.signal })).catch(() => {}); } catch {} }
    window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
  }
})();
