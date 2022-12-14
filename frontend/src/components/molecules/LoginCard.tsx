import { userLoginInfoState } from "../../store/UserLoginInfo";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useRecoilState } from "recoil";

// Type
type Props = {
  onClick: () => void;
};

export const LoginCard = (props: Props) => {
  // Props
  const { onClick } = props;

  // Recoil
  const [userLoginInfo, setUserLoginInfo] = useRecoilState(userLoginInfoState);

  // OnChange
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  };

  // Console

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <h2>ログイン</h2>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>メールアドレス :</Label>
                  <Input
                    type="email"
                    name="identifier"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => handleOnChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード :</Label>
                  <Input
                    type="password"
                    name="password"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => handleOnChange(e)}
                  />
                </FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか？</small>
                  </a>
                </span>
                <Button
                  color="primary"
                  style={{ float: "right", width: 120 }}
                  onClick={onClick}
                >
                  ログイン
                </Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px;
          }
        `}
      </style>
    </Container>
  );
};
