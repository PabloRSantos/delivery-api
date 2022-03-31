export type HttpResponse = {
    statusCode: number;
    body?: any;
};

export type HttpRequest<T = any, P = any, Q = any> = {
    body?: T;
    query?: Q;
    id_client?: string;
    id_deliveryman?: string;
    headers?: any;
    params?: P;
};
