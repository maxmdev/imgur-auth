const request = async (requestUri) => {
    const response = setTimeout(() => {
        window.location.href = requestUri;
    }, 3000)
}