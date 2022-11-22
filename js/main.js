// 數字變化js

function animateIt(element, number) {
  // var tick = 0;
  if (number < 300) {
    var tick = 0;
    var A = 1;
  } else {
    tick = number - 300;
    var A = 5;
  }
  var timer = setInterval(function () {
    if (tick <= number) {
      element.innerText = tick;
      tick = tick + A;
    } else {
      element.innerText = number;
      clearInterval(timer);
    }
  }, 2000 / 500);
}

// 首頁數字變化

function numchange() {
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
        "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?view=Grid%20view",
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
            "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?view=Grid%20view&offset=" +
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
    // const number = socialWelfareJSON.length;
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
      let target = document.querySelector(".sw__table-body");
    }
    let A = document.querySelector(".header__number.personalbillnumber");
    animateIt(A, socialWelfareJSON[11].fields["資料數量"]);
    let B = document.querySelector(".header__number.coworkbillnumber");
    animateIt(B, socialWelfareJSON[10].fields["資料數量"]);
    let C = document.querySelector(
      ".header__number.writtenInterpellationnumber"
    );
    animateIt(C, socialWelfareJSON[9].fields["資料數量"]);
    let D = document.querySelector(".header__number.oralinterpellationnumber");
    animateIt(D, socialWelfareJSON[8].fields["資料數量"]);
    let E = document.querySelector(".header__number.othersnumber");
    animateIt(E, socialWelfareJSON[7].fields["資料數量"]);
    let F = document.querySelector(".header__number.Fnumber");
    animateIt(F, socialWelfareJSON[0].fields["資料數量"]);
    let G = document.querySelector(".header__number.Gnumber");
    animateIt(G, socialWelfareJSON[6].fields["資料數量"]);
    let H = document.querySelector(".header__number.Hnumber");
    animateIt(H, socialWelfareJSON[13].fields["資料數量"]);
    let I = document.querySelector(".header__number.Inumber");
    animateIt(I, socialWelfareJSON[5].fields["資料數量"]);
  }
  writeSocialWelfare();
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
    "header__social-welfare-hover"
  )[0];
  socialWelfare.addEventListener("click", bodyAddSocialWelfare, false);
    
  function bodyAddPetition() {
    // const bodyElement = document.querySelector("body");
    bodyElement.className = "petition--appear";
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
  let ii = 1;
  for (let i of legislatureJSON) {
    const text = `<article class="legislature__article">
    <h4>${ii}.${i.fields["提案名稱"]}</h4>
    <h6>提案日期：${i.fields["提案日期"]}</h6>
    <h5>內容關鍵字：</h5>
    <p>${i.fields["內容關鍵字"]}</p>
  </article>`;
    let target = document.querySelectorAll(".legislature__personal_bill")[0];
    ii++;
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

  let ii = 1;
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
    ii++;
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
  let ii = 1;
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
    ].slice(32, 43)}" target="_blank" class="legislature__box">
    <div class="legislature__box-background" data-src="https://www.youtube.com/embed/${i.fields[
      "YT連結/資料連結"
    ].slice(
      32,
      43
    )}"  target="_blank" style="background-image: url(https://i.ytimg.com/vi/${i.fields[
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
          <a href="${
            i.fields["YT連結/資料連結"]
          }" target="_blank">3Q問政連結</a>
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
    )}" target="_blank"  class="legislature__box">
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
  let modify = document.querySelector(".survey__nav-modify .survey__btn-main");
  let modifyitem = document.querySelectorAll(
    ".survey__nav-modify .dropdown-item"
  );
  let surveyitems = document.querySelectorAll(".survey__nav-item");
  surveyitems[0].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__represent--appear";
    },
    false
  );
  modifyitem[0].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__represent--appear";
      modify.innerText = modifyitem[0].innerText;
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
  modifyitem[1].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__first--appear";
      modify.innerText = modifyitem[1].innerText;
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
  modifyitem[2].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__second--appear";
      modify.innerText = modifyitem[2].innerText;
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
  modifyitem[3].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__third--appear";
      modify.innerText = modifyitem[3].innerText;
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
  modifyitem[4].addEventListener(
    "click",
    function () {
      main.className = "survey__main survey__all--appear";
      modify.innerText = modifyitem[4].innerText;
    },
    false
  );
}

