
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const {loading, gifs} = useFetchGifs(category);
    
    return (
        <>
        <h3>{ category }</h3>
        { loading && <p>Loading...</p>}
        <div className='card-grid'>
        
            {
            gifs.map((imgData) => 
            <GifGridItem 
                key={imgData.id}
                {...imgData}
            />)
            }
        </div>
        </>
        )
    }
    