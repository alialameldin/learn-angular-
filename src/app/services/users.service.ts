import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

interface User {
  username : string,
  email : string,
  phone : number
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getuser() : Observable<User>
  {
    const headers = new HttpHeaders({
      'content-type': 'app/json',
      'authenticationToken':'123456'
    })
    const params = new HttpParams()
      .set('pagesize','10')
      .set('pagenumber','100')

    return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {headers : headers, params : params} )
  }


  // post function
  addUser(body: any)
  {
    const headers = new HttpHeaders({
      'authenticationkey':'123456'
    })
    const params = new HttpParams()
      .set('UrlRule','admin')

    return this.http.post('https://jsonplaceholder.typicode.com/users',body, {headers: headers, params : params})
  }


  updateUser()
  {
    const headers = new HttpHeaders({
      'content-type': 'app/json',
      'authenticationToken':'5555',
    })

    const params = new HttpParams()
      .set('source','googleAnalytics')

    const putbody = {
      username : 'omar',
      userID : 2
    }
    return this.http.put('https://jsonplaceholder.typicode.com/users/1',putbody, {headers:headers, params:params})
  }

  deleteUser(id: string | number) : Observable<object>{

    const headers = new HttpHeaders({
      'authenticationToken':'user12',
      'expiryToken': '15'
    })

    const params = new HttpParams()
      .set('source','google')

    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id,{headers: headers, params: params})
  }


  /*
    const user = [
      {userID: 1, userName: 'ali'},
      {userID: 2, userName: 'omar'},
      {userID: 3, userName: 'shero'},
    ]
    return user;
  }
  */
}
