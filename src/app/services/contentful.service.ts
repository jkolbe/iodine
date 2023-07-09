import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../pages/article/article';
import { GET_ARTICLE } from '../queries';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor(private apollo: Apollo) {}

  getArticle(id:string): Observable<Article>{
    return this.apollo
      .watchQuery({
        query: GET_ARTICLE,
        variables: {
          id: id
        }
      })
      .valueChanges.pipe(map(result => (result.data as any).article));
  }

}
