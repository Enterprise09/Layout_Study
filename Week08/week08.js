const People = {
  name: "ent",
  age: 21,
  job: "student",
  gender: "man",
};

const button = document.getElementById("button");

let visible = true;

function displayName() {
  document.getElementById("name").innerHTML = "이름 : " + People.name;
  document.getElementById("age").innerHTML = "나이 : " + People.age;
  document.getElementById("job").innerHTML = "직업 : " + People.job;
  document.getElementById("gender").innerHTML = "성별 : " + People.gender;
}

function onClick() {
  visible = !visible;
  console.log("button clicked! : " + visible);
  const target = document.getElementById("container");
  if (visible) {
    target.style.visibility = "visible";
  } else {
    target.style.visibility = "hidden";
  }
}

console.log("이름 : " + People.name);
displayName();
