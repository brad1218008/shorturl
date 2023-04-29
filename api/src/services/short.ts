import {Data} from "../../datasource";
import {generateId} from "../utils/short";
import {Short} from "../models/short.model";
import {getUTCNow} from "../utils/date";

export class ShortService {
  public getById = async (id: string): Promise<Short | null> => {
    return await Data.getRepository(Short)
      .createQueryBuilder()
      .where("id = :id", { id: id })
      .getOne();
  }

  public create = async (originUrl: string): Promise<Short> => {
    let data = await this.getByOriginUrl(originUrl);

    // if Exist
    if(data != null) {
      return data;
    }

    data = new Short();
    data.id = await this.getUniqueId();
    data.originUrl = originUrl;
    data.createdDate = getUTCNow();

    await Data.createQueryBuilder()
      .insert()
      .into(Short)
      .values(data)
      .execute();
    return data;

  }

  public remove = async (id: string) => {
    await Data.createQueryBuilder()
      .delete()
      .from(Short)
      .where("id = :id", { id: id })
      .execute();
  }

  private getByOriginUrl = async (origin_url: string): Promise<Short | null> => {
    return await Data.getRepository(Short)
      .createQueryBuilder()
      .where("origin_url = :origin_url", { origin_url: origin_url })
      .getOne();
  }

  private getUniqueId = async (): Promise<string> => {
    let id: string;
    let isIdExist: boolean;
    do {
      id = await generateId();
      isIdExist = await Data.getRepository(Short)
        .exist({where: {id: id}})
    } while (isIdExist)
    return id;
  }
}