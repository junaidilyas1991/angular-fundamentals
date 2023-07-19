import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostsComponent} from "./posts.component";
import {AppModule} from "../../app.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PostsRoutingModule,
    ],
  declarations: [PostsComponent]
})

export class PostsModule { }
