import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GET_ARTICLES } from './queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'iodine';
  loading: boolean = false;
  posts: any;

  articles!: Observable<any>;
 
  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_ARTICLES,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
        console.log('data', data)
      });

    this.articles = this.apollo
      .watchQuery({ query: GET_ARTICLES })
      .valueChanges.pipe(map(result => (result.data as any).posts));
  }
 
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
