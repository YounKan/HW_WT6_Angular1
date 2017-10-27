import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetBookService {

  constructor(private http:Http ) { }
  getPhotoList(){
    return this.http.get("https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C")
 .map((res) => res.json());
  }

}
