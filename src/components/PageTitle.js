import React, { useContext } from "react";
import TitleContext from "../utils/TitleContext"


function PageTitle(props) {

    return (
        <div class="content">
            <div class="container my-3 p-3 border border border-info bg-light">
                <div class="d-flex row">
                    <div class="align-items-baseline col-lg-12 text-info">
                        <h1 class="display-4 text-center text-lg-left">{props.text}</h1>
                    </div>
                </div>

                <hr class="my-3" />
                {props.children}
            </div>
        </div>
    )
};

export default PageTitle;