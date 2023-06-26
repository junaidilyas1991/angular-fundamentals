import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit{
  url: string = 'https://api.github.com/users/mosh-hamedani/followers'
  followers!: any[];
  constructor(private service: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
  
        // Perform further processing based on 'id' and 'page'
        console.log(id, page);


          // Return an observable if needed
          return this.service.getAll(this.url)
      })
    )
    .subscribe(followers => this.followers = followers);


  }
  
}
