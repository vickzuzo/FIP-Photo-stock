import { useState } from "react";

export const useDisclosure = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const onOpen = () => setState(true);
  const onClose = () => setState(false);
  const toggle = () => setState(!state);
  const isOpen = state;
  return { isOpen, onOpen, onClose, toggle };
};
