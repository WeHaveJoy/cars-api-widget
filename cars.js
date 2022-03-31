const carsElem = document.querySelector(".cars");
const colorsElem = document.querySelector("#color");
const makesElem = document.querySelector("#make");
const filterElem = document.querySelector(".btnFilter");

axios
  .get("https://api-tutor.herokuapp.com/v1/cars")
  .then(function (result) {
    result.data.forEach(car => {
      const li = document.createElement("tr");
      li.innerHTML = `<tr>
                     <td>${car.model}</td>
                    <td> ${car.color}</td>
                    <td> ${car.make}</td>
                    <td> ${car.reg_number}</td>
                    <td> ${car.price}</td>
                </tr>`
      carsElem.appendChild(li);
    });
  })


axios
  .get("https://api-tutor.herokuapp.com/v1/colors")
  .then(function (result) {
    result.data.forEach(color => {
      const li = document.createElement("option");
      li.innerHTML = `
                ${color}`
      colorsElem.appendChild(li);
    });

  })

  
  axios
  .get("https://api-tutor.herokuapp.com/v1/makes")
  .then(function (result) {
    result.data.forEach(make => {
      const li = document.createElement("option");
      li.innerHTML = `
                ${make}`
      makesElem.appendChild(li);
    });

  })



filterElem.addEventListener("click", function () {
  let showElem = document.querySelector('.show')
  axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (result) {
      result.data.forEach(car => {
        if (makesElem.value == car.make &&  colorsElem.value == car.color) {
          const li = document.createElement("li");
          
          li.innerHTML = `
        ${car.model}
          `
          showElem.appendChild(li)
        }
        else if (makesElem.value == car.make) {
          const li = document.createElement("li");
          
          li.innerHTML = `
        ${car.model}
          `
          showElem.appendChild(li)
        }else if (colorsElem.value == car.color) {
          const li = document.createElement("li");
          
          li.innerHTML = `
        ${car.model}
          `
          showElem.appendChild(li)
        }
      });

    })
})






