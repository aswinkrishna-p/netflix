import React, {useEffect,useState} from 'react';
import './RowPost.css'
import YouTube from 'react-youtube';
import axios  from '../../axios';
import { API_KEY,imageUrl } from '../../constants/constants';

function RowPost(props) {
    const [movies ,setMovies] = useState([])
    const [urlId,seturlId] = useState()
    useEffect(()=>{
        axios.get(props.url).then(response =>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err => {
            alert('Network error', err)
        })
    },[])

    const opts ={
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }

    const handleMovie = (id) =>{
        axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response =>{
            if(response.data.results.length !== 0){
                seturlId(response.data.results[0])
            }else{
                console.log('video not found');
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>(
                <div>
                <img onClick={()=>(handleMovie(obj.id))} className={props.isSmall ? 'smallPoster' :'poster' } src={`${imageUrl+obj.backdrop_path}`} alt="posterimg" />
                <h4 className='movieTitle'>{obj.original_name ? obj.original_name : obj.original_title}</h4>
                </div>
                )

                )}

            </div>

            <div>
                {urlId && <YouTube opts={opts} videoId= {urlId.key} />}
            </div>
            
        </div>
    );
}

export default RowPost;