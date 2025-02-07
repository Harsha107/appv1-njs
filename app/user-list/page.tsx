import React from "react";
import UserListComp from "../components/UserList";

export default function UserList() {
    return (
        <div className="bg-gray-100 mt-16 ml-0 md:ml-64">
            <main className="bg-transparent flex flex-col justify-between m-4">
                <UserListComp />
            </main>
        </div>
    )
}