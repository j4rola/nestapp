import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

import { join } from 'path';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),     
    },
  }), UserModule],
  controllers: [AppController],
  providers: [AppService, UserResolver, UserService],
  
})

export class AppModule {}
