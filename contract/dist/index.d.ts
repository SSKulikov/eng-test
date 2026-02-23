export * from './models';
export * from './requests';
export * from './responses';
export interface ApiEndpoint {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    requiresAuth: boolean;
    requiresAdmin?: boolean;
}
export declare const API_ENDPOINTS: {
    readonly AUTH: {
        readonly url: "/auth";
        readonly method: "POST";
        readonly requiresAuth: false;
    };
    readonly ROUNDS: {
        readonly url: "/rounds";
        readonly method: "GET";
        readonly requiresAuth: true;
    };
    readonly ROUND: {
        readonly url: "/round/:uuid";
        readonly method: "GET";
        readonly requiresAuth: true;
    };
    readonly TAP: {
        readonly url: "/tap";
        readonly method: "POST";
        readonly requiresAuth: true;
    };
    readonly CREATE_ROUND: {
        readonly url: "/round";
        readonly method: "POST";
        readonly requiresAuth: true;
        readonly requiresAdmin: true;
    };
};
//# sourceMappingURL=index.d.ts.map