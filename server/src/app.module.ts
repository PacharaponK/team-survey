import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Customer } from './customer/entities/customer.entity';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [User, Customer],
      synchronize: process.env.NODE_ENV != 'production',
    }),
    UsersModule,
    AuthModule
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: AuthInterceptor,
  }]
})
export class AppModule { }