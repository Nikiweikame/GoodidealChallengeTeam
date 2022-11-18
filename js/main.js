// 數字變化js

function animateIt(element, number) {
  var tick = 0;
  var timer = setInterval(function () {
    if (tick <= number) {
      element.innerText = tick;
      tick++;
    } else {
      clearInterval(timer);
    }
  }, 2000/number);
}
// 以後用datejs
// 區塊出現

const bodyElement = document.querySelector("body");
function bodyAddLegislature() {
  bodyElement.className = "legislature--appear";
}

const legislature = document.getElementsByClassName("header__legislature")[0];
legislature.addEventListener("click", bodyAddLegislature, false);

//

function bodyAddSocialWelfare() {
  bodyElement.className = "social-welfare--appear";
}

const socialWelfare = document.getElementsByClassName(
  "header__social-welfare"
)[0];
socialWelfare.addEventListener("click", bodyAddSocialWelfare, false);

function bodyAddPetition() {
  // const bodyElement = document.querySelector("body");
  bodyElement.className = "petitionappear";
}

const petition = document.getElementsByClassName("header__petition")[0];
petition.addEventListener("click", bodyAddPetition, false);

// 區塊消失

function bodyDefault() {
  bodyElement.className = "";
}

const legislatureDisapearButton = document.querySelector(
  ".legislature--disapear"
);
legislatureDisapearButton.addEventListener("click", bodyDefault, false);
//
const legislatureSocialWelfare = document.querySelector(
  ".Social-selfare--disapear"
);
legislatureSocialWelfare.addEventListener("click", bodyDefault, false);

// 資料匯入-Legislature
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
        // console.log(result);
        output = result.records;
        next = result.offset;
      });
    // .catch((error) => console.log("error", error));

    return output;
  }
  const legislatureJSON = await GetLegislaturePersonalBillJSON();
  for (let i of legislatureJSON) {
    const text = `<article class="article"><h3>${i.fields["提案名稱"]}</h3><h4>提案日期：${i.fields["提案日期"]}</h4><h5>內容關鍵字：</h5><p>${i.fields["內容關鍵字"]}</p></article>`;
    let target = document.querySelectorAll("div.personal_bill")[0];

    target.innerHTML += text;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  writeLegislaturePersonalBill,
  false
);

// Legislature cowork_bill

// Legislature oral_interpellation

// Legislature others

// legislature-button

// 資料匯入-social-welfare

async function writeSocialWelfare() {
  async function GetSocialWelfareJSON() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
    myHeaders.append("Cookie", "brw=brwJ0SI0UUvmgWbi6");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    var output;
    await fetch(
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%9C%B0%E6%96%B9%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8B%95?view=Grid%20view",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        output = result.records;
        next = result.offset;
      })
      .catch((error) => console.log("error", error));
    async function getNext() {
      if (next !== undefined) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
        myHeaders.append("Cookie", "brw=brwJ0SI0UUvmgWbi6");

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        var outputNext;
        await fetch(
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%9C%B0%E6%96%B9%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8B%95?view=Grid%20view&offset=" +
            next,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            // console.log(result);
            outputNext = result.records;
            next = result.offset;
          });
        output = output.concat(outputNext);
        await getNext()
      }
    }
    await getNext();
    return output;
  }
  const socialWelfareJSON = await GetSocialWelfareJSON();
  number = socialWelfareJSON.length;
  headerNumber = document.querySelector(".header__social-welfare .header__number")
  animateIt(headerNumber,number)
  // console.log(headerNumber)
  // console.log(number)
  for (let i of socialWelfareJSON) {
    const text = ` <tr><td class="social-welfare__common">${i.fields["性質"]}</td><td class="social-welfare__sp">${i.fields["活動名稱"]}<br/><br/>${i.fields["活動時間"]}</td><td class="social-welfare__pc">${i.fields["活動時間"]}</td><td class="social-welfare__pc">${i.fields["活動區域"]}</td><td class="social-welfare__pc">${i.fields["活動內容"]}</td></tr>`;
    let target = document.querySelector(".social-welfare__event tbody");

    target.innerHTML += text;
  }
}

document.addEventListener("DOMContentLoaded", writeSocialWelfare, false);

//

function changeActivity() {
  function disappearActivty() {
    for (let i of AA) {
      i.classList.remove("legislature__actived");
    }
  }
  const AA = document.querySelectorAll("a.legislature__bullet");
  disappearActivty();
  this.classList.add("legislature__actived");
}

let legislatureitems = document.querySelectorAll("a.legislature__bullet");
let buttonActivity = new ButtonActivity();

for (let i of legislatureitems) {
  i.addEventListener("click", buttonActivity.click, false);
}

function ButtonActivity() {
  this.click = function () {
    function disappearActivty() {
      for (let i of AA) {
        i.classList.remove("legislature__actived");
      }
    }
    const AA = document.querySelectorAll("a.legislature__bullet");
    disappearActivty();
    this.classList.add("legislature__actived");
  };
}

// legislature-button-mainpage

const legislatureMainPage = document.querySelector("section.legislature__aside");
legislatureitems[0].addEventListener(
  "click",
  () => (legislatureMainPage.className = "legislature__aside personal_bill-appear")
);
legislatureitems[1].addEventListener(
  "click",
  () => (legislatureMainPage.className = "legislature__aside cowork_bill-appear")
);
legislatureitems[2].addEventListener(
  "click",
  () => (legislatureMainPage.className = "legislature__aside written_interpellation-appear")
);
legislatureitems[3].addEventListener(
  "click",
  () => (legislatureMainPage.className = "legislature__aside oral_interpellation-appear")
);
legislatureitems[4].addEventListener(
  "click",
  () => (legislatureMainPage.className = "legislature__aside others-appear")
);

// personal_bill
// cowork_bill
// oral_interpellation
// others

// 上任計時器

AAAA = new Date(2020, 2, 1);
function getDistanceSpecifiedTime(dateTime) {
  // 指定日期和时间
  var EndTime = new Date(dateTime);
  // 当前系统时间
  var NowTime = new Date();
  var t = NowTime.getTime() - EndTime.getTime();
  // var y = Math.floor(t / 1000 / 60 / 60 / 24 / 365)
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  var m = Math.floor((t / 1000 / 60) % 60);
  var s = Math.floor((t / 1000) % 60);
  var html = d + " 天" + h + " 时" + m + " 分" + s + " 秒";
  // console.log(html,Date());
}
getDistanceSpecifiedTime(AAAA);

// 上任計時

function calcData() {
  const DataElement = document.querySelector(".header__term");
  const workData = new Date(2020, 2, 1);
  setInterval(() => {
    var NowTime = new Date();
    var t = NowTime.getTime() - workData.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor((t / 1000 / 60 / 60) % 24);
    var m = Math.floor((t / 1000 / 60) % 60);
    var s = Math.floor((t / 1000) % 60);
    // console.log(html, Date(),DataElement.innerText);
    DataElement.innerText = `上任第 ${d} 天 ${h} 時 ${m} 分 ${s}秒`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", calcData, false);

// Airtable api 後端分頁 處理
// 到底自動再打一次api
