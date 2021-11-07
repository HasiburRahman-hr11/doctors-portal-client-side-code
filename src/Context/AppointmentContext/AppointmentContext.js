import { createContext } from "react";
import useAppointments from "../../hooks/useAppointments";

export const AppointmentContext = createContext();

const AppointmentContextProvider = ({ children }) => {
    const allContext = useAppointments();
    return (
        <AppointmentContext.Provider value={allContext}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentContextProvider;