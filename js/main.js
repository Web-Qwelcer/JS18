function load() {
  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then((response) => response.json()).then((list) => {
    let rate1;
    let rate2;
    let elem1;
    let elem2;

    for (let i = 0; i < list.length; i++) {
      let $option = document.createElement("option");
      $option.setAttribute("value", `${list[i].cc}  ${list[i].txt}`);
      $option.setAttribute("data-cc", list[i].cc);
      $option.setAttribute("data-rate", list[i].rate);
      currency.appendChild($option);
    }

    currency1.addEventListener("input", (event) => {
      elem1 = document.querySelector(`datalist option[value="${event.target.value}"]`);
      rate1 = elem1.dataset.rate;
      if (elem1 && elem2) {
        console.log(elem1.dataset.cc);
        console.log(elem2.dataset.cc);
        console.log(elem1.dataset.cc == elem2.dataset.cc);

        if (rate2 == rate1 || elem1.dataset.cc == elem2.dataset.cc) {
          curr1.textContent = `${1} ${elem1.dataset.cc}`;
          curr2.textContent = `${1} ${elem2.dataset.cc}`;
        }
        else if (rate1 > rate2) {
          curr1.textContent = `${1} ${elem1.dataset.cc}`;
          curr2.textContent = `${rate1} ${elem2.dataset.cc}`;
        }
        else {
          curr1.textContent = `${rate2} ${elem1.dataset.cc}`;
          curr2.textContent = `${1} ${elem2.dataset.cc}`;
        }
      }
    });

    currency2.addEventListener("input", (event) => {
      elem2 = document.querySelector(`datalist option[value="${event.target.value}"]`);
      rate2 = elem2.dataset.rate;
      if (elem1 && elem2) {
        console.log(elem1.dataset.cc);
        console.log(elem2.dataset.cc);
        console.log(elem1.dataset.cc == elem2.dataset.cc);
        if (rate2 == rate1 || elem1.dataset.cc == elem2.dataset.cc) {
          curr1.textContent = `${1} ${elem1.dataset.cc}`;
          curr2.textContent = `${1} ${elem2.dataset.cc}`;
        }
        else if (rate1 > rate2) {
          curr1.textContent = `${1} ${elem1.dataset.cc}`;
          curr2.textContent = `${rate1} ${elem2.dataset.cc}`;
        }
        else {
          curr1.textContent = `${rate2} ${elem1.dataset.cc}`;
          curr2.textContent = `${1} ${elem2.dataset.cc}`;
        }
      }
    });

    currency_input.addEventListener("input", (event) => {
      currency_out.value = (currency_input.value * (rate1 / rate2)).toFixed(3);
    });
  });
}

load();

$p = document.querySelector("#text_content");
$p.textContent = `Exchange rates as of: ${new Date().toDateString()}`;
$p.style.fontWeight = "bold";
