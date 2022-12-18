import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

type ChildProps = {
    productType: string;

    // toggleState: (e: React.MouseEvent) => void;
}

type ProductValType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

const CategoriesHome: React.FC<ChildProps> = (props): ReactElement => {
    const { productType } = props;
    const [productData, setProductData] = useState<ProductValType[]>([]);

    const fetchData = useCallback(async () => {
        const data = await fetch("https://fakestoreapi.com/products/category" + "/" + productType).then(res => res.json());
        setProductData(data);
    }, []);

    useEffect(() => {
        fetchData()
    }, [])
    const handleProductCard = (productDetail: ProductValType) => {
        return <Card>
            <div style={{
                maxHeight: '300px', width: '100%', height: '300px',
                display: 'flex',
                justifyContent: 'center',

            }}>
                {/* style={{ height: '200px', width: '200px' }} */}
                <Card.Img variant="top" src={productDetail.image} style={{ width: '60%', height: '70%' }} className="mt-5 ml-15" />
            </div>
            <Card.Body className="mt-20">
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
            </Card.Body>
        </Card>
    }


    return (
        <div>
            <Container>
                <Row>
                    {productData.map((val: ProductValType) => {
                        return (

                            <Col  xs="4" key={val.id}>{handleProductCard(val)}</Col>
                            // <Col className='md-4'>{handleProductCard(val)}</Col>
                            // <Col className='md-4'>{handleProductCard(val)}</Col>

                        )

                    })}
                </Row>


            </Container>
        </div >
    )
}

const Box = (props: any) => <div className="box" style={{
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    backgroundColor: '#e5edf5',
    border: '1px solid #c9c1d5',
    marginTop: '0.75rem',
    color: ' #5f5f5f',
    width: '100%'
}}>{props.children} </div>;


export default CategoriesHome