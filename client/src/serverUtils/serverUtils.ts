const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export function getLoggedUserId() {
    return localStorage.getItem("session_user_id");
}

export function getLoggedInUser() {
    const user_id = getLoggedUserId();
    if (!user_id) {
        return new Promise ((resolve, reject) => {
            resolve(null);
        });
    }

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

export function retrievePhoneOperatorFromServer() {
    const user_id = getLoggedUserId();
    return fetch(`${apiUrl}/users/phoneOperators/${user_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve user", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                console.log("User data retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve user", error);
        return null;
    });
};

export function retrieveCallsFromServer() {    
    const user_id = getLoggedUserId();
    return fetch(`${apiUrl}/users/phoneOperators/${user_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve user", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                console.log("User data retrieved successfully", data);
                return data.calls;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve user", error);
        return null;
    });
}

export function retrieveCallInfoFromServer(callId: number) {
    return fetch(`${apiUrl}/calls/${callId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve call", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Call data retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve call", error);
        return null;
    });
}

export function retrieveRedListFromServer() {
    return fetch(`${apiUrl}/clients?status=IN_REDLIST`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve redlist", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Redlist data retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve redlist", error);
        return null;
    });
}

export function removeClientFromRedlist(clientId: number) {
    return fetch(`${apiUrl}/clients/${clientId}/redlistremoval`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to remove client from redlist", data.message);
                return false;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Client removed from redlist successfully", data);
                return true;
            });
        }
    }).catch((error) => {
        console.log("Failed to remove client from redlist", error);
        return false;
    });

}

export function logout() {
    localStorage.removeItem("session_user_id");
    window.location.href = "/login";
}