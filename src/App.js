import React, { Component } from "react";
import Form, { SimpleItem, ButtonItem } from "devextreme-react/form";
import { SelectBox } from "devextreme-react";
import { users } from "./data";

class App extends Component {
  render() {
    return (
      <div>
        This is SelectBox
        <SelectBox
          dataSource={{
            store: {
              type: "array",
              key: "id",
              data: users
            },
            paginate: true,
            pageSize: 50
          }}
          valueExpr={"id"}
          displayExpr={"name"}
          searchExpr={["name", "email"]}
          itemRender={function(itemData) {
            return (
              <div>
                {itemData.name}
                <span style={{ color: "red", fontWeight: "bold" }}> | </span>
                {itemData.email}
              </div>
            );
          }}
          searchEnabled={true}
          showClearButton={true}
        />
        <br />
        <br />
        This is SimpleItem (editorType="dxSelectBox") in Form
        <Form colCount={1}>
          <SimpleItem
            dataField={"id"}
            label={{ text: "User" }}
            editorType={"dxSelectBox"}
            isRequired={true}
            editorOptions={{
              dataSource: {
                store: {
                  type: "array",
                  key: "id",
                  data: users
                },
                paginate: true,
                pageSize: 50
              },
              valueExpr: "id",
              displayExpr: "name",
              itemRender: function(itemData) {
                return (
                  <div>
                    {itemData.name}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {" "}
                      |{" "}
                    </span>
                    {itemData.email}
                  </div>
                );
              },
              searchExpr: ["code", "name"],
              searchEnabled: true,
              showClearButton: true
            }}
          />

          <ButtonItem
            horizontalAlignment={"left"}
            buttonOptions={{
              text: "Button1",
              type: "default",
              stylingMode: "outlined",
              useSubmitBehavior: true
            }}
          />
        </Form>
      </div>
    );
  }
}

export default App;
