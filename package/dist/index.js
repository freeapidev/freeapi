"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.filter = exports.sort = exports.get = void 0;
const fs_1 = __importDefault(require("fs"));
// Load data from the JSON file
const loadData = () => {
    try {
        const dataBuffer = fs_1.default.readFileSync('data.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        console.error('Error loading data:', e);
        return [];
    }
};
// Get function with pagination
const get = (page = 1, pageSize = 10) => {
    const data = loadData();
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedData = data.slice(startIndex, endIndex);
    return {
        currentPage: page,
        pageSize: pageSize,
        totalItems: data.length,
        totalPages: Math.ceil(data.length / pageSize),
        data: paginatedData
    };
};
exports.get = get;
// Sort function
const sort = (key, order = 'asc') => {
    const data = loadData();
    data.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        }
        else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
};
exports.sort = sort;
// Filter function
const filter = (key, value) => {
    const data = loadData();
    return data.filter(item => item[key] === value);
};
exports.filter = filter;
// Search function
const search = (key, query) => {
    const data = loadData();
    return data.filter(item => {
        const field = item[key].toString().toLowerCase();
        return field.includes(query.toLowerCase());
    });
};
exports.search = search;
//# sourceMappingURL=index.js.map