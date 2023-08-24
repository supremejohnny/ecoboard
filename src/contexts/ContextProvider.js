import React, {createContext, useContext, useState} from 'react';
import { Cart } from "../components";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}


export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);
    const [activeSet, setActiveSet] = useState(true);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const handleClick = (clicked) => {
        setisClicked({ ...initialState, [clicked]:true});
      }
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    return (
        <StateContext.Provider 
        value = {{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setscreenSize,
            activeSet,
            setActiveSet,
            setColor,
            setMode,
            currentMode,
            currentColor,
            themeSettings,
            setThemeSettings, }}>
                {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);