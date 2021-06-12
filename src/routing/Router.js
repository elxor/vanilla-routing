import {dom} from './dom';

export class Router {
    constructor(selector, routes) {
        this.placeholder = dom(selector);
        this.routes = routes;
        this.page = null;

        this.destroy();

        this.init();

        this.navs = null;
        this.activeClass = null;
        this.homeId = null;
    }

    activeRoute() {
        return window.location.hash.slice(1);
    }

    init() {
        window.addEventListener('hashchange', () => {
            this.changePageHandler();
            this.activeNavStyle(this.navs, this.activeClass, this.homeId);
        });
        this.changePageHandler();
    }

    changePageHandler = () => {
        if (this.page) {
            this.page.destroy();
        }

        const route = this.activeRoute();

        const Page = Object.keys(this.routes).includes(route)
            ? this.routes[route]
            : this.routes['404'];

        this.page = new Page();

        const root = this.page.getRoot();

        this.placeholder.clear().append(root);

        this.page.afterRender();
    }

    activeNavStyle = (navs, activeClass, homeId) => {
        if (!navs && !activeClass && !homeId) {
            return false;
        }

        this.navs = navs;
        this.activeClass = activeClass;
        this.homeId = homeId;

        const navItems = document.querySelectorAll('.' + navs);
        const id = this.activeRoute();
        const navRoutes = Object.keys(this.routes);

        if (navRoutes.includes(id)) {
            switch (id) {
                case '':
                    navItems.forEach(item =>
                        item.classList.remove(activeClass)
                    );

                    document.querySelector('#' + homeId)
                        .classList.add(activeClass);

                    break;
                default:
                    navItems.forEach(item =>
                        item.classList.remove(activeClass)
                    );

                    document.querySelector('#' + id)
                        .classList.add(activeClass);
            }
        } else {
            navItems.forEach(item =>
                item.classList.remove(activeClass)
            );
        }
    }

    destroy() {
        window.removeEventListener('hashchange', this.changePageHandler);
    }
}