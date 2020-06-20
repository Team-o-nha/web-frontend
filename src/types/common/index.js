// @flow

/**
 * request type 型定義
 * url: api link
 * medthod: method
 * payload: request body
 * params: query
 * cbSuccess: api success callback
 * cbError: api error callback
 * LOADING_ACTION: redux loading action
 * SUCCESS_ACTION: redux success action
 * ERROR_ACTION: redux error action
 */
export type REQUEST_TYPE = {
  url: string,
  method: string,
  payload: {
    data?: { [key: string]: any },
    [key: string]: any
  },
  params?: { [key: string]: any },
  cbSuccess?: (...args: Array<any>) => any,
  cbError?: (url: string, error: any) => any,
  LOADING_ACTION: string,
  SUCCESS_ACTION: string,
  ERROR_ACTION: string
};

/**
 * API共通部分型定義
 * uuid: リクエストユーザID ←トークンによるUIDの取得ができるため、削除する方向（2019/12/24）
 * userid: リクエストユーザID
 * date: リクエスト日時
 * lang: 言語コード
 * storeCode: 店舗コード
 */
export type API_COMMON_PROPS_TYPE = {
  baseUserId: string,
  baseDate: string,
  baseLang: string,
  baseStoreCode: string
};

/**
 * From parent, pass parent's states and setState to child component
 * parentStates: states from parent
 * parentSetStateMethods: parent set state methods
 */
export type STATE_PROPS_FROM_PARENT_TYPE = {
  parentStates: { [key: string]: any },
  parentSetStateMethods: { [key: string]: (...args: Array<any>) => any }
};
