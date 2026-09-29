const questions = [
  {
    q:"수업이 끝나고 기숙사에 돌아왔다. 가장 먼저 하는 행동은?",
    speech:"오늘도 수고했어요!",
    a:[
      ["방을 한번 둘러보고 어질러진 물건부터 정리한다.","clean"],
      ["침대에 누워 휴대폰을 확인한다.","rest"],
      ["룸메이트에게 오늘 뭐 하는지 물어본다.","social"],
      ["오늘 해야 할 과제나 공부부터 확인한다.","focus"]
    ]
  },
  {
    q:"공용 주방이나 세면공간을 사용하고 나왔다. 나는?",
    speech:"다음 사람도 생각해요!",
    a:[
      ["사용한 곳을 바로 정리하고 나온다.","clean"],
      ["필요한 것만 빠르게 처리하고 방으로 돌아간다.","night"],
      ["다른 사람과 이야기하다가 정리를 잊을 때도 있다.","social"],
      ["다음에 사용할 때 불편하지 않도록 필요한 것만 챙긴다.","plan"]
    ]
  },
  {
    q:"내일 오전 8시 수업이 있다면?",
    speech:"아침 준비도 중요해요!",
    a:[
      ["자기 전에 가방과 옷까지 미리 준비한다.","plan"],
      ["알람만 맞춰놓고 최대한 늦게까지 잔다.","rest"],
      ["친구에게 깨워달라고 부탁한다.","social"],
      ["과제나 공부를 하다가 늦게 자게 된다.","night"]
    ]
  },
  {
    q:"룸메이트가 새벽 1시에 영상을 보고 있다면?",
    speech:"서로의 생활시간을 존중해요.",
    a:[
      ["조용히 해달라고 차분하게 이야기한다.","clean"],
      ["이어폰을 사용해 달라고 부탁한다.","plan"],
      ["나도 같이 볼까? 하고 말을 건다.","social"],
      ["일단 참다가 너무 시끄러우면 이야기한다.","night"]
    ]
  },
  {
    q:"시험기간이 되었다! 가장 먼저 하는 일은?",
    speech:"시험기간 파이팅!",
    a:[
      ["책상과 주변부터 깨끗하게 정리한다.","clean"],
      ["침대나 방에서 편하게 공부할 환경을 만든다.","rest"],
      ["친구들과 함께 공부할 장소를 찾는다.","social"],
      ["공부 계획을 세우고 할 일을 나눈다.","focus"]
    ]
  },
  {
    q:"기숙사 생활을 하면서 가장 중요하게 생각하는 것은?",
    speech:"당신의 기준은 무엇인가요?",
    a:[
      ["깨끗하고 정돈된 공간","clean"],
      ["편하게 쉴 수 있는 나만의 시간","rest"],
      ["함께 지낼 사람들과의 좋은 관계","social"],
      ["시간과 생활을 효율적으로 관리하는 것","plan"]
    ]
  },
  {
    q:"갑자기 친구가 '지금 기숙사에서 같이 놀자!'라고 한다면?",
    speech:"친구가 찾아왔어요!",
    a:[
      ["방을 먼저 정리하고 맞이한다.","clean"],
      ["오늘은 방에서 쉬고 싶어서 다음에 만나자고 한다.","rest"],
      ["좋아! 바로 같이 놀자고 한다.","social"],
      ["오늘 일정부터 확인하고 가능한 시간을 정한다.","plan"]
    ]
  },
  {
    q:"밤 11시, 아직 해야 할 일이 남아 있다면?",
    speech:"아직 하루가 끝나지 않았어요.",
    a:[
      ["내일로 미루지 않고 마무리한다.","focus"],
      ["일단 쉬고 내일 아침에 한다.","rest"],
      ["친구와 이야기하면서 같이 처리한다.","social"],
      ["늦은 시간이라도 집중해서 끝낸다.","night"]
    ]
  },
  {
    q:"기숙사비나 생활비를 사용할 때 나는?",
    speech:"생활비도 꼼꼼하게!",
    a:[
      ["월별 예산을 정해두고 관리한다.","plan"],
      ["필요한 것만 사고 충동구매를 줄이려고 한다.","plan"],
      ["친구들과 함께 먹고 노는 데 돈을 쓰는 편이다.","social"],
      ["편하게 쓸 수 있는 생활용품이나 먹거리에 투자한다.","rest"]
    ]
  },
  {
    q:"휴일에 기숙사에 혼자 남게 되었다면?",
    speech:"혼자 있는 시간도 좋아요.",
    a:[
      ["밀린 빨래와 청소를 한다.","clean"],
      ["침대에서 영화나 드라마를 몰아본다.","rest"],
      ["다른 기숙사생에게 같이 놀자고 연락한다.","social"],
      ["평소 못 했던 공부나 자기계발을 한다.","focus"]
    ]
  },
  {
    q:"새로운 기숙사에 처음 입주했다. 가장 먼저 확인할 것은?",
    speech:"새로운 공간을 탐색해볼까요?",
    a:[
      ["수납공간과 물건을 놓을 위치","clean"],
      ["침대와 휴식공간이 얼마나 편한지","rest"],
      ["공용공간과 사람들이 모이는 장소","social"],
      ["공지사항, 시설 이용방법, 생활규칙","plan"]
    ]
  },
  {
    q:"내 기숙사 생활을 한마디로 표현한다면?",
    speech:"마지막 질문이에요!",
    a:[
      ["정리되어 있을 때 가장 편안하다.","clean"],
      ["기숙사는 나에게 최고의 휴식공간이다.","rest"],
      ["사람들과 함께할 때 기숙사 생활이 더 즐겁다.","social"],
      ["내 생활은 내가 계획하고 관리하는 편이다.","plan"]
    ]
  }
];

