import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface MakerModel extends Base { }

export class MakerModel extends TimeStamps {
	@prop()
	name: string

	@prop()
	rate: number

	@prop()
	location: {
		lat: number;
		long: number;
		name_address: string;
	}

	@prop()
	barrier_free_elements: string[];

}
