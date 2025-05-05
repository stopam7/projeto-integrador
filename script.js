function checkAnswers() {
    var score = 0;
    var totalQuestions = 3;
  
    // Respostas corretas
    var answers = {
      q1: "a", // /θɪŋk/
      q2: "b", // /ðɪs/
      q3: "a"  // /kæt/
    };
  
    // Checando as respostas
    for (var i = 1; i <= totalQuestions; i++) {
      var question = document.querySelector('input[name="q' + i + '"]:checked');
      if (question) {
        if (question.value === answers["q" + i]) {
          score++;
        }
      }
    }
  
    // Exibindo o resultado
    var resultText = "Você acertou " + score + " de " + totalQuestions + " perguntas.";
    if (score === totalQuestions) {
      resultText += " Parabéns, você está ótimo na pronúncia!";
    } else if (score > 0) {
      resultText += " Continue praticando e você vai melhorar!";
    } else {
      resultText += " Não desista, continue praticando!";
    }
  
    document.getElementById("result").innerText = resultText;
  }
  