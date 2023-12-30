const username_input = document.querySelector(".username input")
const password_input = document.querySelector(".password input")
const btn_submit = document.querySelector(".btn_submit input")

    let admis = 
        [
            {
            nom: "Efy",
            post_nom: "Dezer",
            username: "efy@gmail.com",
            password: "efy26",
            profil: "img/admis.jpeg"
            }
        ]
        // document.querySelector(".containers img").src = admis.profil
        // document.querySelector(".containers span").innerHTML = admis.username+ " <strong>admis</strong>"
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
        
        // users[6].style = "display: none;"
       
        



    window.onload = () => {
        
        btn_submit.addEventListener("click", checkConnexion)

        

    }

    const checkConnexion = () => {

        if (username_input.value === admis.username && password_input.value === admis.password) {
            document.querySelector("form").action = "admi.html"
            
        }else if (username_input.value === "" || password_input.value === "") {
            window.location = "login.html"
            alert("Veillez remplir le champ username ou password")
        }else if (username_input.value !== admis.username || password_input.value !== admis.password) {
            alert("username ou password incorrect")
            window.location = "login.html"

        }

            
    }
    
    
    
    
    
    
    // console.log(users);

    function afficherTableau() {
        
       
        let tbody = document.querySelector("tbody")
        
        for (let i = 0; i <= users.length; i++) {
            
            let balise_tr = document.createElement("tr")
            tbody.appendChild(balise_tr)
            let balise_td1 = document.createElement("td")
            let balise_td2 = document.createElement("td")
            let balise_td3 = document.createElement("td")
            let balise_td4 = document.createElement("td")
            let balise_img1 = document.createElement("img")
            let balise_td5 = document.createElement("td")
            balise_td5.className = "btn_icon"
            let balise_i_icon = document.createElement("i")
            balise_i_icon.className = ""
            balise_i_icon.className = "bi-trash"
            balise_td5.appendChild(balise_i_icon)
        
            let balise_img_icon = document.createElement("img")
            balise_img_icon.src = ""
            balise_img_icon.src = "img/edit-2.svg"
            balise_td5.appendChild(balise_img_icon)
        
        
            balise_img1.src = users[i].profil
            balise_img1.className = "balise_img1"
            balise_img1.style = "cursor: pointer;"
            balise_td4.appendChild(balise_img1)

            let input_id_users1 = document.createElement("input")
            input_id_users1.className = "input_id_users"
            input_id_users1.value = ""
            input_id_users1.value = users[i].nom
            input_id_users1.setAttribute("disabled", "")

            balise_td1.appendChild(input_id_users1)

            let input_id_users2 = document.createElement("input")
            input_id_users2.className = "input_id_users"
            input_id_users2.value = ""
            input_id_users2.value = users[i].post_nom
            input_id_users2.setAttribute("disabled", "")


            balise_td2.appendChild(input_id_users2)

            let input_id_users3 = document.createElement("input")
            input_id_users3.className = "input_id_users"
            input_id_users3.value = ""
            input_id_users3.value = users[i].username
            input_id_users3.setAttribute("disabled", "")


            balise_td3.appendChild(input_id_users3)


            balise_tr.appendChild(balise_td1)
            balise_tr.appendChild(balise_td2)
            balise_tr.appendChild(balise_td3)
            balise_tr.appendChild(balise_td4)
            balise_tr.appendChild(balise_td5)

            

            // -------------- Popup users --------------------
            balise_img1.addEventListener("click", popupUsers)

            function popupUsers() {
                document.querySelector(".popup_header").innerHTML = `<div class="pupop_container">
                            <div class="popup_infos_users">
                                <div class="block_infos">
                                    Nom : <span class="nom">${users[i].nom} </span><br><br>
                                    Postnom : <span class="nom">${users[i].post_nom} </span><br><br>
                                    Adresse mail : <span class="nom">${users[i].username} </span>
                                </div>
                                <i class="bi bi-x"></i>
                            </div>
                            <div class="block_profil_users">
                                <img src="${users[i].profil}" alt="photo profil" srcset="">
                            </div>
                        </div>`

                        document.querySelector(".bi-x").addEventListener("click", () => {
                            document.querySelector(".pupop_container").style = "display: none;"
                        })

            }
            // -------------- fin Popup users --------------------

            // -------------- Delete users --------------------
            balise_i_icon.addEventListener("click", deleteUsers)

            function deleteUsers() {
                
                balise_tr.remove()
            }
            // -------------- fin Delete users --------------------

            // -------------- Edit users --------------------
                balise_img_icon.addEventListener("click", editUsers)

                function editUsers() {
                    
                    input_id_users1.removeAttribute("disabled")
                    input_id_users1.style = "background-color: rgb(233, 233, 233);"

                    input_id_users2.removeAttribute("disabled")
                    input_id_users2.style = "background-color: rgb(233, 233, 233);"

                    input_id_users3.removeAttribute("disabled")
                    input_id_users3.style = "background-color: rgb(233, 233, 233);"

                    balise_img_icon.remove()
                    balise_i_icon.remove()

                    let balise_img_icon2 = document.createElement("img")
                    balise_img_icon2.src = "img/edit.svg"
                    balise_img_icon2.style = "margin-top: 0em;"
                    balise_td5.appendChild(balise_img_icon2)

                    balise_img_icon2.addEventListener("click", () => {
                        input_id_users1.setAttribute("disabled", "")
                        input_id_users1.style = "background-color: rgb(225, 225, 225); color: black;"

                        input_id_users2.setAttribute("disabled", "")
                        input_id_users2.style = "background-color: rgb(225, 225, 225); color: black;"

                        input_id_users3.setAttribute("disabled", "")
                        input_id_users3.style = "background-color: rgb(225, 225, 225); color: black;"

                        balise_img_icon2.remove()

                        balise_i_icon.className = "bi-trash"
                        balise_td5.appendChild(balise_i_icon)

                        balise_img_icon.src = "img/edit-2.svg"
                        balise_td5.appendChild(balise_img_icon)
                    })
                    
                }
            // -------------- fin Edit users --------------------
            
        
        }
        
    
}

