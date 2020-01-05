import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession, ICognitoUserPoolData} from 'amazon-cognito-identity-js-with-node-fetch';
import {IUserLogin} from '../Beans/IUserLogin';
import {IUserRegistration} from '../Beans/IUserRegistration';
import {CLIENT_ID, USER_POOL_ID} from '../config/CognitoConfig'
import {BusinessException} from '../Exceptions/BussinessException';

export class UserService {
  static addMemberToCognito(request: IUserRegistration) {
    return new Promise(async (resolve, reject) => {
      try {
        const userPoolData: ICognitoUserPoolData = {
          UserPoolId: USER_POOL_ID,
          ClientId: CLIENT_ID
        };
        const userPool = new CognitoUserPool(userPoolData);

        let attributeList = [];
        attributeList.push(
            new CognitoUserAttribute({Name: 'name', Value: request.name}),
            new CognitoUserAttribute({Name: 'email', Value: request.email}));

        userPool.signUp(
            request.name, request.password, attributeList, null,
            function(error, data) {
              if (error) {
                reject(new BusinessException(error.message));
              }

              resolve(true);
            });
      } catch (error) {
        reject(error);
      }
    });
  }

  static doLogin(requestBody: IUserLogin) {
    return new Promise(async (resolve, reject) => {
      let authDetails = new AuthenticationDetails(
          {Username: requestBody.username, Password: requestBody.password});

      const userPoolData: ICognitoUserPoolData = {
        UserPoolId: USER_POOL_ID,
        ClientId: CLIENT_ID
      };
      const userPool = new CognitoUserPool(userPoolData);

      let cognitoUser =
          new CognitoUser({Username: requestBody.username, Pool: userPool});

      cognitoUser.authenticateUser(authDetails, {
        onSuccess: async (session: CognitoUserSession) => {
          resolve({
            access_token: session.getAccessToken().getJwtToken(),
            id_token: session.getIdToken().getJwtToken(),
            refresh_token: session.getRefreshToken().getToken()
          });
        },
        onFailure: (error) => {
          reject(new BusinessException(error.message));
        }
      });
    });
  }
}