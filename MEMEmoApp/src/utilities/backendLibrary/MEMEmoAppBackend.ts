//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.2.0.0 (NJsonSchema v11.1.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class Client {
  private http: {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    this.http = http ? http : (window as any);
    this.baseUrl = baseUrl ?? "";
  }

  /**
   * @return OK
   */
  getAllSessions(): Promise<SessionDTO[]> {
    let url_ = this.baseUrl + "/api/Session/get-all-sessions";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGetAllSessions(_response);
    });
  }

  protected processGetAllSessions(response: Response): Promise<SessionDTO[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(SessionDTO.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<SessionDTO[]>(null as any);
  }

  /**
   * @param userId (optional)
   * @return OK
   */
  getPlayerSessions(userId: string | undefined): Promise<SessionDTO[]> {
    let url_ = this.baseUrl + "/api/Session/get-player-sessions?";
    if (userId === null)
      throw new Error("The parameter 'userId' cannot be null.");
    else if (userId !== undefined)
      url_ += "userId=" + encodeURIComponent("" + userId) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGetPlayerSessions(_response);
    });
  }

  protected processGetPlayerSessions(
    response: Response
  ): Promise<SessionDTO[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(SessionDTO.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<SessionDTO[]>(null as any);
  }

  /**
   * @return OK
   */
  getRanking(): Promise<SessionDTO[]> {
    let url_ = this.baseUrl + "/api/Session/get-ranking";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGetRanking(_response);
    });
  }

  protected processGetRanking(response: Response): Promise<SessionDTO[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(SessionDTO.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<SessionDTO[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return OK
   */
  saveSession(body: SessionDTO | undefined): Promise<void> {
    let url_ = this.baseUrl + "/api/Session/save-session";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processSaveSession(_response);
    });
  }

  protected processSaveSession(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        return;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<void>(null as any);
  }

  /**
   * @return OK
   */
  users(): Promise<UserDTO[]> {
    let url_ = this.baseUrl + "/api/User/users";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processUsers(_response);
    });
  }

  protected processUsers(response: Response): Promise<UserDTO[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200) result200!.push(UserDTO.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status === 400) {
      return response.text().then((_responseText) => {
        let result400: any = null;
        let resultData400 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result400 = ProblemDetails.fromJS(resultData400);
        return throwException(
          "Bad Request",
          status,
          _responseText,
          _headers,
          result400
        );
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<UserDTO[]>(null as any);
  }

  /**
   * @param id (optional)
   * @return OK
   */
  user(id: string | undefined): Promise<UserDTO> {
    let url_ = this.baseUrl + "/api/User/user?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += "id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processUser(_response);
    });
  }

  protected processUser(response: Response): Promise<UserDTO> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserDTO.fromJS(resultData200);
        return result200;
      });
    } else if (status === 400) {
      return response.text().then((_responseText) => {
        let result400: any = null;
        let resultData400 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result400 = ProblemDetails.fromJS(resultData400);
        return throwException(
          "Bad Request",
          status,
          _responseText,
          _headers,
          result400
        );
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<UserDTO>(null as any);
  }

  /**
   * @param body (optional)
   * @return OK
   */
  register(body: RegisterUserDto | undefined): Promise<void> {
    let url_ = this.baseUrl + "/api/User/register";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processRegister(_response);
    });
  }

  protected processRegister(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        return;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<void>(null as any);
  }

  /**
   * @param body (optional)
   * @return OK
   */
  login(body: LoginUserDto | undefined): Promise<UserDTO> {
    let url_ = this.baseUrl + "/api/User/login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processLogin(_response);
    });
  }

  protected processLogin(response: Response): Promise<UserDTO> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserDTO.fromJS(resultData200);
        return result200;
      });
    } else if (status === 401) {
      return response.text().then((_responseText) => {
        let result401: any = null;
        let resultData401 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result401 = ProblemDetails.fromJS(resultData401);
        return throwException(
          "Unauthorized",
          status,
          _responseText,
          _headers,
          result401
        );
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<UserDTO>(null as any);
  }

  /**
   * @return OK
   */
  checkConnection(): Promise<boolean> {
    let url_ = this.baseUrl + "/api/Utility/check-connection";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processCheckConnection(_response);
    });
  }

  protected processCheckConnection(response: Response): Promise<boolean> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;

        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<boolean>(null as any);
  }
}

export class LoginUserDto implements ILoginUserDto {
  userName?: string | undefined;
  password?: string | undefined;

  constructor(data?: ILoginUserDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userName = _data["userName"];
      this.password = _data["password"];
    }
  }

  static fromJS(data: any): LoginUserDto {
    data = typeof data === "object" ? data : {};
    let result = new LoginUserDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["userName"] = this.userName;
    data["password"] = this.password;
    return data;
  }
}

export interface ILoginUserDto {
  userName?: string | undefined;
  password?: string | undefined;
}

export class ProblemDetails implements IProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;

  [key: string]: any;

  constructor(data?: IProblemDetails) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      for (var property in _data) {
        if (_data.hasOwnProperty(property)) this[property] = _data[property];
      }
      this.type = _data["type"];
      this.title = _data["title"];
      this.status = _data["status"];
      this.detail = _data["detail"];
      this.instance = _data["instance"];
    }
  }

  static fromJS(data: any): ProblemDetails {
    data = typeof data === "object" ? data : {};
    let result = new ProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    for (var property in this) {
      if (this.hasOwnProperty(property)) data[property] = this[property];
    }
    data["type"] = this.type;
    data["title"] = this.title;
    data["status"] = this.status;
    data["detail"] = this.detail;
    data["instance"] = this.instance;
    return data;
  }
}

export interface IProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;

  [key: string]: any;
}

export class RegisterUserDto implements IRegisterUserDto {
  userName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;

  constructor(data?: IRegisterUserDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userName = _data["userName"];
      this.email = _data["email"];
      this.password = _data["password"];
    }
  }

  static fromJS(data: any): RegisterUserDto {
    data = typeof data === "object" ? data : {};
    let result = new RegisterUserDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["userName"] = this.userName;
    data["email"] = this.email;
    data["password"] = this.password;
    return data;
  }
}

export interface IRegisterUserDto {
  userName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
}

export class SessionDTO implements ISessionDTO {
  userId?: string | undefined;
  score?: number;
  createdAt?: Date;

  constructor(data?: ISessionDTO) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userId = _data["userId"];
      this.score = _data["score"];
      this.createdAt = _data["createdAt"]
        ? new Date(_data["createdAt"].toString())
        : <any>undefined;
    }
  }

  static fromJS(data: any): SessionDTO {
    data = typeof data === "object" ? data : {};
    let result = new SessionDTO();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["userId"] = this.userId;
    data["score"] = this.score;
    data["createdAt"] = this.createdAt
      ? this.createdAt.toISOString()
      : <any>undefined;
    return data;
  }
}

export interface ISessionDTO {
  userId?: string | undefined;
  score?: number;
  createdAt?: Date;
}

export class UserDTO implements IUserDTO {
  id?: string | undefined;
  userName?: string | undefined;
  email?: string | undefined;

  constructor(data?: IUserDTO) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.userName = _data["userName"];
      this.email = _data["email"];
    }
  }

  static fromJS(data: any): UserDTO {
    data = typeof data === "object" ? data : {};
    let result = new UserDTO();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["id"] = this.id;
    data["userName"] = this.userName;
    data["email"] = this.email;
    return data;
  }
}

export interface IUserDTO {
  id?: string | undefined;
  userName?: string | undefined;
  email?: string | undefined;
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}
