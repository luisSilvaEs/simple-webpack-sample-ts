const $divContainer = document.querySelector(".js-change-content") as HTMLDivElement;
const $button = document.querySelector("#button-changer") as HTMLButtonElement;
const nameUser : string = "Luis";

$button.addEventListener("click", (event) => {
    $divContainer.textContent = nameUser;
});
