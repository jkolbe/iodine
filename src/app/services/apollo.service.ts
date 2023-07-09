import { Observable } from 'rxjs';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
 
@Injectable()
class ApolloService {
  private apollo: ApolloBase;
 
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }
 
  // getData(): Observable<ApolloQueryResult> {
  //   return this.apollo.watchQuery({
  //     query: gql`
  //       {
  //         rates(currency: "USD") {
  //           currency
  //           rate
  //         }
  //       }
  //     `,
  //   });
  // }
}