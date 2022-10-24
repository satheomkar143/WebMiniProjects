const quizData = [
  {
    que: "What is the size of byte variable?",
    a: "8 bit",
    b: "16 bit",
    c: "32 bit",
    d: "64 bit",
    correct: "a",
  },
  {
    que: "What is the default value of double variable?",
    a: "0.0d",
    b: "0.0f",
    c: "0",
    d: "not defined",
    correct: "a",
  },
  {
    que: "Method Overloading is an example of",
    a: "Static Binding.",
    b: "Dynamic Binding.",
    c: "Both of the above.",
    d: "None of the above.",
    correct: "a",
  },
  {
    que: "In which case, a program is expected to recover?",
    a: "If an error occurs.",
    b: "If an exception occurs.",
    c: "Both of the above.",
    d: "None of the above.",
    correct: "b",
  },
  {
    que: "Who invented Java Programming?",
    a: "Guido van Rossum",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b",
  },
  {
    que: "Which one of the following is not a Java feature?",
    a: "Object-oriented",
    b: "Use of pointers",
    c: "Portable",
    d: "Dynamic and Extensible",
    correct: "b",
  },
  {
    que: "Which exception is thrown when java is out of memory?",
    a: " MemoryError",
    b: "OutOfMemoryError",
    c: "MemoryOutOfBoundsException",
    d: "MemoryFullException",
    correct: "b",
  },
  {
    que: "Which of these are selection statements in Java?",
    a: "break",
    b: "continue",
    c: "for()",
    d: "if()",
    correct: "d",
  },
  {
    que: "Which of the following is a superclass of every class in Java?",
    a: "ArrayList",
    b: "Abstract class",
    c: "Object class",
    d: "String",
    correct: "c",
  },
  {
    que: "What is the numerical range of a char data type in Java?",
    a: "0 to 256",
    b: "-128 to 127",
    c: "0 to 65535",
    d: "0 to 32767",
    correct: "c",
  },
];

const quiz_no = document.getElementById("quiz-no");
const question = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submit = document.getElementById("btn");
const quiz_div = document.getElementById("quiz-container");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  let currentQuizData = quizData[currentQuiz];

  quiz_no.innerText = "Question: " + (currentQuiz + 1);
  question.innerText = currentQuizData.que;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function selectedAns() {
  let ans = undefined;
  const answers = document.getElementsByName("answer");
  answers.forEach((answer) => {
    // console.log("selectedAns");
    // console.log(answer.checked);
    if (answer.checked) {
      ans = answer.id;
      answer.checked = false;
    }
  });
  //console.log(ans);
  return ans;
}

submit.addEventListener("click", () => {
  // console.log("coe = "+ quizData[currentQuiz].correct)
  const userAns = selectedAns();

  if (userAns === quizData[currentQuiz].correct) {
    //  console.log("Correct");
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
    // console.log(currentQuiz);
  } else {
    //console.log("completed");
    //  quiz_div.innerHTML = "iiiiiiii"

    quiz_div.innerHTML = `<h2>Great Work !! Quiz Completed.</h2> <h1>Score : ${score} </h1>
    <button id='btn' onclick='location.reload()'>Restart</button>`;

    quiz_div.style.textAlign = "center";
  }
});
