// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import NewImageCntrl from '../controllers/new-image.controller';
import TaskCntrl from '../controllers/task.controller';
import MembersCntrl from '../controllers/members.controller';
import GamesCntrl from '../controllers/games.controller';
import GameCntrl from '../controllers/game.controller';
import NewGameCntrl from '../controllers/new-game.controller';
import GameSetupCntrl from '../controllers/game-setup.controller';
import CalendarFilter from '../filters/calendar.filter';
import NewGameService from '../services/new-game.service';
import NewImageService from '../services/new-image.service';
import RoutesConfig from '../routes';


const App = 'Vulture';

// App
Angular.module(App, [
  'angular-meteor',
  'accounts.ui',
  'ionic'
]);


new Loader(App)
  .load(NewImageCntrl)
  .load(TaskCntrl)
  .load(MembersCntrl)
  .load(GamesCntrl)
  .load(GameCntrl)
  .load(NewGameCntrl)
  .load(GameSetupCntrl)
  .load(CalendarFilter)
  .load(NewGameService)
  .load(NewImageService)
  .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}