document.addEventListener("DOMContentLoaded", surveyitemsctivity, false);
document.addEventListener("DOMContentLoaded", mainChange, false);

// 資料匯入-survey 會勘

async function writeSurvey1() {
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
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD?view=Grid%20view",
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
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD?view=Grid%20view&offset=" +
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
  const mainSurveyJSONElement = document.querySelector(
    ".legislature__number.othersnumber"
  );
  let place = {
    龍井: "SULA",
    大肚: "SULB",
    烏日: "SULC",
    霧峰: "SULD",
    沙鹿: "SULE",
  };
  for (let i of SurveyJSON) {
    // i.fields["建設標題"] = i.fields["事由"] || "";
    let changeL = place[i.fields["陳情來源／區域"]];
    const text = /*html*/ `<div class="survey__represent-container ${changeL}">
                <h3>${i.fields["建設標題"]}</h3>
                <span>陳情來源/區域：${i.fields["陳情來源／區域"]}</span>
                <span>主責單位：${i.fields["主責單位"]}</span>
                <!-- <p>標題</p> -->
                <!-- <p> 案件內容： </p> -->
                <p>${i.fields["案件內容"]}
                </p>
                <a href="${i.fields["案件內容"]}">相關連結</a>
              </div>`;
    let target = document.querySelector(".survey__represent");

    target.innerHTML += text;
  }
  let surveyTarget = document.querySelector(".survey__represent");
  let surveylistname = document.querySelector(
    ".survey__represent .survey__btn-main"
  );
  let surveybtn0 = document.querySelectorAll(
    ".survey__represent .dropdown-item"
  )[0];
  surveybtn0.addEventListener("click", function () {
    surveyTarget.className = "survey__represent";
    surveyTarget.classList.add("survey--ALL");
    surveylistname.innerText = "地區";
  });
  let surveybtn1 = document.querySelectorAll(
    ".survey__represent .dropdown-item"
  )[1];
  surveybtn1.addEventListener("click", function () {
    surveyTarget.className = "survey__represent";
    surveyTarget.classList.add("survey--SULA");
    surveylistname.innerText = "龍井";
  });
  let surveybtn2 = document.querySelectorAll(
    ".survey__represent .dropdown-item"
  )[2];
  surveybtn2.addEventListener("click", function () {
    surveyTarget.className = "survey__represent";
    surveyTarget.classList.add("survey--SULB");
    surveylistname.innerText = "大肚";
  });
  let surveybtn3 = document.querySelectorAll(
    ".survey__represent .dropdown-item"
  )[3];
  surveybtn3.addEventListener("click", function () {
    surveyTarget.className = "survey__represent";
    surveyTarget.classList.add("survey--SULC");
    surveylistname.innerText = "烏日";
  });
  let surveybtn4 = document.querySelectorAll(
    ".survey__represent .dropdown-item"
  )[4];
  surveybtn4.addEventListener("click", function () {
    surveyTarget.className = "survey__represent";
    surveyTarget.classList.add("survey--SULD");
    surveylistname.innerText = "霧峰";
  });
  let surveybtn5 = document.querySelectorAll(
    ".survey__represent .dropdown-item"
  )[5];
  surveybtn5.addEventListener("click", function () {
    surveyTarget.className = "survey__represent";
    surveyTarget.classList.add("survey--SULE");
    surveylistname.innerText = "沙鹿";
  });
}

document.addEventListener("DOMContentLoaded", writeSurvey1, false);

