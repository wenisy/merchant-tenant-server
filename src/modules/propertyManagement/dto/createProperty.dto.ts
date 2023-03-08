import { IsOptional, IsString } from 'class-validator';

class CreatePropertyDto {
  @IsString()
  companyName: string;
  @IsString()
  area: string;
  @IsString()
  address: string;
  @IsString()
  establishTime: string;
  @IsString()
  @IsOptional()
  remark?: string;
}

export default CreatePropertyDto;
