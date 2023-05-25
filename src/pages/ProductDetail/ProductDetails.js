import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addtoCart, REMOVE } from "../../redux/actions/ProductAction";
import Styles from './productdetail.module.css'


const ProductDetails = () => {


    const products = useSelector((state) => state.allProducts.products);
    const { id } = useParams();
    console.log(products)
    const product = products.find(product => String(product.id) === id);
    console.log("product", product)
    const { image, title, price, description,quantity } = product ?? {};

    const dispatch = useDispatch();
    const data = useSelector((state) => state.CartReducer.carts)
    console.log(data)


    const send = (e) => {
        const { id, title, price, image } = e
        var items = JSON.parse(localStorage.getItem('itemsInCart')) || [];
        // add to it, only if it's empty
        var item = items.find(item => item.id === id);
        if (item) {
            item.quantity = item.quantity + 1;

        } else {
            items.push({
                title,
                price,
                id,
                image,
                quantity: 1,
            })
        }
        // then put it back.
        localStorage.setItem('itemsInCart', JSON.stringify(items));
        dispatch(addtoCart(e))
        console.log(items);
    }

    const dec = (e) => {

        dispatch(REMOVE(e));
        const { id, title, price, image } = e
        var items = JSON.parse(localStorage.getItem('itemsInCart')) || [];
        // add to it, only if it's empty
        var item = items.find(item => item.id === id);
        if (item) {
            item.quantity = item.quantity - 1;

        } else {
            items.push({
                title,
                price,
                id,
                image,
                quantity,
            })
        }
        localStorage.setItem('itemsInCart', JSON.stringify(items));
    }

    const inc = (e) => {

        dispatch(addtoCart(e))
        const { id, title, price, image } = e
        var items = JSON.parse(localStorage.getItem('itemsInCart')) || [];
        // add to it, only if it's empty
        var item = items.find(item => item.id === id);
        if (item) {
            item.quantity = item.quantity + 1;

        } else {
            items.push({
                title,
                price,
                id,
                image,
                quantity: 1,
            })
        }
        localStorage.setItem('itemsInCart', JSON.stringify(items));
    }


    return (
        <>
            <div className={Styles.detail}>
                <Navbar />
                <div>
                    <div className={`container ${Styles.product_detail_container}`}>
                        <div>
                            <div className="image-container">
                                <img src={image} className={Styles.product_detail_image} alt="deatil" />
                            </div>
                            <div className={Styles.small_images_container}>
                                <img src={image} className={Styles.small_image} alt="small" />
                                <img src={image} className={Styles.small_image} alt="small" />
                                <img src={image} className={Styles.small_image} alt="small" />
                                <img src={image} className={Styles.small_image} alt="small" />
                            </div>
                        </div>

                        <div className={Styles.product_detail_desc}>
                            <h1>{title}</h1>
                            <div className={Styles.reviews}>
                                <div>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                </div>
                                <p>(20)</p>
                            </div>
                            <h4>Details: </h4>
                            <p>{description}</p>
                            <p className={Styles.price}>${price}</p>
                            <div className={Styles.quantity}>
                                <h3>Quantity:</h3>
                                <p className={Styles.quantity_desc}>
                                    <span className={Styles.minus} onClick={() => dec(product)}>
                                        <AiOutlineMinus />
                                    </span>
                                    <span className={Styles.num}>{quantity}</span>
                                    <span className={Styles.plus} onClick={() => inc(product)}>
                                        <AiOutlinePlus />
                                    </span>
                                </p>
                            </div>
                            <div className={Styles.buttons}>
                                <button type="button" className={Styles.add_to_cart} onClick={() => send(product)}>
                                    Add to Cart
                                </button>
                                <button type="button" className={Styles.buy_now} >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ProductDetails;







