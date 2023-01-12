import {Form, redirect, useLoaderData} from "react-router-dom";
import {deleteContact} from "../contacts.js";

export async function action({request, params}){
    await deleteContact(params.contactId)
    return redirect("/")
}
export default function DestroyContact(){

}
