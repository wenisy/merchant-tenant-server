import { IsOptional, IsString } from 'class-validator';

class PropertyFilterDto {
  @IsString()
  @IsOptional()
  companyName?: string;

  @IsString()
  @IsOptional()
  area?: string;

  @IsString()
  @IsOptional()
  contact?: string;
}

export default PropertyFilterDto;