const types = {
  clean:{
    tag:"🧹 깔끔정돈형",
    title:"정리된 공간에서 행복을 찾는 기숙사생!",
    one:"물건은 제자리에, 사용한 공간은 바로 정리! 쾌적한 환경이 편안한 기숙사 생활의 시작인 타입이에요.",
    traits:["물건의 위치가 정해져 있으면 마음이 편해요.","사용한 공간은 바로 정리하는 편이에요.","공용공간을 사용할 때 다음 사람을 생각해요.","룸메이트와 생활할 때 청결과 배려를 중요하게 생각해요."],
    tip:"하루에 5분씩만 정리 시간을 정해보세요. 완벽하게 정리하려 하기보다 자주 조금씩 정리하면 쾌적한 공간을 오래 유지할 수 있어요."
  },
  rest:{
    tag:"🛋️ 집콕휴식형",
    title:"기숙사를 나만의 아늑한 휴식공간으로 만드는 타입!",
    one:"수업과 일정을 마친 뒤에는 편안한 방에서 나만의 시간을 보내는 걸 좋아해요.",
    traits:["혼자만의 시간이 충전의 시간이 돼요.","방에서 영화·음악·독서 등을 즐기는 편이에요.","편안한 침구와 휴식공간을 중요하게 생각해요.","무리한 약속보다 충분한 휴식을 선호해요."],
    tip:"휴식시간과 공부시간을 구분해보세요. 방에서 쉬는 시간이 확실해지면 짧은 시간에도 더 편하게 충전할 수 있어요."
  },
  focus:{
    tag:"📚 집중몰입형",
    title:"목표가 생기면 깊게 몰입하는 기숙사생!",
    one:"기숙사에서도 나만의 루틴을 만들고, 해야 할 일에 집중하는 힘이 있는 타입이에요.",
    traits:["해야 할 일을 정해두면 마음이 편해요.","시험기간이나 마감이 가까워지면 집중력이 높아져요.","공부할 수 있는 환경을 스스로 만들어요.","시간을 의미 있게 사용하는 것을 중요하게 생각해요."],
    tip:"공부에 몰입할수록 쉬는 시간도 함께 계획해보세요. 짧은 휴식과 수면을 확보하면 꾸준한 루틴을 만드는 데 도움이 돼요."
  },
  social:{
    tag:"👫 소셜활동형",
    title:"사람과 함께할 때 기숙사 생활이 더 즐거운 타입!",
    one:"룸메이트와 이야기하고 친구들과 어울리며 기숙사에서 좋은 추억을 만드는 것을 좋아해요.",
    traits:["새로운 사람과 친해지는 데 거리낌이 적어요.","공용공간이나 기숙사 행사에 관심이 많아요.","친구와 함께 먹고 공부하고 노는 것을 좋아해요.","혼자보다 함께할 때 즐거움을 크게 느껴요."],
    tip:"즐거운 만큼 서로의 생활시간과 개인공간도 존중해 주세요. 작은 배려가 오래 편안한 관계를 만드는 데 도움이 돼요."
  },
  night:{
    tag:"🌙 야행성자유형",
    title:"밤이 되면 본격적으로 활동을 시작하는 타입!",
    one:"늦은 시간에 오히려 집중이 잘 되고, 나만의 리듬으로 하루를 보내는 편이에요.",
    traits:["밤 시간에 집중력이 올라가는 편이에요.","늦은 시간까지 과제·영상·취미를 즐겨요.","아침보다 저녁과 밤이 더 편해요.","생활시간이 다른 사람과 지낼 때 배려가 중요하다는 걸 알아요."],
    tip:"야간 활동을 할 때는 소음과 빛을 특히 조심해 주세요. 이어폰, 무음 설정, 조명 조절처럼 작은 배려만으로도 함께 편안하게 지낼 수 있어요."
  },
  plan:{
    tag:"🎯 알뜰계획형",
    title:"기숙사 생활도 계획적으로 운영하는 타입!",
    one:"생활비부터 일정, 필요한 물건까지 미리 생각하며 효율적인 기숙사 생활을 만들어가요.",
    traits:["해야 할 일과 일정을 미리 정리하는 편이에요.","생활비와 소비를 계획적으로 관리해요.","필요한 물건을 미리 준비하는 편이에요.","기숙사 생활에서 효율과 실용성을 중요하게 생각해요."],
    tip:"계획을 너무 촘촘하게 세우기보다 예상치 못한 일정이 생길 여유도 남겨보세요. 계획과 유연함을 함께 챙기면 더 편안해요."
  }
};