// writeSurvey2
async function writeSurvey2() {
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
      "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%9C%83%E5%8B%98%E5%8F%8A%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD(%E7%AC%AC%E4%B8%80%E6%9C%83%E6%9C%9F)?view=Grid%20view",
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
          "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%9C%83%E5%8B%98%E5%8F%8A%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD(%E7%AC%AC%E4%B8%80%E6%9C%83%E6%9C%9F)?view=Grid%20view&offset=" +
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
  let place = {
    霧峰: "SU1LA",
    龍井: "SU1LB",
    烏日: "SU1LC",
    沙鹿: "SU1LD",
    大肚: "SU1LE",
  };
  let porp = {
    會勘: "SU1AA",
    爭取地方建設: "SU1BB",
    協調會: "SU1CC",
    公聽會: "SU1DD",
  };
  for (let i of SurveyJSON) {
    // i.fields["建設標題"] = i.fields["事由"] || "";
    let imgplace = /*html*/ "";
    // console.log(i.fields["當天照片"], i.fields["當天照片"].length);
    if (i.fields["當天照片"] !== undefined) {
      let imgNumber = i.fields["當天照片"].length;
      if (window.innerWidth < 992) {
        // console.log(screen.availWidth);
        imgNumber = imgNumber - 3;
      } else {
        imgNumber = imgNumber - 4;
        // console.log(screen.availWidth);
      }
      for (let p = 0; p < i.fields["當天照片"].length; p++) {
        imgplace += /*html*/ `<div class="survey__img">
                    <img
                      src="${i.fields["當天照片"][p]["url"]}">
                    <div class="survey__less">+${imgNumber}
                    </div>
                  </div>`;
      }
    }
    let propA = porp[i.fields["性質"]];
    let placeB = place[i.fields["區域"]];
    const text = /*html*/ `<div class="survey__first-container survey--img-less ${propA} ${placeB}">
                <h3>${i.fields["內容"]}</h3>
                <span>區域：${i.fields["區域"]}</span>
                <span>辦理日期：${i.fields["辦理日期"]}</span>
                <span>參與單位：${i.fields["參與單位"]}</span>
                <span>性質：${i.fields["性質"]}</span>
                <p>${i.fields["結論"]}</p>
                <div class="survey__img-container">
                  ${imgplace}
                </div>
              </div>
            </div>`;
    let target = document.querySelector(".survey__first");

    target.innerHTML += text;
  }
  let surveyTarget = document.querySelector(".survey__first");
  let surveylistname = document.querySelector("#survey__first-1list .survey__btn-main")
  let surveylistitem = document.querySelectorAll("#survey__first-1list .dropdown-item")
  surveylistitem[0].addEventListener("click",function(){
    surveylistname.innerText=surveylistitem[0].innerText;
    surveyTarget.classList.remove("survey__first--All")
    surveyTarget.classList.remove("survey__first--AA")
    surveyTarget.classList.remove("survey__first--BB")
    surveyTarget.classList.remove("survey__first--CC")
    surveyTarget.classList.remove("survey__first--DD")
    surveyTarget.classList.add("survey__first--All")
  },false)
  surveylistitem[1].addEventListener("click",function(){
    surveylistname.innerText=surveylistitem[1].innerText;
    surveyTarget.classList.remove("survey__first--All")
    surveyTarget.classList.remove("survey__first--AA")
    surveyTarget.classList.remove("survey__first--BB")
    surveyTarget.classList.remove("survey__first--CC")
    surveyTarget.classList.add("survey__first--AA")
  },false)
  surveylistitem[2].addEventListener("click",function(){
    surveylistname.innerText=surveylistitem[2].innerText;
    surveyTarget.classList.remove("survey__first--All")
    surveyTarget.classList.remove("survey__first--AA")
    surveyTarget.classList.remove("survey__first--BB")
    surveyTarget.classList.remove("survey__first--CC")
    surveyTarget.classList.remove("survey__first--DD")
    surveyTarget.classList.add("survey__first--BB")
  },false)
  surveylistitem[3].addEventListener("click",function(){
    surveylistname.innerText=surveylistitem[3].innerText;
    surveyTarget.classList.remove("survey__first--All")
    surveyTarget.classList.remove("survey__first--AA")
    surveyTarget.classList.remove("survey__first--BB")
    surveyTarget.classList.remove("survey__first--CC")
    surveyTarget.classList.remove("survey__first--DD")
    surveyTarget.classList.add("survey__first--CC")
  },false)
  surveylistitem[4].addEventListener("click",function(){
    surveylistname.innerText=surveylistitem[4].innerText;
    surveyTarget.classList.remove("survey__first--All")
    surveyTarget.classList.remove("survey__first--AA")
    surveyTarget.classList.remove("survey__first--BB")
    surveyTarget.classList.remove("survey__first--CC")
    surveyTarget.classList.remove("survey__first--DD")
    surveyTarget.classList.add("survey__first--DD")
  },false)
  let surveylistname2 = document.querySelector("#survey__first-2list .survey__btn-main")
  let surveylistitem2 = document.querySelectorAll("#survey__first-2list .dropdown-item")
  function clearAll(){
    surveyTarget.classList.remove("survey__first--C-L")
    surveyTarget.classList.remove("survey__first--C-A")
    surveyTarget.classList.remove("survey__first--C-B")
    surveyTarget.classList.remove("survey__first--C-C")
    surveyTarget.classList.remove("survey__first--C-D")
    surveyTarget.classList.remove("survey__first--C-E")
  }
  surveylistitem2[0].addEventListener("click",function(){
    surveylistname2.innerText=surveylistitem2[0].innerText;
    clearAll();
    surveyTarget.classList.add("survey__first--C-L")
  },false)
  surveylistitem2[1].addEventListener("click",function(){
    surveylistname2.innerText=surveylistitem2[1].innerText;
    clearAll();
    surveyTarget.classList.add("survey__first--C-A")
  },false)
  surveylistitem2[2].addEventListener("click",function(){
    surveylistname2.innerText=surveylistitem2[2].innerText;
    clearAll();
    surveyTarget.classList.add("survey__first--C-B")
  },false)
  surveylistitem2[3].addEventListener("click",function(){
    surveylistname2.innerText=surveylistitem2[3].innerText;
    clearAll();
    surveyTarget.classList.add("survey__first--C-C")
  },false)
  surveylistitem2[4].addEventListener("click",function(){
    surveylistname2.innerText=surveylistitem2[4].innerText;
    clearAll();
    surveyTarget.classList.add("survey__first--C-D")
  },false)
  surveylistitem2[5].addEventListener("click",function(){
    surveylistname2.innerText=surveylistitem2[5].innerText;
    clearAll();
    surveyTarget.classList.add("survey__first--C-E")
  },false)

  // let surveybtn0 = document.querySelectorAll(
  //   ".survey__represent .dropdown-item"
  // )[0];
  // surveybtn0.addEventListener("click",function(){
  //   surveyTarget.className="survey__represent";
  //   surveyTarget.classList.add("survey--ALL");
  //   surveylistname.innerText="地區"
  // })
}

