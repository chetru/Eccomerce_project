import { useNavigate } from 'react-router-dom';
import Styles from './product.module.css';
import { FiHeart } from 'react-icons/fi';

const Product = (props) => {
    const { id, image, title, price } = props.value;
    const navigate = useNavigate();

    const showDetails = () => {
        navigate(`/products/${id}`);
        console.log("Clicked");
    };

    return (
        <>
            <div onClick={showDetails}>
                <div className={Styles.product_card}>
                    <img src={image} width={250} height={250} className={Styles.product_image} alt="productimage" />
                    <div className={Styles.product_details}>
                        <p className={Styles.product_name}>{title.substring(0, 20)}</p>
                        <p className={Styles.product_price}>${price}</p>
                    </div>
                    <div className={Styles.wishlist}>
                        <FiHeart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;

