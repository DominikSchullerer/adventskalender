function checkAnswer(day) {
  const input = document.getElementById('answer').value.trim().toLowerCase();

  // Lösungen pro Tag festlegen
  const answers = {
    1: "Haus 4, um Mitternacht",
    2: "weihnachten",
    3: "kerze",
  };

  const successText = document.getElementById('success-text');

  if (input === answers[day]) {
    successText.classList.remove('hidden');
  } else {
    alert("Leider falsch, versuche es noch einmal!");
  }
}

