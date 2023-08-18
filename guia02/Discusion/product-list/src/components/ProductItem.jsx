import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const ProductItem = ({id,name,price,ImgUrl}) => {

    return(
        <Col size={4} >
            <Card style={{ width: '18rem' }}>
                <Card.Img className='center' variant="top" height={286} width={186} src={ImgUrl} 
                style={{ alignSelf: 'center'}}
                />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">ID: {id}</Card.Subtitle>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}