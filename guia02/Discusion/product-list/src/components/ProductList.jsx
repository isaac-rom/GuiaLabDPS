import { Container,Row ,Col} from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
    
    const products = [
        {
            id: 1,
            name: 'Camisa Polo',
            price: '$ 20',
            ImgUrl: 'https://www.sportline.com.pa/media/catalog/product/c/j/cj4456-100-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg',
        },
        {
            id: 2,
            name: 'Pantalon Xl',
            price: '$ 20',
            ImgUrl: 'https://yazbek.com.mx/cdn/shop/products/C0651-pantalon-mezclilla-caballero-100algodon-indigo-oscuro_1.jpg?v=1681314233',
        },
        {
            id: 3,
            name: 'Pan',
            price: '$ 12',
            ImgUrl: 'https://ds1e83w8pn0gs.cloudfront.net/fotosmultisite/502534-1.jpg',
        },
        {
            id: 4,
            name: 'Pesas',
            price: '$ 12',
            ImgUrl: 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00071528072447l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        },
        {
            id: 5,
            name: 'Barra',
            price: '$ 40',
            ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTv8gJu4BdDC8HmBDB1KpWMMDsaLRXrC5J3dKXbYuxKQKTdrFSa1BsQNwaaTJiZTJr1M&usqp=CAU',
        },
        {
            id: 6,
            name: 'Salta Cuerdas',
            price: '$ 5',
            ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5n7YV2Tf4tL_yicFe2wKnt07tzehgpzyRQ&usqp=CAU',
        },
        {
            id: 7,
            name: 'Zapatos Nike',
            price: '$ 26',
            ImgUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/calzado-air-force-1-07-b19lqD.png',
        },
        {
            id: 8,
            name: 'Cafe',
            price: '$ 5',
            ImgUrl: 'data:image/jpeg;base64,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',
        },
        {
            id: 9,
            name: 'Peluche',
            price: '$ 20',
            ImgUrl: 'https://chedrauimx.vtexassets.com/arquivos/ids/17786552-800-auto?v=638278835859300000&width=800&height=auto&aspect=true',
        },
        {
            id: 10,
            name: 'Pulcera',
            price: '$ 7',
            ImgUrl: 'https://www.elnuevoherald.com/guiasdecompra/_next/image?url=https%3A%2F%2Fnh.revoousandbox.com%2Fguiasdecompra%2Fwp-content%2Fuploads%2F2023%2F05%2FPulsera-de-mejor-amigo-para-2-Ying-Yang.jpg&w=640&q=75',
        }
    ];
    
    return(
        <Container fluid>
            <div className="title-holder mb-4">
                <h2 className="mt-3">Product List</h2>
            </div>
            <Row className="">
                <div className="mx-5">
                    <Col size={12} xs={12} md={6} xl={12}>
                        <Row>
                            {
                                products.map((product, index) => {
                                    return (
                                        <ProductItem
                                            key={index}
                                            {...product}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    
                </div>
            </Row>
        </Container>
    );
}