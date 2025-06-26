import "./CardSideBarProducts.css";

const CardSideBarProducts = ({title, onClick}) => {
    return (
    <div className="div-CardSideBarProducts" onClick={onClick} >
        <p>{title}</p>
    </div>
    );
};

export default CardSideBarProducts;