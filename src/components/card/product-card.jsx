const ProductCard = ({img,name,info,star,rating,phone,book,hidden}) => {
    return( 
        <>
            <div className="card">
                <img id="book-img" src={img} alt="img" />  
                <h1 id="name">{name}</h1>
                <p id="info">{info}</p>
                <div id="icon-panel">
                    <div id="icon-star">
                        <img src={star} alt="icon-star" />
                        <span id="rating">{rating}</span>
                    </div>
                    <div id="icon-button">
                        <img src={phone} alt="icon-headphone" />
                        <img src={book} alt="icon-book" className={hidden ? 'hidden' : ''} />
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default ProductCard;