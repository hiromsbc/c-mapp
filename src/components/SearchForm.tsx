
import { Button, Col, Container, Form as BaseForm, Row } from "react-bootstrap";

export type SearchFormProps = {
    paramAddress1: string;
    paramAddress2?: string;
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
    return (
        <Container>
            <BaseForm style={{margin: 10}}>
                <Row>
                    <Col>
                        <BaseForm.Control
                            name={"paramAddress1"}
                            placeholder={"住所１"}
                            type={"text"}
                        />
                    </Col>
                    {/*<Col>
                        <BaseForm.Control
                            name={"paramAddress2"}
                            placeholder={"住所２"}
                            type={"text"}
                        />
                    </Col>*/}
                    <Col>
                        <Button
                            type="submit"
                        >
                            Search
                        </Button>
                        {"  "}
                        <Button
                            variant="secondary"
                            type="reset"
                        >
                            Clear
                        </Button>
                    </Col>
                </Row>
            </BaseForm>
        </Container>
    )
}