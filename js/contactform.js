let popup = document.getElementById("popup");

function validateForm(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name && email && phone && message) {
        openPopup(); 
    } else {
        alert("Please fill in all the fields.");
    }
}

function openPopup() {
    popup.classList.add("open-popup"); 
}

function closePopup() {
    popup.classList.remove("open-popup"); 
    document.querySelector('form').reset(); 
    window.scrollTo(0, 0); 
}
