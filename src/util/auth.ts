import {UserSession} from '../models/session';
import {User} from '../models/user';
import axios from 'axios';

class Auth {
    private authenticated: boolean;
    private level: number;

    constructor() {
        this.authenticated = false;
        this.level = 0;
    };

    public login = async (user: User, sessionId: string) => {
        return new Promise((resolve) => {
            this.authenticated = true;
            this.level = user.administrator == 1 ? 2 : 1;
            console.log(user);
            const userSession: UserSession = {
                username: user.username,
                sessionId: sessionId
            };
            sessionStorage.setItem('userSession', JSON.stringify(userSession));
            resolve(this.authenticated);
        });
    };

    public logout = async () => {
        return new Promise((resolve) => {
            this.authenticated = false;
            this.level = 0;
            sessionStorage.removeItem('userSession');
            resolve(this.authenticated);
        });
    };

    public validateSession = async () => {
        return new Promise<boolean>((resolve) => {
            const session = sessionStorage.getItem('userSession');
            if (session != undefined) {
                const userSession: UserSession = JSON.parse(session);
                if (userSession != undefined) {
                    axios.post('http://localhost:3000/auth/validate', userSession).then((res) => {
                        const user: User = res.data.user;
                        console.log(user);
                        this.login(user, userSession.sessionId).then(r => {
                        });
                    }).catch(() => {
                        sessionStorage.removeItem('userSession');
                        this.logout();
                    }).finally(() => {
                        resolve(true);
                    });
                } else {
                    resolve(true);
                }
            } else {
                resolve(true);
            }
        });
    };

    public isAuthenticated = () => {
        return this.authenticated;
    };

    public getUserLevel = () => {
        return this.level;
    };
}

export default new Auth();
