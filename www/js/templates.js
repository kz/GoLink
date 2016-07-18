angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('templates/friendMessages.html','<ion-view title="{{data.friend.display_name}} - {{::data.friend.team}}">\n\n  <ion-nav-buttons side="right">\n    <button class="button button-icon button-clear" ui-sref="">\n      <i class=ion-ios-information-outline"></i>\n    </button>\n  </ion-nav-buttons>\n\n  <ion-content lazy-scroll class="content-stable">\n\n    <div ng-show="isLoading">\n      <ion-spinner></ion-spinner>\n      <p>Loading messages</p>\n    </div>\n    <div ng-hide="isLoading || !isInFriendsList || !isConnectedToFriend">\n      <div ng-repeat="message in data.messages" class="messages">\n        <friend-message data="message"></friend-message>\n      </div>\n    </div>\n    <div ng-show="!isLoading && !isInFriendsList">\n      This person is not in your friends list. You must exchange your friend code with this person in order to chat with them.\n    </div>\n    <div ng-show="!isLoading && isInFriendsList && !isConnectedToFriend">\n      <b>{{data.friend.display_name}}</b> needs to add you to their friends list before you can chat with them. Share your friend code with them!\n    </div>\n\n  </ion-content>\n  <ion-footer-bar keyboard-attach class="bar-stable item-input-inset">\n    <label class="item-input-wrapper">\n      <input chat-input type="text" placeholder="Type your message" on-return="sendMessage();" ng-model="data.message" on-focus="inputUp()" on-blur="inputDown()"/>\n    </label>\n    <button class="button button-clear" ng-click="sendMessage();">\n      Send\n    </button>\n    <button class="ion-location" ng-click="showSendLocationPopup();"></button>\n  </ion-footer-bar>\n</ion-view>\n');
$templateCache.put('templates/splash.html','<ion-view title="Splash" hide-nav-bar="true" style="background: linear-gradient(#18125A, #00DCDC);">\n  <ion-content padding="true" class="manual-ios-statusbar-padding">\n    <div>\n      <div class="row">\n        <div class="col col-center logo-icon">\n          <img src="../img/GoLink-icon-512-72ppi.png" height="256" width="256">\n        </div>\n      </div>\n    </div>\n    <ion-spinner class="loading-spinner"></ion-spinner>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('templates/auth/forgotPassword.html','<ion-view title="Forgot Password">\n  <ion-content padding="true" class="has-header">\n    <p style="color:#FFFFFF;">If you have lost your password, type your email below and we will send you reset instructions.</p>\n    <form class="list">\n      <ion-list>\n        <label class="item-input input-box">\n          <input type="email" ng-model="data.email" placeholder="Email address">\n        </label>\n      </ion-list>\n      <button class="button button-balanced button-block generic-button" ng-click="sendResetInstructions();">Send Reset Instructions</button>\n    </form>\n    <a href="#" ui-sref="login" style="font-size:14px;border-radius:0px 0px 0px 0px;"\n       class="button button-positive button-small button-block button-clear misc-button">Remember your credentials? Sign in to an existing account</a>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('templates/auth/login.html','<ion-view title="Login">\n  <ion-content padding="true" class="has-header">\n    <p class="welcome-text">Welcome to GoLink.</p>\n    <p class="welcome-text">Log in to link up with trainers around you.</p>\n    <form class="list">\n      <ion-list>\n        <label class="item-input input-box">\n          <input type="email" placeholder="Email address" ng-model="data.email" ng-required="string" ng-minlength="1" class="text-input">\n        </label>\n        <label class="item-input input-box">\n          <input type="password" placeholder="Password" ng-model="data.password" ng-minlength="1" class="text-input">\n        </label>\n      </ion-list>\n      <button ng-click="login();" class="button button-balanced button-block generic-button">Log in</button>\n      <div class="row" style="horizontal-align:center">\n        <div class="col">\n          <a href="#" ui-sref="signup" style="font-size:14px;border-radius:0px 0px 0px 0px;"\n             class="button button-positive button-small button-block button-clear misc-button">Create an account</a>\n        </div>\n        <div class="col">\n          <a href="#" ui-sref="forgotPassword" style="font-size:14px;border-radius:5px 5px 5px 5px;"\n             class="button button-positive button-small button-block button-clear misc-button">Forgot password?</a>\n        </div>\n      </div>\n\n    </form>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('templates/auth/setup.html','<ion-view title="Profile Setup">\r\n  <ion-content padding="true" class="has-header">\r\n    <p style="color:#FFFFFF;" class="welcome-text">Let\'s get you set up! Enter the details below:</p>\r\n    <p style="color:#FFFFFF;" class="welcome-text">Enter your display name:</p>\r\n    <form class="list">\r\n      <label class="item-input input-box">\r\n        <input type="text" placeholder="Display name" ng-model="data.displayName" class="text-input">\r\n      </label>\r\n    </form>\r\n    <p style="color:#FFFFFF;text-align:center;">What team are you on?</p>\r\n    <form class="list">\r\n      <label class="custom-select">\r\n        <select ng-model="data.team" class="text-input dropdown-box">\r\n          <option value="Instinct">Instinct</option>\r\n          <option value="Mystic">Mystic</option>\r\n          <option value="Valor">Valor</option>\r\n        </select>\r\n      </label>\r\n    </form>\r\n    <button class="button button-balanced button-block generic-button" ng-click="sendSetup();">Save</button>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('templates/auth/signup.html','<ion-view title="Signup">\r\n  <ion-content padding="true" class="has-header">\r\n    <p class="welcome-text">Sign up to chat with local trainers, add trainers as friends and more!</p>\r\n    <form class="list">\r\n      <ion-list>\r\n          <label class="item-input input-box">\r\n          <input type="email" placeholder="Email address" ng-model="data.email">\r\n        </label>\r\n          <label class="item-input input-box">\r\n          <input type="password" placeholder="Password" ng-model="data.password">\r\n        </label>\r\n      </ion-list>\r\n      <button class="button button-balanced button-block generic-button" ng-click="signUp();">Sign up</button>\r\n      <a href="#" ui-sref="login" style="font-size:14px;border-radius:0px 0px 0px 0px;"\r\n         class="button button-positive button-small button-block button-clear misc-button">Sign in to an existing account</a>\r\n    </form>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('templates/directives/friendMessage.html','<div class="message">\n  <div ng-if="data.type === \'message\'">\n    <div class="message-body">\n      <span class="message-contents" style="white-space: pre-line;">{{::data.message}}</span>\n    </div>\n    <div class="message-footer">\n      <span timestamp="{{::data.timestamp}}"></span>\n    </div>\n  </div>\n  <div ng-if="data.type === \'location\'">\n    <div class="message-body">\n      <span class="message-contents">\n        <img\n          image-lazy-src="http://maps.googleapis.com/maps/api/staticmap?center={{::data.latitude}},{{::data.longitude}}&zoom=16&scale=2&size=400x200&maptype=roadmap&format=png&markers=size:mid|color:0xff0000|label:|{{::data.latitude}},{{::data.longitude}}&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true_"\n          image-lazy-loader="lines"\n          width="90%"/>\n      </span>\n    </div>\n    <div class="message-footer">\n      <span timestamp="{{::data.timestamp}}"></span>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('templates/directives/message.html','<div class="message">\n  <div ng-if="data.type === \'message\'">\n    <div class="message-header">\n      <span class="message-display-name">{{::data.user.display_name}}</span> - <span class="message-team">{{::data.user.team}}</span>\n    </div>\n    <div class="message-body">\n      <span class="message-contents" style="white-space: pre-line;">{{::data.message}}</span>\n    </div>\n    <div class="message-footer">\n      <span timestamp="{{::data.timestamp}}"></span><span ng-if="!data.user.is_me"> - {{::data.distance | distanceFormatter}}</span>\n    </div>\n  </div>\n  <div ng-if="data.type === \'location\'">\n    <div class="message-header">\n      <span class="message-display-name">{{::data.user.display_name}}</span> - <span class="message-team">{{::data.user.team}}</span>\n    </div>\n    <div class="message-body">\n      <span class="message-contents">\n        <img\n          image-lazy-src="http://maps.googleapis.com/maps/api/staticmap?center={{::data.latitude}},{{::data.longitude}}&zoom=16&scale=2&size=400x200&maptype=roadmap&format=png&markers=size:mid|color:0xff0000|label:|{{::data.latitude}},{{::data.longitude}}&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true_"\n          image-lazy-loader="lines"\n          width="90%"/>\n      </span>\n    </div>\n    <div class="message-footer">\n      <span timestamp="{{::data.timestamp}}"></span><span ng-if="!data.user.is_me"> - {{::data.distance | distanceFormatter}}</span>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('templates/mainTabs/friends.html','<ion-view title="Friends">\n  <ion-content padding="true" class="has-header">\n    <div ng-show="isLoading">\n      <ion-spinner></ion-spinner>\n      <p>Loading friends</p>\n    </div>\n    <div ng-hide="isLoading">\n      <ion-list>\n        <!--<ion-item>Your friend code is: {{::data.friendCode | friendCodeFormatter}}</ion-item>-->\n        <ion-item class="item-icon-left item" ng-click="showAddFriendPopup();">\n          <i class="icon ion-person-add"></i>Add a friend\n        </ion-item>\n        <ion-item>Your friend code is: <b>{{::data.friendCode | friendCodeFormatter}}</b></ion-item>\n        <div class="spacer" style="width: 300px; height: 10px;"></div>\n      </ion-list>\n      <ion-list>\n        <ion-item ng-repeat="friend in data.friends" ui-sref="friendMessages({friendId: friend.user_id})">\n          {{::friend.display_name}} - {{::friend.team}}<br/>\n          <small>Last messaged: <span timestamp="{{friend.last_messaged}}"></span></small>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('templates/mainTabs/pokedex.html','<ion-view title="Pok\xE9dex">\n  <ion-content padding="true" class="has-header">\n    <p style="color:#000000;">Coming soon!</p>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('templates/mainTabs/publicMessages.html','<ion-view title="Trainers Near Me">\n  <ion-content lazy-scroll class="content-stable">\n\n    <div ng-show="isLoading">\n      <ion-spinner></ion-spinner>\n      <p>Loading messages</p>\n    </div>\n    <div ng-hide="isLoading">\n      <div ng-repeat="message in messages" class="messages">\n        <message data="message"></message>\n      </div>\n    </div>\n\n  </ion-content>\n  <ion-footer-bar keyboard-attach class="bar-stable item-input-inset">\n    <label class="item-input-wrapper">\n      <textarea chat-input="" type="text" placeholder="Type your message" on-return="sendMessage();" ng-model="data.message" on-focus="inputUp()" on-blur="inputDown()"></textarea>\n    </label>\n    <button ng-show="data.message.length !== 0" class="button button-ion button-clear" ng-click="sendMessage();">\n      <i class="ion-android-send"></i>\n    </button>\n    <button ng-show="data.message.length === 0" class="button button-ion button-clear" ng-click="showSendLocationPopup();">\n      <i class="ion-location"></i>\n    </button>\n  </ion-footer-bar>\n</ion-view>\n');
$templateCache.put('templates/mainTabs/settings.html','<ion-view title="Settings">\n  <ion-content padding="true" class="has-header">\n    <div class="list card ">\n      <ion-item>\n        <h2>{{::data.display_name}}</h2>\n        <p>{{::data.team}}</p>\n      </ion-item>\n      <button style="text-align:left;border-radius:10px 10px 10px 10px;" class="button button-dark button-block button-clear icon-left ion-log-out" ng-click="signOut();">Sign Out\n      </button>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('templates/mainTabs/tabsController.html','<ion-view>\n  <ion-tabs class="tabs-positive tabs-icon-only">\n    <ion-tab title="Public Messages" icon="ion-location" href="#/tabscontroller/public-messages" class="">\n      <ion-nav-view name="tabPublicMessages"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title="Friends" icon="ion-person-stalker" href="#/tabscontroller/friends" class="">\n      <ion-nav-view name="tabFriends"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title="Pok\xE9dex" icon="ion-grid" href="#/tabscontroller/pokedex" class="">\n      <ion-nav-view name="tabPokedex"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title="Settings" icon="ion-ios-gear" href="#/tabscontroller/settings" class="">\n      <ion-nav-view name="tabSettings"></ion-nav-view>\n    </ion-tab>\n  </ion-tabs>\n</ion-view>\n');}]);