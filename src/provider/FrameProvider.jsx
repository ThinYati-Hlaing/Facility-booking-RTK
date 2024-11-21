import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";


export default function FrameProvider({ children }) {
    return (
        <StrictMode>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
                </PersistGate>
            </Provider>
        </StrictMode>
    )
}