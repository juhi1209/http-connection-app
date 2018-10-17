import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersService } from './services/followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path:'', 
        component: HomeComponent 
      },
      { 
        path:'followers/:id/:username', 
        component:  GithubProfileComponent 
      },
      { 
        path:'followers', 
        component: GithubFollowersComponent 
      },
      { 
        path:'posts',
        component: PostsComponent 
      },
      { 
        path:'**', 
        component: NotFoundComponent 
      },
      
    ])
  ],
  providers: [
    PostService,
    FollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
