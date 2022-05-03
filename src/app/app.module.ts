import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { TwilioService } from './twilio.service';

@NgModule({
  declarations: [AppComponent, LiveChatComponent, HelloComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TwilioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
