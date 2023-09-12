import {
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Put,
  Body,
  Query
} from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { MarkerDto } from "./dto/marker.dto";

@Controller("marker")
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {
  }

  @Get(":id")
  async get(@Param("id", IdValidationPipe) id: string) {
    return this.databaseService.byId(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  async create(@Body() dto: MarkerDto) {
    return this.databaseService.create(dto);
  }


  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  async update(
    @Param("id", IdValidationPipe) id: string,
    @Body() dto: MarkerDto
  ) {
    return this.databaseService.update(id, dto);
  }

  @Get()
  async getAll(@Query("searchTerm") searchTerm?: string) {
    return this.databaseService.getAll(searchTerm);
  }
}
