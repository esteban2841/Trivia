
function getInputValue (){
    let playerName = inputPlayerName.value
    if ( playerName !== "");{
        nickName = playerName
        console.log(nickName)
    }
}

function showCategories(){
    if(nickName !== ""){
        divMainContainer.classList.add("hidden")
        divCategories.classList.remove("hidden")
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
        showQuestions();
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


function sumPreguntaActiva(){
    preguntaActiva += 1
   
}

function createQuestions ( pregunta, categoria ){
    const questionNode = document.createElement('div')
    
    const questionString = `
                            
                            <p class= "question">
                                ${pregunta.pregunta}
                            </p>
                            <p class= "answer">
                                ${pregunta.respuestas}
                            </p>
                            <button class="btn-next-question">Next question</button>

    `
    questionNode.innerHTML = questionString
    buttonListener(questionNode, ".btn-next-question", ()=> {
        if(preguntaActiva < categoria.preguntas.length-1 ){
            console.log("questions")
            sumPreguntaActiva()
            displayQuestion(categoria)
        }else{
            console.log("categories")
            showCategories()

        }
    })

    return questionNode
}

function showQuestions(){
    divCategories.classList.add("hidden");
    // preguntas.shift()
    divQuestionsContainer.classList.remove("hidden")


}

const selectedCategory = {};


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
buttonHideFirstPanel.addEventListener("click",showCategories)

