function guess() {
   var answer = Array(
    "Yes.",
    "No.",
    "My sources say no.",
    "Outlook so good.",
    "Yes,definitely.",
    "Most likely.",
    "As I see it,yes.",
    "It is decidely so.",
    "Don't count on it.",
    "Cannot predict now.",
    "Very doubtful.",
    "It is certain.",
    "Better not to tell you now.",
    "Look within.",
    "Yeah.",
    "Absolutely.",
    "idk.",
    "God bless you.",
    "Let me see.",
    "Sure. Why not",
   );

  var result = document.getElementById("result");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  result.textContent = answer [getRandomInt(0, 20)];
}