const carsElem = document.querySelector(".cars");
const colorsElem = document.querySelector("#color");
const makesElem = document.querySelector("#make");

axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(function (result) {
    result.data.forEach(car => {
                const li = document.createElement("tr");
                li.innerHTML = `<tr>
                     <td>${car.model}
                    <td> ${car.color}</td>
                    <td> ${car.make}</td>
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
                // const subBtn = document.createElement("submit");
               
            });
         
})




