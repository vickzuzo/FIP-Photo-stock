import React from "react";
import { Tab, TabContainer } from "./styles";

const Tabs = ({ handleTabChange, currentTab, tabs }) => {
  return (
    <TabContainer>
      {tabs.map((tab, index) => (
        <Tab active={currentTab === tab} onClick={() => handleTabChange(tab)}>
          {tab}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default Tabs;
