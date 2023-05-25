
import React, { useEffect } from "react";
import Footer from '../../components/Footer/Footer';
import FootBanner from '../../components/FootBanner/FootBanner';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Product from '../../components/Product/Product'
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/ProductAction";
import axios from "axios";
import Styles from './home.module.css'


const Home = () => {

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {

        if (products.length === 0) {
            fetchProducts();
        }
        const localproducts = JSON.parse(localStorage.getItem('list'));
        console.log("localproducts", localproducts)

        if (products.length > 0) {
            localStorage.setItem('list', JSON.stringify(products));
        }

        if (Array.isArray(localproducts) && localproducts.length > 0) {
            dispatch(setProducts(localproducts));
        }

    }, []);

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
        dispatch(setProducts(response.data));
        console.log("data", response.data);
    };
    console.log("dispatcher", products);
    return (
        <div className={Styles.layout}>
            <header>
                <Navbar />
            </header>
            <main className={Styles.main_container}>
                <HeroBanner />
                <div className={Styles.products_heading}>
                    <h2>Best Seller Products</h2>
                    <p>speaker There are many variations passages</p>
                </div>
                <div>
                    <div className={Styles.products_container}>
                        <Row gutter={[16, 16]} >
                            {products.map((item) => {
                                return (
                                    <>
                                        <Col span={6} key={item.id} className="column_pro">
                                            <Product value={item} />
                                        </Col>
                                    </>
                                )
                            })}
                        </Row>
                    </div>
                </div>
                <FootBanner />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default Home;



