// lấy theo id
let headingElement = document.getElementById("heading");
// Giá trị trả về sẽ là phần tử đầu tiên nó tìm thấy
// lay theo class
let headingElement1 = document.getElementsByClassName("heading");
console.log(headingElement1)
// Giá trị trả về sẽ là một HTML Colection ( Giống mảng nhưng khác là không thể sử dụng được push pop)

// lay theo Selector
let boxElement = document.querySelector(".box-1");


// Giá trị trả về sẽ là phần tử đầu tiên mà nó tìm thấy
let boxes = document.querySelectorAll(".box-1");
boxes.forEach((element) => {
    console.log(element);
});


// Them phan tu vao trong DOM
let ulElement = document.createElement("ul");
document.body.append(ulElement);


let liElement = document.createElement("li");
ulElement.appendChild(liElement);



const users = [
    {
        id:1,
        user_name:"Nguyen Van Nam",
        age:20,
        address:"Ha Noi",
        email:"nvnam@gmail.com",
    },
    {
        id:1,
        user_name:"Nguyen Van Nam",
        age:20,
        address:"Ha Noi",
        email:"nvnam@gmail.com",
    },
    {
        id:1,
        user_name:"Nguyen Van Nam",
        age:20,
        address:"Ha Noi",
        email:"nvnam@gmail.com",
    },
    {
        id:1,
        user_name:"Nguyen Van Nam",
        age:20,
        address:"Ha Noi",
        email:"nvnam@gmail.com",
    },
];

// lấy ra phần tử tbody
let tbodyElement = document.querySelector("#tbody");
// dùng map để lặp qua từng phần tử của mảng và kèm dữ liệu trong mảng
let userHtmls = users.map((user, index) => {
    return`
    <tr>
    <td>${index+1}</td>
    <td>${user.user_name}</td>
    <td>${user.age}</td>
    <td>${user.address}</td>
    <td>${user.email}</td>
    </tr>
    `;
});
// Ép mảng về dạng chuỗi HTML
let userHtml = userHtmls.join("");
// Láy chuỗi HTML ở b3 để gắn vào tbody
tbodyElement.innerHTML = userHtml;