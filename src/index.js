import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/layout";
import Button from "./components/Buttons/Buttons";
import ButtonTitle from "./components/Buttons/buttonTitle";
import Row from "./components/Layout/row";
class App extends React.Component {
  render() {
    return (
      <div data-theme="light">
        <Layout>
          <Row>
            <div>
              <ButtonTitle title={"<Button />"} />
              <Button text={"Default"} />
            </div>
            <div>
              <ButtonTitle title={"<Button2 />"} />
              <Button text={"Default 2"} />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={"<Button />"} />
              <Button text={"Default 2"} />
            </div>
          </Row>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
