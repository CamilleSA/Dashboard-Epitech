import { Component, OnInit } from '@angular/core';
import {MoviedataService} from '../../shared/services/moviedata.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  movies: Object[];
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private moviesService: MoviedataService) { }

  ngOnInit(): void {
  }

  searchMovies(results: any) {
    console.log(this.searchStr);
    this.moviesService.getSearchMovies(this.searchStr).subscribe(res => {
        this.searchRes = res.results, error=>console.log(error);
      })
  }

}
