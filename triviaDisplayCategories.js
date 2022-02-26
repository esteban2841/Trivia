
function getInputValue (){
    let playerName = inputPlayerName.value
    if ( playerName !== "");{
        nickName = playerName
        console.log(nickName)
    }
}

function showDivChose( divToShow ){
    if(nickName !== ""){
        divMainContainer.classList.add("hidden")
        divCategories.classList.add("hidden")
        divQuestionsContainer.classList.add("hidden")
        divResultado.classList.add("hidden")
        divToShow.classList.remove("hidden")
    }

    
}

//constructor de todas las categorias
function displayCategories(){
    divCategories.innerHTML = "";
    //recorrer toda la lista de categorias
        //por cada categoria crear un div 
        //insertar ese div en el container de categories

    categorias.forEach((categoria,index)=>{

        const newDivCategory = createCategory(categoria,index)
        
        divCategories.appendChild(newDivCategory)
    })

}


//create category
//objeto tipo categoria -> div 
function createCategory(category){

    const categoryNode = document.createElement('div')
    categoryNode.className = category.class
    const categoryString = `
                            <h1 class="main-title"> ${category.nombre} </h1>
                            <p>
                                ${category.descripcion}
                            </p>
                            <label for="submit">
                                <button class="button-player-name"> Lets Go! </button>
                            </label>

    `
    
    categoryNode.innerHTML = categoryString;
    
    buttonListener(categoryNode, ".button-player-name", ()=>{
        displayQuestion(category);
        showDivChose(divQuestionsContainer)
    });
    
    return categoryNode

}





function buttonListener( node, butonClass, functionToExecute) {
    //la funcion buton listener recibira una clase de un boton para seleccionar y devolvera un evento

    let btnClass = node.querySelector( butonClass )
    
    btnClass.addEventListener("click", functionToExecute )
    

}

function displayQuestion(categoria){
    
    divQuestionsContainer.innerHTML = "";
    //recorrer toda la lista de categorias
        //por cada categoria crear un div 
        //insertar ese div en el container de categories


    let pregunta = categoria.preguntas[preguntaActiva]
        
        const newDivQuestion = createQuestions( pregunta, categoria)
       
        divQuestionsContainer.appendChild(newDivQuestion)
        
    

}

// function divChildrenListener(divSelected){
//     let container = document.querySelector(divSelected)
//     console.log(container)
//     container.addEventListener("click", (evento)=>{
//         if(evento.target.classList.contains(categoria.preguntas[respuestaCorrecta])){
//             resultado += 1;

            
//         }
       
//     })
// }
function displayDivResultado(){
    let span = document.createElement("span")
    let botoncito = document.createElement("button")
    botoncito.className = "buton-return-categories"
    botoncito.textContent= "Return to Categories"
    span.innerText = `${nickName} tu puntaje es ${resultado} `
    divResultado.appendChild(span)
    divResultado.appendChild(botoncito)
    preguntaActiva = 0
    buttonListener(divResultado, ".buton-return-categories", ()=>{
        showDivChose(divCategories)
        resultado = 0
    })
    
}

function sumPreguntaActiva(){
    preguntaActiva += 1
   
}
function sumResultado(pregunta, respuestaClickeada){
    // pregunta es una lista
    // respuestaClickeada es un entero que viene de seleccionar el boton y acceder a la propiedad data-index
    if(pregunta.respuestaCorrecta == respuestaClickeada){
        resultado = resultado + pregunta.puntaje
    }
    
}
function createQuestions ( pregunta, categoria ){
    const questionNode = document.createElement('div')
    
    const questionString = `
                            
                            <p class= "question">
                                ${pregunta.pregunta}
                            </p>
                            <button data-index="0" class="answer-button" >
                                ${pregunta.respuestas[0]}
                            </button>
                            <button data-index="1" class="answer-button" >
                                ${pregunta.respuestas[1]}
                            </button>
                            <button data-index= "2" class="answer-button" >
                                ${pregunta.respuestas[2]}
                            </button>
                            
    `

    questionNode.innerHTML = questionString

   
    let btns= questionNode.querySelectorAll(".answer-button");
        btns.forEach((btn )=>{
            btn.addEventListener("click", (ev)=>{
            let selectedAnswerIndex = ev.target.dataset.index;
            sumResultado(pregunta, selectedAnswerIndex);
            if(preguntaActiva < categoria.preguntas.length-1 ){
        
                sumPreguntaActiva()
                displayQuestion(categoria)
                
            }else{
                displayDivResultado()
                showDivChose(divResultado)
                
            }
            // if(selectedAnswerIndex == pregunta.respuestaCorrecta){
            //     resultado = resultado + pregunta.puntaje;
            // }
        })
    })
    
    
    return questionNode
}




//cuando se seleccione el boton debe crear la pregunta 1 de cateroria 0

displayCategories(categorias);













//funcion show preguntas
    //esconde x
    //aparece y
    //displaypregunta


//show se ejecuta
    //apareceria el container de preguntas -> preguntas inicialmente vacio
    //show ejecuta displaypregunta
//display pregunta se ejecuta = 0
    //....
    //
    //
//funcion display preguntas
    //limpiar el html del container
    //crear la pregunta que este activa = 0
    //inserto la preugnta en el container...


//funcion siguientepregunta

    //insertar la respuesta en una lista

    //sumando +1 infinito?
        //solo sume si el numero + 1 no es mayor que el largo de las preguntas disponibles
        //displayPregunta

    //llegue al limite de preguntas
        //mostar el restulado total (puntaje)
        //recorro la lista de respuestas para validar todo una sola ejecucion


//funcion crear preguntas
    //crear un div
    //crear un string con el html de la pregunta
    //insertar el string en el innerhtml del div
    //queryelector del button
    //al boton añadirle el evento de siguientePregunta
    //retornar el div creado

buttonHideFirstPanel.addEventListener("click",getInputValue)
buttonHideFirstPanel.addEventListener("click",()=>{showDivChose(divCategories)}
)

