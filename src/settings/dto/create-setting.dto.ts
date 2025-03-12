import {
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsString,
  ValidateIf,
} from 'class-validator';

export enum DataTypeEnum {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  JSON = 'json',
}

export class CreateSettingDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(DataTypeEnum)
  data_type: DataTypeEnum;

  @IsNotEmpty()
  @IsInt()
  account_id: number;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => o.data_type === DataTypeEnum.STRING) // Validate based on data_type
  value: string;
}