document.addEventListener("DOMContentLoaded", writeSurvey2, false);

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

AAAA = new Date(2020, 1, 1);
function getDistanceSpecifiedTime(dateTime) {
  // 指定日期和时间
  var EndTime = new Date(2020, 1, 1);
  // 当前系统时间
  var NowTime = new Date();
  var t = NowTime.getTime() - EndTime.getTime();
  // var y = Math.floor(t / 1000 / 60 / 60 / 24 / 365)
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  var m = Math.floor((t / 1000 / 60) % 60);
  var s = Math.floor((t / 1000) % 60);
  var html = d + " 天" + h + " 时" + m + " 分" + s + " 秒";
  console.log(html, Date());
}
// getDistanceSpecifiedTime(AAAA);

// 上任計時

function calcData() {
  const DataElement = document.querySelector(".header__term");
  const DataElement2 = document.querySelector(".header__term2");
  const workData = new Date(2020, 1, 1);
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
  // setInterval(() => {
  //   var NowTime = new Date();
  //   var t = NowTime.getTime() - workData.getTime();
  //   var d = Math.floor(t / 1000 / 60 / 60 / 24);
  //   var h = Math.floor((t / 1000 / 60 / 60) % 24);
  //   var m = Math.floor((t / 1000 / 60) % 60);
  //   var s = Math.floor((t / 1000) % 60);
  //   // console.log(html, Date(),DataElement.innerText);
  //   DataElement2.innerText = `上任第 ${d} 天 ${h} 時 ${m} 分 ${s}秒`;
  // }, 1000);
}

