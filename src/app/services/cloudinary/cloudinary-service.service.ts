import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryServiceService {

  constructor(private http: HttpClient) { }



  cloudinaryRootUrl = `https://api.cloudinary.com/v1_1/dpevaxuko/image/upload`
  cloudinaryPreset = 'kg9s7tf8'


  cloudUpload(file: File, id: string): Observable<any> {

    const file_name = file.name.split('.')[0];
    const public_id = id + '_' + Date.now() + '_' + file_name;

    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", this.cloudinaryPreset);
    formData.append("public_id", public_id);

    return this.http.post(this.cloudinaryRootUrl, formData);

  }



}
