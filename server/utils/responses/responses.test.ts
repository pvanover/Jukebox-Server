import { ResponseCodes } from './codes'
import * as Responses from './responses'

describe('Response Boilerplate Tests', () => {
  const getResJson = (res: any) => res.json.mock.calls[0][0]
  // const res = {
  //   status: jest.fn().mockReturnThis(),
  //   json: jest.fn()
  // }

  it('should return a 200 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpOk(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(200)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(200)
    expect(resJson.type).toBe(ResponseCodes[200])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpOk(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(200)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })
  it('should return a 201 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpCreated(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(201)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(201)
    expect(resJson.type).toBe(ResponseCodes[201])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpCreated(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(201)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 204 status code', () => {
    const res: any = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    Responses.httpNoContent(res as any)
    expect(res.status).toHaveBeenCalledWith(204)
    expect(res.send).toHaveBeenCalled()
    expect(res.json).toBeUndefined()
  })

  it('should return a 400 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpBadRequest(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(400)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(400)
    expect(resJson.type).toBe(ResponseCodes[400])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpBadRequest(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(400)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })
  it('should return a 401 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpUnauthorized(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(401)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(401)
    expect(resJson.type).toBe(ResponseCodes[401])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpUnauthorized(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(401)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })
  it('should return a 403 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpForbidden(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(403)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(403)
    expect(resJson.type).toBe(ResponseCodes[403])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpForbidden(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(403)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })
  it('should return a 404 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpNotFound(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(404)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(404)
    expect(resJson.type).toBe(ResponseCodes[404])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpNotFound(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(404)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 405 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpMethodNotAllowed(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(405)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(405)
    expect(resJson.type).toBe(ResponseCodes[405])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpMethodNotAllowed(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(405)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 409 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpConflict(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(409)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(409)
    expect(resJson.type).toBe(ResponseCodes[409])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpConflict(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(409)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 410 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpGone(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(410)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(410)
    expect(resJson.type).toBe(ResponseCodes[410])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpGone(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(410)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 500 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpInternalServerError(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(500)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(500)
    expect(resJson.type).toBe(ResponseCodes[500])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpInternalServerError(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(500)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })
  it('should return a 501 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpNotImplemented(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(501)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(501)
    expect(resJson.type).toBe(ResponseCodes[501])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpNotImplemented(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(501)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 502 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpBadGateway(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(502)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(502)
    expect(resJson.type).toBe(ResponseCodes[502])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpBadGateway(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(502)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 503 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpServiceUnavailable(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(503)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(503)
    expect(resJson.type).toBe(ResponseCodes[503])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpServiceUnavailable(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(503)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 504 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpGatewayTimeout(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(504)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(504)
    expect(resJson.type).toBe(ResponseCodes[504])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpGatewayTimeout(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(504)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })

  it('should return a 511 status code', () => {
    const res1 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpNetworkAuthenticationRequired(res1 as any, 'Test message', true)
    expect(res1.status).toHaveBeenCalledWith(511)

    const resJson = getResJson(res1)
    expect(resJson.status).toBe(511)
    expect(resJson.type).toBe(ResponseCodes[511])
    expect(resJson.message).toBe('Test message')

    const res2 = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    Responses.httpNetworkAuthenticationRequired(res2 as any, 'Test message', false)
    expect(res2.status).toHaveBeenCalledWith(511)

    const resJson2 = getResJson(res2)
    expect(resJson2).toBe('Test message')
  })
})
