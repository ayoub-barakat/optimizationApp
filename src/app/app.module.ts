import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CamionComponent } from './camion/camion.component';
import { CommandeComponent } from './commande/commande.component';
import { DistinationComponent } from './distination/distination.component';
import { ClientComponent } from './client/client.component';
import { ChantierComponent } from './chantier/chantier.component';
import { UsineComponent } from './usine/usine.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'camions', component: CamionComponent },
  { path: 'commandes', component: CommandeComponent },
  { path: 'distinations', component: DistinationComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'chantiers', component: ChantierComponent },
  { path: 'usines', component: UsineComponent },
  { path: 'search', component: SearchComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    CamionComponent,
    CommandeComponent,
    DistinationComponent,
    ClientComponent,
    ChantierComponent,
    UsineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
