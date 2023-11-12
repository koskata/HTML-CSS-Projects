window.addEventListener('load', solve);

function solve() {
    const inputDOM = {
        theme: document.getElementById("theme"),
        author: document.getElementById("author"),
        date: document.getElementById("date"),
        question: document.getElementById("question")
    };

    const otherDOM = {
        addBtn: document.getElementById("add-btn"),
        collection: document.getElementsByClassName("all-hits-container")[0]
    };

    otherDOM.addBtn.addEventListener('click', addButtonHandler);
    

    function addButtonHandler(event) {

        const allFieldsHaveValue = Object.values(inputDOM)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValue) {
            return;
        }
        
        event.preventDefault();

        const {theme, author, date, question} = inputDOM;

        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2_1 = document.createElement("h2");
        let h2_2 = document.createElement("h2");
        let h2_3 = document.createElement("h2");
        let h3 = document.createElement("h3");

        div.className = "hits-info";
        h2_1.textContent = `Theme: ${theme.value}`;
        h2_3.textContent = `Author: ${author.value}`;
        h3.textContent = `Date: ${date.value}`;
        h2_2.textContent = `Question: ${question.value}`;


        div.appendChild(h2_1);
        div.appendChild(h2_3);
        div.appendChild(h3);
        div.appendChild(h2_2);
        otherDOM.collection.appendChild(div);

        Object.values(inputDOM).forEach((input) => {
            input.value = ''
          });
    }

    
}