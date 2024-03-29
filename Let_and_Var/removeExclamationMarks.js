function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }
  
  const originalString = "Hello! World!";
  const stringWithoutExclamationMarks = removeExclamationMarks(originalString);
  console.log(stringWithoutExclamationMarks); 
  