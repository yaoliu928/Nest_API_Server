import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?weapon=stars --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    const service = new NinjasService();
    return service.getNinjas(weapon);
  }
  // GET /ninjas/:id --> {...}
  @Get(':id')
  getNinjaById(@Param('id') id: string) {
    return { id };
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }
  // PUT /ninjas/:id --> {...}
  @Put(':id')
  updateNinjaById(
    @Param('id') id: string,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return { id, name: updateNinjaDto.name };
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinjaById(@Param('id') id: string) {
    return { id };
  }
}
