import { IsString, IsInt } from 'class-validator';

export class MarkerDto {
  name: string;

  rate: number;

  lat?: number;

  long?: number;

  house_number?: number;

  road?: string;
}
