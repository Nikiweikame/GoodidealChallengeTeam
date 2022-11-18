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
  }, 2000 / number);
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
  const number = legislatureJSON.length;
  const headerLegislaturePersonalBillElment = document.querySelector(
    ".header__number.personalbillnumber"
  );
  const mainLegislaturePersonalBillElment = document.querySelector(
    ".legislature__number.personalbillnumber"
  );
  const modifyMain = document.querySelector(".legislature__container.personalbillnumber");
  modifyMain.innerText = `法律主提案(${number})`;
  const modify = document.querySelector(".dropdown-item.personalbillnumber");
  modify.innerText = `法律主提案(${number})`;
  animateIt(headerLegislaturePersonalBillElment, number);
  animateIt(mainLegislaturePersonalBillElment, number);
  for (let i of legislatureJSON) {
    const text = `<article class="legislature__article">
    <h4>${i.fields["提案名稱"]}</h4>
    <h6>提案日期：${i.fields["提案日期"]}</h6>
    <h5>內容關鍵字：</h5>
    <p>${i.fields["內容關鍵字"]}</p>
  </article>`;
    let target = document.querySelectorAll(".legislature__personal_bill")[0];

    target.innerHTML += text;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  writeLegislaturePersonalBill,
  false
);

// Legislature cowork_bill 

async function writeCoworkBill() {
  async function GetCoworkBillJSON() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
    myHeaders.append("Cookie", "brw=brwGFqqqsO8NKxLWH");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    var output;
    var next;
    await fetch(
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%B3%95%E5%BE%8B%E5%85%B1%E5%90%8C%E6%8F%90%E6%A1%88?view=Grid%20view",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        output = result.records;
        next = result.offset;
      });
    // .catch((error) => console.log("error", error));

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
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%B3%95%E5%BE%8B%E5%85%B1%E5%90%8C%E6%8F%90%E6%A1%88?view=Grid%20view&offset=" +
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
        await getNext();
      }
    }
    await getNext();
    return output;
  }
  const coworkbillJSON = await GetCoworkBillJSON();
  const number = coworkbillJSON.length;
  // console.log(number)
  const headerCoworkbillJSONElement = document.querySelector(
    ".header__number.coworkbillnumber"
  );
  const mainCoworkbillJSONElement = document.querySelector(
    ".legislature__number.coworkbillnumber"
  );
  const modify = document.querySelector(".dropdown-item.coworkbillnumber");
  modify.innerText = `法律共同提案(${number})`;
  animateIt(headerCoworkbillJSONElement, number);
  animateIt(mainCoworkbillJSONElement, number);
  for (let i of coworkbillJSON) {
    const text = `<article class="legislature__article">
    <h4>${i.fields["提案名稱"]}</h4>
    <h6>提案日期：${i.fields["提案日期"]}</h6>
    <h5>內容關鍵字：</h5>
    <p>
    ${i.fields["內容關鍵字"]}
     </p>
  </article>`;
    let target = document.querySelector(".legislature__cowork_bill");

    target.innerHTML += text;
  }
}

document.addEventListener("DOMContentLoaded", writeCoworkBill, false);

// WrittenInterpellation 書面質詢

async function writeWrittenInterpellation() {
  async function GetWrittenInterpellationJSON() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
    myHeaders.append("Cookie", "brw=brwGFqqqsO8NKxLWH");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    var output;
    var next;
    await fetch(
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2?view=Grid%20view",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        output = result.records;
        next = result.offset;
      });
    // .catch((error) => console.log("error", error));

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
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2?view=Grid%20view&offset=" +
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
        await getNext();
      }
    }
    await getNext();
    return output;
  }
  const writtenInterpellationJSON = await GetWrittenInterpellationJSON();
  const number = writtenInterpellationJSON.length;
  // console.log(number)
  const headerCoworkbillJSONElement = document.querySelector(
    ".header__number.writtenInterpellationnumber"
  );
  const mainCoworkbillJSONElement = document.querySelector(
    ".legislature__number.writtenInterpellationnumber"
  );
  const modify = document.querySelector(".dropdown-item.writtenInterpellationnumber");
  modify.innerText = `書面質詢(${number})`;
  animateIt(headerCoworkbillJSONElement, number);
  animateIt(mainCoworkbillJSONElement, number);
  for (let i of writtenInterpellationJSON) {
    const text = `<article class="legislature__article">
    <h4>${i.fields["摘要"]}</h4>
    <h6>日期：${i.fields["日期"]}</h6>
    <h5>案由：</h5>
    <p>
    ${i.fields["案由"]}
     </p>
  </article>`;
    let target = document.querySelector(".legislature__written_interpellation");

    target.innerHTML += text;
  }
}

document.addEventListener("DOMContentLoaded", writeWrittenInterpellation, false);

// Legislature oral_interpellation
// oralInterpellation
// OralInterpellation