let current = 0;
let answers = Array(questions.length).fill(null);

const screens = [...document.querySelectorAll(".screen")];
const show = id => screens.forEach(s => s.classList.toggle("active", s.id === id));

function renderQuestion(){
  const item = questions[current];
  document.getElementById("questionNumber").textContent = `Q${current+1}`;
  document.getElementById("questionText").textContent = item.q;
  document.getElementById("progressText").textContent = `${current+1} / ${questions.length}`;
  const pct = Math.round(((current+1)/questions.length)*100);
  document.getElementById("progressPercent").textContent = `${pct}%`;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("mascotSpeech").textContent = item.speech;
  const box = document.getElementById("answers");
  box.innerHTML = "";
  item.a.forEach((answer,i)=>{
    const btn = document.createElement("button");
    btn.className = "answer" + (answers[current] === i ? " selected" : "");
    btn.textContent = answer[0];
    btn.onclick = () => selectAnswer(i);
    box.appendChild(btn);
  });
}

function selectAnswer(i){
  answers[current] = i;
  document.querySelectorAll(".answer").forEach((b,n)=>b.classList.toggle("selected",n===i));
  setTimeout(()=>{
    if(current < questions.length-1){ current++; renderQuestion(); }
    else finish();
  },180);
}

function finish(){
  show("loading");
  setTimeout(showResult,850);
}

function getScores(){
  const score = {clean:0,rest:0,focus:0,social:0,night:0,plan:0};
  answers.forEach((ans,qi)=>{
    if(ans !== null) score[questions[qi].a[ans][1]]++;
  });
  return score;
}

function showResult(){
  const score = getScores();
  // Stable tie-breaking order keeps results deterministic.
  const order = ["clean","rest","focus","social","night","plan"];
  const winner = order.reduce((best,k)=>score[k] > score[best] ? k : best, order[0]);
  const type = types[winner];
  document.getElementById("resultTag").textContent = type.tag;
  document.getElementById("resultTitle").textContent = type.title;
  document.getElementById("resultOneLiner").textContent = type.one;
  document.getElementById("traits").innerHTML = type.traits.map(t=>`<li>${t}</li>`).join("");
  document.getElementById("tip").textContent = type.tip;
  const labels = {clean:"정리",rest:"휴식",focus:"집중",social:"사교",night:"야간",plan:"계획"};
  document.getElementById("scoreBars").innerHTML = order.map(k=>{
    const pct = Math.round(score[k]/questions.length*100);
    return `<div class="score-row"><div class="score-label"><span>${labels[k]}</span><span>${pct}%</span></div><div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div></div>`;
  }).join("");
  window.lastResult = type;
  window.lastType = winner;
  show("result");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.getElementById("startBtn").onclick=()=>{
  current=0; answers=Array(questions.length).fill(null); renderQuestion(); show("quiz"); window.scrollTo({top:0});
};
document.getElementById("backBtn").onclick=()=>{
  if(current>0){current--;renderQuestion();}
};
document.getElementById("retryBtn").onclick=()=>{
  current=0; answers=Array(questions.length).fill(null); renderQuestion(); show("quiz"); window.scrollTo({top:0});
};
document.getElementById("copyBtn").onclick=async()=>{
  const text=`나의 기숙사 유형은 ${window.lastResult.tag}\n${window.lastResult.title}\n\n${window.lastResult.one}\n\n행복기숙사 나의 기숙사 유형 테스트`;
  try{await navigator.clipboard.writeText(text); showToast("결과 문구를 복사했어요!");}
  catch(e){showToast("복사 기능을 사용할 수 없어요.");}
};
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);}
