document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        // Nivel 1 - Preguntas 1-10
        [
            { question: "¿Quién es el fundador de Slytherin?", answers: ["Salazar Slytherin", "Godric Gryffindor", "Rowena Ravenclaw", "Helga Hufflepuff"], correct: 0 },
            { question: "¿Cuál es el color principal de Slytherin?", answers: ["Rojo", "Verde", "Azul", "Amarillo"], correct: 1 },
            { question: "¿Cuál es la mascota de Slytherin?", answers: ["León", "Tejón", "Serpiente", "Águila"], correct: 2 },
            { question: "¿En qué lugar se encuentra la Sala Común de Slytherin?", answers: ["Bajo el Gran Comedor", "En la Torre Oeste", "Bajo el Lago Negro", "En el Bosque Prohibido"], correct: 2 },
            { question: "¿Cuál es el lema de Slytherin?", answers: ["Audacia y Honor", "Sabiduría y Conocimiento", "Astucia y Ambición", "Trabajo y Lealtad"], correct: 2 },
            { question: "¿Cuál de estos personajes perteneció a Slytherin?", answers: ["Cedric Diggory", "Severus Snape", "Luna Lovegood", "Hermione Granger"], correct: 1 },
            { question: "¿Cuál es el elemento asociado a Slytherin?", answers: ["Agua", "Aire", "Fuego", "Tierra"], correct: 0 },
            { question: "¿Quién es el jefe de la casa Slytherin en la época de Harry Potter?", answers: ["Minerva McGonagall", "Severus Snape", "Filius Flitwick", "Pomona Sprout"], correct: 1 },
            { question: "¿Cómo se llama el heredero de Slytherin en 'La Cámara Secreta'?", answers: ["Draco Malfoy", "Lord Voldemort", "Lucius Malfoy", "Horace Slughorn"], correct: 1 },
            { question: "¿Cuál es la ubicación del dormitorio de Slytherin?", answers: ["Torre de Astronomía", "Cercano al Bosque Prohibido", "Bajo el Lago Negro", "En el Callejón Diagon"], correct: 2 },
        
        ],
        // Nivel 2 - Preguntas 11-20
        [
            { question: "¿Qué habilidad especial poseía Salazar Slytherin?", answers: ["Hablar Pársel", "Volar sin escoba", "Transformarse en Animago", "Controlar Dementores"], correct: 0 },
            { question: "¿Quién es el mejor amigo de Draco Malfoy?", answers: ["Neville Longbottom", "Vincent Crabbe", "Ron Weasley", "Fred Weasley"], correct: 1 },
            { question: "¿Cuál es el apellido de Tom Riddle?", answers: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"], correct: 3 },
            { question: "¿Cuál es la varita de Draco Malfoy?", answers: ["Sauco", "Espino", "Olmo", "Acebo"], correct: 2 },
            { question: "¿Quién creó la Cámara de los Secretos?", answers: ["Rowena Ravenclaw", "Salazar Slytherin", "Albus Dumbledore", "Lucius Malfoy"], correct: 1 },
            { question: "¿Qué poción enseña el Profesor Slughorn a Harry en su clase?", answers: ["Amortentia", "Felix Felicis", "Veritaserum", "Poción Multijugos"], correct: 1 },
            { question: "¿Cuál es el apellido de Bellatrix, prima de Sirius Black?", answers: ["Snape", "Lestrange", "Crouch", "Rookwood"], correct: 1 },
            { question: "¿Cómo se llama la tienda de varitas en el Callejón Diagon?", answers: ["Weasleys' Wizard Wheezes", "Flourish & Blotts", "Madame Malkin's", "Ollivanders"], correct: 3 },
            { question: "¿Qué posición juega Draco Malfoy en el equipo de Quidditch de Slytherin?", answers: ["Golpeador", "Buscador", "Cazador", "Guardián"], correct: 1 },
            { question: "¿Cuál es el ingrediente principal de la Poción Multijugos?", answers: ["Pelo de una persona", "Sangre de unicornio", "Escamas de dragón", "Piedra lunar"], correct: 0 },
        
        ],
        // Nivel 3 - Preguntas 21-30
        [
            { question: "¿Qué objeto mágico dejó Salazar Slytherin como legado para su heredero?", answers: ["La Espada de Gryffindor", "El Diario de Tom Riddle", "El Guardapelo de Slytherin", "La Varita de Saúco"], correct: 1 },
            { question: "¿Qué criatura guarda la Cámara de los Secretos?", answers: ["Un dragón", "Un basilisco", "Un hipogrifo", "Un thestral"], correct: 1 },
            { question: "¿Quién fue el primer mago conocido en poseer las tres Reliquias de la Muerte?", answers: ["Salazar Slytherin", "Albus Dumbledore", "Antioch Peverell", "Tom Riddle"], correct: 2 },
            { question: "¿Qué hechizo usó Harry Potter para matar al basilisco en la Cámara de los Secretos?", answers: ["Expelliarmus", "Avada Kedavra", "Sectumsempra", "Esto fue con la espada de Godric Gryffindor"], correct: 3 },
            { question: "¿Qué relación familiar tiene Narcisa Malfoy con Bellatrix Lestrange?", answers: ["Hermanas", "Primas", "Tía y sobrina", "Madre e hija"], correct: 0 },
            { question: "¿Qué habilidad especial tenía Merope Gaunt, descendiente de Slytherin?", answers: ["Metamorfomaga", "Animaga", "Hablar pársel", "Legilimencia"], correct: 2 },
            { question: "¿Qué objeto usó Regulus Black para reemplazar el guardapelo de Slytherin?", answers: ["Una copia falsa", "Una nota", "Un retrato", "Una roca común"], correct: 1 },
            { question: "¿Qué hechizo usó Draco Malfoy para reparar el Armario Evanescente?", answers: ["Reparo", "Oculus Reparo", "Harmonia Nectere Passus", "Evanesco"], correct: 2 },
            { question: "¿Quién es el autor del libro 'Magia Oscura: Una Guía para Protegerse'?", answers: ["Quirinus Quirrell", "Gilderoy Lockhart", "Severus Snape", "Horace Slughorn"], correct: 1 },
            { question: "¿Qué criatura es Nagini, la mascota de Voldemort?", answers: ["Un basilisco", "Una serpiente común", "Un Maledictus", "Un dragón"], correct: 2 },

        ],
        // Nivel 4 - Preguntas 31-40
        [
            { question: "¿Qué horrocrux fue destruido en la Cámara de los Secretos?", answers: ["El guardapelo de Slytherin", "El diario de Tom Riddle", "La copa de Hufflepuff", "La diadema de Ravenclaw"], correct: 1 },
            { question: "¿Qué hechizo usó Voldemort para crear su marca tenebrosa?", answers: ["Morsmordre", "Avada Kedavra", "Crucio", "Imperio"], correct: 0 },
            { question: "¿Quién fue el primer mago en descubrir la existencia de los horrocruxes?", answers: ["Herpo el Loco", "Salazar Slytherin", "Merlín", "Nicolás Flamel"], correct: 0 },
            { question: "¿Qué objeto usó Harry Potter para descubrir la verdad sobre el pasado de Voldemort?", answers: ["El pensadero", "El mapa del merodeador", "El diario de Tom Riddle", "El espejo de Oesed"], correct: 0 },
            { question: "¿Qué hechizo usó Snape para cortar la oreja de George Weasley?", answers: ["Sectumsempra", "Diffindo", "Confringo", "Reducto"], correct: 0 },
            { question: "¿Qué criatura es Aragog, que habita en el Bosque Prohibido?", answers: ["Un dragón", "Un thestral", "Una acromántula", "Un basilisco"], correct: 2 },
            { question: "¿Qué objeto usó Dumbledore para detectar la presencia de Voldemort en el Ministerio de Magia?", answers: ["El reloj de arena", "El detector de magia oscura", "El ojo mágico de Moody", "El mapa del merodeador"], correct: 1 },
            { question: "¿Qué hechizo usó Hermione para destruir la copa de Hufflepuff?", answers: ["Confringo", "Reducto", "Diffindo", "Sectumsempra"], correct: 1 },
            { question: "¿Qué relación tiene Sirius Black con Regulus Black?", answers: ["Hermanos", "Primos", "Tío y sobrino", "Padre e hijo"], correct: 0 },
            { question: "¿Qué objeto usó Voldemort para resucitar en el cuarto libro?", answers: ["La piedra filosofal", "El cáliz de fuego", "El hueso de su padre", "La sangre de Harry Potter"], correct: 2 }
        ]
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let currentLevel = 1;
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-btn");
    const scoreElement = document.getElementById("score");
    const resultSection = document.getElementById("result");
    const questionImage = document.getElementById("question-image");
    const levelSelection = document.getElementById("level-selection");
    const quizContainer = document.getElementById("quiz-container");
    const scoresSection = document.getElementById("scores-section");

    // Función para iniciar el quiz
    window.startQuiz = function(level) {
        currentLevel = level;
        currentQuestionIndex = 0;
        score = 0;
        levelSelection.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    };

    // Función para volver al menú principal
    window.returnToMenu = function() {
        levelSelection.classList.remove("hidden");
        quizContainer.classList.add("hidden");
        resultSection.classList.add("hidden");
        scoresSection.classList.add("hidden");
    };

    // Función para mostrar las puntuaciones
    window.showScores = function() {
        const results = JSON.parse(localStorage.getItem("quizResults")) || [];
        scoresSection.innerHTML = `
            <h2>Puntuaciones por nivel</h2>
            <div id="scores-tables">
                ${[1, 2, 3, 4].map(level => `
                    <h3>Nivel ${level}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Puntuación</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${results.filter(result => result.level === level).map(result => `
                                <tr>
                                    <td>${result.score} / ${questions[level - 1].length}</td>
                                    <td>${result.date}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                `).join("")}
            </div>
            <button onclick="returnToMenu()">Volver al menú 🏠</button>
        `;
        quizContainer.classList.add("hidden");
        resultSection.classList.add("hidden");
        scoresSection.classList.remove("hidden");
    };

    function loadQuestion() {
        if (currentQuestionIndex >= questions[currentLevel - 1].length) {
            endQuiz();
            return;
        }

        let currentQuestion = questions[currentLevel - 1][currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        questionImage.innerHTML = `<img src="${currentQuestion.image}" alt="Imagen de la pregunta">`;
        document.getElementById("progress").innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions[currentLevel - 1].length}`;
        answersElement.innerHTML = "";

        currentQuestion.answers.forEach((answer, index) => {
            let button = document.createElement("button");
            button.innerText = answer;
            button.onclick = () => checkAnswer(index);
            answersElement.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const buttons = answersElement.querySelectorAll("button");
        if (selectedIndex === questions[currentLevel - 1][currentQuestionIndex].correct) {
            score++;
            buttons[selectedIndex].style.backgroundColor = "#4CAF50"; // Verde para correcta
        } else {
            buttons[selectedIndex].style.backgroundColor = "#FF5252"; // Rojo para incorrecta
            setTimeout(() => endQuiz(), 1000); // Termina el quiz después de 1 segundo
            return; // Detiene la ejecución
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions[currentLevel - 1].length) {
                loadQuestion();
            } else {
                endQuiz();
            }
        }, 1000); // Espera 1 segundo antes de pasar a la siguiente pregunta
    }

    function endQuiz() {
        quizContainer.classList.add("hidden");
        resultSection.classList.remove("hidden");
        scoreElement.innerText = `Puntuación: ${score} / ${questions[currentLevel - 1].length}`;

        // Guardar el resultado en localStorage
        const results = JSON.parse(localStorage.getItem("quizResults")) || [];
        results.push({
            level: currentLevel,
            score: score,
            date: new Date().toLocaleString() // Fecha y hora actual
        });
        localStorage.setItem("quizResults", JSON.stringify(results));

        // Mostrar la tabla de resultados
        showResultsTable(results);
    }

    function showResultsTable(results) {
        const table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Nivel</th>
                    <th>Puntuación</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                ${results.map(result => `
                    <tr>
                        <td>${result.level}</td>
                        <td>${result.score} / ${questions[currentLevel - 1].length}</td>
                        <td>${result.date}</td>
                    </tr>
                `).join("")}
            </tbody>
        `;
        resultSection.appendChild(table);
    }

    window.restartQuiz = function() {
        currentQuestionIndex = 0;
        score = 0;
        resultSection.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();

        // Eliminar la tabla de resultados si existe
        const existingTable = resultSection.querySelector("table");
        if (existingTable) {
            existingTable.remove();
        }
    };

    // Configurar el botón "Siguiente"
    nextButton.onclick = () => {
        currentQuestionIndex++;
        loadQuestion();
    };
})