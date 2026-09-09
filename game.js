"use strict";
(() => {
  const questions = [
  {
    "category": "ראש השנה · תפילה",
    "question": "מהו הסדר של שלוש הברכות המיוחדות במוסף של ראש השנה?",
    "answers": [
      "מלכויות, זיכרונות, שופרות",
      "זיכרונות, מלכויות, שופרות",
      "שופרות, זיכרונות, מלכויות",
      "מלכויות, שופרות, זיכרונות"
    ],
    "correct": 0,
    "explanation": "הסדר הוא מלכויות, זיכרונות ושופרות: מלכות ה׳, זיכרון הברית והמעשים, ומשמעות קול השופר.",
    "source": "משנה ראש השנה ד׳, ה׳",
    "url": "https://www.sefaria.org/Mishnah_Rosh_Hashanah.4.5"
  },
  {
    "category": "ראש השנה · לוח השנה",
    "question": "התורה מכנה את חודש ראש השנה ״החודש השביעי״. מאיזה חודש מתחיל מניין זה?",
    "answers": [
      "ניסן",
      "תשרי",
      "אלול",
      "אדר"
    ],
    "correct": 0,
    "explanation": "מניין החודשים בתורה מתחיל בניסן. לכן תשרי הוא החודש השביעי, אף שבתחילתו מציינים את ראש השנה לשנים.",
    "source": "שמות י״ב, ב׳; ויקרא כ״ג, כ״ד",
    "url": "https://www.sefaria.org/Exodus.12.2"
  },
  {
    "category": "ראש השנה · משנה",
    "question": "כמה ״ראשי שנים״ מונה המשנה בפתיחת מסכת ראש השנה?",
    "answers": [
      "ארבעה",
      "שניים",
      "שלושה",
      "חמישה"
    ],
    "correct": 0,
    "explanation": "המשנה מונה ארבעה ראשי שנים לצרכים שונים, ובהם מניין מלכים ורגלים, מעשר בהמה, שנים ואילנות.",
    "source": "משנה ראש השנה א׳, א׳",
    "url": "https://www.sefaria.org/Mishnah_Rosh_Hashanah.1.1"
  },
  {
    "category": "ראש השנה · שופר",
    "question": "איזו קרן נפסלת לשופר במפורש במשנה?",
    "answers": [
      "קרן של פרה",
      "קרן של איל",
      "קרן של יעל",
      "קרן של עז"
    ],
    "correct": 0,
    "explanation": "המשנה מוציאה מן הכלל את קרן הפרה. אין לבלבל בין העדפה לשופר של איל לבין פסילת כל קרן אחרת.",
    "source": "משנה ראש השנה ג׳, ב׳",
    "url": "https://www.sefaria.org/Mishnah_Rosh_Hashanah.3.2"
  },
  {
    "category": "ראש השנה · תקיעות",
    "question": "מהו סדר הקולות בראשי התיבות תשר״ת?",
    "answers": [
      "תקיעה, שברים, תרועה, תקיעה",
      "תרועה, שברים, תרועה, תקיעה",
      "תקיעה, שברים, תקיעה, תרועה",
      "תקיעה, תרועה, שברים, תקיעה"
    ],
    "correct": 0,
    "explanation": "תשר״ת הוא רצף הפותח ומסיים בתקיעה, ובאמצעו שברים ואחריהם תרועה.",
    "source": "תלמוד בבלי, ראש השנה ל״ד ע״א",
    "url": "https://www.sefaria.org/Rosh_Hashanah.34a"
  },
  {
    "category": "ראש השנה · מקרא",
    "question": "איזה כינוי מופיע בתורה ביחס לא׳ בתשרי?",
    "answers": [
      "זיכרון תרועה",
      "שבת שבתון ומקרא ביכורים",
      "יום הנפת העומר",
      "יום הקהל"
    ],
    "correct": 0,
    "explanation": "בספר ויקרא מתואר א׳ בחודש השביעי כ״זיכרון תרועה״. בספר במדבר הוא מכונה גם ״יום תרועה״.",
    "source": "ויקרא כ״ג, כ״ד",
    "url": "https://www.sefaria.org/Leviticus.23.24"
  },
  {
    "category": "יום הכיפורים · תשובה",
    "question": "לפי המשנה, מה נדרש לכפרה על עבירה שבין אדם לחברו?",
    "answers": [
      "לרצות את האדם שנפגע",
      "להאריך בתפילת נעילה בלבד",
      "לתת צדקה במקום בקשת סליחה",
      "להמתין ליום הכיפורים הבא"
    ],
    "correct": 0,
    "explanation": "יום הכיפורים אינו מכפר על פגיעה באדם אחר עד שהפוגע מרצה אותו. הצום והתפילה אינם תחליף לתיקון הפגיעה.",
    "source": "משנה יומא ח׳, ט׳",
    "url": "https://www.sefaria.org/Mishnah_Yoma.8.9"
  },
  {
    "category": "יום הכיפורים · עבודת המקדש",
    "question": "אילו בגדים לובש הכהן הגדול בעבודה המיוחדת בתוך קודש הקודשים?",
    "answers": [
      "בגדי בד לבנים",
      "בגדי הזהב ובהם החושן",
      "מעיל תכלת בלבד",
      "בגדי ארגמן ובהם כתר"
    ],
    "correct": 0,
    "explanation": "העבודה הפנימית של יום הכיפורים נעשית בבגדי בד, המכונים בגדי לבן, ולא במערכת בגדי הזהב.",
    "source": "ויקרא ט״ז, ד׳",
    "url": "https://www.sefaria.org/Leviticus.16.4"
  },
  {
    "category": "יום הכיפורים · עבודת המקדש",
    "question": "כיצד נקבע איזה משני השעירים יהיה לה׳ ואיזה לעזאזל?",
    "answers": [
      "באמצעות גורלות",
      "לפי גיל השעיר",
      "לפי צבע הפרווה",
      "לפי סדר הבאתם למקדש"
    ],
    "correct": 0,
    "explanation": "אהרן מצטווה לתת על שני השעירים גורלות: אחד לה׳ ואחד לעזאזל.",
    "source": "ויקרא ט״ז, ח׳",
    "url": "https://www.sefaria.org/Leviticus.16.8"
  },
  {
    "category": "יום הכיפורים · תפילות",
    "question": "איזו תפילה נוספת ביום הכיפורים לאחר מנחה, סמוך לסיום היום?",
    "answers": [
      "נעילה",
      "מוסף",
      "כל נדרי",
      "הלל"
    ],
    "correct": 0,
    "explanation": "נעילה היא תפילת הסיום המיוחדת. מוסף מוקדם יותר ביום, וכל נדרי נאמר בפתח ליל יום הכיפורים.",
    "source": "משנה תענית ד׳, א׳",
    "url": "https://www.sefaria.org/Mishnah_Ta%27anit.4.1"
  },
  {
    "category": "יום הכיפורים · שנת היובל",
    "question": "איזה אירוע מקראי מוכרז בתקיעת שופר ביום הכיפורים של שנת החמישים?",
    "answers": [
      "הכרזת היובל והדרור בארץ",
      "תחילת ספירת העומר",
      "פתיחת שנת השמיטה הראשונה",
      "תחילת העלייה לרגל לפסח"
    ],
    "correct": 0,
    "explanation": "התורה מצווה להעביר שופר ביום הכיפורים של שנת היובל ולקרוא דרור בארץ לכל יושביה.",
    "source": "ויקרא כ״ה, ט׳–י׳",
    "url": "https://www.sefaria.org/Leviticus.25.9-10"
  },
  {
    "category": "יום הכיפורים · משמעות התשובה",
    "question": "מה אומרת המשנה על מי שמתכנן ״אחטא ויום הכיפורים מכפר״?",
    "answers": [
      "אין יום הכיפורים מכפר לו",
      "די לו לצום כדי שתוכניתו תתקבל",
      "עליו להמתין רק לצאת הכוכבים",
      "אמירת כל נדרי מכפרת לו מיד"
    ],
    "correct": 0,
    "explanation": "אין להשתמש ביום הכיפורים כהיתר מתוכנן לחטוא. המשנה מדגישה את הצורך בתשובה כנה.",
    "source": "משנה יומא ח׳, ט׳",
    "url": "https://www.sefaria.org/Mishnah_Yoma.8.9"
  },
  {
    "category": "סוכות · ארבעת המינים",
    "question": "לפי רבי ישמעאל במשנה, מהו ההרכב המספרי של ארבעת המינים?",
    "answers": [
      "לולב אחד, אתרוג אחד, שלושה הדסים ושתי ערבות",
      "לולב אחד, אתרוג אחד, שני הדסים ושלוש ערבות",
      "לולב אחד, אתרוג אחד, הדס אחד וערבה אחת",
      "שני לולבים, אתרוג אחד, שלושה הדסים וערבה אחת"
    ],
    "correct": 0,
    "explanation": "רבי ישמעאל מונה שלושה הדסים, שתי ערבות, לולב אחד ואתרוג אחד — ההרכב המקובל בנטילה.",
    "source": "משנה סוכה ג׳, ד׳",
    "url": "https://www.sefaria.org/Mishnah_Sukkah.3.4"
  },
  {
    "category": "סוכות · הלכות סוכה",
    "question": "לפי המשנה, מה דינה של סוכה שחמתה מרובה מצילתה?",
    "answers": [
      "פסולה",
      "כשרה רק ביום הראשון",
      "כשרה אם יש לה ארבע דפנות",
      "כשרה אם היא נמוכה מעשרים אמה"
    ],
    "correct": 0,
    "explanation": "סוכה שבה השמש מרובה מן הצל אינה כשרה. גובה ודפנות אינם מתקנים חוסר מתאים בסכך.",
    "source": "משנה סוכה א׳, א׳",
    "url": "https://www.sefaria.org/Mishnah_Sukkah.1.1"
  },
  {
    "category": "סוכות · משנה",
    "question": "על מה נידון העולם בסוכות, לפי המשנה בראש השנה?",
    "answers": [
      "על המים",
      "על התבואה",
      "על פירות האילן",
      "על מעשר הבהמה"
    ],
    "correct": 0,
    "explanation": "המשנה מקשרת את סוכות לדין על המים, את פסח לתבואה ואת שבועות לפירות האילן.",
    "source": "משנה ראש השנה א׳, ב׳",
    "url": "https://www.sefaria.org/Mishnah_Rosh_Hashanah.1.2"
  },
  {
    "category": "סוכות · עבודת המקדש",
    "question": "איזה טקס מים מיוחד נערך על המזבח בחג הסוכות?",
    "answers": [
      "ניסוך המים",
      "ניסוך היין של פסח בלבד",
      "קידוש מי חטאת",
      "רחיצת המזבח במי מלח"
    ],
    "correct": 0,
    "explanation": "ניסוך המים הוא מעבודות חג הסוכות במקדש. המשנה מתארת שאיבת מים מן השילוח והבאתם לניסוך.",
    "source": "משנה סוכה ד׳, ט׳",
    "url": "https://www.sefaria.org/Mishnah_Sukkah.4.9"
  },
  {
    "category": "סוכות · מקרא",
    "question": "איזה טעם נותנת התורה למצוות הישיבה בסוכה?",
    "answers": [
      "זכר להושבת בני ישראל בסוכות ביציאת מצרים",
      "זכר למגורי אברהם בחרן",
      "זכר לבניית בית המקדש הראשון",
      "זכר למנוחת תיבת נח"
    ],
    "correct": 0,
    "explanation": "התורה מנמקת את המצווה בידיעת הדורות שה׳ הושיב את בני ישראל בסוכות בהוציאו אותם מארץ מצרים.",
    "source": "ויקרא כ״ג, מ״ב–מ״ג",
    "url": "https://www.sefaria.org/Leviticus.23.42-43"
  },
  {
    "category": "סוכות · לוח השנה",
    "question": "מה היחס בין שבעת ימי סוכות לבין שמיני עצרת?",
    "answers": [
      "שמיני עצרת בא אחריהם ומצוין כמקרא קודש נפרד",
      "שמיני עצרת הוא שמו האחר של הושענא רבה",
      "שמיני עצרת חל ביום השישי של סוכות",
      "שמיני עצרת חל רק אחת לשבע שנים"
    ],
    "correct": 0,
    "explanation": "התורה מצווה על סוכות במשך שבעה ימים, ולאחריהם על מקרא קודש ביום השמיני, הנקרא עצרת.",
    "source": "ויקרא כ״ג, ל״ד–ל״ו",
    "url": "https://www.sefaria.org/Leviticus.23.34-36"
  }
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
    $("review").open = false; $("progress").max = round.length; show("play"); render();
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
    history.push({ question: q.question, correct, picked: q.choices[option].text, answer: q.answers[q.correct], explanation: q.explanation, source: q.source, url: q.url });
    [...$("answers").children].forEach((button, i) => {
      button.disabled = true;
      if (q.choices[i].correct) { button.classList.add("correct"); button.firstChild.textContent = "✓"; button.setAttribute("aria-label", `${q.choices[i].text} — התשובה הנכונה`); }
      else if (i === option) { button.classList.add("wrong"); button.firstChild.textContent = "✕"; button.setAttribute("aria-label", `${q.choices[i].text} — התשובה שבחרתם אינה נכונה`); }
    });
    $("score").textContent = score; $("progress").value = index + 1;
    const title = document.createElement("strong"); title.textContent = correct ? "בדיוק! עוד 10 נקודות של מתיקות 🍯" : `עוד משהו שלמדנו! התשובה הנכונה: ${q.answers[q.correct]}.`;
    const explanation = document.createElement("p"); explanation.textContent = q.explanation;
    $("feedback").append(title, explanation, sourceLink(q));
    $("next").textContent = index === round.length - 1 ? "לתוצאות החידון ←" : "לשאלה הבאה ←";
    $("next").hidden = false; $("next").focus(); return true;
  }
  function sourceLink(item) {
    const link = document.createElement("a"); link.href = item.url; link.target = "_blank"; link.rel = "noopener noreferrer"; link.className = "source-link"; link.textContent = `מקור: ${item.source} ↗`; return link;
  }
  function next() {
    if (phase !== "play" || chosen === null) return false;
    index++;
    if (index < round.length) render(); else finish();
    return true;
  }
  function finish() {
    show("results");
    $("result-title").textContent = score / (round.length * 10) >= 0.8 ? "אלופי חגי תשרי!" : score / (round.length * 10) >= 0.55 ? "יש לכם ידע מרשים!" : "כל שאלה היא התחלה חדשה!";
    $("total").textContent = score; $("maximum").textContent = `מתוך ${round.length * 10} נקודות`; $("summary").textContent = `עניתם נכון על ${score / 10} מתוך ${round.length} שאלות.`;
    $("review-list").replaceChildren();
    history.forEach(item => {
      const li = document.createElement("li");
      const title = document.createElement("strong"); title.textContent = item.question;
      const status = document.createElement("p"); status.className = "review-status"; status.textContent = item.correct ? "✓ עניתם נכון" : `✕ בחרתם: ${item.picked}`;
      const answerText = document.createElement("p"); answerText.textContent = `התשובה: ${item.answer}. ${item.explanation}`;
      li.append(title, status, answerText, sourceLink(item)); $("review-list").append(li);
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
