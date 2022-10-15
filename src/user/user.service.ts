import { Injectable } from '@nestjs/common';
import db from '../../dbProxy'

@Injectable()
export class UserService {

    async getAllUsers(){
        return db
    }

    async createUser(x) {
        db.push(x)
        return x
    }

}
