import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MenuModule } from './menu/menu.module';
import { RequestModule } from './request/request.module';
import { ShoppingCartModule } from './shopping_cart/shopping_cart.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [ContactModule, MenuModule, RequestModule, ShoppingCartModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
