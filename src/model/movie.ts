import {Company} from './company';



export class Movie{
    
    id:number;
    popularity:number;
    vote_count:number;
    video:boolean;
    poster_path:string;
    adult:boolean;
    backdrop_path:string;
    original_language: string;
    original_title: string;
    genre_ids: Array<number>;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
    pathPoster: string;
    production_companies:Array<Company>

}