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

// 首頁數字變化

function numchange() {
  let A = document.querySelector(".header__number.personalbillnumber");
  animateIt(A, 19);
  let B = document.querySelector(".header__number.coworkbillnumber");
  animateIt(B, 16);
  let C = document.querySelector(".header__number.writtenInterpellationnumber");
  animateIt(C, 18);
  let D = document.querySelector(".header__number.oralinterpellationnumber");
  animateIt(D, 134);
  let E = document.querySelector(".header__number.othersnumber");
  animateIt(E, 5);
  let F = document.querySelector(".header__number.Fnumber");
  animateIt(F, 3011);
  let G = document.querySelector(".header__number.Gnumber");
  animateIt(G, 388);
  let H = document.querySelector(".header__number.Hnumber");
  animateIt(H, 222);
  let I = document.querySelector(".header__number.Inumber");
  animateIt(I, 224);
}
numchange();
// function numchange() {
//   var Airtable = require("airtable");
//   var base = new Airtable({ apiKey: "keyMauE9U1NpxdgKy" }).base(
//     "appoA2cEynkrD40GL"
//   );
//   var RC = 123
//   base("各資料數量")
//     .select({
//       // Selecting the first 3 records in Grid view:
//       maxRecords: 20,
//       view: "Grid view",
//     })
//     .eachPage(
//       function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.
//         RC =records;
//         records.forEach(function (record) {
//           console.log("Retrieved", record.get("名稱"), record.get("資料數量"));
//         });

//         // To fetch the next page of records, call `fetchNextPage`.
//         // If there are more records, `page` will get called again.
//         // If there are no more records, `done` will get called.
//         fetchNextPage();
//       },
//       function done(err) {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       }
//     );
//   return RC
// }

// var AAA = numchange()

// 以後用datejs
// 區塊出現
const bodyElement = document.querySelector("body");
function bodyAddLegislature() {
  bodyElement.className = "legislature--appear";
}

const legislature = document.getElementsByClassName("header__legislature")[0];
function jumpBlock() {
  legislature.addEventListener("click", bodyAddLegislature, false);

  // survey

  function bodyAddSurvey() {
    bodyElement.className = "survey--appear";
  }

  const survey = document.getElementsByClassName("header__survey")[0];
  survey.addEventListener("click", bodyAddSurvey, false);

  // SocialWelfare

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
}
document.addEventListener("DOMContentLoaded", jumpBlock, false);
// 區塊消失

function bodyDefault() {
  bodyElement.className = "";
}
// legislature
const legislatureDisapearButton = document.querySelector(
  ".legislature--disapear"
);
legislatureDisapearButton.addEventListener("click", bodyDefault, false);
// survey
const surveyDisapearButton = document.querySelector(".survey--disapear");
surveyDisapearButton.addEventListener("click", bodyDefault, false);
// Social-selfare
const legislatureSocialWelfare = document.querySelector(
  ".Social-selfare--disapear"
);
legislatureSocialWelfare.addEventListener("click", bodyDefault, false);

