import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProfileAPIConstant } from 'src/app/api/profile/profile-api.constant';
import { ResponseDTO } from 'src/app/dtos/profile/response.dto';


@Injectable()
export class ProfileService {
  /**
   * @param HTTP para hacer las peticiones a los servicios REST
   */
  constructor(private http: HttpClient) { }


  public createProfile(profile): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(
      `${ProfileAPIConstant.URL_}`,
      profile
    );
  }


  public updateProfile(profile, id): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(
      `${ProfileAPIConstant.URL_}/${id}`,
      profile
    );
  }

  
  public consultarProfile(email:string) :Observable<any> {
    return this.http.get<any>(`${ProfileAPIConstant.URL_}/${email}`);
  }


}
