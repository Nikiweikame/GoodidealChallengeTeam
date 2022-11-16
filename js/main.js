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
    let title = i.fields["提案名稱"];
    let data = i.fields["提案日期"];
    let content = i.fields["內容關鍵字"];
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(title);
    h3.appendChild(h3Text);
    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("提案日期：" + data);
    h4.appendChild(h4Text);
    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("內容關鍵字：");
    h5.appendChild(h5Text);
    let p = document.createElement("p");
    let pText = document.createTextNode(content);
    p.appendChild(pText);

    let newarticle = document.createElement("article");
    newarticle.className = "article";
    newarticle.appendChild(h3);
    newarticle.appendChild(h4);
    newarticle.appendChild(h5);
    newarticle.appendChild(p);

    let target = document.querySelectorAll("div.personal_bill")[0];
    target.appendChild(newarticle);
    // console.log(i.fields["內容關鍵字"],i.fields["提案名稱"],i.fields["提案日期"])
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