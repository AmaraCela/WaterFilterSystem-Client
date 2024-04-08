import { UserDTO } from "./UserDTO";

export function getLoggedUserId() {
    return localStorage.getItem("session_user_id");
}

export function getLoggedInUser() {
    const user_id = getLoggedUserId();
    if (!user_id) {
        return null;
    }

    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    return fetch(`${apiUrl}/users/${user_id}`).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to get user", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                return data;
            });
        }
    });
}