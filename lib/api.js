const needle = require('needle');

const apilink = 'https://shikimori.one/api';

const objectToParams = (obj) => new URLSearchParams(obj).toString();


class API {
    constructor (shikimori) {
        this.shikimori = shikimori;

        this.request = {
            // method: string, params: object
            async get(method, params) {
                return needle('get', `${apilink}/${method}${(params ? '?'+objectToParams(params) : '')}`, {headers: {'user-agent': `User-Agent: ${shikimori.auth.credentials.useragent}`}}).then((res) => {
                    return res.body;
                });
            },
        
            // method: string, data: object
            async post(method, data) {
                return needle('post', `${apilink}/${method}`, (typeof(data) == 'object' ? data : null), {headers: {'user-agent': `User-Agent: ${shikimori.auth.credentials.useragent}`}}).then((res) => {
                    return res.body;
                });
            },
    
            // method: string, id: integer, data: object
            async put(method, id, data) {
                return needle('put', `${apilink}/${method}/${id}`, data, {headers: {'user-agent': `User-Agent: ${shikimori.auth.credentials.useragent}`}}).then((res) => {
                    return res.body;
                });
            },
    
            // method: string, id: integer
            async delete(method, id) {
                return needle('delete', `${apilink}/${method}/${id}`, null, {headers: {'user-agent': `User-Agent: ${shikimori.auth.credentials.useragent}`}}).then((res) => {
                    return res.body;
                });
            }
        }



        //
        // API METHODS
        //
        
       
        this.achievements = {
            // https://shikimori.one/api/doc/1.0/achievements.html
            async get(userid) {
                return shikimori.api.request.get('achievements', { user_id: userid });
            }
        }
            
        this.animes = {
            // https://shikimori.one/api/doc/1.0/animes/index
            async list(obj) {
                return shikimori.api.request.get('animes', obj);
            },

            // https://shikimori.one/api/doc/1.0/animes/show.html
            async get(id) {
                return shikimori.api.request.get(`animes/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/animes/roles.html
            async getRoles(id) {
                return shikimori.api.request.get(`animes/${id}/roles`);
            },

            // https://shikimori.one/api/doc/1.0/animes/similar.html
            async getSimiliar(id) {
                return shikimori.api.request.get(`animes/${id}/similar`);
            },

            // https://shikimori.one/api/doc/1.0/animes/related.html
            async getRelated(id) {
                return shikimori.api.request.get(`animes/${id}/related`);
            },

            // https://shikimori.one/api/doc/1.0/animes/screenshots.html
            async getScreenshots(id) {
                return shikimori.api.request.get(`animes/${id}/screenshots`);
            },

            // https://shikimori.one/api/doc/1.0/animes/franchise.html
            async getFranchise(id) {
                return shikimori.api.request.get(`animes/${id}/franchise`);
            },

            // https://shikimori.one/api/doc/1.0/animes/external_links.html
            async getExternalLinks(id) {
                return shikimori.api.request.get(`animes/${id}/external_links`);
            },

            // https://shikimori.one/api/doc/1.0/animes/topics.html
            async getTopics(id, obj) {
                return shikimori.api.request.get(`animes/${id}/topics`, obj);
            }
        }

        this.appear = {
            // https://shikimori.one/api/doc/1.0/appear/create.html
            async create(ids) {
                return shikimori.api.request.post('appears', { ids: ids });
            }
        }

        
        this.bans = {
            // https://shikimori.one/api/doc/1.0/bans/index.html
            async list() {
                return shikimori.api.request.get('bans');
            }
        }

        this.calendars = {
            // https://shikimori.one/api/doc/1.0/calendars/show.html
            async get(censored) {
                return shikimori.api.request.get('calendar', { censored: censored });
            }
        }

        this.characters = {
            // https://shikimori.one/api/doc/1.0/characters/show.html
            async get(id) {
                return shikimori.api.request.get(`characters/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/characters/search.html
            async search(search) {
                return shikimori.api.request.get('characters/search', { search: search });
            }
        }
        
        this.clubs = {
            // https://shikimori.one/api/doc/1.0/clubs/index.html
            async list(obj) {
                return shikimori.api.request.get('clubs', obj);
            },

            // https://shikimori.one/api/doc/1.0/clubs/update.html
            async update(id, club) {
                return shikimori.api.request.put(`clubs`, id, { club: club });
            },

            // https://shikimori.one/api/doc/1.0/clubs/show.html
            async get(id) {
                return shikimori.api.request.get(`clubs`, id);
            },

            // https://shikimori.one/api/doc/1.0/clubs/animes.html
            async getAnimes(id) {
                return shikimori.api.request.get(`clubs/${id}/animes`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/mangas.html
            async getMangas(id) {
                return shikimori.api.request.get(`clubs/${id}/mangas`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/ranobe.html
            async getRanobe(id) {
                return shikimori.api.request.get(`clubs/${id}/ranobe`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/characters.html
            async getCharacters(id) {
                return shikimori.api.request.get(`clubs/${id}/characters`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/members.html
            async getMembers(id) {
                return shikimori.api.request.get(`clubs/${id}/members`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/images.html
            async getImages(id) {
                return shikimori.api.request.get(`clubs/${id}/images`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/join.html
            async join(id) {
                return shikimori.api.request.post(`clubs/${id}/join`);
            },

            // https://shikimori.one/api/doc/1.0/clubs/leave.html
            async leave(id) {
                return shikimori.api.request.post(`clubs/${id}/leave`);
            }
        }

        this.comments = {
            // https://shikimori.one/api/doc/1.0/comments/show.html
            async get(id) {
                return shikimori.api.request.get(`comments/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/comments/index.html
            async list(id, obj) {
                return shikimori.api.request.get(`comments/${id}`, obj);
            },

            // https://shikimori.one/api/doc/1.0/comments/create.html
            async create(obj) {
                return shikimori.api.request.post('comments', obj);
            },
            
            // https://shikimori.one/api/doc/1.0/comments/update.html
            async update(id, obj) {
                return shikimori.api.request.put(`comments`, id, obj);
            },
            
            // https://shikimori.one/api/doc/1.0/comments/destroy.html
            async delete(id) {
                return shikimori.api.request.delete('comments', id);
            }
        }
        
        this.constants = {
            // https://shikimori.one/api/doc/1.0/constants/anime.html
            async anime() {
                return shikimori.api.request.get('constants/anime');
            },
            
            // https://shikimori.one/api/doc/1.0/constants/manga.html
            async manga() {
                return shikimori.api.request.get('constants/manga');
            },
            
            // https://shikimori.one/api/doc/1.0/constants/user_rate.html
            async userRate() {
                return shikimori.api.request.get('constants/user_rate');
            },
            
            // https://shikimori.one/api/doc/1.0/constants/club.html
            async club() {
                return shikimori.api.request.get('constants/club');
            },

            // https://shikimori.one/api/doc/1.0/constants/smileys.html
            async smileys() {
                return shikimori.api.request.get('constants/smileys');
            }
        }

        this.dialogs = {
            // https://shikimori.one/api/doc/1.0/dialogs/index.html
            async list() {
                return shikimori.api.request.get('dialogs');
            },

            // https://shikimori.one/api/doc/1.0/dialogs/show.html
            async get(id) {
                return shikimori.api.request.get(`dialogs/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/dialogs/destroy.html
            async delete(id) {
                return shikimori.api.request.delete(`dialogs`, id);
            }
        }

        this.favorites = {
            // https://shikimori.one/api/doc/1.0/favorites/create.html
            async create(type, id, kind) {
                return shikimori.api.request.post(`favorites/${id}/${type}${kind ? '/'+kind : ''}`);
            },

            // https://shikimori.one/api/doc/1.0/favorites/destroy.html
            async delete(type, id) {
                return shikimori.api.request.delete(`favorites`, `${id}/${type}`);
            },

            // https://shikimori.one/api/doc/1.0/favorites/reorder.html
            async reorder(id, newindex) {
                return shikimori.api.request.post(`favorites/${id}/reorder`, { new_index: `${newindex}` });
            }
        }
        this.favourites = this.favorites;

        this.forums = {
            // https://shikimori.one/api/doc/1.0/forums/index.html
            async list() {
                return shikimori.api.request.get('forums');
            }
        }
        
        this.friends = {
            // https://shikimori.one/api/doc/1.0/friends/create.html 
            async add(id) {
                return shikimori.api.request.post(`friends/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/friends/destroy.html
            async remove(id) {
                return shikimori.api.request.delete(`friends`, `${id}`);
            }
        }

        this.genres = {
            // https://shikimori.one/api/doc/1.0/genres/index.html
            async list() {
                return shikimori.api.request.get('genres');
            }
        }

        this.mangas = {
            // https://shikimori.one/api/doc/1.0/mangas/index.html
            async list(obj) {
                return shikimori.api.request.get('mangas', obj);
            },

            // https://shikimori.one/api/doc/1.0/mangas/show.html
            async get(id) {
                return shikimori.api.request.get(`mangas/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/mangas/roles.html
            async getRoles(id) {
                return shikimori.api.request.get(`mangas/${id}/roles`);
            },

            // https://shikimori.one/api/doc/1.0/mangas/similar.html
            async getSimilar(id) {
                return shikimori.api.request.get(`mangas/${id}/similar`);
            },
            
            // https://shikimori.one/api/doc/1.0/mangas/related.html
            async getRelated(id) {
                return shikimori.api.request.get(`mangas/${id}/related`);
            },

            // https://shikimori.one/api/doc/1.0/mangas/franchise.html
            async getFranchise(id) {
                return shikimori.api.request.get(`mangas/${id}/franchise`);
            },

            // https://shikimori.one/api/doc/1.0/mangas/external_links.html
            async getExternalLinks(id) {
                return shikimori.api.request.get(`mangas/${id}/external_links`);
            },

            // https://shikimori.one/api/doc/1.0/mangas/topics.html
            async getTopics(id, obj) {
                return shikimori.api.request.get(`mangas/${id}/topics`, obj);
            }
        }

        this.messages = {
            // https://shikimori.one/api/doc/1.0/messages/show.html
            async get(id) {
                return shikimori.api.request.get(`messages/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/messages/create.html
            async send(message) {
                return shikimori.api.request.post('messages', { message: message });
            },

            // https://shikimori.one/api/doc/1.0/messages/update.html
            async update(id, message) {
                return shikimori.api.request.put(`messages`, id, { message: message });
            },

            // https://shikimori.one/api/doc/1.0/messages/destroy.html
            async delete(id) {
                return shikimori.api.request.delete(`messages`, `${id}`);
            },

            // https://shikimori.one/api/doc/1.0/messages/mark_read.html
            async markAsRead(ids, is_read) {
                return shikimori.api.request.post('messages/mark_read', {
                    ids: ids,
                    is_read: `${is_read}`
                });
            },

            // https://shikimori.one/api/doc/1.0/messages/read_all.html
            async markAllAsRead(obj) {
                return shikimori.api.request.post('messages/read_all', obj);
            },

            // https://shikimori.one/api/doc/1.0/messages/delete_all.html
            async deleteAll(obj) {
                return shikimori.api.request.post('messages/delete_all', obj);
            }
        }

        this.people = {
            // https://shikimori.one/api/doc/1.0/people/show.html
            async get(id) {
                return shikimori.api.request.get(`people/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/people/search.html
            async search(obj) {
                return shikimori.api.request.get('people/search', obj);
            }
        }

        this.publishers = {
            // https://shikimori.one/api/doc/1.0/publishers/index.html
            async list() {
                return shikimori.api.request.get('publishers');
            }
        }

        this.ranobe = {
            // https://shikimori.one/api/doc/1.0/ranobe/index.html
            async list(obj) {
                return shikimori.api.request.get('ranobe', obj);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/show.html
            async get(id) {
                return shikimori.api.request.get(`ranobe/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/roles.html
            async getRoles(id) {
                return shikimori.api.request.get(`ranobe/${id}/roles`);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/similar.html
            async getSimilar(id) {
                return shikimori.api.request.get(`ranobe/${id}/similar`);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/related.html
            async getRelated(id) {
                return shikimori.api.request.get(`ranobe/${id}/related`);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/franchise.html
            async getFranchise(id) {
                return shikimori.api.request.get(`ranobe/${id}/franchise`);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/external_links.html
            async getExternalLinks(id) {
                return shikimori.api.request.get(`ranobe/${id}/external_links`);
            },

            // https://shikimori.one/api/doc/1.0/ranobe/topics.html
            async getTopics(id, parameters) {
                return shikimori.api.request.get(`ranobe/${id}/topics`, parameters);
            }
        }

        this.stats = {
            // https://shikimori.one/api/doc/1.0/stats/active_users.html
            async listActiveUsers() {
                return shikimori.api.request.get('active_users');
            }
        }

        this.studios = {
            // https://shikimori.one/api/doc/1.0/studios/index.html
            async list() {
                return shikimori.api.request.get('studios');
            }
        }

        this.styles = {
            // https://shikimori.one/api/doc/1.0/styles/show.html
            async get(id) {
                return shikimori.api.request.get(`styles/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/styles/preview.html
            async preview(style) {
                return shikimori.api.request.post('styles/preview', { style: style });
            },

            // https://shikimori.one/api/doc/1.0/styles/create.html
            async create(style) {
                return shikimori.api.request.post('styles', { style: style });
            },

            // https://shikimori.one/api/doc/1.0/styles/update.html
            async update(id, obj) {
                return shikimori.api.request.put(`styles`, id, { style: style });
            }
        }

        this.topics = {
            // https://shikimori.one/api/doc/1.0/topics/index.html
            async list(obj) {
                return shikimori.api.request.get('topics', obj);
            },

            // https://shikimori.one/api/doc/1.0/topics/updates.html
            async getUpdates(obj) {
                return shikimori.api.request.get('topics/updates', obj);
            },

            // https://shikimori.one/api/doc/1.0/topics/hot.html
            async getHot(limit) {
                return shikimori.api.request.get('topics/hot', { limit: limit });
            },

            // https://shikimori.one/api/doc/1.0/topics/show.html
            async get(id) {
                return shikimori.api.request.get(`topics/${id}`);
            },

            // https://shikimori.one/api/doc/1.0/topics/create.html
            async create(obj) {
                return shikimori.api.request.post('topics', obj);
            },

            // https://shikimori.one/api/doc/1.0/topics/update.html
            async update(id, obj) {
                return shikimori.api.request.put(`topics`, id, obj);
            },

            // https://shikimori.one/api/doc/1.0/topics/destroy.html
            async delete(id) {
                return shikimori.api.request.delete(`topics`, `${id}`);
            }
        }

        this.userImages = {
            // https://shikimori.one/api/doc/1.0/user_images/create.html 
            async create(obj) {
                return shikimori.api.request.post('user_images', obj);
            }
        }
        
        this.userRates = {
            // https://shikimori.one/api/doc/1.0/user_rates/cleanup.html
            async delete() {
                return shikimori.api.request.delete('user_rates/anime/cleanup');
            },
            
            // https://shikimori.one/api/doc/1.0/user_rates/reset.html
            async reset() {
                return shikimori.api.request.delete('user_rates/anime/reset');
            }
        }

        this.users = {
            // https://shikimori.one/api/doc/1.0/users/index.html
            async list(obj) {
                return shikimori.api.request.get('users', obj);
            },
            
            // https://shikimori.one/api/doc/1.0/users/show.html
            async get(id, isnickname) {
                return shikimori.api.request.get(`users/${id}`, { is_nickname: isnickname });
            },
            
            // https://shikimori.one/api/doc/1.0/users/info.html
            async getBriefInfo(id) {
                return shikimori.api.request.get(`users/${id}/info`);
            },
            
            // https://shikimori.one/api/doc/1.0/users/whoami.html
            async whoami() {
                return shikimori.api.request.get(`users/whoami`);
            },
            
            // https://shikimori.one/api/doc/1.0/users/sign_out.html
            async signOut() {
                return shikimori.api.request.get(`users/sign_out`);
            },
            
            // https://shikimori.one/api/doc/1.0/users/friends.html
            async getFriends(id) {
                return shikimori.api.request.get(`users/${id}/friends`);
            },
            
            // https://shikimori.one/api/doc/1.0/users/clubs.html
            async getClubs(id) {
                return shikimori.api.request.get(`users/${id}/clubs`);
            },
            
            // https://shikimori.one/api/doc/1.0/users/anime_rates.html
            async getAnimeRates(id, obj) {
                return shikimori.api.request.get(`users/${id}/anime_rates`, obj);
            },
            
            // https://shikimori.one/api/doc/1.0/users/manga_rates.html
            async getMangaRates(id, obj) {
                return shikimori.api.request.get(`users/${id}/manga_rates`, obj);
            },
            
            // https://shikimori.one/api/doc/1.0/users/favourites.html
            async getFavourites(id) {
                return shikimori.api.request.get(`users/${id}/favourites`)
            },
            getFavorites: (id) => {return this.getFavourites(id)},
            
            // https://shikimori.one/api/doc/1.0/users/messages.html
            async getMessages(id, obj) {
                return shikimori.api.request.get(`users/${id}/messages`, obj);
            },
            
            // https://shikimori.one/api/doc/1.0/users/unread_messages.html
            async getUnreadMsgCount(id) {
                return shikimori.api.request.get(`users/${id}/unread_messages`);
            },
            getUnreadMessagesCount: (id) => {return this.getUnreadMsgCount(id)},
            
            // https://shikimori.one/api/doc/1.0/users/history.html
            async getHistory(id, obj) {
                return shikimori.api.request.get(`users/${id}/history`, obj);
            },
            
            // https://shikimori.one/api/doc/1.0/users/bans.html
            async getBans(id) {
                return shikimori.api.request.get(`users/${id}/bans`, obj);
            }
        }
        
        this.videos = {
            // https://shikimori.one/api/doc/1.0/videos/index.html
            async list(id) {
                return shikimori.api.request.get(`animes/${id}/videos`);
            },
            
            // https://shikimori.one/api/doc/1.0/videos/create.html
            async create(id, obj) {
                return shikimori.api.request.post(`animes/${id}/videos`, obj);
            },

            // https://shikimori.one/api/doc/1.0/videos/destroy.html
            async delete(animeid, videoid) {
                return shikimori.api.request.delete(`animes/${animeid}/videos/${videoid}`);
            }
        }

        // // // // // // // // // // // //

        this.v2 = {
            topics: {
                // https://shikimori.one/api/doc/2.0/Topic%20Ignore/create.html
                async ignore(id, obj) {
                    return shikimori.api.request.post(`v2/topics/${id}/ignore`, obj);
                },

                // https://shikimori.one/api/doc/2.0/Topic%20Ignore/destroy.html
                async unignore(id) {
                    return shikimori.api.request.delete(`v2/topics`, `${id}/ignore`);
                }
            },

            users: {
                // https://shikimori.one/api/doc/2.0/User%20Ignore/create.html
                async ignore(id) {
                    return shikimori.api.request.post(`v2/users/${id}/ignore`);
                },

                // https://shikimori.one/api/doc/2.0/User%20Ignore/destroy.html
                async unignore(id) {
                    return shikimori.api.request.delete(`v2/users/${id}/ignore`);
                }
            },

            abuseRequests: {
                // https://shikimori.one/api/doc/2.0/abuse_requests/offtopic.html
                async markCommentAsOfftopic(commentid) {
                    return shikimori.api.request.post('v2/abuse_requests/offtopic', { comment_id: commentid });
                },
                offtopic: (id) => {return this.markCommentAsOfftopic(id)},

                // https://shikimori.one/api/doc/2.0/abuse_requests/summary.html
                async markCommentAsSummary(commentid) {
                    return shikimori.api.request.post('v2/abuse_requests/summary', { comment_id: commentid });
                },
                summary: (id) => {return this.markCommentAsSummary(id)},

                // https://shikimori.one/api/doc/2.0/abuse_requests/abuse.html
                async reportRuleViolation(obj) {
                    return shikimori.api.request.post('v2/abuse_requests/abuse', obj);
                },
                ruleAbuse: (id) => {return this.reportRuleViolation(id)},

                // https://shikimori.one/api/doc/2.0/abuse_requests/spoiler.html
                async reportSpoiler(obj) {
                    return shikimori.api.request.post('v2/abuse_requests/abuse', obj);
                },
                spoiler: (id) => {return this.reportSpoiler(id)}
            },

            episodeNotifications: {
                // https://shikimori.one/api/doc/2.0/episode_notifications/create.html
                async create(obj) {
                    return shikimori.api.request.post('v2/episode_notifications', obj);
                }
            },

            userRates: {
                // https://shikimori.one/api/doc/2.0/user_rates/show.html
                async get(id) {
                    return shikimori.api.request.get(`v2/user_rates/${id}`);
                },
                
                // https://shikimori.one/api/doc/2.0/user_rates/index.html
                async list(obj) {
                    return shikimori.api.request.get(`v2/user_rates`, obj);
                },
                
                // https://shikimori.one/api/doc/2.0/user_rates/create.html
                async create(obj) {
                    return shikimori.api.request.post(`v2/user_rates`, obj);
                },
                
                // https://shikimori.one/api/doc/2.0/user_rates/update.html
                async update(id, obj) {
                    return shikimori.api.request.put(`v2/user_rates`, id, obj);
                },
                
                // https://shikimori.one/api/doc/2.0/user_rates/increment.html
                async increment(id) {
                    return shikimori.api.request.post(`v2/user_rates/${id}/increment`);
                },
                
                // https://shikimori.one/api/doc/2.0/user_rates/destroy.html
                async delete(id) {
                    return shikimori.api.request.delete(`v2/user_rates`, id);
                }
            }
        }
    }
}


module.exports = API;