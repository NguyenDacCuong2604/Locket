import { ToastAndroid } from "react-native";
export const ToastMessage = (message) => {
    ToastAndroid.show(message, ToastAndroid.LONG);
};