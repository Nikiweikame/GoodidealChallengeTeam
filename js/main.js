// 數字變化js 

function animateIt(element,number) {
  var tick = 0;
  var timer = setInterval(function(){
    if (tick <= number) {
     AA.innerText = tick ;
      tick++;
    }
    else {
      clearInterval(timer); 
      }
  }, 10);
}

const bodyElement = document.querySelector("body");
console.log(bodyElement);
function bodyAddLegislature() {
  bodyElement.className = "legislatureappear";
}

const legislature = document.getElementsByClassName("header__legislature")[0];
legislature.addEventListener("click", bodyAddLegislature, false);

function bodyAddPetition() {
  // const bodyElement = document.querySelector("body");
  bodyElement.className = "petitionappear";
}

const petition = document.getElementsByClassName("header__petition")[0];
petition.addEventListener("click", bodyAddPetition, false);

function bodyDefault() {
  bodyElement.className = "";
}

const legislatureDisapearButton = document.querySelector(
  ".legislature--disapear"
);
legislatureDisapearButton.addEventListener("click", bodyDefault, false);

// Legislature personal_bill

async function writeLegislaturePersonalBill() {
  async function GetLegislaturePersonalBillJSON() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
    myHeaders.append("Cookie", "brw=brwGFqqqsO8NKxLWH");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    var output;
    await fetch(
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%B3%95%E5%BE%8B%E4%B8%BB%E6%8F%90%E6%A1%88?view=Grid%20view",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        output = result.records;
      })
      .catch((error) => console.log("error", error));
    return output;
  }
  const legislatureJSON = await GetLegislaturePersonalBillJSON();
  for (let i of legislatureJSON) {
    const text =`<article class="article"><h3>${i.fields["提案名稱"]}</h3><h4>提案日期：${i.fields["提案日期"]}</h4><h5>內容關鍵字：</h5><p>${i.fields["內容關鍵字"]}</p></article>`
    let target = document.querySelectorAll("div.personal_bill")[0];

    target.innerHTML+=text;
  }
}

document.addEventListener("DOMContentLoaded", writeLegislaturePersonalBill, false);


// Legislature cowork_bill


// Legislature oral_interpellation

// Legislature others


// legislature-button

function changeActivity() {
  function disappearActivty() {
    for (let i of AA) {
      i.classList.remove("actived");
    }
  }
  const AA = document.querySelectorAll("a.bullet");
  disappearActivty();
  this.classList.add("actived");
}

let legislatureitems = document.querySelectorAll("a.bullet");
let buttonActivity = new ButtonActivity()

for (let i of legislatureitems) {
    i.addEventListener("click",buttonActivity.click,false)
}

function ButtonActivity() {
  this.click = function () {
    function disappearActivty() {
      for (let i of AA) {
        i.classList.remove("actived");
      }
    }
    const AA = document.querySelectorAll("a.bullet");
    disappearActivty();
    this.classList.add("actived");
  };
}

// legislature-button-mainpage

const legislatureMainPage = document.querySelector("section.aside")
legislatureitems[0].addEventListener("click",()=>legislatureMainPage.className = "aside personal_bill-appear")
legislatureitems[1].addEventListener("click",()=>legislatureMainPage.className = "aside cowork_bill-appear")
legislatureitems[2].addEventListener("click",()=>legislatureMainPage.className = "aside oral_interpellation-appear")
legislatureitems[3].addEventListener("click",()=>legislatureMainPage.className = "aside others-appear")


// personal_bill
// cowork_bill
// oral_interpellation
// others

// 上任計時器

AAAA =  new Date(2020,2,1)
function getDistanceSpecifiedTime(dateTime) {
  // 指定日期和时间
  var EndTime = new Date(dateTime);
  // 当前系统时间
  var NowTime = new Date();
  var t = NowTime.getTime()-EndTime.getTime() ;
  // var y = Math.floor(t / 1000 / 60 / 60 / 24 / 365)
  var d = Math.floor(t / 1000 / 60 / 60 / 24 );
  var h = Math.floor(t / 1000 / 60 / 60 % 24);
  var m = Math.floor(t / 1000 / 60 % 60);
  var s = Math.floor(t / 1000 % 60);
  var html =  d + " 天" + h + " 时" + m + " 分" + s + " 秒";
  console.log(html,Date());
}
getDistanceSpecifiedTime(AAAA)
