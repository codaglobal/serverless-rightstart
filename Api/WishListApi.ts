import {IUser as User} from '../Beans/User';
import {DbConfig} from '../config/DbConfig';
import {UserModel} from '../Dao/Models/User';
import {Api} from '../Decorators/ApiDecorator';
import {BusinessException} from '../Exceptions/BussinessException';
import {SystemException} from '../Exceptions/SystemException';

class WishListApi {
  static getAll(event, context) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await WishListApi.sampleMethod();
        console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateData(event, context) {
    return new Promise(async (resolve, reject) => {
      try {
        let data: User = event.body;
        if (JSON.stringify(data) == '{}') {
          throw new SystemException('No data. System error');
        }
        if (!data.email) {
          throw new BusinessException('Missing email ID');
        }

        resolve({message: 'received data', body: data.email});
      } catch (error) {
        reject(error);
      }
    })
  }

  @Api
  static insertData(event, context) {
    return new Promise(async (resolve, reject) => {
      try {
        let request: User = event.body;
        if (JSON.stringify(request) == '{}') {
          throw new SystemException('No data. System error');
        }

        let insertResult = await UserModel.insertOrUpdate({
          //  id: request.id,
          name: request.name,
          email: request.email
        });

        resolve(insertResult);
      } catch (error) {
        reject(error);
      }
    })
  }

  @Api
  static getUserInfo(event, context) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(event);
        let userId = event.path.userId;
        let response: User;
        if (!userId) {
          throw new BusinessException('User Id is required');
        }

        await UserModel.findOne({where: {id: userId}}).then(user => {
          if (!user) {
            throw new SystemException('User not found in system');
          }

          response = user;
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    })
  }



  static sampleMethod(): Promise<any> {
    let user: User;
    user = {name: 'Arvind', email: 'arvind.muthuraman@coda.global', id: 1024};

    return Promise.resolve(user);
    // return
  }
}

export const getAllWishList = WishListApi.getAll;
export const updateData = WishListApi.updateData;
export const insertData = WishListApi.insertData;
export const getUserInfo = WishListApi.getUserInfo;