import { Container, Row, Col, Card } from 'react-bootstrap'

function Products() {
    let items = [0, 1, 2, 3]
    let dummy = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let loop = [0, 1, 2]
    let test1 = []

    const rows = [...Array(Math.ceil(dummy.length / 4))]
    const productRows = rows.map((row, idx) => dummy.slice(idx * 4, idx * 4 + 4));
    const content = productRows.map((row, idx) => (
        <Row key={idx}>
            { row.map(product => <Col style={{ padding: 0, maxWidth: "25%" }}>
                <Card style={{ margin: 10, maxWidth: "24rem"}}>
                    <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                    <Card.Body>
                        <Card.Title>Rose Gold</Card.Title>
                        <Card.Text>
                            From $199
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>)
    );
   /*  let test = loop.map((value, index) => {
        return <Row>
            {items.map((v, i) => {
                return <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Rose Gold</Card.Title>
                            <Card.Text>
                                From $199
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            })}
        </Row>
    })


    for (let i = 0; i < dummy / 4 + 1; i++) {
        test1.push(
            <Row>
                {
                    getRows(i)
                }
            </Row>
        )
    }

    function getRows(index) {
        let list = []
        for (let i = index * 4; i < dummy.length; i++) {
            list.push(
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Rose Gold</Card.Title>
                            <Card.Text>
                                From $199
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
        return list
    }

    console.log(test1)

    let renderItems =
        loop.map((val, ind) => {
            <Row>
                {items.map((value, index) => {
                    return <Col style={{ padding: 0, width: "20%" }}>
                        <Card style={{ margin: 10 }}>
                            <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                            <Card.Body>
                                <Card.Title>Rose Gold</Card.Title>
                                <Card.Text>
                                    From $199
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        }) */


    return (
        <Container fluid className="" style={{ maxWidth: '80%', marginLeft: "10%", marginRight: "10%", marginTop: 30, marginBottom: 30 }}>
            {/* <Row>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Rose Gold</Card.Title>
                            <Card.Text>
                                From $199
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Rose Gold</Card.Title>
                            <Card.Text>
                                From $199
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Rose Gold</Card.Title>
                            <Card.Text>
                                From $199
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Rose Gold</Card.Title>
                            <Card.Text>
                                From $199
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ padding: 0, width: "20%" }}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img variant="top" src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
            {/* <Row>
                {test}
            </Row> */}
            {content}
        </Container>
    )
}

export default Products;