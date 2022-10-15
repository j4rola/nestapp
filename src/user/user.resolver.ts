import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';  
import { UserService } from './user.service';  
import { CreateUserInput, User } from 'src/graphql';  


@Resolver()
export class UserResolver {

    constructor(private userService: UserService){} 

    @Query() 
    users(){
        return this.userService.getAllUsers()
    }

    
    @Mutation('createUser')
    async createUser(@Args('input') args: CreateUserInput): Promise<User> { 
        return this.userService.createUser(args)
    }
   

}


