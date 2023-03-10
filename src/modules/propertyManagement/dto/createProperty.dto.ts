import { IsDateString, IsOptional, IsString } from "class-validator";

class CreatePropertyDto {
  @IsString()
  companyName: string;
  @IsString()
  area: string;
  @IsString()
  address: string;
  @IsDateString()
  establishTime: Date;
  @IsString()
  @IsOptional()
  remark?: string;
}

export default CreatePropertyDto;
