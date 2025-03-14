function decideCareer(skills) {
    const { html, css, bootstrap, js, react, node } = skills;
  
    if (html && css && bootstrap && !js && !react && !node) {
      return "UI/UX Designer";
    } else if (html && css && bootstrap && js && react && !node) {
      return "Frontend Developer";
    } else if (html && css && bootstrap && js && node && !react) {
      return "Backend Developer";
    } else if (html && css && bootstrap && js && node && react) {
      return "Fullstack Developer";
    } else {
      return "Go and join 10000-coders";
    }
  }
  
  const studentSkills = {
    html: true,
    css: true,
    bootstrap: true,
    js: true,
    react: false,
    node: false,
  };
  
  console.log(decideCareer(studentSkills));
  
  
  
  
  
  
  
  
  
  
  
  
  
  