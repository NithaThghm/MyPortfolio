/* .... Burger Menu */
    /* .... Burger Menu : Apparition du menu au clic */

    function showHideBurgerMenu(){
        console.log("Running showHideBurgerMenu");
        let burgerMenu = document.getElementById("burgerMenu");
        let main = document.getElementById("main");
        let burgerMenuDisplay = window.getComputedStyle(burgerMenu).display;
        let mainDisplay = window.getComputedStyle(main).display;
        
        if(burgerMenuDisplay === "none"){
            console.log(burgerMenuDisplay);
            burgerMenu.style.display = "flex";
            //main.style.display = "none";
        }
        else{
            console.log(burgerMenuDisplay);
            burgerMenu.style.display = "none";
            // main.style.display = "flex";
        }
    }

    let burgerBtn = document.getElementById("burgerBtn");
    burgerBtn.onclick = showHideBurgerMenu;