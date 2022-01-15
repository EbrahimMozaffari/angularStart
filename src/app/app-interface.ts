export interface user {
  email:string;
  password:string;
  address:string;
}

export interface IUser
{
  name:string;
  age:number;
}

export interface ICarouselContext
{
  $implicit:string,
  controller:{
    next:()=>void,
    prev:()=>void,
  }
}
