function temHabilidade(skills) {
  if (skills.indexOf("Javascript") >= 0) {
    console.log("A skill existe: ", true);
  } else {
    console.log("A skill existe: ", false);
  }
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);