document.addEventListener("DOMContentLoaded", calcData, false);

// 代表全國性資料

// async function writeSocialWelfare() {
//   async function GetSocialWelfareJSON() {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
//     myHeaders.append("Cookie", "brw=brwJ0SI0UUvmgWbi6");

//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     var output;
//     var next;
//     await fetch(
//       "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%85%A8%E5%9C%8B%E6%B4%BB%E5%8B%95?view=Grid%20view",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         // console.log(result);
//         output = result.records;
//         next = result.offset;
//       })
//       .catch((error) => console.log("error", error));
//     async function getNext() {
//       if (next !== undefined) {
//         var myHeaders = new Headers();
//         myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
//         myHeaders.append("Cookie", "brw=brwJ0SI0UUvmgWbi6");

//         var requestOptions = {
//           method: "GET",
//           headers: myHeaders,
//           redirect: "follow",
//         };
//         var outputNext;
//         await fetch(
//           "https://api.airtable.com/v0/appoA2cEynkrD40GL/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%85%A8%E5%9C%8B%E6%B4%BB%E5%8B%95?view=Grid%20view&offset=" +
//             next,
//           requestOptions
//         )
//           .then((response) => response.json())
//           .then((result) => {
//             // console.log(result);
//             outputNext = result.records;
//             next = result.offset;
//           });
//         output = output.concat(outputNext);
//         await getNext();
//       }
//     }
//     await getNext();
//     return output;
//   }
//   const PresscJSON = await GetSocialWelfareJSON();
//   const number = PresscJSON.length;
//   // const headerNumber = document.querySelector(
//   //   ".header__social-welfare .header__number"
//   // );
//   // animateIt(headerNumber, number);
//   for (let i of PresscJSON) {
//     i.fields["活動內容"] = i.fields["活動內容"] || "";
//     let textImg ="";
//     console.log(textImg)
//     for (let j = 0; j<i.fields["照片"].length;j++){
//     console.log(textImg,i.fields["照片"][j]["url"])
//       textImg += /*html*/`
//       <li>
//         <div class="press__album-pc-photo"><img
//             src="${i.fields["照片"][j]["url"]}"
//             alt="" loading="lazy"></div>
//       </li>`;
//     }
//     const text = /*html*/ `<div class="press__album-pc">
//     <p class="press__album-pc-text">${i.fields["名稱"]}
//     </p>
//     <p class="press__album-pc-date">日期：${i.fields["日期"]}</p>
//     <ul class="press__album-pc-ul">
//        ${textImg}
//     </ul>
//   </div>`;
//     let target = document.querySelector(".press__album-pc-container");
//     target.innerHTML += text;
//   }
// }

// Airtable api 後端分頁 處理
// 到底自動再打一次api

// 留言板

function updataMessageBoard() {
  console.log(123);

  const name = document.getElementById("fname").value;
  const phone = document.getElementById("lname").value;
  const mailOrId = document.getElementById("emailline").value;
  // name123 = "54684684";
  // phone = "8768768";
  // mailOrId = "46464";
  if (
    name.trim.length === 0 ||
    phone.trim.length === 0 ||
    mailOrId.trim.length === 0
  ) {
    alert("資料未填寫完畢請輸入完整資訊");
    return;
  }
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyMauE9U1NpxdgKy" }).base(
    "app54OxpaINAvPrfL"
  );
  // console.log(124);
  base("市民好聲音").create(
    {
      稱呼: name,
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
  alert("感謝你提供意見");
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("emailline").value = "";
}
const submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", updataMessageBoard, false);
// updataMessageBoard()

// 監聽送出元素，並顯示謝謝你的訊息
