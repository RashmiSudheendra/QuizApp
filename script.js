const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


//Get all the elements whichever is needed

// quizcontainer
let quiz=document.getElementById('quiz')

//questionHeading
let questionHeading=document.getElementById('questionHeading')

//allOptionList

let optionList=document.querySelectorAll('.optionList')
console.log(optionList)

//eachOption Label

let aOption=document.getElementById('aOption')
let bOption=document.getElementById('bOption')
let cOption=document.getElementById('cOption')
let dOption=document.getElementById('dOption')

//submitButton

let submitbtn=document.getElementById('submit')

//________________________//
let score=0;
let currentQuizCount=0;

// console.log(quizData[currentQuizCount])

//1st queston loaded and displayed
loadQuiz()
//function to load quiz
function loadQuiz(){
    deSelectOption();
    let currentQuizData=quizData[currentQuizCount];
    questionHeading.innerText=currentQuizData.question;
    aOption.innerText=currentQuizData.a;
    bOption.innerText=currentQuizData.b;
    cOption.innerText=currentQuizData.c;
    dOption.innerText=currentQuizData.d;
}


//deSelectedOption
function deSelectOption(){
    optionList.forEach((element)=>{element.checked=false})
}

//Selection of the options.
function getSelected(){
    let selectedAnswer;
    optionList.forEach((element)=>{
        if(element.checked){
            selectedAnswer=element.id;
            // console.log(element.id)
        }
    })
    return selectedAnswer;
}
getSelected()

//Submit button
submitbtn.addEventListener("click",()=>{
    let answer = getSelected();
    console.log(answer)
    if(answer){
        if(answer===quizData[currentQuizCount].correct){
            score++;
        }
        currentQuizCount++;
        if(currentQuizCount<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=(
                `
                <h2 style="background-Color:orange; border-radius:5px;"> You scored ${score}/${quizData.length} </h2>
                <button class="btn btn-warning my-3" onClick=location.reload()>Reload</button>
                `
            )
            document.body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaZh_4FZtSwmao12xI78leiF-MqUaTcx4gjbawOsBnxueQVjGT1QW1e8TFlpizJ8x8Fs&usqp=CAU')"
            document.body.style.backgroundSize = "100%";
            quiz.style.backgroundColor="transparent";
            quiz.style.border="none";
        }     
    }
})

