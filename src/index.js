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
                color={"default"}
                onClick={() => alert("<Button text={'default'} />")}
                
              />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus "} />
              <Button
                text={"Default"}
                name={"default-hover"}
                color={"default"}
                
              />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={'<Button variant="outline" />'} />
              <Button
                text={"Default"}
                name={"outline"}
                variant={"outline"}
                color={"outline"}
            
              />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus"} />
              <Button
                text={"Default"}
                name={"outline-hover"}
                variant={"outline"}
                color={"outline"}
                
              />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={'<Button variant="text" />'} />
              <Button
                text={"Default"}
                name={"txt"}
                variant={"text"}
                color={"outline-text"}
               
              />
            </div>
            <div>
              <ButtonTitle title={"&:hover, &:focus"} />
              <Button
                text={"Default"}
                name={"txt-btn-hover"}
                variant={"text"}
                color={"outline-text"}
                
              />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={"<Button disableShadow />"} />
              <Button
                text={"Default"}
                name={"disabledShadow"}
                disabledshadow="true"
                color={"primary"}
              />
            </div>
          </Row>
          <Row>
            <div>
              <ButtonTitle title={"<Button disable />"} />
              <Button
                text={"Default"}
                name={"disabledShadow"}
                disabledshadow="true"
                color={"primary"}
                disabled="disabled"
              />
            </div>
            <div>
              <ButtonTitle title={"<Button variant=\"text\" disabled/>"} />
              <Button
                text={"Disabled"}
                name={"disabled"}
                color={"primary"}
                disabled="disabled"
                variant={"text"}
              />
            </div>
          </Row>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
