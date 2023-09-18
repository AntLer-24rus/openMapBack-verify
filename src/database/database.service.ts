import { Injectable, NotFoundException } from "@nestjs/common";
import { MarkerDto, UpdateMarkerDto } from "./dto/marker.dto";
import { MakerModel } from "./marker.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { InjectModel } from "nestjs-typegoose";

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(MakerModel) private readonly MarkerModel: ModelType<MakerModel>
  ) {
  }

  async getAll(searchTerm?: string) {
    let options = {};

    if (searchTerm)
      options = {
        $or: [
          {
            name: new RegExp(searchTerm, "i")
          },
          {
            slug: new RegExp(searchTerm, "i")
          }
        ]
      };

    return this.MarkerModel.aggregate()
      .match(options)
      .lookup({
        from: "marker",
        localField: "_id",
        foreignField: "markerId",
        as: "marker"
      })
      .project({ __v: 0, updatedAt: 0, marker: 0 })
      .sort({ createdAt: -1 })
      .exec();

  }

  async create(dto: MarkerDto) {
    const marker = await this.MarkerModel.create(dto);
    return marker;
  }

  async byId(_id: string) {
    const marker = await this.MarkerModel.findById(_id);
    if (!marker) throw new NotFoundException("Actor not found!");

    return marker;
  }

  async update(_id: string, dto: UpdateMarkerDto ) {
    const updateDoc = await this.MarkerModel.findByIdAndUpdate(_id, dto, {
      new: true
    }).exec();
    if (!updateDoc) throw new NotFoundException("Actor not found");
    return updateDoc;
  }
}
