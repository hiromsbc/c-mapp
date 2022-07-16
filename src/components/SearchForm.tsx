
import { Button, Col, Container, Form as BaseForm, Row } from "react-bootstrap";

export type SearchFormProps = {
    paramAddress1: string;
    paramAddress2?: string;
    onClick?: React.MouseEventHandler

}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
    return (
        <Container>
            <BaseForm style={{margin: 10}}>
                <Row>
                    <Col>
                        <BaseForm.Control placeholder="住所１" />
                    </Col>
                    <Col>
                        <BaseForm.Control placeholder="住所２" />
                    </Col>
                    <Col>
                        <Button
                            onClick={props.onClick}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </BaseForm>
        </Container>
    )
}