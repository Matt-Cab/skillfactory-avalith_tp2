import React, { useState, useEffect } from 'react'
import ButtonChangePage from './ButtonChangePage';
import ChoosePageContainer from './ChoosePageContainer';

function PageChanger({ pageNumber, setPageNumber, maxPages }) {
    const [currentPageNumber, setCurrentPageNumber] = useState(pageNumber);

    const changePage = (event) => {
        const btnClicked = event.target;

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (btnClicked.id === "btn-prev" && pageNumber > 1) {
            setPageNumber(pageNumber - 1);
            scrollToTop();
        }
        else if (btnClicked.id === "btn-next" && pageNumber < maxPages) {
            setPageNumber(pageNumber + 1);
            scrollToTop();
        }
        else if (btnClicked.id === "btn-go") {
            const goToPageNumber = parseInt(document.getElementById("page-number").value);

            if (goToPageNumber >= 1 && goToPageNumber <= maxPages) {
                setPageNumber(goToPageNumber);
                scrollToTop();
            }
        }
    }

    const handleChange = event => {
        setCurrentPageNumber(event.target.value);
    }

    useEffect(() => {
        setCurrentPageNumber(pageNumber);
    }, [pageNumber]);

    return (
        <div className="page-changer">
            <ButtonChangePage
                btnIsDisabled={pageNumber <= 1}
                id={"btn-prev"}
                text={"<< Prev"}
                changePage={changePage}
            />
            <ChoosePageContainer
                changePage={changePage}
                maxPages={maxPages}
                currentPageNumber={currentPageNumber}
                handleChange={handleChange}
            />
            <ButtonChangePage
                btnIsDisabled={pageNumber >= maxPages}
                id={"btn-next"}
                text={"Next >>"}
                changePage={changePage}
            />

        </div>
    )
}

export default PageChanger