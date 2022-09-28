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

  getCardList() : Observable<any> {
    const auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKdWFuIFphcGF0YSIsImRhdGEiOnsiY29tcGFueSI6eyJ0YmxDb21wYW55VHlwZUlkIjoxNDgsInRibENvbXBhbnlOYW1lIjoiSW1wb3J0cyBhbmQgZXhwb3J0cyAiLCJ0YmxDb21wYW55VGF4aWQiOiIxMTIyMzM0NDU1NjY3NyIsInRibENvbXBhbnlJZCI6MTQ4fSwibG9jYXRpb25zIjpbeyJ0YmxMb2NhdGlvblRhYmxlUXR5IjowLCJ0YmxMb2NhdGlvbkNvbnRhY3RlbWFpbCI6ImpkYXZpZDE0OUBob3RtYWlsLmNvbSIsInRibExvY2F0aW9uU3RvcmVudW1iZXIiOiIxMDAxNDU5IiwidGJsTG9jYXRpb25JZCI6MTMwMiwidGJsTG9jYXRpb25TdG9yZW5hbWUiOiJMb2NhdGlvbiAxNDU5IiwidGJsTG9jYXRpb25Db250YWN0bmFtZSI6Ikp1YW4gWmFwYXRhIn0seyJ0YmxMb2NhdGlvblRhYmxlUXR5IjowLCJ0YmxMb2NhdGlvbkNvbnRhY3RlbWFpbCI6ImpkYXZpZDE0OUBob3RtYWlsLmNvbSIsInRibExvY2F0aW9uU3RvcmVudW1iZXIiOiJodHRwczovL2Fpb2RtMi5jb20vIiwidGJsTG9jYXRpb25JZCI6MTQzMCwidGJsTG9jYXRpb25TdG9yZW5hbWUiOiJodHRwczovL2Fpb2RtMi5jb20vIiwidGJsTG9jYXRpb25Db250YWN0bmFtZSI6Ikp1YW4gWmFwYXRhIn1dLCJlbWFpbCI6ImpkYXZpZDE0OTdAaG90bWFpbC5jb20iLCJhZ2UiOm51bGwsInJvbCI6eyJpZCI6NjEzMTYsInJvbE5hbWUiOiJBZG1pbiJ9LCJzdGF0dXMiOnsidGJsVXNlcnN0YXR1c05hbWUiOiJBY3RpdmUiLCJ0YmxVc2Vyc3RhdHVzSWQiOjMzfX0sImlzcyI6IkFJTyIsImV4cCI6MTY2NDM4NjAxN30.1SrwMf2YHYX-iGUaN8E10Rdz6DTiMnfPP_fj9Cr5D5Y';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get('/api/aiocards/cardbyuser/197', {headers:headers});
}
}
