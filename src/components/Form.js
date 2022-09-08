import { useState } from "react";

const Form = () => {
    const [validInputs, setValidInputs] = useState({ userName: false, email: false, comments: false });
    // get the info from inputs and show it on the console
    const showData = (event) => {
        const { userName, email, comments } = event.target;

        console.log(userName.value);
        console.log(email.value);
        console.log(comments.value);
    }

    const validateInput = event => {
        const input = event.target;
        let inputIsValid = false;

        // depending on the input evaluates with a different regex
        if (input.id === "userName") {
            inputIsValid = /[A-Za-z0-9]{3,20}/.test(input.value) || input.value.length === 0;
        }
        else if (input.id === "email") {
            inputIsValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.value) || input.value.length === 0
        }
        else if (input.id === "comments") {
            inputIsValid = /[A-Za-z0-9]{20,250}/.test(input.value) || input.value.length === 0;
        }

        setValidInputs({ ...validInputs, [input.id]: inputIsValid })

        if (inputIsValid) {
            input.classList.remove("error");
        } else {
            input.classList.add("error");
        }

    }

    const handleSubmit = event => {
        event.preventDefault();

        if (validInputs.userName && validInputs.email && validInputs.comments) {
            showData(event);
        }
    }

    return (
        <>
        <h1 className="main-title">Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="userName">Username
                    </label>
                    <input className="input" type="text" id="userName" name="userName" required pattern="[A-Za-z0-9]{3,20}" placeholder="Only alphanumerical characters" onChange={validateInput} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email
                    </label>
                    <input className="input" type="email" id="email" name="email" required placeholder="Enter your email" onChange={validateInput} />
                </div>
                <div className="input-container">
                    <label className="label-comments" htmlFor="comments">Comments</label>
                    <textarea className="input comments-input" name="comments" id="comments" cols="30" rows="10" required placeholder="Enter your comment" onChange={validateInput}></textarea>
                </div>

                <button className="submit-btn custom-btn" type="submit">Send</button>
            </form>
        </>
    )
}

export default Form;
