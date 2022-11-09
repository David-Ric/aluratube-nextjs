import config from '../../../config.json'
import {StyledTimeline} from '../Styles/StyledTimeline'


export default function Timeline({searchValue, ...props}){
    const playListNames = Object.keys(props.playlists);
    return(
        <StyledTimeline>
            {playListNames.map((playListName)=>{
                const videos = props.playlists[playListName];
                return (<>
                    <section key={playListName}>
                        <h2>{playListName}</h2>
                        <div>
                            {videos
                            .filter((video)=>{
                                const titleNormalize = video.title.toLowerCase();
                                const searchValueNormalize = searchValue.toLowerCase();
                                return titleNormalize.includes(searchValueNormalize)
                            })
                            .map((video)=>{
                                return (<>
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                    </>)
                           })};
                        </div>
                    </section>
                    </>)
            })};
        </StyledTimeline>
    )
}