import { Controller,Get,Query,Ip } from '@nestjs/common';
import {GamesService} from './games.service'

interface ListRequest{
    limit:number;
    page:number;
}

interface GameInfo{
    name:string;

}

@Controller('games')
export class GamesController {
    @Get('/list')
    find(@Query() request,@Ip() ip):Array<GameInfo>{
        console.log(ip)
        return [{
            name:'1'
        }]
    }
}
