import { UserAction, UserModel } from '../actions/userActions'


type UserState ={
    user: UserModel;
    error: string | undefined
}

const UserReducer = (state: UserState, action: UserAction) =>{

}