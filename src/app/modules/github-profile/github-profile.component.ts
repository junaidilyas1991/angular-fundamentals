import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    // Approach 1: Snapshot approach
    // The snapshot approach returns the parameter value as a string.
    // This approach is useful when you only need to retrieve the parameter value once.
    
    this.id = this.route.snapshot.paramMap.get('id');
    
    // Approach 2: Observable approach
    // Set up an observable subscription to the paramMap observable of the current route.
    // This allows listening for changes to the parameter value over time.
    // This approach is useful when you need to react to parameter value changes dynamically or if you navigate within the same component.
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        this.id = +idString;
      }
      // Now you can use the 'id' variable for further processing
      console.log(this.id);
    });
  }

}
