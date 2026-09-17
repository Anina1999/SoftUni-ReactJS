export default function ProjectItem({
    imageUrl,
    altText, 
    title, 
    link
}) {
    return (
        <div className="item">
            <img src={imageUrl} alt={altText} />
            <div className="down-content">
                <h4>{title}</h4>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-link" />
                </a>
            </div>
        </div>
    )
}