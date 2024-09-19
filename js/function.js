function getInputFieldValueById(id){
    let inputValue =  document.getElementById(id).value;
    let convertNumber = Number(inputValue);
    return convertNumber;
  }