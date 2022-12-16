import React from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import { useSetRecoilState, SetterOrUpdater } from "recoil";

import { inputState } from "../../store/InputState";

export const SearchInput = () => {
  // Recoil
  const setInputText: SetterOrUpdater<{ inputText: string }> | any =
    useSetRecoilState(inputState);

  // UseEffect
  React.useEffect(() => {
    setInputText("r");
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col>
            <div className="search">
              <InputGroup>
                <InputGroupText>探す</InputGroupText>
                <Input
                  placeholder="レストラン名を入力してください"
                  onChange={(e) => setInputText(e.target.value.toLowerCase())}
                />
              </InputGroup>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </>
  );
};
