import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button, Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

export const DishCard = (props) => {
  // Props
  const { name, description, image, dish } = props;
  // Context
  const appContext = useContext(AppContext);
  const { addItem } = appContext;

  return (
    <Col xs="6" sm="4" style={{ padding: 0 }}>
      <Card style={{ margin: "0 10px" }}>
        <CardImg
          src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
          top={true}
          style={{ height: 250 }}
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardTitle>{description}</CardTitle>
        </CardBody>
        <div className="card-footer">
          <Button outline color="primary" onClick={() => addItem(dish)}>
            <p>+カートに入れる</p>
          </Button>
        </div>
      </Card>
      <style jsx>
        {`
          a {
            color: white;
            background: teal;
            padding: 5px;
            border-radius: 5px;
            text-decoration: none;
            transition: all 0.3s;
          }
          p {
            margin: 0;
            font-size: 0.8rem;
          }
          a:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </Col>
  );
};
