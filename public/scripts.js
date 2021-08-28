const status = document.getElementById('requestStatus');

const redirect = async (requestUri) => {
    // Changes status default message
    const changeStatus = (() => {
        setTimeout(() => {
            status.innerText = 'Redirecting...'
        }, 1500)
    })

    // Redirects user to a callback endpoint
    const response = setTimeout(() => {
        window.location.href = requestUri;
    }, 3000)
}