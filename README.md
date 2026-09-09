# 🍎 שנה של שאלות — טריוויה לחגי תשרי

משחק בעברית לכל המשפחה: 18 שאלות ברמה מתקדמת — שש על ראש השנה, שש על יום הכיפורים ושש על סוכות, 10 נקודות לתשובה נכונה, הסברים, הפניות למקורות וסיכום תשובות. סדר השאלות והתשובות מתחלף בכל משחק. אין הגבלת זמן.

## לשחק במחשב

פתחו את `dist/index.html` בדפדפן. אין צורך בהתקנה או בחיבור לאינטרנט.

אפשר גם להריץ שרת מקומי מתוך תיקיית הפרויקט:

```powershell
py -m http.server 8765 --bind 127.0.0.1 --directory dist
```

ולפתוח את http://127.0.0.1:8765.

## פרסום ב־GitHub Pages

קוד המקור נשמר בענף `main`. האתר מתפרסם מתוכן `dist` בענף `gh-pages`.
ב־**Settings → Pages** מקור הפרסום הוא **Deploy from a branch**, הענף **gh-pages** והתיקייה **/ (root)**.

לאחר עריכת קובצי המשחק, הריצו מתוך תיקיית הפרויקט:

```powershell
git add .
git commit -m "Update trivia game"
git push origin main
git subtree push --prefix dist origin gh-pages
```

כתובת המשחק וסטטוס הפרסום מופיעים ב־**Settings → Pages**. אין צורך בבנייה או במפתחות API. דחיפה ל־`main` לבדה שומרת את המקור; הפקודה האחרונה מעדכנת את האתר.

התבנית `examples/pages.yml.example` נשמרת כאפשרות עתידית לפרסום באמצעות Actions ואינה פעילה. להפעלתה יש להעתיק אותה אל `.github/workflows/pages.yml`, להשתמש בהרשאה המתאימה להעלאת workflows ולבחור **GitHub Actions** כמקור הפרסום.

הוראות רשמיות: [הגדרת מקור פרסום](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [פרסום באמצעות GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## קבצים ועריכה

- `dist/index.html` — מבנה מסכי המשחק.
- `dist/style.css` — עיצוב מותאם לעברית ולמסכים קטנים.
- `dist/game.js` — שאלות, תשובות ולוגיקת המשחק. לכל שאלה ארבע תשובות; `correct` מציין את מיקום התשובה הנכונה, החל מ־0.
- `examples/pages.yml.example` — תבנית אופציונלית לפרסום באמצעות Actions.
- `.openai/hosting.json` — תיאור תיקיית האתר לכלי Sites; אינו נדרש ל־GitHub Pages.

המשחק אינו אוסף פרטים, אינו שולח תשובות לשרת ואינו שומר ניקוד בין ביקורים. רענון מתחיל משחק חדש. האיורים הם אימוג׳י, ומראם תלוי במערכת ההפעלה. מנהגים עשויים להשתנות בין קהילות.
