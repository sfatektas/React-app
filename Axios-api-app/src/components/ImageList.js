import React from "react";
const ImageList = (props) => {
    const images = props.data.length == 0 ? "" : props.data.hits.map((image) => {

        return <img
            key={image.id}
            className="col-md-6 col-lg-4 my-2 item"
            src={image.webformatURL}
            width="auto"
            alt="foro" />
    })
    return (
        <div className="col w-75 mx-auto">
            <div className="row">
                {images}
            </div>
        </div>
    )
}

export default ImageList;