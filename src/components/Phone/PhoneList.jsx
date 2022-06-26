import { Accordion, Card, Row, Col, Button } from "react-bootstrap";
import { initialPhoneType } from "../../schemas/newuser";
import Phone from "./Phone.jsx";
import React from "react";

const PhonesList = ({ fieldPhones, control, errors, remove, append }) => {
  return (
    <>
      {fieldPhones.length === 0 ? (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Phone Information</Accordion.Header>
            <Accordion.Body>
              {fieldPhones.length === 0 && (
                <Row>
                  <Col sm={2}>
                    <Button
                      style={{ width: "100%" }}
                      variant="primary"
                      onClick={() => {
                        append({ ...initialPhoneType });
                      }}
                    >
                      Add Phone
                    </Button>
                  </Col>
                </Row>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Card>
          <Card.Header>Phone Information</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                {fieldPhones.map((phoneItem, idx) => {
                  return (
                    <Phone
                      key={phoneItem.id}
                      fieldName={`phones[${idx}]`}
                      control={control}
                      errors={errors}
                      remove={remove}
                      append={append}
                      index={idx}
                    />
                  );
                })}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default React.memo(PhonesList);
