function checkAnswer(day) {
  const input = document.getElementById('answer').value.trim();

  // Lösungen pro Tag festlegen
  const answers = {
    1: "Haus 4, um Mitternacht",
    2: "Geschenk",
    3: "Kompass",
    4: "Santa",
    5: "5+545=550",
    6: "Schneeflocke"
  };

  const successText = document.getElementById('success-text');

  if (input === answers[day]) {
    successText.classList.remove('hidden');
  } else {
    alert("Leider falsch, versuche es noch einmal!");
  }
}





