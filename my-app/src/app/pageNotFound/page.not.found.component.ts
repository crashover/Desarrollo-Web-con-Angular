import { Component } from '@angular/core';

@Component({

    selector : 'page-not-found',
    template: `
    <div class="container">
        <div class="row">
            <div class="image center-block">
                <img src="https://objects-us-west-1.dream.io/kbimages/images/Site_Not_Found_Dreambot.fw.png"/>
            </div>
        </div>
                <div class="link">
                    <p><a routerLink="/">Go Home</a></p>
                </div>

    </div>
    `,
    styleUrls: ['./page.not.found.component.css']
})
export class PageNotFoundComponent{
}