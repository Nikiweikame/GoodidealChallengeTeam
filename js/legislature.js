

for (let i of legislatureJSON) {
  console.log(
    i.fields["內容關鍵字"],
    i.fields["提案名稱"],
    i.fields["提案日期"]
  );
}

let = `<article class="article">
            <h3>${title}</h3>
            <h4>提案日期：${data}</h4>
            <h5>內容關鍵字：</h5>
            <p>${content}</p>
          </article>`;

function creatElement(elemnt) {
  return document.createElement(elemnt);
}

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

for (let i of legislatureJSON) {
  let title = i.fields["提案名稱"];
  let data = i.fields["提案日期"];
  let content = i.fields["內容關鍵字"];
  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(title)
  h3.appendChild(h3Text)
  let h4 = document.createElement("h4")
  let h4Text=document.createTextNode("提案日期："+data)
  h4.appendChild(h4Text)
  let h5 = document.createElement("h5")
  let h5Text=document.createTextNode("內容關鍵字：")
  h5.appendChild(h5Text)
  let p = document.createElement("p")
  let pText = document.createTextNode(content)
  p.appendChild(pText)

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

async function writeLegislature() {
    async function GetLegislatureJSON() {
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
      
      const legislatureJSON = await GetLegislatureJSON();
      for (let i of legislatureJSON) {
        let title = i.fields["提案名稱"];
        let data = i.fields["提案日期"];
        let content = i.fields["內容關鍵字"];
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(title)
        h3.appendChild(h3Text)
        let h4 = document.createElement("h4")
        let h4Text=document.createTextNode("提案日期："+data)
        h4.appendChild(h4Text)
        let h5 = document.createElement("h5")
        let h5Text=document.createTextNode("內容關鍵字：")
        h5.appendChild(h5Text)
        let p = document.createElement("p")
        let pText = document.createTextNode(content)
        p.appendChild(pText)
      
        let newarticle = document.createElement("article");
        newarticle.className = "article";
        newarticle.appendChild(h3);
        newarticle.appendChild(h4);
        newarticle.appendChild(h5);
        newarticle.appendChild(p);
      
        let target = document.querySelectorAll("div.personal_bill")[0];
        target.appendChild(newarticle);
        // console.log(i.fields["內容關鍵字"],i.fields["提案名稱"],i.fields["提案日期"])
      };
}