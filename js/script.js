const username_input = document.querySelector(".username input")
const password_input = document.querySelector(".password input")
const btn_submit = document.querySelector(".btn_submit input")

    let admis = 
        {
            nom: "Efy",
            post_nom: "Dezer",
            username: "efy@gmail.com",
            password: "efy26",
            profil: "img/admis.jpeg"
        }

    window.onload = () => {
        btn_submit.addEventListener("click", checkConnexion)
    }

    const checkConnexion = () => {

        if (username_input.value === admis.username && password_input.value === admis.password) {
            window.location = "admi.html"
        }else if (username_input.value === "" || password_input.value === "") {
            alert("Veillez remplir le champ username ou password")
        }else if (username_input.value !== admis.username || password_input.value !== admis.password) {
            alert("username ou password incorrect")
        }
            
    }

   let users = [
        {
            nom: "Pierre",
            post_nom: "Doe",
            username: "pierredoe@gmail.com",
            profil: "img/user1.jpeg"
        },
        {
            nom: "Jack",
            post_nom: "Rock",
            username: "jack@gmail.com",
            profil: "img/user2.jpeg"
        },
        {
            nom: "Noël",
            post_nom: "Rich",
            username: "rich@gmail.com",
            profil: "img/user3.jpeg"
        },
        {
            nom: "Netia",
            post_nom: "Bobo",
            username: "netia20@gmail.com",
            profil: "img/user4.jpeg"
        },
        {
            nom: "Aimé",
            post_nom: "Lary",
            username: "lary15@gmail.com",
            profil: "img/user5.jpeg"
        }
   ]

//    <tr>
//         <td>Pierre</td>
//         <td>Deo</td>
//         <td>pierredoe@gmail.com</td>
//         <td>
//             <img src="img/user1.jpeg" alt="" srcset="">
//         </td>
//         <td>
//             <button class=""><i class="bi-trash"></i></button>
                        
//             <button class=""><img src="img/edit-2.svg" alt="" srcset=""></button>
//         </td>
//     </tr>

let tbody = document.querySelector("tbody")

let balise_tr = document.createElement("tr")
tbody.appendChild(balise_tr)
let balise_td1 = document.createElement("td")
let balise_td2 = document.createElement("td")
let balise_td3 = document.createElement("td")
let balise_td4 = document.createElement("td")
let balise_img1 = document.createElement("img")
let balise_td5 = document.createElement("td")
let balise_btn_icon1 = document.createElement("button")
let balise_i_icon = document.createElement("i")
balise_i_icon.className = "bi-trash"
balise_btn_icon1.appendChild(balise_i_icon)
balise_td5.appendChild(balise_btn_icon1)

let balise_btn_icon2 = document.createElement("button")
let balise_img_icon = document.createElement("img")
balise_img_icon.src = "img/edit-2.svg"
balise_btn_icon2.appendChild(balise_img_icon)
balise_td5.appendChild(balise_btn_icon2)





for (let i = 0; i <= users.length; i++) {
    balise_td1.textContent += users[i].nom
    balise_td2.textContent = users[i].post_nom
    balise_td3.textContent = users[i].username

    balise_img1.src = users[i].profil
    balise_td4.appendChild(balise_img1)

    balise_tr.appendChild(balise_td1)
    balise_tr.appendChild(balise_td2)
    balise_tr.appendChild(balise_td3)
    balise_tr.appendChild(balise_td4)
    balise_tr.appendChild(balise_td5)

    console.log(users[i].nom, users[i].post_nom);
}

    
   

