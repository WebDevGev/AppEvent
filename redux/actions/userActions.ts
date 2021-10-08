// {
//     "id": 1,
//     "email": "g0808m@gmail.com",
//     "firstName": "Gev",
//     "lastName": null,
//     "organizator": false,
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImcwODA4bUBnbWFpbC5jb20iLCJzdWIiOjEsImlhdCI6MTYzMzQzOTkzMCwiZXhwIjoxNjMzNDM5OTkwfQ.gE7K3_6k9q9mxkvLvS05zLSwOpKuLwJjfGSeZ5_nZ-w"
// }

export interface UserModel {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    organizator?: boolean;
    access_token: string
}

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: null;
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: null;
}

export type UserAction = LoginAction | ErrorAction;
