import { Page } from '../routing/Page';
import {dom} from '../routing/dom';

export class PageNotFound extends Page {
    getRoot() {
        return dom.create('div', 'notfound').html(`
            <p class="title">404</p>
            <p>Page Not Found</p>
        `);
    }
}