/* =====================================================================================
   MODERN HISTORY — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains Modern History questions. Edit ONLY this file to add/update
   Modern History questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "Modern History Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_MODERNHISTORY = {
  name: "Modern History",
  icon: "🗽",
  sets: [
    { title: "Modern History Set 1", questions: [
      {q:"The Revolt of 1857 first broke out at:", opts:["Delhi","Meerut","Kanpur","Lucknow"], correct:1},
      {q:"The Indian National Congress was founded in:", opts:["1875","1885","1905","1915"], correct:1},
      {q:"The Jallianwala Bagh massacre took place in:", opts:["1917","1919","1921","1930"], correct:1},
      {q:"Who gave the call 'Do or Die' during the Quit India Movement?", opts:["Jawaharlal Nehru","Subhas Chandra Bose","Mahatma Gandhi","Sardar Patel"], correct:2},
      {q:"India attained independence on:", opts:["15 August 1947","26 January 1947","2 October 1947","30 January 1948"], correct:0}
    ]}
  ]
};
