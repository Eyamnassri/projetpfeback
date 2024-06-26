import { PartialType } from '@nestjs/mapped-types';
import { CreateUnitDto } from './create-unit.dto';

export class UpdateUnitDto extends PartialType(CreateUnitDto) {
    id: number;
    name: string | null;
    description: string | null;
    value: string | null;
}
