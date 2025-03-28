// Advance Typescript API

interface Users{
    id: number,
    name: String,
    email: string,
    createdAt: Date
}

// Pick
type UsersProfile = Pick<Users, "name" | "email">

function NameandEmail(user: UsersProfile){
    console.log(`my name and email is ${user.name} and ${user.email}`)
}
NameandEmail({name: "Aayush", email:"aayush@gmail.com"})


// Partial
type OptionalUserProps = Partial<UsersProfile>
function optionalfunc(user: OptionalUserProps){

}
optionalfunc({})


// Readonly
interface Config{
    endpoint: String,
    apikey: String  
}

const config: Readonly<Config>  = {
    endpoint:"api.xyz",
    apikey: "faferfwew"
}
// config.apikey = "hyrtrtetgt"  //error


// Record
interface users {
    id : number,
    name: string
}
// type user = {[key:string]:users}
type user = Record<string, users>

const obj:user = {
    "ad@1":{
        id:1,
        name: "Aayush"
    },
    "eawa@23":{
        id:2,
        name: "ishant"
    }
}


// Map
const usersMap = new Map();
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

console.log(usersMap.get('abc123'));  //get the value


//Exclude
type UsersWithoutName = Exclude<Users, "name">
function UsersWithoutName(user: UsersWithoutName){
}

// zod inference
import { z } from "zod";
const StringSchema = z.string()
type inferred = z.infer<typeof StringSchema>; 