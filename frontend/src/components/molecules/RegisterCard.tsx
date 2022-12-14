import { userInfoState } from "../../store/UserInfo";
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
import { useRecoilState, useSetRecoilState } from "recoil";

// Type
type Props = {
  onClick: () => void;
};

export const RegisterCard = (props: Props) => {
  // Props
  const { onClick } = props;

  // Recoil
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <h2>ユーザー登録</h2>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>ユーザー名 :</Label>
                  <Input
                    type="text"
                    name="username"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, username: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>メールアドレス :</Label>
                  <Input
                    type="email"
                    name="email"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード :</Label>
                  <Input
                    type="password"
                    name="password"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, password: e.target.value })
                    }
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
                  登録
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
