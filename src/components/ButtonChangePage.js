const ButtonChangePage = ({ id, text, changePage, btnIsDisabled }) => {
    return (
        <button
            className={"card-btn custom-btn " + (btnIsDisabled ? "btn-disabled" : "")}
            id={id}
            type="button"
            onClick={changePage} >
            {text}
        </button>
    )
}

export default ButtonChangePage;
