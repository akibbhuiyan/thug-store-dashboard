import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvder = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSetting, setThemeSetting] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode ", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode ", color);
    setThemeSetting(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
    setThemeSetting(false);
  };
  const handleClose = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        handleClose,
        currentMode,
        currentColor,
        themeSetting,
        setThemeSetting,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
