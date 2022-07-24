let students = [
    { name: "Ravi", city: "Delhi" },
    { name: "Ram", city: "Delhi" },
    { name: "Suresh", city: "Dehradun" },
    { name: "Ramesh", city: "Dehradun" },
    { name: "Prabhat", city: "Dehradun" }
]

let filterDehradunCity = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].city.toLowerCase() === 'dehradun') {
            callback(data[i]);
        }
    }
}

filterDehradunCity(students, function (obj) {
    console.log(obj)
});
