import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
       // Data that we'll nedd:
        // - backgroundImage: thumb_image_url   
        // - logo: logo_url
        // - description: description
        // - id: id

        const { id, description, thumb_image_url, logo_url } = props.item;
    return (
        <div>
            <div>
                <img src={thumb_image_url} alt="portfolio item background" />
                <img src={logo_url} alt="portfolio item logo" />
                {description}
            </div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}