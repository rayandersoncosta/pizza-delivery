import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [
    ClienteModule,
    JwtModule.register({
      global: true,
      secret: '8974637128637832',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
