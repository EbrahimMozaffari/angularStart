import {Component} from "@angular/core";

@Component({
  selector:'app-form',
  templateUrl:'./form.component.html'
})
export class FormComponent{
  siteTitle:string = 'this is first header';
  userName:string = '';
  errorText:string = '';
  password:string='';

  public onInputChanged(e:Event){
    this.siteTitle = `Welcome ${(<HTMLInputElement>e.target).value}`;
    this.userName =(<HTMLInputElement>e.target).value
  }
  public onPassChanged(e:Event){
    let repass = (<HTMLInputElement>e.target).value;
    if(repass === this.password){
      this.errorText = 'password is match';
    }else{
      this.errorText = 'password is NOT match!!!';
    }
  }

}
