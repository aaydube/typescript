"use strict";
// Advance Typescript API
Object.defineProperty(exports, "__esModule", { value: true });
function NameandEmail(user) {
    console.log(`my name and email is ${user.name} and ${user.email}`);
}
NameandEmail({ name: "Aayush", email: "aayush@gmail.com" });
function optionalfunc(user) {
}
optionalfunc({});
const config = {
    endpoint: "api.xyz",
    apikey: "faferfwew"
};
const obj = {
    "ad@1": {
        id: 1,
        name: "Aayush"
    },
    "eawa@23": {
        id: 2,
        name: "ishant"
    }
};
// Map
const usersMap = new Map();
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
console.log(usersMap.get('abc123')); //get the value
function UsersWithoutName(user) {
}
// zod inference
const zod_1 = require("zod");
const StringSchema = zod_1.z.string();
