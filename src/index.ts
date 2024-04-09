import "./sass/main.scss";

const FormHandler = {
    $root: undefined as HTMLDivElement | undefined,
    $form: undefined as HTMLFormElement | undefined,
    $buttonAddName: undefined as HTMLButtonElement | undefined,
    $buttonReset: undefined as HTMLButtonElement | undefined,
    $input: undefined as HTMLInputElement | undefined,
    $userGreeting: undefined as HTMLSpanElement | undefined,
    valueInput: "",
    readInput: () => {
        FormHandler.$input!.addEventListener('input', event => {
            const inputElement = event.target as HTMLInputElement;
            FormHandler.valueInput = inputElement.value
        })
    },
    onClickAddName: () => {
        FormHandler.$buttonAddName?.addEventListener('click', ( event ) => {
            event.preventDefault()
            if ( FormHandler.valueInput !== "" ) {
                FormHandler.$userGreeting!.textContent = FormHandler.valueInput
                console.log("_>", FormHandler.$userGreeting!.textContent)
                FormHandler.$form?.reset()
            }
        })
    },
    onClickReset: () => {
        FormHandler.$buttonReset?.addEventListener('click', ( _ ) => {
            //FormHandler.$userGreeting!.textContent = "User";
        })
    },
    setElements: () => {
        FormHandler.$root = document.querySelector(".b-app") as HTMLDivElement
        FormHandler.$form = document.querySelector("form") as HTMLFormElement
        FormHandler.$buttonAddName = FormHandler.$root.querySelector("#button-changer") as HTMLButtonElement
        FormHandler.$buttonReset = FormHandler.$root.querySelector("#button-reset") as HTMLButtonElement
        FormHandler.$input = FormHandler.$root.querySelector("input") as HTMLInputElement
        FormHandler.$userGreeting = FormHandler.$root.querySelector(".js-change-content") as HTMLSpanElement
    },
    init: () => {
        FormHandler.setElements()
        FormHandler.readInput()
        FormHandler.onClickAddName()
        FormHandler.onClickReset()
    }
};

FormHandler.init();
