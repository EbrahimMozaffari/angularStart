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

export interface FUser
{
  id:number,
  name:string,
}
export interface SUser
{
  id:number,
  name:string,
  email:string,
}

export interface ICarouselContext
{
  $implicit:string,
  controller:{
    next:()=>void,
    prev:()=>void,
  }
}
