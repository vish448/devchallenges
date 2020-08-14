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
                name={"default"} />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus "} />
              <Button 
                text={"Default"}
                name={"default-hover"} />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={"<Button variant=\"outline\" />"} />
              <Button 
                text={"Default"}
                name={"outline"} />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus"} />
              <Button 
                text={"Default"}
                name={"outline-hover"} />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={"<Button variant=\"text\" />"} />
              <Button 
                text={"Default"}
                name={"txt"} />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus"} />
              <Button 
                text={"Default"}
                name={"txt-btn-hover"} />
            </div>
          </Row>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
