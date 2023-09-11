import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { MakerModel } from './marker.model';
import { DatabaseService } from './database.service';

@Module({
  imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: MakerModel,
				schemaOptions: {
					collection: 'marker',
				},
			},
		]),
	],
  controllers: [DatabaseController],
  providers: [DatabaseService]
})
export class DatabaseModule {}
