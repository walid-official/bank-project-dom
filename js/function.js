function getInputFieldValueById(id){
    let inputValue =  document.getElementById(id).value;
    let convertNumber = Number(inputValue);
    return convertNumber;
}
function getTextFieldValueById(id){
    let inputInnerText =  document.getElementById(id).innerText;
    let convertTextNumber = Number(inputInnerText);
    return convertTextNumber;
}

