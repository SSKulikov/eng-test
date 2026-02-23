"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINTS = void 0;
// Экспорт всех типов из contract
__exportStar(require("./models"), exports);
__exportStar(require("./requests"), exports);
__exportStar(require("./responses"), exports);
// Константы для эндпоинтов
exports.API_ENDPOINTS = {
    AUTH: {
        url: '/auth',
        method: 'POST',
        requiresAuth: false
    },
    ROUNDS: {
        url: '/rounds',
        method: 'GET',
        requiresAuth: true
    },
    ROUND: {
        url: '/round/:uuid',
        method: 'GET',
        requiresAuth: true
    },
    TAP: {
        url: '/tap',
        method: 'POST',
        requiresAuth: true
    },
    CREATE_ROUND: {
        url: '/round',
        method: 'POST',
        requiresAuth: true,
        requiresAdmin: true
    }
};
//# sourceMappingURL=index.js.map