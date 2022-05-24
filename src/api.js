const serverUrl = "";

const request = (url, method, body, headers) =>
    new Promise((resolve, reject) =>{
        fetch(url, {method: method,
            headers: headers,
            body: body})
            .then(response =>{
                if(response.ok) return response.json();
                else throw response.json();})
            .then(json => resolve(json))
            .catch(error => {error.then(response => resolve(response))})
    })

export const contactForm = (nameAndLastName, email, description) =>
    request(serverUrl + "/contact/form", "POST",
        JSON.stringify({"name": nameAndLastName, "email": email, "description": description}),
        {"Content-Type": "application/json"});