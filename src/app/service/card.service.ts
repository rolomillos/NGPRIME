import { Injectable } from '@angular/core';
//import {HttpClientModule} from ''
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICard } from '../interfaces/card.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }

  getCardList(userId:number , page:number, size:number) : Observable<any> {
    //debugger;
    let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKdWFuIFphcGF0YSIsImRhdGEiOnsiY29tcGFueSI6eyJ0YmxDb21wYW55VHlwZUlkIjoxNDgsInRibENvbXBhbnlOYW1lIjoiSW1wb3J0cyBhbmQgZXhwb3J0cyAiLCJ0YmxDb21wYW55VGF4aWQiOiIxMTIyMzM0NDU1NjY3NyIsInRibENvbXBhbnlJZCI6MTQ4fSwibG9jYXRpb25zIjpbeyJ0YmxMb2NhdGlvblRhYmxlUXR5IjowLCJ0YmxMb2NhdGlvbkNvbnRhY3RlbWFpbCI6ImpkYXZpZDE0OUBob3RtYWlsLmNvbSIsInRibExvY2F0aW9uU3RvcmVudW1iZXIiOiIxMDAxNDU5IiwidGJsTG9jYXRpb25JZCI6MTMwMiwidGJsTG9jYXRpb25TdG9yZW5hbWUiOiJMb2NhdGlvbiAxNDU5IiwidGJsTG9jYXRpb25Db250YWN0bmFtZSI6Ikp1YW4gWmFwYXRhIn0seyJ0YmxMb2NhdGlvblRhYmxlUXR5IjowLCJ0YmxMb2NhdGlvbkNvbnRhY3RlbWFpbCI6ImpkYXZpZDE0OUBob3RtYWlsLmNvbSIsInRibExvY2F0aW9uU3RvcmVudW1iZXIiOiJodHRwczovL2Fpb2RtMi5jb20vIiwidGJsTG9jYXRpb25JZCI6MTQzMCwidGJsTG9jYXRpb25TdG9yZW5hbWUiOiJodHRwczovL2Fpb2RtMi5jb20vIiwidGJsTG9jYXRpb25Db250YWN0bmFtZSI6Ikp1YW4gWmFwYXRhIn1dLCJ1c2VyaWQiOjQzNSwiZW1haWwiOiJqZGF2aWQxNDk3QGhvdG1haWwuY29tIiwiYWdlIjpudWxsLCJyb2wiOnsiaWQiOjYxMzE2LCJyb2xOYW1lIjoiQWRtaW4ifSwic3RhdHVzIjp7InRibFVzZXJzdGF0dXNOYW1lIjoiQWN0aXZlIiwidGJsVXNlcnN0YXR1c0lkIjozM319LCJpc3MiOiJBSU8iLCJleHAiOjE2NjQ1MDk1MTR9._plftbJzcz0o7aUAx-wyuxvg12h1AbPr8mPgM9zDu1o";
    const headers = {headers: new HttpHeaders({'Content-Type':'application/json;charset=utf-8',
                                            'Authorization':token})};
    const url =  "http://66.179.57.61:8080/api/aiocards/cardbyuser?tbluserid=" +userId+"&page="+page+"&size="+size;
    console.log(url);
    let a = this.http.get<any>(url, headers);
    return a;


/*

    const auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKdWFuIFphcGF0YSIsImRhdGEiOnsiY29tcGFueSI6eyJ0YmxDb21wYW55VHlwZUlkIjoxNDgsInRibENvbXBhbnlOYW1lIjoiSW1wb3J0cyBhbmQgZXhwb3J0cyAiLCJ0YmxDb21wYW55VGF4aWQiOiIxMTIyMzM0NDU1NjY3NyIsInRibENvbXBhbnlJZCI6MTQ4fSwibG9jYXRpb25zIjpbeyJ0YmxMb2NhdGlvblRhYmxlUXR5IjowLCJ0YmxMb2NhdGlvbkNvbnRhY3RlbWFpbCI6ImpkYXZpZDE0OUBob3RtYWlsLmNvbSIsInRibExvY2F0aW9uU3RvcmVudW1iZXIiOiIxMDAxNDU5IiwidGJsTG9jYXRpb25JZCI6MTMwMiwidGJsTG9jYXRpb25TdG9yZW5hbWUiOiJMb2NhdGlvbiAxNDU5IiwidGJsTG9jYXRpb25Db250YWN0bmFtZSI6Ikp1YW4gWmFwYXRhIn0seyJ0YmxMb2NhdGlvblRhYmxlUXR5IjowLCJ0YmxMb2NhdGlvbkNvbnRhY3RlbWFpbCI6ImpkYXZpZDE0OUBob3RtYWlsLmNvbSIsInRibExvY2F0aW9uU3RvcmVudW1iZXIiOiJodHRwczovL2Fpb2RtMi5jb20vIiwidGJsTG9jYXRpb25JZCI6MTQzMCwidGJsTG9jYXRpb25TdG9yZW5hbWUiOiJodHRwczovL2Fpb2RtMi5jb20vIiwidGJsTG9jYXRpb25Db250YWN0bmFtZSI6Ikp1YW4gWmFwYXRhIn1dLCJ1c2VyaWQiOjQzNSwiZW1haWwiOiJqZGF2aWQxNDk3QGhvdG1haWwuY29tIiwiYWdlIjpudWxsLCJyb2wiOnsiaWQiOjYxMzE2LCJyb2xOYW1lIjoiQWRtaW4ifSwic3RhdHVzIjp7InRibFVzZXJzdGF0dXNOYW1lIjoiQWN0aXZlIiwidGJsVXNlcnN0YXR1c0lkIjozM319LCJpc3MiOiJBSU8iLCJleHAiOjE2NjQ0MDA0OTh9.dVz4o1kLAbXr_pMlNbxO1nsVy1if6ATyeghvl7XaiwI';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get('http://66.179.57.61:8080/api/aiolocations/location/1275', {headers:headers});
    */
}
}
