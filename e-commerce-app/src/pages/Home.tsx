import React, { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CategoriesHome from '../components/CategoriesHome';
import useToFetchtchData from '../hooks/fetchData';
import { capitalizeEachWord } from '../utils/capitalizeText';


const Home = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const fetchData = useCallback(async () => {
        const data = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json());
        setCategories(data);
    }, []);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.w3schools.com/howto/img_nature_wide.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.w3schools.com/howto/img_nature_wide.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.w3schools.com/howto/img_nature_wide.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='mt-5'>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    {categories.map((cat: string) => <Tab eventKey={cat} title={capitalizeEachWord(cat)}><CategoriesHome productType={cat} /></Tab>)
                    }
                </Tabs>
            </div>

        </>
    )
}

export default Home