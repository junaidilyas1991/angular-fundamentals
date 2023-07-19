import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  year?: number;
  month?: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;

    // Add non-null assertion operator (!) to params object
    this.year = +params.get('year')!;
    this.month = +params.get('month')!;
  }

}
