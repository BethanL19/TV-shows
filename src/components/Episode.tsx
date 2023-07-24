interface EpisodeInfo {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    rating: { average: number };
    runtime: number;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    _links: { self: { href: string } };
  }

interface EpisodeProps {
    episode : EpisodeInfo
}


function Episode(props:EpisodeProps): JSX.Element {
    const padNumber = (num:number):string =>  num<10 ? "0"+num : num.toString()
    const removeTags = (str:string):string => str.includes("<p>") && str.includes("</p>") ? str.substring(3,(str.length-4)) : str
    return (
        <>
            <h3><span>{props.episode.name} - S{padNumber(props.episode.season)}E{padNumber(props.episode.number)}</span></h3>
            <img alt="medium" src = {props.episode.image.medium}/>
            <p>{removeTags(props.episode.summary)}</p>
        </>
    )
}

export default Episode
