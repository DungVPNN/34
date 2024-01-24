// console.dir(document);
// console.log(document);
// console.log("The HTML co id demo-id",document.getElementById("demo-id"));
// let div = document.getElementById("demo-id2");
// console.log("The DIV", div);
// let lis = document.getElementsByClassName("list-item");
// console.log("Danh sach the li list item",lis);
// let firstLi = lis[0];
// let lastLi = lis[lis.length-1];
// console.log("The Li dau tien", firstLi);
// console.log("The Li cuoi cung", lastLi);
// for (let i = 0; i < lis.length; i++){
//     console.log("Cac the li", lis[i]);
// }
// let divs = document.getElementsByClassName("div");
// console.log("Danh sach the divs", divs);
// let h1 = document.getElementById("demo-id");
// console.log(h1);
// console.dir(h1);
// h1.innerHTML = "<i> Hello world sau khi duoc cap nhat</i>";
// h1.textContent = "<b>Doi noi dung = text content</b>";
// h1.innerText = "Hello noi dung da duoc cap nhat";
// console.log(h1.innerHTML);
// console.log(h1.textContent);
// console.log(h1.innerText);
// console.log("id cua the h1", h1.id);
// if((h1.id) === "demo-id"){
//     alert("Hello world");
// }



// console.log("Danh sach class cua the h1", h1.classList);




// let classList = h1.classList;
// for (let i = 0; i < classList.length; i++){
//     console.log(classList[i]);
// }


// console.log(classList);
// classList.add("demo-class3");
// classList.remove("demo-class1");





// console.log(h1.style);
// h1.style.backgroundColor = "red";
// h1.style.fontSize = "20px";
// h1.style.fontWeight = "bold";
// h1.style.border = "10px soild black";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.borderRadius = "50%";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";




// let input = document.getElementById("demo-value");
// console.log("Gia tri nam trong input tai thoi diem hien tai", input.value);
// input.value = "Hello world";


let div = document.createElement("div");
let li = document.createElement("li");
let ul = document.getElementsByTagName("ul")[0];

li.innerHTML= "<i> Hello New Element</i>";
 li.classList.add("list-item");
 ul.appendChild(li);
 li.remove();
 ul.remove();
 console.log(div);
 console.log(li);
 






