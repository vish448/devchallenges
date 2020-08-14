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
              <Button 
                text={"Default"} 
                name={"default"}
                shadow={"box-shadow"} />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus "} />
              <Button 
                text={"Default"}
                name={"default-hover"}
                shadow={"box-shadow"} />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={"<Button variant=\"outline\" />"} />
              <Button text={"Default 2"} />
            </div>
          </Row>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
