
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



buttonHideFirstPanel.addEventListener("click",getInputValue)
buttonHideFirstPanel.addEventListener("click",showCategories)