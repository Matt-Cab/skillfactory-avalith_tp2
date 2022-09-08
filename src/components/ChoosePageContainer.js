import ButtonChangePage from "./ButtonChangePage"

const ChoosePageContainer = ({ changePage, maxPages, currentPageNumber, handleChange }) => {
    return (
        <div className="choose-page-container">
            <label htmlFor="pageNumber">Page number:</label>
            <input type="number" name="pageNumber" id="page-number" min="1" max={maxPages} value={currentPageNumber} onChange={handleChange} />
            <ButtonChangePage
                btnIsDisabled={false}
                id={"btn-go"}
                text={"Go"}
                changePage={changePage}
            />
        </div>
    )
}

export default ChoosePageContainer