let incr= 0;
function afficherAdmis() {
        
       
    let tbodys = document.querySelector("tbody")
    
    for (let i = 0; i <= admis.length; i++) {
        
        let balise_trs = document.createElement("tr")
        tbodys.appendChild(balise_trs)
        let balise_td1s = document.createElement("td")
        let balise_td2s = document.createElement("td")
        let balise_td3s = document.createElement("td")
        let balise_td4s = document.createElement("td")
        let balise_img1s = document.createElement("img")
        let balise_td5s = document.createElement("td")
        balise_td5s.className = "btn_icon"
        let balise_i_icons = document.createElement("i")
        balise_i_icons.className = ""
        balise_i_icons.className = "bi-trash"
        balise_td5s.appendChild(balise_i_icons)
    
        let balise_img_icons = document.createElement("img")
        balise_img_icons.src = ""
        balise_img_icons.src = "img/edit-2.svg"
        balise_td5s.appendChild(balise_img_icons)
    
    
        balise_img1s.src = admis[i].profil
        balise_img1s.className = "balise_img1"
        balise_img1s.style = "cursor: pointer;"
        balise_td4s.appendChild(balise_img1s)

        let input_id_users1s = document.createElement("input")
        input_id_users1s.className = "input_id_users"
        input_id_users1s.value = ""
        input_id_users1s.value = admis[i].nom
        input_id_users1s.setAttribute("disabled", "")

        balise_td1s.appendChild(input_id_users1s)

        let input_id_users2s = document.createElement("input")
        input_id_users2s.className = "input_id_users"
        input_id_users2s.value = ""
        input_id_users2s.value = admis[i].post_nom
        input_id_users2s.setAttribute("disabled", "")


        balise_td2s.appendChild(input_id_users2s)

        let input_id_users3s = document.createElement("input")
        input_id_users3s.className = "input_id_users"
        input_id_users3s.value = ""
        input_id_users3s.value = admis[i].username
        input_id_users3s.setAttribute("disabled", "")


        balise_td3s.appendChild(input_id_users3s)


        balise_trs.appendChild(balise_td1s)
        balise_trs.appendChild(balise_td2s)
        balise_trs.appendChild(balise_td3s)
        balise_trs.appendChild(balise_td4s)
        balise_trs.appendChild(balise_td5s)

        

        // -------------- Popup users --------------------
        balise_img1s.addEventListener("click", popupUserss)

        function popupUserss() {
            document.querySelector(".popup_header").innerHTML = `<div class="pupop_container">
                        <div class="popup_infos_users">
                            <div class="block_infos">
                                Nom : <span class="nom">${admis[i].nom} </span><br><br>
                                Postnom : <span class="nom">${admis[i].post_nom} </span><br><br>
                                Adresse mail : <span class="nom">${admis[i].username} </span>
                            </div>
                            <i class="bi bi-x"></i>
                        </div>
                        <div class="block_profil_users">
                            <img src="${admis[i].profil}" alt="photo profil" srcset="">
                        </div>
                    </div>`

                    document.querySelector(".bi-x").addEventListener("click", () => {
                        document.querySelector(".pupop_container").style = "display: none;"
                    })

        }
        // -------------- fin Popup users --------------------

        // -------------- Delete users --------------------
        balise_i_icons.addEventListener("click", deleteUserss)

        function deleteUserss() {
            
            balise_trs.remove()
            incr= 0
            document.querySelector(".btn_ajouter_admis input").style = "display: unset;"
        }
        // -------------- fin Delete users --------------------

        // -------------- Edit users --------------------
            balise_img_icons.addEventListener("click", editUserss)

            function editUserss() {
                
                input_id_users1s.removeAttribute("disabled")
                input_id_users1s.style = "background-color: rgb(233, 233, 233);"

                input_id_users2s.removeAttribute("disabled")
                input_id_users2s.style = "background-color: rgb(233, 233, 233);"

                input_id_users3s.removeAttribute("disabled")
                input_id_users3s.style = "background-color: rgb(233, 233, 233);"

                balise_img_icons.remove()
                balise_i_icons.remove()

                let balise_img_icon2s = document.createElement("img")
                balise_img_icon2s.src = "img/edit.svg"
                balise_img_icon2s.style = "margin-top: 0em;"
                balise_td5s.appendChild(balise_img_icon2s)

                balise_img_icon2s.addEventListener("click", () => {
                    input_id_users1s.setAttribute("disabled", "")
                    input_id_users1s.style = "background-color: rgb(225, 225, 225); color: black;"

                    input_id_users2s.setAttribute("disabled", "")
                    input_id_users2s.style = "background-color: rgb(225, 225, 225); color: black;"

                    input_id_users3s.setAttribute("disabled", "")
                    input_id_users3s.style = "background-color: rgb(225, 225, 225); color: black;"

                    balise_img_icon2s.remove()

                    balise_i_icons.className = "bi-trash"
                    balise_td5s.appendChild(balise_i_icons)

                    balise_img_icons.src = "img/edit-2.svg"
                    balise_td5s.appendChild(balise_img_icons)
                })
                
            }
        // -------------- fin Edit users --------------------
        
    
    }
    

}





function addAmis() {
    document.querySelector(".btn_ajouter_admis input").addEventListener("click", () => {
        incr = incr+1

    if (incr == 0) {
        
        
    }else if (incr == 1) {
        document.querySelector(".btn_ajouter_admis input").style = "display: none;"

        afficherAdmis()
    }
       

    })
    
}
addAmis()
afficherTableau()




