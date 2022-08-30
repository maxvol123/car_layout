let mdl = document.querySelector(".mdl")
let form_input = document.querySelectorAll(".form_input")
let form_time = document.querySelectorAll(".form_time")
function Modal() {
    mdl.innerHTML+=`<div class="modal">
    <div class="modal_open">
    <h1 class="modal_main_text">Order service <div class="close" onclick="closeModal()"></div></h1>
    <form class="form" onchange="Active()">
        <input type="radio" name="Car" class="form_input"> <label class="form_text">Car wrapping</label><br>
        <input type="radio" name="Car" class="form_input"> <label class="form_text">Car diteiling</label><br>
        <input type="time" class="form_time" min="10:00" max="21:00"><label for="">Choose Time</label><br>
        <input type="text" placeholder="Enter your name"><br>
        <input type="submit" class="form_submit" value="Finish Order" disabled>
        
    </form>
    </div>
    </div>`
}
function closeModal() {
    mdl.innerHTML=""
}
function Active() {
    if (form_input[0]!=""&&form_input[1]!=""&&document.querySelector(".form_time").value!="") {
        document.querySelector(".form_submit").removeAttribute("disabled")
    }
}
