import { useLocalStorage } from "../components/hooks";
import { FavouriteContext } from "../context";


const FavouriteProvider = ({children}) => {
    const [favourites,setFAvourites]= useLocalStorage("favourites",[])
    return(
    <FavouriteContext.Provider value={{favourites}}>
{children}
    </FavouriteContext.Provider>
    )
};

export default FavouriteProvider;