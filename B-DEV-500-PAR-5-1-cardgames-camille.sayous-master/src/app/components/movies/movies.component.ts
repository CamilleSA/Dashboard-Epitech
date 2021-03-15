import { Component, OnInit } from '@angular/core';
import {MoviedataService} from '../../shared/services/moviedata.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Object[];
  searchStr: string;
  searchRes: Array<Object>;


  constructor(private moviesService: MoviedataService) {

  }

  ngOnInit() {
    this.moviesService.getNowPlayingMovies().subscribe(res => 
      this.movies=res.results,error=>console.log(error))
  }

 

}
