import {IUserLogin} from '../Beans/IUserLogin';
import {IUserRegistration} from '../Beans/IUserRegistration';
import {Api} from '../Decorators/ApiDecorator';
import {UserService} from '../Service/UserService';

class MemberApi {
  @Api
  static registerMember(event, context) {
    return new Promise(async (resolve, reject) => {
      try {
        let request: IUserRegistration = event.body;
        let response = await UserService.addMemberToCognito(request);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  @Api
  static login(event, context) {
    return new Promise(async (resolve, reject) => {
      try {
        let requestBody: IUserLogin = event.body;
        let response = await UserService.doLogin(requestBody);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }


  /**
   * This method is used to autoconfirm user once user is added to cognito user
   * pool. This is done by setting the autoConfirmUser boolean to true. This
   * method is called during PreSignUp hook.
   * @param event
   * @param context
   * @param callback
   */
  static confirmUser(event, context, callback) {
    console.log(event);
    event.response.autoConfirmUser = true;
    callback(null, event);
  }
}

export const registerMember = MemberApi.registerMember;
export const login = MemberApi.login;
export const confirmUser = MemberApi.confirmUser;