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

export function retrieveAllSalesAgentFromServer() {
    return fetch(`${apiUrl}/users/salesAgents`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve sales agents", data.message);
                return null;
            });
        } else {
            return response.json().then(data => {
                console.log("Sales agents retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve sales agents, error", error);
        return null;
    });
}

export function retrievePhoneOperatorFromServer() {
    const user_id = getLoggedUserId();
    return fetch(`${apiUrl}/users/phoneOperators/${user_id}`, {
        method: "GET",
        credentials: 'include',
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

export function retrieveSalesAgentFromServer() {
    const user_id = getLoggedUserId();
    return fetch(`${apiUrl}/users/salesAgents/${user_id}`, {
        method: "GET",
        credentials: 'include',
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
        credentials: 'include',
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
        credentials: 'include',
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
        credentials: 'include',
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

export function retrieveWaitlistFromServer() {
    return fetch(`${apiUrl}/clients?status=IN_WAITLIST`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve waitlist", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Waitlist data retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve waitlist", error);
        return null;
    });
}

export function addClientToRedlist(clientId: number) {
    return fetch(`${apiUrl}/clients/${clientId}/redlistaddition`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to add client ro redlist", data.message);
                return false;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Client added to redlist successfully", data);
                return true;
            });
        }
    }).catch((error) => {
        console.log("Failed to add client to redlist", error);
        return false;
    });
}

export function removeClientFromRedlist(clientId: number) {
    return fetch(`${apiUrl}/clients/${clientId}/redlistremoval`, {
        method: "POST",
        credentials: 'include',
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

export function retrieveSchedulesFromServer(agent_id: string) {
    return fetch(`${apiUrl}/users/salesagents/${agent_id}/schedules`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve schedule", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                // console.log("Retrieved schedule", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve schedule", error);
        return null;
    });
}

export function saveScheduleToServer(user_id: string, schedule: any, selectedDays: number[]) {
    for (let selectedDay of selectedDays) {
        const day = new Date();
        day.setDate(day.getDate() + (selectedDay + 7 - day.getDay()) % 7); 
        day.setHours(0, 0, 0, 0);

        const apiUrl = process.env.REACT_APP_API_ENDPOINT;
        if (user_id === null) {
            console.log("Not logged in!");
            return new Promise((resolve, reject) => {
                reject(false);
            });
        }

        const timeslots = schedule[selectedDay];
        for (let i = 0; i < timeslots.length; i++) {
            const timeslot = {
                day: day,
                startTime: timeslots[i].start,
                endTime: timeslots[i].end,
            };

            let method;
            if (timeslots[i].id == -1) {
                method = "POST";
            }
            else {
                method = "PUT";
            }
            
            fetch(`${apiUrl}/users/salesagents/${user_id}/schedules` + (method === "PUT" ? `/${timeslots[i].id}` : ""), {
                method: method,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(timeslot),
            }).then((response) => {
                if (!response.ok) {
                    return response.json().then(data => {
                        console.log("Failed to save schedule", data.message);
                    });
                }
                else {
                    return response.json().then(data => {
                        console.log("Saved schedule", data);
                    });
                }
            });
        }
    }

    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

export function deleteSchedule(user_id: number, schedule_id: number) {
    return fetch(`${apiUrl}/users/salesagents/${user_id}/schedules/${schedule_id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to delete schedule", data.message);
            });
        }
        else {
            return;
        }
    });
}

export function retrieveAllScheduleFromServer() {
    const user_id = getLoggedUserId();

    return fetch(`${apiUrl}/users/salesagents/schedules`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve schedule", data.message);
                return null;
            });
        }
        else {
            return response.json().then(data => {
                // console.log("Retrieved schedule", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve schedule", error);
        return null;
    });
}

export function retrieveAllReferencesFromServer() {
    return fetch(`${apiUrl}/clients?type=References`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve references", data.message);
                return null;
            });
        } else {
            return response.json().then(data => {
                console.log("References retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve references, error", error);
        return null;
    });
}

export function retrieveMeetingsOfAgent(agentid: string) {
    return fetch(`${apiUrl}/meetings?agentid=${agentid}`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve meetings", data.message);
                return null;
            });
        } else {
            return response.json().then(data => {
                console.log("Meetings retrieved successfully", data);
                return data;
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve meetings, error", error);
        return null;
    });
}

export function createNewMeeting(meeting: any) {
    return fetch(`${apiUrl}/meetings`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(meeting),
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to create meeting", data.message);
                return false;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Meeting created successfully", data);
                return true;
            });
        }
    }).catch((error) => {
        console.log("Failed to create meeting", error);
        return false;
    });
}

export function updateClient(client: any) {
    return fetch(`${apiUrl}/clients/${client.id}`, {
        method: "PUT",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to update client", data.message);
                return false;
            });
        }
        else {
            return response.json().then(data => {
                console.log("Client updated successfully", data);
                return true;
            });
        }
    }).catch((error) => {
        console.log("Failed to update client", error);
        return false;
    });
}

export function logout() {
    localStorage.removeItem("session_user_id");
    window.location.href = "/";
}