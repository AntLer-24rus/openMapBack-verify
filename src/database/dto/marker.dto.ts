import { IsArray, IsNumber, IsObject, IsString } from "class-validator";

export class MarkerDto {
  @IsString()
  name: string;

  @IsNumber()
  rate: number;

  @IsObject()
  location : {
    
    lat: number;

    long: number;
  
    name_address: string;
  
  };

  @IsArray()
  barrier_free_elements : string[]
 
}
