// 数値を入力してボタンを押すとワニが出るよ
let addGator = () => {
    let theGatorMeter = document.getElementById("gatorMeter");
    theGatorMeter.append("🐊");
  };

  const btn = document.getElementsByClassName("gators")[0];
  const input = document.getElementsByTagName("input")[0];
  let num = 0;

  input.addEventListener("change",()=>{
        num = input.value;
  })
  
  btn.addEventListener("click", () => {
    num = input.value;
    for(let i = 0; i < num; i++){
        //addGator();
        setTimeout(() => {
            addGator()
        }, 100);
    }
  });
