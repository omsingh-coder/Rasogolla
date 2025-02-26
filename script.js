const quizQuestions = [
    { question: "Where did we first meet?", answer: "Telegram" },
    { question: "What is my favorite thing about you?", answer: "Smile" },
    { question: "Which place do I dream to visit with you?", answer: "Maldives" }
  ];
  
  function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    if (quizContainer) {
      quizQuestions.forEach((q, index) => {
        // Create question text
        const questionPara = document.createElement("p");
        questionPara.innerText = q.question;
        quizContainer.appendChild(questionPara);
        
        // Create input for answer
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = q${index};
        quizContainer.appendChild(inputField);
        
        // Add line break for spacing
        quizContainer.appendChild(document.createElement("br"));
      });
    }
  }
  
  function checkQuiz() {
    let allCorrect = true;
    quizQuestions.forEach((q, index) => {
      const input = document.getElementById(q${index});
      if (input) {
        const userAnswer = input.value.trim();
        if (userAnswer.toLowerCase() !== q.answer.toLowerCase()) {
          allCorrect = false;
        }
      }
    });
    
    const quizResultElement = document.getElementById("quizResult");
    if (allCorrect) {
      quizResultElement.style.color = "green";
      quizResultElement.innerText = "All answers are correct! Redirecting to your special gift...";
      setTimeout(() => {
        window.location.href = "gift.html";
      }, 1500);
    } else {
      quizResultElement.style.color = "red";
      quizResultElement.innerText = "Some answers are incorrect. Please try again.";
    }
  }
  
  function checkGiftCode() {
    const giftCodeInput = document.getElementById("giftCode").value.trim();
    const giftMessageElement = document.getElementById("giftMessage");
    if (giftCodeInput === "I Love You") {
      giftMessageElement.style.color = "green";
      giftMessageElement.innerText = "🎁 Surprise! I will always love you! ❤️";
      // Show next button on successful unlock
      const nextButton = document.getElementById("nextFromGift");
      if (nextButton) {
        nextButton.classList.remove("hidden");
      }
    } else {
      giftMessageElement.style.color = "red";
      giftMessageElement.innerText = "Incorrect code. Please try again.";
    }
  }
  
  window.onload = function() {
    // Load quiz questions only on quiz.html
    if (document.getElementById("quiz")) {
      loadQuiz();
    }
  };