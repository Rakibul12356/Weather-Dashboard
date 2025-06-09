

import { useWeather } from '../components/hooks';
import { WeatherContext } from '../context';


const WeatherProvider = ({ children }) => {
    const {loading,error,weatherData}=useWeather();
    return (
        <>
            <WeatherContext.Provider value={{loading,error,weatherData}}>
                {children}
            </WeatherContext.Provider>

        </>
    );
};

export default WeatherProvider;