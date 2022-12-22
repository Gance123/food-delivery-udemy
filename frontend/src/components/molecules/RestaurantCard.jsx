import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

export const RestaurantCard = (props) => {
  // Props
  const { id, name, description, image } = props;

  return (
    <Col xs="6" sm="4">
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
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
          <Link href={`/restaurants?id=${id}`} as={`/restaurants/id=${id}`}>
            <a>もっとみる</a>
          </Link>
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
          .card-footer {
            text-align: center;
          }
          a:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </Col>
  );
};
