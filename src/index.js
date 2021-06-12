import { Router } from './routing/Router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Func } from './pages/Func';
import { Help } from './pages/Help';
import { PageNotFound } from './pages/PageNotFound';
import './styles/main.css';

// Add page routing in accordance with links id
const pages = new Router('#app', {
    '': Home,
    'about': About,
    'contact': Contact,
    'func': Func,
    'help': Help,
    '404': PageNotFound
});

// Optional: add style active nav link
// 1 argument - style common links
// 2 argument - style active link
// 3 argument - id home link
pages.activeNavStyle('nav-item', 'active-nav', 'home');