import fs from 'fs';

// Load data from the JSON file
const loadData = (): any[] => {
    try {
        const dataBuffer = fs.readFileSync('./data.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.error('Error loading data:', e);
        return [];
    }
};

// Get function with pagination
const get = (page: number = 1, pageSize: number = 10): any => {
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

// Sort function
const sort = (key: keyof any, order: 'asc' | 'desc' = 'asc'): void => {
    const data = loadData();
    data.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
};

// Filter function
const filter = (key: keyof any, value: any): any[] => {
    const data = loadData();
    return data.filter(item => item[key] === value);
};

// Search function
const search = (key: keyof any, query: string): any[] => {
    const data = loadData();
    return data.filter(item => {
        const field = item[key].toString().toLowerCase();
        return field.includes(query.toLowerCase());
    });
};

export {
    get,
    sort,
    filter,
    search
};