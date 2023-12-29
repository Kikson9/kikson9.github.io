// -------js for form-----------

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const success_display = document.getElementById("success_display");
const fullname = document.getElementById("fullname");

const database = [
    {username: "victor", password: "testing", fullname: "Victor Thomas"},
    {username: "ola", password: "testing2", fullname: "Ola Isaac"},
    {username: "josephine", password: "testing3", fullname: "Josephine Jerome"},
    {username: "naomi", password: "testing4", fullname: "Naomi Emmanuel"},
    {username: "kt", password: "kttalker5", fullname: "Kt Talker"}
];

function findUserByUsername(username) {
    for (let i=0; i<database.length; i++) {
        const user = database[i];
        if (user.username === username) {
            return user;
        }

    }
    return null;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = findUserByUsername(username.value);
        if (!user) {
            alert("Invalid credentials");
            return;
        }
        if (user.password !==password.value) {
            alert("Invalid credentials");
            return;
        }
        // alert(`Welcome back, ${user.fullname}`);
        fullname.innerHTML = `${user.fullname}`;
        form.style.display = "none";
        success_display.style.display = "block";
})