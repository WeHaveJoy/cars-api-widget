const carsElem = document.querySelector(".cars");

axios
.get("http://api-tutor.herokuapp.com/v1/cars")
.then(function (result) {
    result.data.forEach(car => {
                const li = document.createElement("tr");
                li.innerHTML = `<tr>
                    <td>${car.model}</td>
                    <td>${car.color}</td>
                    <td>${car.make}</td>
                </tr>`
                
                carsElem.appendChild(li);
            });
})