async function writeOralInterpellation() {
  async function GetOralInterpellationJSON() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
    myHeaders.append("Cookie", "brw=brwGFqqqsO8NKxLWH");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    var output;
    var next;
    await fetch(
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%8F%A3%E9%A0%AD%E8%B3%AA%E8%A9%A2?view=Grid%20view",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        output = result.records;
        next = result.offset;
      });
    // .catch((error) => console.log("error", error));

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
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%8F%A3%E9%A0%AD%E8%B3%AA%E8%A9%A2?view=Grid%20view&offset=" +
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
        await getNext();
      }
    }
    await getNext();
    return output;
  }
  const oralInterpellationJSON = await GetOralInterpellationJSON();
  const number = oralInterpellationJSON.length;
  // console.log(number)
  const headerOralInterpellationJSONElement = document.querySelector(
    ".header__number.oralinterpellationnumber"
  );
  const mainOralInterpellationJSONElement = document.querySelector(
    ".legislature__number.oralinterpellationnumber"
  );
  const modify = document.querySelector(".dropdown-item.oralinterpellationnumber");
  modify.innerText = `法律共同提案(${number})`;
  animateIt(headerOralInterpellationJSONElement, number);
  animateIt(mainOralInterpellationJSONElement, number);
  for (let i of oralInterpellationJSON) {
    const text = `<article class="legislature__article">
    <div class="legislature__box">
      <iframe width="428" height="226" src="https://www.youtube.com/embed/${i.fields[
        "YT連結/資料連結"
      ].slice(
        32,
        43
      )}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </div>
    <div class="legislature__box">
      <h4>${i.fields["title"]}</h4>
      <h6>質詢時間：${i.fields["質詢時間"]}</h6>
      <h5>主辦單位：${i.fields["主辦單位"]}</h5>
      <p>
      ${i.fields["內容大綱"]}
      </p>
    </div>
  </article>`;
    let target = document.querySelector(".legislature__oral_interpellation");

    target.innerHTML += text;
  }
}

document.addEventListener("DOMContentLoaded", writeOralInterpellation, false);

// LegislatureOthers
// othersnumber

async function writeLegislatureOthers() {
  async function GetLegislatureOthersJSON() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
    myHeaders.append("Cookie", "brw=brwGFqqqsO8NKxLWH");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    var output;
    var next;
    await fetch(
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%85%B6%E4%BB%96%E5%9C%8B%E6%9C%83%E7%99%BC%E8%A8%80?view=Grid%20view",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        output = result.records;
        next = result.offset;
      });
    // .catch((error) => console.log("error", error));

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
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%85%B6%E4%BB%96%E5%9C%8B%E6%9C%83%E7%99%BC%E8%A8%80?view=Grid%20view&offset=" +
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
        await getNext();
      }
    }
    await getNext();
    return output;
  }
  const LegislatureOthersJSON = await GetLegislatureOthersJSON();
  const number = LegislatureOthersJSON.length;
  console.log(number)
  const headerLegislatureOthersJSONElement = document.querySelector(
    ".header__number.othersnumber"
  );
  const mainLegislatureOthersJSONElement = document.querySelector(
    ".legislature__number.othersnumber"
  );
  const modify = document.querySelector(".dropdown-item.othersnumber");
  modify.innerText = `其他國會發言(${number})`;
  animateIt(headerLegislatureOthersJSONElement, number);
  animateIt(mainLegislatureOthersJSONElement, number);
  for (let i of LegislatureOthersJSON) {
    i.fields["事由"] = i.fields["事由"] ||  ""
    const text = `<article class="legislature__article">
    <div class="legislature__box">
      <iframe width="428" height="226" src="https://www.youtube.com/embed/${i.fields[
        "YT連結"
      ].slice(
        32,
        43
      )}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </div>
    <div class="legislature__box">
      <h4>事由：${i.fields["事由"]}</h4>
      <h6>提案日期：${i.fields["時間"]}</h6>
      <h5>主辦單位：${i.fields["主辦單位"]}</h5>
      <p>${i.fields["3Q問政"]}</p>
    </div>
  </article>`;
    let target = document.querySelector(".legislature__others");

    target.innerHTML += text;
  }
}

document.addEventListener("DOMContentLoaded", writeLegislatureOthers, false);

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
    var next;
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
        await getNext();
      }
    }
    await getNext();
    return output;
  }
  const socialWelfareJSON = await GetSocialWelfareJSON();
  const number = socialWelfareJSON.length;
  const headerNumber = document.querySelector(
    ".header__social-welfare .header__number"
  );
  animateIt(headerNumber, number);
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

const legislatureMainPage = document.querySelector(
  "section.legislature__aside"
);
legislatureitems[0].addEventListener(
  "click",
  () =>
    (legislatureMainPage.className = "legislature__aside personal_bill-appear")
);
legislatureitems[1].addEventListener(
  "click",
  () =>
    (legislatureMainPage.className = "legislature__aside cowork_bill-appear")
);
legislatureitems[2].addEventListener(
  "click",
  () =>
    (legislatureMainPage.className =
      "legislature__aside written_interpellation-appear")
);
legislatureitems[3].addEventListener(
  "click",
  () =>
    (legislatureMainPage.className =
      "legislature__aside oral_interpellation-appear")
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
