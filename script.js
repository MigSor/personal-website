const cursor = document.getElementById("cursor");
let greetings = `
Greetings, everyone! I'm Miguel Soriano, a Junior Web Developer
and Front-End Engineer actively seeking a role where I can
leverage my technical skills and collaborate as a valuable team
player. Let's build something amazing together!🚀`;

let greetingsArray = [...greetings];
let index = 0;

// add characters to the left of cursor span every 0.2s
let typing = setInterval(function () {
  cursor.append(greetingsArray[index]);
  if (index < greetingsArray.length - 1) {
    index++;
  } else if (index === greetingsArray.length - 1) {
    clearInterval(typing);
  }
}, 50);