// legic title 切換

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
  // const headerLegislaturePersonalBillElment = document.querySelector(
  //   ".header__number.personalbillnumber"
  // );
  const mainLegislaturePersonalBillElment = document.querySelector(
    ".legislature__number.personalbillnumber"
  );
  const modifyMain = document.querySelector(
    ".legislature__container.personalbillnumber"
  );
  modifyMain.innerText = `法律主提案(${number})`;
  const modify = document.querySelector(".dropdown-item.personalbillnumber");
  modify.innerText = `法律主提案(${number})`;
  // animateIt(headerLegislaturePersonalBillElment, number);
  animateIt(mainLegislaturePersonalBillElment, number);
  let ii = 1 ;
  for (let i of legislatureJSON) {
    const text = `<article class="legislature__article">
    <h4>${ii}.${i.fields["提案名稱"]}</h4>
    <h6>提案日期：${i.fields["提案日期"]}</h6>
    <h5>內容關鍵字：</h5>
    <p>${i.fields["內容關鍵字"]}</p>
  </article>`;
    let target = document.querySelectorAll(".legislature__personal_bill")[0];
    ii++
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
  // const headerCoworkbillJSONElement = document.querySelector(
  //   ".header__number.coworkbillnumber"
  // );
  const mainCoworkbillJSONElement = document.querySelector(
    ".legislature__number.coworkbillnumber"
  );
  const modify = document.querySelector(".dropdown-item.coworkbillnumber");
  modify.innerText = `法律共同提案(${number})`;
  // animateIt(headerCoworkbillJSONElement, number);
  animateIt(mainCoworkbillJSONElement, number);

  let ii = 1 ;
  for (let i of coworkbillJSON) {
    const text = `<article class="legislature__article">
    <h4>${ii}.${i.fields["提案名稱"]}</h4>
    <h6>提案日期：${i.fields["提案日期"]}</h6>
    <h5>內容關鍵字：</h5>
    <p>
    ${i.fields["內容關鍵字"]}
     </p>
  </article>`;
    let target = document.querySelector(".legislature__cowork_bill");
    ii++
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
  // const headerCoworkbillJSONElement = document.querySelector(
  //   ".header__number.writtenInterpellationnumber"
  // );
  const mainCoworkbillJSONElement = document.querySelector(
    ".legislature__number.writtenInterpellationnumber"
  );
  const modify = document.querySelector(
    ".dropdown-item.writtenInterpellationnumber"
  );
  modify.innerText = `書面質詢(${number})`;
  // animateIt(headerCoworkbillJSONElement, number);
  animateIt(mainCoworkbillJSONElement, number);
  let ii = 1 ;
  for (let i of writtenInterpellationJSON) {
    const text = `<article class="legislature__article">
    <h4>${ii}.${i.fields["摘要"]}</h4>
    <h6>日期：${i.fields["日期"]}</h6>
    <h5>案由：</h5>
    <p>
    ${i.fields["案由"]}
     </p>
  </article>`;
    let target = document.querySelector(".legislature__written_interpellation");
    ii++;
    target.innerHTML += text;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  writeWrittenInterpellation,
  false
);

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
  // const headerOralInterpellationJSONElement = document.querySelector(
  //   ".header__number.oralinterpellationnumber"
  // );
  const mainOralInterpellationJSONElement = document.querySelector(
    ".legislature__number.oralinterpellationnumber"
  );
  const modify = document.querySelector(
    ".dropdown-item.oralinterpellationnumber"
  );
  modify.innerText = `口頭質詢(${number})`;
  // animateIt(headerOralInterpellationJSONElement, number);
  animateIt(mainOralInterpellationJSONElement, number);
  // console.log(1);
  legislature.addEventListener("click", function () {
    legislature.removeEventListener("click", arguments.callee);
    let oralPlace = {
      院會: "A",
      財政委員會: "B",
      內政委員會: "C",
      交通委員會: "D",
      經濟委員會: "E",
      外交及國防委員會: "F",
      司法及法制委員會: "G",
      教育及文化委員會: "H",
      社會福利及衛生環境委員會: "I",
    };
    // console.log(2);
    for (let i of oralInterpellationJSON) {
      i.fields["YT連結/資料連結"] = i.fields["YT連結/資料連結"] || "";
      // console.log("i", oralInterpellationJSON.indexOf(i));
      let tempString = i.fields["主辦單位"];
      // console.log(
      //   oralPlace[tempString],
      //   oralPlace[i.fields["主辦單位"]],
      //   "oral-" + oralPlace[i.fields["主辦單位"]],
      //   i.fields["主辦單位"],
      //   i
      // );
      let text;
      if (i.fields["YT連結/資料連結"].includes("youtube")) {
        text = `<article class="legislature__article oral-${
          oralPlace[i.fields["主辦單位"]]
        }">
    <a href="https://www.youtube.com/watch?v=${i.fields[
      "YT連結/資料連結"
    ].slice(32, 43)}" class="legislature__box">
    <div class="legislature__box-background" data-src="https://www.youtube.com/embed/${i.fields[
      "YT連結/資料連結"
    ].slice(
      32,
      43
    )}" style="background-image: url(https://i.ytimg.com/vi/${i.fields[
          "YT連結/資料連結"
        ].slice(32, 43)}/hqdefault.jpg);">
    <svg height="48" width="68" version="1.1" viewBox="0 0 68 48">
      <path
        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
        fill="#fe0001"></path>
      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
    </svg>
  </div>
</a>`;
      } else if (i.fields["YT連結/資料連結"].length === 0) {
        text = `<article class="legislature__article oral-${
          oralPlace[i.fields["主辦單位"]]
        }">
        <div class="legislature__box legislature__no-link">
          <p>3Q問政中</p>
        </div>`;
      } else {
        text = `<article class="legislature__article oral-${
          oralPlace[i.fields["主辦單位"]]
        }">
        <div class="legislature__box legislature__vedio-link">
          <a href="${i.fields["YT連結/資料連結"]}">3Q問政連結</a>
        </div> `;
      }
      text += `<div class="legislature__box">
      <h4>${i.fields["title"]}</h4>
      <h6>質詢時間：${i.fields["質詢時間"]}</h6>
      <h5>主辦單位：${i.fields["主辦單位"]}</h5>
      <p>
      ${i.fields["內容大綱"]}
      </p>
    </div>
  </article>`;
      // console.log(3, text);
      let target = document.querySelector(".legislature__oral_interpellation");

      target.innerHTML += text;
    }
    let title = document.querySelector(".legislature__container.oral-title");
    let titleList = document.querySelectorAll(".oral-All .dropdown-item");
    let titleContainer = document.querySelector(
      ".legislature__oral_interpellation.oral-All"
    );
    let oralPPlace = {
      主辦單位: "",
      院會: "-A",
      財政委員會: "-B",
      內政委員會: "-C",
      交通委員會: "-D",
      經濟委員會: "-E",
      外交及國防委員會: "-F",
      司法及法制委員會: "-G",
      教育及文化委員會: "-H",
      社會福利及衛生環境委員會: "-I",
    };
    let oralArray = [
      "主辦單位",
      "院會",
      "財政委員會",
      "內政委員會",
      "交通委員會",
      "經濟委員會",
      "外交及國防委員會",
      "司法及法制委員會",
      "教育及文化委員會",
      "社會福利及衛生環境委員會",
    ];
    for (let i = 0; i < titleList.length; i++) {
      // console.log(titleList[i],title.textContent)
      titleList[i].addEventListener("click", function () {
        let tempclassname = "oral-All" + oralPPlace[oralArray[i]];
        titleContainer.classList.remove("oral-All");
        titleContainer.classList.remove("oral-All-A");
        titleContainer.classList.remove("oral-All-B");
        titleContainer.classList.remove("oral-All-C");
        titleContainer.classList.remove("oral-All-D");
        titleContainer.classList.remove("oral-All-E");
        titleContainer.classList.remove("oral-All-F");
        titleContainer.classList.remove("oral-All-G");
        titleContainer.classList.remove("oral-All-H");
        titleContainer.classList.remove("oral-All-I");
        titleContainer.classList.add(tempclassname);
        title.textContent = oralArray[i];
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", writeOralInterpellation, false);

// oral-list

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
  // console.log(number);
  // const headerLegislatureOthersJSONElement = document.querySelector(
  //   ".header__number.othersnumber"
  // );
  const mainLegislatureOthersJSONElement = document.querySelector(
    ".legislature__number.othersnumber"
  );
  const modify = document.querySelector(".dropdown-item.othersnumber");
  modify.innerText = `其他國會發言(${number})`;
  // animateIt(headerLegislatureOthersJSONElement, number);
  animateIt(mainLegislatureOthersJSONElement, number);
  legislature.addEventListener("click", function loadingPage() {
    for (let i of LegislatureOthersJSON) {
      i.fields["事由"] = i.fields["事由"] || "";
      const text = `<article class="legislature__article">
    <a href="https://www.youtube.com/watch?v=${i.fields["YT連結"].slice(
      32,
      43
    )}" class="legislature__box">
    <div class="legislature__box-background" data-src="https://www.youtube.com/embed/${i.fields[
      "YT連結"
    ].slice(
      32,
      43
    )}" style="background-image: url(https://i.ytimg.com/vi/${i.fields[
        "YT連結"
      ].slice(32, 43)}/hqdefault.jpg);">
    <svg height="48" width="68" version="1.1" viewBox="0 0 68 48">
      <path
        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
        fill="#fe0001"></path>
      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
    </svg>
  </div>
</a>
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
    legislature.removeEventListener("click", arguments.callee);
  });
}

document.addEventListener("DOMContentLoaded", writeLegislatureOthers, false);

// legislature-button-modify

function legislatureButtonModify() {
  const modifyMain = document.querySelector(
    ".legislature__container.personalbillnumber"
  );
  const personalbillnumber = document.querySelector(
    ".dropdown-item.personalbillnumber"
  );
  const coworkbillnumber = document.querySelector(
    ".dropdown-item.coworkbillnumber"
  );
  const writtenInterpellationnumber = document.querySelector(
    ".dropdown-item.writtenInterpellationnumber"
  );
  const oralinterpellationnumber = document.querySelector(
    ".dropdown-item.oralinterpellationnumber"
  );
  const othersnumber = document.querySelector(".dropdown-item.othersnumber");
  // const legislatureMainPage = document.querySelector(
  //   "section.legislature__aside"
  // );
  personalbillnumber.addEventListener("click", () => {
    legislatureMainPage.className = "legislature__aside personal_bill-appear";
    modifyMain.innerText = personalbillnumber.innerText;
  });
  coworkbillnumber.addEventListener("click", () => {
    legislatureMainPage.className = "legislature__aside cowork_bill-appear";
    modifyMain.innerText = coworkbillnumber.innerText;
  });
  writtenInterpellationnumber.addEventListener("click", () => {
    legislatureMainPage.className =
      "legislature__aside written_interpellation-appear";
    modifyMain.innerText = writtenInterpellationnumber.innerText;
  });
  oralinterpellationnumber.addEventListener("click", () => {
    legislatureMainPage.className =
      "legislature__aside oral_interpellation-appear";
    modifyMain.innerText = oralinterpellationnumber.innerText;
  });
  othersnumber.addEventListener("click", () => {
    legislatureMainPage.className = "legislature__aside others-appear";
    modifyMain.innerText = othersnumber.innerText;
  });
}
document.addEventListener("DOMContentLoaded", legislatureButtonModify, false);

// survey 頁面切換

function surveyitemsctivity() {
  let surveyitems = document.querySelectorAll(".survey__nav-item");
  let buttonActivity = new ButtonActivity();
  for (let i of surveyitems) {
    i.addEventListener("click", buttonActivity.click, false);
  }

  function ButtonActivity() {
    this.click = function () {
      function disappearActivty() {
        for (let i of AA) {
          i.classList.remove("surveyitems__actived");
        }
      }
      const AA = document.querySelectorAll(".survey__nav-item");
      disappearActivty();
      this.classList.add("surveyitems__actived");
    };
  }
}

function mainChange() {
  let main = document.querySelector(".survey__main");
  let surveyitems = document.querySelectorAll(".survey__nav-item");
  surveyitems[0].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__represent--appear";
    },
    false
  );
  surveyitems[1].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__first--appear";
    },
    false
  );
  surveyitems[2].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__second--appear";
    },
    false
  );
  surveyitems[3].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__third--appear";
    },
    false
  );
  surveyitems[4].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__all--appear";
    },
    false
  );
}

document.addEventListener("DOMContentLoaded", surveyitemsctivity, false);
document.addEventListener("DOMContentLoaded", mainChange, false);

// 資料匯入-survey 會勘

async function writeSurvey() {
  async function GetSurveyJSON() {
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
  const SurveyJSON = await GetSurveyJSON();
  const number = SurveyJSON.length;
  // console.log(number);
  // const headerSurveyJSONElement = document.querySelector(
  //   ".header__number.othersnumber"
  // );
  const mainSurveyJSONElement = document.querySelector(
    ".legislature__number.othersnumber"
  );
  const modify = document.querySelector(".dropdown-item.othersnumber");
  modify.innerText = `其他國會發言(${number})`;
  // animateIt(headerSurveyJSONElement, number);
  animateIt(mainSurveyJSONElement, number);
  legislature.addEventListener("click", function loadingPage() {
    for (let i of SurveyJSON) {
      i.fields["事由"] = i.fields["事由"] || "";
      const text = `<article class="legislature__article">
    <a href="https://www.youtube.com/watch?v=${i.fields["YT連結"].slice(
      32,
      43
    )}" class="legislature__box">
    <div class="legislature__box-background" data-src="https://www.youtube.com/embed/${i.fields[
      "YT連結"
    ].slice(
      32,
      43
    )}" style="background-image: url(https://i.ytimg.com/vi/${i.fields[
        "YT連結"
      ].slice(32, 43)}/hqdefault.jpg);">
    <svg height="48" width="68" version="1.1" viewBox="0 0 68 48">
      <path
        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
        fill="#fe0001"></path>
      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
    </svg>
  </div>
</a>
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
    legislature.removeEventListener("click", arguments.callee);
  });
}

// document.addEventListener("DOMContentLoaded", writeSurvey, false);

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
  // const headerNumber = document.querySelector(
  //   ".header__social-welfare .header__number"
  // );
  // animateIt(headerNumber, number);
  for (let i of socialWelfareJSON) {
    i.fields["活動內容"] = i.fields["活動內容"] || "";
    const text = /*html*/ `<div class="sw__table-row">
    <div class="sw__table-cell sw__table-cell-common">${i.fields["性質"]}</div>
    <div class="sw__table-cell sw__table-cell-sp">${i.fields["活動名稱"]} ${i.fields["活動時間"]}</div>
    <div class="sw__table-cell sw__table-cell-pc sw__table-cell-pcA">${i.fields["活動時間"]}</div>
    <div class="sw__table-cell sw__table-cell-pc sw__table-cell-pcB">${i.fields["活動區域"]}</div>
    <div class="sw__table-cell sw__table-cell-pc sw__table-cell-pcC">${i.fields["活動內容"]}</div>
  </div>`;
    // ;
    // /*html*/` <tr><td class="social-welfare__common">${i.fields["性質"]}</td><td class="social-welfare__sp">${i.fields["活動名稱"]}<br/><br/>${i.fields["活動時間"]}</td><td class="social-welfare__pc">${i.fields["活動時間"]}</td><td class="social-welfare__pc">${i.fields["活動區域"]}</td><td class="social-welfare__pc">${i.fields["活動內容"]}</td></tr>`;
    let target = document.querySelector(".sw__table-body");

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
  const DataElement2 = document.querySelector(".header__term2");
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
  setInterval(() => {
    var NowTime = new Date();
    var t = NowTime.getTime() - workData.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor((t / 1000 / 60 / 60) % 24);
    var m = Math.floor((t / 1000 / 60) % 60);
    var s = Math.floor((t / 1000) % 60);
    // console.log(html, Date(),DataElement.innerText);
    DataElement2.innerText = `上任第 ${d} 天 ${h} 時 ${m} 分 ${s}秒`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", calcData, false);

// Airtable api 後端分頁 處理
// 到底自動再打一次api

// 留言板

function updataMessageBoard() {
  console.log(123);

  // const name = document.querySelector(".name");
  // const phone = document.querySelector(".phone");
  // const mailOrId = document.querySelector(".mailOrId");
  name123 = "54684684";
  phone = "8768768";
  mailOrId = "46464";
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyMauE9U1NpxdgKy" }).base(
    "app54OxpaINAvPrfL"
  );
  console.log(124);
  base("市民好聲音").create(
    {
      稱呼: name123,
      手機號碼: phone,
      "email/Line ID": mailOrId,
    },
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record.getId());
    }
  );
  console.log(125);
}

// updataMessageBoard()

// 監聽送出元素，並顯示謝謝你的訊息
