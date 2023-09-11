import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface MakerModel extends Base { }

export class MakerModel extends TimeStamps {
	@prop()
	name: string

	@prop()
	rate: number

	@prop()
	lat?: number

	@prop()
	long?: number

	@prop()
	house_number?: number

	@prop()
	road?: string

}
