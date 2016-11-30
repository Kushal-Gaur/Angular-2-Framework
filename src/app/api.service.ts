import { Injectable, Inject } from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';

export class ApiConfig {
    apiUrl: string;
    counter : number;
    //apiToken: string;

    constructor ()
    {
      this.apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
      //this.apiToken = "";
    }
}

@Injectable()
export class ApiService {
    counter : number;
  // We can easily inject the API config using the DI token created when
      //  the application was bootstrapped
      //
      constructor( private http :Http
      ) {
          this.counter=0;
          console.log("Created new instance of ApiService");
      }

      getData(){
          this.counter++;
          console.log("Using same service instance, increment counter:"+this.counter);
       //return this.http.get(this.apiConfig.apiUrl).map(res => res.json());
   }
}
