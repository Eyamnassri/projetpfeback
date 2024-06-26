import { PartialType } from '@nestjs/mapped-types';
import { CreateQuantityDto } from './create-quantity.dto';

export class UpdateQuantityDto extends PartialType(CreateQuantityDto) {
    id: number;
    name: string | null;
    description: string | null;
    quantityInit: number;
}
