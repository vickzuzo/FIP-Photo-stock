import { Button as FlexiButton } from "flexibull2/build/button";
import { Modal } from "flexibull2/build/modal";
import React, { useState } from "react";
import { Button, Tabs } from "../components";
import { useDisclosure } from "../hooks";
import {
  ModalBody,
  ModalCloseButton,
  ModalTitle,
  StyledDemoModalContainer,
  StyledDistributionContainer,
  StyledFlexiBullContainer,
} from "../styles/UiStyles";
import { AiOutlineClose } from "react-icons/ai";
import { FlexiTable, Table } from "flexibull2/build/table";
import { CheckBoxTree } from "flexibull2/build/checkboxtree";

const Flexibull = () => {
  const [currentTab, setCurrentTab] = useState("UI");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledFlexiBullContainer>
      <Tabs
        handleTabChange={handleTabChange}
        currentTab={currentTab}
        tabs={["UI", "usage"]}
      />

      {currentTab === "UI" && (
        <StyledDistributionContainer>
          <FlexiButton round color="#1f1f53" pad="0px 4rem">
            Default Button
          </FlexiButton>
          <div style={{ marginTop: "2rem" }}>
            <Button onClick={onOpen}>Open Modal</Button>
          </div>
        </StyledDistributionContainer>
      )}
      {currentTab === "usage" && (
        <StyledDistributionContainer>
          <p>Usage</p>
          {/* <Table>
              <tr>
                <p>Awesome</p>
              </tr>
            </Table> */}
        </StyledDistributionContainer>
      )}
      <Modal open={isOpen} center={true} onClose={onClose}>
        <StyledDemoModalContainer>
          <ModalCloseButton onClick={onClose}>
            <AiOutlineClose />
          </ModalCloseButton>
          <ModalTitle>Header Title</ModalTitle>
          <ModalBody>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </ModalBody>
        </StyledDemoModalContainer>
      </Modal>
    </StyledFlexiBullContainer>
  );
};

export default Flexibull;
