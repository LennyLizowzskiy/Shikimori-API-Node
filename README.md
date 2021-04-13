> Документация на русском: [/README_ru.md](https://github.com/LennyLizowzskiy/Shikimori-API-Node/blob/main/README_ru.md)

# Shikimori Web API wrapper for Node.js

## Table of contents
* [Installation](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#installation)
* [Usage](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#usage)
  * [Prologue](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#prologue)
  * [Authentication](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#authentication)
  * [Requests](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#requests)
  * [API v1](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#api-v1)
  * [API v2](https://github.com/LennyLizowzskiy/Shikimori-API-Node/new/main#api-v2)

## Installation
```npm
npm i shikimori-api-node
```

## Usage
### Prologue
1. Every function is promise.
2. Every 'parameters' variable should be object.
3. Some parameters for methods are not defined in official API documentation (such as `broadcast`).

### Authentication
To get API working you need to login with credentials of your application. Complete first two steps at [shikimori/oauth](https://shikimori.one/oauth).

**Note that authentication code can be used only once and should be renewed by the user itself.**
##### Loggin' in
```javascript
const Shikimori = require('shikimori-api-node');
const shiki = new Shikimori();

shiki.auth.login({
  clientid: 'xxxxxxxxxxxxxx',
  clientsecret: 'xxxxxxxxxxxxxx',
  authcode: 'xxxxxxxxxxxxxx',
  useragent: 'xxxxxx', // only name of your app
  redirecturi: 'xxxxxxxxx' // optional: 'urn:ietf:wg:oauth:2.0:oob' by default
});
```
Authenticates you and `resolves` as credentials object with all info that you may need.

##### Refreshing token
```javascript
shiki.auth.refreshToken();
```
Refreshes token internally and `resolves` as credentials object with updated info.

## Requests
Small lib for API HTTP requests. **Don't put '/' in start of the `method`.** **Every function resolves as HTTP body.**

&nbsp;
```javascript
shiki.api.request.get(method, parameters)
```
`method`: string, `parameters`: object

Performs a **GET** API request.

&nbsp;
```javascript
shiki.api.request.post(method, parameters)
```
`method`: string, `parameters`: object

Performs a **POST** API request.

&nbsp;
```javascript
shiki.api.request.put(method, id, parameters)
```
`method`: string, `id`: integer, `parameters`: object

Performs a **PUT** API request.

&nbsp;
```javascript
shiki.api.request.delete(method, id)
```
`method`: string, `id`: integer

Performs a **DELETE** API request.

## API v1

#### [Achievements](https://shikimori.one/api/doc/1.0/achievements)
```javascript
shiki.api.achievements.get(userid)
```

[List user achievements](https://shikimori.one/api/doc/1.0/achievements.html)

&nbsp;
#
#### [Animes](https://shikimori.one/api/doc/1.0/animes)
```javascript
shiki.api.animes.list(parameters)
```

[Get animes](https://shikimori.one/api/doc/1.0/animes/index)

&nbsp;
```javascript
shiki.api.animes.get(id)
```

[Get the anime with specified id](https://shikimori.one/api/doc/1.0/animes/show)

&nbsp;
```javascript
shiki.api.animes.getRoles(id)
```

[Get the anime's roles](https://shikimori.one/api/doc/1.0/animes/roles.html)

&nbsp;
```javascript
shiki.api.animes.getSimiliar(id)
```

[Get similiar animes to specified](https://shikimori.one/api/doc/1.0/animes/similar.html)

&nbsp;
```javascript
shiki.api.animes.getRelated(id)
```

[Get animes related to specified](https://shikimori.one/api/doc/1.0/animes/related.html)

&nbsp;
```javascript
shiki.api.animes.getScreenshots(id)
```

[Get anime's screenshots](https://shikimori.one/api/doc/1.0/animes/screenshots.html)

&nbsp;
```javascript
shiki.api.animes.getFranchise(id)
```

[Get anime's franchise](https://shikimori.one/api/doc/1.0/animes/franchise.html)

&nbsp;
```javascript
shiki.api.animes.getExternalLinks(id)
```

[Get anime's external links (such as wikipedia or myanimelist ones)](https://shikimori.one/api/doc/1.0/animes/external_links.html)

&nbsp;
```javascript
shiki.api.animes.getTopics(id, parameters)
``` 

[Get anime's topics](https://shikimori.one/api/doc/1.0/animes/topics.html)

&nbsp;
#
#### [Appear](https://shikimori.one/api/doc/1.0/appear)

```javascript
shiki.api.appear.create(ids)
```

[Mark comments or topics as read](https://shikimori.one/api/doc/1.0/appear/create.html)

&nbsp;
#
#### [Bans](https://shikimori.one/api/doc/1.0/bans)
```javascript
shiki.api.bans.list()
``` 

[Get banned users](https://shikimori.one/api/doc/1.0/bans/index)

&nbsp;
#
#### [Calendars](https://shikimori.one/api/doc/1.0/calendars)
```javascript
shiki.api.calendars.get(censored)
```

[Get actual calendar](https://shikimori.one/api/doc/1.0/calendars/show.html)

&nbsp;
#
#### [Characters](https://shikimori.one/api/doc/1.0/characters)
```javascript
shiki.api.characters.get(id)
```

[Get anime character info](https://shikimori.one/api/doc/1.0/characters/show.html)

&nbsp;
```javascript
shiki.api.characters.search(search)
```

[Search characters](https://shikimori.one/api/doc/1.0/characters/search.html)

&nbsp;
#
#### [Clubs](https://shikimori.one/api/doc/1.0/clubs)
```javascript
shiki.api.clubs.list(parameters)
```

[Get clubs](https://shikimori.one/api/doc/1.0/clubs/index)

&nbsp;
```javascript
shiki.api.clubs.update(id, club)
```

[Update club](https://shikimori.one/api/doc/1.0/clubs/update.html)

&nbsp;
```javascript
shiki.api.clubs.get(id)
```

[Get the club with specified id](https://shikimori.one/api/doc/1.0/clubs/show)

&nbsp;
```javascript
shiki.api.clubs.getAnimes(id)
```

[Get club's animes](https://shikimori.one/api/doc/1.0/clubs/animes.html)

&nbsp;
```javascript
shiki.api.clubs.getMangas(id)
```

[Get club's mangas](https://shikimori.one/api/doc/1.0/clubs/mangas.html)

&nbsp;
```javascript
shiki.api.clubs.getRanobe(id)
```

[Get club's ranobe](https://shikimori.one/api/doc/1.0/clubs/ranobe.html)

&nbsp;
```javascript
shiki.api.clubs.getCharacters(id)
```

[Get club's characters](https://shikimori.one/api/doc/1.0/clubs/characters.html)

&nbsp;
```javascript
shiki.api.clubs.getMembers(id)
```

[Get club's members](https://shikimori.one/api/doc/1.0/clubs/members.html)

&nbsp;
```javascript
shiki.api.clubs.getImages(id)
```

[Get club's images](https://shikimori.one/api/doc/1.0/clubs/images.html)

&nbsp;
```javascript
shiki.api.clubs.join(id)
```

[Join club](https://shikimori.one/api/doc/1.0/clubs/join.html)

&nbsp;
```javascript
shiki.api.clubs.leave(id)
```

[Leave club](https://shikimori.one/api/doc/1.0/clubs/leave.html)

&nbsp;
#
#### [Comments](https://shikimori.one/api/doc/1.0/comments)

```javascript
shiki.api.comments.get(id)
```

[Get the comment by specified id](https://shikimori.one/api/doc/1.0/comments/show.html)

&nbsp;
```javascript
shiki.api.comments.list(id, parameters)
```

[List comments](https://shikimori.one/api/doc/1.0/comments/index.html)

&nbsp;
```javascript
shiki.api.comments.create(parameters)
```

[Create comment](https://shikimori.one/api/doc/1.0/comments/create.html)

> **Note:** `broadcast` param stands for comment-broadcast and can be used only by club administrator; `frontend` changes resolve format

&nbsp;
```javascript
shiki.api.comments.update(id, parameters)
```

[Update comment](https://shikimori.one/api/doc/1.0/comments/update.html)

&nbsp;
```javascript
shiki.api.comments.delete(id)
```

[Delete comment](https://shikimori.one/api/doc/1.0/comments/destroy.html)

&nbsp;
#
#### [Constants](https://shikimori.one/api/doc/1.0/constants)
```javascript
shiki.api.constants.anime()
```

[Get anime constants](https://shikimori.one/api/doc/1.0/constants/anime.html)

&nbsp;
```javascript
shiki.api.constants.manga()
```

[Get manga constants](https://shikimori.one/api/doc/1.0/constants/manga.html)

&nbsp;
```javascript
shiki.api.constants.userRate()
```

[Get user rate constants](https://shikimori.one/api/doc/1.0/constants/user_rate.html)

&nbsp;
```javascript
shiki.api.constants.club()
``` 

[Get club constants](https://shikimori.one/api/doc/1.0/constants/club.html)

&nbsp;
```javascript
shiki.api.constants.smileys()
``` 

[Get smiles constants](https://shikimori.one/api/doc/1.0/constants/smileys.html)

&nbsp;
#
#### [Dialogs](https://shikimori.one/api/doc/1.0/dialogs)
```javascript
shiki.api.dialogs.list()
```

[List current user dialogs](https://shikimori.one/api/doc/1.0/dialogs/index.html)

&nbsp;
```javascript
shiki.api.dialogs.get(id)
```

[Get the dialog with specified id](https://shikimori.one/api/doc/1.0/dialogs/show.html)

&nbsp;
```javascript
shiki.api.delete(id)
```

[Delete dialog](https://shikimori.one/api/doc/1.0/dialogs/destroy.html)

&nbsp;
#
#### [Favorites](https://shikimori.one/api/doc/1.0/favorites)
>
> Alias: `shiki.api.favourites`
>

&nbsp;
```javascript
shiki.api.favorites.create(linked_type, linked_id, kind)
```

[Create favourite](https://shikimori.one/api/doc/1.0/favorites/create.html)

&nbsp;
```javascript
shiki.api.favorites.delete(linked_type, linked_id)
```

[Remove favourite](https://shikimori.one/api/doc/1.0/favorites/destroy.html)

&nbsp;
```javascript
shiki.api.favorites.reorder(id, new_index)
```

[Assign new position to a favourite](https://shikimori.one/api/doc/1.0/favorites/reorder.html)


&nbsp;
#
#### [Forums](https://shikimori.one/api/doc/1.0/forums)

```javascript
shiki.api.forums.list()
```

[List forums](https://shikimori.one/api/doc/1.0/forums/index.html)

&nbsp;
#
#### [Friends](https://shikimori.one/api/doc/1.0/friends)

```javascript
shiki.api.friends.add(id)
```

[Add friend](https://shikimori.one/api/doc/1.0/friends/create)

&nbsp;
```javascript
shiki.api.friends.remove(id)
```

[Remove friend](https://shikimori.one/api/doc/1.0/friends/destroy.html)

&nbsp;
#
#### [Genres](https://shikimori.one/api/doc/1.0/genres)

```javascript
shiki.api.genres.list()
```

[List genres](https://shikimori.one/api/doc/1.0/genres/index.html)

&nbsp;
#
#### [Mangas](https://shikimori.one/api/doc/1.0/mangas)

```javascript
shiki.api.mangas.list(parameters)
```

[List mangas](https://shikimori.one/api/doc/1.0/mangas/index.html)

&nbsp;
```javascript
shiki.api.mangas.get(id)
```

[Get the manga with specified id](https://shikimori.one/api/doc/1.0/mangas/show.html)

&nbsp;
```javascript
shiki.api.mangas.getRoles(id)
```

[Get manga's roles](https://shikimori.one/api/doc/1.0/mangas/roles.html)

&nbsp;
```javascript
shiki.api.mangas.getSimilar(id)
```

[Get mangas similar to specified](https://shikimori.one/api/doc/1.0/mangas/similar.html)

&nbsp;
```javascript
shiki.api.mangas.getRelated(id)
```

[Get mangas related to specified](https://shikimori.one/api/doc/1.0/mangas/related.html)

&nbsp;
```javascript
shiki.api.mangas.getFranchise(id)
```

[Get manga's franchise](https://shikimori.one/api/doc/1.0/mangas/franchise.html)

&nbsp;
```javascript
shiki.api.mangas.getExternalLinks(id)
```

[Get manga's external links](https://shikimori.one/api/doc/1.0/mangas/external_links.html)

&nbsp;
```javascript
shiki.api.mangas.getTopics(id, parameters)
```

[Get manga's topics](https://shikimori.one/api/doc/1.0/mangas/topics.html)

&nbsp;
#
#### [Messages](https://shikimori.one/api/doc/1.0/messages)

```javascript
shiki.api.messages.get(id)
```

[Get message with specified id](https://shikimori.one/api/doc/1.0/messages/show.html)

&nbsp;
```javascript
shiki.api.messages.send(message)
```

[Send message](https://shikimori.one/api/doc/1.0/messages/create)

&nbsp;
```javascript
shiki.api.messages.update(id, message)
```

[Update message](https://shikimori.one/api/doc/1.0/messages/update.html)

&nbsp;
```javascript
shiki.api.messages.delete(id)
```

[Delete message](https://shikimori.one/api/doc/1.0/messages/destroy.html)

&nbsp;
```javascript
shiki.api.messages.markAsRead(ids, is_read)
```

[Mark messages as read or unread](https://shikimori.one/api/doc/1.0/messages/mark_read)

&nbsp;
```javascript
shiki.api.messages.markAllAsRead(parameters)
```

[Mark all messages as read](https://shikimori.one/api/doc/1.0/messages/read_all)
> **Note:** `frontend` changes resolve format

&nbsp;
```javascript
shiki.api.messages.deleteAll(parameters)
```

[Delete all messages](https://shikimori.one/api/doc/1.0/messages/delete_all)
> **Note:** `frontend` changes resolve format

&nbsp;
#
#### [People](https://shikimori.one/api/doc/1.0/people)

```javascript
shiki.api.people.get(id)
```

[Get the person by specified id](https://shikimori.one/api/doc/1.0/people/show.html)

&nbsp;
```javascript
shiki.api.people.search(parameters)
```

[Search people](https://shikimori.one/api/doc/1.0/people/search)

&nbsp;
#
#### [Publishers](https://shikimori.one/api/doc/1.0/publishers)

```javascript
shiki.api.publishers.list()
```

[List publishers](https://shikimori.one/api/doc/1.0/publishers/index.html)

&nbsp;
#
#### [Ranobe](https://shikimori.one/api/doc/1.0/ranobe)
```javascript
shiki.api.ranobe.list(parameters)
```

[List ranobe](https://shikimori.one/api/doc/1.0/ranobe/index.html)

&nbsp;
```javascript
shiki.api.ranobe.get(id)
```

[Get the ranobe by specified id](https://shikimori.one/api/doc/1.0/ranobe/show.html)

&nbsp;
```javascript
shiki.api.ranobe.getRoles(id)
```

[Get ranobe's roles](https://shikimori.one/api/doc/1.0/ranobe/roles.html)

&nbsp;
```javascript
shiki.api.ranobe.getSimilar(id)
```

[Get ranobe similar to specified](https://shikimori.one/api/doc/1.0/ranobe/similar.html)

&nbsp;
```javascript
shiki.api.ranobe.getRelated(id)
```

[Get ranobe related to specified](https://shikimori.one/api/doc/1.0/ranobe/related.html)

&nbsp;
```javascript
shiki.api.ranobe.getFranchise(id)
```

[Get ranobe's franchise](https://shikimori.one/api/doc/1.0/ranobe/franchise.html)

&nbsp;
```javascript
shiki.api.ranobe.getExternalLinks(id)
```

[Get ranobe's external links](https://shikimori.one/api/doc/1.0/ranobe/external_links.html)

&nbsp;
```javascript
shiki.api.ranobe.getTopics(id, parameters)
```

[Get ranobe's topics](https://shikimori.one/api/doc/1.0/ranobe/topics.html)

&nbsp;
#
#### [Stats](https://shikimori.one/api/doc/1.0/stats)
```javascript
shiki.api.stats.listActiveUsers()
```

[List users having at least 1 completed animes and active during last month](https://shikimori.one/api/doc/1.0/stats/active_users.html)

&nbsp;
#
#### [Studios](https://shikimori.one/api/doc/1.0/studios)
```javascript
shiki.api.studios.list()
```

[List studios](https://shikimori.one/api/doc/1.0/studios/index.html)

&nbsp;
#
#### [Styles](https://shikimori.one/api/doc/1.0/styles)
```javascript
shiki.api.styles.get(id)
```

[Get style by specified id](https://shikimori.one/api/doc/1.0/styles/show.html)

&nbsp;
```javascript
shiki.api.styles.preview(style)
```

[Preview style](https://shikimori.one/api/doc/1.0/styles/preview.html)

&nbsp;
```javascript
shiki.api.styles.create(style)
```

[Create style](https://shikimori.one/api/doc/1.0/styles/create.html)

&nbsp;
```javascript
shiki.api.styles.update(id, style)
```

[Update style](https://shikimori.one/api/doc/1.0/styles/update.html)

&nbsp;
#
#### [Topics](https://shikimori.one/api/doc/1.0/topics)
```javascript
shiki.api.topics.list(parameters)
```

[List topics](https://shikimori.one/api/doc/1.0/topics/index.html)

&nbsp;
```javascript
shiki.api.topics.getUpdates(parameters)
```

[Get topic's updates](https://shikimori.one/api/doc/1.0/topics/updates.html)

&nbsp;
```javascript
shiki.api.topics.getHot(limit)
```

[Get hot topics](https://shikimori.one/api/doc/1.0/topics/hot.html)

&nbsp;
```javascript
shiki.api.topics.get(id)
```

[Get the topic with specified id](https://shikimori.one/api/doc/1.0/topics/show.html)

&nbsp;
```javascript
shiki.api.topics.create(parameters)
```

[Create topic](https://shikimori.one/api/doc/1.0/topics/create.html)

&nbsp;
```javascript
shiki.api.topics.update(id, parameters)
```

[Update the specified topic](https://shikimori.one/api/doc/1.0/topics/update.html)

&nbsp;
```javascript
shiki.api.topics.delete(id)
```

[Delete the specified topic](https://shikimori.one/api/doc/1.0/topics/destroy.html)

&nbsp;
#
#### [User images](https://shikimori.one/api/doc/1.0/user_images)
```javascript
shiki.api.userImages.create(parameters)
```

[Create an user image](https://shikimori.one/api/doc/1.0/user_images/create.html)

&nbsp;
#
#### [User rates](https://shikimori.one/api/doc/1.0/user_rates)
```javascript
shiki.api.userRates.delete()
```

[Clean entire user rates and history](https://shikimori.one/api/doc/1.0/user_rates/cleanup.html)

&nbsp;
```javascript
shiki.api.userRates.reset()
```

[Reset all user scores to 0](https://shikimori.one/api/doc/1.0/user_rates/reset.html)

&nbsp;
#
#### [Users](https://shikimori.one/api/doc/1.0/users)
```javascript
shiki.api.users.list(parameters)
```

[List users](https://shikimori.one/api/doc/1.0/users/index.html)

&nbsp;
```javascript
shiki.api.users.get(id, is_nickname)
```

[Get user with specified id or username](https://shikimori.one/api/doc/1.0/users/show.html)

&nbsp;
```javascript
shiki.api.users.getBriefInfo(id)
```

[Get user's brief info](https://shikimori.one/api/doc/1.0/users/info.html)

&nbsp;
```javascript
shiki.api.users.whoami()
```

[Get current user's brief info](https://shikimori.one/api/doc/1.0/users/whoami.html)

&nbsp;
```javascript
shiki.api.users.signOut()
```

[Sign out of current user](https://shikimori.one/api/doc/1.0/users/sign_out.html)

&nbsp;
```javascript
shiki.api.users.getFriends(id)
```

[Get user's friends](https://shikimori.one/api/doc/1.0/users/friends.html)

&nbsp;
```javascript
shiki.api.users.getClubs(id)
```

[Get user's clubs](https://shikimori.one/api/doc/1.0/users/clubs.html)

&nbsp;
```javascript
shiki.api.users.getAnimeRates(id, parameters)
```

[Get user's anime rates](https://shikimori.one/api/doc/1.0/users/anime_rates.html)

&nbsp;
```javascript
shiki.api.users.getMangaRates(id, parameters)
```

[Get user's manga rates](https://shikimori.one/api/doc/1.0/users/manga_rates.html)

&nbsp;
```javascript
shiki.api.users.getFavourites(id)
```
Alias method: `shiki.api.users.getFavourites(id)`

[Get user's favourites](https://shikimori.one/api/doc/1.0/users/favourites.html)

&nbsp;
```javascript
shiki.api.users.getMessages(id, parameters)
```

[Get user's messages](https://shikimori.one/api/doc/1.0/users/messages.html)

&nbsp;
```javascript
shiki.api.users.getUnreadMsgCount(id)
```
Alias method: `shiki.api.users.getUnreadMessagesCount(id)`

[Get unread messages count](https://shikimori.one/api/doc/1.0/users/unread_messages.html)

&nbsp;
```javascript
shiki.api.users.getHistory(id, parameters)
```

[Get user's history](https://shikimori.one/api/doc/1.0/users/history)

&nbsp;
```javascript
shiki.api.users.getBans(id)
```

[Get user's blocked ones](https://shikimori.one/api/doc/1.0/users/bans.html)

&nbsp;
#
#### [Videos](https://shikimori.one/api/doc/1.0/videos)
```javascript
shiki.api.videos.list(id)
```

[List videos](https://shikimori.one/api/doc/1.0/videos/index.html)

&nbsp;
```javascript
shiki.api.videos.create(id, parameters)
```

[Create a video](https://shikimori.one/api/doc/1.0/videos/create.html)

&nbsp;
```javascript
shiki.api.videos.delete(anime_id, video_id)
```

[Delete a video](https://shikimori.one/api/doc/1.0/videos/destroy.html)


## API v2

#### [Topics - Topic ignore](https://shikimori.one/api/doc/2.0/Topic%20Ignore)

```javascript
shiki.api.v2.topics.ignore(id, parameters)
```

[Ignore topic](https://shikimori.one/api/doc/2.0/Topic%20Ignore/create.html)

&nbsp;
```javascript
shiki.api.v2.topics.unignore(id)
```

[Unignore topic](https://shikimori.one/api/doc/2.0/Topic%20Ignore/destroy.html)

&nbsp;
#
#### [Users - User ignore](https://shikimori.one/api/doc/2.0/User%20Ignore)

```javascript
shiki.api.v2.users.ignore(id)
```

[Ignore user](https://shikimori.one/api/doc/2.0/User%20Ignore/create.html)

&nbsp;
```javascript
shiki.api.v2.users.unignore(id)
```

[Unignore user](https://shikimori.one/api/doc/2.0/User%20Ignore/destroy.html)

&nbsp;
#
#### [Abuse requests](https://shikimori.one/api/doc/2.0/abuse_requests)

```javascript
shiki.api.v2.abuseRequests.markCommentAsOfftopic(comment_id)
```
Alias method: `shiki.api.v2.abuseRequests.offtopic(comment_id)`

[Mark comment as offtopic](https://shikimori.one/api/doc/2.0/abuse_requests/offtopic.html)

&nbsp;
```javascript
shiki.api.v2.abuseRequests.markCommentAsSummary(comment_id)
```
Alias method: `shiki.api.v2.abuseRequests.summary(comment_id)`

[Mark comment as summary](https://shikimori.one/api/doc/2.0/abuse_requests/summary.html)

&nbsp;
```javascript
shiki.api.v2.abuseRequests.reportRuleViolation(parameters)
```
Alias method: `shiki.api.v2.abuseRequests.summary(parameters)`

[Create abuse about violation of site rules](https://shikimori.one/api/doc/2.0/abuse_requests/abuse.html)

&nbsp;
```javascript
shiki.api.v2.abuseRequests.reportSpoiler(parameters)
```
Alias method: `shiki.api.v2.abuseRequests.spoiler(parameters)`

[Create abuse about spoiler content in comment](https://shikimori.one/api/doc/2.0/abuse_requests/spoiler.html)

&nbsp;
#
#### [Episode notifications](https://shikimori.one/api/doc/2.0/episode_notifications)

```javascript
shiki.api.v2.episodeNotifications.create(parameters)
```

[Notify shikimori about anime episode release](https://shikimori.one/api/doc/2.0/episode_notifications/create.html)

&nbsp;
#
#### [User rates - Main methods](https://shikimori.one/api/doc/2.0/episode_notifications)

```javascript
shiki.api.v2.userRates.get(id)
```

[Get user's rate](https://shikimori.one/api/doc/2.0/user_rates/show.html)

&nbsp;
```javascript
shiki.api.v2.userRates.list(parameters)
```

[List user's rates](https://shikimori.one/api/doc/2.0/user_rates/index.html)

&nbsp;
```javascript
shiki.api.v2.userRates.create(parameters)
```

[Create user rate](https://shikimori.one/api/doc/2.0/user_rates/create.html)

&nbsp;
```javascript
shiki.api.v2.userRates.update(id, parameters)
```

[Update user's rate](https://shikimori.one/api/doc/2.0/user_rates/update.html)

&nbsp;
```javascript
shiki.api.v2.userRates.increment(id)
```

[Increment episodes/chapters by 1](https://shikimori.one/api/doc/2.0/user_rates/increment.html)

&nbsp;
```javascript
shiki.api.v2.userRates.delete(id)
```

[Delete user rate](https://shikimori.one/api/doc/2.0/user_rates/destroy)

#####

#####

#####

## Support

**QIWI:** qiwi.com/n/LENNYLIZOWZSKIY