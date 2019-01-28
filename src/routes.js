import Search from 'blacklight-vue/src/components/Search';
import ShowPage from './components/ShowPage';

const Routes = [
  { path: '/item/:id', name: 'show', component: ShowPage },
  { path: '/catalog/:filter?', name: 'search', component: Search }
]

export default Routes
